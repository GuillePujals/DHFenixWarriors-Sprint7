const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const {Category, Destination, Image, Property, Users} = require('../database/models');


let productController = {
create: (req, res) => {
    res.send('Estoy en create')
}

}


module.exports = productController;