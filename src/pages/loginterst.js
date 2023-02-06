<center>
      <h1 style={{padding: "30px"}}  ><img src={Logo} /></h1>
      <h1 calss='mb-2' >Log in</h1>
      <form onSubmit={handleLogin}>
  <div class="form-group col-sm-2 col-form-label2  mb-2  " >
    <label for="exampleInputEmail1" class='mb-2'>Email address</label>
    <input type="email" name="email" className="form-control col-xs-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  
    
  </div>
  <div class="form-group col-sm-2 col-form-label mb-2 ">
    <label for="exampleInputPassword1" class='mb-2'>Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-primary">Log In</button>
  <div>Don't have an account yet?</div>
  <a href="/signup">Create account here</a>
</form>
    </center>