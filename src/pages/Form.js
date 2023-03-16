import React, { useState , useContext, useEffect } from "react";
import app from "../base";
import { withRouter, Redirect} from "react-router-dom";
import { AuthContext } from "../Auth";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../images/logo text.png" 
import Logo2 from "../images/logo pic.png" 
import "../App.css"
import "../css/bootstrap.css"
import "../css/styles.css"

export const Forms = ({history}) => {
  const { currentUser } = useContext(AuthContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [Formstatus, setFormstatus] = useState("");
  const db = app.firestore();
  useEffect (() => {
    const documentRef = db.collection('EIPCAFORM').doc(currentUser.uid);
    documentRef.get().then((doc) => {
      if (doc.exists) {
        let formstatusArray = [];
        formstatusArray.push(doc.data());
        const myStringValue = formstatusArray[0].Form_Result;
        setFormstatus(myStringValue);
        
      } else {
        console.log("No such document!");
        SkipBtn = <p></p>
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  })

  let SkipBtn;
  let Text;
  if (Formstatus == "No_Risk"){
    SkipBtn = 
    <a className="btn-solid-lgr " style={{marginLeft: "70%"}} href="/Choose">
       ข้ามแบบประเมิน
    </a>
    Text =  "หากท่านทราบผลประเมินภายใน 6 เดือนแล้วให้กดข้ามการทำแบบประเมิน"
  } else if (Formstatus == "Low_Risk") {
    SkipBtn = 
    <a className="btn-solid-lgr " style={{marginLeft: "70%"}} href="/Choose">
       ข้ามแบบประเมิน
    </a>
    Text = "หากท่านทราบผลประเมินภายใน 6 เดือนแล้วให้กดข้ามการทำแบบประเมิน"
  } else if (Formstatus == "Medium_Risk") {
    SkipBtn = 
    <a className="btn-solid-lgr " style={{marginLeft: "70%"}} href="/Choose">
       ข้ามแบบประเมิน
    </a>
    Text = "หากท่านทราบผลประเมินภายใน 6 เดือนแล้วให้กดข้ามการทำแบบประเมิน"
  } else if (Formstatus == "High_Risk") {
    SkipBtn = 
    <a className="btn-solid-lgr " style={{marginLeft: "70%"}} href="/Choose">
       ข้ามแบบประเมิน
    </a>
    Text ="หากท่านทราบผลประเมินภายใน 6 เดือนแล้วให้กดข้ามการทำแบบประเมิน"
  } else {
    SkipBtn = 
    <p></p>
  };
  
  const questions = [
    {
      img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/336131950_934314804255262_5583212807999973978_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEmuPpTtr6HNGpU0ewOer3SwzeRlroACYzDN5GWugAJjHEPpB17lNX1tnsMogok7QL7u_sOIqtLR6QFERfWCbk7&_nc_ohc=fKYgJmiX6XwAX_m2ofG&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdQoXif_AYtc2e_aBF-hRYEa6DWt_C_JUg1UKA74P62L0g&oe=643A505D",
      question: "เพศหญิง อายุมากกว่า 55 ปี / เพศชาย อายุมากกว่า 45 ปี",
      answer: "yes",
      page: "1/12"
    },
    {
      img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/336434323_3417475315235002_5197430383600449056_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE4BZMGJ_Q_Cogi_z2WHiwTPdzADaPnKAk93MANo-coCdlZ5XKN2RT2xp0BliYZBBb_1bDCrZhX7CcN4DKaxU8_&_nc_ohc=8a51qfJ_F1UAX8fmB22&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdQFYoiskVO6pPlOlRCt_U5XoKZ7V6c6EEaDzFeqsLGxzg&oe=643A273C",
      question: "คุณสูบบุหรี่หรือได้รับควันบุหรี่อย่างต่อเนื่อง/เลิกบุหรี่ไม่เกิน 2 ปี",
      answer: "yes",
      page: "2/12"
    },
    {
      img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/335944278_1147210736674576_1265062811049131949_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH02JI-Y5jrUhIYLAtNqn3PNmFcSV1dWBU2YVxJXV1YFb22zdD8m2aVXLQtcoTnMy3GqJ6CU14bcr3-nfCHJrYi&_nc_ohc=ocQfiAB6OPUAX-Qnu5T&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdS3Xnj9xnXwr75dRaNcypndf_rz8lTaGmaSaj5IyMQ-HA&oe=643A4C41",
      question: "มีความดันโลหิตสูงมากกว่า 140/90 มิลลิเมตรปรอท",
      answer: "yes",
      page: "3/12"
    },
    {
      img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/336269593_197962369513259_884719256626818416_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFM928hAPfb4dueZUR6OZeUiP3TrdRMy2iI_dOt1EzLaA2v6fvGxJWODjffRluvUByg1SAL_Izm9HctMSt8TVz-&_nc_ohc=nFPCDRgCFooAX9VOkkv&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdTTwNAppLNPM2bofPH-AEmFcUn4cWyskO_Ipv3Kdf6ovA&oe=643A3A36",
      question: "มีค่าไขมันในเลือดสูงผิดปกติ (ค่าโคเลสเตอรอล มากกว่า 200 มิลลิกรัมเปอร์เซนต์)",
      answer: "yes",
      page: "4/12"
    },
    {
      img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/336374588_603080685043144_3350113312363429359_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHWWYSCkFAzjAEeZSKEkx-hQIT-vbLMZw9AhP69ssxnD2Y8kWsAIPL-j1ESVtNTsoqu9524MhI6ZtB0nAQYXyl3&_nc_ohc=CydA-tZLDHcAX8p2GPr&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdS5svKq4NIKrm4vYjUG7KVeXfg_SI4t5ZEC9Qtq5GHCDQ&oe=643A4C47",
      question: "ขาดการออกกำลังกายหรือออกกำลังกายน้อยกว่า 3 ครั้ง/สัปดาห์ (30 นาที/ครั้ง)",
      answer: "yes",
      page: "5/12"
    },
    {
      img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/336524636_1248122419461976_6349749719594880330_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGzvKXA-Pn-XzrlRsGaUIpMM8JHb17ba24zwkdvXttrbgoS6_OkVtTpggr25YAVDmtI7uGSylfsFbWAuhFRmYC0&_nc_ohc=1_owp-zimhwAX9bUXhz&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdSJ5q6e-G5yNlVt-NJJ6_J47Ik8xAoIdhW-X7pvU0hxrg&oe=643A39B2",
      question: "น้ำหนักเกินมาตรฐาน (ดรรชนีมวลกายมากกว่า 25 kg/m^2) อ้วนลงพุง รอบเอวมากกว่า ชาย 90 ซม.(36 นิ้ว)/หญิง 80 ซม. (32 นิ้ว)",
      answer: "yes",
      page: "6/12"
    },
    {
      img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/336145153_1186930658630169_7493318649124179444_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFqLjBt8miky-uKf6f8bnzqoUIgnGjBvKqhQiCcaMG8qoB9aYgEZV2M0IAqtDIbmIB7OP3ne0iYXKP0zk6-WW84&_nc_ohc=V24ZoiwRAOIAX-EpLs7&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdStv2nZVqKnJwdSgLPmT_zOfR8k4-1oKB-_rC9jUvJjNw&oe=643A3BB0",
      question: "บุคคลใคครอบครัวสายตรงมีประวัติเป็นโรคหลอดเลือดหัวใจตีบ",
      answer: "yes",
      page: "7/12"
    },
    {
      img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/336083008_586655100040870_8424799891511615758_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHI8ylr2j_evdSTNX9vAHH-4xFnzEmlAkjjEWfMSaUCSOAyEaMH76F_ysbcTXwHX46nvpjEC1-CnMob9qJ1-lD7&_nc_ohc=kVZLxThUi5QAX8OKIqY&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdTRkmRPs4SH1WOU4B8bHB2HQll81ENqbayChGP554Oy3A&oe=643A3901",
      question: "เป็นโรคเบาหวานหรือระดับน้ำตาลในเลือดผิดปกติมากกว่า 100 mg/dl",
      answer: "yes",
      page: "8/12"
    },
    {
      img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/336368948_788023082899628_715109536265586321_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFbTB-Avol74Vwx2jgWOTdDMSJPJhIxtPAxIk8mEjG08H0p_tE7__p94OLXvCOE7MmKlsRsAyY45wTSw8Jo3K_d&_nc_ohc=ZbFTTCjwfrwAX8rIbA7&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdQVDal4cXffPPsRFen9IvepDciBYgxEFXZAeIiqWKjgOQ&oe=643A42FE",
      question: "มีภาวะตึงเครียดอยู่เสมอ",
      answer: "yes",
      page: "9/12"
    },
    {
      img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/335845052_1398245477590407_6295295999653386980_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGD4lw0ljzNk7bdtdZ7cu5Zdgm093m0qV12CbT3ebSpXTNgrUJo8qcNefrITlsse_5KyMtE8N54aBBdiPV-HRVT&_nc_ohc=1ISPximl_dEAX95omqo&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdSH4ro1M9P_ZLYMuEsZaL8H91Kwcm-eBfK76FdLDE7lAw&oe=643A3622",
      question: "รู้สึกเหนื่อยง่าย เหนื่อยผิดปกติขณะออกกำลังกาย หรือเมื่อออกแรง / เดินขึ้นบันได 2 ชั้น",
      answer: "yes",
      page: "10/12"
    },
    {
      img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/336183877_236450075447957_4595466719975744125_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGXD-NMQZV8dzLk6Z0DYAy0VHgXfOBa4XVUeBd84FrhdfExNGdYuLOcg45M5RbZTeMxaKo5sNuyMs5ufav93cAO&_nc_ohc=nImvrHxuoMAAX_4byAc&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdTufFLBfva9hl-If5qVfYon4wPgnAlTVGOt5YTcBTReyQ&oe=643A2C05",
      question: "มีอาการจุกเสียด แน่นหน้าอกหรือบริเวณลิ้นปี่ เมื่อออกแรง",
      answer: "yes",
      page: "11/12"
    },
    {
      img: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/336418500_502238925449276_7164378109463282065_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHMxftRvefpc71V5QvyS9EBNNloybWTBq002WjJtZMGraqAAYVxQTr2LYbsqLzdZacpDgzFIARyvi8QHKMq8wYc&_nc_ohc=qw9JGFb4XqkAX9KmNSw&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdSIHOZS3n9mTGhcxmXPfXeh1Y4jskUt_TKv1w608f-Pfw&oe=643A54D5",
      question: "มีอาการใจเต้น ใจสั่น เป็นลม หน้ามืดหรือหมดสติโดยไม่ทราบสาเหตุ",
      answer: "yes",
      page: "12/12"
    },
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const renderQuiz = () => {
    const db = app.firestore();
    const DBref = db.collection("EIPCAFORM").doc(currentUser.uid);
    if (currentQuestion === questions.length) {
      // Quiz completed, show results
      const correctAnswers = answers.filter(
        (answer, index) => answer === questions[index].answer
      );
      let result;
      let resultimg;
      let suggestion;
      let Button;
      let suggestionButton;
      if (correctAnswers.length > 10) {
        result = "คุณมีความเสี่ยงสูงที่จะเป็นโรคหัวใจ!";
        resultimg = "https://media2.giphy.com/media/5ULFCfpKmsM529rkwR/giphy.gif?cid=ecf05e4728xzz2ftvd6m4hmdc0z1ac4f2ae14q7hxojw4nrw&rid=giphy.gif&ct=g";
        suggestion = "คุณควรไปพบแพทย์โดยเร็วที่สุด";
        DBref.set({
          "Form_Result" : "High_Risk"
        })
        Button = <a className="btn-solid-lgr mb-2 "  href="/SuggestionHospital">ค้นหาโรงพยาบาล</a>
        suggestionButton = <a className="btn-solid-lg " href="/SuggestionBad">คำแนะนำ</a>
      } else if (correctAnswers.length > 8) {
        result = "คุณมีความเสี่ยงปานกลางที่จะเป็นโรคหัวใจ!";
        resultimg = "https://media4.giphy.com/media/T9YRoIuBJchO7u8a6F/giphy.gif?cid=ecf05e47b3hvifkkcw5uoo9qp0scy29i0rhb31uvab5r9qq0&rid=giphy.gif&ct=g";
        suggestion = "คุณควรออกกำลังกายอย่างสม่ำเสมอ และควรตรวจสุขภาพเป็นประจำอย่างน้อยปีละ 2-3 ครั้ง";
        DBref.set({
          "Form_Result" : "Medium_Risk"
        })
        Button = <a className="btn-solid-lgr mb-2"  href="/SuggestionHospital">ค้นหาโรงพยาบาล</a>
        suggestionButton = <a className="btn-solid-lg mx-4" href="/SuggestionBad">คำแนะนำ</a>
      } else if (correctAnswers.length > 5) {
        result = "คุณมีความเสี่ยงต่ำที่จะเป็นโรคหัวใจ!";
        resultimg = "https://media4.giphy.com/media/T9YRoIuBJchO7u8a6F/giphy.gif?cid=ecf05e47b3hvifkkcw5uoo9qp0scy29i0rhb31uvab5r9qq0&rid=giphy.gif&ct=g";
        suggestion = "คุณควรเริ่มออกกำลังกาย และควรตรวจสุขภาพเป็นประจำอย่างน้อยปีละ 1 ครั้ง"
        DBref.set({
          "Form_Result" : "Low_Risk"
        })
        suggestionButton = <a className="btn-solid-lg mx-4" href="/SuggestionBad">คำแนะนำ</a>

      } else {
        result = "คุณไม่มีความเสี่ยงที่จะเป็นโรคหัวใจ";
        resultimg = "https://media0.giphy.com/media/jGR23trwtcmXvK9AMy/giphy.gif?cid=ecf05e47bkemwemycxmcgxxhjtjpj9pli6q42lxo6lk74t17&rid=giphy.gif&ct=g";
        suggestion = "ควรตรวจสุขภาพเป็นประจำอย่างน้อยปีละ 1 ครั้ง"
        DBref.set({
          "Form_Result" : "No_Risk"
        })
        suggestionButton = <a className="btn-solid-lg mx-4" href="/SuggestionHealthy">คำแนะนำ</a>
      }
      console.log(result)

      
      return(
      
      <div>
        <img src={resultimg} style={{width: "10%" , marginTop: "1%" , borderRadius: "10px"}}/>
        <h2 style={{marginTop : "1%" ,padding: "50px", borderRadius: "10px" , marginBottom: "1%"}}  className="bg-gray">{result}<br/>{suggestion}</h2>
        <center>
        <a>{Button}</a>
        <div>{suggestionButton}</div>
        </center>
        <center>
          <div id="" className="">
            <div className="basic-3">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    {/* Job */}
                    <div className="job-container">
                      <a style={{textDecoration: "none"}} href="/upload">
                      <img
                        className="img6"
                        src={Logo2}
                      />
                      <h2  className="my-2">
                        ตรวจภาพคลื่นไฟฟ้าหัวใจด้วย EIPCA
                      </h2>
                      <p>
                        ระบบ "EIPCA" ปัญญาประดิษฐ์ที่ช่วยประเมินความเสี่ยงการเกิด Brugada Syndrom เพื่อประกอบการตัดสินใจการไปพบแพทย์{" "}
                        
                      </p>
                      </a>
                    </div>{" "}
                    <div className="job-container">
                      <a style={{textDecoration: "none"}} href="/Hardware">
                      <img
                        className="img6"
                        src= {Logo2}
                      />
                      <h2  className="my-2">ตรวจคลื่นไฟฟ้าหัวใจด้วยอุปกรณ์ EIPCA</h2>
                      <p>
                      อุปกรณ์ประเมินความเสี่ยงการเกิดโรค Brugada
                      อุปกรณ์นี้คืออุปกรณ์ตรวจวัดคลื่นไฟฟ้าหัวใจหรือจะเรียกอีกอย่างว่าเครื่อง
                      ECG ขนาดพกพา
                        
                      </p>
                      </a>
                    </div>{" "}
                    
                  </div>{" "}
                  {/* end of col */}
                </div>{" "}
                {/* end of row */}
              </div>{" "}
              {/* end of container */}
            </div>{" "}
            {/* end of basic-3 */}
          </div>

          </center>
        
        
        
        
      </div>
      
      
      
      );
        

    } else {
      // Show current question
      const question = questions[currentQuestion];
      return (
        
        
        <div style={{marginTop: "20px",padding: "30px", borderRadius: "10px"}} className="bg-gray">
            <div>
             {SkipBtn}
            </div>
          <h2>{question.page}</h2>
          <img style={{marginBottom: "3%" , borderRadius: "10px" , width: "30%"}} src = {question.img}/>
          <h2>{question.question}</h2>
          <button className="mx-3 btn-solid-lg" onClick={() => handleAnswer("yes")}>ใช่</button>
          <button className="btn-solid-lg" onClick={() => handleAnswer("no")}>ไม่ใช่</button>
        </div>
        
        
        
      );
    }
  };
  



  
  const Signout = () => {
    app.auth().signOut();
    history.push("/");
    window.location.reload(true)
  };

  

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
        <div className="col-xl-10 offset-xl-1 my-3">
          <h1>แบบประเมินความเสี่ยงการเกิดโรคหัวใจ  </h1>
          <h4>{Text}</h4>
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </header>{" "}
    <div>
      
    </div>
    <div>{renderQuiz()}</div>
    
    
</center>

<br/>
<br/>
<br/>
<br/>
      
    </>
  );
};

export default withRouter(Forms);


