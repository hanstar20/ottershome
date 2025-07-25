# 이웃집 수달 웹사이트 코드 가이드라인

## 1. 프로젝트 개요

본 문서는 '이웃집 수달' 웹사이트 개발을 위한 코드 가이드라인을 정의합니다. PRD와 TRD에 명시된 기술 스택(Next.js 14 App Router, TypeScript, TailwindCSS, Framer Motion)을 기반으로, 일관되고 유지보수하기 쉬우며 고품질의 코드를 작성하기 위한 표준을 제시합니다. 백엔드 없이 정적 파일(JSON, Markdown) 기반의 콘텐츠 관리와 외부 서비스 연동(네이버 예약, YouTube, 지도 위젯)을 통해 빠르고 안정적인 사용자 경험을 제공하는 것이 목표입니다.

**핵심 아키텍처 결정 사항:**

- **SSG(Static Site Generation) 우선**: 대부분의 페이지는 빌드 시점에 정적으로 생성되어 빠른 로딩과 SEO 최적화를 달성합니다.
- **TypeScript 강제**: 타입 안정성을 확보하여 런타임 오류를 줄이고 코드의 예측 가능성을 높입니다.
- **모노레포 구조**: `pnpm` 워크스페이스를 활용하여 `apps/web`과 `packages/ui`, `packages/lib`, `packages/content` 등으로 코드를 분리하여 재사용성과 관리 효율성을 극대화합니다.
- **외부 서비스 연동**: 네이버 예약은 단순 링크, YouTube 및 지도는 `iframe` 임베드 방식을 사용하며, 복잡한 API 연동은 지양합니다.

## 2. 핵심 원칙

1.  **명확성 (Clarity)**: 코드는 작성자의 의도를 명확히 드러내야 하며, 주석 없이도 이해하기 쉬워야 합니다.
2.  **일관성 (Consistency)**: 프로젝트 전반에 걸쳐 동일한 코딩 스타일, 명명 규칙, 아키텍처 패턴을 유지합니다.
3.  **성능 (Performance)**: 사용자 경험을 최우선으로 고려하여 Lighthouse 점수 90점 이상을 목표로 최적화된 코드를 작성합니다.
4.  **유지보수성 (Maintainability)**: 미래의 변경과 확장을 고려하여 모듈화되고 재사용 가능한 코드를 작성합니다.
5.  **접근성 (Accessibility)**: 모든 사용자가 웹사이트를 동등하게 이용할 수 있도록 WCAG 2.1 AA 표준을 준수합니다.

## 3. 언어 및 프레임워크별 가이드라인

### 3.1 파일 구성 및 디렉토리 구조

**MUST:**

- **도메인 기반 폴더링**: 비즈니스 도메인에 따라 `app` 디렉토리 내에 폴더를 구성합니다.
  ```
  // MUST: 도메인 기반의 명확한 폴더 구조
  app/
  ├── (main)/             // 메인 페이지 그룹 (레이아웃 그룹)
  │   ├── page.tsx
  │   └── _components/    // 해당 라우트에서만 사용되는 컴포넌트
  │       ├── HeroSection.tsx
  │       └── YoutubeSection.tsx
  ├── about/              // '이웃집수달 소개' 도메인
  │   ├── page.tsx
  │   └── _components/
  ├── animals/            // '우리의 동물 친구들' 도메인
  │   ├── page.tsx
  │   └── [slug]/         // 개별 동물 상세 페이지 (동적 라우트)
  │       └── page.tsx
  └── _components/        // 전역 레이아웃 또는 공통 컴포넌트
      ├── Header.tsx
      └── Footer.tsx
  ```
- **모노레포 패키지 분리**: 재사용 가능한 코드와 정적 콘텐츠는 `packages` 아래에 별도 패키지로 분리합니다.
  ```
  // MUST: 모노레포 구조를 통한 명확한 역할 분리
  packages/
  ├── ui/                 // 공유 UI 컴포넌트 (예: Button, Card)
  │   ├── Button.tsx
  │   └── Card.tsx
  ├── lib/                // 공유 유틸리티 함수, 훅, 타입 정의
  │   ├── utils.ts
  │   └── types.ts
  └── content/            // 모든 정적 콘텐츠 데이터
      ├── animals.json
      ├── programs.json
      └── notices/
          └── 2024-01-01-welcome.md
  ```
- **컴포넌트 파일명**: 각 컴포넌트는 `PascalCase`로 명명하고, 파일명과 컴포넌트명을 일치시킵니다. (예: `HeroSection.tsx`)
- **인덱스 파일 사용**: 폴더 내의 기본 내보내기(default export)를 위해 `index.ts` 파일을 사용합니다.

