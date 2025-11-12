const Router = require('express').Router;
const useController = require('../controllers/user-controller')
const router = new Router();

router.post('/registration', useController.registration);
router.post('/login', useController.login);
router.post('/logout', useController.logout);
router.get('/activate/:link', useController.activate);
router.get('/refresh', useController.refresh);
router.get('/users', useController.getUsers);

module.exports = router;