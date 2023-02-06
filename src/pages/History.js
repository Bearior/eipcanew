import app from "../base";
import React, { useState , useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import NavLogo from "../Asset/NavLogo.png"
import { AuthContext } from "../Auth";
import img from "../Asset/ECgg.webp"




const History = ({ history }) => {
    const { currentUser } = useContext(AuthContext);
    const [isShown, setIsShown] = useState(false);
    const [data , setData] = useState([]);
    const db = app.firestore();
    const Signout = () => {
      app.auth().signOut();
      history.push("/");
      window.location.reload(true)
    };


    
    useEffect(() => {
      db.collection("EIPCA").where("userid", "==", currentUser.uid)
        .get()
        .then((querySnapshot) => {
          let dataArray = [];
          querySnapshot.forEach((doc) => {
            dataArray.push(doc.data());
            
          });
          setData(dataArray);
          
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }, [db])
    
    
    
    const handleClick = event => {
      setIsShown(current => !current);
      
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
            <div class="mx-auto py-4 fs-1 fw-bold">Result History</div>
            <ul>
              {data.map((item) => (
              <Frame 
              Results = {item.Result}
              Status = {item.status} 
              Time = {item.Time}
              />
              ))}
             
            </ul>
          
            </center>
            
        </>
      
    );
  };

const Frame = ({ Results, Status, Time}) => {

    // const [Results, setReSults] = useState("");
    // const [Status, setStatus] = useState("");

    return(
      <p>
        <da>Results : {Results} </da> <br></br>
        <da>Status : {Status} </da> <br></br>
        <da>Date & Time : {Time} </da>
      </p>
    );
}

export default withRouter(History);