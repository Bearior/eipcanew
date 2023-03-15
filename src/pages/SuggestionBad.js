import React, { useState , useContext } from "react";
import app from "../base";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../Auth";
import NavLogo from "../Asset/NavLogo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../images/logo text.png" 
 import Logo2 from "../images/logo pic.png" 

const SuggestionBad = ({history}) => {
  const { currentUser } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [base64, setBase64] = useState(null);

  
  const handleChange = (e) => {
    const file = e.target.files[0];
    const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validImageTypes.includes(file.type)) {
      console.log("Invalid file type. Please select an image file.");
      return;
    }
    setFile(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
        const base64 = fileReader.result;
        setBase64(base64);
        console.log(base64)
    };
};

const handleUpload = async () => {
  if (!file) {
      console.log("No file selected. Please select a file before uploading.");
      return;
  }
  const db = app.firestore();
  const fileRef = db.collection("EIPCA").doc();
  try {
      await fileRef.set({ 
        userid: currentUser.uid,
        file: base64,
        status: "NotPredict",
        Result: "null",
        Time: "null",
        History: "NotHistoried"
      });
      alert("File uploaded successfully!");
      history.push("/history");
      window.location.reload(true)
  } catch (error) {
      console.log(error);
  }
};

  const Backhome = () => {
    history.push("/");
    window.location.reload(true)
  }

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
        <div className="col-xl-10 offset-xl-1">
        <h1 >การตรวจวัดค่า กราฟคลื่นไฟฟ้าหัวใจ</h1>
          <h2 className="mt-4">คุณ {currentUser.displayName} </h2>
          <p class="fs-2" style={{marginTop: "4%"}}>ผลการตรวจคลื่นไฟฟ้าหัวใจของคุณอยู่ในเกณฑ์</p>
          <p class="fs-1" style={{color: "Red", marginTop: "40px"}}>ไม่ปลอดภัย</p>
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
 
  {/* Basic */}

 
 
    
  <div className="ex-basic-1 pt-4">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <h2 className="mb-3" style={{color: "darkgreen"}}>ความเสี่ยงน้อย</h2>
          <div className="header8" /> <div className="header9" />
          <br />
          <br />
          <p className="mb-4">
          ควมเสี่ยงน้อย คุณควรเริ่มออกกำลังกายเพื่อให้หัวใจสูบฉีดเลือดไปเลี่ยงส่วนต่างๆของร่างกายได้ดีขึ้น การออกกำลังกายสำหรับผู้ป่วยโรคหัวใจมีความสำคัญ เพราะช่วยให้หัวใจมีสมรรถภาพที่ดี กล้ามเนื้อหัวใจสูบฉีดเลือดไปเลี้ยงส่วนต่าง ๆ ได้ดีขึ้น 
          เพิ่มการไหลเวียนของเลือดที่ไปเลี้ยงหัวใจ ทั้งยังช่วยกระตุ้นการทำงานของเซลล์เยื่อบุผนังหลอดเลือด 
          ลดการสะสมของตะกรันที่หลอดเลือด ช่วยลดอาการของโรคหลอดเลือดหัวใจ ส่งผลให้ทำกิจกรรมต่าง ๆ ในชีวิตประจำวันได้ดีและมีสุขภาพใจที่แข็งแรง         </p>
           <p className="mb-4">

          สำหรับคนที่เริ่มมีอาการเบื้องต้น สิ่งสำคัญในการออกกำลังกายคือ การรู้จักประเมินอาการของตัวเอง ทั้งการวัดชีพจร ความดันโลหิต ระดับออกซิเจนในร่างกาย (ถ้ามี) ระดับความเหนื่อยของร่างกาย รวมถึงสังเกตอาการที่บ่งบอกถึงความผิดปกติ 
          เช่น เจ็บหน้าอก มึน วิงเวียนศีรษะ หน้ามืด เพราะอาจเป็นสัญญาณเตือนว่า คุณออกกำลังกายหนักเกินไป ควรหยุดและปรึกษาแพทย์ทันที
          </p>

          <p style={{marginBottom: '4px'}}>
            <strong>ที่มา:</strong>โรงพยาบาลหัวใจกรุงเทพ <a style={{textDecoration: "none"}} href="https://www.bangkokhearthospital.com/content/regular-exercise-is-important-when-you-have-heart-disease"> -ข่าวสารสุขภาพ-โรงพยาบาลหัวใจกรุงเทพ-</a>
          </p>
          <br />
          <center>
          <img style={{marginTop: '4px'}}
            src="https://img.freepik.com/premium-vector/cute-funny-heart-organ-make-gym-with-dumbbells-vector-flat-line-cartoon-kawaii-character-illustration-icon-isolated-white-background-heart-organ-workout-cartoon-character-concept_92289-2919.jpg?w=826"
            width= "30%"
          />
          </center>
          <br />
          <h2 className="mb-3" style={{color: "darkorange"}}>ความเสี่ยงปานกลาง</h2>
          <div className="header8" /> <div className="header9" />
          <br/>
          <br/>
          <p className="mb-4">
          ควมเสี่ยงปานกลาง คุณควรออกกำลังกายอย่างสม่ำเสมอ ลดการสูบบุหรี่เนื่องจาก การสูบบุหรี่ก่อให้เกิดมะเร็งปอด หลอดลมอักเสบ และถุงลมโป่งพอง ส่งผลให้คนที่สูบบุหรี่มีโอกาสเสี่ยงต่อ
          หัวใจวายมากกว่าสองเท่า และมีโอกาสเสียชีวิตจากโรคหัวใจอย่ากระทันหันคิดเป็นสี่เท่าของคนที่ไม่สูบบุหรี่ ควบคุมอาหารลดอาหารที่มีไขมัน และ โคเลสเตอรอสูง เพราะ ยิ่งมีระดับโคเลสโตรอลในเลือดสูงมากเท่าไหร่ 
          ก็จะยิ่งเป็นการเพิ่มโอกาสการพัฒนาและเติมโตของโรคมากขึ้นเท่านั้น เพื่อรักษาระดับการรักษาระดับโคเลสเตอรอลในเลือดให้เป็นปกติ จึงจำเป็นที่จะต้องวางแผนการรับประทานอาหารโดยเลือกแต่อาหารที่มีไขมันและโคเลสเตอรอลต่ำเท่านั้น</p>
           <p className="mb-4">
          และหากประวัติในครอบครัว หากมีประวัติของพ่อ แม่ ปู่ย่าตายาย หรือพี่น้องเป็นโรคหัวใจ ท่านก็มีโอกาสมากที่จะหัวใจวาย รูปแบบการใช้ชีวิตในแต่ละวันก็อาจจัดอยู่ในปัจจัยนี้เช่นเดียวกับเรื่องพันธุกรรม
          อายุ 55 ปีขึ้นไป โรคหลอดเลือดหัวใจมีความเกี่ยวเนื่องกับอายุที่เพิ่มขึ้น ไม่ว่าจะเป็นผู้หญิงหรือผู้ชาย ยิ่งมีอายุมากขึ้นเท่าไรก็มีโอกาสเกิดไขมันในผนังหลอดเลือดมากขึ้นเท่านั้น
          เพศ จากงานวิจัยแสดงให้เห็นว่า โรคหลอดเลือดหัวใจพบในผู้ชายมากกว่าผู้หญิง ซึ่งอาจจะมีสาเหตุมาจากฮอร์โมนเพศหญิงตัวหนึ่งที่ช่วยควบคุมปริมาณไขมันให้อยู่ในระดับพอดี ซึ่งผู้หญิงในวัยหลังหมดประจำเดือนก็มีความเสี่ยงต่อโรคหัวใจเพิ่มมากขึ้นด้วย
          </p>
          <p className="mb-4">
            <strong>ดังนั้นสำหรับระดับความเสสี่ยงปานกลางคุณควรเริ่มปรึกษาแพทย์ หรือ ลองไปตรวจคลื่นไฟฟ้าหัวใจอย่างละเอียดที่โรงพยาบาล เพื่อรับการวินิจฉัยโรคอย่างละเอียดจากแพทย์ผู้เชี่ยวชาญ</strong>
          </p>

          <p style={{marginBottom: '4px'}}>
            <strong>ที่มา:</strong>โรงพยาบาลบำรุงราษฎร์ในกรุงเทพ <a style={{textDecoration: "none"}} href="https://www.bumrungrad.com/th/conditions/heart-diseases?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh188O4koyv3MUfrhbTkgHa_BwesRYwmt01LthiDjOupHTz4Gu9u-28aAp7UEALw_wcB"> -โรงพยาบาลบำรุงราษฎร์ในกรุงเทพ-</a>
          </p>
          <center>
          <img style={{marginTop: '4px'}}
            src="https://i.pinimg.com/564x/c7/c9/34/c7c934464b3b5fa6a5e7d42cba919d94.jpg"
            width= "30%"
          />
          </center>
          <br />
          <h2 className="mb-3" style={{color: "red"}}>ความเสี่ยงสูง</h2>
          <div className="header8" /> <div className="header9" />
          <br/>
          <br/>
          <p className="mb-4">
          ควมเสี่ยงสูง คุณมีโอกาสที่จะเกิดโรค Brugada Syndrom มากที่สุด ดังนั้นคุณควรไปพบแพทย์โดยเร็วที่สุดเพื่อเข้ารับการตรวจหัวใจอย่างละเอียดและรับการวินิจฉัยและการรักษาจากแพทย์ผู้เชี่ยวชาญ
          และควรสำรวจตัวเองอย่างสม่ำเสมอ หากมีอาการที่รุนแรงหรือไม่เคยเป็นมาก่อนควรไปพบแพทย์โดยเร็วที่สุด หรือติดต่อที่สายด่วน 1669</p>
           <p className="mb-4">
            คุณสามารถค้นหาโรงพยาบาลใกล้คุณ หรือโรงพยาบาลที่ได้รับรองเป็นนศูนย์หัวใจ ในจังหวัดของคุณได้ โดยกดปุ่ม "ค้นหาโรงพยาบาล" ด้านล่าง
          </p>
          <p style={{marginBottom: '4px'}}>
            <strong>ที่มา:</strong>โรงพยาบาลหัวใจกรุงเทพ <a style={{textDecoration: "none"}} href="https://www.bangkokhearthospital.com/content/regular-exercise-is-important-when-you-have-heart-disease"> -ข่าวสารสุขภาพ-โรงพยาบาลหัวใจกรุงเทพ-</a>
          </p>
          <center class="my-4">
          <a  className="btn-solid-lgr page-scroll " href="/SuggestionHospital">
          ค้นหาโรงพยาบาล
          </a>
          </center>
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of ex-basic-1 */}
  {/* end of basic */}
  <div className="ex-basic-1 pt-5 pb-4">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <div className="text-box mt-5">
            <p>
              <strong>"การเสียชีวิตด้วยโรคหัวใจมีทั้งแบบที่รู้ว่าเป็นโรคหัวใจ และบางคนที่ไม่รู้ว่าตัวเองเป็นโรคหัวใจ เพราะไม่มีอาการ เพราะฉะนั้นสิ่งสำคัญต้องคอยสังเกตความผิดปกติของร่างกายตัวเองให้ดี และอย่าชะล่าใจ
              ส่วนคนที่ยังมีอาการไม่มาก หรืออาจจะไม่มีอาการ สิ่งที่ควรต้องระวังมากที่สุดเพื่อควบคุมปัจจัยเสี่ยง นั่นคือ ดูแลเบาหวาน ความดัน ไขมันให้ดีที่สุด ควบคุมน้ำหนัก และออกกำลังกายให้เหมาะสม จะสามารถช่วยป้องกันการเกิดปัญหาโรคหัวใจรุนแรงในอนาคตได้"
              </strong><br/><br/>
              นพ.วัฒนา บุญสม ผู้อำนวยการศูนย์หัวใจ 24 ชั่วโมง รพ.วิชัยเวชฯ​หนองแขม
            </p>
          </div>{" "}
          {/* end of text-box */}
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of ex-basic-1 */}
  {/* end of basic */}
  {/* Footer */}
  <div className="footer bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="footer-col first">
            <h6>เกี่ยวกับ EIPCA</h6>
            <p className="p-small">
              EIPCA ย่อมาจาก Electrocardiogram Interpretation Pattern for
              Symptom Predictions of Arrythmia. หรือ
              โปรแกรมเพื่อช่วยคัดกรองภาวะหัวใจวายเฉียบพลัน
              <br />
              (โรคใหลตาย)
              อันเนื่องมาจากภาวะหัวใจเต้นผิดจังหวะจากกราฟคลื่นไฟฟ้าหัวใจด้วยปัญญาประดิษฐ์
            </p>
          </div>{" "}
          {/* end of footer-col */}
          <div className="footer-col second">
            <h6>ติดต่อเรา</h6>
            <ul className="list-unstyled li-space-lg p-small">
              <p>
                <i className="fa fa-map-marker-alt mr-2" />
                The Prince Royal Collage, Thailand
              </p>
              <p>
                <i className="fa fa-phone-alt mr-2" />
                0-5324-2038, 0-5324-2550
              </p>
              <p>
                <i className="fa fa-envelope mr-2" />
                prccontact@prc.ac.th
              </p>
            </ul>
          </div>{" "}
          {/* end of footer-col */}
          <div className="footer-col third">
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-facebook-f fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-twitter fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-pinterest-p fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-instagram fa-stack-1x" />
              </a>
            </span>
            <p className="p-small">
              We would love to hear from you{" "}
              <a href="">
                <strong>prccontact@prc.ca.th</strong>
              </a>
            </p>
          </div>{" "}
          {/* end of footer-col */}
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of footer */}
  {/* end of footer */}
  {/* Scripts */}
  {/* jQuery for Bootstrap's JavaScript plugins */}
  {/* Bootstrap framework */}
  {/* jQuery Easing for smooth scrolling between anchors */}
  {/* Swiper for image and text sliders */}
  {/* Magnific Popup for lightboxes */}
  {/* Morphtext rotating text in the header */}
  {/* Isotope for filter */}
  {/* Custom scripts */}
      
    </>
  );
};

export default withRouter(SuggestionBad);