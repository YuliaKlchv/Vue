<template>
  <div class="adr">
    <div class="text">
      <img :src="'data:image/jpg;base64,' + image" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Adr",
  data() {
    return {
      image: null,
    };
  },
  async mounted() {
    // const token = localStorage.getItem("token");
    this.image = (
      await axios.get("http://localhost:3000/images/Adr.jpg",
      //  {
      //   headers: { Authorization: `Bearer ${token}` },
      // }
      )
    ).data;
  },
};
</script>
<style scoped>
.adr {
  display: block;
  height: 90vh;
}

p {
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  color: black;
  font-size: 200px;
  text-align: CENTER;
}
</style>