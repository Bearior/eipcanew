import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import FileUpload from "./pages/Fileupload";
import History from "./pages/History";
import Aitest from "./pages/AItest";
import About from "./pages/about";
import Brugada from "./pages/Brugada";
import Hardware from "./pages/Hardware";
import Read from "./pages/Read";
import Use from "./pages/Use";
import ECGs from "./pages/ECG"
import Data1 from "./pages/Data1"
import Data2 from "./pages/Data2"
import Data3 from "./pages/Data3"
import Data4 from "./pages/Data4"
import Form from "./pages/Form"
import Quiz from "./pages/Quiz"
import  SuggestionHealthy from "./pages/SuggestionHealthy"
import  SuggestionHospital from "./pages/SuggestionHospital"
import SuggestionBad from "./pages/SuggestionBad"
import  Hospital from "./pages/Hospital"
import HardwareHistory from "./pages/HardwareHistory"
import HardwareManual from "./pages/HardwareManual"


function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/upload" component={FileUpload} />
          <Route exact path="/History" component={History} />
          <Route exact path="/Aitest" component={Aitest} />
          <Route exact path="/about" component={About}/>
          <Route exact path="/Brugada" component={Brugada}/>
          <Route exact path="/Hardware" component={Hardware}/>
          <Route exact path="/Read" component={Read}/>
          <Route exact path="/HowtoUse" component={Use}/>
          <Route exact path="/ECGs" component={ECGs}/>
          <Route exact path="/Data1" component={Data1}/>
          <Route exact path="/Data2" component={Data2}/>
          <Route exact path="/Data3" component={Data3}/>
          <Route exact path="/Data4" component={Data4}/>
          <Route exact path="/Form" component={Form}/>
          <Route exact path="/Quiz" component={Quiz}/>
          <Route exact path="/SuggestionHealthy" component={SuggestionHealthy}/>
          <Route exact path="/SuggestionHospital" component={SuggestionHospital}/>
          <Route exact path="/Hospital" component={Hospital}/>
          <Route exact path="/HardwareHistory" component={HardwareHistory}/>
          <Route exact path="/HardwareManual" component={HardwareManual}/>
          
        </div>
      </Router>
    </AuthProvider>
  );
};


export default App;
