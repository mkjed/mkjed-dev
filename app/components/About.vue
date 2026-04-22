<script setup lang="ts">
interface InfoCard {
  title: string;
  description: string;
}

const infoCardContent: InfoCard[] = [
  {
    title: "LOCATION",
    description: "Bergheim, DE",
  },
  {
    title: "FOCUS",
    description: "React / Next.js / Nuxt / JavaScript / TypeScript",
  },
  {
    title: "UI/UX",
    description: "Figma / Penpot",
  },
];
</script>

<template>
  <section class="about" id="about">
    <div class="content">
      <p class="section-title">01 / About</p>
      <div class="right-col">
        <p>
          Ich bin ausgebildeter Fachinformatiker für Anwendungsentwicklung und
          gelernter Mediengestalter, ich entwickle und gestalte Webanwendungen
          mit modernen Libraries und Frameworks, JavaScript und CSS. Mir liegen
          Leistung, Barrierefreiheit und die Gestaltung von Benutzeroberflächen
          besonders am Herzen.
        </p>
        <div class="infos">
          <div v-for="infoCard in infoCardContent">
            <p class="section-title">{{ infoCard.title }}</p>
            <p>{{ infoCard.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  padding: 5rem 1rem;
  border: solid var(--border);
  border-width: 0 0 1px 0;
}
.content {
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  row-gap: 2rem;
}

.right-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 3rem;
  font-size: var(--paragraph-text);
}

.section-title {
  color: var(--accent);
  font-size: var(--paragraph-text);
}

.infos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
</style>
