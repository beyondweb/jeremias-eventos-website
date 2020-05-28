<template>
  <div id="app">
    <!-- Se o site estiver carregando ele vai setar o componente IsLoading -->
    <section class="isLoading-wrapper" v-if="loading">
      <IsLoading />
    </section>
    <!-- Quando terminar de carregar vai setar todo o site -->
    <main v-else class="WrapperSite">
      <NavbarMain />
      <Wrapper />
      <About />
      <Services />
    </main>
  </div>
</template>

<script>
import IsLoading from "./components/Global/IsLoading.vue";
import NavbarMain from "./components/Navigations/NavbarMain.vue";
import Wrapper from "./components/Headers/Wrapper.vue";
import About from "./components/Abouts/About.vue";
import Services from "./components/Services/Service.vue";

export default {
  name: "App",
  data() {
    return {
      loading: true,
    };
  },
  components: {
    IsLoading,
    NavbarMain,
    Wrapper,
    About,
    Services,
  },
  methods: {
    Loading() {
      window.addEventListener("load", () => {
        this.loading = !this.loading;
        console.log(this.loading);
      });
    },
  },
  created() {
    this.Loading();
  },
};
</script>

<style lang="scss">
@import url("./styles/reset.scss");
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://unpkg.com/boxicons@2.0.5/css/boxicons.min.css");

:root {
  --poppins: "Poppins", sans-serif;
  --abril: "Abril Fatface", cursive;

  --gradient-dark: linear-gradient(115.6deg, #171717 -0.6%, #201d1d 108.73%);
  --gradient-gold: linear-gradient(99.43deg, #eecc67 -4.92%, #f0c442 114.41%);
  --border: 1px solid rgba(53, 53, 49, 0.4);

  --dark: #171717;
  --darker: #201d1d;
  --gray: #d8d5d5;
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
.isLoading-wrapper {
  width: 100%;
  height: 100vh;
  background: var(--gradient-dark);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
