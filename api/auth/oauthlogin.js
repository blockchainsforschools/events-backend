const router = require("express").Router();
const RefusalError = require("../../utils/refusalerror");
const { OAuth2Client } = require("google-auth-library");
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

const verify = async token => {
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: CLIENT_ID // Specify the CLIENT_ID of the app that accesses the backend
		// Or, if multiple clients access the backend:
		//[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
	});
	const payload = ticket.getPayload();
	const userId = payload["sub"];
	// If request specified a G Suite domain:
	//const domain = payload['hd'];
};

router.post("/", async (req, res) => {
	verify(req.body.token).catch(error => {
		console.error();
		throw new RefusalError(
			"Those OAuth credentials were invalid. Please try again.",
			"INVALID_CREDENTIALS"
		);
	});
});

module.exports = router;
