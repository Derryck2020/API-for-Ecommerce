const express = require('express');
const router = express.Router();
const {
	authenticateUser,
	authorizePermissions,
} = require('../middleware/authentication');

const {
	getAllUsers,
	getSingleUser,
	showCurrentUser,
	updateUser,
	updateUserPassword,
} = require('../controllers/userController');

// get route
router
	.route('/')
	.get(authenticateUser, authorizePermissions('admin', 'owner'), getAllUsers);

router.route('/showMe').get(showCurrentUser);
// patch route
router.route('/updateUser').patch(updateUser);
router.route('/updateUserPassword').patch(updateUserPassword);

// get route single User
router.route('/:id').get(authenticateUser, getSingleUser);

module.exports = router;
