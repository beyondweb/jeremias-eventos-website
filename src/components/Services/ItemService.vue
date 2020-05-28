<template>
  <article class="item-service">
    <div class="service-icon">
      <img :src="img" :alt="title" />
    </div>
    <div class="service-title">
      <h4>{{ title }}</h4>
    </div>
    <div class="service-description">
      <p>{{ description }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "ItemService",
  props: ["img", "title", "description"]
};
</script>

<style lang="scss" scoped>
.item-service {
  padding: 2.5rem 2rem;
  border: var(--border);
  transition: all 0.3s;
  &:hover {
    background: rgba($color: #eecc67, $alpha: 0.1);
    transform: scale(1.05);
    transition: all 0.3s;
  }
}
.service-icon {
  > img {
    max-width: 100%;
  }
}
.service-title {
  > h4 {
    margin-top: 2rem;
    font-family: var(--abril);
    font-size: 1.75rem;
    background: var(--gradient-gold);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.service-description {
  > p {
    margin-top: 2rem;
    line-height: 1.75rem;
    color: var(--gray);
  }
}
</style>