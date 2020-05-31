<template>
  <div class="toggle-menu" @click="$emit('btn')">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Toggle",
};
</script>

<style lang="scss" scoped>
.toggle-menu {
  width: 30px;
  margin: 0px 0px 0px 16px;
  cursor: pointer;
  > div {
    width: 100%;
    height: 3px;
    background: var(--white);
    margin: 6px 0px;
  }
  :nth-last-child(1) {
    width: 80%;
  }
}
</style>
