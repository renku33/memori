import { loadFeature, defineFeature } from 'jest-cucumber'
import * as steps from './steps/sample.steps'

const feature = loadFeature('./tests/features/memori.feature')

defineFeature(feature, (test) => {
  test('Create the 4 x 3 board', ({ given, then }) => {
    given('a user opens the app', () => {
      steps.openThePage()
    })
    then(/^the board should have "(.*)" rows and "(.*)" columns$/, (numberOfRows, numberOfCols) => {
      expect(steps.boardDimensionValidation(numberOfRows, numberOfCols)).toBe(true)
    })
  })

  test('Defaut memori cards display', ({ given, then }) => {
    given('a user opens the app', () => {
      steps.openThePage()
    })
    then('all the memori cards should be unflipped', () => {
      expect(steps.allCardsUnflipped()).toBe(true)
    })
  })

  test('Defaut memori cards enabled', ({ given, then }) => {
    given('a user opens the app', () => {
      steps.openThePage()
    })

    then('all the memori cards should be enabled', () => {
      expect(steps.boardCardsEnabledValidation()).toBe(true)
    })
  })

  test('Click an unflipped memori card', ({ given, and, when, then, pending }) => {
    given('a user opens the app', () => {
      steps.openThePage()
    })

    given('the player loads the following mock data:', (docString) => {
      steps.setMockData(docString)
    })

    and(/^the memori card \((\d+),(\d+)\) is unflipped$/, (rowPosition, colPosition) => {
      expect(steps.isCardUnfliped(rowPosition, colPosition)).toBe(true)
    })

    when(/^the player click the memori card \((\d+),(\d+)\)$/, (rowPosition, colPosition) => {
      steps.flipCard(rowPosition,colPosition)
    })

    then(/^the memori card \((\d+),(\d+)\) should be flipped:$/, (rowPosition, colPosition, docString) => {
      expect(steps.isCardFliped(rowPosition, colPosition)).toBe(true)
    })
  })

  test('Disable a flipped memori card', ({ given, then, pending }) => {
    given('a user opens the app', () => {
      steps.openThePage()
    })

    given('the player loads the following mock data:', (docString) => {
      steps.setMockData(docString)
    })

    then(/^the memori card \((\d+),(\d+)\) should be disabled$/, (rowPosition, colPosition) => {
      expect(steps.isCardDisabled(rowPosition, colPosition)).toBe(true)
    })
  })

  test('The flipped pair is correct - stay flipped and disabled', ({ given, when, then, pending }) => {
    given('a user opens the app', () => {
      steps.openThePage()
    })

    given('the player loads the following mock data:', (docString) => {
      steps.setMockData(docString)
    })

    when(/^the player click the memori card \((\d+),(\d+)\)$/, (arg0, arg1) => {
      steps.flipCard(rowPosition,colPosition)
    })

    then(/^the memori cards \((\d+),(\d+)\) and \((\d+),(\d+)\) should stay flipped$/, (arg0, arg1, arg2, arg3) => {
      pending()
    })
  })

  test('The flipped pair is incorrect - return to default memori card state', ({ given, then, pending }) => {
    given('a user opens the app', () => {

    })

    given('the player loads the following mock data:', (docString) => {

    })

    then(/^the memori cards \((\d+),(\d+)\) and \((\d+),(\d+)\) should be unflipped$/, (arg0, arg1, arg2, arg3) => {
      pending()
    })
  })

  test('Win the game - all the memori cards flipped', ({ given, and, then}) => {
    given('a user opens the app', () => {
      steps.openThePage()
    })

    given('the player loads the following mock data:', (docString) => {
      steps.setMockData(docString)
    })

    and(/^the user clicks the memori card \((\d+),(\d+)\)$/, (rowPosition, colPosition) => {
      steps.flipCard(rowPosition,colPosition)
    })

    then('all the memori cards should stay flipped', () => {
      expect(steps.allCardsFlipped()).toBe(true)
    })
  })

  test('Check the pairs - Incorrect', ({ given, and, then, pending }) => {
    given('a user opens the app', () => {

    })

    given('the player loads the following mock data:', (docString) => {

    })

    and(/^the user clicks the memori card \((\d+),(\d+)\)$/, (arg0, arg1) => {

    })

    then(/^the memori card display should show the following value: (.*)$/, (arg0) => {
      pending()
    })
  })

  test('Check the pairs - Correct', ({ given, and, then, pending }) => {
    given('a user opens the app', () => {

    })

    given('the player loads the following mock data:', (docString) => {

    })

    and(/^the user clicks the memori card \((\d+),(\d+)\)$/, (arg0, arg1) => {

    })

    then(/^the memori card display should show the following value: (.*)$/, (arg0) => {
      pending()
    })
  })
})
