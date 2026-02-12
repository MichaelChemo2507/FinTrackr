const app = require('express');
const router = app.Router();

router.use('/registration', require('./registration.routers'));
router.use('/login', require('./login.routers'));

 router.use(require('../middleware/errorHandler.middleware'));

module.exports = router;