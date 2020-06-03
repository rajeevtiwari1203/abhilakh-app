var express = require("express");
var router = express.Router();

router.get('/', async function (req, res, next) {
    //let result = {recordset: [{}]};
    let result = {
        caraouselData: [
            {
                imgSrc: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
                text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s",
                text2: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                text3: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below',
                text4: 'de Finibus Bonorum et Malorum'
            }, {
                imgSrc: 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg',
                text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                text2: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                text3: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below'
            }
        ],
        mainSection: {
            header: 'Join The Fight Against Corona Virus Pandemic COVID – 19 – RELIEF -- ‘’RATION DISTRIBUTION TO DAILY WAGE WORKERS”',
            subHeader: 'Erase the hunger and nourish the poor & the needy….. donate a ration kit During the COVID – 19 Pandemic Abhilasha Foundation has initiated the process of relief work (dry ration food grains distribution) in many parts of Mumbai, Thane & Navi Mumbai to the daily wager, migrant workers, auto rickshaw drivers, tribals, poor, needy, physically challenged people and children. Extend a helping hand to the less privileged & join us in this initiative. You can see the ration distribution photographs in Facebook, Linkedin, Twitter & Gallery.',
            images: [
                {
                    imgSrc: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'
                },
                {
                    imgSrc: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'
                },
                {
                    imgSrc: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'
                },
                {
                    imgSrc: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'
                },
                {
                    imgSrc: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'
                },
                {
                    imgSrc: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'
                },
                {
                    imgSrc: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'
                },
                {
                    imgSrc: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'
                },
                {
                    imgSrc: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'
                }
            ]
        },
        emergencyCases: {
            header: 'Emergency Cases',
            images: [
                {
                    imgSrc: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
                    shortDetail: {
                        name: 'Junaid Ahmed',
                        desease: 'Suffering from Right Proximal Tibial Osteosarcoma (Cancer)'
                    }
                },
                {
                    imgSrc: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
                    shortDetail: {
                        name: 'Junaid Ahmed',
                        desease: 'Suffering from Right Proximal Tibial Osteosarcoma (Cancer)'
                    }
                },
                {
                    imgSrc: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
                    shortDetail: {
                        name: 'Junaid Ahmed',
                        desease: 'Suffering from Right Proximal Tibial Osteosarcoma (Cancer)'
                    }
                },
                {
                    imgSrc: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
                    shortDetail: {
                        name: 'Junaid Ahmed',
                        desease: 'Suffering from Right Proximal Tibial Osteosarcoma (Cancer)'
                    }
                },
                {
                    imgSrc: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
                    shortDetail: {
                        name: 'Junaid Ahmed',
                        desease: 'Suffering from Right Proximal Tibial Osteosarcoma (Cancer)'
                    }
                },
                {
                    imgSrc: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
                    shortDetail: {
                        name: 'Junaid Ahmed',
                        desease: 'Suffering from Right Proximal Tibial Osteosarcoma (Cancer)'
                    }
                },
                {
                    imgSrc: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
                    shortDetail: {
                        name: 'Junaid Ahmed',
                        desease: 'Suffering from Right Proximal Tibial Osteosarcoma (Cancer)'
                    }
                },
                {
                    imgSrc: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
                    shortDetail: {
                        name: 'Junaid Ahmed',
                        desease: 'Suffering from Right Proximal Tibial Osteosarcoma (Cancer)'
                    }
                }
            ]
        },
        foundationDetail: {
            header: 'Welcome to Abhilasha Foundation',
            details: [
                'Abhilasha Foundation is a non-profit NGO established under Society Registration Act, 1860 and The Bombay Public Trust Act, 1950, Abhilasha Foundation is a organization benefitting underprivileged children and their families through various projects on healthcare, education, nutrition, shelter, livelihood, women empowerment, child protection, and other social issues.',
                'Abhilasha Foundation works with the society to create positive transformation. Since its inception, the organization has worked to empower vulnerable sections of society, with a particular emphasis on children and women, by providing them with the opportunity to lead a life of dignity and freedom.'
            ]
        }
    }
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
