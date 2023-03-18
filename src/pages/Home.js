import React from "react";
import app from "../base";
import { useContext} from "react";
import { AuthContext } from "../Auth.js";
import { withRouter } from "react-router-dom";
import "../App.css"
import "../css/bootstrap.css"
import "../css/styles.css"
// import "../css/magnific-popup.css"
import Logo from "../images/logo text.png" 
import Logo2 from "../images/logo pic.png" 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Home = ({history}) => {
  const { currentUser } = useContext(AuthContext);
  var ReactRotatingText = require('react-rotating-text');

  const Signout = () => {
    app.auth().signOut();
    window.location.reload(true)
    
  };

  const Upload = () => {
    history.push("/upload");
    window.location.reload(true)
  }
  const login = () => {
    history.push("/Login");
    window.location.reload(true)
  }

  const btnstyle = {
    backgroundcolor: "black"
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
          <Nav.Link className="nav-link" href="#jobPanel">
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



    
    
    
        
    
      
      
    <header id="header" className="header">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xl-5">
          <div className="text-container box bg-gray">
            <h1 className="h1-large">
              Let EIPCA <br />
             
              <span id="js-rotating">
                <ReactRotatingText id="js-rotating" items={['Take care of you', 'Make life better', 'Bring good health']} />
              </span>
              
              
            </h1>
            <a  className="btn-solid-lg page-scroll " href="#jobPanel">
              บริการ
            </a>
            <a className="btn-solid-lg page-scroll mx-2" href="#infoPanel">
              ข้อมูลสุขภาพ
            </a>
          </div>{" "}
          {/* end of text-container */}
        </div>{" "}
        {/* end of div */}
        <div className="col-lg-6 col-xl-7">
          <div className="image-container">
            <img
              className="img"
              src={Logo2}
              height={470}

            />
            {/* </div> end of image-container */}
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>
  </header>{" "}
  {/* end of header */}
  {/* <img class="img5" src="https://i.pinimg.com/564x/33/55/7f/33557fe576b6c183abe4b40352951162.jpg" height="2000"  alt="alternative"> */}
  {/* end of header */}
  {/* Job Panel */}
  {/* <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div> */}

  {/* <div id="jobPanel" className="filter">
    <div className="basic-3">
      <div className="section-wrapper bg-gray" />
      <div className="row">
        <div className="">
          <h2 className="h2-heading">บริการของเรา</h2>
          <div className="header4" /> <div className="header5" />
          <br />
          <br />
        </div>{" "} */}
        {/* end of col */}
      {/* </div>{" "} */}
      {/* end of row */}
      {/* <div className="">
        <div className=""> */}
          {/* Filter */}
          {/* <div className="button-group filters-button-group">
            <a className="button" data-filter=".EIPCA">
              <span>EIPCA</span>
            </a>
            <a className="button" data-filter=".OTHERINFO">
              <span>อื่นๆ</span>
            </a>
          </div>{" "} */}
          {/* end of button group */}
          {/* <div className="grid"> */}
            {/* <div className="element-item  g-col-4">
              <a href="/Brugada">
                <img
                  className="img6"
                  src="https://i.pinimg.com/564x/de/14/00/de1400efa4800384ef0b64f490168d99.jpg"
                />
                <h4>
                  <i className="" />
                  Bruganda Syndrom
                </h4>
              </a>
            </div>
            
            <div className="element-item  g-col-4 ">
              <a href="/Hardware">
                <img
                  className="img6"
                  src="https://i.pinimg.com/564x/bb/cb/fa/bbcbfa8c3514be0d7a2f407d1405fd5d.jpg"
                />
                <h4>
                  <i className="" />
                  อุปกรณ์
                </h4>
              </a>
            </div>
            <div className="element-item ">
              <a href="/Howtouse">
                <img className="img6" src={Logo2}/>
                <h4>
                  <i className="" />
                  วิธีใช้{" "}
                </h4>
              </a>
            </div>
            <div className="element-item ">
              <a href="/ECGs">
                <img className="img6" src={Logo2} />
                <h4>
                  <i className="" />
                  คลื่นไฟฟ้าหัวใจเบื้องต้น
                </h4>
              </a>
            </div>
            <div className="element-item ">
              <a href="/upload">
                <img className="img6" src={Logo2} />
                <h4>
                  <i className="" />
                  อัพโหลด
                </h4>
              </a>
            </div>
             */}
          {/* </div>{" "} */}
          {/* end of grid */}
          {/* end of filter */}
        {/* </div>{" "} */}
        {/* end of col */}
      {/* </div>{" "} */}
      {/* end of row */}
    {/* </div> */}
  {/* // </div>{" "} */}
  {/* end of container */}
  {/* end of filter */}
  {/* end of job panel */}
  {/* Job Listing */}

  {/* card */}
  <center>
  <div id="jobPanel" className="filter">
    <div className="basic-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="h2-heading">บริการของเรา</h2>
            <div className="header6" /> <div className="header7" />
            <br />
            <br />
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
        <div className="row">
          <div className="col-lg-12">
            {/* Job */}
            <div className="job-container">
              <a style={{textDecoration: "none"}} href="/Form">
              <img
                className="img6"
                src={Logo2}
              />
              <h2  className="my-2">
                เริ่มต้นการวัดความเสี่ยง
              </h2>
              <p>
                เข้าไปเพื่อเริ่มทำแบบประเมินความเสี่ยงการเกิดโรคหัวใจ และหลังจากนั้นท่านสามารถเลือกระบบของ EIPCA เพื่อเริ่มตรวจกราฟคลื่นไฟฟ้าหัวใจ{" "}
                
              </p>
              </a>
            </div>{" "}
            <div className="job-container " >
              <a style={{textDecoration: "none"}} href="/SuggestionHospital2">
              <img
                className="img6"
                src={Logo2}
              />
              <h2 className="my-2">ค้นหาโรงพยาบาลศูนย์หัวใจใกล้คุณ</h2>
              <p>
              คุณสามารถค้นหาโรงพยาบาลที่ได้รับการรับรองเป็นศูนย์หัวใจ ในแต่ละภาคที่จังหวัดคุณอยู่ได้ใเมนูนี้
                
              </p>
              </a>
            </div>{" "}
            {/* end of job-container */}
            {/* end of job */}
            {/* Job */}
            {/* <div className="job-container">
              <a style={{textDecoration: "none"}} href="/Hardware">
              <img
                className="img6"
                src= {Logo2}
              />
              <h2  className="my-2">อุปกรณ์</h2>
              <p>
              อุปกรณ์ประเมินความเสี่ยงการเกิดโรค Brugada
              อุปกรณ์นี้คืออุปกรณ์ตรวจวัดคลื่นไฟฟ้าหัวใจหรือจะเรียกอีกอย่างว่าเครื่อง
              ECG ขนาดพกพา
                
              </p>
              </a>
            </div>{" "} */}
            {/* end of job-container */}
            {/* end of job */}
            {/* Job */}
            {/* <div className="job-container">
              <a style={{textDecoration: "none"}} href="/HowtoUse">
              <img
                className="img6"
                src={Logo2}
              />
              
              </a>
            </div>{" "} */}
            {/* end of job-container */}
            {/* end of job */}
            {/* Job */}
           
            
            {/* end of job-container */}
            {/* end of job */}
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>{" "}
    {/* end of basic-3 */}
  </div>

  </center>

          



  





  <center>
  <div id="infoPanel" className="filter">
    <div className="basic-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="h2-heading">ข้อมูลสุขภาพ</h2>
            <div className="header6" /> <div className="header7" />
            <br />
            <br />
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
        <div className="row">
          <div className="col-lg-12">
            {/* Job */}
            <div className="job-container " >
              <a style={{textDecoration: "none"}} href="/Data1">
              <img
                className="img6"
                src={Logo2}
                />
              <h4 className="my-2">“โรคใหลตาย” ความตายที่คนเป็นไม่รู้ตัว</h4>
              <p>
              ภาวะร่างกายขาดแร่ธาตุโพแทสเซียม ทำให้กล้ามเนื้อหัวใจขาดเลือดไปหล่อเลี้ยง ส่งผลให้หัวใจเต้นแรงขึ้นและเสียชีวิตในที่สุด {" "}
                <a className="purple no-line" href="job-details.html">
                  Details &gt;&gt;
                </a>
              </p>
              </a>
            </div>{" "}
            {/* end of job-container */}
            {/* end of job */}
            {/* Job */}
            <div className="job-container">
            <a style={{textDecoration: "none"}} href="/Data2">
              <img
                className="img6"
                src={Logo2}
              />
              <h4  className="my-2">การนอนกรนกับโรคไหลตาย</h4>
              <p>
              การนอนกรน ไม่ใช่เรื่องธรรมดาทั่วไปที่สามารถมองข้ามได้เพราะอาจคิดว่าไม่ได้ร้ายแรงอะไรมากนัก แต่ความจริงแล้วนั้น การนอนกรน {" "}
                <a className="purple no-line" href="job-details-AF.html">
                  
                  Details &gt;&gt;
                </a>
              </p>
              </a>
            </div>{" "}
            {/* end of job-container */}
            {/* end of job */}
            {/* Job */}
            <div className="job-container">
            <a style={{textDecoration: "none"}} href="/Data3">
              <img
                className="img6"
                src={Logo2}
              />
              <h4 className="my-2">กล้ามเนื้อหัวใจขาดเลือดเฉียบพลัน รีบรักษาทัน โอกาสรอดสูง</h4>
              <p>
              “เจ็บหน้าอกแบบฉับพลัน” ระวังอาจเป็นสัญญาณเตือนว่า คุณกำลังเกิดภาวะกล้ามเนื้อหัวใจขาดเลือดเฉียบพลัน  {" "}
                <a className="purple no-line" href="job-details.html">
                  Details &gt;&gt;
                </a>
              </p>
              </a>
            </div>{" "}
            {/* end of job-container */}
            {/* end of job */}
            {/* Job */}
            <div className="job-container">
            <a style={{textDecoration: "none"}} href="/Data4">
              <img
                className="img6"
                src={Logo2}
              />
              <h4  className="my-2">
              อาหารเพื่อการดูแลหัวใจ
              </h4>
              <p>
              พบว่าการมีประวัติผู้ที่อยู่ในครอบครัวเป็นโรคหัวใจขาดเลือดเป็นปัจจัยเสี่นงหนึ่งต่อการเป็นโรคนี้ ถ้าทราบว่าบิดาหรือมารดา หรือญาติสนิทเป็นโรคนี้ควรหันมาสนใจลดปัจจัยเสี่ยงต่อการเกิดโรค{" "}
                <a className="purple no-line" href="job-details.html">
                  Details &gt;&gt;
                </a>
              </p>
              </a>
            </div>{" "}
            {/* end of job-container */}
            {/* end of job */}
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>{" "}
    {/* end of basic-3 */}
  </div>
  </center>
  {/* end of job listing */}
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
 
 


      
    </>
  );
};

export default withRouter(Home);