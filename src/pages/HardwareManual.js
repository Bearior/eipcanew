import React from "react";
import { useContext, useState} from "react";
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

const HardwareManual = ({history}) => {

const { currentUser } = useContext(AuthContext);
const [currentStep, setCurrentStep] = useState(1);
const Signout = () => {
        app.auth().signOut();
        window.location.reload(true)
        history.push('/login')
      };
      
const handlestep1 = () => {
  if (currentStep < 5) {
    setCurrentStep(currentStep + 1);
  }
};

const handlestep2 = () => {
  if (currentStep > 1) {
    setCurrentStep(currentStep - 1)
  }
 
}
console.log(currentStep)



if (currentStep === 1) {
  window.location.href='#step1'
  } else if (currentStep === 2) {
  window.location.href='#step2'
  } else if (currentStep === 3){
  window.location.href='#step3'
  } else if (currentStep === 4){
    window.location.href='#step4'
  } else if (currentStep === 5){
    window.location.href='#step5'
  }
        
    


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

    <div style={{marginTop: "100px", position: "fixed"}}>
      <button className="btn-solid-lg" onClick={handlestep2}>
        Previous Step
      </button>
      <button className="btn-solid-lg" onClick={handlestep1}>
        Next Step
      </button>
    </div>
      
    <section id="step1" >
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
    </section>
    
    <section id="step2" style={{marginTop: "20%"}}>Section test</section>
    <section id="step3" style={{marginTop: "20%"}}>Section test</section>
    <section id="step4" style={{marginTop: "20%"}}>Section test</section>
    <section id="step5" style={{marginTop: "20%"}}>Section test</section>
   </>
  );
};

export default withRouter(HardwareManual);