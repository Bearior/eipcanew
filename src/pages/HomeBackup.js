import React from "react";
import app from "../base";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth.js";
import { withRouter } from "react-router-dom";
import "../App.css";
import "../css/bootstrap.css"
import "../css/styles.css"
import Logo from "../images/logo text.png" 
// import "../css/fontawesome-all.css"

import NavLogo from "../Asset/NavLogo.png"

const Home = ({history}) => {
  const [isHover, setIsHover] = useState(false);
  const { currentUser } = useContext(AuthContext);

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
  const handleMouseEnter = () => {
    setIsHover(true);
  }

  const handleMouseLeave = () => {
    setIsHover(false);
  }
  const btnstyle = {
    backgroundcolor: "black"
  };
  


  return (
    
    <>
   


    <nav class="navbar navbar-expand-lg navbar-light bg-light" >
            <a class="navbar-brand" href="/" style={{marginLeft: "10px"}}>
                <img src={NavLogo} className="img-responsive" style={{width: "50px"}} />
            </a>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav mr-auto">
       <li class="nav-item" >
                <a class="nav-link" href="#" >Home <span class="sr-only">(current)</span> </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./upload">Upload </a>
            </li>
          <li class="nav-item active">
            <a class="nav-link" href="/history">History </a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" style={{color: "red"}} href = "#" onClick={Signout} >Sign out </a>
        </li>
        <li class="nav-item ">
          <div style={{marginLeft: "900px"}}> User: {currentUser.email}</div>
        </li>

        </ul>
      </div>
    </nav>
    
    <center>
    <h1><img src={Logo} class="mt-2" /></h1>
      <div>Welcome</div>
      <div>
        {currentUser ? (
          <>
            {/* <div class = "fs-3 fw-bold">{currentUser.email}</div> */}
            {/* <div>User ID: {currentUser.uid}</div> */}
            
          </>
        ) : (
          <><button onClick={login} class="btn btn-success my-15"> Login </button>
          </>
          
        )}
      </div>

          <div class="fs-5 mt-4"> Electro Cardiogram Patterns Predictions with </div> <text class="fs-5 mt-4"> Artificial Intelligence </text>
          <div class="fs-5">ตรวจสอบกราฟคลื่นไฟฟ้าหัวใจ ด้วยปัญญาประดิษฐ์ </div>
          <div class="d-grid gap-2 col-6 mx-auto "
          
          >
          <button onClick={Upload} className="my-4 py-4 fs-3 button-64"style={btnstyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} > Upload Here </button>
          </div>
        
    
      
      
    </center>



      
    </>
  );
};

export default withRouter(Home);