const express = require("express");

const app = express();

app.get('/', (req, res) => {
	res.send("API is running"); //This sends an HTTP response back to the client
});


app.listen(5000, console.log("Server started on PORT 5000"));

