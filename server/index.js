//Load HTTP module
const express = require("express");
const app = express();
const port = 8000;

// cors allow all
const cors = require("cors");
app.use(cors());


// load body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./api/routes/messages.routes.js")(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});