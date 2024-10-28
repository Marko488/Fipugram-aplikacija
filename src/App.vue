<template>
<div id="app">

<nav id="nav" class="navbar bg-body-tertiary navbar-expand-lg">
    <a class="navbar-brand" href="#">
<img src="@/assets/TAXI.jpeg" alt="Logo" style="width: 70px; height: 30px !important;" class="ml-3 d-inline-block align-top">
    </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
    <router-link to="/" class="nav-link">Home</router-link>

        </li>

        <li>
    <router-link to="/login" class="nav-link">Login</router-link> 

        </li>
<li>
     <router-link to="/signup" class="nav-link">Signup</router-link>
</li>
      </ul>
       <form class="d-flex" role="search">
        <input v-model="store.pojam" class="form-control me-2" type="search" placeholder="Pretraga" aria-label="Search">
      </form>
</div>
  </nav>
  <div class="container">
  <router-view/>
  </div>
</div>
</template>

<script>
import store from "@/store";

export default {
  name: "app",
  data(){
    return {
      store,
    }
  }
};

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
background-color: white !important;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
