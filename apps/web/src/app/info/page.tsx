'use client'

import { useState } from 'react'

export default function InfoPage() {
  const [copied, setCopied] = useState(false)
  const address = '서울특별시 수달구 수달동 123-45'

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-text-dark mb-12 text-center">
        이용 안내
      </h1>

      <section className="mb-16">
        <h2 className="text-4xl font-bold text-text-dark mb-8 text-center">
          이용 요금
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden table-auto">
            <thead>
              <tr className="bg-primary-orange text-white">
                <th className="px-4 py-3 text-left text-lg font-semibold">
                  구분
                </th>
                <th className="px-4 py-3 text-left text-lg font-semibold">
                  요금
                </th>
                <th className="px-4 py-3 text-left text-lg font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 text-text-dark">
                  어른 (만 19세 이상)
                </td>
                <td className="px-4 py-3 text-text-dark">15,000원</td>
                <td className="px-4 py-3 text-text-light">기본 입장료</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-4 py-3 text-text-dark">
                  청소년 (만 13세 ~ 18세)
                </td>
                <td className="px-4 py-3 text-text-dark">12,000원</td>
                <td className="px-4 py-3 text-text-light">학생증 지참</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 text-text-dark">
                  어린이 (만 3세 ~ 12세)
                </td>
                <td className="px-4 py-3 text-text-dark">10,000원</td>
                <td className="px-4 py-3 text-text-light">보호자 동반 필수</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-text-dark">
                  영유아 (만 3세 미만)
                </td>
                <td className="px-4 py-3 text-text-dark">무료</td>
                <td className="px-4 py-3 text-text-light">증빙서류 지참</td>
              </tr>
              <tr className="border-t-2 border-primary-orange">
                <td className="px-4 py-3 text-text-dark font-semibold">
                  단체 할인 (20인 이상)
                </td>
                <td className="px-4 py-3 text-text-dark font-semibold">
                  별도 문의
                </td>
                <td className="px-4 py-3 text-text-light">사전 예약 필수</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-text-dark mb-8">
          운영 시간 및 휴무일
        </h2>
        <div className="text-lg text-text-light space-y-2">
          <p>
            <strong>평일/주말 운영 시간:</strong> 10:00 - 18:00
          </p>
          <p>
            <strong>마지막 입장 시간:</strong> 17:00
          </p>
          <p>
            <strong>정기 휴무일:</strong> 매주 월요일
          </p>
          <p>
            <strong>임시 휴무 공지:</strong> 웹사이트 공지사항 참조
          </p>
        </div>
      </section>

      <section className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-text-dark mb-8">오시는 길</h2>
        <div className="text-lg text-text-light mb-4">
          <p>
            <strong>주소:</strong> {address}
          </p>
          <button
            onClick={handleCopyAddress}
            className="mt-2 bg-water-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            {copied ? '주소 복사 완료!' : '주소 복사하기'}
          </button>
        </div>
        <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
          {/* 카카오맵 또는 네이버맵 iframe 임베드 */}
          <iframe
            src="https://map.kakao.com/?urlX=508970&urlY=1119000&name=%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A0%EC%9B%8C&map_type=TYPE_MAP"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            title="오시는 길 지도"
          ></iframe>
        </div>
        <div className="text-lg text-text-light mt-8 space-y-2">
          <p>
            <strong>대중교통:</strong> 수달역 3번 출구에서 도보 5분
          </p>
          <p>
            <strong>주차:</strong> 전용 주차장 완비 (수용 대수: 50대, 무료)
          </p>
          <p>
            <strong>근처 랜드마크:</strong> 수달 공원, 수달 박물관
          </p>
        </div>
      </section>
    </main>
  )
}
