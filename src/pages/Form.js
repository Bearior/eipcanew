import React, { useState , useContext, useEffect } from "react";
import app from "../base";
import { withRouter, Redirect} from "react-router-dom";
import { AuthContext } from "../Auth";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../images/logo text.png" 


export const Forms = ({history}) => {
  const { currentUser } = useContext(AuthContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);


  const questions = [
    {
      img: "https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.15752-9/333301937_871057373967477_8401433292782439493_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHsjm292PVK_pdZbShZ9uPPbZcbuQhSahxtlxu5CFJqHCysEEOBJ4f3dOsm3jGtqnJjFlmDnGhm0Mcc28QjH91J&_nc_ohc=7DNxjiAjJb0AX-GkEE0&_nc_ht=scontent.fbkk8-4.fna&oh=03_AdQ_zh_jGBqqYnapDfARNZvhlkxcHVoylIcvM23iKFhQ_g&oe=64327257",
      question: "เพศหญิง อายุมากกว่า 55 ปี / เพศชาย อายุมากกว่า 45 ปี",
      answer: "yes",
      page: "1/12"
    },
    {
      img: "https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.15752-9/334986462_739286384514196_6051614234258219856_n.webp?stp=dst-webp&_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEQwNnr8JaaSGjCozaS58n3O9ngGQ0GB1k72eAZDQYHWZfdZqq_4KC7kI-lfbgyAvY81xDqTuoOxDOflS2pHD_6&_nc_ohc=W52s1C2AYEkAX_spDOn&_nc_ht=scontent.fbkk12-3.fna&oh=03_AdQ9qD5I0YGfU7_r3GgP9L2FP71KEUEVDnhBlKpCJvJY5w&oe=643281F2",
      question: "คุณสูบบุหรี่หรือได้รับควันบุหรี่อย่างต่อเนื่อง/เลิกบุหรี่ไม่เกิน 2 ปี",
      answer: "yes",
      page: "2/12"
    },
    {
      img: "https://i.pinimg.com/564x/b2/22/59/b22259091bffc1b7fe6fdf121766c59c.jpg",
      question: "มีความดันโลหิตสูงมากกว่า 140/90 มิลลิเมตรปรอท",
      answer: "yes",
      page: "3/12"
    },
    {
      img: "https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.15752-9/333042131_173767618765109_3764185731697184925_n.webp?stp=dst-webp&_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEn_TWE53qOt4S5FDrrSNQmxBDe-7w2YvHEEN77vDZi8XHGdfoOJ8b9AYtYJz-aHFeMkjjR2DVwjhK0NfqgDBst&_nc_ohc=1ZAqCyFUessAX_N_d2V&_nc_ht=scontent.fbkk8-2.fna&oh=03_AdTfvS79C7PZP0RB4hyr-lz91r4uIAdKzjM8RPqukMb43Q&oe=64327A88",
      question: "มีค่าไขมันในเลือดสูงผิดปกติ (ค่าโคเลสเตอรอล มากกว่า 200 มิลลิกรัมเปอร์เซนต์)",
      answer: "yes",
      page: "4/12"
    },
    {
      img: "https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.15752-9/335093796_172149078940769_1718009106834152868_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeECllwxO26ojjA1SxStP0t1hPqn4gC6_YmE-qfiALr9ib4Pf_9qsYvn2tRaXGWV0kuGV89xSlfICp-QoUZDXEIP&_nc_ohc=7kWKNYg0m70AX_PWzGE&_nc_ht=scontent.fbkk13-2.fna&oh=03_AdQdJLEJML7t-MzWmb6jLzS43HrhWr7Weg8evvcoiIPkMQ&oe=643278AA",
      question: "ขาดการออกกำลังกายหรือออกกำลังกายน้อยกว่า 3 ครั้ง/สัปดาห์ (30 นาที/ครั้ง)",
      answer: "yes",
      page: "5/12"
    },
    {
      img: "https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.15752-9/281344162_999156210741061_6036735971979908580_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEqgikxFqi9ROOJA2XSrEeeqmONiNa1y5eqY42I1rXLl4b3JTkyP2FZXOLLEp6OyCfCCrBTkTAD-eY4e7MCYITk&_nc_ohc=LycIdG7tMdgAX_BDixW&_nc_ht=scontent.fbkk12-4.fna&oh=03_AdQtezsTI3FHYwStdrgiGUGZi0K_mSvSqTtKetHf3vcO6Q&oe=64329200",
      question: "น้ำหนักเกินมาตรฐาน (ดรรชนีมวลกายมากกว่า 25 kg/m^2) อ้วนลงพุง รอบเอวมากกว่า ชาย 90 ซม.(36 นิ้ว)/หญิง 80 ซม. (32 นิ้ว)",
      answer: "yes",
      page: "6/12"
    },
    {
      img: "https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.15752-9/335014285_2117107062013525_4151653943544605381_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEmdHiS3HC3u0NpbZuAXuLY8eAqboKaq1Lx4CpugpqrUsN0FrMcQfvTosUjpcZw2azN35Bs_6br27zl6scg32Kp&_nc_ohc=T7mW3VZjm2QAX-kP5qM&_nc_ht=scontent.fbkk12-3.fna&oh=03_AdTsfjAkrgTyYW9unHeGmdUkuckwy_8vOAS5_RRPaLOmdw&oe=64328EC8",
      question: "บุคคลใคครอบครัวสายตรงมีประวัติเป็นโรคหลอดเลือดหัวใจตีบ",
      answer: "yes",
      page: "7/12"
    },
    {
      img: "https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.15752-9/335608766_567615615322374_5614366382838808_n.webp?stp=dst-webp&_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFc0Qp_YTRLJgVbA55NdHCwNFXNX_ZH8bw0Vc1f9kfxvIEMWAGDFKVoSHJvp5yGzcNDrplP4PiK3k3_c4E69qqo&_nc_ohc=zRSNa1MKwv8AX-8MG_G&_nc_ht=scontent.fbkk12-2.fna&oh=03_AdQZZjPW2XRmaGtKXDPJPSoaqAqfCJTZyKolZDa-8N4mLQ&oe=643296E3",
      question: "เป็นโรคเบาหวานหรือระดับน้ำตาลในเลือดผิดปกติมากกว่า 100 mg/dl",
      answer: "yes",
      page: "8/12"
    },
    {
      img: "https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.15752-9/333166363_3503188990001761_8060815727338766795_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH7WYMrxTYaJWWeRU9pcBqbFbIWszL-v90VshazMv6_3VCuSfwa0spEBApnZmuXz_Kl0XEbBsFefXt2OaU5tDFc&_nc_ohc=h8XwDYdCSJ0AX8rjK-E&_nc_ht=scontent.fbkk12-2.fna&oh=03_AdTDwetyNBZ94st_N7PrN9-X93qq2_JBngfR0D-lf0YJhA&oe=64326823",
      question: "มีภาวะตึงเครียดอยู่เสมอ",
      answer: "yes",
      page: "9/12"
    },
    {
      img: "https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.15752-9/335501890_174040032056038_49732088598371523_n.webp?stp=dst-webp&_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeG2fmjTsEyrQrcEnbHQOSxJUbn9MgoyZXZRuf0yCjJldvHtRok5_oDeGhTmxE45T5sPUL3Y5Jy1hnnNhbs4YQlC&_nc_ohc=irHobBY6c-sAX_EqTfj&_nc_ht=scontent.fbkk9-2.fna&oh=03_AdRzJx7jOzVWcfyc1o7gXmW5Y7nJHRHr0QZFHFul9s6f5g&oe=643298D2",
      question: "รู้สึกเหนื่อยง่าย เหนื่อยผิดปกติขณะออกกำลังกาย หรือเมื่อออกแรง / เดินขึ้นบันได 2 ชั้น",
      answer: "yes",
      page: "10/12"
    },
    {
      img: "https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.15752-9/335593975_1267818680814831_1523407136968612921_n.webp?stp=dst-webp&_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHR6nNhAcVrMz-junBcJdOLdRRHN9N3hLZ1FEc303eEtliKbQWTRJutTOYa2ABLVE2nn1BhDOpzRWQJYKjBvZy4&_nc_ohc=zW_paFw_mbEAX-iacdC&_nc_ht=scontent.fbkk13-2.fna&oh=03_AdToXhSSXeTDhazUqRWxWc0x_4j5IhmdwUj1VMtYbKlZ6Q&oe=6432730E",
      question: "มีอาการจุกเสียด แน่นหน้าอกหรือบริเวณลิ้นปี่ เมื่อออกแรง",
      answer: "yes",
      page: "11/12"
    },
    {
      img: "https://scontent.fbkk13-3.fna.fbcdn.net/v/t1.15752-9/335506404_528303685989125_5338901394877583648_n.webp?stp=dst-webp&_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFDkk29BF9XdSLQ4MwMSD0BTNuHwwm5FDlM24fDCbkUOfefq8hukhfVE8RGA5KbzqKMs3XttbPKd09EPlvLHf9Y&_nc_ohc=4YzvRyQZbtUAX_3Zwet&_nc_ht=scontent.fbkk13-3.fna&oh=03_AdRRnyFDyNtwzdtQ8EJE0fFOO_iE7gehrRgPwW1mB2AP1A&oe=64326CC3",
      question: "มีอาการใจเต้น ใจสั่น เป็นลม หน้ามืดหรือหมดสติโดยไม่ทราบสาเหตุ",
      answer: "yes",
      page: "12/12"
    },
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const renderQuiz = () => {
    if (currentQuestion === questions.length) {
      // Quiz completed, show results
      const correctAnswers = answers.filter(
        (answer, index) => answer === questions[index].answer
      );
      let result;
      let resultimg;
      if (correctAnswers.length > 10) {
        result = "คุณมีความเสี่ยงสูงที่จะเป็นโรคหัวใจ!";
        resultimg = "https://media2.giphy.com/media/5ULFCfpKmsM529rkwR/giphy.gif?cid=ecf05e4728xzz2ftvd6m4hmdc0z1ac4f2ae14q7hxojw4nrw&rid=giphy.gif&ct=g"
      } else if (correctAnswers.length > 8) {
        result = "คุณมีความเสี่ยงปานกลางที่จะเป็นโรคหัวใจ!";
        resultimg = "https://media4.giphy.com/media/T9YRoIuBJchO7u8a6F/giphy.gif?cid=ecf05e47b3hvifkkcw5uoo9qp0scy29i0rhb31uvab5r9qq0&rid=giphy.gif&ct=g"
      } else if (correctAnswers.length > 5) {
        result = "คุณมีความเสี่ยงต่ำที่จะเป็นโรคหัวใจ!";
        resultimg = "https://media4.giphy.com/media/T9YRoIuBJchO7u8a6F/giphy.gif?cid=ecf05e47b3hvifkkcw5uoo9qp0scy29i0rhb31uvab5r9qq0&rid=giphy.gif&ct=g"
      } else {
        result = "คุณไม่มีความเสี่ยงที่จะเป็นโรคหัวใจ";
        resultimg = "https://media0.giphy.com/media/jGR23trwtcmXvK9AMy/giphy.gif?cid=ecf05e47bkemwemycxmcgxxhjtjpj9pli6q42lxo6lk74t17&rid=giphy.gif&ct=g"
      }
      console.log(result)

      
      return(
      
      <div>
        <img src={resultimg} style={{width: "20%" , marginTop: "1%" , borderRadius: "10px"}}/>
        <h2 style={{marginTop : "1%" ,padding: "50px", borderRadius: "10px"}}  className="bg-gray">{result}</h2>
        <a  className="btn-solid-lg page-scroll " style={{marginTop : "3%" }} href="/upload">
              ตรวจสอบคลื่นไฟฟ้าหัวใจด้วย AI
        </a>
        
      </div>
     
      
      
      );
        

    } else {
      // Show current question
      const question = questions[currentQuestion];
      return (
        
        
        <div style={{marginTop: "20px",padding: "30px", borderRadius: "10px"}} className="bg-gray">
          <div>
          <a  className="btn-solid-lg mb-4" href="" style={{marginLeft: "60%"}} href="/upload">
              ข้ามแบบประเมิน
          </a>
          </div>
          <h2>{question.page}</h2>
          <img style={{marginBottom: "3%" , borderRadius: "10px" , width: "30%"}} src = {question.img}/>
          <h2>{question.question}</h2>
          <button className="mx-3 btn-solid-lg" onClick={() => handleAnswer("yes")}>ใช่</button>
          <button className="btn-solid-lg" onClick={() => handleAnswer("no")}>ไม่ใช่</button>
        </div>
        
        
        
      );
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
   {/* Header */}
  <header className="ex-header bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <h1>แบบประเมินความเสี่ยงการเกิดโรคหัวใจ </h1>
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </header>{" "}
    
    <div>{renderQuiz()}</div>
    
    
</center>

      
    </>
  );
};

export default withRouter(Forms);


