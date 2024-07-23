import { loadFeature, defineFeature } from 'jest-cucumber'
import * as steps from './steps/sample.steps'

const feature = loadFeature('./tests/features/sample.feature')

defineFeature(feature, (test) => {
  test('Test the sample feature', ({ given, then, pending }) => {
    given('the player opens the game', () => {
      steps.openThePage()
    })
    then(/^I should see the "(.*)" text$/, (arg0) => {
      expect(steps.getTitle()).toBe(arg0)
    })
  })

  test('Create the 4 x 3 board', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openThePage()
    })
    then(/^the board should have "(.*)" rows and "(.*)" columns$/, (numberOfRows, numberOfCols) => {
      expect(steps.boardDimensionValidation(numberOfRows, numberOfCols)).toBe(true)
    })
  })

  test('Defaut memori cards display', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openThePage()
    })
    then('all the memori cards should be unfliped', (pending) => {
      // expect(steps.allCardsUnflipped).toBe(true)
      pending()
    })
  })
})
