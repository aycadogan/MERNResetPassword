const router = require('express').Router()
const {signUpController,resetPasswordController,resetPasswordRequestController} = require('../controllers/auth')

router.post('/auth/signup', signUpController);
router.post('/auth/requestResetPassword', resetPasswordRequestController)
router.post('/auth/resetPassword',resetPasswordController)

module.exports = router