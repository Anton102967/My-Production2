const userService = require('../service/user-service')

class UserController {
    async registration(req, res, next) {
        try {
             let body = req.body;

            if (typeof body === 'string') {
                try {
                    body = JSON.parse(body);
                } catch (parseError) {
                    return res.status(400).json({ message: 'Invalid request body. Expected JSON.' });
                }
            }
            const { email, password } = body || {};
            const userData = await userService.registration(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (e) {
            console.log(e)
            return res.status(400).json({ message: e.message });
        }
    }

    async login(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async logout(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async activate(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async refresh(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async getUsers(req, res, next) {
        try {
            res.json(['123', '456', '789'])
        } catch (e) {

        }
    }
}

module.exports = new UserController();