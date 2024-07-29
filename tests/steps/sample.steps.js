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
  const cards = screen.getAllByTestId('memoryCard-', { exact: false })
  return cards.length === rows * columns
}

export function allCardsUnflipped () {
  let result = true
  const cards = screen.getAllByTestId('memoryCard-', { exact: false })
  cards.forEach(card => {
    if (!card.classList.contains('unflipped')) {
      result = false
    }
  })
  return result
}

export function boardCardsEnabledValidation () {
  let result = true
  const cards = screen.getAllByTestId('memoryCard-', { exact: false })
  cards.forEach((cards) => {
    if (cards.disabled === true) {
      result = false
    }
  })
  return result
}

export function setMockData (data) {
  data = data.trim()

  // userEvent.keyboard('ctrl+m') TO DO try to explain why userEvent doesn't work
  fireEvent.keyDown(screen.getByTestId('field'), {
    key: 'm',
    keyCode: 77,
    which: 77,
    code: 'KeyM',
    location: 0,
    altKey: false,
    ctrlKey: true,
    metaKey: false,
    shiftKey: false,
    repeat: false
  })

  const textInput = screen.getByTestId('mock-data-input')
  const submitButton = screen.getByTestId('mock-data-submit')
  fireEvent.change(textInput, { target: { value: data } })
  fireEvent.click(submitButton)
}

export function isCardUnfliped(rowPosition, colPosition){
  let result = true
  const card = screen.getByTestId('memoryCard-' + rowPosition + '-' + colPosition, { exact: true })
  
  if (!card.classList.contains('unflipped')) {
    result = false
  }
  
  return result
}

export function flipCard (rowPosition, colPosition){
  fireEvent.click(screen.getByTestId('memoryCard-' + rowPosition + '-' + colPosition, { exact: true }))
}

export function isCardFliped(rowPosition, colPosition){
  let result = true
  const card = screen.getByTestId('memoryCard-' + rowPosition + '-' + colPosition, { exact: true })
  
  if (!card.classList.contains('flipped')) {
    result = false
  }
  
  return result
}
