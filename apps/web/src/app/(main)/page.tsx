import Image from 'next/image'
import Link from 'next/link'

// Placeholder for HeroSection
const HeroSection = () => {
  const naverBookingUrl = process.env.NEXT_PUBLIC_NAVER_BOOKING_URL || '#' // Fallback for development

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="/images/hero-otter.jpg" // Placeholder image
        alt="수달과 함께 헤엄치는 사람들"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">
          수달과 함께 헤엄치는 특별한 경험, 이웃집수달에 오신 것을 환영합니다!
        </h1>
        <div className="space-x-4">
          <Link href={naverBookingUrl} passHref>
            <button className="bg-primary-orange text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
              네이버 예약하기
            </button>
          </Link>
          <Link href="/info" passHref>
            <button className="bg-water-blue text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
              이용안내 바로가기
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Placeholder for SpecialSection
const SpecialSection = () => {
  const specialItems = [
    { icon: '🦦', text: '직접 만져보고' },
    { icon: '🥕', text: '먹이도 주고' },
    { icon: '🏊‍♂️', text: '함께 수영하고' },
    { icon: '👨‍👩‍👧‍👦', text: '온가족이 함께!' },
  ]

  return (
    <section className="py-20 bg-primary-cream text-center">
      <h2 className="text-4xl font-bold mb-12 text-text-dark">
        이웃집수달만의 특별함
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {specialItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-48"
          >
            <span className="text-6xl mb-4">{item.icon}</span>
            <p className="text-xl font-semibold text-text-dark">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// Placeholder for YouTubeSection
const YouTubeSection = () => {
  const featuredVideos = [
    {
      videoId: 'dQw4w9WgXcQ', // Placeholder YouTube video ID
      title: '이웃집수달의 일상 엿보기 1',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      videoId: 'dQw4w9WgXcQ', // Placeholder YouTube video ID
      title: '이웃집수달의 일상 엿보기 2',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ]
  const channelUrl = 'https://www.youtube.com/channel/UCxxxxxx' // Placeholder channel URL
  const subscriberCountText = '100만' // Placeholder subscriber count

  return (
    <section className="py-20 bg-background text-center">
      <h2 className="text-4xl font-bold mb-12 text-text-dark">
        구독자 {subscriberCountText}! 이웃집수달의 일상 엿보기
      </h2>
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {featuredVideos.map((video, index) => (
          <div
            key={index}
            className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={video.embedUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="p-4 text-lg font-semibold text-text-dark">
              {video.title}
            </p>
          </div>
        ))}
      </div>
      <Link href={channelUrl} passHref>
        <button className="bg-primary-orange text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
          유튜브 채널 바로가기
        </button>
      </Link>
    </section>
  )
}

// Placeholder for MediaSection
const MediaSection = () => {
  const mediaLogos = [
    { src: '/images/sbs-logo.png', alt: 'SBS 로고' }, // Placeholder image
    { src: '/images/youtuber-logo.png', alt: '유튜버 로고' }, // Placeholder image
  ]

  return (
    <section className="py-20 bg-primary-cream text-center">
      <h2 className="text-4xl font-bold mb-12 text-text-dark">
        TV동물농장도, 유명 유튜버도 반한 바로 그곳!
      </h2>
      <div className="flex justify-center items-center gap-12">
        {mediaLogos.map((logo, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-48"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={150}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

// Placeholder for InfoSection
const InfoSection = () => {
  return (
    <section className="py-20 bg-background text-center">
      <h2 className="text-4xl font-bold mb-12 text-text-dark">기본 정보</h2>
      <div className="text-lg text-text-dark space-y-4">
        <p>
          <strong>운영 시간:</strong> 매일 10:00 - 18:00 (매주 월요일 휴무)
        </p>
        <p>
          <strong>주소:</strong> 서울특별시 수달구 수달동 123-45
        </p>
        <p>
          <strong>문의 전화:</strong> 02-1234-5678
        </p>
        <p>
          <strong>오시는 길:</strong> 수달역 3번 출구에서 도보 5분
        </p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SpecialSection />
      <YouTubeSection />
      <MediaSection />
      <InfoSection />
    </main>
  )
}
