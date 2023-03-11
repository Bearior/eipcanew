import React, { useState , useContext, useEffect } from "react";
import app from "../base";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../Auth";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../images/logo text.png" 


const SuggestionBad = ({history}) => {
  const { currentUser } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [base64, setBase64] = useState(null);
  

  const Signout = () => {
    app.auth().signOut();
    history.push("/");
    window.location.reload(true)
  };


   //usestate hook
   let [data, setData] = useState([]);
   const [select, setselect] = useState('');
   //custom data
   var dataa = [
   { id: 1, 
     name: 'โรงพยาบาลศิริราช คณะแพทยศาสตร์ศิริราชพยาบาล มหาวิทยาลัยมหิดล ', 
     city: 'กรุงเทพมหานคร', 
     location: 'https://www.si.mahidol.ac.th/sirirajhospital/' ,
     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Mahidol_U.png/150px-Mahidol_U.png",
     map: "https://www.google.com/maps/place/Faculty+of+Medicine+Siriraj+Hospital,+Mahidol+University/@13.7599315,100.4836511,17z/data=!3m1!4b1!4m5!3m4!1s0x30e299ad894a4a39:0x9946a622d6bb1682!8m2!3d13.7599315!4d100.4858398"
   }, 
   { id: 2, 
     name: 'โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย', 
     city: 'กรุงเทพมหานคร', 
     location: 'https://chulalongkornhospital.go.th/kcmh/',
     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Thai_Red_Cross_Logo.svg/1200px-Thai_Red_Cross_Logo.svg.png",
     map: "https://www.google.com/maps/place/King+Chulalongkorn+Memorial+Hospital/@13.7306726,100.5341872,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29f298a27c7e1:0xdb584fa3e3e2f5c0!8m2!3d13.7306674!4d100.5363812"
   }, 
   { id: 3, 
     name: 'โรงพยาบาลวชิรพยาบาล', 
     city: 'กรุงเทพมหานคร', 
     location: 'https://www.vajira.ac.th/content/60cefcc2b11d0a7035126866',
     img: "https://www.vajira.ac.th/assets/images/logo-566c3f0e.png",
     map: "https://www.google.com/maps/place/Vajira+Hospital/@13.7771621,100.5085848,16.34z/data=!4m5!3m4!1s0x30e2995ff3547271:0x29fa4e9a551a8175!8m2!3d13.7805712!4d100.5091916"
   }, 
   { id: 1, 
     name: 'สถาบันโรคทรวงอก', 
     city: 'นนทบุรี', 
     location: 'https://www.ccit.go.th/',
     img: "https://www.jobbkk.com/upload/variety/goverment/20160215_2877.png",
     map: "https://www.google.com/maps/place/Central+Chest+Institute+of+Thailand/@13.8619018,100.5193532,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29b5084ece23f:0xe837bdfa3dc9267f!8m2!3d13.8618966!4d100.5215472"
   }, 
   { id: 4, 
     name: 'คณะแพทยศาสตร์โรงพยาบาลรามาธิบดี มหาวิทยาลัยมหิดลโรงพยาบาลรามาธิบดี', 
     city: 'กรุงเทพมหานคร', 
     location: 'https://www.rama.mahidol.ac.th/rama_hospital/',
     img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t31.18172-8/13173427_10153627356152634_6966570266114905057_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEyhx8B84C6DeK_JiOnAOdrLVp8LRMQdjUtWnwtExB2NTAzvp2dXOaaPznyV_phN4pEKn0QMX09TBMhMlVPyCFK&_nc_ohc=2It9x7g8VXkAX-rYBEW&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfDqDd5HO98y9zLt6MZ-IzB0mbVqmXOlIWfOf40ijSV83w&oe=64337E1D",
     map: "https://www.google.com/maps/place/Faculty+of+Medicine+Ramathibodi+Hospital,+Mahidol+University/@13.7665157,100.5245281,17z/data=!3m1!4b1!4m5!3m4!1s0x30e2994da99aa1fd:0xc4dd9b398f456bcf!8m2!3d13.7665105!4d100.5267221"
   }, 
   { id: 5, 
     name: 'โรงพยาบาลภูมิพลอดุลยเดช กรมแพทย์ทหารอากาศ', 
     city: 'กรุงเทพมหานคร', 
     location: 'https://bhumibolhospital.rtaf.mi.th/',
     img: "https://bhumibolhospital.rtaf.mi.th/Sitedirectory/616/2765/10507_bhu.png%20(Custom).png",
     map: "https://www.google.com/maps/place/Bhumibol+Adulyadej+Hospital/@13.9092566,100.6157025,17z/data=!3m1!4b1!4m5!3m4!1s0x30e28281e96f1241:0xf0100b33d0c4310!8m2!3d13.9092514!4d100.6178965"
   },
   { id: 1, 
     name: 'โรงพยาบาลมหาราชนครราชสีมา', 
     city: 'นครราชสีมา', 
     location: 'https://www.mnrh.go.th/th/',
     img: "https://www.meckorat.info/images/logoENG1024x1024.png",
     map: "https://www.google.com/maps/place/Maharat+Nakhon+Ratchasima+Hospital/@14.9848631,102.1012445,17z/data=!3m1!4b1!4m5!3m4!1s0x31194c9cf7fe4987:0x147aa6050cb4d3ba!8m2!3d14.9848579!4d102.1034385"
   },
   { id: 1, 
     name: 'โรงพยาบาลสงขลานครินทร์', 
     city: 'สงขลา', 
     location: 'https://hospital.psu.ac.th/',
     img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.6435-9/41990999_2085571211473550_3099492427950456832_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFYeH1xKUchUEgPoRN-m3xix7m2BLpCS2_HubYEukJLb0FLHIhFHaZqgvRpjSQ1BdBPUnb4_KYkNrPVx9qvmwQO&_nc_ohc=Xb3UskRgTyAAX8mqFDu&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfAwLpPj285KNTAGD4r7YujVmTRkU3oGamiwlecoI4_t8A&oe=6433B193",
     map: "https://www.google.com/maps/place/Songklanagarind+Hospital/@7.0069203,100.4922686,17z/data=!3m1!4b1!4m5!3m4!1s0x304d29afc4593253:0x9f440b35995a3d27!8m2!3d7.006915!4d100.4944626",
   },
   { id: 1, 
     name: 'โรงพยาบาลสรรพสิทธิประสงค์', 
     city: 'อุบลราชธานี', 
     location: 'https://www.sunpasit.go.th/',
     img: "https://healthserv.net/imgcntupload/hsp010533e210711115816.jpg",
     map: "https://www.google.com/maps/place/Sunpasitthiprasong+Hospital/@15.2360951,104.8632589,17z/data=!3m1!4b1!4m5!3m4!1s0x311687cbac1167bb:0x875f825eb9e2261c!8m2!3d15.2360899!4d104.8654529"
   },
   { id: 1, 
     name: 'โรงพยาบาลพระปกเกล้า', 
     city: 'จันทบุรี', 
     location: '',
     img: "https://upload.wikimedia.org/wikipedia/th/8/8f/Logo_of_Prapokklao_Hospital.png",
     map: "https://www.google.com/maps/search/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9B%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2/@12.6051481,102.1004312,17z/data=!3m1!4b1"
   },
   { id: 1, 
     name: 'โรงพยาบาลสุราษฏร์ธานี', 
     city: 'สุราษฏร์ธานี', 
     location: 'https://srth.go.th/',
     img: "https://upload.wikimedia.org/wikipedia/th/c/ce/Logo_of_Surat_Thani_Hospital.jpg",
     map: "https://www.google.com/maps/search/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B2%E0%B8%A9%E0%B8%8F%E0%B8%A3%E0%B9%8C%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/@9.1315106,99.302527,15z/data=!3m1!4b1"
   },
   { id: 1, 
     name: 'โรงพยาบาลขอนแก่น', 
     city: 'ขอนแก่น', 
     location: 'https://www.kkh.go.th/',
     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Seal_of_the_Ministry_of_Public_Health_of_Thailand.svg/200px-Seal_of_the_Ministry_of_Public_Health_of_Thailand.svg.png",
     map: "https://www.google.com/maps/search/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/@16.431064,102.8308389,16z/data=!3m1!4b1"
   },
   { id: 1, 
     name: 'โรงพยาบาลพุทธชินราช', 
     city: 'พิษณุโลก', 
     location: 'https://budhosp.go.th/',
     img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/305620973_459728406181717_8820274840384791146_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFYiR5O8n630p4mCHQsJJjn9PYIM7cPDFT09ggztw8MVGj2-hXIRaGbIbQ9IyfRYWi7rjpsJOy_09V2ps6da4C9&_nc_ohc=gDOGrNopVdkAX-fYXsI&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfCsG2AAVg3STGAKbrbyb0YM3ZBte3TuAJ4iUTWW7OCyBg&oe=641155D8",
     map: "https://www.google.com/maps/place/Buddhachinaraj+Hospital/@16.8084305,100.2613445,17z/data=!3m1!4b1!4m5!3m4!1s0x30df97d7b2cf671b:0x47414a4e1e0e064b!8m2!3d16.8084254!4d100.2635385"
   },
   { id: 6, 
     name: 'โรงพยาบาลพระมงกุฎเกล้า', 
     city: 'กรุงเทพมหานคร', 
     location: 'https://www.pmk.ac.th/index.php',
     img: "http://www.rcopt.org/images/uploads/%E0%B9%82%E0%B8%A5%E0%B9%82%E0%B8%81%E0%B9%89%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A1%E0%B8%87%E0%B8%81%E0%B8%B8%E0%B8%8E%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2.jpg",
     map: "https://www.google.com/maps/search/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A1%E0%B8%87%E0%B8%81%E0%B8%B8%E0%B8%8E%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2/@13.7676067,100.5320582,17z/data=!3m1!4b1"
   },
   { id: 7, 
     name: 'โรงพยาบาลตำรวจ', 
     city: 'กรุงเทพมหานคร', 
     location: 'https://www.policehospital.org/content/home.php',
     img: "https://www.policehospital.org/img/lgpgh02.png",
     map: "https://www.google.com/maps/search/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%95%E0%B8%B3%E0%B8%A3%E0%B8%A7%E0%B8%88/@13.7437355,100.5372756,18.13z"
   },
   { id: 1, 
     name: 'โรงพยาบาลมหาราชนครเชียงใหม่ - คณะแพทยศาสตร์ มหาวิทยาลัยเชียงใหม่', 
     city: 'เชียงใหม่', 
     location: 'https://www.med.cmu.ac.th/web/suandok-hospital/',
     img: "https://upload.wikimedia.org/wikipedia/th/thumb/9/93/Medicine_CMU_Logo.svg/1200px-Medicine_CMU_Logo.svg.png",
     map: "https://www.google.com/maps/search/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88+-+%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C+%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/@18.78979,98.9742559,19.23z"
   },
   { id: 8, 
     name: 'โรงพยาบาลบำรุงราษฎร์', 
     city: 'กรุงเทพมหานคร', 
     location: 'https://www.bumrungrad.com/th/fasttrack-pay?utm_source=sem-thai&utm_medium=sem&utm_campaign=smart-fasttrack-pay-1-nov-22&gclid=Cj0KCQiAx6ugBhCcARIsAGNmMbjnOh7J2qTakzAVw9tr8vIfm1DHPNIRmYBZlZJZZpC-2_gbKPxT4hIaAsxjEALw_wcB',
     img: "https://play-lh.googleusercontent.com/S9iHWwc7c1nHaAeO6xrQkCa96oYx8KJSLy2HvGCLClVKNeAhZWmum7BF1D-3JZ0jzj8",
     map: "https://www.google.com/maps/place/Bumrungrad+International+Hospital/@13.746674,100.5518033,18.2z/data=!4m5!3m4!1s0x30e29ee677aa7f5b:0xf8a8de865c2e8a77!8m2!3d13.746066!4d100.5526867"
   },
   { id: 9, 
     name: 'โรงพยาบาลหัวใจกรุงเทพ', 
     city: 'กรุงเทพมหานคร', 
     location: 'https://www.bangkokhearthospital.com/',
     img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/276112005_335692925265051_3811084780797970869_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEER-IKHDkJJ0RPYO0YEg6W7MBcSFKuiBLswFxIUq6IEspOqpttzOuaMqHLHTYWP9uquUDpGQsBx8Pk6KaHeMYY&_nc_ohc=JNSoJYKFr0cAX8EG_Mw&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfAE_sjH4Hd6wjC39ayGrBNJR6wDbBjAf2LYWwQmZkVJwA&oe=64109523",
     map: "https://www.google.com/maps/place/Bangkok+Heart+Hospital/@13.7484366,100.583536,18.36z/data=!4m5!3m4!1s0x30e29f03af6bd52f:0xaf995a3d8adaf875!8m2!3d13.7480592!4d100.5833685"
   },
   { id: 10, 
     name: 'โรงพยาบาลเซนต์หลุยส์', 
     city: 'กรุงเทพมหานคร', 
     location: 'https://www.saintlouis.or.th/th/index',
     img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/323425626_1477330449460933_3211347127574835108_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFpu1pbSjkohS4n_9-wlR_Xc84oPOj7vqZzzig86Pu-pnh4Qt14pZ9M_xFQ7o03WL1iNRYPAqtvYiPVbDQFEgrJ&_nc_ohc=5PZW4fTVI-wAX8Ab8nx&_nc_oc=AQm0BT6lMEb47CAJ1oT5sDXXS0DP1oXQJ40-_Y5FhclDQxP04ArYqG4UgKpAFT1OvrI&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfBVQFvbFyBh3PjZ2RBhiKeJykIqahH2feY4OUB2aqk83A&oe=641100CA",
     map: "https://www.google.com/maps/place/Saint+Louis+Hospital/@13.7191176,100.5230104,17z/data=!3m1!4b1!4m5!3m4!1s0x30e298ca61ef5eb9:0x596d29764bda167c!8m2!3d13.7191124!4d100.5252044"
   },
   { id: 11, 
     name: 'โรงพยาบาลบางปะกอก 9 อินเตอร์​เนชั่นแนล​', 
     city: 'กรุงเทพมหานคร', 
     location: 'https://bpk9internationalhospital.com/',
     img: "https://static.hdmall.co.th/200x200/system/brands/logo/1922/original/bangpakok-9-international-hospital.jpg",
     map: "https://www.google.com/maps/place/Bangpakok+9+International+Hospital/@13.6821582,100.4744477,18.91z/data=!4m5!3m4!1s0x30e2a3db3418d1fb:0x75488923f0dc9f06!8m2!3d13.6818817!4d100.4745221"
   },
   { id: 12, 
     name: 'โรงพยาบาลรามคําแหง', 
     city: 'กรุงเทพมหานคร', 
     location: 'https://www.ram-hosp.co.th/',
     img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.6435-9/53535804_2330713130281217_7144079953980555264_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHwg1fbrUHsir_t2Ppr-vBvq6zGYQzSgM2rrMZhDNKAzRuu7nu7k0SgLxR30XzGSg2epyIc259o5YWosC5TU1V1&_nc_ohc=Ms-PgZXEq-MAX8mnugg&_nc_oc=AQkkAomtzrXDD1MhtAp4QEQu1GAZnmc8Ep463IyVViEuv99npYE2QR9uOPbYczKH-oE&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfA4tduhUZwolpVtgaLzB3vNKlT9BqRg-xM86qX9S1Ah7g&oe=6433A52B",
     map: "https://www.google.com/maps/search/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%8D%E0%B8%B2%E0%B9%81%E0%B8%AB%E0%B8%87/@13.7636615,100.6424582,15.92z"
   },
   { id: 13, 
     name: 'โรงพยาบาลราชวิถี', 
     city: 'กรุงเทพมหานคร', 
     location: 'https://www.rajavithi.go.th/',
     img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.18169-9/11039225_445754495596106_6147377604860089432_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHYOWR5z17wE_4fmObZ-tsqx9S2VGPZOA3H1LZUY9k4DV_3trxBJdBS9JGxxgv64OXrkuAXdwixB6QHmGMSdF-g&_nc_ohc=43l_K4sf5AcAX_9-mrs&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfD3wOC4cXFu3v8zZtYdDmyd15BuutdC-9_SQD69WckSSw&oe=6433B541",
     map: "https://www.google.com/maps/search/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%B4%E0%B8%96%E0%B8%B5/@13.7637534,100.611966,13z/data=!3m1!4b1"
   },
   { id: 2, 
     name: 'โรงพยาบาลมหาวิทยาลัยนเรศวร คณะแพทยศาสตร์ มหาวิทยาลัยนเรศวร', 
     city: 'พิษณุโลก', 
     location: 'https://med.nu.ac.th/nuh/',
     img: "https://med.nu.ac.th/nuh/assets/img/logo_nuh.png?v=",
     map: "https://www.google.com/maps/place/Faculty+of+Medicine,+Naresuan+University/@16.7484843,100.1887835,18.57z/data=!4m5!3m4!1s0x30dfbea165abb7bb:0x5327484d2579c35a!8m2!3d16.7485439!4d100.1890896"
   },
   { id: 1, 
     name: 'โรงพยาบาลธรรมศาสตร์เฉลิมพระเกียรติ', 
     city: 'ปทุมธานี', 
     location: 'https://www.hospital.tu.ac.th/',
     img: "https://www.hospital.tu.ac.th/images/logo.png",
     map: "https://www.google.com/maps/place/Thammasat+University+Hospital/@14.0736214,100.6139571,17.82z/data=!4m5!3m4!1s0x30e27f8b5240581d:0xecfc2bf4fa4f2a60!8m2!3d14.0736411!4d100.6152918"
   },
   { id: 2, 
     name: 'โรงพยาบาลเชียงใหม่ ราม', 
     city: 'เชียงใหม่', 
     location: 'https://www.chiangmairam.com/',
     img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/304994343_449616423860423_7066928525316264533_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEka5PiHkFKfx9GoljogV1De3Nn5CZVpNl7c2fkJlWk2Q8kxgc2_lixoEFGWrZ5N653yKhB1GepUhWdZZ4QOeFN&_nc_ohc=s1MlKVWmqJwAX8QSNWM&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfCEuCdjRiXryFx1RlDDcsHzHWZ3-CzdJsarqR4lXKlrrA&oe=64103D8C",
     map: "https://www.google.com/maps/place/Chiang+Mai+Ram+Hospital/@18.7950227,98.9780048,18.59z/data=!4m5!3m4!1s0x30da2fe5554fd6d1:0xd8b86ad5b4e32e30!8m2!3d18.7947974!4d98.9779833"
   }
 ];
   //Select onchage function, getting option selected value and save inside state variable
   function handleChange (e){
     //set state variable with option value
     setselect(e.target.value);
    
   };
   
  
   
   useEffect(() => {
     //Doing filteration on according to select state option
     data = dataa.filter(dataa => dataa.city == select);
     //set state variable data after filteration
     setData(data);
     }, [select])
 
 

// Change file to Field for firestore

  return (
    <>
    <Navbar className="navbar fixed-top navbar-light" expand="lg">
      <Container className="container">
      <Navbar.Brand className="navbar-brand logo-image" href="/">
        <img src= {Logo} />
      </Navbar.Brand>
      <Navbar.Toggle
        className="navbar-toggler p-0 border-0"
        type="button"
        data-toggle="offcanvas"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav ml-auto">
          <li className="nav-item">
          <Nav.Link className="nav-link" href="/">
              บริการ <span className="sr-only">(current)</span>
            </Nav.Link>
          </li>
          <li className="nav-item">
          <Nav.Link className="nav-link" href="/about">
              เกี่ยวกับเรา
            </Nav.Link>
          </li>
            
            <li className="nav-item">
            <Nav.Link class="nav-link" style={{color: "red"}} href="#" onClick={Signout} >ออกจากระบบ</Nav.Link>
            </li>

          <li className="nav-item">
            <a className= "mx-3" href="/History">
              <img style={{width: "40px", height: "40px"}} src= "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"  />
          </a>
          </li>
          
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  <center>
     {/* Header */}
  <header className="ex-header bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
        <h1 >การตรวจวัดค่า กราฟคลื่นไฟฟ้าหัวใจ</h1>
          <h2 className="mt-4">คุณ {currentUser.displayName} </h2>
          <p class="fs-2" style={{marginTop: "4%"}}>ผลการตรวจคลื่นไฟฟ้าหัวใจของคุณอยู่ในเกณฑ์</p>
          <p class="fs-1" style={{color: "red", marginTop: "40px"}}>อันตราย</p>
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </header>{" "}
  </center>
  {/* end of ex-header */}
  {/* end of header */}
  {/* Basic */}
    <center>
    <button  style={{marginTop: "4%"}} className="btn-solid-lgr" onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.google.co.th/maps/search/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B9%83%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%89%E0%B8%B1%E0%B8%99/';
      }}>
      กดเพื่อหาโรงพยาบาลใกล้ฉัน

      </button>
      <br/>
      <br/>
      <img style={{borderRadius: "10px" , width: "20%"}}src= "https://www.imarketingonly.com/wp-content/uploads/2018/07/feature-googlemap.jpg"/>

    </center>


    <br/>
  <br/>
  <br/>
  <br/>
  <div className="app container p-5">
      <h1 className="text-center mb-2">รายนามโรงพยาบาล ที่จัดเป็น "ศูนย์หัวใจ" ทั่วประเทศ</h1>
      <p className="text-center mb-5 fs-5 " style={{}} >อ้างอิงจาก: สมาคมแพทย์โรคหัวใจแห่งประเทศไทยในพระบรมราชูปถัมภ์</p>
      <div class="mb-3">
         <p className=" fs-4 " style={{color: "red"}} class="form-label">เลือกจังหวัดที่คุณอยู่ หรือจังหวัดใกล้เคียง</p>
           <select id="state" style={{borderRadius: "10px" , width: "20%"}}
             onChange={handleChange} class="form-select mb-5">
                <option value=""></option>
                <option value="สงขลา">สงขลา</option>
                <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
                <option value="นนทบุรี">นนทบุรี</option>
                <option value="อุบลราชธานี">อุบลราชธานี</option>
                <option value="จันทบุรี">จันทบุรี</option>
                <option value="สุราษฏร์ธานี">สุราษฏร์ธานี</option>
                <option value="ขอนแก่น">ขอนแก่น</option>
                <option value="พิษณุโลก">พิษณุโลก</option>
                <option value="เชียงใหม่">เชียงใหม่</option>
                <option value="ปทุมธานี">ปทุมธานี</option>
            </select>
      </div>
      <table class="table table-hover table-bordered p-5 text-center" style={{borderRadius: "10px"}}>
        
        <thead>
        
          <tr>
            <th scope="col">ลำดับ</th>
            <th scope="col">ชื่อโรงพยาบาล ศูนย์หัวใจ</th>
            <th scope="col">จังหวัด</th>
            <th scope="col">ติดต่อ</th>
            <th scope="col"></th>
          </tr>
        
        </thead>
        <tbody>
        { // calling state variable data to filter data inside table
        data.map(function({id, name, city, location, img, map}){
         
              return (
                
                <tr>
               
                <td>{id}</td>
                <td>{name}</td>
                <td>{city}</td>
                <td>
                  <center>
                <button className="btn-solid-lg my-4" onClick={(e) => {
                  e.preventDefault();
                  window.location.href= location;
                }}>เว็บไซต์</button>

                <button className="btn-solid-lgs my-4 mx-4" onClick={(e) => {
                  e.preventDefault();
                  window.location.href= map;
                }}>แผนที่</button>
                </center>
                </td>
                <center>
                <img style={{width: "100px"}} src = {img}/>
                </center>
              </tr>
                );
            })}
            
            </tbody>
            </table>
        
       </div>
  

      
    </>
  );
};

export default withRouter(SuggestionBad);