
const ratingDAO = require("../models/ratingModel");
const rating = new ratingDAO({filename: "ratings.db", autoload:true});

exports.addRating = function(req,res){
  console.log("req body to add to database : ", req.body);
  rating.addEntry(req.body).catch((err) => {
    console.log("promise rejected", err);
  });
  res.redirect("/");
}

exports.listRatings = function (req, res) {
  rating.getAllRatings()
    .then((list) => {
      res.json(list);
      console.log(list);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};
