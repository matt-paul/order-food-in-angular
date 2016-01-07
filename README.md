FOODit-jsTest
=============

## Getting started

1. Fork this Github repository.

2. Clone your new repo.

3. Install Node.js and Bower dependencies.

    ```sh
    npm install
    ```

4. Run `grunt serve` to serve up your files using a local Node (Connect) server. A browser window will open pointing to your `index.html` file. Any changes you make will be reflected in the browser immediately (without you having to hit refresh all the time). You will also get feedback about JSHint issues and test results in the terminal as you go along.

5. Commit/branch your stuff as you would normally. When you're finished, push your code to your Github repo, and drop us a link to it in email.

## What we expect from you

The frontend task involves building up the base angular app to match the mobile designs included in the repo.
The solution should take into account:

- This is a mobile design which would be accessed by various devises/browsers.

- The contents of the basket will be retained between browser reloads.

- It should be as true to the designs as possible, but candidates should feel free to add anything that improves the flow/design.

- A solution should show an understanding of the problems involved and make use of the tech stack to solve them.

- We prefer code that is modular and has tests.

![Design overview](/design/mockups/menu_design--overview.jpg?raw=true "Design overview")


## A little guidance

This app was generated using the `generator-angular` Yeoman generator.

It uses AngularJS 1.3

// Below are from Google doc

 JavaScript Engineer Test Tasks

This post is open to engineers that can complete a number of the tasks in this test.
Download the source files
Follow the "Getting Started" part of the README to set up the project
Ignore the "What we expect from you" part
Please firstly complete task 1, then pick whatever tests you feel comfortable working on. Let us know which tests you tackled along with your source code.
You must have written some tests
We recommend you spend 30-35 minutes on a task
hint: We want to see a good balance of JavaScript & CSS

Styling the menu
The styling can be either be done using SASS or CSS, if using CSS you will need to add a CSS file to index.html
Apply the style as per frontend-skills-test--1.png
You will need copy the meal-card__curve.svg from the design/assets folder to app/images folder.
You can ignore:
the tag indicators (circles under the meal name)
the collapse and expand of long description text
the number of options available (you can hard code that to 3).


Add the tag indicators

Each meal in the data/menu.json file contains an array of tags, these tags have indicators:-
charcoal
cheese
chicken
grilled
high-protein
lamb
pasta
peanut
pork
seafood
snack
spicy
starter
sweet
vegetarian

The .svg files for these tags are in the design/assets folder you should copy them to the app/images folder

Add a basket service
Display the count and the total in the header if there is anything in the basket
All meals can be considered as ‘main’
‘Add To Your Order’ button adds the meal to the basket
The total and the count are updated every time you press the ‘Add To Your Order’ button.

Expand the shopping basket
When you click on the total price in the main screen header, you should show the basket as expanded. This will list all of the items in the basket.

Add ‘+’ and ‘-’ buttons in the expanded basket
This will increment and decrement the quantity and total value.
You get extra points if clicking “-” on a meal with a quantity of “1” will remove it from the basket

A click on the ‘Confirm Order’ will clear the basket and close it.

Styling the basket
The styling should be as per frontend-skills-test--2.png

Add animation (with CSS)
For opening and closing of the basket, the animation is shown across
frontend-skills-test--3a.png
frontend-skills-test--3b.png
and
frontend-skills-test--3c.png


Detect Main Meals
Consider meals that have a tag of "#course:main_courses" as a main meal and meals that do not have this tag as “other”

Update the collapsed basket display frontend-skills-test--2.png and the expanded basket display frontend-skills-test--3c.png to show quantity and totals for ‘main’ and ‘other’


Add local storage of the basket
After a full refresh of the page the contents of the basket will remain.
