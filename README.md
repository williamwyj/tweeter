# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Chance
- Body-Parser

## Functions

# Responsive Design
- Tweeter's page layout changes depending on the size of the screen:
  1. Desktop Monitor layout for screens 1024 pixels wide or wider:
!["Desktop screen layout"](https://github.com/williamwyj/tweeter/blob/master/docs/MainPage%20Desktop.png?raw=true)
  2. Tablet screen layout for screens less than 1024 pixels wide:
!["Tablet screen layout"](https://github.com/williamwyj/tweeter/blob/master/docs/MainPage%20Tablet.png?raw=true)

# Refresh content without reloading the page
- Everytime a new tweet is inputed, the tweets displayed below will update to display the just entered tweet on top.

# Retractable tweet entry block
- The tweet entry block can be hidden and reveal by the "Write a new tweet" button on the top right corner of the screen

# Error  Messages
- An error message will slide down above the tweet entry block if the tweet is empty or longer than 140 characters. 
- Once a tweet that pass these restrictions is submitted, the error message disappears

# To top button
- Once the user scroll the screen down from the top, a back to top button appears on the button right. Hovering over this button will animate the button to bounce slightly, once clicked the page will nagivate back to the very top and the button will disappear.

# Word Counter
- The word counter on the bottom right of the tweet entry block keep track of the characters remaining from the pre-set max of 140, and will turn red if enter more than 140 characters.