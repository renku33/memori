import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Page from '../../src/app/page'

export function openThePage () {
  render(<Page />)
}

export function getTitle () {
  const title = screen.getByTestId('app-title')
  return title.innerHTML
}

export function boardDimensionValidation (rows, columns) {
  const cards = screen.getAllByTestId('memoryCard', { exact: false })
  return cards.length === rows * columns
}

export function allCardsUnflipped () {
  let result = true
  const cards = screen.getAllByTestId('memoryCard', { exact: false })
  cards.forEach(card => {
    if (!card.classList.contains('unflipped')) {
      result = false
    }
  })
  return result
}

export function boardCardsEnabledValidation () {
  let result = true
  const cards = screen.getAllByTestId('memoryCard', { exact: false })
  cards.forEach((cards) => {
    if (cards.disabled === true) {
      result = false
    }
  })
  return result
}
