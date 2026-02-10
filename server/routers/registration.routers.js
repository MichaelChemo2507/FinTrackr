const app = require('express');
const UsersController = require('../controllers/users.controller');
const validation = require('../middleware/validation.middleware');
const usersSchema = require('../utils/validationSchemes/users.validationSchemes')
const tryCatch = require('../middleware/tryCatch.middleware');

const router = app.Router();

router.post('/',[validation(usersSchema.create),tryCatch(UsersController.create)]);

module.exports = router;