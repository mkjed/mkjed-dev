<script setup lang="ts">
import About from "./components/About.vue";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Projects from "./components/Projects.vue";
useSeoMeta({
  title: "Michael Jedrzejczyk | Junior Web Developer",
  ogTitle: "Michael Jedrzejczyk | Junior Web Developer",
  description:
    "Portfolio von Michael, Junior Frontend Developer. Fokus auf moderne Webentwicklung. Schau dir meine Projekte und Skills an.",
  ogDescription:
    "Junior Frontend Developer. Fokus auf moderne Webentwicklung. Schau dir meine Projekte und Skills an.",
  ogImage: "https://mkjed.dev/og.webp",
  twitterCard: "summary_large_image",
});
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
