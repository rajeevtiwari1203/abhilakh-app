var express = require("express");
var router = express.Router();
var cloudinary = require('cloudinary').v2;
const {
    Client
} = require('pg');
var bodyParser = require('body-parser');
var express = require("express");
var app = express();

router.get('/', async function (req, res, next) {
    let result = {
        address: {
            line1: "Abhilakh Foundation",
            line2: "Laxmi Chhaya Bungalow, Plot no: 27-27, RSC 11,",
            line3: "Gorai-2, Borivali(W), Mumbai-400 091."
        },
        contact: {
            email: "a.k@gmail.com",
            phone: "+91-8342342342"
        }
    };
    try {
        res.send(result);
    } catch (e) {
        console.error('log me', e.message);
        next(e);
    }
});

// /* POST candidate creation. */
router.post('/create', async function (req, res, next) {
    // let result = { recordset: [{}] };
    try {
        //cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});
        req.Client.connect();
        req.Client.query(`CREATE TABLE Contact (
                        id serial PRIMARY KEY,
                        line1 VARCHAR ( 500 ) NOT NULL,
                        line2 VARCHAR ( 500 ) NOT NULL,
                        line3 VARCHAR ( 500 ) NOT NULL,
                        email VARCHAR ( 255 ) UNIQUE NOT NULL,
                        phone VARCHAR ( 150 ) UNIQUE NOT NULL
                    )`, 
            (err, res) => {
                req.Client.end();
                if(err) console.log('err', err);
                else console.log('res', res);
                //response.json(res ? res.rows : 'no data for ' + request.params.name);
        });
        //result = await candidateDb.addUpdateCandidate(req.body);
        //res.send(result.recordset[0]);
        res.send('hey');
    } catch (e) {
        console.error('log me', e.message);
        next(e);
    }
});


module.exports = router;
