const db = require('../models');
const Shop = db.shop;
const Op = db.Sequelize.Op;


exports.createShop = (req, res) => {
  if(!req.body.name){
      res.status(400).send({
          message: "Content can not be empty."
      });
      return;
  }

  const shop = {
      name: req.body.name,
      amount: req.body.amount
  };

  Shop.create(shop)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Something error occured while creating the Shop."
        });
    });
};


exports.findAllShop = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    Shop.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Shop lists."
        });
      });
};


exports.findOneShop = (req, res) => {
   const id = req.params.id;
   Shop.findByPk(id)
   .then(data => {
       res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message: "Error retrieving Shop list with id=" + id
        });
      });
};


exports.updateShop = (req, res) => {
    const id = req.params.id;

  Shop.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Shopping list updated successfully"
        });
      } else {
        res.send({
          message: "Cannot update Shopping list"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Shopping list with id=" + id
      });
    });
};

  

exports.deleteShop = (req, res) => {
    const id = req.params.id;

    Shop.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Shopping list deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Shopping list with id=${id}. Maybe Shopping list was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Shopping list with id=" + id
        });
      });
  };



