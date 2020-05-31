<template>
  <header class="wrapper" id="inicio">
    <div class="bg-transparent"></div>
    <Hero />
  </header>
</template>

<script>
import Hero from "./Hero.vue";
export default {
  name: "Wrapper",
  components: {
    Hero,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 600px;
  background-image: url("../../assets/bg-hero.svg");
  background-size: cover;
  background-position: center;
  position: relative;
}
.bg-transparent {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(23, 23, 23, 0.6);
}
</style>
