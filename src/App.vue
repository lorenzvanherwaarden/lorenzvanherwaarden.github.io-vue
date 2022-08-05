<template>
  <div>
    <Cars />
    <div class="central">
      <PersonalDetails />
    </div>
    <NameAndRole />
  </div>
</template>

<script setup>
import PersonalDetails from './components/PersonalDetails.vue'
import NameAndRole from './components/NameAndRole.vue'
import Cars from './components/Cars.vue'
</script>

<style>
:root {
  --rgb-primary: 120, 139, 207;
  --rgb-background: 37, 37, 37;
  --color-primary: rgb(var(--rgb-primary));
  --color-text: rgb(230, 230, 230);
  --color-background: rgb(var(--rgb-background));

  --font-family: 'Karla', sans-serif;
  --font-size-base: 10px;
  --font-size-body: 1.8rem;
  --font-size-h1: 3.8rem;
  --font-weight-body: 500;
  --font-weight-link: 500;
  --font-weight-h1: 700;

  --spacing-small: 0.8rem;
}

@media (prefers-color-scheme: light) {
  :root {
    --color-text: rgb(30, 30, 30);
    --color-background: rgb(246, 243, 243);
  }
}

@media (max-width: 630px) {
  :root {
    --font-size-h1: 2.4rem;
  }
}

@media (max-width: 460px) {
  :root {
    --font-size-h1: 2rem;
  }
}

html {
  font-size: var(--font-size-base);
}

body {
  background: var(--color-background);
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-text);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-body);
  margin: 0;
}

#app {
  background-size: 50px 50px;
  background-image: linear-gradient(to right, lightgrey 1px, transparent 1px),
    linear-gradient(to bottom, lightgrey 1px, transparent 1px);
}

a {
  text-decoration: none;
  font-weight: var(--font-weight-link);
  color: var(--color-primary);
  line-height: 1;
}

a:hover {
  opacity: 0.6;
}

h1 {
  margin: 0;
  font-weight: var(--font-weight-h1);
  font-size: var(--font-size-h1);
  line-height: calc(var(--font-size-h1) + 1.2rem);
}

.central {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
