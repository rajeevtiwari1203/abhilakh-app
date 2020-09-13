var express = require("express");
var router = express.Router();
var cloudinary = require('cloudinary').v2;

router.get('/', async function (req, res, next) {
    //let result = {recordset: [{}]};
    let result = [
            {
                header: 'ABHILASHA FOUNDATION RECEIVED CERTIFICATE OF APPRECIATION FROM MR. GOPAL SHETTY, MEMBER OF PARLIAMENT, (NORTH MUMBAI) FOR STANDING ON THE FRONT LINES OF THE FIGHT AGAINST COVID 19 PANDEMIC ON JUNE 17TH, 2020',
                images: ['https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg']
            },
            {
                header: 'DISTRIBUTED RATION BENEFITING 75 DAILY WAGER, MIGRANT WORKERS, POOR, NEEDY, PHYSICALLY CHALLENGED PEOPLE AND CHILDREN AT NEPTUNE MAGNET MALL, BHANDUP SLUM DURING COVID-19 LOCKDOWN RELIEF ON JUNE 2ND, 2020.',
                images: ['https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg']
            }
        ];
    try {
        //result = await employeeDb.getCandidateById(+id);
        //res.send(result.recordset[0]);
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
        console.log(req.body);
        //result = await candidateDb.addUpdateCandidate(req.body);
        //res.send(result.recordset[0]);
        res.send('hey');
    } catch (e) {
        console.error('log me', e.message);
        next(e);
    }
});


module.exports = router;
