<script setup>
import { ref } from "vue";
import { useLangStore } from "../stores/lang";
import lang from "../lang/project";
const stor = useLangStore();
const ved1 = ref(false);
const ved2 = ref(false);
const ved3 = ref(false);
</script>
<template>
  <main>
    <h1 class="title">{{ lang[stor.getLang].project }}</h1>

    <!-- manage school project -->
    <div class="card">
      <div class="right-card">
        <img
          @click="ved3 = !ved3"
          class="project-image"
          src="../assets/schoolManageApp.jpg"
          alt=""
        />
      </div>
      <div class="left-card">
        <div class="project">
          <div class="project-name">{{ lang[stor.getLang].project_name1 }}</div>
          <div class="project-disc">
            {{ lang[stor.getLang].project_desc1 }}
          </div>
          <div class="technology">{{ lang[stor.getLang].technology }}</div>
          <img src="../assets/icon/laravel.svg" alt="" />
          <img src="../assets/icon/vue.svg" alt="" />
        </div>
      </div>
      <div v-if="ved3" class="vedios">
        <h5 class="close-btn" @click="ved3 = !ved3">X</h5>
        <video controls autoplay>
          <source
            src="../assets/vedios/school-manag-vedio.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
    <!-- ert web app -->
    <div class="card">
      <div class="left-card">
        <div class="project">
          <div class="project-name">{{ lang[stor.getLang].project_name2 }}</div>
          <div class="project-disc">
            {{ lang[stor.getLang].project_desc2 }}
          </div>
          <div class="technology">{{ lang[stor.getLang].technology }}</div>
          <img src="../assets/icon/express.svg" alt="" />
          <img src="../assets/icon/react.svg" alt="" />
        </div>
      </div>
      <div class="right-card">
        <img
          @click="ved2 = !ved2"
          class="project-image"
          src="../assets/ert.jpg"
          alt=""
        />
      </div>
      <div v-if="ved2" class="vedios">
        <h5 class="close-btn" @click="ved2 = !ved2">X</h5>
        <video controls autoplay>
          <source src="../assets/vedios/ert-vedio.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <!-- cv project -->
    <div class="card">
      <div class="right-card">
        <img
          @click="ved1 = !ved1"
          class="project-image"
          src="../assets/create-cv-web-laptop.jpg"
          alt=""
        />
      </div>
      <div class="left-card">
        <div class="project">
          <div class="project-name">{{ lang[stor.getLang].project_name3 }}</div>
          <div class="project-disc">
            {{ lang[stor.getLang].project_desc3 }}
          </div>
          <div class="technology">{{ lang[stor.getLang].technology }}</div>
          <img src="../assets/icon/django.svg" alt="" />
          <img src="../assets/icon/js.svg" alt="" />
        </div>
      </div>

      <div v-if="ved1" class="vedios">
        <h5 class="close-btn" @click="ved1 = !ved1">X</h5>
        <video controls autoplay>
          <source src="../assets/vedios/cv-create.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.title {
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: center;
  color: var(--color-action);
}

/* ------------------------card--------------- */
.card {
  display: flex;
  width: 80%;
  margin: 50px auto;
  justify-content: space-between;

  /* *****left card********* */
  .left-card {
    position: relative;
    width: 50%;
    height: 300px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;

    .project {
      text-align: center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-weight: 300;
      .project-name {
        font-weight: 500;
        margin-bottom: 20px;
        color: var(--color-action);
      }
      .technology {
        margin: 10px;
        font-weight: 400;
      }
    }
  }
  /* *********right card************* */
  .right-card {
    width: 50%;
    position: relative;
  }
  .project-image {
    width: 100%;
    cursor: pointer;
    box-shadow: 1px 1px 10px 1px gray;
  }
  .close-btn {
    position: absolute;
    top: -28px;
    right: 0px;
    color: rgb(0, 0, 0);
    background-color: white;
    padding: 4px;
    cursor: pointer;
  }

  .vedios {
    width: 70%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    box-shadow: 3px 3px 50px 3px rgb(10, 10, 10);
  }

  .vedios::after {
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: black;
    z-index: -10;
    opacity: 0.8;
  }
  video {
    width: 100%;
  }
}

img {
  width: 30px;
  margin: 3px;
}

@media screen and (max-width: 900px) {
  .project-image {
    width: 300px;
  }
  .title {
    margin-top: 125px;
  }
  .card {
    width: 90%;
  }
}

@media screen and (max-width: 700px) {
  .project-image {
    width: 100%;
  }
  .title {
    margin-top: 125px;
  }
  .card:nth-child(even) {
    width: 90%;
    flex-direction: column;
    align-items: center;
  }

  .card:nth-child(odd) {
    width: 90%;
    flex-direction: column-reverse;
    align-items: center;
  }
  .vedios {
    width: 98%;
  }
}
</style>
