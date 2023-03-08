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


const Hardware = ({history}) => {

    const Signout = () => {
        app.auth().signOut();
        window.location.reload(true)
        history.push('/login')
      };
  


  return (
    
    <>
    <nav className="navbar navbar-expand-lg fixed-top navbar-light">
      <div className="container">
      {/* Text Logo - Use this if you don't have a graphic logo */}
      {/* <a class="navbar-brand logo-text page-scroll" href="index.html">Viso</a> */}
      {/* Image Logo */}
      <a className="navbar-brand logo-image" href="/">
        <img src= {Logo}  />
      </a>
      <button
        className="navbar-toggler p-0 border-0"
        type="button"
        data-toggle="offcanvas"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="navbar-collapse offcanvas-collapse"
        id="navbarsExampleDefault"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              บริการ<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              เกี่ยวกับเรา
            </a>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdown01"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Drop
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <a className="dropdown-item page-scroll" href="services.html">
                Job Details
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item page-scroll" href="terms.html">
                Terms Conditions
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item page-scroll" href="privacy.html">
                Privacy Policy
              </a>
            </div>
          </li> */}
          <li className="nav-item">
          <a class="nav-link" style={{color: "red"}} href="#" onClick={Signout} >Sign out </a>
          </li>
          <li className="nav-item">
          <a className= "mx-3" href="/History">
              <img style={{width: "40px", height: "40px"}} src= "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"  />
          </a>
          </li>
        </ul>
        <span className="nav-item social-icons">
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
        </span>
      </div>{" "}
      {/* end of navbar-collapse */}
    </div>{" "}
    {/* end of container */}
  </nav>{" "}



  
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

export default withRouter(Hardware);