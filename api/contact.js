var express = require("express");
var router = express.Router();

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
    //let candidateDb = new CandidateDb();
    let result = { recordset: [{}] };
    try {
        //result = await candidateDb.addUpdateCandidate(req.body);
        //res.send(result.recordset[0]);
        res.send('hey');
    } catch (e) {
        console.error('log me', e.message);
        next(e);
    }
});


module.exports = router;
