import React, { useState , useContext } from "react";
import app from "../base";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../Auth";
import NavLogo from "../Asset/NavLogo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../images/logo text.png" 
 import Logo2 from "../images/logo pic.png" 

const FileUpload = ({history}) => {
  const { currentUser } = useContext(AuthContext);
  const [file, setFile] = useState(null);
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
        console.log(base64)
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
        Time: "null",
        History: "NotHistoried"
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

  const Signout = () => {
    app.auth().signOut();
    history.push("/");
    window.location.reload(true)
  };


// Change file to Field for firestore

  return (
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

  <header id="header" className="header">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xl-5">
          <div className="bg-gray" style={{padding: "30px", borderRadius: "10px"}}>
              <h1 className="h1-large">
                Upload ECG <br />
              </h1>
                <label for="formFileLg" class="form-label">Please choose your file then press upload <br></br>(File format : JPG, PNG, JPEG only)</label>
                <input class="form-control form-control-lg col-form-label2  mb-3" id="formFileLg" type="file" onChange={handleChange}/>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn-solid-lg px-6 mx-4" onClick={handleUpload} disabled={!file}>Upload</button> <br></br> 
                </div>          
             </div>        
           </div>     
          <div className="col-lg-6 col-xl-7">
            <div className="" style={{maxHeight: "50%", minHeight: "50%"}}>
              <img src={file ? base64 : Logo2} class="img-thumbnail img-fluid px-3 my-4" /> <br></br>
            </div>
        
        </div>
        
      </div>
     
    </div>
  </header>
    {/* <center>
   
    
      <h1 className="mt-5">Upload ECG</h1>
      <div class="form-group col-sm-4 col-form-label2  mb-2 my-4" >
        <label for="formFileLg" class="form-label">Please choose your file then press upload</label>
        <input class="form-control form-control-lg col-form-label2  mb-3" id="formFileLg" type="file" onChange={handleChange}/>
        <label> File format : JPG, PNG, JPEG only</label>
      </div>
      {file && <img src={base64} class="img-thumbnail img-fluid px-3 my-4" style={{maxHeight: "50%"}}/>} <br></br>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary px-6 mx-4" onClick={handleUpload} disabled={!file}>Upload</button> <br></br> 
      </div>
      
      <div>.</div>
      
      
    </cente */}
      
    </>
  );
};

export default withRouter(FileUpload);