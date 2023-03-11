import React, { useCallback } from "react";
import { withRouter, Redirect } from "react-router-dom";
import app from "../base";
import "../App.css";
import Logo from "../Asset/Logo.png"

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password, confirmPassword, username } = event.target.elements;
    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match");
      return;
    }
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      const user = app.auth().currentUser;
      await user.updateProfile({
        displayName: username.value
      });
      history.push("./Login");
      window.location.reload(true);
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <center>
      <h1><img src={Logo} class="mt-2" /></h1>
      <h1 class='mb-2'>Sign up</h1>
      <form onSubmit={handleSignUp}>
      <div class="form-group col-sm-2 col-form-label mb-2">
          <label for="exampleInputUsername1" class='mb-2'>Username</label>
          <input type="text" name="username" class="form-control" id="exampleInputUsername1" placeholder="Enter username" />
        </div>
        <div class="form-group col-sm-2 col-form-label2 mb-2">
          <label for="exampleInputEmail1" class='mb-2'>Email address</label>
          <input type="email" name="email" className="form-control col-xs-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        
        <div class="form-group col-sm-2 col-form-label mb-2">
          <label for="exampleInputPassword1" class='mb-2'>Password</label>
          <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-group col-sm-2 col-form-label mb-2">
          <label for="exampleInputPassword1" class='mb-2'>Confirm Password</label>
          <input type="password" name="confirmPassword" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
        </div>
        <button type="submit" class="btn btn-primary">Sign Up</button>
        <div>Already have an account?</div> <a href="/login">Log in here</a>
      </form>
    </center>
  );
};

export default withRouter(SignUp);