<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
  year: number;
  description: string;
  labels: string[];
}>();
import Label from "./Label.vue";
</script>

<template>
  <div class="project-card">
    <div class="col-left">
      <p>{{ id }}</p>
      <div class="project-name">
        <p>{{ title }}</p>
        <p>{{ year }}</p>
      </div>
    </div>
    <div class="col-right">
      <p>{{ description }}</p>
      <div class="label-container">
        <Label v-for="label in labels" :key="label" :text="label" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-left {
  display: flex;
  column-gap: 1rem;
}

.col-right {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.project-name > p:nth-of-type(1) {
  color: var(--foreground);
}

.project-card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  border: 1px solid rgba(139, 138, 138, 0.2);
  border-width: 1px 0 1px 0;
  transition: background-color 0.3s ease-out;
  font-size: var(--paragraph-text);
  padding: 2rem 0.5rem;
  color: var(--accent);
}

.project-card:hover {
  background-color: var(--hover-background);
}

.label-container {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
}
</style>
