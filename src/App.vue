<script setup>
import { RouterLink, RouterView } from "vue-router";
import navBarre from "./components/layout/navBarre.vue";
import { useLangStore } from "./stores/lang";
const lang = useLangStore();
</script>

<template>
  <div
    :style="[lang.getLang == 2 ? { direction: 'rtl' } : { direction: 'ltr' }]"
  >
    <header>
      <navBarre />
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
header {
  width: 100%;
  padding: 10px 0px;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: white;
}
.decoration {
  position: absolute;
  left: 0;
  top: 0;
  width: 40vw;
  height: 100vh;
  background-color: var(--color-action);
  opacity: 0.4;
  padding: 0;
  margin: 0;
}
</style>
