import app from "../base";
import React, { useState , useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import NavLogo from "../Asset/NavLogo.png"
import { AuthContext } from "../Auth";





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
          if (a.status === "Not Predicted") {
            return -1; // "Not Predicted" data goes first
          }
          if (b.status === "Not Predicted") {
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
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >
            <a class="navbar-brand" href="/" style={{marginLeft: "10px"}}>
                <img src={NavLogo} className="img-responsive" style={{width: "50px"}} />
            </a>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Content" aria-controls="Content" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

          <div class="navbar-collapse collapse" id="Content">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item ">
                <a class="nav-link" href="./">Home </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./upload">Upload </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">History <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item ">
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
      <p class="">
        
        
        {Status === "Predicted" ?
        
           <p class="bg-light py-3 fs-5">
           <div class = "fw-bold">Date&Time : {Time}</div> <br></br>
           <div>Status : {Status}</div> <br></br>
          <button class="btn btn-info" onClick={toggleData}>
            {isDataShown ? "Hide Results" : "Show Results"} 
          </button> 
          </p>
          
          :
          <p class="bg-warning py-3 fs-5">
          <div class = "fw-bold">Date&Time : {Time}</div> <br></br>
          <div>Status : {Status}</div> <br></br>
          <div class="d-flex justify-content-center" >
            <div class="spinner-border mr-3 " role="status">
            </div>
            <span class="fs-5 mx-2"> AI Processing...</span>
          </div>
          </p>
        }
        {isDataShown && Status === "Predicted" && (
            <div class="py-3 fs-5" style={{backgroundColor: Results === "Normal" ? "lightgray" : "lightgray" }} >
              <p>Results: {Results}</p>
              <img class="img-fluid img-thumbnail" style={{borderColor: Results === "Normal" ? "Green" : "Red" ,borderWidth: "10px"}} src={File} alt="Image from data" />
              
            </div>
        )}
      </p>
    );
}

export default withRouter(History);