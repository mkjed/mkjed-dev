<script setup lang="ts">
interface Links {
  title: string;
  url: string;
}

const navLinks: Links[] = [
  {
    title: "about",
    url: "#about",
  },
  {
    title: "projects",
    url: "#projects",
  },
];
</script>

<template>
  <header class="main-header">
    <nav class="navbar">
      <NuxtLink class="nLink" to="/" aria-label="Home">mkjed</NuxtLink>
      <ul class="navi">
        <li v-for="link in navLinks" :key="link.title">
          <NuxtLink class="nLink" :to="link.url" external>{{
            link.title
          }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.main-header {
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 0 1rem;
  background-color: color-mix(in srgb, var(--background), transparent 10%);
  backdrop-filter: blur(8px);
}

.navbar {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navi {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}
</style>
