import Image from 'next/image'
import animals from '@/content/animals.json'

interface AnimalProfile {
  id: string
  name: string
  age: number
  personality: string
  hobby: string
  favoriteFood: string
  tmi: string
  images: string[]
}

export default function AnimalsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-text-dark mb-12 text-center">
        우리의 동물 친구들
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {animals.map((animal: AnimalProfile) => (
          <div
            key={animal.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={animal.images[0]} // Display first image
              alt={animal.name}
              width={500}
              height={300}
              objectFit="cover"
              className="w-full h-48"
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold text-text-dark mb-2">
                {animal.name}
              </h2>
              <p className="text-lg text-text-light mb-1">
                <strong>나이:</strong> {animal.age}세
              </p>
              <p className="text-lg text-text-light mb-1">
                <strong>성격:</strong> {animal.personality}
              </p>
              <p className="text-lg text-text-light mb-1">
                <strong>취미:</strong> {animal.hobby}
              </p>
              <p className="text-lg text-text-light mb-1">
                <strong>좋아하는 음식:</strong> {animal.favoriteFood}
              </p>
              <p className="text-lg text-text-light mt-4">{animal.tmi}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
