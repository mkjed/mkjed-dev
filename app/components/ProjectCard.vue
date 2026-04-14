<template>
  <div class="project-card">
    <div class="col-left">
      <p>01</p>
      <div class="project-name">
        <p>Bewerbase</p>
        <p>2025</p>
      </div>
    </div>
    <div class="col-right"></div>
  </div>
</template>

<style scoped>
.col-left {
  display: flex;
  column-gap: 1rem;
}

.col-left > p {
  color: var(--accent);
}

.project-name > p:nth-of-type(2) {
  color: var(--accent);
}

.project-card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  border: 1px solid rgba(139, 138, 138, 0.2);
  border-width: 1px 0 1px 0;
  transition: background-color 0.3s ease-out;
  font-size: var(--paragraph-text);
  padding: 2rem 0.5rem;
}

.project-card:hover {
  background-color: var(--hover-background);
}
</style>
