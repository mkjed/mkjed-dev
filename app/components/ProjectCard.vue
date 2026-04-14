<template>
  <div class="project-card">
    <div class="col-left">
      <p>01</p>
      <div class="project-name">
        <p>Bewerbase</p>
        <p>2025</p>
      </div>
    </div>
    <div class="col-right">
      <p>Ein kleines Tool zum speichern eigener Bewerbungen</p>
      <div class="label-container">
        <div class="label">
          <p>React</p>
        </div>
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

.label {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border: 1px solid var(--accent);
  font-size: var(--link-text);
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
</style>
