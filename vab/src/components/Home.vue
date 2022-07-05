<template>
<div class="allgemein">
    
    <div class="header">
    <Header />
 
    <div class ="Login">
    
    <div class="sidebar1">

    <Sidebar/>
 
    
<router-view/>
    
    
    </div>   
    </div>

   
</div>


  </div>
  
</template>
<script>
import Header from './Header.vue';

import Sidebar from './Sidebar.vue'

import Login from './Login.vue'

import Register from './Register.vue'

import axios from 'axios' ;


export default {
    name:'Home',
    components:{
        Header,
        Sidebar,
        Login,
        Register,
      
 },

}
</script>
<style scoped>

.sidebar1 {
    display: grid;
    grid-template-columns: 0.5fr 12fr;
    background-color:lightgray;
    height: 90vh;
         
   }
      



</style>