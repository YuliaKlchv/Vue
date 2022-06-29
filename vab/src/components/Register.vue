<template>
<div class="register-wrapper">
    <div class="register" id="register" v-if="showModal=true">
          <div class="register-logo">
            <span class="a-pwc-logo-grid a-lg" ></span>
       <div v-if="message" class="alert1">
          {{message}}
          </div>
            <div class="application-name">REGISTER</div>
         <div class="user-fields" >
            <div class="a-d-flex a-flex-column a-textarea-box" >
        <input name="username" v-model="username" placeholder="Username" required />
      </div>
      <div>
        <input name="password" v-model="password" placeholder="Password" type="password" required v-on:blur="validatePassword"/>
      </div>
               <div><span v-if="msg.password" class="alert1">{{msg.password}}</span></div>
      <div>
       <input name="password" v-model="password_confirm" type="password" placeholder="Confirm Password" required v-on:blur="passwordCheck" >
          <div>
        <input name="name" v-model="name" placeholder="name" required>
      </div>
      <div>
        <input name="email" v-model="email" placeholder="E-mail" required  >
        <div><span v-if="msg.email" class="alert1">{{msg.email}}</span></div>
                      <div><span v-if="msg.password_confirm" class="alert1">{{msg.password_confirm}}</span></div>
      </div>
      </div>
      <div id="link_login" > 
               <button type="button" value="register" style="background-color:#D25646;height:40px;width:300px;color:white; margin-bottom:50px;" v-on:click="register"  >Register</button>
    <div  class="link1"> Already registered?  <router-link to ="/Login">Login here </router-link></div>

  </div>
  </div>
  </div>
  </div>
    </div>

</template>
<script>
import axios from 'axios'
import router from '../router/index'


export default {
  name: 'Register',

  data: function() {

    return {
      message:'',
      username: "",
      password: "",
      name: "",
      email: "",
      password_confirm:"",
      msg:[],
      showModal: true,
      disabled: [true, true]
    }
    },
    watch: {
      email(value) {
        this.email=value;
        this.validateEmail(value);
      },
      password(value){
      this.password = value;
      this.validatePassword(value);
    }

    },

  
  methods: {
       async register() {
      
       const response =axios.post('http://localhost:3000/Register',
     {username:this.username,password:this.password,password_confirm:this.password_confirm,name:this.name,email:this.email}, 
     
     ).then((response) => {
        console.log(response)  
          this.message= 'Registration done successfully';
          this.$router.push('./Login');

        })
    .catch((e) => {
      console.log(e.response.data);
      this.message="Registration is not completed!"

    })},

    validateEmail(value){
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
    {
      this.msg['email'] = '';
    } else{
      this.msg['email'] = 'Please enter a valid email address';
    } 
        
    },
    validatePassword(value){
      let difference = 6 - value.length;
      if (value.length<8) {
        this.msg['password'] = 'Must be min 6 characters! '+ difference + ' characters left' ;
        this.disabled = [this.disabled[1], true]
      } else {
         this.msg['password'] = '';
         this.disabled = [this.disabled[1], false]
      } 
        },
   passwordCheck(){
          if (this.password === this.password_confirm)
              {
     this.msg['password_confirm'] = '  '
          } else {
      this.msg['password_confirm'] = 'Password do not match'

    } 


   }   
      

  
    }
};
</script>
<style scoped>

#register {
    height:90vh;
    padding:40px;
    display: block;
    background:WHITE;
    margin: auto;
    text-align: center;
    border:2px solid grey;
  font-family: 'PwC Helvetica Neue',sans-serif;
}
 input {
  width: 400px;
  padding: 1.0rem 1.25rem 1.25rem;
  margin: 20px 20px 20px 5px;
  border: 1px solid #ccc;
  border-radius: 0.125rem;
  box-shadow: 0 0.0625rem 0.125rem 0.0625rem rgb(0 0 0 / 16%);
  background-color: var(--theme-color-light);
  line-height: 0;
  position: relative;
}

a {
    text-decoration: none;
  color:#D25646; 
 margin:5px;

}

.register-wrapper {
 width: 600px;
 margin: auto;
}
.application-name {
  margin:10px;
  font-size: 1.5rem;
}
.alert1{
  font-weight: 7px !important;
  color:#D25646;
  background-color:whitesmoke;
  padding:2px;
  width: 400px;
 margin:Auto

}


</style>