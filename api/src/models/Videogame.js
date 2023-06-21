const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("videogame", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    platform: {
      type: DataTypes.ENUM([
        "Xbox 360",
        "Playstation 4",
        "Playstation 5",
        "Xbox S",
        "Xbox X",
      ]),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(25),
      defaultValue: 'default-image',
    },
    releaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    rating: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0.1, max: 5
      },
      allowNull: false,
    }
  }),
  {
    timestamps: false
  };
};
