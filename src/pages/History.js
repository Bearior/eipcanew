import app from "../base";
import React, { useState , useContext } from "react";
import { withRouter } from "react-router-dom";
import NavLogo from "../Asset/NavLogo.png"
import { AuthContext } from "../Auth";
import img from "../Asset/ECgg.webp"
import gant from "../Asset/gant.png"




const History = ({ history }) => {
    const { currentUser } = useContext(AuthContext);
    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [data, setData] = useState([]);
    const db = app.firestore();

    db.collection("EIPCA").where("userid", "==", currentUser.uid )
    .get()
    .then((querySnapshot) => {
    let dataArray = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      dataArray.push(doc.data());
    });
      setData(dataArray);
    })

    
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
          <div style={{marginLeft: "950px"}}> User: {currentUser.email}</div>
        </li>
            
      
        </ul>
    
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
                    <text>Time: 02.33 </text> <br></br>
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


  
  export default withRouter(History);