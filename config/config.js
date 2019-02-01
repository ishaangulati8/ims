require('dotenv').config();
module.exports = {
<<<<<<< HEAD

=======
>>>>>>> 97afb8b65b43236305d58d225378fc83d81ef7bd
    "development": {
      "username": process.env.DB_USER,
      "password": process.env.DB_PASS,
      "database": process.env.DB_NAME,
      "host": process.env.DB_HOST,
      "dialect": process.env.DB_DIALECT,
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql",
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql",
    }
<<<<<<< HEAD
  }
=======
}
>>>>>>> 97afb8b65b43236305d58d225378fc83d81ef7bd
