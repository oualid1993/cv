<script setup>
import { ref } from "vue";
import { useLangStore } from "../stores/lang";
import lang from "../lang/cv";
const stor = useLangStore();
</script>
<template>
  <main>
    <div class="bubbles">
      <div class="hero">
        <div>{{ lang[stor.getLang].profile }}</div>
        <div class="hero-disc">
          {{ lang[stor.getLang].profil }}
        </div>
      </div>

      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>

      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>

      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
    </div>
    <div class="main-content">
      <h1>{{ lang[stor.getLang].Experiance }}</h1>
      <div class="cards">
        <div v-motion-fade-visible>
          <div class="year">{{ lang[stor.getLang].exp_year2 }}</div>
          <div class="univ">{{ lang[stor.getLang].company2 }}</div>

          <div class="contry">{{ lang[stor.getLang].contry_2 }}</div>
          <p>{{ lang[stor.getLang].job_disc2 }}</p>
        </div>
      </div>
      <div class="cards">
        <div v-motion-fade-visible>
          <div class="year">{{ lang[stor.getLang].exp_year1 }}</div>
          <div class="univ">{{ lang[stor.getLang].company1 }}</div>

          <div class="contry">{{ lang[stor.getLang].contry_2 }}</div>
          <p>{{ lang[stor.getLang].job_disc1 }}</p>
        </div>
      </div>

      <h1>{{ lang[stor.getLang].Education }}</h1>
      <div class="cards">
        <div v-motion-fade-visible>
          <div class="year">2020</div>
          <div class="univ">{{ lang[stor.getLang].univ_1 }}</div>
          <div class="degree">{{ lang[stor.getLang].option_1 }}</div>
          <div class="contry">{{ lang[stor.getLang].contry_1 }}</div>
          <p>{{ lang[stor.getLang].disc_1 }}</p>
        </div>
      </div>
      <div class="cards">
        <div v-motion-fade-visible :delay="500">
          <div class="year">2014-2016</div>
          <div class="univ">{{ lang[stor.getLang].univ_2 }}</div>
          <div class="degree">{{ lang[stor.getLang].option_2 }}</div>
          <div class="contry">{{ lang[stor.getLang].contry_2 }}</div>
          <p>{{ lang[stor.getLang].disc_2 }}</p>
        </div>
      </div>
      <div class="cards">
        <div v-motion-fade-visible>
          <div class="year">2012-2014</div>
          <div class="univ">{{ lang[stor.getLang].univ_3 }}</div>
          <div class="degree">{{ lang[stor.getLang].option_3 }}</div>
          <div class="contry">{{ lang[stor.getLang].contry_2 }}</div>
          <p>{{ lang[stor.getLang].disc_3 }}</p>
        </div>
      </div>
      <div class="cards">
        <div v-motion-fade-visible>
          <div class="year">2012</div>
          <div class="univ">{{ lang[stor.getLang].univ_4 }}</div>
          <div class="degree">{{ lang[stor.getLang].option_4 }}</div>
          <div class="contry">{{ lang[stor.getLang].contry_2 }}</div>
          <p>{{ lang[stor.getLang].disc_4 }}</p>
        </div>
      </div>

      <h1>{{ lang[stor.getLang].Compétences }}</h1>
      <div class="cards">
        <div v-motion-fade-visible>
          <div class="title">{{ lang[stor.getLang].programing_lang }}</div>
          <div class="language">
            <img src="../assets/icon/html.svg" alt="" />
            <img src="../assets/icon/css.svg" alt="" />
            <img src="../assets/icon/js.svg" alt="" />
            <img src="../assets/icon/php.svg" alt="" />
            <img src="../assets/icon/python.svg" alt="" />
            <img src="../assets/icon/nodejs.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="cards">
        <div v-motion-fade-visible>
          <div class="title">{{ lang[stor.getLang].frame_Works }}</div>
          <div class="language">
            <img src="../assets/icon/laravel.svg" alt="" />
            <img src="../assets/icon/django.svg" alt="" />
            <img src="../assets/icon/react.svg" alt="" />
            <img src="../assets/icon/vue.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="cards">
        <div v-motion-fade-visible>
          <div class="title">{{ lang[stor.getLang].Education }}</div>
          <div class="lang-group">
            <div class="lang-name">{{ lang[stor.getLang].english }}</div>
            <div class="lang-score-english"></div>
          </div>
          <div class="lang-group">
            <div class="lang-name">{{ lang[stor.getLang].french }}</div>
            <div class="lang-score-frensh"></div>
          </div>
          <div class="lang-group">
            <div class="lang-name">{{ lang[stor.getLang].arab }}</div>
            <div class="lang-score-arabe"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.contry {
  font-size: 0.7rem;
  font-weight: 500;
  color: #7c7b7b;
}
.degree {
  color: #000000;
}
.year {
  font-size: 1.5rem;
  color: var(--color-action);
  font-weight: 600;
}
.univ {
  font-weight: 600;
  font-size: 1.3rem;
  color: #000000;
}
h1 {
  margin-top: 100px;
  text-align: center;
  color: var(--color-action);

  margin-bottom: 20px;
}
p {
  color: #a1a1a1;
  font-size: 0.9rem;
}
/* main {
  z-index: 0;
  display: table;
  width: 100%;
  height: 100vh;
  background-color: #000000;
  color: #000;
  line-height: 1.6;
  position: relative;
  font-family: sans-serif;
  overflow: hidden;
}
 */
