<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="label">
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
.label {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border: 1px solid var(--accent);
  font-size: var(--link-text);
}
</style>
