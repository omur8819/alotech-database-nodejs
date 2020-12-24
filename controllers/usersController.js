const UserModel = require("../models/UserModel")

exports.get_users = async (req, res, next) => {

  //get users from database
  try {
    const userList = await UserModel.findAll()
    // UserModel.sync({force: true})
    console.log("userlist: " , userList)
    res.render('users', {userList});
    
  } catch (error) {
    res.send("An error occured")
  }
};
