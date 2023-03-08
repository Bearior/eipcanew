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

export default withRouter(Hardware);