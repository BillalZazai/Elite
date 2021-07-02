<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">
        <img src="@/assets/tire.gif" class="anim" alt="tire animation" />
        <span class="title">Tire Change</span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="right-nav">
          <b-nav-item right to="/">Home</b-nav-item>
          <b-nav-item right to="/about">About</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ms-auto">
          <b-nav-item right to="/sign-in">
            <b-button variant="success"> Sign-In </b-button>
          </b-nav-item>
          <b-nav-item right to="/sign-up">
            <b-button variant="outline-light"> Sign-Up </b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: function () {
    return { inc: 0 };
  },
  methods: {},
};
</script>

<style scoped>
.anim {
  height: 10vh;
}
.navbar {
  background-color: #010303 !important;
  box-shadow: 0px 5px 20px rgba(1, 1, 1, 1);
  border-radius: 10px;
}

.navbar-brand {
  margin-left: 10px;
}

#nav a {
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  color: white;
  -ms-flex-align: end;
  font-size: 1.5rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav a:hover {
  text-decoration: underline;
  text-decoration-color: #42b983;
}
.title {
  font-family: "Racing Sans One", cursive;
  display: inline-flex;
  align-content: center;
  text-align: center;
  font-size: 3vh;
}
</style>