**MUST NOT:**

- **단일 파일에 여러 컴포넌트 정의**: 하나의 파일에 여러 개의 컴포넌트를 정의하지 않습니다.
  ```typescript
  // MUST NOT: 하나의 파일에 여러 컴포넌트 정의
  // components/MyComponents.tsx
  const ComponentA = () => {
    /* ... */
  }
  const ComponentB = () => {
    /* ... */
  }
  export { ComponentA, ComponentB }
  ```
- **불필요한 중첩 폴더**: 과도한 폴더 중첩은 지양합니다.

### 3.2 임포트/의존성 관리

**MUST:**

- **절대 경로 임포트**: `tsconfig.json`의 `paths` 설정을 활용하여 절대 경로 임포트를 사용합니다.
  ```typescript
  // MUST: 절대 경로 임포트 사용
  import { Button } from '@/packages/ui/Button'
  import { getAnimalData } from '@/packages/content/animals'
  ```
- **타입 임포트 명시**: 타입만 임포트할 경우 `import type`을 사용합니다.
  ```typescript
  // MUST: 타입 임포트 명시
  import type { AnimalProfile } from '@/packages/lib/types'
  ```
- **임포트 순서**:
  1.  Node.js 내장 모듈
  2.  서드파티 라이브러리
  3.  절대 경로 임포트 (`@/`)
  4.  상대 경로 임포트 (`./`, `../`)
  5.  CSS/스타일 파일

**MUST NOT:**

- **상대 경로 남용**: `../../`와 같은 깊은 상대 경로 임포트는 지양합니다.

### 3.3 오류 처리 패턴

**MUST:**

- **예측 가능한 오류 처리**: 데이터 로딩 실패, 외부 서비스 연동 실패 등 예측 가능한 오류는 명시적으로 처리합니다.
- **Next.js `error.tsx` 활용**: 라우트 세그먼트 내에서 발생한 오류를 처리하기 위해 `error.tsx` 파일을 활용합니다.
- **`try-catch` 블록**: 비동기 함수 내에서 발생할 수 있는 오류는 `try-catch` 블록으로 감싸 처리합니다.
  ```typescript
  // MUST: 비동기 함수 내 try-catch 블록 사용
  async function fetchData() {
    try {
      const response = await fetch('/api/data') // 실제 API 호출은 없지만 예시
      if (!response.ok) {
        throw new Error('데이터 로딩 실패')
      }
      return await response.json()
    } catch (error) {
      console.error('데이터 로딩 중 오류 발생:', error)
      // 사용자에게 오류 메시지 표시 또는 대체 UI 렌더링
      return null
    }
  }
  ```
- **사용자 친화적 메시지**: 사용자에게 불필요한 기술적 오류 메시지 대신, 이해하기 쉽고 해결 방법을 제시하는 메시지를 제공합니다.

**MUST NOT:**

- **오류 무시**: `catch` 블록에서 오류를 단순히 `console.log`로만 출력하고 무시하지 않습니다.
- **전역 `try-catch`**: 애플리케이션 전체를 하나의 `try-catch`로 감싸는 것은 지양합니다.

## 4. 코드 스타일 규칙

### 4.1 필수 준수 사항 (MUST Follow)

- **TypeScript 사용 강제**: 모든 `.js`, `.jsx` 파일은 `.ts`, `.tsx`로 변환하고, `any` 타입 사용을 최소화합니다.
  - **이유**: 컴파일 타임에 오류를 방지하고, 코드의 가독성 및 유지보수성을 크게 향상시킵니다.

  ```typescript
  // MUST: 명확한 타입 정의
  interface AnimalProfile {
    name: string
    age: number
    personality: string
    images: string[]
  }

  const getOtterProfile = (id: string): AnimalProfile | undefined => {
    // ... 구현
    return { name: '도리', age: 3, personality: '애교쟁이', images: [] }
  }
  ```

- **TailwindCSS 클래스 정렬**: TailwindCSS 클래스는 `prettier-plugin-tailwindcss`를 사용하여 항상 일관된 순서로 정렬합니다.
  - **이유**: 클래스 목록의 가독성을 높이고, 불필요한 Git Diff를 줄입니다.
  ```tsx
  // MUST: TailwindCSS 클래스 정렬 (자동화)
  <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
    {/* ... */}
  </div>
  ```
