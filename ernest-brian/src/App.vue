<script setup>
import '../src/components/api-data.vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img
      alt="Doggo Pic"
      class="logo"
      src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/43022/dog-face-emoji-clipart-md.png"
      width="250"
      height="250"
      draggable="false"
    />

    <div class="wrapper">
      <HelloWorld msg="Dog Bite Info" />
      <nav>
        <RouterLink to="/" draggable="false">Home</RouterLink>
        <RouterLink to="/Gender" draggable="false">Dog Gender Info</RouterLink>
        <RouterLink to="/Borough" draggable="false">Borough Info</RouterLink>
        <RouterLink to="/Neuter" draggable="false">Neuter Info</RouterLink>
        <RouterLink to="/Breed" draggable="false">Dog Breed Info</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin-left: 10rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
