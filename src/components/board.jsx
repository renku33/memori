export default function Board ({ numberOfRows = 3, numberOfColumns = 4, mockData }) {
  const boardData = []

  for (let i = 0; i < numberOfRows; i++) {
    const row = []
    for (let y = 0; y < numberOfColumns; y++) {
      row.push(<button data-testid='memoryCard' className='unflipped' />)
    }
    boardData.push(row)
  }
  return (
    <>
      {boardData}
    </>
  )
}
