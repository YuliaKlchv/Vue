<template>
 <div class="overview">
  <img :src="'data:image/jpg;base64,' + image" />

</div>
  
</template>
<script>
import axios from 'axios';

export default {
 name:'Brain',
  data() {
    return {
      image: null,
      
    }
  },
  async mounted() {
  const token = localStorage.getItem("token");
   this.image = (await axios.get('http://localhost:3000/images/brain.jpg', { headers: {"Authorization" : `Bearer ${token}`} })).data; 

    
  }
  // methods: {
  //   handleImage(e) {
  //     const selectedImage = e.target.files[0]; // get first file
  //     this.createBase64Image(selectedImage);
  //   },
  //   createBase64Image(fileObject) {
  //     const reader = new FileReader();

  //     reader.onload = (e) => {
  //       this.image = e.target.result;
  //       this.uploadImage();
  //     };
  //     reader.readAsDataURL(fileObject);
  //   },
  //   uploadImage() {
  //     const { image } = this;
  //     axios.post('http://127.0.0.1:8081/upload', { image })
  //       .then((response) => {
  //         this.remoteUrl = response.data.url;
  //       })
  //       .catch((err) => {
  //         return new Error(err.message);
  //       })
  //   }
  // },
}
  
</script>
<style scoped>

  .overview {
    display: block;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  margin:50px;

  
  }

.text {
  background-color: transparent;
  color:black;
  height: auto;
  padding: 25px;
  width:600px;
  margin: auto;
  font-size:200px;
  text-align: center;
  justify-content: center;
  
}


</style>

