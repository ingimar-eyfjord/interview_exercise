const db = require("../models/index.js");
const Messages = db.messages;
const Op = db.Sequelize.Op;

// Create and Save a new Projects
exports.create = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    Messages.create(req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Messages.",
            });
        });
};

exports.findAll = (req, res) => {
    Messages.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Messages.",
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Messages.findByPk(id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Messages with id=" + id,
            });
        });
};
