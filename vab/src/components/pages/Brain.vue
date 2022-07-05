<template>
  <div class="overview">
    <img :src="'data:image/jpg;base64,' + image" />
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Brain",
  data() {
    return {
      image: null,
    };
  },
  async mounted() {
    // const token = localStorage.getItem("token");
    this.image = (
      await axios.get("http://localhost:3000/images/brain.jpg",
      //  {
      //   headers: { Authorization: `Bearer ${token}` },
      // }
      )
    ).data;
  },
};
</script>
<style scoped>
.overview {
  display: block;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
  margin: 10px;
}

.text {
  background-color: transparent;
  color: black;
  height: auto;
  padding: 25px;
  width: 600px;
  margin: auto;
  font-size: 200px;
  text-align: center;
  justify-content: center;
}
</style>

