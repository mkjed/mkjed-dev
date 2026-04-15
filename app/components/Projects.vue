<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";
import { ref } from "vue";

const projects = ref([
  {
    id: "01",
    title: "Bewerbase",
    year: 2025,
    description: "Ein kleines Tool zum speichern eigener Bewerbungen",
    labels: ["React", "JavaScript", "Tailwind", "Vite", "i18n"],
  },
]);
</script>

<template>
  <section class="projects" id="projects">
    <div class="content">
      <p class="section-title">02 / Projects</p>
      <div class="projects-container">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          v-bind="project"
        >
        </ProjectCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  display: flex;
  justify-content: center;
  padding: 5rem 1rem;
}

.content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
}

.section-title {
  color: var(--accent);
  font-size: var(--paragraph-text);
}

.projects-container {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}
</style>
