/* eslint-disable no-console */
const low = require('lowdb');
const path = require('path');
const fileAsync = require('lowdb/lib/storages/file-async');
const db = low(path.join(__dirname, '../db.json'), { storage: fileAsync });
// Set some defaults if your JSON file is empty
db.defaults({ users: [] }).write();

/**
 * Login
 * @param email
 * @param password
 * @returns user object
 */
export const login = (req, res) => {
  /* Insert the email and password into the databse.
   * The database docs are located here:
   * https://github.com/typicode/lowdb
   */

   /* Return the user object back to the client and display the info on the dom */
  let user = {
    email: req.body.email,
    password: req.body.password,
  };

  db.get('users')
  .push(user)
  .write()
  .then(() => {
    res.status(200).send(user);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
};
