import app from "../base";
import React, { useState , useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import NavLogo from "../Asset/NavLogo.png"
import { AuthContext } from "../Auth";
import Logo from "../images/logo text.png" 
import "../App.css"
import "../css/bootstrap.css"
import "../css/styles.css"
import "../css/magnific-popup.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const History = ({ history }) => {
    const { currentUser } = useContext(AuthContext);
    const [data , setData] = useState([]);
    const db = app.firestore();
    const Signout = () => {
      app.auth().signOut();
      history.push("/");
      window.location.reload(true)
    };

    const Refresh = () => {
      window.location.reload();
    }


    
    useEffect(() => {
      const unsubscribe = db.collection("EIPCA").where("userid", "==", currentUser.uid)
    .onSnapshot((querySnapshot) => {
      let dataArray = [];
      querySnapshot.forEach((doc) => {
        dataArray.push(doc.data());
        dataArray.sort((a, b) => {
          if (a.status === "NotPredict") {
            return -1; // "Not Predicted" data goes first
          }
          if (b.status === "NotPredict") {
            return 1; // "Not Predicted" data goes first
          }
          return 0; // no need to change order for other statuses
        });
      });
      setData(dataArray);
    });
    return unsubscribe;
  }, [db])
    
  
    return(
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
            <Nav.Link class="nav-link" style={{color: "red"}} href="#" onClick={Signout} >Sign out </Nav.Link>
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
            <div class="mx-auto py-4 fs-1  mt-5">
              
              <img style={{width: "20%", height: "20%"}} src= "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"  /><br></br>
              <p class="mx-auto py-2 fs-1 fw-bold ">Welcome!</p><br></br>
              <p class="mx-auto py-1 fs-1 fw-bold ">{currentUser.email}</p>
            </div>
              <div class="mx-auto py-4 fs-1 fw-bold mt-5">Result History</div>
              <p>Please be patient for AI the Predicted the ECG graph</p>
            
                {/* <button class="btn btn-success" onClick={Refresh} style={{marginBottom: "20px"}}>
                Reload Page
                </button> */}
            <ul style={{paddingInline: "20px"}}>
              {data.map((item) => (
              <Frame 
                Results = {item.Result}
                Status = {item.status} 
                Time = {item.Time}
                File = {item.file}
                History = {item.History}
              />
              ))}
             
            </ul>
          
            </center>
            
        </>
      
    );
  };

const Frame = ({ Results, Status, Time, File, History}) => {
  const [isDataShown, setIsDataShown] = useState(false);


  const toggleData = () => {
    setIsDataShown(!isDataShown);
  };
    // const [Results, setReSults] = useState("");
    // const [Status, setStatus] = useState("");
   

    return(
    <p >
    {Status === "NotPredict" && (
      <p className="bg-warning py-3 fs-5">
        <div className="fw-bold">Date&Time : {Time}</div> <br />
        <div>Status : {Status}</div> <br />
        <div className="d-flex justify-content-center">
          <div className="spinner-border mr-3 " role="status"></div>
          <span className="fs-5 mx-2"> AI Processing...</span>
        </div>
      </p>
    )}  
    {Status === "Predicted" && (
      <p className="bg-light py-3 fs-5">
        <div className="fw-bold">Date&Time : {Time}</div> <br />
        <div>Status : {Status}</div> <br />
        <button className="btn-solid-lg" onClick={toggleData}>
          {isDataShown ? "Hide Results" : "Show Results"}
        </button>
      </p>
    )}


    {isDataShown && Status === "Predicted" && (
      <div
        className="py-3 fs-5"
        style={{
          backgroundColor: Results === "Normal" ? "lightgray" : "lightgray",
        }}
      >
        <p>ผลการตรวจสอบ {Results}</p>
        <img
          className="img-fluid img-thumbnail"
          style={{
            borderColor: Results === "Normal" ? "Green" : "Red",
            borderWidth: "10px",
            maxHeight: "40%",
            maxWidth: "40%"
          }}
          src={File}
          alt="Image from data"
        />
      </div>
    )}
  </p>
);
}

export default withRouter(History);