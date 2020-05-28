<template>
  <section class="hero">
    <div class="role">
      <span>Sempre focado no sucesso do seu Evento.</span>
      <img src="../../assets/arrow.svg" alt="" />
    </div>
    <div class="title-site">
      <h5>Com o Compromisso de estar</h5>
      <h1>Sempre focado no sucesso do seu Evento.</h1>
    </div>
    <div class="social-links">
      <ul>
        <li><i class="bx bxl-facebook"></i></li>
        <li><i class="bx bxl-instagram"></i></li>
        <li><i class="bx bxl-whatsapp"></i></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  padding: 16px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.role {
  display: grid;
  > span {
    margin: 0;
    /* padding: 0;
    transform: rotate(90deg); */
    color: var(--white);
    text-transform: uppercase;
    font-weight: 100;
    font-size: 0.75rem;
    letter-spacing: 0.1rem;
  }
}
</style>
