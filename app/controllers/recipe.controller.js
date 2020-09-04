const db = require('../models');
const Recipe = db.recipes;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  if(!req.body.name  || !req.body.imageUrl || !req.body.description){
      res.status(400).send({
          message: "Content can not be empty."
      });
      return;
  }

  const recipe = {
      name: req.body.name,
      imageUrl: req.body.imageUrl,
      description: req.body.description,
      ingredients: req.body.ingredients,
  };

  Recipe.create(recipe)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Something error occured while creating the Recipe."
        });
    });
};


exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    Recipe.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving recipes."
        });
      });
};


exports.findOne = (req, res) => {
   const id = req.params.id;
   Recipe.findByPk(id)
   .then(data => {
       res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message: "Error retrieving Recipe with id=" + id
        });
      });
};


exports.update = (req, res) => {
    const id = req.params.id;

  Recipe.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Recipe updated successfully"
        });
      } else {
        res.send({
          message: "Cannot update Recipe"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Recipe with id=" + id
      });
    });
};

  

exports.delete = (req, res) => {
    const id = req.params.id;

    Recipe.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Recipe deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Recipe with id=${id}. Maybe Recipe was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Recipe with id=" + id
        });
      });
  };




