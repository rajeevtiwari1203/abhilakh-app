var express = require("express");
var router = express.Router();

router.get('/', async function (req, res, next) {
    let result = {
        address: {
            line1: "Abhilakh Foundation",
            line2: "Village- Banghusra, Post- Jhalidham, Thana- Khargupur,",
            line3: "Disst- Gonda, Uttar Pradesh 271204."
        },
        contact: {
            email: "abhilakhfoundation@gmail.com",
            phone: "+91-9696707035"
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
