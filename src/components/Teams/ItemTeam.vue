<template>
  <article class="item-team">
    <div class="team-image">
      <img :src="img" :alt="name" />
    </div>
    <div class="team-description">
      <div class="team-name">
        <h4>{{ name }}</h4>
      </div>
      <div class="team-ocupation">
        <h5>{{ ocupation }}</h5>
      </div>
      <div class="team-info">
        <p>{{ info }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ItemTeam",
  props: ["img", "name", "ocupation", "info"]
};
</script>

<style lang="scss" scoped>
.team-description {
  padding: 0 1.5rem 2rem 1.5rem;
  transition: all .5s;
}
.team-name {
  > h4 {
    padding-top: 2rem;
    font-family: var(--abril);
    font-size: 1.75rem;
    background: var(--gradient-gold);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.team-ocupation {
  > h5 {
    padding-top: 1.175rem;
    color: var(--gray);
    font-size: 1.125rem;
    font-weight: 200;
  }
}
.team-info {
  visibility: hidden;
  > p {
    padding-top: 2rem;
    line-height: 1.75rem;
    color: var(--gray);
  }
}
.item-team:hover .team-description {
    transition: all .5s;
    background: rgba($color: #f0c442, $alpha: .1);
}
.item-team:hover .team-description .team-info {
    transition: all .5s;
    visibility: visible;
}
</style>