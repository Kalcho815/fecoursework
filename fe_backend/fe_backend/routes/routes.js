const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");

router.post('/addRating', controller.addRating);
router.get('/listRatings', controller.listRatings);

router.use(function(req, res) {
        res.status(404);
        res.type('text/plain');
        res.send('404 Not found.');
    });

router.use(function(err, req, res, next) {
        res.status(500);
        res.type('text/plain');
        res.send('Internal Server Error.');
    });

module.exports = router;