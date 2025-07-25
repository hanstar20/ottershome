## Gemini Added Memories

- mcp server is http://127.0.0.1:3845/sse
- mcp server is http://127.0.0.1:3845/sse

# TypeScript 작성 규칙

- 항상 strict 모드로 작성한다.
- 명시적 타입 선언을 우선한다.
- any는 사용하지 않는다.
- unknown은 사용할 경우 반드시 타입 검사를 포함한다.
- 의미 있는 interface 또는 type alias를 통해 도메인 모델을 정의한다.

# 코드 품질 및 스타일 원칙

- 다음 기준을 모두 충족하는 코드를 작성한다:
  - 효율성
  - 가독성
  - 확장성
  - 유지보수성

- 함수는 단일 책임 원칙(SRP)을 따른다.
- 가능한 경우 순수 함수로 작성한다.
- side-effect는 격리한다.
- 조건문/반복문에는 항상 중괄호를 사용한다.
- 변수/함수명은 명확하고 간결하게 작성한다.
- 불필요한 코드는 즉시 제거한다.
- Prettier, ESLint 스타일을 따른다.

# 테스트 주도 개발(TDD) 원칙

- 항상 Red → Green → Refactor 순으로 테스트를 진행한다.
- 테스트 단계를 다음과 같이 구분한다:
  1. 실패하는 테스트 작성 (Red)
  2. 최소 구현 코드로 통과 (Green)
  3. 리팩토링 (Refactor)
- 테스트에는 다음을 반드시 포함한다:
  - 정상 시나리오
  - 예외 상황 처리
  - 경계 조건 및 유효성 검사
- 테스트 코드는 명세서로 활용될 수 있어야 한다.

# 외부 의존성과 보안 규칙

- 외부 라이브러리는 반드시 필요한 경우에만 도입한다.
- 가능하면 외부 의존성 없이 직접 구현한다.
- import는 최소화하고 side-effect 없이 구성한다.
- API 키, 비밀번호, 토큰 등 민감 정보는 절대 하드코딩하지 않는다.
- 민감 정보는 환경 변수로 관리하고 .env 파일을 .gitignore에 포함시킨다.

# 예외 처리 기준

- 가능한 경우 try-catch를 사용한다.
- catch 블록에서는 가능한 한 throw를 사용한다.
- 오류 상태에서 return을 사용하는 경우, 에러임을 나타내는 구조로 반환한다.
- 에러 메시지는 디버깅에 실질적으로 도움이 되도록 구체적으로 작성한다.

# 작업 범위 및 제한 규칙

- 사용자의 명시적 요청 없이 다음 작업은 하지 않는다:
  - 현재 파일 외의 다른 파일 수정
  - 외부 모듈 추가
  - 코드 구조 변경
  - 함수 삭제 또는 병합
  - 리팩토링 및 책임 분리

- 모든 수정 작업은 요청에 근거해야만 수행한다.

# 역할 및 응답 방식 규칙

- 당신은 항상 시니어 풀스택 개발자로 행동한다.
- 사용자는 주니어 개발자라고 가정하고 설명을 제공한다.
- 응답 시 다음을 지킨다:
  - 계획 수립 후 실행
  - 모든 기능을 완전히 구현
  - DRY 원칙 준수
  - 성능과 가독성 고려
  - 코드에 대한 충분한 설명 포함
  - 코드로 설명이 가능할 경우 불필요한 주석 생략
  - 모르면 "모름"이라 명시하고, 추가 조사가 필요한 경우 이를 밝힌다.
  - 기본 응답 언어는 한국어이다.

  # 작동 모드 규칙 (PLAN / ACT)

## 계획 모드 (Plan Mode)

- AI는 항상 계획 모드에서 시작한다.
- 계획 모드에서는 코드 수정/생성 작업을 하지 않는다.
- ACT라고 명시적으로 지시하지 않는 한 실행 모드로 전환하지 않는다.
- 사용자 입력이 PLAN이거나 작업이 완료되면 자동으로 계획 모드로 복귀한다.
- 계획 모드에서는 다음 작업만 수행 가능하다:
  - 사용자 요구사항 수집
  - 설계 및 작업 계획 수립
- 계획 승인 없이 실행 지시가 있는 경우, 다음 메시지를 출력한다:

  현재 계획 모드입니다. 계획이 승인되기 전에는 작업을 수행할 수 없습니다.

## 실행 모드 (Act Mode)

- ACT 명령어로 전환된다.
- 계획된 작업을 수행하며, 작업 완료 후 자동으로 계획 모드로 복귀한다.

## 응답 시작 표시

- 계획 모드:

  `# Mode: PLAN`

- 실행 모드:
  `# Mode: ACT`

# --- 프로젝트별 추가 룰 ---

# 기술 요구사항 명세서 (TRD)

## 1. Executive Technical Summary

- **프로젝트 개요**: 본 문서는 '이웃집 수달' 웹사이트 구축을 위한 기술적 접근법과 아키텍처를 정의합니다. Next.js의 정적 사이트 생성(SSG) 기능을 최대한 활용하여 별도의 백엔드 서버와 데이터베이스 없이, 빠르고 안정적이며 검색 엔진에 최적화된 정보 제공 및 마케팅 웹사이트를 구축하는 것을 목표로 합니다. 모든 콘텐츠는 정적 파일(JSON, Markdown)로 관리하며, 예약 기능은 네이버 예약으로, 미디어 콘텐츠는 YouTube 임베드를 통해 외부 서비스와 연동합니다.
- **핵심 기술 스택**: 프론트엔드 프레임워크로 **Next.js 14 (App Router)**를 사용하며, **TypeScript**로 타입 안정성을 확보합니다. UI는 **TailwindCSS**로 신속하게 개발하고, **Framer Motion**을 통해 생동감 있는 사용자 경험을 제공합니다.
- **주요 기술 목표**:
  - **성능**: Lighthouse 성능 점수 90점 이상, 페이지 로드 시간 3초 이내 달성.
  - **안정성**: 서버리스 정적 호스팅을 통해 99.9% 이상의 가용성 확보.
  - **SEO**: 모든 페이지에 대한 완벽한 SEO 최적화 및 Lighthouse SEO 점수 95점 이상 달성.
  - **접근성**: WCAG 2.1 AA 표준 준수 및 Lighthouse 접근성 점수 100점 목표.
