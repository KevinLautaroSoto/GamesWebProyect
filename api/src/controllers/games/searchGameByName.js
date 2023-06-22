const { Sequelize } = require("sequelize");
const { Game } = require("../../db");

const searchGameByName = async (name) => {
    const gameByName = await Game.findAll({
        where: Sequelize.where(Sequelize.fn('UPPER', Sequelize.col('name')), 'LIKE', `%${name.toUpperCase()}%`)//*1
    })
    console.log(gameByName);
    return gameByName;
};

module.exports = searchGameByName;

// NOTAS: 
//*1En este ejemplo, se utiliza Sequelize.fn() para aplicar la función UPPER de SQL, que convierte el valor de la columna name a mayúsculas en la base de datos. Luego, se utiliza Sequelize.col() para referenciar la columna name en la base de datos. Finalmente, se utiliza Sequelize.where() para construir una consulta que busca valores que contengan la cadena name proporcionada, sin importar las mayúsculas y minúsculas. El uso de % antes y después de name.toUpperCase() en el valor de búsqueda permite realizar una búsqueda con coincidencia parcial.