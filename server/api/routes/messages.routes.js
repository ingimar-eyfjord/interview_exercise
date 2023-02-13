module.exports = (app) => {
    const db = require("../models/index.js");
    const messages = require("../controllers/messages.controller.js");

    var router = require("express").Router();

    // Create a new message
    router.post("/messages", messages.create);

    // Retrieve all messages
    router.get("/messages", messages.findAll);

    // Retrieve a single message with id
    router.get("/messages/:id", messages.findOne);

    app.use("/api", router);
};