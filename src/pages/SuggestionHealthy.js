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

const SuggestionHospital = ({history}) => {
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
          <p class="fs-1" style={{color: "Green", marginTop: "40px"}}>ปลอดภัย</p>
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
  <img
            src="https://media0.giphy.com/media/jGR23trwtcmXvK9AMy/giphy.gif?cid=ecf05e47bkemwemycxmcgxxhjtjpj9pli6q42lxo6lk74t17&rid=giphy.gif&ct=g"
            width="10%"
          />
    </center>
 
  {/* Basic */}
  <div className="ex-basic-1 pt-4">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <h2 className="mb-3">คำแนะนำ</h2>
          <div className="header8" /> <div className="header9" />
          <br />
          <br />
          <p className="mb-4">
          หัวใจและหลอดเลือดทำงานสัมพันธ์กันตลอดเวลาเพื่อนำเอาเลือดที่มีสารอาหาร และที่สำคัญคืออ๊อกซิเจนไปเลี้ยงส่วนต่างๆ ทั่วร่างกาย รวมทั้งตัวหัวใจเองก็ต้องการสารอาหารและอ๊อกซิเจนมาเลี้ยงเหมือนกัน 
          หลังจากนำสารอาหารและอ๊อกซิเจนไปเลี้ยงแล้ว ก็จะรับเอาของเสียและคาร์บอนไดออกไซด์จากส่วนนั้นกลับมาสู่ปอด เพื่อขับถ่ายคาร์บอนไดออกไซด์ออกมาทางการหายใจ และรับอ๊อกซิเจนกลับเข้าไปในเลือดใหม่ เพื่อส่งต่อให้หัวใจปั๊มออกไปเลี้ยงส่วนต่างๆ 
          อีกครั้ง เหตุการณ์เหล่านี้เกิดขึ้นตลอดเวลา ไม่ว่าคนเราจะหลับหรือตื่น ไม่มีเวลาพักเลยแม้แต่น้อย ระบบนี้ในร่างกายคนเราเรียกว่า ระบบหัวใจและการไหลเวียนของโลหิต ซึ่งจะสัมพันธ์กันตลอดเวลา
          </p>
          <p className="mb-4">
          ความผิดปกติที่มีผลต่อระบบนี้ ได้แก่ ความดันโลหิตสูง อาจทำให้ผนังหลอดเลือดอ่อนแอลง ทำให้เกิดการแตกของหลอดเลือดได้ ซึ่งหากเกิดแตกในบริเวณสมอง ก็จะมีผลทำให้เลือดที่ออกไปกดทับการทำงานของสมอง 
          ทำให้เป็นอัมพาตหรือหมดสติ หรือเสียชีวิตได้ หรือการที่มีไขมันไปเกาะอยู่ที่ผนังของหลอดเลือดแดง จนอาจเกิดการอุดตัน ซึ่งถ้าอุดตันที่เส้นเลือดแดงที่เลี้ยงหัวใจ ก็ทำให้เกิดโรคหัวใจขาดเลือดได้ ถ้าอุดตันที่เส้นเลือดแดงที่ไปเลี้ยงสมองก็จะทำให้เกิดอัมพาตได้
          </p>
          <br />
          <center>
          <img
            src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/335459536_967069514277609_3965795772818401445_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH-KEoufcHOnaxrnfE1uD5UycYYk3OpM0TJxhiTc6kzRHxVohzzGoSWRXCixnjNHSrixIZ205aIsRjGujw3vVGB&_nc_ohc=hxBrVeRibJUAX_6gddT&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdQf1-PqxeTcKGCk8v8C94CAIAre1Xi7tEpCoNfSff9edQ&oe=64334FC6"
            width= "40%"
          />
          </center>
          <br />
          <h2 className="mb-3">อาหารป้องกันโรคหัวใจ</h2>
          <div className="header8" /> <div className="header9" />
          <br/>
          <br/>
          <p className="mb-4">
          คำถามยอดฮิตอีกเช่นกันว่า อาหารอะไรบำรุงหัวใจ คำตอบคือ ไม่มีอาหารชนิดใดชนิดหนึ่งที่บำรุงหัวใจโดยตรง การหลีกเลี่ยงอาหารที่มีรสเค็มจัด หวานจัด มันจัด ก็เท่ากับช่วยบำรุงหัวใจแล้ว เนื่องจากอาหารเค็ม ทำให้เกิดความดันโลหิตสูง อาหารหวาน ทำให้อ้วน 
          ทำให้เกิดเบาหวานตามมา อาหารไขมันสูง ก็ทำให้อ้วนและมีผลทำให้ระดับไขมันในเลือดผิดปกติ ทั้งความดันโลหิตสูง เบาหวาน ไขมันในในเลือดผิดปกติ ล้วนชักนำไปสู่โรคหลอดเลือดหัวใจ การศึกษาในต่างประเทศพบว่า การรับประทานอาหารแบบเมดิเตอร์เรเนียน 
          ช่วยลดการเกิดโรคหัวใจลง ซึ่งก็คือ อาหารที่เน้นผัก ผลไม้ ถั่วเปลือกแข็ง เน้นการบริโภคปลา สัตว์ปีก แทนเนื้อแดง เลือกใช้น้ำมันพืชชนิดที่เป็น monounsaturated fat หลีกเลี่ยง trans-fat สำหรับบ้านเราสามารถดัดแปลงเป็นการรับประทานข้าวไม่ขัดสี เช่น 
          ข้าวกล้อง ผัก ผลไม้ตามฤดูกาล หากเป็นสลัดก็ใช้น้ำมันมะกอก อาหารผัดทอด ใช้น้ำมันข้าวโพด น้ำมันรำข้าว น้ำมันถั่วเหลือง เลี่ยงน้ำมันหมู น้ำมันปาล์ม หลีกเลี่ยงอาหารติดมัน เช่น หนังเป็ด หนังไก่ หมูสามชั้น เป็นต้น ปัจจุบันเชื่อว่า การรับประทานอาหารที่มีไขมันคอเลสเตอรอลสูง 
          เช่น ไข่ อาหารทะเลบางชนิด ไม่ได้ทำให้ระดับ LDL ในเลือดสูงมากนัก แต่ การรับประทาน trans-fat และ อาหารติดมัน (saturated fat) มีผลทำให้ระดับ LDL ในเลือดสูงขึ้น
          </p>
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
                EIPCA Team 
              </p>
              <p>
                <i className="fa fa-phone-alt mr-2" />
                093-2789556 , 081-2895915 , 065-3595514
              </p>
              <p>
                <i className="fa fa-envelope mr-2" />
                EIPCA@gmail.com
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
                <strong>EIPCA@gmail.com</strong>
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

export default withRouter(SuggestionHospital);