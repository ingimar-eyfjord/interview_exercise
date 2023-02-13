module.exports = (sequelize, Sequelize) => {
    const Messages = sequelize.define(
        "Messages",
        {
            id: {
                type: Sequelize.INTEGER(255),
                primaryKey: true,
                autoIncrement: true,
                noUpdate: true
            },
            Message_content: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
        },
        {
            freezeTableName: true,
            timestamps: false,
        }
    );
    return Messages;
};
