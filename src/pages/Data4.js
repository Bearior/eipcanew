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

const Data4 = ({history}) => {

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

  {/* Header */}
  <header className="ex-header bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <h1>อาหารเพื่อการดูแลหัวใจ: </h1>
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
              <strong>ในครอบครัวมีประวัติเป็นโรคหัวใจขาดเลือด</strong> 
              พบว่าการมีประวัติผู้ที่อยู่ในครอบครัวเป็นโรคหัวใจขาดเลือดเป็นปัจจัยเสี่นงหนึ่งต่อการเป็นโรคนี้ ถ้าทราบว่าบิดาหรือมารดา หรือญาติสนิทเป็นโรคนี้ควรหันมาสนใจลดปัจจัยเสี่ยงต่อการเกิดโรค 
              ด้วยการปรึกษาแพทย์ ตรวจระดับโคเลสเตอรอล ระดับน้ำตาลในเลือด วัดความดันโลหิต หยุดสูบบุหรี่ เริ่มการออกกำลังกาย ลดน้ำหนัก และเปลี่ยนพฤติกรรมการดูแลตัวเอง 
              ถึงแม่อายุไม่มากและไม่มีประวัติเป็นโรคหัวใจขาดเลือดในครอบครัวสิ่งที่สำคัญอย่างยิ่งที่ทุกคนควรมีความรู้ คือ วิธีปฏิบัติตนหลีกเลี่ยงปัจจัยเสี่ยงของการเกิดโรค
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
          <h2 className="mb-3">ข้อปฏิบัติในการเลือกรับประทานอาหารที่เหมาะสมเพื่อป้องกันการเกิดโรคหลอดเลือดหัวใจตีบตัน</h2>
          <div className="header8" /> <div className="header9" />
          <br />
          <br />
          <p>
          <li className="mb-2">
          บริโภคปลาบ่อยขึ้น ปลาเป็นแหล่งของโปรตีนและสารอาหารอื่นๆ รวมถึงกรดไขมันโอเมก้า 3 ช่วยลดความเสี่ยงต่อการเกิดโรคหัวใจและโรคหลอดเลือดสมอง
          </li>
          <li className="mb-2">
          บริโภคผัก ผลไม้ ธัญพืชที่ไม่ขัดสี และ ถั่วเป็นประจำ
          </li>
          <li className="mb-2">
          บริโภคไขมันที่เหมาะสม โดยจำกัดการบริโภคไขมันทุกชนิด
          </li>
          <li className="mb-2">
          หลีกเลี่ยงการบริโภคอาหารที่มีไขมันอิ่มตัวและไขมันทรานส์สูง
          </li>
          <li className="mb-2">
          เลือกใช้น้ำมันที่มีไขมันไม่อิ่มตัวในการประกอบอาหาร เช่น น้ำมันรำข้าว น้ำมันดอกทานตะวัน น้ำมันถั่วเหลือง น้ำมันข้าวโพด น้ำมันมะกอก เป็นต้น
          </li>
          <li className="mb-2">
              จำกัดการบริโภคอาหารที่มีโคเลสเตอรอลสูง นอกจากนี้ผู้ที่มีระดับคอเลสเตอรอลในเลือดสูงควรจำกัดการบริโภคน้ำตาล ขนมหวาน และ
              บริโภคเนื้อสัตว์ไม่ติดมัน ปลา ไข่ขาว สลับกับโปรตีนจากพืช เช่น ถั่วเหลือง เต้าหู้ เป็นบางมื้อในปริมาณที่เหมาะสม รวมถึงเลือกบริโภคผลิตภัณฑ์นมพร่อกหรือขาดไขมัน 
              เนื้อสัตว์และนมเป็นแหล่งของโปรตีนแต่การบริโภคเนื้อสัตว์มากเกินไปจะทำให้ได้รับไขมันที่แทรกอยู่ในเนื้อสัตว์มากด้วย ซึ่งเพิ่มความเสี่ยงต่อการเกิดโรคหัวใจ
          </li>
          <li className="mb-2">
          กินอาหารมื้อเล็ก วันละ 5-6 มื้อ การงดอาหารบางมื้อมักทำให้กินมากขึ้นในมื้อถัดไป การกินอาหารมื้อเล็ก วันละ 5-6 มื้อ ช่วยในการควบคุมระดับน้ำตาลในเลือด 
          เพิ่มประสิทธิภาพในการเผาผลาญไขมันช่วยควบคุมระดับคอเลสเตอรอล และช่วยคุมน้ำหนักตั
          </li>

          </p>
          

          
            <br />
            <br />
            <p style={{marginTop: '4%' , }}>
            <strong>ที่มา:</strong>โรงพยาบาลกรุงเทพ พัทยา Bangkok Hospital Pattaya<a style={{textDecoration: "none"}} href="https://www.bangkokpattayahospital.com/th/healthcare-services/heart-center-th/heart-articles-th/item/1049-foodheart-th.html#:~:text=%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B9%82%E0%B8%A0%E0%B8%84%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%9A%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99%20%E0%B8%9B%E0%B8%A5%E0%B8%B2,%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%88%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%82%E0%B8%A3%E0%B8%84%E0%B8%AB%E0%B8%A5%E0%B8%AD%E0%B8%94%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%94%E0%B8%AA%E0%B8%A1%E0%B8%AD%E0%B8%87&text=%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B9%82%E0%B8%A0%E0%B8%84%E0%B8%9C%E0%B8%B1%E0%B8%81%20%E0%B8%9C%E0%B8%A5%E0%B9%84%E0%B8%A1%E0%B9%89%20%E0%B8%98%E0%B8%B1%E0%B8%8D%E0%B8%9E%E0%B8%B7%E0%B8%8A%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%82%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B5%20%E0%B9%81%E0%B8%A5%E0%B8%B0%20%E0%B8%96%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3&text=%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B9%82%E0%B8%A0%E0%B8%84%E0%B9%84%E0%B8%82%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%B0%E0%B8%AA%E0%B8%A1%20%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B9%82%E0%B8%A0%E0%B8%84%E0%B9%84%E0%B8%82%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%8A%E0%B8%99%E0%B8%B4%E0%B8%94&text=%E0%B8%AB%E0%B8%A5%E0%B8%B5%E0%B8%81%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B9%82%E0%B8%A0%E0%B8%84%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3,%E0%B9%84%E0%B8%82%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B9%8C%E0%B8%AA%E0%B8%B9%E0%B8%87"> -อาหารเพื่อการดูแลหัวใจ-</a>
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

export default withRouter(Data4);