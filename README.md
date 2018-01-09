# Wizr Challenge
Install node modules with

`$npm start`

Start the server with

`$npm start`

Navigate to

`http://localhost:8000/`

1. Implement the login controller function in server/controllers/user.controller.js. Insert the user into the database and return the user to the client. A user is just the email / password combo

2. Implement the login component to consume the login endpoint in client/modules/App/components/Login/Login.js. The component should display
the results back from the database.

The endpoint is at localhost:8000/api/login
Try to make use of the apiCaller in client/util/apiCaller.js
