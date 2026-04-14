<script setup lang="ts">
import About from "./components/About.vue";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Projects from "./components/Projects.vue";
</script>

<template>
  <Header />
  <main class="container">
    <Hero />
    <hr />
    <About />
    <hr />
    <Projects />
  </main>
</template>