/* card  style */
.main-content {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000000;
}

.cards:nth-child(even) {
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 300px;
  color: #ffffff;
  margin: auto;
  padding: 5px 20px;
  border-left: 3px solid var(--color-action);
  transform: translate(50%);
}

.cards:nth-child(even)::after {
  content: "";
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  background-color: var(--color-action);
  left: -10px;
}

.cards:nth-child(odd) {
  position: relative;
  display: flex;
  justify-content: center;

  width: 300px;
  margin: auto;
  color: #ffffff;
  text-align: center;
  border-right: 4px solid var(--color-action);
  transform: translate(-48.8%);
  padding: 5px 20px;
}

.cards:nth-child(odd)::after {
  content: "";
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  background-color: var(--color-action);
  right: -10px;
}

.cards > div {
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.36);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* experiance  */
.title {
  color: var(--color-action);
}
img {
  width: 30px;
}

.lang-name {
  color: #000000;
  margin-bottom: 5px;
  text-align: start;
}
.lang-score-english {
  width: 110px;
  height: 5px;
  background-color: var(--color-action);
  border-radius: 5px;
}
.lang-score-frensh {
  width: 150px;
  height: 5px;
  background-color: var(--color-action);
  border-radius: 5px;
}
.lang-score-arabe {
  width: 200px;
  height: 5px;
  background-color: var(--color-action);
  border-radius: 5px;
}

/* ----------------------------------------responsive--------------------------------  */
@media screen and (max-width: 591px) {
  .main-content {
    gap: 20px;
  }

  .hero {
    width: 80%;
  }
  .cards:nth-child(even) {
    border-left: none;
    transform: translate(0);
  }

  .cards:nth-child(even)::after {
    content: "";
    width: 0;
    height: 0;
  }

  .cards:nth-child(odd) {
    border-right: none;
    transform: translate(0);
  }

  .cards:nth-child(odd)::after {
    content: "";
    width: 5px;
    height: 30px;
    border-radius: 0;
    position: absolute;
    background-color: var(--color-action);
    right: 50%;
    top: -25px;
    transform: translateX(50%);
  }
  .cards:nth-child(odd)::before {
    content: "";
    width: 5px;
    height: 30px;
    border-radius: 0;
    position: absolute;
    background-color: var(--color-action);
    right: 50%;
    bottom: -25px;
    transform: translateX(50%);
  }
}

/*-------------------------------------------- animated screen -------------------------------- */
.hero {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  padding: 0;

  div:nth-child(1) {
    color: var(--color-action);
    padding: 10px;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
  }
  .hero-disc {
    text-align: center;
    letter-spacing: 2px;
    font-weight: 300;
  }
}
main {
  background: black;
  margin: 0;
  width: 100%;
  height: 100vh;
}

$bubble-count: 50;
$sway-type: "sway-left-to-right", "sway-right-to-left";

@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

@function sample($list) {
  @return nth($list, random(length($list)));
}

.bubbles {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bubble {
  z-index: 100;
  position: absolute;
  left: var(--bubble-left-offset);
  bottom: -75%;
  display: block;
  width: var(--bubble-radius);
  height: var(--bubble-radius);
  border-radius: 50%;
  animation: float-up var(--bubble-float-duration) var(--bubble-float-delay)
    cubic-bezier(0, 0.43, 0, 0.62) infinite;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsla(183, 94%, 76%, 0.3);
    border-radius: inherit;
    animation: var(--bubble-sway-type) var(--bubble-sway-duration)
      var(--bubble-sway-delay) cubic-bezier(0, 0.43, 0, 0.62) alternate infinite;
  }

  @for $i from 0 through $bubble-count {
    &:nth-child(#{$i}) {
      --bubble-left-offset: #{random_range(0vw, 100vw)};
      --bubble-radius: #{random_range(1vw, 10vw)};
      --bubble-float-duration: #{random_range(6s, 12s)};
      --bubble-sway-duration: #{random_range(4s, 6s)};
      --bubble-float-delay: #{random_range(0s, 4s)};
      --bubble-sway-delay: #{random_range(0s, 4s)};
      --bubble-sway-type: #{sample($sway-type)};
    }
  }
}

@keyframes float-up {
  to {
    transform: translateY(-200vh);
  }
}

@keyframes sway-left-to-right {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
}

@keyframes sway-right-to-left {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(-100%);
  }
}
</style>
