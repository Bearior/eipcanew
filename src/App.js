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
import Aitest from "./pages/AItest"

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
        </div>
      </Router>
    </AuthProvider>
  );
};


export default App;
