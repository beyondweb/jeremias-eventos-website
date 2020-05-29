<template>
  <section class="about" id="sobre">
    <div class="content">
      <div class="content-description">
        <div class="title-content">
          <TitleSection text="Sobre Nós" />
        </div>
        <div class="description">
          <p>
            Somos uma empresa especializada na realização de eventos
            corporativos, planejamento estratégico em eventos e soluções
            promocionais. Nosso foco é trazer soluções práticas e criativas
            objetivando sempre a satisfação de nossos clientes.
          </p>
          <p>
            Possuímos um time de profissionais qualificados, empenhados e
            comprometidos que com visão pró-ativa e inovadora irão transformar
            seu evento em um momento inesquecível. Oferecemos um portfólio amplo
            de serviços para que o resultado seja perfeito.
          </p>
        </div>
      </div>
      <div class="content-image">
        <img src="../../assets/about.jpg" alt="Imagem Sobre Nós" />
      </div>
    </div>
  </section>
</template>

<script>
import TitleSection from "../Global/TitleSection";
export default {
  name: "About",
  components: {
    TitleSection,
  },
};
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  background: var(--gradient-dark);
}
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 78px;
}
.content-description {
  flex: 1;
  padding: 100px 0 0 0;
  margin-left: 114px;
  > .title-content {
    > .title {
      margin-bottom: 2.5rem;
      font-family: var(--abril);
      font-size: 2.5rem;
      color: var(--white);
      > span {
        color: var(--gold);
      }
    }
  }
  > .description {
    font-size: 1rem;
    line-height: 1.75rem;
    > p {
      margin-bottom: 1.5rem;
      color: var(--gray);
    }
  }
}
.content-image {
  flex: 1;
  width: 100%;
  > img {
    max-width: 100%;
  }
}
</style>
