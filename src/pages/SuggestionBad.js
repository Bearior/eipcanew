import React, { useState , useContext } from "react";
import app from "../base";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../Auth";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../images/logo text.png" 


const SuggestionBad = ({history}) => {
  const { currentUser } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [base64, setBase64] = useState(null);
  

  const Signout = () => {
    app.auth().signOut();
    history.push("/");
    window.location.reload(true)
  };


// Change file to Field for firestore

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

  <center>
     {/* Header */}
  <header className="ex-header bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
        <h1 >การตรวจวัดค่า กราฟคลื่นไฟฟ้าหัวใจ</h1>
          <h2 className="mt-4">คุณ {currentUser.displayName} </h2>
          <p class="fs-2" style={{marginTop: "4%"}}>ผลการตรวจคลื่นไฟฟ้าหัวใจของคุณอยู่ในเกณฑ์</p>
          <p class="fs-1" style={{color: "red", marginTop: "40px"}}>อันตราย</p>
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </header>{" "}
  </center>
  {/* end of ex-header */}
  {/* end of header */}
  {/* Basic */}
    <center>
    <button  style={{marginTop: "4%"}} className="btn-solid-lg" onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.google.co.th/maps/search/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B9%83%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%89%E0%B8%B1%E0%B8%99/';
      }}>
      กดเพื่อหาโรงพยาบาลศูนย์โรคหัวใจใกล้ฉัน

      </button>
    </center>
      
    </>
  );
};

export default withRouter(SuggestionBad);