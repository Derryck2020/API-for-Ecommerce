const getAllUsers = async (req, res) => {
	res.send('Get All Users');
};

const getSingleUser = async (req, res) => {
	res.send('Get Single User');
};

const showCurrentUser = async (req, res) => {
	res.send('Show current user');
};

const updateUser = async (req, res) => {
	res.send(req.body);
};

const updateUserPassword = async (req, res) => {
	res.send(req.body);
};

module.exports = {
	getAllUsers,
	getSingleUser,
	showCurrentUser,
	updateUser,
	updateUserPassword,
};
