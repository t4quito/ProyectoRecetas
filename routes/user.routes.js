const userController = require('../controllers/user')
const router = require('express').Router({mergeParams: true})

    router
    .route('/register')
    .post(userController.create)


module.exports = router
