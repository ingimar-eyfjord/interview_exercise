> # Exercise

This exercise is meant for me to gauge your knowledge and programming skills with React, Node.js and Flux architecture.

This repository consists of two applications that reflect the technologies and programming paradigms used in Dialogue One A/s.

The app is a simple messaging boilerplate application created with React (app) and a Node.js server (server). The current progress of it is that it fetches messages on load and posts messages when you write and submit.

> For this exercise, you should do two of the following:

- Implement pagination for retrieving messages.
- Add real-time updates
- Implement message editing

> And all of the following:

- Implement a Flux store for messages.
- Implement Flux dispatchers.
- Connect the React components to the Flux store.

This article shows you how to implement your own Flux based Store using useReducer and useContext hooks <https://blog.logrocket.com/react-hooks-context-redux-state-management/> 

You can also use Redux <https://redux.js.org/> or MobX <https://mobx.js.org/> if you want to.

> Bonus tasks:

- Implement Flux actions for message operations.
- Implement user authentication
- Implement a Flux store for user authentication
- Implement Flux actions and dispatchers for authentication

## Getting started

You'll need to have Yarn installed <https://yarnpkg.com/> to install the dependencies.

Navigate to ``./app`` and open the terminal, run:

``
yarn
``

The yarn package manager should install all the dependencies.
then run

``
yarn start
``

After this, you should have a react application with a text field, and a submit button. Now navigate to ``./server`` and open the terminal. Then run

``
yarn
``

After which, you should also have installed the dependencies for the server. after which you can run

``
yarn start
``

And now you should have a server running as well.

## What I'm looking for

- You might not be able to achieve everything I asked for, but I'mlooking for you to explain your reasoning for the choices you made.
- I want to gauge your knowledge of React, Node.js and Flux architecture.
- I want to see how you structure your code.
- I want to see how you solve problems.
- I want to see how you communicate your ideas.

I don't want you to waste any time on how the app looks or how it's styled. I want you to focus on the functionality and the code.

> Further information about the technologies and paradigms used in this exercise can be found below.

## The app

The application is a normal React application, created with create-react-app. I added Material UI for styling and Axios for HTTP requests.

What I'm looking for is that you can implement the tasks above, and that you can explain your reasoning for the choices you made.

### Flux

Flux is a pattern for building scalable and maintainable applications that were created by Facebook. It is particularly well-suited for building web applications with complex state management, such as those built with React.

In a Flux architecture, data flows in a unidirectional manner through your application, rather than in multiple directions as in traditional MVC architectures. This helps to prevent problems with state management and makes it easier to reason about the behavior of your application.

The Flux architecture consists of four main components:

1. Actions: Actions are simple objects that describe the user's intent to change the state of the application. They can be triggered by user interactions or by other parts of the application, and they contain information about the change that should be made.

2. Dispatcher: The Dispatcher is the central hub of a Flux application. It is responsible for distributing actions to the appropriate stores and ensuring that all stores receive a consistent view of the state of the application.

3. Stores: Stores are where the state of the application is stored and where the logic for modifying the state in response to actions lives. They contain the data and methods needed to update the state in response to actions and to emit change events when the state is updated.

4. Views: Views are the React components that render the state of the application. They listen for change events from stores and update the UI when the state changes.

In a Flux architecture, actions flow from the views, through the Dispatcher, and into the stores. The stores update their state in response to the actions and emit change events, which the views listen for and use to update the UI. This unidirectional flow of data helps to prevent state inconsistencies and makes it easier to understand the behavior of the application.

In summary, the Flux architecture provides a clear and scalable structure for managing the state of your React application. It provides a consistent and predictable way of handling actions and updating the state, making it easier to build and maintain complex applications.

## The server

The server is built using Node.js, a JavaScript runtime that allows you to run JavaScript on the server. The server uses Express, a popular web framework for Node.js, to handle HTTP requests and responses. Express makes it easy to define routes, handle middleware, and process requests and responses. The server uses Nodemon to automatically restart the server whenever you make changes to the code.

Nodemon is a popular tool for Node.js development that automatically restarts your Node.js application whenever you make changes to the code. This is particularly useful during development, as it eliminates the need to manually restart the server after every change.

The server also uses Sequelize, a Node.js ORM (Object-Relational Mapping), to interact with a SQLite database. SQLite is a light-weight, file-based database that is well suited for small projects. The in-memory version of SQLite is used in this setup, which means that the database will be created in memory and will not be persisted to disk.

With Sequelize, you can define models for your data and interact with the database using JavaScript objects. Sequelize provides a convenient API for performing common database operations, such as creating tables, inserting data, and querying data.

### Structure

By organizing code into separate models, controllers, and routes folders, we are following the Model-View-Controller (MVC) design pattern. This design pattern separates the application into three distinct components:

1. Models: The models folder contains the Sequelize models that represent the data stored in your database. A model is essentially a blueprint for a database table, and it defines the structure of the data that will be stored in that table.

2. Controllers: The controllers folder contains the logic for handling HTTP requests and communicating with the models. A controller acts as an intermediary between the routes and the models, receiving requests from the routes and using the models to perform the necessary operations.

3. Routes: The routes folder defines the routes for your application. A route is a mapping between an HTTP request and a specific function in a controller. For example, a route might define that a GET request to ``/api/messages`` should trigger a function in the controller that retrieves all messages from the database.

By separating your code into these three components, you can achieve a clear separation of concerns, making your code easier to maintain and scale. The models handle the data, the controllers handle the logic, and the routes handle the mapping between requests and responses.

In short, the models folder holds the data models, the controllers folder holds the logic for handling requests, and the routes folder defines the routes for your application. By using this organizational structure, you can create a clean and maintainable codebase that follows the MVC design pattern.