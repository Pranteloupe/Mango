'use client'

import { useEffect, useState } from 'react'

export default function PotatoRain() {
  const [potatoes, setPotatoes] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    // Generate 20 potatoes with random positions and delays
    const newPotatoes = Array.from({ length: 20 }, (_, index) => ({
      id: index,
      left: Math.random() * 100, // Random horizontal position (0-100%)
      delay: Math.random() * 2, // Random delay (0-2s)
    }))
    
    setPotatoes(newPotatoes)

    // Clean up after 10 seconds
    const timer = setTimeout(() => {
      setPotatoes([])
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {potatoes.map((potato) => (
        <div
          key={potato.id}
          className="absolute text-4xl potato-rain"
          style={{
            left: `${potato.left}%`,
            animationDelay: `${potato.delay}s`,
          }}
        >
          🥔
        </div>
      ))}
    </div>
  )
}

