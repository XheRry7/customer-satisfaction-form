<template>
  <div>
    <div id="nav" v-if="$store.state.user">
      <CNavbar color-scheme="light" class="bg-light" id="navbar">
        <CContainer fluid>
          <CNavbarBrand href="#">EnFM</CNavbarBrand>
          <CForm class="d-flex">
            <CButton
              type="submit"
              color="success"
              variant="outline"
              @click="$store.dispatch('logout')"
              >Logout</CButton
            >
          </CForm>
        </CContainer>
      </CNavbar>
    </div>
    <router-view />
  </div>
</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
import "@coreui/coreui/dist/css/coreui.min.css";
import { CNavbar, CNavbarBrand, CContainer, CForm, CButton } from "@coreui/vue";

export default {
  setup() {
    const store = useStore();
    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
  },
  components: {
    CNavbar,
    CNavbarBrand,
    CContainer,
    CForm,
    CButton,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#navbar {
  padding: 10px 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
