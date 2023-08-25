<script setup>
/* state managment */
import { useLangStore } from "../stores/lang";
const stor = useLangStore();
/* import lang file  */
import lang from "../lang/about";
</script>

<template>
  <main>
    <div class="main-content">
      <div class="left-content">
        <img src="../assets/photo1.jpg" alt="" />
        <div class="name">
          <span>{{ lang[stor.getLang].fname }}</span>
          <span>{{ lang[stor.getLang].lname }}</span>
        </div>
        <div class="job">{{ lang[stor.getLang].job }}</div>
        <div class="social-media">
          <img src="../assets/icon/github.svg" alt="" />
          <img src="../assets/icon/twitter.svg" alt="" />
          <img src="../assets/icon/linkedin.svg" alt="" />
        </div>
      </div>
      <div class="right-content">
        <div class="right-side-element">
          <div class="hello">{{ lang[stor.getLang].hello }}</div>
          <div class="who-im">
            {{ lang[stor.getLang].present }}
          </div>
          <div class="cv-contact">
            <RouterLink class="btn" to="/cv">{{
              lang[stor.getLang].cv
            }}</RouterLink>
            <RouterLink class="btn" to="/contact">{{
              lang[stor.getLang].contact
            }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}
.main-content {
  color: var(--color-action);
  width: 60%;
  height: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  box-shadow: 1px 1px 8px 1px rgb(172, 172, 172);
  animation: 1.2s linear open-card;
}
.left-content {
  width: 50%;
  background-color: var(--color-second);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.left-content > img {
  width: 150px;
  border-radius: 50%;
  border: 5px solid var(--color-action);
  margin-top: 25px;
}
.name {
  position: relative;
  color: var(--color-primary);
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.name::after {
  content: "";
  position: absolute;
  width: 50px;
  height: 3px;
  bottom: -8px;
  transform: translateX(-50%);
  left: 50%;
  background-color: var(--color-action);
  z-index: 200;
  animation: 1.5s linear ligne;
}
.job {
  color: var(--color-primary);
  font-size: 0.9rem;
  font-weight: 100;
  text-align: center;
}
.social-media {
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.social-media > img {
  width: 30px;
  margin: 5px;
}

/* right content */
.right-content {
  width: 50%;
  position: relative;
  background-color: white;
}
.right-side-element {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.hello {
  font-size: 3rem;
  font-weight: 700;
  animation: 2s linear open-card;
}
.who-im {
  width: 80%;
  text-align: center;
  color: var(--color-second);
  animation: 2.3s linear open-card;
}

.btn {
  width: 120px;
  padding: 8px;
  box-shadow: 1px 1px 3px 1px gray;

  border-radius: 10px;
  text-align: center;
  background-color: var(--color-action);
  font-weight: 500;
  animation: 5s linear open-card;
}
.btn:hover {
  background-color: rgb(36, 61, 36);
}
.btn:focus {
  box-shadow: 0px 0px 0px 0px gray;
}

a {
  color: white;
}

.cv-contact {
  display: flex;
  gap: 20px;
}

/* animation */
@keyframes open-card {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}

@keyframes ligne {
  0% {
    width: 0px;
  }
  50% {
    width: 150px;
  }
  100% {
    width: 50px;
  }
}

/* responsive  */
@media screen and (max-width: 980px) {
  .main-content {
    width: 80%;
  }
}

@media screen and (max-width: 716px) {
  .main-content {
    width: 90%;
  }
}

@media screen and (max-width: 584px) {
  .main-content {
    width: 90%;
    flex-direction: column;
    height: fit-content;
    gap: 10px;
  }
  .right-content {
    width: 100%;
    position: relative;
    height: 200px;
    gap: 2px;
    padding: 3px;
  }
  .left-content {
    width: 100%;
    height: fit-content;
    gap: 10px;
  }
}
</style>
