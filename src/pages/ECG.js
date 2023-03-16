import React from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../Auth.js";
import app from "../base";
import "../App.css";
import "../css/bootstrap.css"
import "../css/styles.css"
import Logo from "../images/logo text.png" 
import Logo2 from "../images/logo pic.png" 
import ECG from "../images/ecg.jpg"
import ECGpic from "../images/[removal.ai]_tmp-6406de7abbf27.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const ECGs = ({history}) => {

    const Signout = () => {
        app.auth().signOut();
        window.location.reload(true)
        history.push('/login')
      };
  


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
            <Nav.Link class="nav-link" style={{color: "red"}} href="#" onClick={Signout} >Sign out </Nav.Link>
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
  
  <header className="ex-header bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <h1>คลื่นไฟฟ้าหัวใจ Electrocardiogram (ECG/EKG)</h1>
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </header>{" "}
  {/* end of ex-header */}
  {/* end of header */}
  {/* Basic */}
  <div className="ex-basic-1 pt-5 pb-4">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <div className="text-box mt-5">
            <p>
              <strong>คลื่นไฟฟ้าหัวใจ Electrocardiogram (ECG/EKG):</strong>{" "}
              Electrocardiogram หรือที่เราพูดกันสั้น ๆ หรือได้ยินคุ้นหูกันว่า
              ECG or EKG เป็นวิธีการตรวจทางหัวใจที่มีต้นกำเนิดมายาวนานที่สุด
              สามารถตรวจได้ง่ายที่สุดและรวดเร็วที่สุด ด้วยขั้นตอนที่ไม่ยุ่งยาก
              และสามารถให้คำตอบเบื้องต้นรวมถึงให้การวินิจฉัยแก่ผู้มารับการตรวจ
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
  {/* Basic */}
  <div className="ex-basic-1 pt-4">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <h2 className="mb-3">ECG บอกหรือสื่ออะไรเกี่ยวกับหัวใจของเรา?</h2>
          <div className="header8" /> <div className="header9" />
          <br />
          <br />
          <p className="mb-4">
            ECG บอกหรือสื่ออะไรเกี่ยวกับหัวใจของเรา? ECG
            สามารถสื่อถึงการนำไฟฟ้าภายในกล้ามเนื้อหัวใจของเรา,
            อัตราการเต้นของหัวใจ,
            จังหวะการเต้นของหัวใจเป็นไปอย่างสม่ำเสมอหรือไม่
            โดยที่ในแต่ละส่วนของกราฟไฟฟ้าหัวใจจะช่วยบอกถึงความสัมพันธ์ในการทำงานของหัวใจห้องบนและห้องล่าง
            อีกทั้งยังสามารถช่วยในการวินิจฉัยโรคต่าง ๆ ได้อีกมากมาย อาทิเช่น
          </p>
          <ul className="list-unstyled li-space-lg mb-5">
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">
                โรคกล้ามเนื้อหัวใจตายเฉียบพลัน (Acute Myocardial Infarction)
              </div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">
                โรคกล้ามเนื้อหัวใจห้องล่างซ้ายหนาตัวผิดปกติจากสาเหตุต่าง ๆ (Left
                Ventricular Hypertrophy)
              </div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">
                โรคของกล้ามเนื้อหัวใจชนิดต่าง ๆ (Cardiomyopathy)
              </div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">
                โรคเยื่อหุ้มหัวใจอักเสบ (Pericarditis)
              </div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">
                โรคหัวใจเต้นผิดจังหวะทั้งแบบเต้นช้าผิดจังหวะ (Bradyarrhythmias)
                หรือแบบเต้นเร็วผิดจังหวะ (Tachyarrhythmias)
              </div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">
                โรคของเกลือแร่ที่ผิดปกติบางชนิด เช่น
                ภาวะโพแทสเซียมในเลือดสูงหรือต่ำ ภาวะแคลเซียมในเลือดสูงหรือต่ำ
              </div>
            </li>
            <p className="mb-4">
              นอกจากนี้ในเครื่องมือสำหรับการตรวจหัวใจประเภทอื่นล้วนมี ECG
              เข้าไปเกี่ยวเนื่องด้วยเสมอ เช่น การเดินสายพาน (Exercise Treadmill
              Stress Test), การตรวจบันทึกคลื่นไฟฟ้าหัวใจ 24 ชั่วโมง (24 Hours
              Holter Monitoring), Cardiac CT Scan (เอกซเรย์คอมพิวเตอร์), Cardiac
              MRI (เอกซเรย์คลื่นแม่เหล็กไฟฟ้า), การทำหัตถการฉีดสีสวนหัวใจ
              (Cardiac Catheterization) และ Tilt Table Test
            </p>
          </ul>
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of ex-basic-1 */}
  {/* end of basic */}
  <header className="ex-header bg-grays">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <h1>ขั้นตอนวิธีการตรวจ ECG เป็นอย่างไรและใช้เวลาในการทำนานแค่ไหน</h1>
          <p>
            ขั้นตอนการตรวจเริ่มต้นจากการให้ผู้รับการตรวจนอนลงบนเตียงที่ได้จัดเตรียมไว้ในห้องตรวจที่ปิดอย่างมิดชิด
            จากนั้นเจ้าหน้าที่ จะทำการป้ายเจลปริมาณเล็กน้อยลงบนบริเวณหน้าอก
            ข้อมือและข้อเท้าทั้ง 2 ข้าง หลังจากนั้นจะทำการติดแผ่น Electrode
            ที่บริเวณหน้าอก 6 จุด และที่ข้อมือและข้อเท้าทั้ง 2 ข้างอย่างละจุด
            หลังจากนั้นเครื่องจะทำการประมวลผลและแสดงผลออกมาเป็นกราฟไฟฟ้าหัวใจเพื่อให้แพทย์ได้อ่านผล
            โดยใช้เวลาในการตรวจทั้งสิ้นประมาณไม่เกิน 5 นาที
          </p>
          <img src={ECGpic} />
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </header>{" "}
  {/* end of ex-header */}
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
                093-2789556 , 081-2895915 
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
  
  {/* end of copyright */}
  {/* end of copyright */}
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

export default withRouter(ECGs);