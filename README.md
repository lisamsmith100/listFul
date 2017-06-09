# listFul

  An app for for the chronic lister.  Make a list.

- Live app: [listFul](https://lisamsmith100.github.io/listFul/)
- Live API: [listFul-rails-api](https://hnd-api.herokuapp.com/)
- API repo on GitHub: [lisamsmith100/listFul-rails-api](https://github.com/lisamsmith100/listFul-rails-api)

![Screenshot of listFul](http://imgur.com/tsbtUEY)

## About listFul

  [listFul](https://lisamsmith100.github.io/listFul/) lets users generate a list. The list can be created, edited, or deleted from the browser and all actions need to be authenticated.

  listFul is built using javascript, Handlebars, HTML, and CSS and relies on a Rails API/Postgres to persist data. Code for that API can be found at lisamsmith100/listFul-rails-api](<https://github.com/lisamsmith100/listFul-rails-api>).

## Project Planning

[project plan](<https://github.com/lisamsmith100/listFul-rails-api>)

### User Stories

As as user,…
	I want to sign up
	I want to sign in
	I want to sign out
	I want to change my password

	I want to create a list - COMPLETED
	I want to save a list - COMPLETED
	I want to edit a list title - COMPLETED
	I want to delete a list - COMPLETED
	I want to view all of my list titles - COMPLETED
  I want to add items to a list - COMPLETED
  I want to edit items in a list - NOT COMPLETED
  I want to delete an item from a list - COMPLETED
  I want to view all of the items in a list - COMPLETED

### Stretch User Stories

As a user,…
  I want to be reminded of a due date for a list item
  I want to sort my lists
	I want to be reminded of a due date for a list
	I want to add link to Google directions to a list item
  I want to have list templates by category
  I want to categorize my lists
  I want to sort my list items
  I want to cross list items off
  I want to add dates due to the list

  ### Wireframes

  [Original Wireframe](http://imgur.com/a/G4Gr3)
  The project culminated from my wish to develop an app with this functionality.

  ## Data Model

  An entity relationship diagram is available [here](http://imgur.com/dgGqjnS).

  Resources include:

  - Users
  - Lists
  - List Items

  ## Development Process

  Originally, I set out to create a list templating app using Ember and Rails.
  After spending nearly 20 hours trying with Ember, and in agreement with a consultant
  in switching gears if not comfortable enough, I decided to pursue the Browser
  Template avenue.

  I had high ambitions of making something grand but, downgraded the plans for this
  project due to the lack of time and number of issues, some withstanding and some new.

  I ended with a fairly smaller subset of what I had set out to accomplish
  but am able to create, read, and update lists, with a different api, client than
  project two.

  I began with a high level plan and continued to whittle down to daily tasks.
  Throughout the process, I felt pressure to try something new.  I was interested in
  giving Ember a chance but feel I need more time to make it work property.

  Overall, I feel good that I learned quite a bit about full stack
  application development throughout the course and given a few more days, would
  have a product that would meet several stretch goals.


  ## Dependencies

  Install build dependencies with `npm install`.

  -   [Webpack](https://webpack.github.io/)
  -   [Bootstrap](http://getbootstrap.com)
  -   [Handlebars.js](http://handlebarsjs.com/)

## Next Steps

  - Incorporate list_items back into the project
  - Re scaffold template and template items components/routes
  - Add in API to send email with reminders
  - Add in columns and modals

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3.
