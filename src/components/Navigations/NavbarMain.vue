<template>
  <nav class="navbar">
    <div class="container">
      <section class="content">
        <Brand />
        <MenuList
          inicio="Início"
          sobre="Sobre Nós"
          servicos="Serviços"
          galeria="Galeria"
          equipe="Equipe"
          contato="Contato"
        />
        <BtnLink
          link="https://freebiesui.com/figma-freebies/"
          text="Peça um orçamento"
        />
      </section>
    </div>
  </nav>
</template>

<script>
import Brand from "../Global/Brand.vue";
import MenuList from "../Global/MenuList.vue";
import BtnLink from "../Global/BtnLink.vue";
export default {
  name: "NavbarMain",
  components: {
    Brand,
    MenuList,
    BtnLink,
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: auto;
  background-color: var(--dark);
}
.content {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
