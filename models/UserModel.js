const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

//connect to database
const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOSTNAME,
    DB_PORT,
    DB_NAME } = process.env;
  
const sequelize = new Sequelize(
    `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`
);


  
sequelize
    .authenticate()
    .then(() => console.log("Successfully connected to database"))
    .catch((error) => console.log("Unable to connect to database", error))

//ORM Table
//userTable table in the postgres database
const UserModel = sequelize.define(
    "recruiter",
    {
        //attributes
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
      
    },
    
    
    
    )

    module.exports = UserModel;