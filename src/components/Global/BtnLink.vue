<template>
  <div class="btn-link">
    <a target="_blanck" :href="link">
      {{ text }}
    </a>
  </div>
</template>

<script>
export default {
  name: "BtnLink",
  props: ["link", "text"],
};
</script>

<style lang="scss" scoped>
.btn-link a {
  padding: 10px 24px;
  border: 2px;
  background: var(--gradient-gold);
  color: var(--dark);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85rem;
  transition: all 0.5s;
  &:hover {
    box-shadow: inset 200px 0px 0px 0px var(--white);
    transition: all 0.5s;
    overflow: hidden;
  }
}
</style>
