<script setup>
import { useLangStore } from "../../stores/lang";
import lang from "../../lang/navbarre";
const stor = useLangStore();
</script>

<template>
  <div class="nav-barre">
    <img class="name" src="../../assets/logo-oualid.png" alt="" />

    <nav>
      <div class="link">
        <RouterLink to="/">{{ lang[stor.getLang].about }}</RouterLink>
      </div>
      <div class="link">
        <RouterLink to="/cv">{{ lang[stor.getLang].cv }}</RouterLink>
      </div>
      <div class="link">
        <RouterLink to="/project">{{ lang[stor.getLang].PROJECTS }}</RouterLink>
      </div>
      <div class="link">
        <RouterLink to="/contact">{{ lang[stor.getLang].CONTACT }}</RouterLink>
      </div>
    </nav>
    <div class="lang-select">
      <img @click="stor.setLang(2)" src="../../assets/icon/morocco.svg" />
      <img
        @click="stor.setLang(0)"
        class="usa"
        src="../../assets/icon/usa.svg"
      />
      <img @click="stor.setLang(1)" src="../../assets/icon/france.svg" />
    </div>
  </div>
</template>

<style scoped>
.nav-barre {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
}
nav {
  width: fit-content;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 400;
}

.router-link-exact-active {
  color: var(--color-action);
  cursor: default;
  font-weight: 600;
}
.name {
  width: 60px;
}

span {
  color: var(--color-action);
  font-weight: 600;
}

.lang-select {
  display: flex;

  gap: 5px;
}
img {
  width: 25px;
}
.usa {
  width: 24px;
}
img:hover {
  transform: scale(1.1);
  cursor: pointer;
}

/* mobile screen  */
@media screen and (max-width: 720px) {
  .nav-barre {
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }
  nav {
    font-size: 0.7rem;
  }
}
</style>
