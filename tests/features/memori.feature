Feature: Memori

    # board 4 x 3
    # unflipped memori cards = #
    # flipped memori cards = 1,2,3,4,5,6 (we have 6 pairs)

    Background:
        Given a user opens the app

    Scenario: Create the 4 x 3 board
        Then  the board should have "3" rows and "4" columns

    Scenario: Defaut memori cards display
        Then  all the memori cards should be unflipped

    Scenario: Defaut memori cards enabled
        Then  all the memori cards should be enabled

    Scenario: Click an unflipped memori card
        Given the player loads the following mock data:
            """
            | 1 |
            """
        And the memori card (1,1) is unflipped
        When the player click the memori card (1,1)
        Then the memori card (1,1) should be flipped:
            """
            | 1 |
            """

    Scenario: Disable a flipped memori card
        Given the player loads the following mock data:
            """
            | 1 |
            """
        Then the memori card (1,1) should be disabled

    Scenario Outline: Check the pairs - Incorrect
        Given the player loads the following mock data:
            """
            | 1 | <memoriCardValue> |
            """
        And the user clicks the memori card (1,2)
        Then the memori card display should show the following value: "<memoriCardValue>"
            Examples:
                | memoriCardValue | 
                |               2 |  
                |               3 |   
                |               4 | 
                |               5 |  
                |               6 |   

    Scenario Outline: Check the pairs - Correct
        Given the player loads the following mock data:
            """
            | 1 | <memoriCardValue> |
            """
        And the user clicks the memori card (1,2)
        Then the memori card display should show the following value: "<memoriCardValue>"
            Examples:
                | memoriCardValue | 
                |               1 |    

    Scenario: The flipped pair is correct - stay flipped and disabled
        Given the player loads the following mock data:
            """
            | 1 | 1 | 2 |
            """
        When the player click the memori card (1,3)
        Then the memori cards (1,1) and (1,2) should stay flipped

    Scenario: The flipped pair is incorrect - return to default memori card state
        Given the player loads the following mock data:
            """
            | 1 | 2 |
            """
        Then the memori cards (1,1) and (1,2) should be unflipped

    Scenario: Win the game - all the memori cards flipped
        Given the player loads the following mock data:
            """
            | 1 | 1 | 4 | 4 |
            | 2 | 2 | 5 | 5 |
            | 3 | 3 | 6 | 6 |
            """
        And the user clicks the memori card (3,4)
        Then  all the memori cards should stay flipped
    

    