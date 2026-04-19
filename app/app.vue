<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
useSeoMeta({
  title: "Michael Jedrzejczyk | Junior Frontend Developer",
  ogTitle: "Michael Jedrzejczyk | Junior Frontend Developer",
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
  <main>
    <NuxtPage />
  </main>
  <Footer />
</template>
