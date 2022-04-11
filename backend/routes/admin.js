var admin = require('../controllers/admin');
const express = require('express')
const router = express.Router()
const jwtAuth = require('../utils/jwt');
const joiValidation = require('../utils/joi_validation');


router.get("/testing", admin.testing);
router.post('/createAdmin', joiValidation.createNewUser, admin.createAdmin)
router.post('/loginAdmin', admin.loginAdmin)
// router.get('/getAllUsers', Auth.auth, admin.getAllUsers)
// router.post('/getUserById', Auth.auth, admin.getUsersById)
// router.post('/deleteUser', Auth.auth, admin.deleteUser)
// router.post('/createAndUpdateUser', admin.createAndUpdateUser)

module.exports = router;

