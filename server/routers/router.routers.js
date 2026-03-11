const app = require('express');
const router = app.Router();

router.use('/authenticate', require('./authentication.router'));

 router.use(require('../middleware/errorHandler.middleware'));

module.exports = router;