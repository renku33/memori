import { useState } from "react"

export default function Card ({rowPosition, colPosition}) {
  const [isFlipped, setIsFlipped] = useState('unflipped')
  function handleClick () {
    setIsFlipped('flipped')
  }

  return (
    <>
      <button 
      data-testid={`memoryCard-${rowPosition}-${colPosition}`}
      className={isFlipped} 
      onClick={handleClick}
      />
    </>
  )
}
