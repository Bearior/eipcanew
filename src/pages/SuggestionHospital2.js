import React, { useState , useContext, useEffect } from "react";
import app from "../base";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../Auth";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../images/logo text.png" 


const SuggestionHospital2 = ({history}) => {
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
   { id: 6, 
    name: 'โรงพยาบาลกรุงเทพภูเก็ต', 
    city: 'ภูเก็ต', 
    location: 'https://www.phukethospital.com/th/',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/327155210_3485766961742573_1579560132984937655_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHFrzZHtAUFmgJiuEZJ0JX6RJ3xH2zJfdJEnfEfbMl90oUew9gnDg19z7ChZQ1Jb5f4ufVhkya7iD850n-qvqmO&_nc_ohc=SY19ECfUWHoAX8vpQCV&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfAWYRMLyCgNQoV1Eyxq17hm6ZJSohi-Aq6KBS7kPRwyYg&oe=6415895C",
    map: "https://www.google.co.th/maps/place/Bangkok+Hospital+Phuket/@7.9039809,98.3740986,17z/data=!3m1!4b1!4m5!3m4!1s0x3050319642447ddd:0x1912f364775aed3a!8m2!3d7.9039756!4d98.3762926"
  },
  { id: 6, 
    name: 'โรงพยาบาลกรุงเทพพัทยา', 
    city: 'พัทยา', 
    location: 'https://www.bangkokpattayahospital.com/th/',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/306287004_445437987617382_2944155962451828294_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH8R8saPbElNYNz2wbrPT--od-d-FMUkXuh3534UxSRexPwJfgc6hVJRx5Q3dGClT7EH85GC1OIwWyTcR8QuWVG&_nc_ohc=llVp-LXTLw0AX81zTbU&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfABzzzHth_30Cp8nHcI3bRJJO644hXIhMAoJ7UcK57s7w&oe=64141B66",
    map: "https://www.google.co.th/maps/place/Bangkok+Hospital+Pattaya/@12.9538298,100.9033555,17z/data=!3m1!4b1!4m5!3m4!1s0x3102be152b37142d:0x81a466188fa77aa6!8m2!3d12.9538246!4d100.9055495"
  },
  { id: 13, 
    name: 'โรงพยาบาลพระราม 9', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://www.praram9.com/?utm_term=%E0%B9%82%E0%B8%A3%E0%B8%87%20%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%20%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A3%E0%B8%B2%E0%B8%A1%209&utm_campaign=sem-awo-traffic-brand&utm_source=adwords&utm_medium=ppc&hsa_acc=3237537901&hsa_cam=19673555908&hsa_grp=145556731426&hsa_ad=647925528380&hsa_src=g&hsa_tgt=kwd-868150103438&hsa_kw=%E0%B9%82%E0%B8%A3%E0%B8%87%20%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%20%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A3%E0%B8%B2%E0%B8%A1%209&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPYs7WO56-_TNwbnFNuq2p40L9CLUaMSdSYG9Hkju1R_SSSF-J-6X8AaAomuEALw_wcB',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.6435-9/55551862_2225927714109136_2386663139694346240_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH3c51YS3eswhaquk66AaNnKidevLRkKN8qJ168tGQo30i3054_RGsa8qg-_pZL8LqlHYHGs3IKltkB7AFRufZh&_nc_ohc=F4sABqPyXukAX85FIg2&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfDWSg0-Q7X6G4KGnHGMwkXGbjQfj1Hg-voDVywkAEYY6w&oe=64374B62",
    map: "https://www.google.co.th/maps/place/Praram+9+Hospital/@13.7530601,100.5688253,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29ef4f449e749:0xb05ccd35cc25e092!8m2!3d13.7530549!4d100.5710193"
  },
  { id: 14, 
    name: 'โรงพยาบาลปิยะเวท', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://piyavate.com/',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/311045046_480108800823067_7501928069775791827_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFGeHX87UNDmrNUO15GDT0gMAVC7OIydYswBULs4jJ1i16Yz5-kRFt5GDHBLCfbk7YeW5Je-r376nyAl9Xzta1r&_nc_ohc=30XeejaPKlIAX_Sw031&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfDMwcsKi2feekw0LNQx6pfoAfK-K6ELfDCqRlvsApj2uw&oe=6415CFA2",
    map: "https://www.google.co.th/maps/place/Piyavate+Hospital/@13.7533874,100.5778907,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29e5e7726e455:0x4b1ab49dca7cb646!8m2!3d13.7533822!4d100.5800847"
  },
  { id: 15, 
    name: 'โรงพยาบาลวิชัยยุทธ', 
    city: 'กรุงเทพมหานคร', 
    location: '',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/272747211_1917344055138360_3443626163903873946_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHZDfp2M5PSsiaE5cr3bJZJS76bi2iiy_ZLvpuLaKLL9haiJKIsqtdcPWcnGVRe7_H0hGbTgxzVBhCaIupfII9G&_nc_ohc=uPjVYNyc41cAX8X67PA&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfAg-oiFwE9t9_5Qab1KNtwW2iAu-Jl9a83adZDUDC2Etw&oe=64140140",
    map: "https://www.google.co.th/maps/place/Vichaiyut+Hospital/@13.7806262,100.5307382,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29c01bf84a57d:0x6f678539a140ccd9!8m2!3d13.780621!4d100.5329322"
  },
  { id: 16, 
    name: 'โรงพยาบาลเจ้าพระยา', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://www.chaophya.com/',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.6435-9/189144530_4138109779585566_9114055755830523829_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFaz4AOxjK6ka2rvh1z16saBB2HN-N_Xa8EHYc3439dr0Dw1xLIJuE4AO85X3bYlyGJWWMrRnJqnlqcv6Z4G6fT&_nc_ohc=QfmrVE-FjfwAX_2tSAJ&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfC7Wfd26cYek-faIoDW-yXgYtrJ6T0H3T3g6A8GR7QKMg&oe=64376D22",
    map: "https://www.google.co.th/maps/search/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%B2/@13.7799495,100.4698488,18.19z"
  },
  { id: 17, 
    name: 'โรงพยาบาลพญาไท 2', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://www.phyathai.com/branch/PYT2',
    img: "https://heretohealproject.com/wp-content/uploads/2022/09/85.-%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%9E%E0%B8%8D%E0%B8%B2%E0%B9%84%E0%B8%972.png",
    map: "https://www.google.co.th/maps/place/Phyathai+2+Hospital/@13.7703996,100.5387634,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29eaff36c43ff:0xfa7be2811d3a6387!8m2!3d13.7703944!4d100.5409574"
  },
  { id: 18, 
    name: 'โรงพยาบาลสมิติเวช', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://www.samitivejhospitals.com/th',
    img: "https://www.samitivejchonburi.com/upload/doctor_photos/logo_square.jpg",
    map: "https://www.google.co.th/maps/search/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%AA%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%B4%E0%B9%80%E0%B8%A7%E0%B8%8A/@13.7350832,100.5694515,15.84z"
  },
  { id: 19, 
    name: 'โรงพยาบาลธนบุรี 1', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://www.thonburihospital.com/',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.6435-9/35544085_1856839507671122_3136981088648298496_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHWBKEqnziP76MH6rB9_otgOCxf5qQQGgw4LF_mpBAaDC1vdLNFRNZU-m9qcCBtY5iWDWThhbFQhCU3vd_zQquk&_nc_ohc=C-yWLUIu6lgAX9SNLz8&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfBa63xV2tGP3qzsrTh6RNT2iXiU4cO8JmPcZmjThgyfKA&oe=6437577A",
    map: "https://www.google.co.th/maps/place/Thonburi+Hospital/@13.7527312,100.4776802,17z/data=!3m1!4b1!4m5!3m4!1s0x30e299a410db3aeb:0x68733fd8e885ed0c!8m2!3d13.752726!4d100.4798742"
  },
  { id: 20, 
    name: 'โรงพยาบาลพญาไท 3', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://phyathai3hospital.com/home/',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/309861959_197471999314079_2375597537882036280_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEUmrEk5Bxxaoe6ywawUw1lB5tTqN26y8kHm1Oo3brLybWIrytLtFSggUzB_EWRfmvdbARJ42dkM1UjirvQ8BO-&_nc_ohc=XyZ9SL6kEmIAX-SfdB9&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfDPkysNCoFCTmNxWN_3LJXw6ChGQ96BkIxyoRy4eLDDcg&oe=64152A96",
    map: "https://www.google.co.th/maps/place/Phyathai+3+Hospital/@13.7229782,100.4618814,17z/data=!3m1!4b1!4m5!3m4!1s0x30e2984634badc79:0xd5f0e330080118f4!8m2!3d13.722973!4d100.4640754"
  },
  { id: 21, 
    name: 'โรงพยาบาลวิภาวดี', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://www.vibhavadi.com/',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.6435-9/50234186_2130690866976841_8189332246293905408_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE84B10W9uaVPXd-jSSFZ4TFkOmFgvatKwWQ6YWC9q0rIRNl7edQdSUqJWA3lL3iwmGCMJ0zv6eXQwvJNJfFvse&_nc_ohc=T8iaaik9WssAX9ajmdP&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfAd60HocaZgIFUhgMFGcp4zawr3kRi3FSoxmgba1w1sEA&oe=643755F8",
    map: "https://www.google.co.th/maps/place/Vibhavadi+Hospital/@13.8462595,100.5599299,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29ce7c2c0e5cd:0xf936935a200bf7af!8m2!3d13.8462543!4d100.5621239"
  },
  { id: 22, 
    name: 'โรงพยาบาลเกษมราษฎร์ ประชาชื่น', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://www.kasemrad.co.th/Prachachuen/th/site/packages_and_promotions',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.6435-9/166817290_5186228564785104_8791261196510276969_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGwE5gIMiDyIYY_UNcl7kw42RLfwhUtI7rZEt_CFS0juiJHES-2rEyGJo6FiAPU9GXCWnZ7aYFKT5v9teew1xAE&_nc_ohc=q7QqH2ZbYysAX_AZVk2&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfAeEx1pj_bVkirvByD_Fy3KHmNIIQcZdLcWotm1oiOCwg&oe=64377EC5",
    map: "https://www.google.co.th/maps/place/Kasemrad+Prachachuen+Hospital/@13.831699,100.5368034,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29dc7e1bb556b:0x10a210f32d43c8a3!8m2!3d13.8316938!4d100.5389974"
  },
  { id: 1, 
    name: 'โรงพยาบาลชลบุรี', 
    city: 'ชลบุรี', 
    location: 'http://www.cbh.moph.go.th/cbh2020/',
    img: "http://www.cbh.moph.go.th/cbhweb2/file/logo/logo.png",
    map: "https://www.google.co.th/maps/place/Chonburi+Hospital/@13.3519914,100.9799793,17z/data=!3m1!4b1!4m5!3m4!1s0x311d35804629950f:0xf03d84bc0dd45c0!8m2!3d13.3519862!4d100.9821733"
  },
   { id: 23, 
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
            <a className= "mx-3" href="/HardwareHistory">
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
        <h1 >ค้นหาโรงพยาบาลศูนย์หัวใจใกล้คุณ</h1>
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
      <h1 className="text-center mb-2">รายนามโรงพยาบาล ที่จัดเป็น "ศูนย์หัวใจ" 38 แห่ง ทั่วประเทศ</h1>
      <p className="text-center mb-5 fs-5 " style={{}} >อ้างอิงจาก: สมาคมแพทย์โรคหัวใจแห่งประเทศไทยในพระบรมราชูปถัมภ์</p>
      <div class="mb-3">
         <p className=" fs-4 " style={{color: "red"}} class="form-label">เลือกจังหวัดที่คุณอยู่ หรือจังหวัดใกล้เคียง</p>
           <select id="state" style={{borderRadius: "10px" , width: "20%"}}
             onChange={handleChange} class="form-select mb-5">
                <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
                <option value="สุราษฏร์ธานี">กระบี่</option>
                <option value="พิษณุโลก">กาญจนบุรี</option>
                <option value="ขอนแก่น">กาฬสินธุ์</option>
                <option value="พิษณุโลก">กำแพงเพชร</option>
                <option value="ขอนแก่น">ขอนแก่น</option>
                <option value="จันทบุรี">จันทบุรี</option>
                <option value="ปทุมธานี">	ฉะเชิงเทรา</option>
                <option value="ชลบุรี">	ชลบุรี</option>
                <option value="กรุงเทพมหานคร">	ชัยนาท</option>
                <option value="ขอนแก่น">	ชัยภูมิ</option>
                <option value="สุราษฏร์ธานี">	ชุมพร</option>
                <option value="เชียงใหม่">	เชียงราย</option>
                <option value="เชียงใหม่">เชียงใหม่</option>
                <option value="สงขลา">	ตรัง</option>
                <option value="จันทบุรี">	ตราด</option>
                <option value="เชียงใหม่">	ตาก</option>
                <option value="ปทุมธานี">	นครนายก</option>
                <option value="นนทบุรี">นนทบุรี</option>
                <option value="นนทบุรี">	นครปฐม</option>
                <option value="ขอนแก่น">	นครพนม</option>
                <option value="ปทุมธานี">	นครราชสีมา</option>
                <option value="สุราษฏร์ธานี">	นครศรีธรรมราช</option>
                <option value="พิษณุโลก">	นครสวรรค์</option>
                <option value="สงขลา">	นราธิวาส</option>
                <option value="เชียงใหม่">	น่าน</option>
                <option value="ขอนแก่น">	บึงกาฬ</option>
                <option value="อุบลราชธานี">	บุรีรัมย์</option>
                <option value="กรุงเทพมหานคร">	ประจวบคีรีขันธ์	</option>
                <option value="กรุงเทพมหานคร">	ปราจีนบุรี</option>
                <option value="สงขลา">	ปัตตานี</option>
                <option value="ปทุมธานี">ปทุมธานี</option>
                <option value="นนทบุรี"> พระนครศรีอยุธยา</option>
                <option value="พิษณุโลก">พิษณุโลก</option>
                <option value="เชียงใหม่">	พะเยา</option>
                <option value="สุราษฏร์ธานี">	พังงา</option>
                <option value="สงขลา">	พัทลุง</option>
                <option value="พิษณุโลก">	พิจิตร</option>
                <option value="กรุงเทพมหานคร">	เพชรบุรี</option>
                <option value="พิษณุโลก">	เพชรบูรณ์</option>
                <option value="เชียงใหม่">	แพร่</option>
                <option value="สุราษฏร์ธานี">	ภูเก็ต</option>
                <option value="ขอนแก่น">	มหาสารคาม</option>
                <option value="อุบลราชธานี">	มุกดาหาร</option>
                <option value="เชียงใหม่">	แม่ฮ่องสอน</option>
                <option value="อุบลราชธานี">	ยโสธร</option>
                <option value="สงขลา">	ยะลา</option>
                <option value="อุบลราชธานี">	ร้อยเอ็ด</option>
                <option value="สุราษฏร์ธานี">	ระนอง</option>
                <option value="จันทบุรี">	ระยอง</option>
                <option value="กรุงเทพมหานคร">	ราชบุรี</option>
                <option value="กรุงเทพมหานคร">	ลพบุรี</option>
                <option value="เชียงใหม่">	ลำปาง</option>
                <option value="เชียงใหม่">	ลำพูน</option>
                <option value="พิษณุโลก">	เลย</option>
                <option value="อุบลราชธานี">	ศรีสะเกษ</option>
                <option value="ขอนแก่น">	สกลนคร</option>
                <option value="สงขลา">สงขลา</option>
                <option value="สุราษฏร์ธานี">สุราษฏร์ธานี</option>
                <option value="สงขลา">	สตูล</option>
                <option value="กรุงเทพมหานคร">	สมุทรปราการ</option>
                <option value="กรุงเทพมหานคร">	สมุทรสงคราม</option>
                <option value="กุงเทพมหานคร">	สมุทรสาคร</option>
                <option value="จันทบุรี">	สระแก้ว</option>
                <option value="ปทุมธานี">	สระบุรี</option>
                <option value="นนทบุรี">สิงห์บุรี</option>
                <option value="พิษณุโลก">	สุโขทัย</option>
                <option value="กรุงเทพมหานคร">	สุพรรณบุรี</option>
                <option value="อุบลราชธานี">	สุรินทร์</option>
                <option value="ขอนแก่น">	หนองคาย</option>
                <option value="ขอนแก่น">	หนองบัวลำภู</option>
                <option value="ปทุมธานี">	อ่างทอง</option>
                <option value="อุบลราชธานี">	อำนาจเจริญ</option>
                <option value="ขอนแก่น">	อุดรธานี</option>
                <option value="พิษณุโลก">	อุตรดิตถ์</option>
                <option value="พิษณุโลก">	อุทัยธานี</option>
                <option value="อุบลราชธานี">อุบลราชธานี</option>

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

export default withRouter(SuggestionHospital2);