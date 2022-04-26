<template>
  <nav>
    <div class="nav_logo">
      <h2 class="nav_logo">La Fountaine Bake Factory</h2>
    </div>
    <div class="nav_links">
      <router-link to="/" class="nav_link">Inicio</router-link>
      <router-link to="/sabores" class="nav_link">Sabores</router-link>
      <router-link to="/adornos" class="nav_link">Adornos</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap");

*{
  font-family: "Noto Serif", serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  min-height: 8vh;
  width: 100%;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #f6ecdd;
  color: #524942;
}

.nav_logo {
  color: #524942;
  font-size: 25px;
}

.nav_links {
  display: flex;
  justify-content: space-around;
  width: 50%;
}

.nav_links a{
  color: #524942;
  text-decoration: none;
  font-size: 15px;
}

.nav_links a:hover {
  color: #E1C699;
}

.nav_links li {
  list-style-type: none;
}
</style>
