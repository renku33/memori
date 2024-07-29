import { useState, useEffect } from 'react'
import Card from './card'

export default function Board ({ numberOfRows = 3, numberOfColumns = 4, mockData }) {
  const [boardData, setMinefieldData] = useState([])

  function parseMockDataToString (data) {
    let strData = data.split(/\r?\n/).join('-')
    strData = strData.replaceAll(' ', '')
    strData = strData.replaceAll('|', '')
    while (strData[strData.length - 1] === '-') {
      strData = strData.slice(0, -1)
    }
    return strData
  }

  function validateMockDataRow (data) {
    const newLocal = '^[0-9]*$'
    const regex = new RegExp(newLocal)
    return regex.test(data)
  }

  function validateMockDataRows (dataRows) {
    const currentLenght = dataRows[0].length
    let isValidData
    for (let i = 0; i < dataRows.length; i += 1) {
      if (dataRows[i].length !== currentLenght) {
        isValidData = false
        break
      }
      isValidData = validateMockDataRow(dataRows[i])
    }
    return isValidData
  }

  function validateMockData (mockData) {
    let isValidData
    console.log(mockData)
    if (mockData === undefined) {
      isValidData = false
    } else {
      if (mockData.includes('-')) {
        isValidData = validateMockDataRows(mockData.split('-'))
      } else {
        isValidData = validateMockDataRow(mockData)
      }
    }
    return isValidData
  }

  function getMinefieldFromMockData (mockData) {
    const board = []

    if (validateMockData(mockData)) {
      let mockBoard = mockData.split('-')
      mockBoard = mockBoard.map((row) => { return row.split('') })
      for (let row = 0; row < mockBoard.length; row += 1) {
        board.push([])
        for (let column = 0; column < mockBoard[0].length; column += 1) {
          board[row].push({
            y: row,
            x: column,
            unfliped: true
          })
        }
      }
    }
    return board
  }

  function getMinefield () {
    const fieldData = []
    for (let row = 0; row < numberOfRows; row += 1) {
      fieldData.push([])
      for (let column = 0; column < numberOfColumns; column += 1) {
        fieldData[row].push({
          y: row,
          x: column,
          unfliped: true
        })
      }
    }
    return fieldData
  }

  useEffect(() => {
    let preData
    if (mockData.includes('|')) {
      mockData = parseMockDataToString(mockData)
    }
    if (mockData !== '' && validateMockData(mockData)) {
      preData = getMinefieldFromMockData(mockData)
    } else {
      preData = getMinefield()
    }
    setMinefieldData(preData)
  }, [mockData])

  return (

    <div data-testid='field'>
      {boardData.map((row, rowIndex) => (
        <div data-testid='memoryCardBoard' key={rowIndex}>
          {row.map((card, cardIndex) => (
            <Card
              key={cardIndex}
              
            />
          ))}
        </div>
      ))}
    </div>

  )
}