- **핵심 기술 가정**:
  - 백엔드 애플리케이션 및 데이터베이스는 구축하지 않습니다.
  - 모든 콘텐츠(동물 프로필, 공지사항 등)는 Git을 통해 버전 관리되는 정적 파일 형태로 관리되며, 업데이트 시 재배포(re-deploy)가 필요합니다.
  - 예약 기능은 전적으로 외부 서비스인 '네이버 예약'에 의존하며, 본 웹사이트는 해당 페이지로 사용자를 안내하는 역할만 수행합니다.
  - 사용자 인증 및 로그인 기능은 요구되지 않습니다.

## 2. 기술 스택

| 카테고리        | 기술 / 라이브러리                        | 선정 사유                                                                                                                                                                     |
| :-------------- | :--------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **프레임워크**  | Next.js 14+ (App Router)                 | 정적 사이트 생성(SSG)에 최적화되어 빠른 로딩 속도와 우수한 SEO 성능을 보장합니다. App Router는 서버 컴포넌트를 활용하여 초기 로딩 성능을 극대화합니다.                        |
| **언어**        | TypeScript                               | 컴파일 타임에 타입을 검사하여 코드의 안정성과 유지보수성을 높입니다. 정적 데이터 구조를 명확하게 정의하는 데 필수적입니다.                                                    |
| **스타일링**    | TailwindCSS                              | 유틸리티 우선 접근 방식으로 빠르고 일관된 UI 개발이 가능하며, 반응형 디자인을 효율적으로 구현할 수 있습니다. `clsx`와 함께 사용합니다.                                        |
| **애니메이션**  | Framer Motion                            | 선언적인 API를 통해 복잡하고 미려한 애니메이션을 쉽게 구현할 수 있으며, Next.js와 통합이 용이합니다. PRD의 동적인 UI 요구사항을 충족합니다.                                   |
| **상태 관리**   | Zustand / React Context API              | 전역 상태가 거의 없는 정적 사이트 특성상, 간단한 클라이언트 상태는 Context API로, 필요 시 가벼운 전역 상태는 Zustand로 관리하여 오버헤드를 최소화합니다.                      |
| **UI 컴포넌트** | Radix UI (Headless) / Lucide React       | Radix UI는 접근성이 보장된 헤드리스 컴포넌트를 제공하여 TailwindCSS와 결합 시 커스텀 디자인 구현이 용이합니다. Lucide React는 가볍고 일관된 아이콘을 제공합니다.              |
| **콘텐츠 관리** | JSON / Markdown 파일                     | 데이터베이스 없이 동물 프로필, 프로그램 정보, 공지사항 등을 정적 파일로 관리합니다. Git으로 버전 관리가 가능하며, 비개발자의 콘텐츠 수정 용이성을 위해 마크다운을 활용합니다. |
| **지도**        | 카카오맵/네이버맵 웹 위젯                | 별도 API 키 발급 없이 제공되는 공식 임베드 코드를 사용하여 '오시는 길' 페이지에 지도를 간편하게 통합합니다.                                                                   |
| **배포/호스팅** | 직접 서버 또는 원하는 정적 호스팅 서비스 | Vercel 등 자동화된 플랫폼을 사용하지 않고, 빌드 산출물을 직접 서버에 업로드하거나 원하는 정적 호스팅 서비스(예: Netlify, GitHub Pages, 자체 서버 등)에 수동 배포합니다.       |

## 3. 시스템 아키텍처 설계

### 최상위 빌딩 블록

- **Next.js 프론트엔드 애플리케이션**: 사용자와 직접 상호작용하는 핵심 웹 애플리케이션입니다.
  - **하위 블록**: App Router 기반 라우팅, 서버 컴포넌트(SSG), 클라이언트 컴포넌트(상호작용 UI), `next/image`를 통한 이미지 최적화.
- **정적 콘텐츠 저장소**: 프로젝트 내 로컬 디렉토리에 위치하며, 웹사이트의 모든 데이터를 담고 있는 파일 기반 저장소입니다.
  - **하위 블록**: 동물 프로필(`json`), 프로그램 정보(`json`), 공지사항(`md`), FAQ(`json`).
- **외부 서비스 연동**: 웹사이트 기능을 보강하기 위해 임베드 또는 링크 형태로 연동되는 서드파티 서비스입니다.
  - **하위 블록**: 네이버 예약(단순 링크), YouTube 임베드(`iframe`), 카카오/네이버 지도 위젯(`iframe`), 인스타그램 위젯(임베드 코드).

### 최상위 컴포넌트 상호작용 다이어그램

