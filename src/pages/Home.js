import React from "react";
import app from "../base";
import { useContext } from "react";
import { AuthContext } from "../Auth.js";
import { withRouter } from "react-router-dom";
import "../App.css";
import Logo from "../Asset/Logo.png"
import NavLogo from "../Asset/NavLogo.png"

const Home = ({history}) => {

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
        <li class="nav-item ">
          <div style={{marginLeft: "1000px"}}> User: {currentUser.email}</div>
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
            <div>Email: {currentUser.email}</div>
            <div>User ID: {currentUser.uid}</div>
            
          </>
        ) : (
          <><button onClick={login} class="btn btn-success my-15"> Login </button>
          </>
          
        )}
      </div>
      <button onClick={Signout} class="btn btn-danger my-2" >Sign out</button><br></br>
      <button onClick={Upload} class="btn btn-success my-15"> Upload </button>
      
      
    </center>
    
      
    </>
  );
};

export default withRouter(Home);