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



const Choose = ({history}) => {
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
            <a className= "mx-3" href="/History">
              <img style={{width: "40px", height: "40px"}} src= "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"  />
          </a>
          </li>
          
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  {/* card */}
  <center>
          <div id="" className="" style={{marginTop: "10%"}}>
            <div className="basic-3">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    {/* Job */}
                    <div className="job-container">
                      <a style={{textDecoration: "none"}} href="/Hardware">
                      <img
                        className="img6"
                        src= {Logo2}
                      />
                      <h2  className="my-2">ตรวจคลื่นไฟฟ้าหัวใจด้วยอุปกรณ์ EIPCA</h2>
                      <p>
                      อุปกรณ์ประเมินความเสี่ยงการเกิดโรค Brugada
                      อุปกรณ์นี้คืออุปกรณ์ตรวจวัดคลื่นไฟฟ้าหัวใจหรือจะเรียกอีกอย่างว่าเครื่อง
                      ECG ขนาดพกพา
                        
                      </p>
                      </a>
                    </div>{" "}
                    
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

export default withRouter(Choose);