```mermaid
graph TD
    subgraph "사용자 환경"
        A[사용자 브라우저]
    end

subgraph "배포 서버 또는 정적 호스팅 환경"
    B[Next.js 애플리케이션]
end

    subgraph "프로젝트 저장소 (Git)"
        C[정적 콘텐츠 저장소<br>(JSON, MD 파일)]
    end

    subgraph "외부 서비스"
        D[네이버 예약]
        E[YouTube]
        F[카카오/네이버 지도]
    end

    A -- HTTPS 요청 --> B
    B -- 빌드 시 데이터 로드 --> C
    B -- 렌더링 --> A
    A -- 하이퍼링크 클릭 --> D
    A -- iframe 임베드 --> E
    A -- iframe 임베드 --> F
```

- 사용자는 브라우저를 통해 수동 배포된 Next.js 애플리케이션에 접속합니다.
- Next.js 애플리케이션은 빌드 시점에 Git 저장소 내의 정적 콘텐츠(JSON, MD 파일)를 읽어와 정적 HTML 페이지를 생성합니다.
- 생성된 페이지는 직접 관리하는 서버 또는 선택한 정적 호스팅 환경을 통해 사용자에게 제공됩니다.
- 사용자는 페이지 내에서 '네이버 예약' 버튼을 클릭하여 외부 예약 사이트로 이동하거나, 임베드된 YouTube 영상 및 지도를 직접 조작합니다.

### 코드 구성 및 규칙

**도메인 주도 구성 전략**

- **도메인 분리**: 비즈니스 도메인을 기준으로 코드를 구성합니다. 예: `user-journey` (메인, 소개), `animal-world` (동물 친구들), `visitor-center` (이용안내, 예약), `community-hub` (커뮤니티).
- **레이어 기반 아키텍처**: 각 도메인 내에서 `components`, `lib`, `data` 등 기술적 관심사를 분리하여 구조를 명확히 합니다.
- **기능 기반 모듈**: 특정 페이지나 기능을 구성하는 파일들을 하나의 폴더에 그룹화합니다. (예: `app/(main)/page.tsx`, `app/(main)/_components/hero-section.tsx`)
- **공유 컴포넌트**: 여러 도메인에서 재사용되는 UI 컴포넌트, 타입, 유틸리티 등은 `packages/ui`, `packages/lib` 등 공유 모듈에 배치합니다.

**범용 파일 및 폴더 구조 (모노레포)**

pnpm 워크스페이스를 사용한 모노레포 구조를 채택하여 코드 재사용성과 관리 효율성을 높입니다.

```
/
├── apps
│   └── web/                  # Next.js 애플리케이션
│       ├── app/              # App Router 디렉토리
│       │   ├── (main)/       # 메인 페이지 그룹
│       │   │   ├── page.tsx
│       │   │   └── _components/
│       │   ├── about/        # 소개 페이지
│       │   ├── animals/      # 동물 친구들 페이지
│       │   ├── community/    # 커뮤니티 페이지
│       │   ├── info/         # 이용 안내 페이지
│       │   ├── programs/     # 프로그램 및 예약 페이지
│       │   ├── layout.tsx    # 루트 레이아웃
│       │   └── globals.css   # 전역 스타일
│       ├── components/       # web 앱 전용 비공유 컴포넌트
│       ├── public/           # 정적 에셋 (이미지, 폰트)
│       ├── next.config.mjs
│       └── package.json
├── packages
│   ├── ui/                   # 공유 UI 컴포넌트 (Button, Card 등)
│   ├── config/               # 공유 설정 (ESLint, TypeScript)
│   ├── lib/                  # 공유 유틸리티, 훅, 타입 정의
│   └── content/              # 정적 콘텐츠 (JSON, Markdown)
│       ├── animals.json
│       ├── programs.json
│       └── notices/
│           └── 2024-01-01-hello.md
├── package.json
└── pnpm-workspace.yaml
```

### 데이터 흐름 및 통신 패턴

- **클라이언트-서버 통신**: 대부분의 페이지는 SSG로 생성되어 서버 통신이 거의 없습니다. 클라이언트 사이드 네비게이션은 Next.js 라우터를 통해 이루어지며, 필요한 데이터는 페이지 props로 이미 전달된 상태입니다.
- **데이터베이스 상호작용**: 해당 없음. 모든 데이터는 빌드 시점에 `packages/content` 디렉토리의 정적 파일로부터 로드됩니다.
- **외부 서비스 통합**:
  - **네이버 예약**: 단순 `<a>` 태그를 통한 아웃바운드 링크.
  - **YouTube/지도**: `iframe`을 사용한 표준 임베드 방식. 보안을 위해 `sandbox` 속성 사용을 고려합니다.
  - **인스타그램**: 공식 임베드 위젯 또는 API 사용이 어려울 경우, 수동으로 큐레이션된 게시물 이미지를 업로드하고 원본 링크를 제공하는 방식으로 대체합니다.
- **실시간 통신**: 해당 없음.
- **데이터 동기화**: 콘텐츠(동물 프로필, 공지사항 등) 변경 시, Git 저장소에 해당 파일을 수정/추가한 뒤, 직접 빌드 및 배포 과정을 거쳐 변경사항을 사이트에 반영합니다. 별도의 자동화된 CI/CD 파이프라인 없이 수동 배포를 원칙으로 합니다.

## 4. 성능 및 최적화 전략

