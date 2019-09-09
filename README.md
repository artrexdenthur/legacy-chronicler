# LEGACY CHRONICLER

An app for recording and remembering the details of your [Legacy](https://en.wikipedia.org/wiki/Legacy_game) board games.
Created with Rails and React-JS as a final project for the Flatiron Learn Computer Science Course

## Versions and Dependencies

## Use Description

This is currently being served by Heroku at https://legacy-chronicler.herokuapp.com/
You can create an account there and create records of your playthroughs of available Legacy games, and view playthroughs other players have posted

## Project Requirements

[ ] The code should be written in ES6 as much as possible
  *i.e. don't do too much Rails programming. Should be fine, just gotta make sure that Rails just handles a simple API and the relevant data manipulation. (See below, client should be doing minimal data manipulation)*

[x] Use the create-react-app generator to start your project
  *Done and done, with additional help from Dakota's Devise setup*

[ ] Your app should have one HTML page to render your react-redux application
  *This is already the case. Leaving unchecked in case I go on a wild hare with login stuff, but for the moment the "advanced" login plan is to actually make use of the Devise-token-login stuff that is already theoretically ready to go*

[ ] There should be 2 container components
  *Most likely start with a view/manipulate games component and a user settings component*

[ ] There should be 5 stateless components
  *!! Pay attention and remember to do this one, making them not just class components that don't carry a state, but actual "functional" components*

[ ] There should be 3 routes
  *Presumably "at least" 3 routes? At any rate, we can certainly have a home page and a user page. Since I do have users, I should be able to RESTfully route a whole set of CRUD pages for any given game*

[ ] Use react-router and RESTful routing
  *react-router installed. RESTful routing should come into play with user and game CRUD actions.*

[ ] Use Redux to modify state change
  *redux is installed and I am preparing to set states for current user, user list, game info, etc*

[ ] Use async actions to send data to and receive data from a server
  *redux thunk is installed and I am preparing to set up the Rails API for it to talk to, in order to do user actions and eventually actually log in via the token system*

[ ] Use a Rails API to handle data persistence. Use fetch() within your actions to GET and POST data (NOT jQuery)
  *Planning on it. Thunk installed for ease of fetch()ing.*

[ ] The client should display data with minimal data manipulation
  *Which means that that falls to Rails*

[ ] Have some minimal styling, either personalized or applying a framework (e.g. react-bootstrap)
  *Bootstrap installed, both on the Rails level and the React level. I'll try to a) make it look pretty, and probably b) remove the style link from the React level (or set it for just development?)*

[ ] Fill out [this checklist](https://goo.gl/forms/ULtKsxuzWomvXuTk2)
  *(!!!)*

[ ] [ed] And don't forget the recorded coding session, walkthrough, and blog post!



## Default


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
