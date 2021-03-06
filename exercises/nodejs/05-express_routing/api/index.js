'use strict';

// http://offirmo.net/wiki/index.php?title=Express.js
// http://expressjs.com/4x/api.html

const _ = require('lodash');
const express = require('express');


/////////////////////////////////////////////

const router = module.exports = new express.Router();

/////////////////////////////////////////////

router.get('/', (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "*");

	// TODO a small page listing your endpoints
	res.send(`<h1>hello from API sub-router !</h1><br>

<h3> Routes : </h3>
<li><a>${req.baseUrl}/ping</a>
<li><a>${req.baseUrl}/echo</a>`);
  // cf. js-class-2016-episode-2\src\server\common\meta-routes.js
});

// TODO one or two routes
router.get('/ping', (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "*");
	res.send('pong');
});

router.get('/echo', (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "*");
	res.send('Echo!');
});
// be creative !

////////////////// examples //////////////

router.get('/hello/:name', function (req, res) {
  res.send(`Hello, ${req.name} !`);
});


router.get('/stuff/:id', function (req, res) {

  res.status(500).json({ error: 'not implemented !' })

  /*
   res.type('json').send({
   id: req.id
   });
   */
});