- **정적 우선 아키텍처**: 정보성 페이지는 모두 SSG(Static Site Generation)로, 동적 데이터가 필요한 최소한의 컴포넌트만 클라이언트 컴포넌트로 구현하여 서버 부하를 없애고 전송 속도를 극대화합니다.
- **이미지 최적화**: 모든 이미지는 `next/image` 컴포넌트를 통해 렌더링합니다. 이를 통해 자동으로 WebP 포맷 변환, 사이즈 최적화, lazy loading이 적용되어 LCP(Largest Contentful Paint) 지표를 개선합니다.
- **애니메이션 최적화**: Framer Motion의 `whileInView` 속성을 적극 활용하여 사용자의 뷰포트에 진입한 요소만 애니메이션을 실행합니다. `transform`과 `opacity` 속성 위주로 애니메이션을 구성하여 리페인트(repaint) 비용을 최소화합니다.
- **코드 분할 및 번들 최적화**: Next.js App Router는 페이지 단위로 코드를 자동 분할합니다. `@next/bundle-analyzer`를 주기적으로 사용하여 불필요하게 큰 라이브러리가 포함되지 않았는지 확인하고, 필요한 경우 `next/dynamic`을 사용하여 클라이언트 컴포넌트를 동적으로 로드합니다.

## 5. 구현 로드맵 및 마일스톤

### 1단계: 기반 구축 (MVP 구현)

- **핵심 인프라**: pnpm 모노레포 설정, Next.js 프로젝트 초기화, Vercel 연동 및 CI/CD 파이프라인 구축.
- **필수 기능**: 메인 레이아웃(헤더, 푸터), 네비게이션 구현. 메인 랜딩 페이지, 이웃집수달 소개, 이용 안내 페이지의 정적 콘텐츠 렌더링.
- **기본 보안**: 외부 링크에 `rel="noopener noreferrer"` 적용.
- **개발 환경**: ESLint, Prettier, TypeScript 설정 공유.
- **예상 기간**: 2주

### 2단계: 기능 강화

- **고급 기능**: 동물 친구들 페이지(정적 JSON 데이터 기반), 체험 프로그램 페이지 구현.
- **외부 연동**: YouTube 영상 임베드 컴포넌트, 카카오/네이버 지도 위젯 구현. 모든 프로그램에 '네이버 예약' 외부 링크 연결.
- **애니메이션 적용**: Framer Motion을 사용한 페이지 트랜지션, 스크롤 기반 애니메이션, 호버 효과 등 PRD에 명시된 주요 애니메이션 구현.
- **예상 기간**: 3주

### 3단계: 확장 및 최적화

- **커뮤니티 기능**: 공지사항(Markdown 기반), 포토 갤러리, 미디어 노출 페이지 등 정적 콘텐츠 기반 커뮤니티 기능 구현.
- **성능 최적화**: Lighthouse 점수 측정 및 개선. 이미지, 폰트, 번들 사이즈 최적화 집중.
- **품질 보증**: 크로스 브라우저 테스트(Chrome, Safari, Edge), 모바일/태블릿 반응형 디자인 최종 검수, 접근성(A11y) 검토 및 수정.
- **SEO 최종 작업**: 구조화된 데이터(Schema.org), `sitemap.xml`, `robots.txt` 생성 및 제출.
- **예상 기간**: 2주

## 6. 위험 평가 및 완화 전략

### 기술적 위험 분석

- **기술 위험**: Framer Motion의 과도한 사용은 성능 저하를 유발할 수 있습니다.
  - **완화 전략**:

# Clean Code Guidelines

You are an expert software engineer focused on writing clean, maintainable code. Follow these principles rigorously:

## Core Principles

- **DRY** - Eliminate duplication ruthlessly
- **KISS** - Simplest solution that works
- **YAGNI** - Build only what's needed now
- **SOLID** - Apply all five principles consistently
- **Boy Scout Rule** - Leave code cleaner than found

## Naming Conventions

- Use **intention-revealing** names
- Avoid abbreviations except well-known ones (e.g., URL, API)
- Classes: **nouns**, Methods: **verbs**, Booleans: **is/has/can** prefix
- Constants: UPPER_SNAKE_CASE
- No magic numbers - use named constants

## Functions & Methods

- **Single Responsibility** - one reason to change
- Maximum 20 lines (prefer under 10)
- Maximum 3 parameters (use objects for more)
- No side effects in pure functions
- Early returns over nested conditions

## Code Structure

- **Cyclomatic complexity** < 10
- Maximum nesting depth: 3 levels
- Organize by feature, not by type
- Dependencies point inward (Clean Architecture)
- Interfaces over implementations

## Comments & Documentation

- Code should be self-documenting
- Comments explain **why**, not what
- Update comments with code changes
- Delete commented-out code immediately
- Document public APIs thoroughly

## Error Handling

- Fail fast with clear messages
- Use exceptions over error codes
- Handle errors at appropriate levels
- Never catch generic exceptions
- Log errors with context

## Testing

- **TDD** when possible
- Test behavior, not implementation
- One assertion per test
- Descriptive test names: `should_X_when_Y`
- **AAA pattern**: Arrange, Act, Assert
- Maintain test coverage > 80%

## Performance & Optimization

- Profile before optimizing
- Optimize algorithms before micro-optimizations
- Cache expensive operations
- Lazy load when appropriate
- Avoid premature optimization

## Security

- Never trust user input
- Sanitize all inputs
- Use parameterized queries
- Follow **principle of least privilege**
- Keep dependencies updated
- No secrets in code

## Version Control

- Atomic commits - one logical change
- Imperative mood commit messages
- Reference issue numbers
- Branch names: `type/description`
- Rebase feature branches before merging

## Code Reviews

- Review for correctness first
- Check edge cases
- Verify naming clarity
- Ensure consistent style
- Suggest improvements constructively

## Refactoring Triggers

- Duplicate code (Rule of Three)
- Long methods/classes
- Feature envy
- Data clumps
- Divergent change
- Shotgun surgery

## Final Checklist

Before committing, ensure:

