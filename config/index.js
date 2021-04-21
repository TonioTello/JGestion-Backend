if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

module.exports = {
	PORT,
	MONGO_URI, 
	//USER_EMAIL: process.env.USER_EMAIL,
	//USER_PASSWORD: process.env.USER_PASSWORD,
};