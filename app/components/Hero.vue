<script setup lang="ts">
import { ref } from "vue";
const linkList = ref([
  {
    url: "mailto:michael@mkjed.dev",
    title: "contact",
  },
  {
    url: "https://www.linkedin.com/in/mjlinked-in",
    title: "linkedin",
  },
]);
</script>

<template>
  <section class="hero">
    <Transition name="fade" appear>
      <div class="content">
        <h1>Junior Web Developer</h1>
        <h2>Michael<span>Jedrzejczyk</span></h2>
        <p>
          Web Developer spezialisiert auf moderne Web-Technologien. Ich
          entwickle benutzerfreundliche, skalierbare Lösungen mit Fokus auf
          Performance und Design.
        </p>
        <ul class="contacts">
          <li v-for="link in linkList">
            <a
              class="nLink"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              >{{ link.title }}</a
            >
          </li>
        </ul>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem 5rem 1rem;
}

.content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
}

.content > p {
  max-width: 28rem;
  color: var(--accent);
  font-size: var(--paragraph-text);
}

.content > p:nth-of-type(2) {
  max-width: 28rem;
}

h1 {
  font-size: var(--paragraph-text);
  font-weight: 400;
  color: var(--accent);
}

h2 {
  display: flex;
  flex-direction: column;
  line-height: 1;
  font-size: var(--hero-heading);
}

.contacts {
  display: flex;
  column-gap: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
