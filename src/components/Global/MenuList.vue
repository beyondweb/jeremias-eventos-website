<template>
  <section class="menu-list">
    <ul>
      <li>
        <a href="#inicio">{{ inicio }}</a>
        <a href="#sobre">{{ sobre }}</a>
        <a href="#servicos">{{ servicos }}</a>
        <a href="#galeria">{{ galeria }}</a>
        <a href="#equipe">{{ equipe }}</a>
        <a href="#contato">{{ contato }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "MenuList",
  props: ["inicio", "sobre", "servicos", "galeria", "equipe", "contato"],
};
</script>

<style lang="scss" scoped>
.menu-list {
  > ul {
    > li {
      a {
        color: var(--white);
        font-size: 1rem;
        padding: 2px 16px;
        font-weight: 500;
        transition: all 0.6s;
        &:hover {
          color: var(--dark);
          box-shadow: inset 120px 0px 0px 0 var(--gold);
          transition: box-shadow color 0.6s;
        }
      }
    }
  }
}
</style>
