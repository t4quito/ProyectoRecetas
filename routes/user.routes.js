const userController = require('../controllers/user')
const router = require('express').Router({mergeParams: true})

router
    .route('/user/:id')
    .patch(userController.update)
    .delete(userController.delete)

router
    .route('/singUp')
    .post(userController.create)

router
    .route('/login')
    .get(userController.get)
    
module.exports = router
