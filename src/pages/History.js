import app from "../base";
import React, { useState , useContext } from "react";
import { withRouter } from "react-router-dom";
import NavLogo from "../Asset/NavLogo.png"
import { AuthContext } from "../Auth";

const History = ({ history }) => {
    const { currentUser } = useContext(AuthContext);
  
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
       <li class="nav-item">
                <a class="nav-link" href="./">Home </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./upload">Upload </a>
            </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">History <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item ">
          <div style={{marginLeft: "1000px"}}> User: {currentUser.email}</div>
        </li>
            
      
        </ul>
    
      </div>
    </nav>


            <center>
            <div>Result History</div>
            
            </center>
            <div class="mx-auto">
              <text>Date:</text> <br></br>
              <text>Result:</text>
            </div>
        </>
      
    );
  };
  
  export default withRouter(History);