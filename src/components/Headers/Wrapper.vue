<template>
  <header class="wrapper"><Hero /></header>
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
  display: flex;
  align-items: center;
  background-color: var(--dark);
}
</style>
