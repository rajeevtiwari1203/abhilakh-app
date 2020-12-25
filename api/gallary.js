var express = require("express");
var router = express.Router();
var cloudinary = require('cloudinary').v2;

router.get('/', async function (req, res, next) {
    //let result = {recordset: [{}]};
    let result = [
            {
                header: 'ABHILAKH FOUNDATION ORGANISED BLANKET DISTRIBUTION PROGRAM 2019',
                images: ['https://res.cloudinary.com/delffrxwf/image/upload/v1601202751/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/80030556_125813795557551_6642747435338694656_o_sllgrl.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600361639/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0189_ihy617.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600359944/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0036_uxo8os.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600359904/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0190_lsppox.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600359928/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0091_x1jpyk.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600359939/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0012_umx1fd.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600358908/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0056_tzsgoq.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600358887/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0129_dtcxfv.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600359855/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/BeautyPlus_20191226213903_save_q4xl89.jpg', 'https//res.cloudinary.com/delffrxwf/image/upload/v1600361523/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0123_ytu4zs.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600361561/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0149_mlajml.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600361603/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0134_mieffj.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601202751/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/80395528_126243135514617_5116990016018448384_o_yjelbx.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601202751/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/80464459_126243052181292_5187288404336836608_n_dok8d7.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601202750/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/80377753_126243098847954_2665824975868395520_o_lo2brz.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601202750/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/80353653_126243028847961_4580763692710232064_o_hvlmb5.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600361659/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0234_okyyap.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600361586/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0153_niep1m.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600359844/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/BeautyPlus_20191226214028_save_bh0ujl.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1600361523/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/DSC_0123_ytu4zs.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601205724/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/76952508_108959970576267_3709576396155125760_n_uxovc0.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601205724/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/78583993_119707746168156_8362788546402058240_o_racjdj.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601205724/%E0%A4%95%E0%A4%82%E0%A4%AC%E0%A4%B2%20%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A4%B0%E0%A4%A3%20/79442252_119708082834789_7801298512494198784_o_qnhzi0.jpg']
            },
            {
                header: 'ABHILAKH FOUNDATION ORGANISED BLANKET DISTRIBUTION PROGRAM 2020',
                images: ['https://res.cloudinary.com/delffrxwf/image/upload/v1608907991/Kambal%20vitran%202020/IMG-20201222-WA0007_oaswgq.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1608907985/Kambal%20vitran%202020/IMG-20201225-WA0013_ivefjz.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1608907978/Kambal%20vitran%202020/IMG-20201224-WA0017_vypcjh.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1608908748/Kambal%20vitran%202020/IMG-20201225-WA0020_z4h1rz.jpg']
            },
            {
                header: 'ANIMAL HEALTH CHECKUP CAMP.',
                images: ['https://res.cloudinary.com/delffrxwf/image/upload/v1601210006/Animal%20Health/1_ohmmfo.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601210003/Animal%20Health/6_liaja4.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601210002/Animal%20Health/7_kansvm.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601210001/Animal%20Health/4_uprazn.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601210001/Animal%20Health/3_gfrfhb.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601210001/Animal%20Health/2_c1cl6q.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601210001/Animal%20Health/5_erxb91.jpg']
            },
            {
                header: 'FREE HEALTH CHECKUP CAMP.',
                images: ['https://res.cloudinary.com/delffrxwf/image/upload/v1601213904/HEALTH%20CAMP/34_ldcuda.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601213947/HEALTH%20CAMP/31_zprbpw.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601213967/HEALTH%20CAMP/33_wgex5f.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601213968/HEALTH%20CAMP/32_i3oz9i.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211973/HEALTH%20CAMP/25_jhcsnd.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211973/HEALTH%20CAMP/25_jhcsnd.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211971/HEALTH%20CAMP/24_lk3t3k.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211970/HEALTH%20CAMP/26_sh25l2.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211916/HEALTH%20CAMP/18_b1wsdu.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211916/HEALTH%20CAMP/19_dlo9lh.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211913/HEALTH%20CAMP/11_kaeh7d.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211912/HEALTH%20CAMP/15_fdi1mr.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211912/HEALTH%20CAMP/20_ft43hu.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211912/HEALTH%20CAMP/17_gs5l6w.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211911/HEALTH%20CAMP/22_ca1baw.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211910/HEALTH%20CAMP/16_ixh4nc.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211908/HEALTH%20CAMP/13_vjkzzu.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211886/HEALTH%20CAMP/6_fhnusu.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211908/HEALTH%20CAMP/12_fjdv8v.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211885/HEALTH%20CAMP/2_kqqaq1.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211885/HEALTH%20CAMP/1_sfuec4.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211884/HEALTH%20CAMP/8_vwcqbe.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211884/HEALTH%20CAMP/5_t2tixy.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211883/HEALTH%20CAMP/7_r74aro.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211883/HEALTH%20CAMP/10_qtarjq.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211882/HEALTH%20CAMP/9_eafpt6.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211881/HEALTH%20CAMP/3_g4sltu.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601211881/HEALTH%20CAMP/4_u0dss9.jpg']
            },
            {
                header: 'MASK DISTRIBUTION.',
                images: ['https://res.cloudinary.com/delffrxwf/image/upload/v1601214762/mask%20VITRAN/2_tzosas.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601214752/mask%20VITRAN/3_k4koav.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601214750/mask%20VITRAN/4_ela9ej.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601214746/mask%20VITRAN/1_jagcbb.jpg']
            },
            {
                header: 'PRASHAD DISTRIBUTION.',
                images: ['https://res.cloudinary.com/delffrxwf/image/upload/v1601215442/PRASHAD%20VITRAN/2_pc7spa.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601215442/PRASHAD%20VITRAN/15_hvbzjc.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601215442/PRASHAD%20VITRAN/1_qvlmmg.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601215442/PRASHAD%20VITRAN/11_ysz9vf.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601215441/PRASHAD%20VITRAN/13_ozav83.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601215440/PRASHAD%20VITRAN/10_ivl3jx.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601215438/PRASHAD%20VITRAN/4_kpoawe.jpg']
            },
            {
                header: 'PRASHAD DISTRIBUTION 2020',
                images: ['https://res.cloudinary.com/delffrxwf/image/upload/v1608907828/Prasad%20vitran%202020/IMG_20201123_100942_542_ba7lq5.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1608907822/Prasad%20vitran%202020/IMG_20201123_102520_920_hvh5jx.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1608907829/Prasad%20vitran%202020/IMG_20201123_101815_886_i3hxd5.jpg']
            },
            {
                header: 'RASHAN DISTRIBUTION.',
                images: ['https://res.cloudinary.com/delffrxwf/image/upload/v1601222661/RASHAN%20VITRAN/1_ztyz3t.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601226250/RASHAN%20VITRAN/5_j4ksqf.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222653/RASHAN%20VITRAN/7_nd2nuf.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222653/RASHAN%20VITRAN/8_xridpr.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222651/RASHAN%20VITRAN/2_xaieup.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222649/RASHAN%20VITRAN/3_kl05dr.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222649/RASHAN%20VITRAN/10_ucou7k.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222648/RASHAN%20VITRAN/9_ip01lr.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222642/RASHAN%20VITRAN/6_jgnura.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222648/RASHAN%20VITRAN/4_wsbwln.jpg']
            },
            {
                header: 'KADHA DISTRIBUTION.',
                images: ['https://res.cloudinary.com/delffrxwf/image/upload/v1601222595/KADHA%20VITRAN/2_wtlpr0.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222592/KADHA%20VITRAN/9_casizq.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222578/KADHA%20VITRAN/10_npheoj.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222575/KADHA%20VITRAN/4_rzoyyw.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222559/KADHA%20VITRAN/8_gcbrll.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222563/KADHA%20VITRAN/3_ngjpml.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222572/KADHA%20VITRAN/1_eigcca.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222573/KADHA%20VITRAN/7_envnbg.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222554/KADHA%20VITRAN/6_cpoyhx.jpg', 'https://res.cloudinary.com/delffrxwf/image/upload/v1601222556/KADHA%20VITRAN/5_ehmmau.jpg']
            },
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
