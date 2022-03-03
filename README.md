# mInteger

## Copyright

&copy; 2018 Hack Reactor.  This material is copyrighted by Hack Reactor and may not be distributed to the public

## Prompt

> Because money doesn't grow on Binary Search Trees

*For best experience, please view this README in the browser*.

You will create a full-stack application that helps users get better at budgeting by tracking and categorizing their purchases (similar to tools like Mint.com or You Need A Budget). Your front end will display views created from data in a [MySQL](https://dev.mysql.com/doc/refman/5.7/en/) database. You will have the choice of using [AngularJS](https://angularjs.org/), [React](https://reactjs.org), or [Backbone](http://backbonejs.org/), and will serve your application with a [Node.js](https://nodejs.org/) web server using [Express](https://expressjs.com/).

**BEFORE CONTINUING you must confirm you are running MySQL version 5.7**
To check the version of the installed MySQL server: on Mac run `mysql_config --version` in the terminal; on Windows run `mysql -V` in the terminal and check the value printed for `Distrib`. **If you are running something other than 5.7.x, you must speak with your Technical Mentor before you can move on.**

NAME WHICH FRONT END FRAMEWORK YOU WILL BE USING FOR THE ASSESSMENT HERE:
* *[React]*

HOW TO START THIS APP
* *[npm run start:dev]*

By design, this assessment contains more work than you will be able to complete in a day, so don't be concerned about not completing all of the steps below. Rather, please work on the following steps **in order**, moving on to the next step only after the one you are working on is complete. **Commit frequently** with informative messages. While there are instructions to commit at the end of each step, these should not be your only commits.

---

### Before You Begin
**Complete these setup tasks**:
- [1] Inside this directory in your terminal, run `git remote rm origin` to prevent yourself from accidentally pushing your code during the assessment.
- [1] Run `npm install` inside this directory to install dependencies.
- [1] Ensure that MySQL server is running on your computer (`mysql.server start`).
- [1] Create the database and tables using the provided `schema.sql`, following the directions provided in the comments to populate your database.
- [1] Serve your application from the provided Express web server.
  - If using AngularJS or Backbone, start your application with the command `npm run start:dev`.
  - If using React, start your application with two commands, `npm run build:dev` and `npm run start:dev`, in two separate terminal tabs. For more information about Webpack, read the comments in `webpack.config.js` or take a look at [the Webpack Docs](https://webpack.github.io/docs/).

**WHEN THESE TASKS ARE COMPLETE:** proceed to Step One.

### Step One: Display All Transactions
**Implement the following user story:**
> As a user, when I load the app, I expect to see a list of all of my transactions.

![step one][one]

**Implement this user story by doing the following:**

*Note: You may use only the npm modules listed in available resources to complete this task.*

- [1] Refactor the `TransactionList` component (in the `angular-client`, `react-client`, or `backbone-client` directory) to dynamically render transactions using the dummy data in `dummy_data.js`. You may create additional components as necessary.
- [1] Complete the `getAllTransactions` function in `database-mysql/index.js`.
- [1] In the Express server `server/index.js`, complete the request handler that will respond to `GET` requests to `/api/transactions` with JSON of the transactions stored in the database. You should use the `getAllTransactions` function that you wrote earlier in this step in your implementation.
- [1] Rather than rendering the dummy data, make a request from the client to the server to retrieve the transaction information, and render that data instead.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step one"

---
### Step Two: Create Categories
**Implement the following user stories:**
> As a user, I expect to see a list of categories to help me plan my budget.

> As a user, I want to add customized categories to my list to better reflect my spending habits.

![step two][two]

**Implement these user stories by doing the following:**

*Note: You may use only the npm modules listed in available resources to complete this task.*

- [1] Create a component or components to dynamically render the budget category list
- [ ] Create a component or components to allow a user to add new budget categories (these new categories should be saved in the database - multiple categories with the same name should not be allowed)
- [ ] Add api routes as necessary to facilitate adding budget categories and getting a list of budget categories
- [1] Modify the schema.sql file as necessary
- [ ] Add database functions to facilitiate inserting budget categories into the database and selecting the list of budget categories from the database

*Note: When a new budget category is added, the budget category should appear on the client side without the user having to refresh the page.*

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step two"

---
### Step Three: Add Categories to Transactions
**Implement the following user story:**
> As a user, I want to assign a budget category to each transaction so I can be aware of where I am spending my money.

![step three][three]

**Implement this user story by doing the following:**

*Note: You may use only the npm modules listed in available resources to complete this task.*

- [ ] Modify the transaction list to display each transaction's category (if none is assigned, show "none")
- [ ] When the user clicks the budget category in a transaction list entry, they are shown a dropdown menu containing all of the current budget categories.
- [ ] Save the user's category choice in the database (and show on the client the new category without the user having to refresh).

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step three"

---

### Step Four: Sorting the Category List
**Implement the following user story:**
> As a user assigning a budget category to a transaction, I want my most frequently used categories to appear at the top of the dropdown menu so I don't have to scroll down to find them.

**Implement this user story by doing the following:**

*Note: You may use only the npm modules listed in available resources to complete this task.*

- [ ] Create or modify any components as necessary.
- [ ] Create or modify any API routes as necessary.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step four"

---

### Step Five: Create a Report
**Implement the following user story:**
> As a user, I want to see a chart that shows me how my actual spending habits compare to my planned budget within each category.

**Implement this user story by doing the following:**
- [ ] Use the [C3 library](http://c3js.org) to make a bar chart comparing actual spending to budgeted spending for each category.
  - *NOTE* - You'll need to figure out how to import the C3 library into your project.
- [ ] Create any new components, helper functions, and server routes as necessary.

---

### Step Six: Import transactions from a CSV file
**Implement the following user story:**
> As a user, I want to be upload my transaction data directly.

**Implement this user story by doing the following:**
- [ ] Use the [HTML File input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file) to allow the user to upload a file on the client. Do NOT use a pre-built React, AngularJS, or Backbone component.
- [ ] Send that file to your Express server, parse the CSV file, and save that data in your database. You may use an npm module to assist with parsing the CSV file.
- [ ] Create or modify any new components, helper functions, server routes, or database functions as necessary.

---

## Available Resources

* [Postman](https://www.getpostman.com/)
* [AngularJS Docs](https://angularjs.org/)
* [Backbone Docs](http://backbonejs.org/)
* [React Docs](https://reactjs.org)
* [Webpack Docs](https://webpack.js.org/)
* [Babel Docs](https://babeljs.io/docs/setup/)
* [jQuery Docs](https://jquery.com/)
* [Axios Docs](https://www.npmjs.com/package/axios)
* [Underscore Docs](http://underscorejs.org/)
* [Bluebird Docs](http://bluebirdjs.com/)
* [Node.js Docs](https://nodejs.org/)
* [Express Docs](https://expressjs.com/)
* [Body Parser Middleware Docs](https://github.com/expressjs/body-parser)
* [MySQL Docs](https://dev.mysql.com/doc/refman/5.7/en/)
* [MySQL npm package Docs](https://www.npmjs.com/package/mysql)
* [MySQL Cheat Sheet](http://www.cheat-sheets.org/sites/sql.su/)
* Docs for any npm packages you might use
* [MDN](https://developer.mozilla.org/)
* [Stack Overflow](http://stackoverflow.com/)
* [Google Search](https://google.com) to search for the correct page on any of the documentation above

[one]: mockups/step_one.gif
[two]: mockups/step_two.gif
[three]: mockups/step_three.gif
