import { useState } from "react"

export default function Card ({rowPosition, colPosition}) {
  const [isFlipped, setIsFlipped] = useState('unflipped')
  const [isDisabled, setIsDisabled] = useState(false)
  function handleClick () {
    setIsFlipped('flipped')
    setIsDisabled(!isDisabled)
  }

  return (
    <>
      <button 
      disabled={isDisabled}
      data-testid={`memoryCard-${rowPosition}-${colPosition}`}
      className={isFlipped} 
      onClick={handleClick}
      />
    </>
  )
}
