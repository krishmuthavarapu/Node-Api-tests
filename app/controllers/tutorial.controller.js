const db = require("../models");
const Tutorial = db.tutorials;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "cannot be empty" });
        return;
    }
    //create   
    const tutorial = new Tutorial({
        title : req.body.title,
        description : req.body.description,
        published : req.body.published ? req.body.published : false
    });
    // save in db
    tutorial
        .save(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "some error occured"
            });
        });
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {title:{$regex: new RegExp(title), $options:"i"}}:
    Tutorial.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                   err.message || "some error occured"
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Tutorial.findById(id)
      .then(data=>{
          if(!data){
              res.status(400).send({message: " not data with id" + id})
          }
          else res.send(data);
      })
      .catch(err=>{
          res.status(500).send({
              message:err.message || "some error occured"
          })
      })
};

exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: "Have to updating something"
        })
    }
    const id = req.params.id;
    Tutorial.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
      .then(data=>{
          if(!data){
              res.status(400).send({message:
                  "cant update " +  id
              })
          }else{
              res.send({message:"updated successfully."})
          }
      })
      .catch(err=>{
          res.status(500).send({
              message:"error with id " + id
          })
      })
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Tutorial.findByIdAndRemove(id)
       .then(data=>{
           if(!data){
               res.status(404).send({
                   message: `${id} not found`
               })
           }else{
               res.send({
                   message: "succesfully deleted"
               })
           }
       })
       .catch(err=>{
           res.status(500).send({
               message: 'error occured'
           })
       })
};

exports.deleteAll = (req, res) => {
    Tutorial.deleteMany({})
     .then(data=>{
         res.send({
             message: "Removed Everything"
         })
     })
     .catch(err=>{
         res.status(500).send({
             message: "failed succesfully"
         })
     })
}

exports.findPublished = (req, res) => {
    Tutorial.find({published: true})
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message: "error occured "
        })
    })
}