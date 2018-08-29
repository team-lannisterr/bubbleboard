import React, {Component} from 'react';
{/* <a className="google-btn" href="/auth/google"><img src="https://auth.blockspring.com/assets/google-oauth-dark-475fe1c3fbaec72b36abbdd2ff36667d46769c7cef1db6a3b4723a968b86da2a.png" /></a> */}

const Login = (props) => {

//User login. 
  return (
         
         <div class="user-login">
            <form action="" method="get" class="form-login">
                <input type="text" name="username" id="username-login" />
                <input type="text" name="password" id="password-login" />
                <button>OAUTH</button>
            </form>
          </div>
  )
}

export default Login;