- [ ] All tests pass
- [ ] No linting errors
- [ ] No console logs
- [ ] No commented code
- [ ] No TODOs without tickets
- [ ] Performance acceptable
- [ ] Security considered
- [ ] Documentation updated

Remember: **Clean code reads like well-written prose**. Optimize for readability and maintainability over cleverness.

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

# 이웃집 수달 웹페이지 PRD (Product Requirements Document)

## 1. 프로젝트 개요

### 1.1 프로젝트명

**이웃집 수달** - 동물 체험 & 교감 센터 웹사이트

### 1.2 프로젝트 컨셉

**"세상에서 가장 가까운 수달 친구를 만나는 곳"**

### 1.3 프로젝트 목표

1. **방문 유도**: '수달과 수영' 등 독보적인 체험 프로그램을 강조하여 방문 욕구 자극
2. **신뢰 구축**: 동물 복지를 생각하는 철학과 방송 출연 이력을 통해 전문성과 신뢰도 확보
3. **팬덤 형성**: 유튜브 채널 연동과 동물 친구들 개별 소개를 통해 온라인 팬덤 구축 및 재방문 유도

### 1.4 타겟 사용자

- **주요 타겟**: 20-40대 동물 애호가, 특별한 경험을 추구하는 사람들
- **부차 타겟**: 가족 단위 방문객, 커플, 유튜브 구독자
- **특수 타겟**: 인플루언서, 동물 콘텐츠 크리에이터

## 2. 기술 스택 및 요구사항

### 2.1 기술 스택

- **프레임워크**: Next.js 14+ (App Router)
- **언어**: TypeScript
- **스타일링**: TailwindCSS
- **애니메이션**: Framer Motion
- **상태관리**: Zustand / React Context API
- **아이콘**: Lucide React
- **미디어**: YouTube Embed (공개 영상 임베드)
- **지도**: 카카오맵/네이버맵 웹 위젯

### 2.2 디자인 요구사항

- **UI/UX**: 아기자기하고 따뜻한 감성의 디자인
- **애니메이션**: 생동감 있는 트랜지션 효과
- **반응형**: 모바일 우선 반응형 디자인
- **브랜드 컬러**: 따뜻한 오렌지/브라운 톤, 수달의 자연스러운 색감

## 3. 사이트맵 및 페이지 구조

```
이웃집 수달 웹사이트
├── 1. 메인 (랜딩) 페이지
├── 2. 이웃집수달 소개 (About Us)
├── 3. 우리의 동물 친구들 (Animal Friends)
│   ├── 3-1. 메인 스타: 수달 가족
│   └── 3-2. 다른 동물 친구들
├── 4. 체험 프로그램 & 예약 (Programs & Reservation)
├── 5. 이용 안내 (Visitor Information)
└── 6. 커뮤니티 (Community)

```

## 4. 페이지별 상세 기능 명세

### 4.1 메인 (랜딩) 페이지

### 4.1.1 히어로 섹션

**목적**: 첫 화면에서 방문하고 싶다는 마음이 들게 만드는 핵심 섹션

**콘텐츠 요소**:

- **메인 비주얼**: 수달과 사람들이 함께 수영하거나 교감하는 고화질 영상/슬라이드
- **메인 카피**: "수달과 함께 헤엄치는 특별한 경험, 이웃집수달에 오신 것을 환영합니다!"
- **핵심 CTA 버튼**:
  - `[네이버 예약하기]` (primary) - 네이버 예약 페이지로 리다이렉트
  - `[이용안내 바로가기]` (secondary)

**기술적 구현**:

```tsx
interface HeroSection {
  backgroundMedia: 'video' | 'slideshow'
  autoPlay: boolean
  ctaButtons: {
    primary: { text: string; naverReservationUrl: string }
    secondary: { text: string; link: string }
  }
}
```

**애니메이션 효과**:

- 텍스트 타이핑 효과 (typewriter)
- 버튼 호버 시 물결 효과
- 배경 영상/이미지 패러럭스 스크롤

### 4.1.2 이웃집수달만의 특별함 섹션

**콘텐츠 요소**:

- 🦦 직접 만져보고
- 🥕 먹이도 주고
- 🏊‍♂️ 함께 수영하고
- 👨‍👩‍👧‍👦 온가족이 함께!

**애니메이션**: 스크롤 시 아이콘이 순차적으로 등장하며 바운스 효과

### 4.1.3 유튜브 채널 '이웃집수달 TV' 섹션

**콘텐츠 요소**:

- 헤딩: "구독자 OOO만! 이웃집수달의 일상 엿보기"
- 미리 선정된 인기 유튜브 영상 1-2개 임베드 (공개 영상 URL 직접 임베드)
- `[유튜브 채널 바로가기]` 버튼

**기술적 구현**:

```tsx
interface YouTubeSection {
  // 정적으로 관리되는 영상 목록
  featuredVideos: {
    videoId: string
    title: string
    embedUrl: string
  }[]
  channelUrl: string
  subscriberCountText: string // 수동으로 업데이트
}
```

### 4.1.4 미디어 스포트라이트 섹션

**콘텐츠 요소**:

- 헤딩: "TV동물농장도, 유명 유튜버도 반한 바로 그곳!"
- 방송사 로고 (SBS TV동물농장 등)
- 유명 유튜버 로고/썸네일
- 관련 영상 클립 또는 캡처 이미지

**애니메이션**: 로고들이 무한 슬라이드로 이동하는 마키 효과

### 4.1.5 다른 동물 친구들 맛보기 섹션

**콘텐츠 요소**:

- 카피바라, 미어캣 등 다른 동물들의 귀여운 사진
- 호버 시 동물 이름과 간단한 설명 노출

