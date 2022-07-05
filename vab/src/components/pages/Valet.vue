<template>
  <div class="div_valet">
    <img :src="'data:image/jpg;base64,' + image" />
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Valet",
  data() {
    return {
      image: null,
    };
  },
  async mounted() {
    this.image = (
      await axios.get("http://localhost:3000/images/Valet.png"   
      )
    ).data;
  },
};
</script>
<style scoped>
.div_valet {
  display: flex;
  height: 90vh;
  width: 80vw;
}

p {
  width: 800px;
  height: 700px;
  margin: auto;
  padding: 20px;
  color: black;
  font-size: 200px;
  align-items: center;
  text-align: center;
  background: rgba(211, 211, 211, 0.74);
}
</style>