var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")


/* GET users listing. */
router.get('/', usersController.get_users);

router.post('/add', usersController.add_user )
router.get('/add', usersController.show_add_user_form);

router.get('/:id/delete', usersController.delete_user)

router.get("/:id/edit", usersController.show_edit_user_page)
router.get("/:id/edit", usersController.edit_user)



module.exports = router;
