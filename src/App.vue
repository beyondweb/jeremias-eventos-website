<template>
  <div id="app">
    <!-- Se o site estiver carregando ele vai setar o componente IsLoading -->
    <section v-if="isLoading" class="isLoading">Loading</section>
    <!-- Quando terminar de carregar vai setar todo o site -->
    <main v-else class="WrapperSite">
      <NavbarMain />
    </main>
  </div>
</template>

<script>
import NavbarMain from "./components/Navigations/NavbarMain.vue";
export default {
  name: "App",
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    NavbarMain,
  },
};
</script>

<style lang="scss">
@import url("./styles/reset.scss");
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  --poppins: "Poppins", sans-serif;
  --abril: "Abril Fatface", cursive;

  --gradient-dark: linear-gradient(115.6deg, #171717 -0.6%, #201d1d 108.73%);
  --gradient-gold: linear-gradient(99.43deg, #eecc67 -4.92%, #f0c442 114.41%);
  --border: 1px solid rgba(53, 53, 49, 0.4);

  --dark: #171717;
  --darker: #201d1d;
  --gray: #e5e5e5;
  --gold: #eecc67;
  --golded: #f0c442;
  --white: #ffffff;
}

body {
  font-family: var(--poppins);
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-size: 1rem;
}

.container {
  max-width: 1144px;
  margin: 0 auto;
  height: auto;
  padding: 0px 16px;
}
</style>
