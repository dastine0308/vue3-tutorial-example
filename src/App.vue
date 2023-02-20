<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Vue3 Composition API - Example</h1>
      <nav>
        <RouterLink to="/lifecycleHook">01_LifecycleHook</RouterLink>
        <RouterLink to="/watchEffect">02-2_WatchEffect</RouterLink>
        <RouterLink to="/asyncComponent">07_AsyncComponent</RouterLink>
        <RouterLink to="/transition">08-1_Transition</RouterLink>
        <RouterLink to="/teleport">08-4_Teleport</RouterLink>
        <RouterLink to="/suspense">08-5_Suspense</RouterLink>
      </nav>
    </div>
  </header>

  <div class="example-content">
    <RouterView />
  </div>
 
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  /* width: 100%; */
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

.example-content {
  margin: 20px;
  border: 1px solid;
  padding: 20px;
  min-height: 290px;
}
</style>
