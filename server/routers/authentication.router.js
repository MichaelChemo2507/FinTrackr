const app = require('express');
const UsersController = require('../controllers/users.controller');
const validation = require('../middleware/validation.middleware');
const usersSchema = require('../utils/validationSchemes/users.validationSchemes');
const tryCatch = require('../middleware/tryCatch.middleware');

const router = app.Router();

router.post('/registration',[validation(usersSchema.create),tryCatch(UsersController.create)]);
router.post('/login', [validation(usersSchema.login), tryCatch(UsersController.login)]);

module.exports = router;