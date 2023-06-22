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
        "PC",
        "PlayStation 4",
        "PlayStation 5",
        "Xbox One",
        "Xbox Series S/X",
        "Nintendo Switch",
        "iOS",
        "Android"
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
