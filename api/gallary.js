var express = require("express");
var router = express.Router();
var cloudinary = require('cloudinary').v2;

router.get('/', async function (req, res, next) {
    //let result = {recordset: [{}]};
    let result = [
            {
                header: 'ABHILAKH FOUNDATION ORGANISED BLANKET DISTRIBUTION PROGRAM',
                images: ['https://res.cloudinary.com/delffrxwf/image/upload/v1601202751/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/80030556_125813795557551_6642747435338694656_o_sllgrl.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600361639/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0189_ihy617.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600359944/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0036_uxo8os.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600359904/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0190_lsppox.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600359928/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0091_x1jpyk.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600359939/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0012_umx1fd.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600358908/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0056_tzsgoq.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600358887/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0129_dtcxfv.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600359855/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/BeautyPlus_20191226213903_save_q4xl89.jpg', 'https//res.cloudinary.com/delffrxwf/image/upload/v1600361523/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0123_ytu4zs.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600361561/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0149_mlajml.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600361603/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0134_mieffj.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601202751/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/80395528_126243135514617_5116990016018448384_o_yjelbx.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601202751/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/80464459_126243052181292_5187288404336836608_n_dok8d7.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601202750/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/80377753_126243098847954_2665824975868395520_o_lo2brz.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601202750/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/80353653_126243028847961_4580763692710232064_o_hvlmb5.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600361659/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0234_okyyap.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600361586/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0153_niep1m.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600359844/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/BeautyPlus_20191226214028_save_bh0ujl.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600361523/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0123_ytu4zs.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601205724/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/76952508_108959970576267_3709576396155125760_n_uxovc0.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601205724/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/78583993_119707746168156_8362788546402058240_o_racjdj.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601205724/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/79442252_119708082834789_7801298512494198784_o_qnhzi0.jpg']
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
