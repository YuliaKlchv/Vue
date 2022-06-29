<template>
<div class="login-wrapper">
    <div class="login" id="login">
        <div class="client-login">
            <div class="a-badge a-badge-warning pull-right">CLIENT LOGIN</div>
        </div>
        <div class="login-logo">
            <span class="a-pwc-logo-grid a-lg"></span>
        </div>
        <div class="application-name">Login</div>
        <div class="application-text">Hello. Great to see you again!</div>
        <div class="user-fields">
            <div class="a-d-flex a-flex-column a-textarea-box">
          <input type="text"  class="a-text-input" name="username" v-model="username" placeholder="PWC GUID" />
        <input type="password"  class="a-text-input" name="password" v-model="password" placeholder="PASSWORD" />
        <button class="a-btn a-btn-primary a-btn-xl login-btn" v-on:click ="login">LOGIN</button>

        <div v-if="error" class="alert">
          {{error}}
      
        </div>
        <div class="text-right a-textarea-footer">
                <div class="login-operation">
                    <label class="a-checkbox">
                    <input type="checkbox">
                    <span class="a-checkbox-mark">
                        <span class="appkiticon icon-check-mark-fill"></span>
                    </span>
                    <span class="a-checkbox-text">Remember me</span>
                    </label>
                    <div class="forgot-password-btn" tabindex="0"><router-link to ="/Register">Forget password?</router-link></div>
                </div>
                
                </div>
            </div>
       </div>
            </div>
</div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Login',
  data: function () {
    

    return {
      username: '',
      password: '',
      error: "",
      message:"Login is successful"
    }
  },
           
  methods: {
    
  login() {
    
     axios.post('http://localhost:3000/Login', 
     {username:this.username,password:this.password}, 
  ).then(res =>  {

    // TODO save the token to axios
     const token =res.data
    axios.get('http://localhost:3000/posts', { headers: {"Authorization" : `Bearer ${token}`} });
       this.$router.push("/Brain")



  }).catch((error) => {{
    console.error(error)
    this.error="Invalid Username /or Password";}
    // axios.defaults.withCredentials=true;
    
  })
 
    },
   

  }
}
</script>

<style scoped>
.login-wrapper {
      height:65vh;
    padding:30px;
    display: block;
    background:white;
    margin: auto;
    text-align: center;
     width:500px;
   
    border:1px solid grey;
    }
 .alert{
   margin:10px;
    color: black;
   padding: 10px;
   background-color: var(--theme-color-light);
   font-size: 14px;
   width: auto;
     
   
 }   

 input[type=text], input[type=password] {
  width: 100%;
  margin: 30px 0;
  display: inline-block;
  border: 1px solid #ccc;
   border-radius: 0.125rem;
    box-shadow: 0 0.0625rem 0.125rem 0.0625rem rgb(0 0 0 / 16%);
    background-color: var(--theme-color-light);
    line-height: 0;
    padding: 2.5rem 1.25rem 1.25rem;
    position: relative;

}


a {
text-decoration: none;
color:#D25646;

}
.forgot-password-btn{
float:left;

 
}
.login-logo{
  margin-left:110px;
}
.a-checkbox{
margin: 10px;
float:left;


}
.application-name{
  font-size: 1.5rem;
  margin: 10px;
    font-family: 'PwC Helvetica Neue',sans-serif;

}
.login-operation{
display: grid;
float: left;
}

</style>
