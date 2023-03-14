import React from "react";
import { useContext, useState, useEffect} from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../Auth.js";
import app from "../base";
import "../App.css";
import "../css/bootstrap.css"
import "../css/styles.css"
import Logo from "../images/logo text.png" 
import Logo2 from "../images/logo pic.png" 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DataTable from "react-data-table-component";

const Hospital = ({history}) => {

const { currentUser } = useContext(AuthContext);

const Signout = () => {
        app.auth().signOut();
        window.location.reload(true)
        history.push('/login')
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
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Mahidol_U.png/150px-Mahidol_U.png"
  }, 
  { id: 2, 
    name: 'โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://chulalongkornhospital.go.th/kcmh/',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Thai_Red_Cross_Logo.svg/1200px-Thai_Red_Cross_Logo.svg.png"
  }, 
  { id: 3, 
    name: 'โรงพยาบาลวชิรพยาบาล', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://www.vajira.ac.th/content/60cefcc2b11d0a7035126866',
    img: "https://www.vajira.ac.th/assets/images/logo-566c3f0e.png"
  }, 
  { id: 4, 
    name: 'สถาบันโรคทรวงอก', 
    city: 'นนทบุรี', 
    location: 'https://www.ccit.go.th/',
    img: "https://www.jobbkk.com/upload/variety/goverment/20160215_2877.png"
  }, 
  { id: 5, 
    name: 'คณะแพทยศาสตร์โรงพยาบาลรามาธิบดี มหาวิทยาลัยมหิดลโรงพยาบาลรามาธิบดี', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://www.rama.mahidol.ac.th/rama_hospital/',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t31.18172-8/13173427_10153627356152634_6966570266114905057_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEyhx8B84C6DeK_JiOnAOdrLVp8LRMQdjUtWnwtExB2NTAzvp2dXOaaPznyV_phN4pEKn0QMX09TBMhMlVPyCFK&_nc_ohc=2It9x7g8VXkAX-rYBEW&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfDqDd5HO98y9zLt6MZ-IzB0mbVqmXOlIWfOf40ijSV83w&oe=64337E1D"
  }, 
  { id: 6, 
    name: 'โรงพยาบาลภูมิพลอดุลยเดช กรมแพทย์ทหารอากาศ', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://bhumibolhospital.rtaf.mi.th/',
    img: "https://bhumibolhospital.rtaf.mi.th/Sitedirectory/616/2765/10507_bhu.png%20(Custom).png"
  },
  { id: 7, 
    name: 'โรงพยาบาลมหาราชนครราชสีมา', 
    city: 'นครราชสีมา', 
    location: 'https://www.mnrh.go.th/th/',
    img: "https://www.meckorat.info/images/logoENG1024x1024.png"
  },
  { id:8, 
    name: 'โรงพยาบาลสงขลานครินทร์', 
    city: 'สงขลา', 
    location: 'https://hospital.psu.ac.th/',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.6435-9/41990999_2085571211473550_3099492427950456832_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFYeH1xKUchUEgPoRN-m3xix7m2BLpCS2_HubYEukJLb0FLHIhFHaZqgvRpjSQ1BdBPUnb4_KYkNrPVx9qvmwQO&_nc_ohc=Xb3UskRgTyAAX8mqFDu&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfAwLpPj285KNTAGD4r7YujVmTRkU3oGamiwlecoI4_t8A&oe=6433B193"
  },
  { id: 6, 
    name: 'โรงพยาบาลสรรพสิทธิประสงค์', 
    city: 'อุบลราชธานี', 
    location: 'https://www.sunpasit.go.th/',
    img: "https://healthserv.net/imgcntupload/hsp010533e210711115816.jpg"
  },
  { id: 6, 
    name: 'โรงพยาบาลพระปกเกล้า', 
    city: 'จันทบุรี', 
    location: '',
    img: "https://upload.wikimedia.org/wikipedia/th/8/8f/Logo_of_Prapokklao_Hospital.png"
  },
  { id: 6, 
    name: 'โรงพยาบาลสุราษฏร์ธานี', 
    city: 'สุราษฏร์ธานี', 
    location: 'https://srth.go.th/',
    img: "https://upload.wikimedia.org/wikipedia/th/c/ce/Logo_of_Surat_Thani_Hospital.jpg"
  },
  { id: 6, 
    name: 'โรงพยาบาลขอนแก่น', 
    city: 'ขอนแก่น', 
    location: 'https://www.kkh.go.th/',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Seal_of_the_Ministry_of_Public_Health_of_Thailand.svg/200px-Seal_of_the_Ministry_of_Public_Health_of_Thailand.svg.png"
  },
  { id: 6, 
    name: 'โรงพยาบาลพุทธชินราช', 
    city: 'พิษณุโลก', 
    location: 'https://budhosp.go.th/',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/305620973_459728406181717_8820274840384791146_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFYiR5O8n630p4mCHQsJJjn9PYIM7cPDFT09ggztw8MVGj2-hXIRaGbIbQ9IyfRYWi7rjpsJOy_09V2ps6da4C9&_nc_ohc=gDOGrNopVdkAX-fYXsI&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfCsG2AAVg3STGAKbrbyb0YM3ZBte3TuAJ4iUTWW7OCyBg&oe=641155D8"
  },
  { id: 6, 
    name: 'โรงพยาบาลพระมงกุฎเกล้า', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://www.pmk.ac.th/index.php',
    img: "http://www.rcopt.org/images/uploads/%E0%B9%82%E0%B8%A5%E0%B9%82%E0%B8%81%E0%B9%89%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A1%E0%B8%87%E0%B8%81%E0%B8%B8%E0%B8%8E%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2.jpg"
  },
  { id: 6, 
    name: 'โรงพยาบาลตำรวจ', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://www.policehospital.org/content/home.php',
    img: "https://www.policehospital.org/img/lgpgh02.png"
  },
  { id: 6, 
    name: 'โรงพยาบาลมหาราชนครเชียงใหม่ - คณะแพทยศาสตร์ มหาวิทยาลัยเชียงใหม่', 
    city: 'เชียงใหม่', 
    location: 'https://www.med.cmu.ac.th/web/suandok-hospital/',
    img: "https://upload.wikimedia.org/wikipedia/th/thumb/9/93/Medicine_CMU_Logo.svg/1200px-Medicine_CMU_Logo.svg.png"
  },
  { id: 6, 
    name: 'โรงพยาบาลบำรุงราษฎร์', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://www.bumrungrad.com/th/fasttrack-pay?utm_source=sem-thai&utm_medium=sem&utm_campaign=smart-fasttrack-pay-1-nov-22&gclid=Cj0KCQiAx6ugBhCcARIsAGNmMbjnOh7J2qTakzAVw9tr8vIfm1DHPNIRmYBZlZJZZpC-2_gbKPxT4hIaAsxjEALw_wcB',
    img: "https://play-lh.googleusercontent.com/S9iHWwc7c1nHaAeO6xrQkCa96oYx8KJSLy2HvGCLClVKNeAhZWmum7BF1D-3JZ0jzj8"
  },
  { id: 6, 
    name: 'โรงพยาบาลหัวใจกรุงเทพ', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://www.bangkokhearthospital.com/',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/276112005_335692925265051_3811084780797970869_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEER-IKHDkJJ0RPYO0YEg6W7MBcSFKuiBLswFxIUq6IEspOqpttzOuaMqHLHTYWP9uquUDpGQsBx8Pk6KaHeMYY&_nc_ohc=JNSoJYKFr0cAX8EG_Mw&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfAE_sjH4Hd6wjC39ayGrBNJR6wDbBjAf2LYWwQmZkVJwA&oe=64109523"
  },
  { id: 6, 
    name: 'โรงพยาบาลเซนต์หลุยส์', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://www.saintlouis.or.th/th/index',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/323425626_1477330449460933_3211347127574835108_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFpu1pbSjkohS4n_9-wlR_Xc84oPOj7vqZzzig86Pu-pnh4Qt14pZ9M_xFQ7o03WL1iNRYPAqtvYiPVbDQFEgrJ&_nc_ohc=5PZW4fTVI-wAX8Ab8nx&_nc_oc=AQm0BT6lMEb47CAJ1oT5sDXXS0DP1oXQJ40-_Y5FhclDQxP04ArYqG4UgKpAFT1OvrI&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfBVQFvbFyBh3PjZ2RBhiKeJykIqahH2feY4OUB2aqk83A&oe=641100CA"
  },
  { id: 6, 
    name: 'โรงพยาบาลบางปะกอก 9 อินเตอร์​เนชั่นแนล​', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://bpk9internationalhospital.com/',
    img: "https://static.hdmall.co.th/200x200/system/brands/logo/1922/original/bangpakok-9-international-hospital.jpg"
  },
  { id: 6, 
    name: 'โรงพยาบาลรามคําแหง', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://www.ram-hosp.co.th/',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.6435-9/53535804_2330713130281217_7144079953980555264_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHwg1fbrUHsir_t2Ppr-vBvq6zGYQzSgM2rrMZhDNKAzRuu7nu7k0SgLxR30XzGSg2epyIc259o5YWosC5TU1V1&_nc_ohc=Ms-PgZXEq-MAX8mnugg&_nc_oc=AQkkAomtzrXDD1MhtAp4QEQu1GAZnmc8Ep463IyVViEuv99npYE2QR9uOPbYczKH-oE&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfA4tduhUZwolpVtgaLzB3vNKlT9BqRg-xM86qX9S1Ah7g&oe=6433A52B"
  },
  { id: 6, 
    name: 'โรงพยาบาลกรุงเทพภูเก็ต', 
    city: 'ภูเก็ต', 
    location: 'https://www.phukethospital.com/th/',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/327155210_3485766961742573_1579560132984937655_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHFrzZHtAUFmgJiuEZJ0JX6RJ3xH2zJfdJEnfEfbMl90oUew9gnDg19z7ChZQ1Jb5f4ufVhkya7iD850n-qvqmO&_nc_ohc=SY19ECfUWHoAX8vpQCV&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfAWYRMLyCgNQoV1Eyxq17hm6ZJSohi-Aq6KBS7kPRwyYg&oe=6415895C"
  },
  { id: 6, 
    name: 'โรงพยาบาลกรุงเทพพัทยา', 
    city: 'พัทยา', 
    location: 'https://www.bangkokpattayahospital.com/th/',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/306287004_445437987617382_2944155962451828294_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH8R8saPbElNYNz2wbrPT--od-d-FMUkXuh3534UxSRexPwJfgc6hVJRx5Q3dGClT7EH85GC1OIwWyTcR8QuWVG&_nc_ohc=llVp-LXTLw0AX81zTbU&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfABzzzHth_30Cp8nHcI3bRJJO644hXIhMAoJ7UcK57s7w&oe=64141B66"
  },
  { id: 6, 
    name: 'โรงพยาบาลพระราม 9', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://www.praram9.com/?utm_term=%E0%B9%82%E0%B8%A3%E0%B8%87%20%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%20%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A3%E0%B8%B2%E0%B8%A1%209&utm_campaign=sem-awo-traffic-brand&utm_source=adwords&utm_medium=ppc&hsa_acc=3237537901&hsa_cam=19673555908&hsa_grp=145556731426&hsa_ad=647925528380&hsa_src=g&hsa_tgt=kwd-868150103438&hsa_kw=%E0%B9%82%E0%B8%A3%E0%B8%87%20%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%20%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A3%E0%B8%B2%E0%B8%A1%209&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPYs7WO56-_TNwbnFNuq2p40L9CLUaMSdSYG9Hkju1R_SSSF-J-6X8AaAomuEALw_wcB',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.6435-9/55551862_2225927714109136_2386663139694346240_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH3c51YS3eswhaquk66AaNnKidevLRkKN8qJ168tGQo30i3054_RGsa8qg-_pZL8LqlHYHGs3IKltkB7AFRufZh&_nc_ohc=F4sABqPyXukAX85FIg2&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfDWSg0-Q7X6G4KGnHGMwkXGbjQfj1Hg-voDVywkAEYY6w&oe=64374B62"
  },
  { id: 6, 
    name: 'โรงพยาบาลปิยเวท', 
    city: '', 
    location: '',
    img: ""
  },
  { id: 6, 
    name: 'โรงพยาบาลวิชัยยุทธ', 
    city: '', 
    location: '',
    img: ""
  },
  { id: 6, 
    name: 'โรงพยาบาลเจ้าพระยา', 
    city: '', 
    location: '',
    img: ""
  },
  { id: 6, 
    name: 'โรงพยาบาลพญาไท 2', 
    city: '', 
    location: '',
    img: ""
  },
  { id: 6, 
    name: 'โรงพยาบาลสมิติเวช', 
    city: '', 
    location: '',
    img: ""
  },
  { id: 6, 
    name: 'โรงพยาบาลธนบุรี 1', 
    city: '', 
    location: '',
    img: ""
  },
  { id: 6, 
    name: 'โรงพยาบาลพญาไท 3', 
    city: '', 
    location: '',
    img: ""
  },
  { id: 6, 
    name: 'โรงพยาบาลวิภาวดี', 
    city: '', 
    location: '',
    img: ""
  },
  { id: 6, 
    name: 'โรงพยาบาลราชวิถี', 
    city: 'กรุงเทพมหานคร', 
    location: 'https://www.rajavithi.go.th/',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.18169-9/11039225_445754495596106_6147377604860089432_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHYOWR5z17wE_4fmObZ-tsqx9S2VGPZOA3H1LZUY9k4DV_3trxBJdBS9JGxxgv64OXrkuAXdwixB6QHmGMSdF-g&_nc_ohc=43l_K4sf5AcAX_9-mrs&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfD3wOC4cXFu3v8zZtYdDmyd15BuutdC-9_SQD69WckSSw&oe=6433B541"
  },
  { id: 6, 
    name: 'โรงพยาบาลมหาวิทยาลัยนเรศวร คณะแพทยศาสตร์ มหาวิทยาลัยนเรศวร', 
    city: 'พิษณุโลก', 
    location: 'https://med.nu.ac.th/nuh/',
    img: "https://med.nu.ac.th/nuh/assets/img/logo_nuh.png?v="
  },
  { id: 6, 
    name: 'โรงพยาบาลธรรมศาสตร์เฉลิมพระเกียรติ', 
    city: 'ปทุมธานี', 
    location: 'https://www.hospital.tu.ac.th/',
    img: "https://www.hospital.tu.ac.th/images/logo.png"
  },
  { id: 6, 
    name: 'โรงพยาบาลเชียงใหม่ ราม', 
    city: 'เชียงใหม่', 
    location: 'https://www.chiangmairam.com/',
    img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/304994343_449616423860423_7066928525316264533_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEka5PiHkFKfx9GoljogV1De3Nn5CZVpNl7c2fkJlWk2Q8kxgc2_lixoEFGWrZ5N653yKhB1GepUhWdZZ4QOeFN&_nc_ohc=s1MlKVWmqJwAX8QSNWM&_nc_ht=scontent.fcnx1-1.fna&oh=00_AfCEuCdjRiXryFx1RlDDcsHzHWZ3-CzdJsarqR4lXKlrrA&oe=64103D8C"
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
  <br/>
  <br/>
  <br/>
  <br/>
  <div className="app container p-5">
      <h1 className="text-center mb-5">Reactjs Data Table with Custom Filters Using Hooks useEffect useState</h1>
      <div class="mb-3">
         <label class="form-label">เลือกจังหวัดที่คุณอยู่</label>
           <select id="state"
             onChange={handleChange} class="form-select mb-5">
                <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
                <option value="">กระบี่</option>
                <option value="ขอนแก่น">กาญจนบุรี</option>
                <option value="">กาฬสินธุ์</option>
                <option value="กำแพงเพชร">กำแพงเพชร</option>
                <option value="ขอนแก่น">ขอนแก่น</option>
                <option value="จันทบุรี">จันทบุรี</option>
                <option value="">	ฉะเชิงเทรา</option>
                <option value="">	ชลบุรี</option>
                <option value="">	ชัยนาท</option>
                <option value="">	ชัยภูมิ</option>
                <option value="">	ชุมพร</option>
                <option value="">	เชียงราย</option>
                <option value="เชียงใหม่">เชียงใหม่</option>
                <option value="">	ตรัง</option>
                <option value="">	ตราด</option>
                <option value="">	ตาก</option>
                <option value="">	นครนายก</option>
                <option value="นนทบุรี">นนทบุรี</option>
                <option value="">	นครปฐม</option>
                <option value="">	นครพนม</option>
                <option value="">	นครราชสีมา</option>
                <option value="">	นครศรีธรรมราช</option>
                <option value="">	นครสวรรค์</option>
                <option value="">	นราธิวาส</option>
                <option value="">	น่าน</option>
                <option value="">	บึงกาฬ</option>
                <option value="">	บุรีรัมย์</option>
                <option value="">	ประจวบคีรีขันธ์	</option>
                <option value="">	ปราจีนบุรี</option>
                <option value="">	ปัตตานี</option>
                <option value="ปทุมธานี">ปทุมธานี</option>
                <option value=""> พระนครศรีอยุธยา</option>
                <option value="พิษณุโลก">พิษณุโลก</option>
                <option value="">	พะเยา</option>
                <option value="">	พังงา</option>
                <option value="">	พัทลุง</option>
                <option value="">	พิจิตร</option>
                <option value="">	เพชรบุรี</option>
                <option value="">	เพชรบูรณ์</option>
                <option value="">	แพร่</option>
                <option value="">	ภูเก็ต</option>
                <option value="">	มหาสารคาม</option>
                <option value="">	มุกดาหาร</option>
                <option value="">	แม่ฮ่องสอน</option>
                <option value="">	ยโสธร</option>
                <option value="">	ยะลา</option>
                <option value="">	ร้อยเอ็ด</option>
                <option value="">	ระนอง</option>
                <option value="">	ระยอง</option>
                <option value="">	ราชบุรี</option>
                <option value="">	ลพบุรี</option>
                <option value="">	ลำปาง</option>
                <option value="">	ลำพูน</option>
                <option value="">	เลย</option>
                <option value="">	ศรีสะเกษ</option>
                <option value="">	สกลนคร</option>
                <option value="สงขลา">สงขลา</option>
                <option value="สุราษฏร์ธานี">สุราษฏร์ธานี</option>
                <option value="">	สตูล</option>
                <option value="">	สมุทรปราการ</option>
                <option value="">	สมุทรสงคราม</option>
                <option value="">	สมุทรสาคร</option>
                <option value="">	สระแก้ว</option>
                <option value="">	สระบุรี</option>
                <option value="">สิงห์บุรี</option>
                <option value="">	สุโขทัย</option>
                <option value="">	สุพรรณบุรี</option>
                <option value="">	สุรินทร์</option>
                <option value="">	หนองคาย</option>
                <option value="">	หนองบัวลำภู</option>
                <option value="">	อ่างทอง</option>
                <option value="">	อำนาจเจริญ</option>
                <option value="">	อุดรธานี</option>
                <option value="">	อุตรดิตถ์</option>
                <option value="">	อุทัยธานี</option>
                <option value="อุบลราชธานี">อุบลราชธานี</option>

            </select>
      </div>
      <table class="table table-hover table-bordered p-5">
        <thead>
          <tr>
            <th scope="col">ลำดับ</th>
            <th scope="col">ชื่อ</th>
            <th scope="col">จังหวัด</th>
            <th scope="col">ที่อยู่</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        { // calling state variable data to filter data inside table
        data.map(function({id, name, city, location, img}){
         
              return (
                
                <tr>
               
                <td>{id}</td>
                <td>{name}</td>
                <td>{city}</td>
                <td>
                  <center>
                <button className="btn-solid-lg" onClick={(e) => {
                  e.preventDefault();
                  window.location.href= location;
                }}>Website</button>
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

export default withRouter(Hospital);