import React from "react";
import { useContext,} from "react";
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

const Use = ({history}) => {

const { currentUser } = useContext(AuthContext);

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
  {/* Cards */}
  <div className="ex-cards-1 pt-3 pb-3">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* Card */}
          <div className="card">
            <ul className="list-unstyled">
              <li className="media">
                <span className="fa-stack">
                  <span className="fas fa-circle fa-stack-2x" />
                  <span className="fa-stack-1x">1</span>
                </span>
                <div className="media-body">
                  <h5>ก่อนประมวลผล</h5>
                  <p>
                    นั่งอยู่ในท่าสะบาย และอยู่ในสภาวะพัก
                    (สภาวะที่ไม่ใช้หลังออกกำลังกาย
                    หรือกิจกรรมที่ทำให้หัวใจเต้นช้าหรือเร็วกว่าปกติ)
                  </p>
                </div>
              </li>
            </ul>
          </div>{" "}
          {/* end of card */}
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <ul className="list-unstyled">
              <li className="media">
                <span className="fa-stack">
                  <span className="fas fa-circle fa-stack-2x" />
                  <span className="fa-stack-1x">2</span>
                </span>
                <div className="media-body">
                  <h5>ประมวลผล</h5>
                  <p>
                    ติด node ECG ตามรูปตัวอย่างให้เรียบร้อยหลังจากนั้น กด"เริ่ม"
                    เพื่อเริ่มประมวลผลโดยระหว่างที่อุปกรณ์กำลังประมวล
                    ผู้รับการตรวจจำเป็นต้องอยู่นิ่งจนปว่าอุปกรณืจะประมวลผลเสร็จ
                  </p>
                </div>
              </li>
            </ul>
          </div>{" "}
          {/* end of card */}
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <ul className="list-unstyled">
              <li className="media">
                <span className="fa-stack">
                  <span className="fas fa-circle fa-stack-2x" />
                  <span className="fa-stack-1x">3</span>
                </span>
                <div className="media-body">
                  <h5>หลังประมวลผล</h5>
                  <p>
                    เมื่ออุปกรณ์ประมวลผลเสร็จสิ้น
                    ผลจากการประมวลผลจะแสดงทางหน้าจอและแจ้งผู้รับการตรวจถึงความเสี่ยงต่อการเป็นโรค
                    Brugaada ซึ่งมีอยู่ 3 ระดับ คือ
                    <br />
                    <span style={{ color: "rgb(57, 200, 119)" }}>
                      ไม่มีความเสี่ยง
                    </span>{" "}
                    <span style={{ color: "rgb(198, 232, 10)" }}>
                      มีความเสี่ยงปานกลาง
                    </span>
                    <br />
                    และ{" "}
                    <span style={{ color: "rgb(200, 57, 57)" }}>
                      มีความเสี่ยงสูง
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>{" "}
          {/* end of card */}
          {/* end of card */}
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of ex-cards-1 */}
  {/* end of cards */}
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
  {/* Copyright */}
  <div className="copyright bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <p className="p-small">
            Copyright © <a href="https://inovatik.com">Template by Inovatik</a>
          </p>
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* enf of row */}
    </div>{" "}
    {/* end of container */}
  </div>{" "}
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

export default withRouter(Use);