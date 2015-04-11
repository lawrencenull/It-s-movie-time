/*jslint node: true */
"use strict";

var express = require('express'),
    moment  = require('moment'),
    request = require('request'),
    router  = express.Router();

router.get('/:id', function (req, res) {
    request({
        url: 'http://yts.to/api/v2/movie_details.json?with_images=true&movie_id=' + req.params.id,
        json: true,
        timeout: 10000
    }, function (error, response, body) {
        if (body.status === 'ok') {
            res.render('movie', {
                data: body,
                moment: moment
            });
        } else {
            res.render('error', {
                data: body,
                moment: moment
            });
        }
    });
});

module.exports = router;