var express = require("express");
var router = express.Router();
var cloudinary = require('cloudinary').v2;

router.get('/', async function (req, res, next) {
    //let result = {recordset: [{}]};
    let result = {
        caraouselData: [
            {
                imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1599994601/BANNER_rersa7.jpg',
                text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s",
                text2: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                text3: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below',
                text4: 'de Finibus Bonorum et Malorum'
            }, {
                imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1599994601/BANNER_rersa7.jpg',
                text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                text2: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                text3: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below'
            },
            {
                imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1599994601/BANNER_rersa7.jpg',
                text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                text2: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                text3: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below'
            },
            {
                imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1599994601/BANNER_rersa7.jpg',
                text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                text2: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                text3: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below'
            },
            {
                imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1599994601/BANNER_rersa7.jpg',
                text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                text2: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                text3: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below'
            },
            {
                imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1599994601/BANNER_rersa7.jpg',
                text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                text2: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                text3: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below'
            },
            {
                imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1599994601/BANNER_rersa7.jpg',
                text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                text2: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                text3: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below'
            },
            {
                imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1599994601/BANNER_rersa7.jpg',
                text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                text2: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                text3: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below'
            },
            {
                imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1599994601/BANNER_rersa7.jpg',
                text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                text2: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                text3: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below'
            },
            {
                imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1599994601/BANNER_rersa7.jpg',
                text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                text2: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                text3: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below'
            }
        ],
        mainSection: {
            header: 'Join The Fight Against Corona Virus Pandemic COVID – 19 – RELIEF -- RATION DISTRIBUTION TO DAILY WAGE WORKERS',
            subHeader: 'Erase the hunger and nourish the poor & the needy….. donate a ration kit During the COVID – 19 Pandemic Abhilakh Foundation has initiated the process of relief work (dry ration food grains distribution) in many parts of Uttar Pradesh and Delhi to the daily wager, migrant workers, auto rickshaw drivers, tribals, poor, needy, physically challenged people and children. Extend a helping hand to the less privileged & join us in this initiative. You can see the ration distribution photographs in Facebook, Linkedin, Twitter & Gallery.',
            images: [
                {
                    imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222661/RASHAN%20VITRAN/1_ztyz3t.jpg'
                },
                {
                    imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601226250/RASHAN%20VITRAN/5_j4ksqf.jpg'
                },
                {
                    imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222649/RASHAN%20VITRAN/3_kl05dr.jpg'
                },
                {
                    imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222651/RASHAN%20VITRAN/2_xaieup.jpg'
                },
                {
                    imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222648/RASHAN%20VITRAN/4_wsbwln.jpg'
                },
                {
                    imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222642/RASHAN%20VITRAN/6_jgnura.jpg'
                },
                {
                    imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222648/RASHAN%20VITRAN/9_ip01lr.jpg'
                },
                {
                    imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222649/RASHAN%20VITRAN/10_ucou7k.jpg'
                },
                {
                    imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222653/RASHAN%20VITRAN/8_xridpr.jpg'
                },
                {
                    imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222653/RASHAN%20VITRAN/7_nd2nuf.jpg'
                }
            ]
        },
        emergencyCases: {
            header: 'Covid-19 Relief',
          subHeader: 'Great support is forthcoming from people who want to help. Indian citizens and organizations desirous of volunteering their services for the Nations fight against spread of Corona ....',
            images: [
                {
                    imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601228420/CORONA%20CERTIFICATE/2_ijrtqy.jpg',
                    shortDetail: {
                        name: 'Mr. Anuj',
                        desease: 'Bank Manager Allahabad Bank Khargupur'
                    }
                },
                {
                    imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601228420/CORONA%20CERTIFICATE/1_sd1um6.jpg',
                    shortDetail: {
                        name: 'Mr. Kulbhushan Ashthana',
                        desease: 'Sr. Bank Manager Allahabad Bank Khargupur'
                    }
                },
                {
                    imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601228960/CORONA%20CERTIFICATE/3_matd1a.jpg',
                    shortDetail: {
                        name: 'Dr. Sanddep Shukla',
                        desease: 'CHC Khargupur'
                    }
                },
                {
                    imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601228960/CORONA%20CERTIFICATE/4_tniuiz.jpg',
                    shortDetail: {
                        name: 'Mr. Rahul Tiwari',
                        desease: 'Journalist'
                    }
                },
                {
                    imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601228962/CORONA%20CERTIFICATE/5_wts24w.jpg',
                    shortDetail: {
                        name: 'Mr. Santosh Tiwari',
                        desease: 'SHO Dhanepur'
                    }
                },
                {
                    imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601228960/CORONA%20CERTIFICATE/6_mvvkgk.jpg',
                    shortDetail: {
                        name: 'Miss Shalu Shukla',
                        desease: 'Journalist'
                    }
                },
                {
                    imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601228960/CORONA%20CERTIFICATE/7_gqbmhp.jpg',
                    shortDetail: {
                        name: 'Mr. Raj Karan Ayyar',
                        desease: 'SP Gonda'
                    }
                },
                {
                    imgSrc: 'https://res.cloudinary.com/delffrxwf/image/upload/v1601228963/CORONA%20CERTIFICATE/8_c08flj.jpg',
                    shortDetail: {
                        name: 'Mr. Shiv Shankar Panday',
                        desease: 'Indian Force'
                    }
                }
            ]
        },
        foundationDetail: {
            header: 'Welcome to Abhilakh Foundation',
            details: [
                'Abhilakh Foundation is a non-profit NGO established under Society Registration Act, 1860 and The Uttar Pradesh Public Trust Act, 1950, Abhilakh Foundation is a organization benefitting underprivileged children and poor as well as their families through various projects on healthcare, education, nutrition, shelter, livelihood, women empowerment, child protection, and other social issues.',
                'Abhilakh Foundation works with the society to create positive transformation. Since its inception, the organization has worked to empower vulnerable sections of society, with a particular emphasis on children and women, by providing them with the opportunity to lead a life of dignity and freedom.'
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
