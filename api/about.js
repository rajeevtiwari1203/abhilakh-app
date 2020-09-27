var express = require("express");
var router = express.Router();
var cloudinary = require('cloudinary').v2;

router.get('/', async function (req, res, next) {
    let result = {
        mainImage: 'https://res.cloudinary.com/delffrxwf/image/upload/v1599994601/BANNER_rersa7.jpg',
        founderDetail: [{
            imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601202007/Dad_dujuuz.png',
            name: 'Rasik Bihari Tiwari',
            designation: 'Founder',
            about: 'Mr. Tiwari  is the Founder Trustee of Abhilakh Foundation.He has been a social activist for the last 25 years, working on issues like Organic Farming, Development of Government Hospitals, and models of sustainable. He is one of the most Senior Advocate in the City Civil Court.'
        },{
            imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1600276956/My_Pic_zp9jul.jpg',
            name: 'Rajeev Tiwari',
            designation: 'President',
            about: 'He is an ardent social activist and is selflessly working since last 10 years for underprivileged and orphan children/women and campaigning for the children’s & women rights. He is a very hard working, devoted, sincere, passionate and simple man who has a strong commitment towards supporting the underprivileged women and children in society. His ability to manage diverse activities coupled with his realistic approach and courage has progressed Abhilakh Foundation to incredible heights.'
        }],
        whoWeAre: [
            'Abhilakh Foundation is a non-profit NGO established under society Registration Act, 1860  and The Uttar Pradesh Public Trust Act. 1950. (Registration No: F-46166).',
            'Abhilakh Foundation works among migrants, poor and abused women, neglected children, senior citizens, school drop outs, Self Help Groups, and awareness on various social, health and current issues. The underprivileged need to be given the appropriate opportunities and they need to be motivated. Abhilakh Foundation works with a view to help the poor community through various welfare activities.'
        ],
        ourVision: ['Abhilakh Foundation was established by a team of social workers who are working in the field of health, education, sustainability, vocational training, empowering women and child development.'],
        ourMission: ['Plan and implement or join hands with government, donors, non-government and other volunteering bodies for implementing, development that fulfill our vision to educate, organize, strengthen the downtrodden communities with total capacities to manage their own development.'],
        ourObjectives: ['We believe in “Converts desires into reality……”, Abhilakh Foundation’s honest objective is to be there in all welfare and uplift activities wherever and whenever society needs. Our foundation is to identify and fulfill the society’s basic needs.']
    }
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
