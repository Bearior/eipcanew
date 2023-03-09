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

const Data1 = ({history}) => {

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
          <h1>Brugada (brew-GAH-dah)โรคใหลตาย :</h1>
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
              <strong>Brugada (brew-GAH-dah) โรคใหลตาย:</strong> กลุ่มอาการ
              Brugada (brew-GAH-dah) เป็นภาวะหัวใจเต้นผิดจังหวะ (arrhythmia)
              ที่หาได้ยากแต่อาจเป็นอันตรายถึงชีวิต ซึ่งบางครั้งก็สืบทอดมา
              ผู้ที่เป็นโรค Brugada
              มีความเสี่ยงเพิ่มขึ้นที่หัวใจเต้นผิดปกติโดยเริ่มจากห้องล่างของหัวใจ
              (ventricles) การรักษาโรคบรูกาดารวมถึงมาตรการป้องกัน เช่น การลดไข้
              และการหลีกเลี่ยงยาที่อาจทำให้เกิดภาวะหัวใจเต้นผิดจังหวะ
              บางคนที่เป็นโรค Brugada
              จำเป็นต้องใช้อุปกรณ์ทางการแพทย์ที่เรียกว่าเครื่องกระตุ้นหัวใจด้วยไฟฟ้าแบบฝัง
              (ICD)
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
          <h2 className="mb-3">อาการ</h2>
          <div className="header8" /> <div className="header9" />
          <br />
          <br />
          <p className="mb-4">
            โรค Brugada มักไม่ก่อให้เกิดอาการที่สังเกตได้
            หลายคนไม่ทราบว่าอาการดังกล่าวคือโรค Brugada
            ซึ่งอาการแสดงที่อาจเกี่ยวข้องกับโรค Brugadaได้แก่:
          </p>
          <ul className="list-unstyled li-space-lg mb-5">
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">อาการวิงเวียนศีรษะ</div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">เป็นลม</div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">
                หอบและหายใจลำบากโดยเฉพาะตอนกลางคืน
              </div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">หัวใจเต้นผิดปกติหรือใจสั่น</div>
            </li>
          </ul>
          <h2 className="mb-3">ใครบ้างคือผู้มีความเสี่ยง</h2>
          <div className="header10" /> <div className="header11" />
          <br />
          <br />
          
          <p className="mb-4">
          ส่วนใหญ่มักพบในเพศชายวัยทำงาน ช่วงอายุ 25-55 ปี บางครั้งสามารถพบได้ในเพศหญิง เด็ก หรือแม้กระทั่งในผู้สูงอายุ สำหรับในประเทศไทย พบมากที่สุดในภาคตะวันออกเฉียงเหนือ รองลงมาในภาคเหนือ
            </p>
            <p className="mb-4">
            1. ผู้ที่มีญาติสายตรงเสียชีวิตเฉียบพลันโดยไม่ทราบสาเหตุแต่ลักษณะอาการเข้าได้กับใหลตาย เนื่องจากพบว่าใหลตายมีความสัมพันธ์กับความผิดปกติในหน่วยพันธุกรรมหรือยีนที่มีผลต่อการควบคุมประจุไฟฟ้าในเซลล์กล้ามเนื้อหัวใจและความผิดปกตินี้อาจส่งต่อไปในญาติสายตรงของผู้ป่วยใหลตายได้<br/>
            
            2. ผู้ที่ตรวจพบความผิดปกติของคลื่นไฟฟ้าหัวใจชนิด Brugada แม้จะไม่มีประวัติอาการใหลตายหรือประวัติครอบครัว
            </p>
            <img
            src="https://www.bangkokpattayahospital.com/images/stories/newsroom/pagkagePromotion/cardiac_arrhythmia.jpg"
            weight="70px"
          />

        <h2 className="mb-3">การวินิจฉัย</h2>
          <div className="header10" /> <div className="header11" />
          <br />
          <br />
          
          <p className="mb-4">
          การวินิจฉัยอาศัยการตรวจพบความผิดปกติที่เรียกว่า Brugada (Brugada pattern) จากการตรวจคลื่นไฟฟ้าหัวใจ
            </p>
            
            <h2 className="mb-3">การรักษา</h2>
          <div className="header10" /> <div className="header11" />
          <br />
          <br />
          <p className="mb-4">
          ยังไม่พบว่ามีการรักษาใดที่สามารถป้องกันหรือหยุดการเกิดหัวใจเต้นผิดจังหวะได้ การรักษาจึงมุ่งหวังให้เกิดภาวะหัวใจเต้นผิดจังหวะน้อยครั้งที่สุด และระยะเวลาที่หัวใจเต้นผิดจังหวะแต่ละครั้งสั้นที่สุด ก่อนที่ผู้ป่วยจะหมดสติหรือเสียชีวิตโดยวิธีการดังนี้
            </p>
            <p className="mb-4">
            1. หลีกเลี่ยงสิ่งกระตุ้นที่ทำให้เกิดหัวใจเต้นผิดจังหวะ อันได้แก่การดื่มแอลกอฮอล์ ภาวะเครียด เช่น การพักผ่อนไม่เพียงพอ ออกกำลังกายหรือทำงานหนัก การรับประทานอาหารที่มีแป้งและน้ำตาลปริมาณมาก<br/>
           
            2. ใส่เครื่องกระตุกไฟฟ้าหัวใจอัตโนมัติ (automatic implantable cardioverter defibrillator, AICD)<br/>
            
            3. การจี้หัวใจด้วยคลื่นวิทยุความถี่สูง
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

export default withRouter(Data1);