### 4.1.6 기본 정보 섹션

**콘텐츠 요소**:

- 운영시간, 주소, 문의전화
- 간략한 오시는 길 정보

### 4.2 이웃집수달 소개 (About Us)

### 4.2.1 인사말 섹션

**콘텐츠 요소**:

- 동물원장의 프로필 사진
- 동물에 대한 애정과 이웃집수달 창립 스토리
- 따뜻한 톤의 개인적인 메시지

### 4.2.2 우리의 약속 (동물복지 철학)

**콘텐츠 요소**:

- 슬로건: "행복한 동물이 사람에게도 행복을 줍니다."
- 동물 복지 노력사항:
  - 청결한 환경 유지
  - 정기적인 건강검진
  - 충분한 휴식 보장
  - 스트레스 최소화

**시각적 요소**:

- 인포그래픽으로 복지 노력 시각화
- 실제 동물들의 건강한 모습 사진

### 4.2.3 수달 아빠/엄마 소개

**콘텐츠 요소**:

- 사육사(직원)들의 프로필 사진
- 이름, 담당 동물, 경력, 간단한 소개글
- 동물들과 함께한 일상 사진

### 4.3 우리의 동물 친구들 (Animal Friends)

### 4.3.1 메인 스타: 수달 가족

**기능 요구사항**:

- 각 수달의 개별 프로필 (정적 데이터로 관리)
- 프로필 정보:
  - 이름
  - 나이/생년월일
  - 성격 특징
  - 취미/특기
  - 좋아하는 음식
  - TMI (팬들만 아는 소소한 정보)

**콘텐츠 예시**:

```typescript
const otterProfiles = [
  {
    name: '도리',
    age: 3,
    personality: '애교쟁이 먹보',
    hobby: '조개까기 달인',
    favoriteFood: '새우',
    tmi: '오후 3시만 되면 꼭 낮잠을 자요!',
    images: ['/images/otters/dori-1.jpg', '/images/otters/dori-2.jpg'],
  },
]
```

**시각적 요소**:

- 고화질 프로필 사진
- 움짤(GIF) 또는 짧은 영상
- 인스타그램 스토리 스타일의 레이아웃

### 4.3.2 다른 동물 친구들

**콘텐츠 구성**:

- 동물 종류별 그룹핑
- 각 동물의 사진, 이름, 특징, 재미있는 습성
- 간략한 설명과 매력 포인트

**애니메이션**: 카드 플리핑 효과로 앞면(사진)과 뒷면(정보) 전환

### 4.4 체험 프로그램 & 예약 (Programs & Reservation)

### 4.4.1 기본 입장 및 교감 체험

**프로그램 정보**:

- 포함 내역: 기본 입장, 동물 만져보기, 먹이주기 체험
- 가격, 소요 시간, 유의사항
- 먹이 별도 구매 안내

### 4.4.2 [SPECIAL] 수달과 수영하기

**마케팅 포인트**:

- "국내 유일, 일생일대의 특별한 경험"
- 100% 예약제 운영

**체험 과정**:

1. 준비운동
2. 수달과 친해지기 시간
3. 입수
4. 자유 수영 및 교감
5. 포토타임

**상세 정보**:

- 포함/불포함 내역 (수건, 샤워시설 등)
- 준비물 안내
- 참가 조건 (나이, 건강 상태 등)

### 4.4.3 네이버 예약 연동

**기능 요구사항**:

```tsx
interface NaverReservation {
  naverBookingUrl: string
  programs: {
    id: string
    name: string
    price: string
    description: string
    naverReservationLink: string
  }[]
}
```

**예약 플로우**:

1. 프로그램 선택
2. `[네이버 예약하기]` 버튼 클릭
3. 네이버 예약 페이지로 리다이렉트
4. 네이버 시스템에서 예약 완료

**UI 요구사항**:

- 각 프로그램별 네이버 예약 버튼
- 예약 전 주의사항 모달
- 모바일 최적화된 예약 버튼 배치

### 4.5 이용 안내 (Visitor Information)

### 4.5.1 이용 요금

**요금 체계**:

- 어른 / 청소년 / 어린이 / 영유아
- 단체 할인 (20인 이상)
- 체험 프로그램별 추가 요금

**시각적 구현**:

- 테이블 형태의 깔끔한 요금표
- 할인 정보 하이라이트

### 4.5.2 운영 시간 및 휴무일

**정보 요소**:

- 평일/주말 운영 시간
- 마지막 입장 시간
- 정기 휴무일
- 임시 휴무 공지 (수동 업데이트)

### 4.5.3 오시는 길

**기능 요구사항**:

- 카카오맵 또는 네이버맵 웹 지도 위젯 임베드
- 주소 복사 기능
- 길찾기 바로가기 링크 (카카오맵/네이버맵 앱 연결)

**교통 정보**:

- 대중교통 이용 방법 (버스, 지하철)
- 주차장 정보 (수용 대수, 주차비)
- 근처 랜드마크 정보

### 4.5.4 방문객 필독! 주의사항

**카테고리별 안내**:

- 반입 금지 물품
- 동물 보호를 위한 행동 지침
- 수영 체험 시 복장 안내
- 안전 수칙
- 사진 촬영 가이드라인

**디자인 요구사항**:

- 주의사항은 경고 색상(주황/빨강)으로 강조
- 아이콘과 함께 시각적으로 이해하기 쉽게 구성

### 4.5.5 자주 묻는 질문 (FAQ)

**예상 질문 카테고리**:

- 운영 관련: "비가 와도 운영하나요?"
- 연령 제한: "몇 살부터 체험할 수 있나요?"
- 시설 관련: "주차는 편한가요?"
- 예약 관련: "당일 예약도 가능한가요?"

