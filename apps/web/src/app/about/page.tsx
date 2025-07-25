import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-text-dark mb-8">
          이웃집수달 소개
        </h1>
        <div className="max-w-3xl mx-auto">
          <Image
            src="/images/otter-family.jpg" // Placeholder image
            alt="동물원장 프로필"
            width={300}
            height={300}
            className="rounded-full mx-auto mb-6 shadow-lg"
          />
          <h2 className="text-3xl font-semibold text-text-dark mb-4">인사말</h2>
          <p className="text-lg text-text-light leading-relaxed">
            안녕하세요, 이웃집수달의 동물원장 [원장 이름]입니다. 이곳은 단순히
            동물을 관람하는 곳이 아닌, 생명과의 깊은 교감을 통해 진정한 행복을
            느낄 수 있는 공간입니다. 저희는 모든 동물들이 행복하게 살아갈 수
            있도록 최선을 다하며, 방문객 여러분께도 그 행복을 나누어 드리고자
            합니다. 수달 친구들과 함께 잊지 못할 추억을 만들어 가시길 바랍니다.
          </p>
        </div>
      </section>

      <section className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-text-dark mb-8">
          우리의 약속: 동물 복지 철학
        </h2>
        <div className="max-w-4xl mx-auto text-lg text-text-light leading-relaxed">
          <p className="mb-4">&quot;행복한 동물이 사람에게도 행복을 줍니다.&quot;</p>
          <p className="mb-4">
            이것이 이웃집수달의 가장 중요한 철학입니다. 저희는 동물들이 건강하고
            행복하게 생활할 수 있도록 다음을 약속합니다:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>청결하고 안전한 환경 유지</li>
            <li>정기적인 건강검진 및 맞춤형 영양 관리</li>
            <li>충분한 휴식과 놀이 공간 제공</li>
            <li>스트레스 최소화를 위한 세심한 관리</li>
          </ul>
          <Image
            src="/images/animal-welfare.jpg" // Placeholder image
            alt="동물 복지 인포그래픽"
            width={800}
            height={450}
            className="mx-auto mt-8 rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-4xl font-bold text-text-dark mb-8">
          수달 아빠/엄마 소개
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <Image
              src="/images/staff-1.jpg" // Placeholder image
              alt="사육사 1"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4 shadow-md"
            />
            <h3 className="text-2xl font-semibold text-text-dark">김수달</h3>
            <p className="text-md text-text-light">
              담당: 수달 가족 | 경력: 10년
            </p>
            <p className="text-md text-text-light mt-2">
              수달 친구들의 건강과 행복을 책임지는 베테랑 사육사입니다.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <Image
              src="/images/staff-2.jpg" // Placeholder image
              alt="사육사 2"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4 shadow-md"
            />
            <h3 className="text-2xl font-semibold text-text-dark">박미어</h3>
            <p className="text-md text-text-light">
              담당: 미어캣, 카피바라 | 경력: 7년
            </p>
            <p className="text-md text-text-light mt-2">
              작은 동물 친구들과 교감하며 그들의 매력을 알리고 있습니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