- **Framer Motion 애니메이션 최적화**: `transform` 및 `opacity` 속성 위주로 애니메이션을 구현하고, `whileInView`를 적극 활용합니다.
  - **이유**: 브라우저의 레이아웃 재계산을 최소화하여 성능 저하를 방지하고, 불필요한 애니메이션 실행을 막습니다.

  ```tsx
  // MUST: Framer Motion 최적화된 애니메이션
  import { motion } from 'framer-motion'

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  ;<motion.div
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.8 }} // 뷰포트 진입 시 1회만 실행
  >
    {/* ... */}
  </motion.div>
  ```

- **`next/image` 사용**: 모든 이미지에는 `next/image` 컴포넌트를 사용합니다. `alt` 속성을 필수로 포함합니다.
  - **이유**: 이미지 최적화(WebP 변환, 사이즈 조정, 지연 로딩) 및 접근성을 자동으로 처리합니다.

  ```tsx
  // MUST: next/image 사용 및 alt 속성 포함
  import Image from 'next/image'

  ;<Image
    src="/images/otter-swimming.jpg"
    alt="수영하는 수달"
    width={500}
    height={300}
    priority // LCP 이미지의 경우
  />
  ```

- **접근성 (A11y) 고려**: 모든 대화형 요소(버튼, 링크)는 키보드 접근성을 고려하고, 시맨틱 HTML 태그를 사용하며, ARIA 속성을 적절히 활용합니다.
  - **이유**: 모든 사용자가 웹사이트를 동등하게 이용할 수 있도록 보장합니다.
  ```tsx
  // MUST: 접근성 고려한 버튼
  <button
    type="button"
    aria-label="메인 페이지로 이동"
    onClick={() => router.push('/')}
  >
    홈으로
  </button>
  ```

### 4.2 금지 사항 (MUST NOT Do)

- **단일 파일에 거대한 책임 부여**: 하나의 파일이나 컴포넌트에 너무 많은 기능을 부여하여 복잡성을 증가시키지 않습니다.
  - **이유**: 코드의 가독성, 유지보수성, 재사용성을 저해합니다.
  ```typescript
  // MUST NOT: 여러 책임이 한 파일에 뭉쳐있음
  // components/MegaComponent.tsx
  // 이 컴포넌트가 데이터 페칭, UI 렌더링, 상태 관리, 유효성 검사 등 모든 것을 처리
  const MegaComponent = () => {
    // ... 데이터 페칭 로직
    // ... 복잡한 상태 관리 로직
    // ... 수십 개의 UI 요소 렌더링
    // ... 유효성 검사 로직
  }
  ```
- **복잡한 전역 상태 관리 패턴 정의**: 정적 사이트의 특성상 복잡한 전역 상태 관리(Redux, Recoil 등)는 도입하지 않습니다.
  - **이유**: 오버헤드가 크고, 빌드 시점에 대부분의 데이터가 결정되는 정적 사이트에는 불필요합니다.
  ```typescript
  // MUST NOT: 불필요하게 복잡한 전역 상태 관리 (예: Redux Store)
  // store/index.ts
  // import { createStore, combineReducers } from 'redux';
  // const rootReducer = combineReducers({ /* ... */ });
  // const store = createStore(rootReducer);
  ```
- **인라인 스타일 남용**: TailwindCSS를 사용하므로 인라인 스타일은 특별한 경우가 아니면 사용하지 않습니다.
  - **이유**: 스타일의 일관성을 해치고, 재사용성을 떨어뜨립니다.
  ```tsx
  // MUST NOT: 인라인 스타일 남용
  <div style={{ backgroundColor: 'red', padding: '10px' }}>{/* ... */}</div>
  ```
- **클라이언트 컴포넌트 남용**: 상호작용이 필요 없는 컴포넌트는 서버 컴포넌트로 유지합니다.
  - **이유**: 초기 로딩 성능을 저해하고, 번들 사이즈를 증가시킵니다.
  ```tsx
  // MUST NOT: 불필요한 'use client'
  // components/StaticContent.tsx
  // 'use client'; // 이 컴포넌트는 상호작용이 없으므로 불필요
  // const StaticContent = () => <p>정적 콘텐츠입니다.</p>;
  ```

## 5. 아키텍처 패턴

### 5.1 컴포넌트/모듈 구조 가이드라인

**MUST:**

- **서버 컴포넌트 우선**: 가능한 모든 컴포넌트는 서버 컴포넌트로 작성합니다. 사용자 상호작용, 이벤트 핸들링, React Hooks(`useState`, `useEffect` 등)가 필요한 경우에만 `use client` 지시어를 사용하여 클라이언트 컴포넌트로 전환합니다.
  - **이유**: 초기 로딩 성능을 최적화하고 서버에서 데이터를 가져와 렌더링함으로써 SEO에 유리합니다.
