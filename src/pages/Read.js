import React from "react";
import { useContext,} from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../Auth.js";
import app from "../base";
import "../App.css";
import "../css/bootstrap.css"
import "../css/styles.css"
import Logo from "../images/logo text.png" 
import Logo2 from "../images/logo pic.png" 

const Read = ({history}) => {

const { currentUser } = useContext(AuthContext);

const Signout = () => {
        app.auth().signOut();
        window.location.reload(true)
        history.push('/login')
      };
  


  return (
    
    <>
    <nav className="navbar navbar-expand-lg fixed-top navbar-light">
      <div className="container">
      {/* Text Logo - Use this if you don't have a graphic logo */}
      {/* <a class="navbar-brand logo-text page-scroll" href="index.html">Viso</a> */}
      {/* Image Logo */}
      <a className="navbar-brand logo-image" href="/">
        <img src= {Logo}  />
      </a>
      <button
        className="navbar-toggler p-0 border-0"
        type="button"
        data-toggle="offcanvas"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="navbar-collapse offcanvas-collapse"
        id="navbarsExampleDefault"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#jobPanel">
              บริการ<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              เกี่ยวกับเรา
            </a>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdown01"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Drop
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <a className="dropdown-item page-scroll" href="services.html">
                Job Details
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item page-scroll" href="terms.html">
                Terms Conditions
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item page-scroll" href="privacy.html">
                Privacy Policy
              </a>
            </div>
          </li> */}
          <li className="nav-item">
            <a className="nav-link " href="/Login">
              เข้าสู่ระบบ
            </a>
          </li>
          <li className="nav-item">
          <a class="nav-link" style={{color: "red"}} href="#" onClick={Signout} >Sign out </a>
          </li>
        </ul>
        <span className="nav-item social-icons">
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
        </span>
      </div>{" "}
      {/* end of navbar-collapse */}
    </div>{" "}
    {/* end of container */}
  </nav>{" "}
  <header className="ex-header bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <h1>Result from EIPCA</h1>
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </header>{" "}
  {/* end of ex-header */}
  {/* end of header */}
  {/* Basic */}
  <div className="ex-basic-1 pt-5 pb-4">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <div className="text-box mt-5">
            <p>
              <strong>Atrial fibrillation (AF or A-fib):</strong> is the most
              common cardiac arrhymia (heart rhythm disorder). It may cause no
              sympthoms, but it is often associated with palpitations, fainting,
              chest pain, or congestive heart failure. However, in some people
              atrial fibrillation is caused by otherwise idiopathic or benign
              conditions. The incidence and prevalence of AF is increasing and
              lifetime risk over the age of 40 years is ~25%.
            </p>
          </div>{" "}
          {/* end of text-box */}
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of ex-basic-1 */}
  {/* end of basic */}
  {/* Basic */}
  <div className="ex-basic-1 pt-4">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <h2 className="mb-3">Cause</h2>
          <div className="header8" /> <div className="header9" />
          <br />
          <br />
          <p className="mb-4">
            AF is linked to several cardiac cause, but may occur in otherwise
            normal hearts. known associations include:
          </p>
          <ul className="list-unstyled li-space-lg mb-5">
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">
                Hypertension (High blood pressure)
              </div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">
                {" "}
                Primary heart diseases including coronary artery disease, mitral
                stenosis (e.g., due to rheumatic heart disease or mitral valve
                prolapse), mitral regurgitation, hypertrophic cardiomyopathy
                (HCM), pericarditis, congenital heart disease, previous heart
                surgery
              </div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">
                {" "}
                Lung diseases (such as pneumonia, lung cancer, pulmonary
                embolism, sarcoidosis)
              </div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">
                {" "}
                Excessive alcohol consumption (“binge drinking” or “holiday
                heart syndrome”). Even otherwise healthy middle-aged women who
                consumed more than 2 drinks daily were 60% more likely to
                develop AF.
              </div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">Hyperthyroidism</div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">
                Dual-chamber pacemakers in the presence of normal
                atrioventricular conduction.
              </div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body">
                A family history of AF may increase the risk of AF. A study of
                more than 2,200 AF patients found that 30 percent had parents
                with AF. Various genetic mutations may be responsible.
              </div>
            </li>
          </ul>
          <h2 className="mb-3">picture</h2>
          <div className="header10" /> <div className="header11" />
          <br />
          <br />
          <img
            src="https://edhub.ama-assn.org/ImageLibrary/CourseImages/223/jcg190010f1.png"
            weight="70px"
          />
          <p className="mb-4">
            AF may be identified clinically when taking a pulse, and the
            presence of AF can be confirmed with an electrocardiogram (ECG or
            EKG) which demonstrates the absence of P waves together with an
            irregular ventricular rate. In AF, the normal regular electrical
            impulses generated by the sinoatrial node are overwhelmed by
            disorganized electrical impulses usually originating in the roots of
            the pulmonary veins, leading to irregular conduction of ventricles
            impulses which generate the heartbeat. AF may occur in episodes
            lasting from minutes to days (“paroxysmal”), or be permanent in
            nature. A number of medical conditions increase the risk of AF,
            particularly mitral stenosis (narrowing of the mitral valve of the
            heart).The risk of stroke is increased 5-fold in individuals with
            atrial fibrillation. The degree of increase can be substantial,
            depending on the presence of additional risk factors (such as high
            blood pressure). Atrial fibrillation may be treated with medications
            to either slow the heart rate to a normal range (“rate control”) or
            revert the heart rhythm to normal (“rhythm control”). Synchronized
            electrical cardioversion can be used to convert AF to a normal heart
            rhythm. Surgical and catheter-based ablation may be used to prevent
            recurrence of AF in certain individuals. Depending on the risk of
            stroke and systemic embolism, people with AF may use anticoagulants
            such as warfarin, which substantially reduces the risk but may
            increase the risk of major bleeding, mainly in geriatric patients.
            The prevalence of AF in a population increases with age, with 8% of
            people over 80 having AF. Chronic AF leads to a small increase in
            the risk of death.
          </p>
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of ex-basic-1 */}
  {/* end of basic */}
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
                The Prince Royal Collage, Thailand
              </p>
              <p>
                <i className="fa fa-phone-alt mr-2" />
                0-5324-2038, 0-5324-2550
              </p>
              <p>
                <i className="fa fa-envelope mr-2" />
                prccontact@prc.ac.th
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
                <strong>prccontact@prc.ca.th</strong>
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
  {/* end of footer */}
  {/* Copyright */}
  <div className="copyright bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* enf of row */}
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of copyright */}
  {/* end of copyright */}
  {/* Scripts */}
  {/* jQuery for Bootstrap's JavaScript plugins */}
  {/* Bootstrap framework */}
  {/* jQuery Easing for smooth scrolling between anchors */}
  {/* Swiper for image and text sliders */}
  {/* Magnific Popup for lightboxes */}
  {/* Morphtext rotating text in the header */}
  {/* Isotope for filter */}
  {/* Custom scripts */}
  
   </>
  );
};

export default withRouter(Read);