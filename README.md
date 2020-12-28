## Alotech-database-nodejs
Information Measurement Project

* This Project can be reached [https://alotechnodejs.herokuapp.com/](https://alotechnodejs.herokuapp.com/)

It is a set of operations, getting servers to execute 

* Create (POST) - Add user
* Read (GET)- Get User
* Update (PUT) - Change User Information
* Delete (DELETE)- Remove User

# Node and Express Js installed
``` 
npm init 
npm install express --save
```
# Project was created by Nodemon package and Express Generation / EJS Template
``` 
npm install nodemon --save-dev
npx express-generator
npm install ejs --save
```
# Installed dependencies packages
- "cookie-parser": "^1.4.5",
- "debug": "^2.6.9",
- "dotenv": "^8.2.0",
- "ejs": "^2.6.2",
- "express": "^4.16.4",
- "http-errors": "^1.6.3",
- "morgan": "^1.9.1",
- "nodemon": "^2.0.6",
- "pg": "^8.5.1",
- "sequelize": "^6.3.5"

# Connect to database
* used <b>sequlize</b> package in order to connect <b>POSTGRESQL</b> with PGADMIN
* This project deployment to HEROKU CLOUD system

# Designed by using MVC construction
| MODEL | VIEW | CONTROLLER |
|---| --- | --- |
| PostgreSQL | EJS | EXPRESS.JS |

# Landing Page with Home/Users Link
![](Readme-Images/Landing.png)

# Users Table could be edited/added/deleted
![](Readme-Images/userstable.png)

# Add user form into database
![](Readme-Images/addusers.png)

