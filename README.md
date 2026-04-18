# 1. Modular Architecture Proposal

- ## a) Current Architecture
    - Currently, there is only one javascript file. This file handles all data reading, game logic, DOM manipulation, and storage. All the responsiblities are mixed together as there is only one js file for all
    proccesses. This has resulted in the javascript file being very confusing and hard to look through when needing to make changes to the code.

        <img width="720" height="460" alt="Blank diagram" src="https://github.com/user-attachments/assets/9d8cb357-7c11-45f5-9ffd-84444d4ed210" />

- ## b) Propose Modular Design

    - ### main.js
        - Contains and utlizes the other modules as well as controls some user input
            - let held_down
    - ### storage.js
        - Holds all storage functions
            - loadStorage()
            - setStorage()
            - createStorage()
            - convertCoordsToIndex()
    - ### dom.js
        - Holds all the functions which utilize DOM and construct the page
            - let loaded_puzzle
            - let current_colors
            - setTitle()
            - createGrid()
            - createPuzzleList()
            - createColorList()
            - getImageData()
            - changePage()
    - ### gameLogic.js
        - Holds all the functions used for game logic and adjacent elements
            -  let progress
            -  let selected_color
            -  buttonClick()
            -  updateProgress()
            -  switchColor()
    - ### settings.js
        - Controls and holds functions for the settings menu
            - const dialog
            - const dialogBtn
            - const settings
            - const reset
            - changePallette()
    - ### misc.js
        - Handles additional miscellaneous functions
            -  getContrastColor()
            -  modifyString()
    - ### Refactors
        - assignment2.js is named to main.js and has most function calls and variable moved into other js files
        - storage.js is created and has all the storage functions added to it
        - dom.js is created and contains all the functions and variables used to manipulate the DOM
        - gameLogic.js is created and is used to control all aspects of game's logic
        - settings.js is created and contains the variables, functions, and some js to create the settings page
        - misc.js is created and holds the miscellaneous functions that aren't used by any particular aspects of the js


        <img width="1460" height="877" alt="Blank diagram (1)" src="https://github.com/user-attachments/assets/f9173751-7a0f-4b4b-9ddd-e09f0179cc85" />

# 2. Implement at least 2 refactor changes
- ## misc.js
    - Goal of creation was to clean up main.js
    - Moved the getContrastColor and modifyString function from main.js to misc.js
- ## settings.js
    - Goal was to allocate most of the settings code to its own js file
    - Moved the changePallette function from main.js to settings.js
    - Took the code to add event listeners to the settings menu and turned the code into a function called addSettingsListener
