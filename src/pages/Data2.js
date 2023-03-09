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

const Data2 = ({history}) => {

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
          <h1>การนอนกรนกับโรคใหลตาย: </h1>
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
              <strong>การนอนกรน: </strong> การนอนกรน ไม่ใช่เรื่องธรรมดาทั่วไปที่สามารถมองข้ามได้เพราะอาจคิดว่าไม่ได้ร้ายแรงอะไรมากนัก แต่ความจริงแล้วนั้น 
              การนอนกรน เป็นเรื่องสำคัญที่ควรใส่ใจมากยิ่งขึ้นเพราะอาจส่งให้เกิดโรคต่างๆ ตามมา ซึ่งในบทความนี้จะกล่าวถึง การนอนกรนกับโรคไหลตาย โดยเฉพาะ
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
          <h2 className="mb-3">โรคใหลตายคืออะไร</h2>
          <div className="header8" /> <div className="header9" />
          <br />
          <br />
          <p className="mb-4">
          โรคใหลตาย มีชื่อในภาษาอังกฤษคือ Sudden Unexpected Death Syndrome (SUDS) หรือถ้าแปลแบบตรงตัวก็คือ “การตายแบบเฉียบพลัน” ในทางการแพทย์จะเรียกภาวะนี้ว่า “ภาวะหัวใจล้มเหลวแบบเฉียบพลัน” 
          เป็นอีกหนึ่งโรคที่พบบ่อยโดยเฉพาะในแถบภาคอีสาน ความน่ากลัวของโรคนี้คือการเสียชีวิตแบบเฉียบพลัน สามารถเกิดได้ทั้งในขณะที่นอนหลับหรือตื่น โดยที่ผู้ตายไม่มีโอกาสรู้ตัวมาก่อน
          </p>
          <img
            src=""
            weight="70px"
          />
          
          <h2 className="mb-3">สาเหตุและปัจจัยเสี่ยงของโรคไหลตาย</h2>
          <div className="header10" /> <div className="header11" />
          <br />
          <br />
          
          <p className="mb-4">
          โรคใหลตาย มีสาเหตุสำคัญมาจากภาวะที่เกิดลิ่มเลือดอุดตันในหลอดเลือดหัวใจเฉียบพลัน ทำให้เลือดไหลไปเลี้ยงกล้ามเนื้อหัวใจได้ไม่เพียงพอ จนเกิดภาวะกล้ามเนื้อหัวใจขาดเลือดและทำให้เสียชีวิตในที่สุด
          ทั้งนี้โรคไหลตาย หรือ โรคหัวใจวายเฉียบพลัน สามารถเกิดขึ้นจากหลายปัจจัยเสี่ยงด้วยกัน ไม่ว่าจะเป็นเบาหวาน, ความดันโลหิตสูง หรือ ไขมันในเลือดสูง <strong>รวมถึงการมีอาการนอนกรนและมีภาวะหยุดหายใจขณะหลับร่วมด้วย</strong>
          ซึ่งถือได้ว่าการนอนกรนก็เป็นอีกหนึ่งปัจจัยเสี่ยงที่อาจทำให้เกิดโรคไหลตายหรือโรคหัวใจวายเฉียบพลันได้
          </p>
          <p className="mb-4">
          นอกจากนี้ สาเหตุอื่นๆ ที่อาจทำให้เกิดโรคไหลตายได้แก่ ภาวะร่างกายขาดแร่ธาตุโพแทสเซียม ซึ่งอาจเกิดจากพันธุกรรม หรือจากอาหารการกิน โดยเฉพาะการกินข้าวเหนียว ยิ่งทานพร้อมเหล้าหรือเบียร์ซึ่งมักพบมากในภาคอิสาน การที่โพแทสเซียมในร่างกายต่ำ 
          ทำให้กล้ามเนื้อหัวใจขาดเลือดไปหล่อเลี้ยง ส่งผลให้หัวใจเต้นแรงขึ้น หัวใจหยุดเต้น และเสียชีวิตในที่สุด หรืออาจเกิดจากโรคทางพันธุกรรมที่คลื่นไฟฟ้าหัวใจผิดปกติ หัวใจจึงมีโอกาสเต้นผิดปกติ และหยุดเต้นได้
          </p>

          <h2 className="mb-3">การนอนกรนเกี่ยวข้องกับโรคไหลตายอย่างไร?</h2>
          <div className="header10" /> <div className="header11" />
          <br />
          <br />
          
          <p className="mb-4">
          การนอนกรน มีความเกี่ยวข้องกับโรคไหลตาย หรือ โรคหัวใจวายเฉียบพลัน กล่าวคือการนอนกรนและหยุดหายใจขณะหลับนั้นจะมีลักษณะของทางเดินหายใจส่วนต้นตีบแคบและอุดตันขณะหลับ ซึ่งเสียงกรนจะเกิดขึ้นในขณะที่กำลังหายใจ (เนื่องจากอากาศเดินทางผ่านที่แคบทําให้เกิดเสียงดัง) 
          อีกทั้งยังทําให้ไม่สามารถหายใจเอาอากาศเข้าสู่ปอดได้อย่างเต็มที่ ทำให้เกิดผลเสียตามมาหลายอย่าง โดยเฉพาะทําให้ออกซิเจนในเลือดต่ำเนื่องจากขาดอากาศหายใจ จึงต้องพยายามหายใจแรงขึ้นเพื่อเปิดทางเดินหายใจ
          </p>
          <p className="mb-4">
          อาการนอนกรนชนิดรุนแรง หรือภาวะหยุดหายใจขณะหลับ มีผลทำให้หัวใจต้องทำงานหนักมากขึ้น โดยเฉพาะในช่วงที่มีอาการสะดุ้งเฮือกและตื่นขึ้นมาระหว่างนอนหลับ เมื่อหัวใจต้องทำงานหนักทุกคืนเป็นเวลานาน 
          อาจมีผลทำให้กล้ามเนื้อหัวใจล้มเหลวเฉียบพลัน หรือไหลตายได้
          </p>
          <p className="mb-4">
          ดังนั้นผู้ที่มีอาการนอนกรนจึงควรใส่ใจในสุขภาพของตนเองตั้งแต่เนิ่นๆ เพื่อที่จะสามารถรักษาได้อย่างทันท่วงที ซึ่งในเบื้องต้นก็สามารถเริ่มต้นได้โดยการปรับเปลี่ยนพฤติกรรมของตนเองเป็นอันดับแรก ไม่ว่าจะเป็นการปรับเปลี่ยนท่าทางในการนอนหลับ หรือออกกำลังกายเฉพาะส่วน 
          ถ้าหากพบว่ามีอาการนอนกรนที่รุนแรงเพิ่มมากยิ่งขึ้น จึงควรทำการพบแพทย์เฉพาะทางเพื่อทำการรักษาต่อไป
          </p>

          <br />
          <br />
          <p className="mb-4">แหล้งอ้างอิง: HEART Hospital Bangkok Hospital </p>
          
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

export default withRouter(Data2);