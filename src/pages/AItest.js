import app from "../base";
import React, { useState , useContext } from "react";
import { withRouter } from "react-router-dom";
import NavLogo from "../Asset/NavLogo.png"
import { AuthContext } from "../Auth";
import img from "../Asset/ECgg.webp"
import gant from "../Asset/gant.png"




const AItest = ({ history }) => {
    const { currentUser } = useContext(AuthContext);
    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [data, setData] = useState([]);
    const db = app.firestore();
    
    const Signout = () => {
      app.auth().signOut();
      window.location.reload(true)
    };
    const handleClick = event => {
      setIsShown(current => !current);
    };
    const handleClick2 = event => {
      setIsShown2(current => !current);
    };
    const handleClick3 = event => {
      setIsShown3(current => !current);
    };
  
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

            <center>
            <div class="mx-auto py-4 fs-1 fw-bold">Result History</div>
            <img src={gant}/> <br></br>
            {/* ////////////////////////////////////////////////////////// */}
              <div class="bg-light py-4 fs-5">
                <text> ECG Checked 29/01/2023 </text> <br></br>
                <text> Status : Finished!</text> <br></br>
                <button onClick={()=> {
                  handleClick();
                }} class="btn btn-info" > Show Result</button>

                {/* 👇️ show elements on click */}
                {isShown ? (
                  <div>
                  <div class="py-4">
                    <img src={img} class="img-fluid"/> <br></br>
                    <text>Date: Sunday 29th Jan 2023 </text> <br></br>
                    <text>Time: 01.33 </text> <br></br>
                    <text class="text-success">Result: Normal with confident of 88%</text>  <br></br>
                    <text>Mention: หัวใจคุณปกติดี ออกกำลังกายอย่างสม่ำเสมอ และ รักษาสุขภาพร่างกาย </text> <br></br>
                  </div>
             
                  </div>
                ) : null}
              </div>
            {/* /////////////////////////////////////////////////////////////     */}
            <div class="bg-white py-4 fs-5">
                <text> ECG Checked 28/01/2023 </text> <br></br>
                <text> Status : Finished!</text> <br></br>
                <button onClick={()=> {
                  handleClick2();
                }} class="btn btn-info"> Show Result</button>

                {/* 👇️ show elements on click */}
                {isShown2 ? (
                  <div>
                  <div class="py-4 fs-5 ">
                    <img src={img} class="img-fluid"/> <br></br>
                    <text>Date: Saturday 28th Jan 2023 </text> <br></br>
                    <text>Time: 23.33 </text> <br></br>
                    <text>Result:</text> 
                  </div>
             
                  </div>
                ) : null}
              </div>
            {/* ////////////////////////////////////////////////////////// */}
              <div class="bg-light py-4 fs-5">
                <text> ECG Checked 29/01/2023 </text> <br></br>
                <text> Status : Finished!</text> <br></br>
                <button onClick={()=> {
                  handleClick3();
                }} class="btn btn-info" > Show Result</button>

                {/* 👇️ show elements on click */}
                {isShown3 ? (
                  <div>
                  <div class="py-4">
                    <img src={img}/> <br></br>
                    <text>Date: Sunday 29th Jan 2023 </text> <br></br>
                    <text>Time: 02.33 </text> <br></br>
                    <text>Result: You heart is Healthy.</text> 
                  </div>
             
                  </div>
                ) : null}
              </div>
            </center>
            
        </>
      
    );
  };


  
  export default withRouter(AItest);