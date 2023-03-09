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

const Data3 = ({history}) => {

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
          <h2>กล้ามเนื้อหัวใจขาดเลือดเฉียบพลัน รีบรักษาทัน โอกาสรอดสูง: </h2>
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
              <strong>“เจ็บหน้าอกแบบฉับพลัน” ระวังอาจเป็นสัญญาณเตือนว่า คุณกำลังเกิดภาวะกล้ามเนื้อหัวใจขาดเลือดเฉียบพลัน  </strong> 
              หากคุณกำลังทำกิจกรรมประจำวันแล้วเกิดเจ็บหน้าอกนาน แน่น หายใจไม่ออก หรือรู้สึกเจ็บหน้าอกเวลาออกกำลังกายหรือออกแรงทำกิจกรรมหนัก ๆ ที่ไม่เคยทำมาก่อน จนรู้สึกร้าวไปที่ไหล่ ใจสั่น บางรายอาจมีอาการคลื่นไส้ 
              เหงื่อออก หัวใจเต้นแรงผิดปกติ หากพบอาการเหล่านี้ควรรีบพบแพทย์ในทันที เพราะถ้าถึงมือหมอไม่ทันเวลา อาจอันตรายถึงชีวิตได้
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
          <h2 className="mb-3">ภาวะกล้ามเนื้อหัวใจตายเฉียบพลัน</h2>
          <div className="header8" /> <div className="header9" />
          <br />
          <br />
          <p className="mb-4">
          ภาวะกล้ามเนื้อหัวใจตายเฉียบพลันเกิดจากการที่หลอดเลือดตีบตัน เพราะมีไขมันเกาะผนังหลอดเลือดสะสมเป็นเวลานาน (Plaque) จนผนังหลอดเลือดตีบแคบลง หากวันใดที่ Plaque 
          ดังกล่าวเกิดการปริตัวหรือแตกเป็นแผลจะทำให้เลือดแข็งตัวกลายเป็นลิ่มเลือดอุดตันในเส้นเลือด จนเลือดไม่สามารถไหลไปเลี้ยงหัวใจ กลายเป็นภาวะกล้ามเนื้อหัวใจขาดเลือด 
          และนำไปสู่ภาวะกล้ามเนื้อหัวใจเสียหายหรือตายบางส่วน ถ้าหากเป็นหลอดเลือดที่เป็นเส้นเลือดใหญ่ส่วนต้นที่ส่งเลือดเลี้ยงในพื้นที่กล้ามเนื้อบริเวณกว้างก็มีความเสี่ยงที่จะเสียชีวิตกระทันหันอย่างรวดเร็วได้
          </p>
          <p className="mb-4">
          ปัจจุบันแม้ผู้ป่วยที่ประสบภาวะกล้ามเนื้อหัวใจขาดเลือดเฉียบพลันจะมีแนวโน้มเพิ่มขึ้น ทั้งผู้ป่วยก็มีอายุน้อยลง แต่ข่าวดีก็คือ อัตราคนไข้ที่เสียชีวิตจากกล้ามเนื้อหัวใจขาดเลือดเฉียบพลันลดลง 
          โดยจากสถิติกลุ่มผู้ที่เกิดภาวะดังกล่าวพบว่า ประมาณร้อยละ 10 – 15 เสียชีวิตตั้งแต่ยังมาไม่ถึงโรงพยาบาล ขณะที่ร้อยละ 10 เสียชีวิตที่โรงพยาบาล กลุ่มที่ได้รับการรักษาเร็วก็จะมีโอกาสรอด 
          ความเสียหายต่อกล้ามเนื้อหัวใจจะน้อย สามารถกลับไปมีชีวิตเป็นปกติได้ แต่ถ้ากล้ามเนื้อหัวใจเสียหายมาก แม้จะรอดชีวิต ในระยะยาวผู้ป่วยที่เคยประสบภาวะดังกล่าว ย่อมมีผลกระทบต่อการดำรงชีวิต 
          อาจเกิดภาวะกล้ามเนื้อหัวใจอ่อนกำลังจนบีบตัวไม่ไหว ทำงานหนักขึ้น ส่งผลให้ผู้ป่วยมีสุขภาพร่างกายเหมือนคนอ่อนแรง เหนื่อยง่าย กลายเป็นผู้ป่วยติดเก้าอี้ ติดเตียง
          </p>
          <img
            src="https://www.phukethospital.com/wp-content/uploads/2020/09/Heart-FMC-02.jpg"
            weight="70px"
          />
          
          <h2 className="mb-3">รักษาภาวะกล้ามเนื้อหัวใจตายเฉียบพลัน</h2>
          <div className="header10" /> <div className="header11" />
          <br />
          <br />
          
          <p className="mb-4">
          หากมีภาวะหลอดเลือดอุดตันเฉียบพลัน วิธีแก้ไขอันดับแรก คือ ต้องทำให้เลือดกลับมาไหลโดยเร็วที่สุด ในอดีตแพทย์จะนิยมให้ยาละลายลิ่มเลือด แต่ปัจจุบันมีการรักษาโดยใช้สายสวนเพื่อขยายหลอดเลือดด้วยบอลลูน 
          ซึ่งเป็นวิธีที่ประสบความสำเร็จกว่าการรับประทานยา
          </p>
          <p className="mb-4">
          แม้ผู้ป่วยอาจมาพบแพทย์ด้วยอาการแสดงที่หลากหลาย แต่กลุ่มผู้ที่มีอาการเจ็บหน้าอกร่วมกับอาการผิดปกติของคลื่นไฟฟ้าหัวใจ (ECG) ที่เรียกว่า ST Elevation MI (STEMI) เป็นกลุ่มที่มีความเสี่ยง เพราะในกระบวนการรักษา ปัจจัยสำคัญที่สุดคือ “ระยะเวลา” โดยกล้ามเนื้อหัวใจจะเริ่มตาย เมื่อขาดเลือดประมาณ 40 นาที ซึ่งในเวลานี้หากทำให้เลือดกลับมาไหลสู่หัวใจได้ ความเสียหายของหัวใจจะน้อยมากหรือแทบไม่มีเลย ส่วนอีกช่วงเวลาสำคัญที่อาจกล่าวได้ว่าเป็น Golden Period ของการช่วยชีวิตผู้ป่วยที่ดีที่สุด คือประมาณ 4 ชั่วโมง ดังนั้นการวินิจฉัยของแพทย์ที่มีประสบการณ์และมีความชำนาญเฉพาะด้านจึงมีความสำคัญ เพราะจะทำให้วินิจฉัยการรักษาอย่างเหมาะสมและทันเวลา โอกาสช่วยชีวิตผู้ป่วยให้รอดได้มาก ปัจจุบันเริ่มมีการขยายระยะเวลาเปิดหลอดเลือดไปถึง 12 ชั่วโมง  
          แม้โอกาสดังกล่าวจะเหลือน้อยมาก แต่ก็ถือเป็นการเพิ่มโอกาสในการรักษาชีวิตผู้ป่วยให้ได้มากที่สุด 
          </p>

          
          <br />
          <br />
          
          <p className="mb-4">
          <strong>คนที่รักษาสุขภาพร่างกายตลอดชีวิต ออกกำลังกายสม่ำเสมอ จะทนภาวะกล้ามเนื้อหัวใจขาดเลือดได้ดีกว่าคนที่ไม่ออกกำลังกายเลย เมื่อเป็นโรคความรุนแรงของโรคจะลดลง ระยะฟื้นตัวจะสั้นกว่า ทางที่ดีที่สุดคือป้องกันไม่ให้เกิดภาวะกล้ามเนื้อหัวใจตายเฉียบพลัน  ซึ่งสิ่งที่แก้ได้และทำให้ดีขึ้นได้คือ ดูแลสุขภาพร่างกาย ปรับพฤติกรรมสุขภาพที่ช่วยลดปัจจัยเสี่ยง 
            ออกกำลังกาย ไม่เครียด ไม่สูบบุหรี่ ดูแลโรคประจำตัวให้อยู่ในภาวะปกติ ควบคุมน้ำหนักให้ดีที่สุด และหมั่นตรวจสุขภาพเป็นประจำ</strong>
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

export default withRouter(Data3);