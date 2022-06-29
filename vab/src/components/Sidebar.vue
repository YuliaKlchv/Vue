<template>
  <div class="d-flex">
    <div class="a-navigation" v-if="activeColor">
      <ul
        class="navigation-list"
      >
        <router-link
          to="/Valet"
          custom
          v-slot="{ navigate, isActive, isExactActive, href }"
        >
          <li
            class="navigation-list-item"
            :class="[
              isActive && 'router-link-active active',
              isExactActive && 'router-link-exact-active',
            ]"
          >
            <a :href="href" @click="navigate">
                <span class="z-one-icon appkiticon icon-globe-outline"></span>
                <div class="links_under">Overview</div>
            </a>
          </li>

          
        </router-link>
           <router-link
          to="/Adr"
          custom
          v-slot="{ navigate, isActive, isExactActive, href }"
        >
          <li
            class="navigation-list-item"
            :class="[
              isActive && 'router-link-active active',
              isExactActive && 'router-link-exact-active',
            ]"
          >
            <a :href="href" @click="navigate">
                <span class="z-one-icon appkiticon icon-bar-chart-outline"></span>
                <div class="links_under">Data</div>
            </a>
          </li>
        </router-link>
      
   <router-link
          to="/Brain"
          custom
          v-slot="{ navigate, isActive, isExactActive, href }"
        >
          <li
            class="navigation-list-item"
            :class="[
              isActive && 'router-link-active active',
              isExactActive && 'router-link-exact-active',
            ]"
          >
            <a :href="href" @click="navigate">
                <span class="z-one-icon appkiticon icon-bar-chart-outline"></span>
                <div class="links_under">Reports</div>
            </a>
          </li>
        </router-link>

        <router-link
          to="/Login"
          custom
          v-slot="{ navigate, isActive, isExactActive, href }"
        >
          <li
            class="navigation-list-item"
            :class="[
              isActive && 'router-link-active active',
              isExactActive && 'router-link-exact-active',
            ]"
          >
            <a :href="href" @click="navigate">
                <span class="z-one-icon appkiticon icon-toggle-outline"></span>
                <div class="links_under">Services</div>
            </a>
          </li>
        </router-link>
          <router-link
          to="/Register"
          custom
          v-slot="{ navigate, isActive, isExactActive, href }"
        >
          <li
            class="navigation-list-item"
            :class="[
              isActive && 'router-link-active active',
              isExactActive && 'router-link-exact-active',
            ]"
          >
            <a :href="href" @click="navigate">
                <span class="z-one-icon appkiticon icon-setting-outline"></span>
                <div class="links_under">Setting</div>
            </a>
          </li>
        </router-link>
         
         </ul>
    </div>
    <div class="a-template-content a-bg-content"></div>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  data() {
    return {
      activeColor: "D25646",
      errorClass: "white",
    };
  },
};
</script>
<style scoped>
.a-navigation {
  /* background-color: #fff; */
  height: 90vh;
  width: 75px;
  position: relative;
  display: inline-block;
  z-index: 0;
  overflow-y: auto;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1px;
  text-decoration: none;
  cursor:pointer;
}

.side-btn {
  text-decoration: none;
}

.navigation-list-item {
  text-decoration: none;
          color: grey;
  
}

.router-link-active a{
  color: white;
  margin: auto;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

.links_under {
  text-decoration: none;


}

a{
  color: grey;
  text-decoration: none;
  list-style: none;

}
a:hover {
  text-decoration: none;
  list-style: none;


  }
  .navigation-list{
    text-decoration: none;
    list-style: none;
  }

</style>