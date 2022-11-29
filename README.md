# Baker Street

<!-- When you finish, add a nice screenshot of your game -->
<!--[<img src="./img/page.png">]()-->

## Description

Shitty game where user must complete 3 randomly selected recipes by shooting ingredients and landing them in the right chef in the given ampount of time.

- There will be three chefs on top of the screen and the player's character will be at the bottom of the canvas.
- Every ingredient that lands in the correct chef will grant 1 additional point.
- Every ingredient that doesn't land in the correct chef will extract 1 from the live counter.
- Every ingredient that lands between chefs without crossing paths will also extract 1 from the live counter.
- Player will be able to move left and right and go out of canvas re-appearing on the other side.


## User stories MVP

Minimum user stories:

- user can see inicial page with image, start button and instructions.
- user can move right and left
- user can go out of canvas and appear on the other side (left and right)
- screen display 3 "enemies" at the top of the canvas
- user can shoot coloured bullets
- user should shoot coloured bullets to the enemy assigned with that color
- user wins when 3 bullets reach the correct colored enemy
- user looses if bullets don't land in the right enemy (wrong color)
- user can see the recipe with detailed ingredients above each enemy
- user can see a live counter
- user looses if 3 bullets fall outside any of the enemies

## User stories Backlog

- convert colored enemies to chefs with pots
- user should see the current ingredient next to player's character
- user should see the ingredient flying towards the enemy
- user should see the ingredient flying past the chefs if x,y don't match
 - ingredients that have been shot should be reintroduced into the array of ingredients
 - each recipe has 3 ingredients
 - if player reaches 10 points wins
 - every 10 items shot Gordon Ramsay shows up and deflects the next ingredient

## File structure

- <code>game.js</code>: contains all the elements for the game to work. Methods: start(), \_update()
- <code>scripts.js</code>: contains all the DOM manipulation code to start the game

## Useful links

<!-- When you finish, add these links and commit -->

- [Presentation slides]()
- [Deployed game]()
