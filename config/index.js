if (process.env.NODE_ENV !== "production") {
//	require("dotenv").config();
}

let PORT = process.env.PORT || 30001;

module.exports = {
	PORT,
	//USER_EMAIL: process.env.USER_EMAIL,
	//USER_PASSWORD: process.env.USER_PASSWORD,
};