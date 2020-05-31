<template>
  <section class="hero">
    <div class="arrow-box">
      <img src="../../assets/arrow.svg" alt="" />
    </div>
    <div class="bg-box-socialicons">
      <div class="socialicons">
        <ul>
          <li>
            <a href=""><i class="bx bxl-facebook"></i></a>
          </li>
          <li>
            <a href=""><i class="bx bxl-instagram"></i></a>
          </li>
          <li>
            <a href=""><i class="bx bxl-twitter"></i></a>
          </li>
          <li>
            <a href=""><i class="bx bxl-whatsapp"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="title-box">
        <div>
          <p>Com o Compromisso de estar</p>
          <h1>
            Sempre focado no sucesso<br />
            do seu <span>Evento</span>.
          </h1>
        </div>
      </div>
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
}
.arrow-box {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  img {
    bottom: 0;
    margin-bottom: -25px;
    margin-left: 120px;
  }
}
.bg-box-socialicons {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.socialicons ul {
  padding: 16px 20px;
  background: var(--gold);
  > li {
    margin: 16px 0px;
    font-size: 1.5rem;
    a i {
      color: var(--dark);
    }
  }
}
.title-box {
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    z-index: 99;
    p {
      text-transform: uppercase;
      color: var(--white);
      text-align: center;
      letter-spacing: 0.1rem;
      font-weight: 100;
      margin-bottom: 16px;
    }
    h1 {
      color: var(--white);
      font-family: var(--abril);
      font-size: 4rem;
      text-align: center;
      line-height: 72px;
      span {
        background: var(--gradient-gold);
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
@media (max-width: 600px) {
  .bg-box-socialicons {
    display: none;
  }
  .arrow-box {
    display: none;
  }
  .title-box div h1 {
    font-size: 3rem;
    padding: 0px 16px;
    line-height: 44px;
  }
}
@media (max-width: 900px) {
  .bg-box-socialicons {
    display: none;
  }
  .arrow-box {
    display: none;
  }
  .title-box div h1 {
    font-size: 3rem;
    padding: 0px 16px;
    line-height: 44px;
  }
}
</style>
