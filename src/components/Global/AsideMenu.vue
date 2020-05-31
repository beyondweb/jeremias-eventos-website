<template>
  <div class="menu-aside">
    <div class="action-box">
      <button @click="closeToggle">Fechar <i class="bx bx-x"></i></button>
    </div>
    <div class="menu-list">
      <ul>
        <li><a @click="closeToggle" href="#inicio">Início</a></li>
        <li><a @click="closeToggle" href="#sobre">Sobre Nós</a></li>
        <li><a @click="closeToggle" href="#servicos">Serviços</a></li>
        <li><a @click="closeToggle" href="#galeria">Galeria</a></li>
        <li><a @click="closeToggle" href="#equipe">Equipe</a></li>
        <li><a @click="closeToggle" href="#contato">Contato</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AsideMenu",
  computed: {
    toggleData() {
      return this.$store.state.toggle;
    },
  },
  methods: {
    closeToggle() {
      this.$store.dispatch("toggleClick", !this.toggleData);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-aside {
  width: 100%;
  height: 100vh;
  background: var(--gradient-dark);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  padding: 16px;
  box-sizing: border-box;
}
.action-box {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 200;
    color: var(--gold);
    background: transparent;
    border: 1px solid var(--gold);
    cursor: pointer;
    transition: all 0.2s;
    i {
      font-size: 2rem;
      margin: 0px 0px 0px 8px;
      padding: 0;
    }
    &:hover {
      transition: all 0.2s;
      background: var(--gold);
      color: var(--dark);
    }
  }
}
.menu-list {
  width: 100%;
  display: flex;
  padding-top: 32px;
  justify-content: center;
  ul {
    text-align: center;
    li {
      a {
        display: block;
        padding: 16px 32px;
        color: var(--white);
        transition: all 0.2s;
        &:hover {
          color: var(--gold);
          transition: all 0.2s;
        }
      }
    }
  }
}
</style>
