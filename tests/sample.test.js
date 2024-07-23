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

  test('Defaut memori cards display', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openThePage()
    })
    then('all the memori cards should be unfliped', () => {
      expect(steps.allCardsUnflipped).toBe(true)
    })
  })
})