**UI 구현**:

- 아코디언 형태의 펼치기/접기 기능
- 검색 기능 (클라이언트 사이드 검색)

### 4.6 커뮤니티 (Community)

### 4.6.1 미디어 속 이웃집수달

**콘텐츠 요소**:

- TV동물농장, 생방송 투데이 등 방송 클립 (YouTube 임베드)
- 유명 유튜버 콜라보 영상 (공개 영상 임베드)
- 언론 기사 및 보도자료 (외부 링크)

**기술적 구현**:

- YouTube 영상 직접 임베드 (공개 영상만)
- 외부 링크 연결
- 썸네일 최적화

### 4.6.2 생생 방문 후기

**기능 요구사항**:

- 인스타그램 해시태그 위젯 (Instagram Basic Display API 또는 임베드)
- 우수 후기 수동 큐레이션 및 이미지 업로드
- 방문객이 직접 제출할 수 있는 간단한 후기 폼

**구현 방식**:

```tsx
interface ReviewSection {
  curatedReviews: {
    id: string
    author: string
    content: string
    images: string[]
    date: string
    platform: 'instagram' | 'blog' | 'direct'
  }[]
  instagramEmbedUrl?: string // 인스타그램 위젯
}
```

### 4.6.3 포토 갤러리

**콘텐츠 카테고리**:

- 동물 클로즈업 사진
- 방문객의 행복한 순간
- 계절별 특별한 모습
- 비하인드 스토리

**UI 구현**:

- 그리드 레이아웃의 갤러리
- 라이트박스 모달
- 이미지 lazy loading

### 4.6.4 공지사항

**공지 카테고리**:

- 이벤트 소식
- 휴무일 변경 안내
- 새로운 동물 친구 소개
- 시설 개선 소식
- 미디어 출연 예정

**구현 방식**:

- 정적 마크다운 파일로 관리
- 또는 간단한 CMS (예: Contentful, Strapi Cloud의 무료 플랜)

## 5. UI/UX 디자인 가이드라인

### 5.1 디자인 컨셉: "아기자기한 수달의 세계"

### 5.1.1 컬러 팔레트

```css
:root {
  /* Primary Colors - 수달의 자연스러운 색감 */
  --primary-brown: #8b4513;
  --primary-orange: #ff8c42;
  --primary-cream: #fff8dc;

  /* Secondary Colors */
  --water-blue: #4a90e2;
  --grass-green: #7cb342;
  --warm-yellow: #ffd54f;

  /* Neutral Colors */
  --text-dark: #2c1810;
  --text-light: #6b5b73;
  --background: #fdfbf8;
}
```

### 5.1.2 타이포그래피

- **제목**: 둥글고 친근한 한글 폰트 (예: Noto Sans KR Rounded)
- **본문**: 가독성 좋은 고딕체
- **강조**: 손글씨 느낌의 폰트 사용

### 5.1.3 아이콘 스타일

- 라운드 처리된 귀여운 아이콘
- 수달, 물, 자연을 모티브로 한 커스텀 아이콘
- 일관된 스트로크 굵기 유지

### 5.2 애니메이션 가이드라인

### 5.2.1 페이지 트랜지션

```tsx
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeInOut' },
}
```

### 5.2.2 요소별 애니메이션

- **버튼 호버**: 약간의 scale up (1.05배) + 그림자 효과
- **카드 호버**: 살짝 위로 떠오르는 효과 (translateY: -5px)
- **이미지 로딩**: skeleton loading + fade in
- **스크롤 애니메이션**: 요소가 뷰포트에 들어올 때 fade up

### 5.2.3 특별한 효과

- **물결 효과**: 수영 관련 섹션에서 배경에 물결 애니메이션
- **동물 움직임**: 수달 캐릭터가 화면을 가로지르는 이스터에그
- **파티클 효과**: 클릭 시 하트나 물방울 파티클 생성

## 6. 기술적 구현 요구사항

### 6.1 성능 최적화

- **이미지 최적화**: Next.js Image 컴포넌트 사용, WebP 포맷
- **코드 스플리팅**: 페이지별 dynamic import
- **정적 생성**: SSG(Static Site Generation) 최대 활용
- **SEO 최적화**: 메타 태그, 구조화된 데이터, sitemap

### 6.2 반응형 디자인

```tsx
const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
}
```

### 6.3 접근성 (A11y)

- **키보드 네비게이션** 지원
- **스크린 리더** 호환성
- **색상 대비** WCAG 2.1 AA 기준 준수
- **alt 텍스트** 모든 이미지에 적절한 설명

### 6.4 외부 서비스 연동 (백엔드 없이)

```tsx
interface ExternalServices {
  // 네이버 예약 시스템
  naverBooking: {
    baseUrl: string
    programLinks: Record<string, string>
  }

  // 지도 서비스
  maps: {
    kakao?: { embedUrl: string }
    naver?: { embedUrl: string }
  }

  // 소셜 미디어
  social: {
    youtube: {
      channelUrl: string
      featuredVideos: string[]
    }
    instagram?: {
      embedCode: string // 위젯 임베드 코드
    }
  }
}
```

### 6.5 데이터 관리 전략

**정적 데이터 관리**:

- 동물 프로필: JSON 파일 또는 TypeScript 상수
- 프로그램 정보: 정적 데이터 파일
- 공지사항: 마크다운 파일 또는 무료 Headless CMS

**환경 변수 관리**:

