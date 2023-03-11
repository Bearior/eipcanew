import app from "../base";
import React, { useState , useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
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
import Logo2 from "../images/logo pic.png"


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

    const links = document.querySelectorAll('.profile-info li a');

    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.backgroundColor = '#3E8E41';
      });
    
      link.addEventListener('mouseleave', () => {
        link.style.backgroundColor = '#4CAF50';
      });
    });
    
    
    
    
    
    
    


    
    useEffect(() => {
      const unsubscribe = db.collection("EIPCA").where("userid", "==", currentUser.uid)
    .onSnapshot((querySnapshot) => {
      let dataArray = [];
      querySnapshot.forEach((doc) => {
        dataArray.push(doc.data());
        dataArray.sort((lhs, rhs) => {
          if(lhs.Time !== rhs.Time){
            return ((lhs.Time < rhs.Time) - 0.5) * 2;
          } else if(lhs.status !== rhs.status){
            return ((lhs.status > rhs.status) - 0.5) * 2;
          }
          return 0;
        })

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
  <header  className="ex-header bg-gray fixed-top " style={{zIndex: "1"}}  >
    <div className="container" >
      <div className="row">
        <div style={{ marginLeft: "30%"}} className="col-xl-10 offset-xl-1" >
          <h1 >ประวัติการตรวจวัดค่า กราฟคลื่นไฟฟ้าหัวใจ</h1>

        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </header>{" "}
 


  <center>      
  <div style={{marginBottom: "17%"}}>.</div>
  <div className="sidenav">
              <center>
              <div class="mx-auto py-4 fs-1  mt-5">
              
              <img style={{width: "20%", height: "20%"}} src= "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"  /><br></br>
              <h1>EIPCA ยินดีต้อนรับ</h1><br></br>
              <p class=" py-1  fw-bold " style={{fontSize: "80%"}}>{currentUser.displayName}</p>
              <p class=" py-1  " style={{fontSize: "50%"}}>{currentUser.email}</p>
              </div>
              {/* <div class=" py-4 fs-1 fw-bold mt-5">ประวัติการตรวจวัดค่า กราฟคลื่นไฟฟ้าหัวใจ</div> */}
              {/* <p>Please be patient for AI the Predicted the ECG graph</p> */}
              <img style={{width: "80%", borderRadius: "10px"}}src={Logo2}></img>
              </center>
  </div>
  </center>
  
      
   
          <center>
            {/* <div class="mx-auto py-4 fs-1  mt-5">
              
              <img style={{width: "20%", height: "20%"}} src= "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"  /><br></br>
              <p class="mx-auto py-2 fs-1 fw-bold ">Welcome!</p><br></br>
              <p class="mx-auto py-1 fs-1 fw-bold ">{currentUser.email}</p>
            </div>
              <div class="mx-auto py-4 fs-1 fw-bold mt-5">Result History</div>
              <p>Please be patient for AI the Predicted the ECG graph</p> */}
            
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
      
    <p>
      
    {Status === "NotPredict" && (
      <p className="bg-warning py-3 fs-5" style={{ marginLeft: "15%"}} >
        <div className="fw-bold">Date&Time : {Time}</div> <br />
        <div>Status : {Status}</div> <br />
        <div className="d-flex justify-content-center">
          <div className="spinner-border mr-3 " role="status"></div>
          <span className="fs-5 mx-2"> AI Processing...</span>
        </div>
      </p>
    )}  
    {Status === "Predicted" && (
      <p className="bg-light py-3 fs-5" style={{ marginLeft: "15%"}}>
        <div className="fw-bold">Date&Time : {Time}</div> <br />
        <div>Status : {Status}</div> <br />
        <button className="btn-solid-lg" onClick={toggleData}>
          {isDataShown ? "Hide Results" : "Show Results"}
        </button>
       
      </p>
    )}


  {isDataShown && Status === "Predicted" && (
    <div className="py-3 fs-5" style={{backgroundColor: "", marginLeft:"15%"}}>
      <p>ผลการตรวจสอบ</p>
        {Results === "Normal" ? (
          <div>
        <img
          className="img-fluid img-thumbnail"
          style={{
          borderColor: "Green",
          borderWidth: "10px",
          maxHeight: "40%",
          maxWidth: "40%"
        }}
        src={File}
        alt="Image from data"
      />
      <br/>
      <br/>
       <a  className="btn-solid-lg page-scroll " href="/SuggestionHealthy">
      ข้อแนะนำ
      </a>
      </div>
      
    ) : (
      <div>
         <img
          className="img-fluid img-thumbnail mx-5"
          style={{
          borderColor: "Red",
          borderWidth: "5px",
          maxHeight: "40%",
          maxWidth: "40%"
           }}
            src={File}
            alt="Image from data"
            />
          <img className="img-fluid img-thumbnail "  style={{
                maxHeight: "40%",
                maxWidth: "40%"
                  }}
                src="https://ecgwaves.com/wp-content/uploads/2017/03/brugada-syndrome-ecg-criteria-characteristics-brugadas-type-1-2-3.jpg"/>
          <br/>
          <br/>
          <a  className="btn-solid-lg page-scroll " href="/SuggestionBad">
          ข้อแนะนำ
          </a>
          </div>
    )}
    <br/>
    <br/>
   
  </div>
)}
  </p>
);
}

export default withRouter(History);