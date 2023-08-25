<script setup>
/* state managment */
import { useLangStore } from "../stores/lang";
const stor = useLangStore();
/* import lang file  */
import lang from "../lang/contact";
</script>

<template>
  <main>
    <div class="space"></div>
    <div class="container">
      <div class="right-side">
        <h1>{{ lang[stor.getLang].contact_me }}</h1>
        <form
          target="_blank"
          action="https://formsubmit.co/oualid.rahdouni@gmail.com"
          method="POST"
        >
          <label for="name">{{ lang[stor.getLang].name }}:</label>
          <input type="text" id="name" name="name" required />

          <label for="email">{{ lang[stor.getLang].email }}:</label>
          <input type="email" id="email" name="email" required />

          <label for="tel">{{ lang[stor.getLang].tel }}:</label>
          <input type="text" id="tel" name="tel" required />

          <label for="message">{{ lang[stor.getLang].msg }}:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <input type="submit" :value="lang[stor.getLang].submit" />
        </form>
      </div>
      <div class="left-side">
        <div class="left-side-content">
          <div class="group">
            <div class="icon">
              <img src="../assets/icon/phone.svg" alt="" />
            </div>
            <div class="content">+212680654268</div>
          </div>
          <div class="group">
            <div class="icon">
              <img src="../assets/icon/email.svg" alt="" />
            </div>
            <div class="content">oualid.rahdouni@gmail.com</div>
          </div>
          <div class="group">
            <div class="icon">
              <img src="../assets/icon/position.svg" alt="" />
            </div>
            <div class="content">
              {{ lang[stor.getLang].adress }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped lang="scss">
main {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;

  .container {
    width: fit-content;
    margin: auto;
    display: flex;
    align-items: center;
  }

  /* Style the container and form */
  .right-side {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: fit-content;
  }
  h1 {
    color: var(--color-action);
  }
  form {
    display: flex;
    flex-direction: column;
  }

  /* Style the form elements */
  label {
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  input[type="submit"] {
    background-color: var(--color-action);
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #0056b3;
  }

  .left-side {
    width: 300px;
    height: 70vh;
    background-color: var(--color-action);
    position: relative;
    img {
      width: 30px;
    }
    .left-side-content {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .group {
      display: flex;
      margin: 5px;

      .icon {
        margin: 0px 10px;
      }
      .content {
        color: white;
        width: 250px;
        font-weight: 300;
      }
    }
  }
}

@media screen and (max-width: 632px) {
  .left-side {
    height: 100px;
  }

  main {
    display: block;
  }
  .container {
    flex-direction: column;
    gap: 10px;
  }

  .space {
    height: 150px;
    width: 30px;
  }
  .left-side {
    height: 100px;
  }
}
</style>
