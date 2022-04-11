const { signup, requestResetPassword,resetPassword} = require('../middleware/auth.service')

const signUpController = async (req,res,next) => {
    const signUpService = await signup(req.body)
    return res.json(signUpService)
}

const resetPasswordRequestController = async (req,res,next) => {
    const requestPasswordResetService = await requestResetPassword(re.body.email)
    return res.json(requestPasswordResetService)
}

const resetPasswordController = async (req,res,next) => {
    const resetPasswordService = await resetPassword(req.body.userId, req.body.token,req.body.password)
    return res.json(resetPasswordService)
}

module.exports = {
    signUpController,
    resetPasswordController,
    resetPasswordRequestController
}