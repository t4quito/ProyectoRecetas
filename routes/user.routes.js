const userController = require('../controllers/user')
const router = require('express').Router({mergeParams: true})

router
    .route('/users')
    .get(userController.getAll)


router
    .route('/user/:id')
    .get(userController.get)
    .patch(userController.update)
    .delete(userController.delete)

router
    .route('/user/:username/:password')
    .post(userController.create)

module.exports = router
