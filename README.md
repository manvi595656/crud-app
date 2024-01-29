###

Steps to run the project:

1. Downnload and zip folder and extract it.
2. Go to terminal and go the location of crud-app
3. Enter Following commands:
    npm i
    npm start
4. Open http://localhost:3000/ on your browser to view


###

-> Tech Stack Used: React, Redux, SCSS.
-> Currently created Code for mobile view only.

###

Main src Folder consists of following structure: 

1. index.js -> Main starting point of the code where I created store and provided it to App
2. index.scss -> Defined common CSS which is getting used and multiple places. This file also imports different styling files which reuses variables.
3. reducers -> I have created one reducer file that has 4 main functionalities: Add card, cancel card, freeze card and unfreeze card.
4. actions -> actions are defined on similar lines as reducers, only additional information stored is actions are id count which is incremented every time on addition of a new card.
5. data -> All the static data is stored in index.js of this folder. Its in JSON format. Here it list of items I have added in data-> 
    -> My debit cards & All company cards Tab. Note: All company cards tab is not functional.
    -> Default Card Information (2 cards) which will render on page load.
    -> Bottom panel button icons list (Static Data as of now).
    -> Option panel buttons present below card list (only freeze card and cancel card are operational)
    -> Transaction Related Static Data (Curently common for all the cards)
6. Components -> containes all small or big components used for the project (including App).

###

-> Starting Component: Dashboard. 
-> Dashboard is broadly divided into 3 major sections: 
    -> Top Section (contains heading and all card information), 
    -> ScrollPanel (contains card details tab and transactional history)
    -> BottomPanel (bottom static buttons, currently not in use)


###
-> Each component has following structure:
    -> index.js (Main react code)
    -> index.scss (For styling the elements in that component)
    -> asset (Contains all logos and SVG)

###

-> Future Scope: Due to time restriction, I was not able to complete following items in my project:
    -> Minifying CSS and JS.
    -> Handling desktop view.
    -> Defining transaction history for each card.
    -> Add scroll library on horizontal card scroll (as shown in design). Currently dedault scroll is working.

###

-> Usage of Redux:
    -> Saving all debit cards information
    -> Adding new cards in the same list
    -> Removing cards from list
    -> Freezing/unfreezing cards using their isActive status.

###