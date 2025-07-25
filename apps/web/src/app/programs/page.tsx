'use client'


import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import programs from '@/content/programs.json'

interface Program {
  id: string
  name: string
  description: string
  price: string
  duration: string
  notes: string
  naverReservationLink: string
}

export default function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleReservationClick = (program: Program) => {
    setSelectedProgram(program)
    setIsModalOpen(true)
  }

  const confirmReservation = () => {
    if (selectedProgram) {
      window.open(
        selectedProgram.naverReservationLink,
        '_blank',
        'noopener noreferrer'
      )
      setIsModalOpen(false)
    }
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-text-dark mb-12 text-center">
        체험 프로그램 & 예약
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program: Program) => (
          <div key={program.id} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-text-dark mb-4">
              {program.name}
            </h2>
            <p className="text-lg text-text-light mb-2">
              {program.description}
            </p>
            <p className="text-lg text-text-dark mb-1">
              <strong>가격:</strong> {program.price}
            </p>
            <p className="text-lg text-text-dark mb-1">
              <strong>소요 시간:</strong> {program.duration}
            </p>
            <p className="text-lg text-text-light mb-4">
              <strong>참고:</strong> {program.notes}
            </p>
            <button
              onClick={() => handleReservationClick(program)}
              className="bg-primary-orange text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-orange-600 transition-colors"
            >
              네이버 예약하기
            </button>
          </div>
        ))}
      </div>

      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-xl z-50 max-w-md w-full">
            <Dialog.Title className="text-2xl font-bold text-text-dark mb-4">
              예약 전 주의사항
            </Dialog.Title>
            <Dialog.Description className="text-text-light mb-6">
              선택하신 프로그램은 네이버 예약 페이지로 이동하여 진행됩니다. 외부
              페이지로 이동하시겠습니까?
            </Dialog.Description>
            <div className="flex justify-end space-x-4">
              <Dialog.Close asChild>
                <button className="bg-gray-300 text-text-dark px-5 py-2 rounded-md hover:bg-gray-400 transition-colors">
                  취소
                </button>
              </Dialog.Close>
              <button
                onClick={confirmReservation}
                className="bg-primary-orange text-white px-5 py-2 rounded-md hover:bg-orange-600 transition-colors"
              >
                확인
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  )
}
