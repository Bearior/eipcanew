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
    <center>
  <header className="p-5 bg-gray mb-5 my-5">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <h1>ตัวอย่างรูปแบบภาพที่ใช้ UPLOAD</h1>
          
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </header>{" "}
  </center>
  <header id="header" className="">
    <div className="container ">
      <div className="row">
        <div className="col-lg-6 col-xl-5">
          <div className="bg-gray " style={{padding: "30px", borderRadius: "10px"}}>
              <h1 className="h1-large">
                ตัวอย่างภาพที่ใช้ Upload <br />
              </h1>
                <label for="formFileLg" class="form-label " style={{fontSize: "20px"}}>1. ภาพกราฟคลื่นไฟฟ้าหัวใจแบบ 12 lead <br></br>2. ภาพจำเป็นต้องเห็นครบทุก node ครบถ้วน ชัดเจน <br></br> 3. ภาพต้องเป็นแนวนอนขนาดอัตราส่วน <br/> ความกว้างต่อความยาวประมาณ 16 ต่อ 9 </label>          
             </div>        
           </div>     
          <div className="col-lg-6 col-xl-7">
            <div>
              <img src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/254616585_239356464849930_7414990640685496393_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFIfgCZe04E6x4HouZrjQ6BNFOG7FztNis0U4bsXO02K8sjorldhNlS670rwueSU-QwyK9p6uQjszVh5tUk1pkN&_nc_ohc=lQO1SKiNmoQAX-eVFWs&_nc_ht=scontent.fcnx1-1.fna&oh=03_AdTRS9ulqj8W1JtsZTb4t07D01J8JtIwyTkeAA1mgVPPnw&oe=6437B8D8" class="" style={{width: "85%" , borderRadius: "10px"}} /> <br></br>
            </div>
        </div>
      </div>
    </div>
  </header>
    <center>
  <a  className="btn-solid-lg my-4" href="#upload">
              ตรวจด้วย EIPCA
  </a>
    </center>
    
 
  

  

<div id="upload">
  <header className="p-4 bg-gray mb-5 " style={{marginTop: "5%"}}> 
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <h1> UPLOAD</h1>
          
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </header>{" "}
  <header id="header" className="">
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
</div>


  
 
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  
  {/* Footer */}
  <div className="footer bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="footer-col first">
            <h6>เกี่ยวกับ EIPCA</h6>
            <p className="p-small">
              EIPCA ย่อมาจาก Electrocardiogram Interpretation Pattern for
              Symptom Predictions of Arrythmia. หรือ
              โปรแกรมเพื่อช่วยคัดกรองภาวะหัวใจวายเฉียบพลัน
              <br />
              (โรคใหลตาย)
              อันเนื่องมาจากภาวะหัวใจเต้นผิดจังหวะจากกราฟคลื่นไฟฟ้าหัวใจด้วยปัญญาประดิษฐ์
            </p>
          </div>{" "}
          {/* end of footer-col */}
          <div className="footer-col second">
            <h6>ติดต่อเรา</h6>
            <ul className="list-unstyled li-space-lg p-small">
              <p>
                <i className="fa fa-map-marker-alt mr-2" />
                EIPCA Team 
              </p>
              <p>
                <i className="fa fa-phone-alt mr-2" />
                093-2789556 , 081-2895915 , 065-3595514
              </p>
              <p>
                <i className="fa fa-envelope mr-2" />
                EIPCA@gmail.com
              </p>
            </ul>
          </div>{" "}
          {/* end of footer-col */}
          <div className="footer-col third">
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-facebook-f fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-twitter fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-pinterest-p fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-instagram fa-stack-1x" />
              </a>
            </span>
            <p className="p-small">
              We would love to hear from you{" "}
              <a href="">
                <strong>EIPCA@gmail.com</strong>
              </a>
            </p>
          </div>{" "}
          {/* end of footer-col */}
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of footer */}
      
    </>
  );
};

export default withRouter(FileUpload);