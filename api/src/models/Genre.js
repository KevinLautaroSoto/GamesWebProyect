const { DataTypes } = require('sequelize');

module.export = (sequelize) => {
    sequelize.define("genre", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(30),
            unique: true,
            allowNull: false
        }
    },
        {
            timestamps: false
        }
    );
};