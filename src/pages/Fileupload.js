import React, { useState , useContext } from "react";
import app from "../base";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../Auth";
import NavLogo from "../Asset/NavLogo.png"



const FileUpload = ({history}) => {
  const { currentUser } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [base64, setBase64] = useState(null);
  
  const handleChange = (e) => {
    const file = e.target.files[0];
    const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validImageTypes.includes(file.type)) {
      console.log("Invalid file type. Please select an image file.");
      return;
    }
    setFile(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
        const base64 = fileReader.result;
        setBase64(base64);
    };
};

const handleUpload = async () => {
  if (!file) {
      console.log("No file selected. Please select a file before uploading.");
      return;
  }
  const db = app.firestore();
  const fileRef = db.collection("EIPCA").doc();
  try {
      await fileRef.set({ 
        userid: currentUser.uid,
        file: base64,
        status: "NotPredict",
        Result: "null",
        Time: "null"
      });
      alert("File uploaded successfully!");
      history.push("/history");
      window.location.reload(true)
  } catch (error) {
      console.log(error);
  }
};

  const Backhome = () => {
    history.push("/");
    window.location.reload(true)
  }


// Change file to Field for firestore

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light " >
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
            <li class="nav-item active" >
                <a class="nav-link" href="#"> Upload <span class="sr-only">(current)</span></a>
            </li>
          <li class="nav-item active">
            <a class="nav-link" href="./history">History </a>
        </li>
        <li class="nav-item ">
          <div style={{marginLeft: "1000px"}}> User: {currentUser.email}</div>
        </li>
      </ul>
    
      </div>
    </nav>
    <center>
      <h1>Upload ECG</h1>
      <div class="form-group col-sm-4 col-form-label2  mb-2 my-4" >
        <label for="formFileLg" class="form-label">Please choose your file then press upload</label>
        <input class="form-control form-control-lg col-sm-2 col-form-label2  mb-3" id="formFileLg" type="file" onChange={handleChange}/>
        <label> File format : JPG, PNG, JPEG only</label>
      </div>
      {file && <img src={base64} class="img-thumbnail img-fluid px-3 my-4" style={{maxHeight: "50%"}}/>} <br></br>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary px-6 mx-4" onClick={handleUpload} disabled={!file}>Upload</button> <br></br> 
      </div>
      
      <div>.</div>
      
      
    </center>
      
    </>
  );
};

export default withRouter(FileUpload);