const nedb = require("nedb");

class Ratings {
    constructor(ratingFilePath) {
        console.log(ratingFilePath);
        if (ratingFilePath) {
            this.rating = new nedb(ratingFilePath);
            console.log("order connected to " + ratingFilePath);
            ratingFilePath;
        } else {
            this.rating = new nedb();
        }
    }

    addEntry(rating) {
        var entry = {
            rating: rating,
        };
        return new Promise((resolve, reject) => {
            this.rating.insert(entry, function (err, doc) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            });
        });
    }

    getAllRatings() {
        return new Promise((resolve, reject) => {
          this.rating.find({}, function (err, entries) {
            if (err) {
              reject(err);
            } else {
              resolve(entries);
              console.log("function all() returns: ", entries);
            }
          });
        });
    }
}
module.exports = Ratings;
