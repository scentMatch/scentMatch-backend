require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT
const app = express();


app.listen(PORT, (error) =>{
	if(!error)console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else console.log("Error occurred, server can't start", error);
});
