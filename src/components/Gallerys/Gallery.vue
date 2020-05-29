<template>
  <section class="gallery">
    <div class="title-content">
      <TitleSection text="Galeria" />
    </div>
    <div class="gallery-actions">
      <ul>
        <li>Todos os eventos</li>
        <li>Casamentos</li>
        <li>Aniversarios</li>
        <li>Formaturas</li>
      </ul>
    </div>
    <div class="gallery-list">
      <div class="gallery-item">
        <div class="img-item">
          <img src="../../assets/about.jpg" alt="Nome da galeria" />
        </div>
        <div class="hover-item">
          <div class="description">
            <small>Festa de formatura</small>
            <p>
              Festa de formatura da lara cibelle.
            </p>
          </div>
          <div class="btn-expand">
            <i class="bx bx-expand"></i>
          </div>
        </div>
      </div>
      <div class="gallery-item">
        <div class="img-item">
          <img src="../../assets/about.jpg" alt="Nome da galeria" />
        </div>
        <div class="hover-item">
          <div class="description">
            <small>Festa de formatura</small>
            <p>
              Festa de formatura da lara cibelle.
            </p>
          </div>
          <div class="btn-expand">
            <i class="bx bx-expand"></i>
          </div>
        </div>
      </div>
      <div class="gallery-item">
        <div class="img-item">
          <img src="../../assets/about.jpg" alt="Nome da galeria" />
        </div>
        <div class="hover-item">
          <div class="description">
            <small>Festa de formatura</small>
            <p>
              Festa de formatura da lara cibelle.
            </p>
          </div>
          <div class="btn-expand">
            <i class="bx bx-expand"></i>
          </div>
        </div>
      </div>
      <div class="gallery-item">
        <div class="img-item">
          <img src="../../assets/about.jpg" alt="Nome da galeria" />
        </div>
        <div class="hover-item">
          <div class="description">
            <small>Festa de formatura</small>
            <p>
              Festa de formatura da lara cibelle.
            </p>
          </div>
          <div class="btn-expand">
            <i class="bx bx-expand"></i>
          </div>
        </div>
      </div>
      <div class="gallery-item">
        <div class="img-item">
          <img src="../../assets/about.jpg" alt="Nome da galeria" />
        </div>
        <div class="hover-item">
          <div class="description">
            <small>Festa de formatura</small>
            <p>
              Festa de formatura da lara cibelle.
            </p>
          </div>
          <div class="btn-expand">
            <i class="bx bx-expand"></i>
          </div>
        </div>
      </div>
      <div class="gallery-item">
        <div class="img-item">
          <img src="../../assets/about.jpg" alt="Nome da galeria" />
        </div>
        <div class="hover-item">
          <div class="description">
            <small>Festa de formatura</small>
            <p>
              Festa de formatura da lara cibelle.
            </p>
          </div>
          <div class="btn-expand">
            <i class="bx bx-expand"></i>
          </div>
        </div>
      </div>
      <div class="gallery-item">
        <div class="img-item">
          <img src="../../assets/about.jpg" alt="Nome da galeria" />
        </div>
        <div class="hover-item">
          <div class="description">
            <small>Festa de formatura</small>
            <p>
              Festa de formatura da lara cibelle.
            </p>
          </div>
          <div class="btn-expand">
            <i class="bx bx-expand"></i>
          </div>
        </div>
      </div>
      <div class="gallery-item">
        <div class="img-item">
          <img src="../../assets/about.jpg" alt="Nome da galeria" />
        </div>
        <div class="hover-item">
          <div class="description">
            <small>Festa de formatura</small>
            <p>
              Festa de formatura da lara cibelle.
            </p>
          </div>
          <div class="btn-expand">
            <i class="bx bx-expand"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TitleSection from "../Global/TitleSection.vue";
export default {
  name: "Gallery",
  components: {
    TitleSection,
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  width: 100%;
  background: var(--gradient-dark);
  padding: 100px 0px;
}
.title-section {
  text-align: center;
}
.gallery-actions {
  width: 100%;
  display: flex;
  ul {
    display: flex;
    width: 100%;
    justify-content: center;
    li {
      padding: 10px 32px;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      color: var(--white);
      margin: 0px 8px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        color: var(--gold);
        transition: all 0.3s;
      }
    }
  }
}
.gallery-list {
  width: 100%;
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.gallery-item {
  width: 100%;
  height: 280px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}
.gallery-item .img-item {
  position: relative;
}
.gallery-item .img-item img {
  width: 100%;
  height: 100%;
  transition: transform 2s;
}
.gallery-item:hover .img-item img {
  transform: scale(1.1);
}

.gallery-item .hover-item {
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: scaleY(0);
  transition: transform 0.2s;
  transition: all 0.3s;
}
.gallery-item:hover .hover-item {
  transform: scaleY(1);
  transition: transform 0.2s;
  box-shadow: inset 0 0 0 200px rgba($color: #f0c442, $alpha: 0.3);
}

.gallery-item .hover-item .description small {
  text-transform: uppercase;
  font-size: 0.75rem;
  color: var(--white);
}
.gallery-item .hover-item .description p {
  font-family: var(--abril);
  font-size: 1.75rem;
  padding: 32px 0px;
  color: var(--white);
}

.gallery-item .hover-item .btn-expand {
  margin-bottom: 75px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--white);
  border-radius: 30px;
}
.gallery-item .hover-item .btn-expand i {
  margin: 0;
  padding: 0;
  color: var(--white);
}
</style>
