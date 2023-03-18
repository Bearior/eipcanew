import React from "react";
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
import ECG from "../images/ecg.jpg"


const Hardware = ({history}) => {

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


  
  {/* Header */}
  <header className="ex-header bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <h1>อุปกรณ์</h1>
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
              <strong>อุปกรณ์ประเมินความเสี่ยงการเกิดโรค Brugada: </strong>
              อุปกรณ์นี้คืออุปกรณ์ตรวจวัดคลื่นไฟฟ้าหัวใจหรือจะเรียกอีกอย่างว่าเครื่อง
              ECG ขนาดพกพา
              โดยอุปกรณ์ของเราขณะนี้สามารถตรวจได้โดยใช้การแปะแผ่นรับไฟฟ้าบริเวณ
              ลำตัว 3 จุด
              เพื่อที่อุปกรณ์จะรับค่ากระแสไฟฟ้าแล้วแปลงเป็นกราฟคลื่นไฟฟ้าหัวใจและนำไปประมวลผลด้วยปัญญาประดิษฐ์
              และแสดงผลเป็นความเสี่ยงของคุณต่อการเป็นโรค Brugada
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
          <h2 className="mb-3">อุปกรณ์</h2>
          <div className="header8" /> <div className="header9" />
          <br />
          <br />
          <img src={ECG} />
          <p className="mb-4">
            สัญญาณไฟฟ้าชีวภาพแบบบูรณาการสำหรับส่งสัญญาณไฟฟ้าหัวใจ.
            การตรวจสอบอัตราการเต้นของหัวใจสำหรับการตรวจสอบอัตราการเต้นของหัวใจ
          </p>
          <ul className="list-unstyled li-space-lg mb-5">
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">
                โมดูลปรับสภาพสัญญาณในตัวสำหรับ ECG
                และการใช้งานการวัดทางไฟฟ้าชีวภาพอื่น ๆ
                อุปกรณ์นี้ออกแบบมาเพื่อสกัดขยายและกรองสัญญาณไฟฟ้าชีวภาพที่อ่อนแอพร้อมเสียงรบกวนที่เกิดจากการเคลื่อนไหวหรือตำแหน่งอิเล็กโทรดระยะไกล
                การออกแบบนี้ช่วยให้สามารถใช้พลังงานต่ำเป็นพิเศษตัวแปลงอนาล็อกดิจิตอล
                (ADC)
                หรือไมโครคอนโทรลเลอร์ในตัวเพื่อจับสัญญาณเอาต์พุตได้อย่างง่ายดาย
              </div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">
                ใช้ตัวกรอง Qualcomm แบบจุดสองขั้วเพื่อกำจัดการเคลื่อนไหว
                Pseudo-Imagery และอิเล็กโทรดศักยภาพกึ่งแบตเตอรี่
                ตัวกรองนี้ควบคู่กับโครงสร้างเครื่องขยายเสียงอย่างแน่นหนากับโครงสร้างเครื่องขยายเสียงสำหรับการกรองแบบกำไรสูงและความถี่สูงในขั้นตอนเดียวช่วยประหยัดพื้นที่และต้นทุน
              </div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">
                Ad8232 ใช้เครื่องขยายเสียงที่ปราศจากข้อ จำกัด
                เพื่อสร้างตัวกรองความถี่ต่ำสามเสาที่ช่วยขจัดเสียงรบกวนเพิ่มเติม
                ผู้ใช้สามารถตอบสนองความต้องการของการใช้งานประเภทต่างๆได้โดยการเลือกความถี่ในการตัดของตัวกรองทั้งหมด
              </div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">
                เพื่อปรับปรุงประสิทธิภาพการปราบปราม Co-Mode
                ของความถี่ของสายระบบและการรบกวนที่ไม่พึงประสงค์อื่น ๆ AD8232
                มีแอมพลิฟายเออร์ในตัวสำหรับแอปพลิเคชันเชื่อมโยงไดรฟ์อินเช่นไดรฟ์ด้านขวา
                (RLD)
              </div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">
                Ad8232
                ประกอบด้วยฟังก์ชันการกู้คืนอย่างรวดเร็วที่สามารถลดปรากฏการณ์หางยาวดั้งเดิมของตัวกรอง
                Qualcomm ที่สร้างขึ้นนานขึ้น
                หากการกลายพันธุ์สัญญาณเกิดขึ้นกับแรงดันไฟฟ้าของรางของเครื่องขยายเสียง
                (เช่นการถอดลิงค์ตะกั่ว) AD8232
                จะปรับเป็นสถานะปิดตัวกรองที่สูงขึ้นโดยอัตโนมัติ
                ฟังก์ชันนี้ช่วยให้ AD8232
                บรรลุการกู้คืนอย่างรวดเร็วดังนั้นจึงเป็นไปได้ที่จะได้รับการวัดที่มีประสิทธิภาพในไม่ช้าหลังจากการเชื่อมต่อที่เป็นสื่อกระแสไฟฟ้าเชื่อมต่อกับอิเล็กโทรดของวัตถุที่วัดได้
              </div>
            </li>
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

  <header className="p-5 bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <h1>วิธีการใช้ EIPCA</h1>
          
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
              หลายๆ คนเคยมีอาการวิงเวียนศีรษะ หน้ามืดตาลาย ใจสั่น เจ็บหน้าอก
              อย่าคิดว่าเป็นเรื่องปกติ หรือมองข้ามไป เพราะอาจเป็นสัญญาณเตือนของ
              “ภาวะหัวใจเต้นผิดจังหวะ” โดยเฉพาะกลุ่มเสี่ยงที่มีพฤติกรรมสูบบุหรี่
              ดื่มแอลกอฮอล์ ชา กาแฟ และเครียด
              อาจส่งผลให้มีความเสี่ยงต่อภาวะหัวใจล้มเหลวหรือหลอดเลือดสมองอุดตันได้
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
          <h2 className="mb-3">วิธีใช้ EIPCA</h2>
          <div className="header8" /> <div className="header9" />
          <br/>

          <p className="mb-5">
            EIPCA อุปกรณ์ตรวจวัดคลื่นไฟฟ้าหัวใจ
            เพื่อให้ได้ผลการวินิจฉัยที่แม่นยำและถูกต้องที่สุดโปรดศึกษาและทำตามคำแนะนำอย่างเคร่งครัด
            โดยอุปกรณ์ที่เราให้ไปจะมีองค์ประกอบอยู่ 3 ส่วนคือ 1. บอร์ดประมวลผล
            2. node ECG 3. สายสัญญาณ
            และเพื่อให้การตรวจเพื่อคัดกรองและประเมินความเสี่ยงการเกิดโรค Brugada
            อย่างถูกต้องและแม่นยำโปรดทำตามคำแนะนำอย่างเคร่งครัด
          </p>
          <img
            className="img-fluid mb-5"
            src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.15752-9/310858707_1126380597992939_4844533496102810291_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGPHw1Ho9-mICvfBaoZCg0Fg_EHijFo2xuD8QeKMWjbGxP-UiBnI0H8azaGSRfvJiCqWAqAQPkK43YGxapoJjXW&_nc_ohc=TywLk-89moAAX-daNhU&_nc_oc=AQlsff7zBOSY8kGYtRf9hvkEWzILm90fl9YmxCK3KDwko645TJZSSUcPQs2o2sEEhLs&_nc_ht=scontent.fbkk13-2.fna&oh=03_AdTSrkcpT6s1kslQ3_JGZBRDoEkHIGXorCIko7UNngFqPw&oe=642E3E0D"
            alt="alternative"
          />
          
        
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of ex-basic-1 */}
  {/* end of basic */}
          



  <center>
  <a  className="btn-solid-lg page-scroll " href="/HardwareManual">
              เริ่มการตรวจด้วยอุปกรณ์
  </a>
  </center>
  <br/>
  <br/>
  <br/>

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

export default withRouter(Hardware);