- **재사용 가능한 컴포넌트 분리**: 여러 페이지에서 사용되는 UI 요소(버튼, 카드, 모달 등)는 `packages/ui`에 정의합니다.
- **페이지 전용 컴포넌트**: 특정 페이지에서만 사용되는 컴포넌트는 해당 페이지 폴더 내의 `_components` 디렉토리에 배치합니다.
- **Prop Drilling 최소화**: 깊은 컴포넌트 트리에 데이터를 전달해야 할 경우, React Context API를 사용하여 Prop Drilling을 피합니다. (단, 전역 상태 관리가 아닌 특정 서브트리 내에서의 공유 목적)

### 5.2 데이터 흐름 패턴

**MUST:**

- **빌드 시점 데이터 로딩**: 모든 정적 콘텐츠(동물 프로필, 프로그램 정보, 공지사항 등)는 빌드 시점에 `packages/content` 디렉토리에서 직접 로드합니다.
  - **이유**: 런타임에 데이터베이스나 API 서버에 의존하지 않아 성능과 안정성을 극대화합니다.

  ```typescript
  // MUST: 빌드 시점 데이터 로딩 (Next.js 서버 컴포넌트에서)
  // app/animals/page.tsx
  import { getAnimalProfiles } from '@/packages/content/animals'; // 파일 시스템에서 데이터 로드

  export default async function AnimalsPage() {
    const animals = await getAnimalProfiles(); // 비동기로 데이터 로드
    return (
      <div>
        {animals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    );
  }
  ```

- **단방향 데이터 흐름**: React의 단방향 데이터 흐름 원칙을 준수하여 데이터의 예측 가능성을 높입니다. 부모 컴포넌트에서 자식 컴포넌트로 props를 통해 데이터를 전달합니다.

### 5.3 상태 관리 규칙

**MUST:**

- **로컬 상태 우선**: 컴포넌트 내부에서만 필요한 상태는 `useState` 훅을 사용하여 관리합니다.
- **Context API 활용**: 특정 컴포넌트 서브트리 내에서 여러 컴포넌트가 공유해야 하는 상태는 React Context API를 사용합니다.
  - **이유**: Prop Drilling을 피하고, 전역 상태 관리 라이브러리의 복잡성 없이 필요한 범위 내에서 상태를 공유합니다.

  ```typescript
  // MUST: Context API를 사용한 상태 공유 (예: 모달 상태)
  // contexts/ModalContext.tsx
  'use client'; // 클라이언트 컴포넌트

  import { createContext, useContext, useState, ReactNode } from 'react';

  interface ModalContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
  }

  const ModalContext = createContext<ModalContextType | undefined>(undefined);

  export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
      <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
        {children}
      </ModalContext.Provider>
    );
  };

  export const useModal = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
      throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
  };
  ```

- **Zustand (필요 시 최소한으로)**: 전역적으로 공유되어야 하지만 Context API만으로는 관리가 번거로운 경량 상태(예: 테마 설정, 언어 설정)에 한해 Zustand를 사용합니다. 과도한 사용은 지양합니다.

**MUST NOT:**

- **불필요한 전역 상태 관리 라이브러리 도입**: Redux, Recoil 등 복잡한 전역 상태 관리 라이브러리는 정적 웹사이트의 특성상 도입하지 않습니다.

### 5.4 API 설계 표준 (해당 없음)

본 프로젝트는 백엔드 API 서버를 구축하지 않으므로, 내부 API 설계 표준은 적용되지 않습니다. 외부 서비스 연동은 `iframe` 임베드 또는 단순 링크 리다이렉션으로 이루어집니다.

## 6. 품질 기준 및 검증

- **ESLint 및 Prettier**: 코드 포맷팅 및 기본적인 코드 품질 검사는 ESLint와 Prettier를 통해 자동화하고, Git Pre-commit Hook으로 강제합니다.
- **TypeScript 컴파일**: 모든 코드는 TypeScript 컴파일러를 통과해야 합니다. (`tsc --noEmit`)
- **Lighthouse 점수**: 배포 전 Lighthouse를 통해 성능, 접근성, SEO 점수를 측정하고, PRD에 명시된 목표 점수를 달성해야 합니다.
- **크로스 브라우징 및 반응형 테스트**: 주요 브라우저(Chrome, Safari, Edge) 및 다양한 디바이스(모바일, 태블릿, 데스크톱)에서 정상적으로 동작하는지 수동 및 자동 테스트를 수행합니다.
