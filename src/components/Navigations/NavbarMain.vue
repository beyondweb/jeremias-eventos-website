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
          class="bp-menu"
        />
        <div class="box-menu-toggle">
          <BtnLink
            link="https://freebiesui.com/figma-freebies/"
            text="Peça um orçamento"
            class="bp-Btn-link"
          />
          <Toggle class="bp-toggle" @btn="toggleClick()" />
        </div>
      </section>
    </div>
  </nav>
</template>

<script>
import Brand from "../Global/Brand.vue";
import MenuList from "../Global/MenuList.vue";
import BtnLink from "../Global/BtnLink.vue";
import Toggle from "../Global/Toggle.vue";
export default {
  name: "NavbarMain",
  computed: {
    toggleData() {
      return this.$store.state.toggle;
    },
  },
  methods: {
    toggleClick() {
      this.$store.dispatch("toggleClick", !this.toggleData);
    },
  },
  components: {
    Brand,
    MenuList,
    BtnLink,
    Toggle,
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
  border-bottom: 0.001rem solid rgba($color: #201d1d, $alpha: 1);
}
.bp-toggle {
  display: none;
}
.box-menu-toggle {
  display: flex;
  align-items: center;
}
@media (max-width: 600px) {
  .bp-menu {
    display: none;
  }
  .bp-toggle {
    display: block;
  }
  .bp-Btn-link {
    display: none;
  }
}
@media (max-width: 900px) {
  .bp-menu {
    display: none;
  }
  .bp-toggle {
    display: block;
  }
}
</style>