```env
# 공개 가능한 정보만
NEXT_PUBLIC_NAVER_BOOKING_URL=https://booking.naver.com/booking/...
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=UCxxxxxx
NEXT_PUBLIC_KAKAO_MAP_EMBED_URL=https://map.kakao.com/...
```

## 7. 개발 단계별 계획

### Phase 1: 기본 구조 (2주)

- Next.js 프로젝트 설정 (SSG 중심)
- 기본 레이아웃 및 네비게이션
- 메인 페이지 히어로 섹션
- 정적 데이터 구조 설계

### Phase 2: 콘텐츠 페이지 (3주)

- About Us 페이지
- Animal Friends 페이지 (정적 데이터 기반)
- Visitor Information 페이지

### Phase 3: 고급 기능 (2주)

- 네이버 예약 연동
- YouTube 영상 임베드
- 커뮤니티 기능 (정적 콘텐츠 기반)
- 지도 위젯 연동

### Phase 4: 최적화 및 테스트 (1주)

- 성능 최적화
- 크로스 브라우저 테스트
- 모바일 테스트
- 접근성 검수

## 8. 성공 지표 (KPI)

### 8.1 비즈니스 지표

- **네이버 예약 전환율**: 방문자 대비 네이버 예약 페이지 이동률 3% 이상
- **체류 시간**: 평균 세션 시간 3분 이상
- **재방문율**: 월 20% 이상

### 8.2 기술적 지표

- **페이지 로딩 속도**: 3초 이내
- **모바일 성능**: Lighthouse 점수 90+
- **SEO 점수**: 95+
- **접근성 점수**: 100

### 8.3 사용자 경험 지표

- **바운스율**: 40% 이하
- **페이지뷰**: 세션당 5페이지 이상
- **소셜 공유**: 월 100회 이상

## 9. 추가 고려사항

### 9.1 콘텐츠 업데이트 전략

- **정기 업데이트**: 동물 사진, 공지사항 등 주기적 업데이트
- **계절별 콘텐츠**: 특별 이벤트, 계절 프로그램 추가
- **버전 관리**: Git을 통한 콘텐츠 변경 이력 관리

### 9.2 SEO 최적화

- **구조화된 데이터**: 지역 비즈니스, 관광명소 스키마 마크업
- **로컬 SEO**: 지역 검색 최적화
- **소셜 미디어**: Open Graph, Twitter Card 메타 태그

### 9.3 미래 확장 가능성

- **CMS 도입**: 추후 간단한 Headless CMS 도입 고려
- **예약 시스템**: 네이버 예약 외 추가 예약 채널 연동
- **다국어 지원**: 외국인 관광객을 위한 영어 페이지

이 수정된 PRD는 백엔드 없이 프론트엔드만으로 구현 가능한 웹사이트를 위한 상세한 가이드라인을 제공합니다. 네이버 예약 시스템 활용과 정적 데이터 관리를 통해 효율적이고 안전한 웹사이트 구축이 가능합니다.

## Core Directive

You are a senior software engineer AI assistant. For EVERY task request, you MUST follow the three-phase process below in exact order. Each phase must be completed with expert-level precision and detail.

## Guiding Principles

- **Minimalistic Approach**: Implement high-quality, clean solutions while avoiding unnecessary complexity
- **Expert-Level Standards**: Every output must meet professional software engineering standards
- **Concrete Results**: Provide specific, actionable details at each step

---

## Phase 1: Codebase Exploration & Analysis

**REQUIRED ACTIONS:**

1. **Systematic File Discovery**
   - List ALL potentially relevant files, directories, and modules
   - Search for related keywords, functions, classes, and patterns
   - Examine each identified file thoroughly

2. **Convention & Style Analysis**
   - Document coding conventions (naming, formatting, architecture patterns)
   - Identify existing code style guidelines
   - Note framework/library usage patterns
   - Catalog error handling approaches

**OUTPUT FORMAT:**

```
### Codebase Analysis Results
**Relevant Files Found:**
- [file_path]: [brief description of relevance]

**Code Conventions Identified:**
- Naming: [convention details]
- Architecture: [pattern details]
- Styling: [format details]

**Key Dependencies & Patterns:**
- [library/framework]: [usage pattern]
```

---

## Phase 2: Implementation Planning

**REQUIRED ACTIONS:**
Based on Phase 1 findings, create a detailed implementation roadmap.

**OUTPUT FORMAT:**

```markdown
## Implementation Plan

### Module: [Module Name]

**Summary:** [1-2 sentence description of what needs to be implemented]

**Tasks:**

- [ ] [Specific implementation task]
- [ ] [Specific implementation task]

**Acceptance Criteria:**

- [ ] [Measurable success criterion]
- [ ] [Measurable success criterion]
- [ ] [Performance/quality requirement]

### Module: [Next Module Name]

[Repeat structure above]
```

---

## Phase 3: Implementation Execution

**REQUIRED ACTIONS:**

1. Implement each module following the plan from Phase 2
2. Verify ALL acceptance criteria are met before proceeding
3. Ensure code adheres to conventions identified in Phase 1

**QUALITY GATES:**

- [ ] All acceptance criteria validated
- [ ] Code follows established conventions
- [ ] Minimalistic approach maintained
- [ ] Expert-level implementation standards met

---

## Success Validation

Before completing any task, confirm:

- ✅ All three phases completed sequentially
- ✅ Each phase output meets specified format requirements
- ✅ Implementation satisfies all acceptance criteria
- ✅ Code quality meets professional standards

## Response Structure

Always structure your response as:

1. **Phase 1 Results**: [Codebase analysis findings]
2. **Phase 2 Plan**: [Implementation roadmap]
3. **Phase 3 Implementation**: [Actual code with validation]
