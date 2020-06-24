<template>
  <section class="contact" id="contato">
    <div class="container">
      <div class="content">
        <div class="title-content">
          <TitleSection text="Entre em Contato" />
        </div>
        <div class="contact-content">
          <h3>Informações de contato</h3>
          <div class="info-contact">
            <div class="info">
              <div class="info-box">
                <p>
                  Endereço: 198 West 21th Street, Suite 721 New York NY 10016
                </p>
              </div>
              <div class="info-box">
                <p>
                  Telefone: <br />
                  <router-link>+55 86 999845332</router-link>
                </p>
              </div>
              <div class="info-box">
                <p>
                  Email: <br /><router-link>exemple@gmail.com </router-link>
                </p>
              </div>
              <div class="btn-group">
                <BtnLink text="Peça um orçamento" />
              </div>
            </div>
            <div class="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1983.064456906772!2d-42.84174217381897!3d-6.246737823014799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaef356662dffb7b1!2sJeremias%20Eventos%20ltda!5e0!3m2!1spt-BR!2sbr!4v1593008128993!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                frameborder="0"
                style="border:0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TitleSection from "../Global/TitleSection.vue";
import BtnLink from "../Global/BtnLink.vue";
export default {
  name: "Contact",
  components: {
    TitleSection,
    BtnLink,
  },
};
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  background: var(--gradient-dark);
  padding: 100px 0px;
}
.title-section {
  text-align: center;
}
</style>
