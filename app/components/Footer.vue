<script setup lang="ts">
import { ref } from "vue";
const linkList = ref([
  {
    url: "https://github.com/mkjed",
    title: "github",
  },
  {
    url: "https://www.linkedin.com/in/mjlinked-in",
    title: "linkedin",
  },
]);
</script>

<template>
  <footer class="footer">
    <div class="content">
      <p>&copy; Michael Jedrzejczyk</p>
      <ul class="socials">
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
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid var(--border);
  border-width: 1px 0 0 0;
  padding: 2rem 1rem;
}

.content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content > p {
  font-size: var(--link-text);
}

.socials {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}
</style>
