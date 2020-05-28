<template>
  <h2 class="title-section">{{ text }}<span>.</span></h2>
</template>

<script>
export default {
  name: "TitleSection",
  props: ["text"]
};
</script>

<style lang="scss" scoped>
.title-section {
  margin-bottom: 2.5rem;
  font-family: var(--abril);
  font-size: 2.5rem;
  color: var(--white);
  > span {
    color: var(--gold); 
  }
}
</style>