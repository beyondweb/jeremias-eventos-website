<template>
  <section class="team">
    <div class="container">
      <div class="content">
        <div class="title-content">
          <TitleSection text="Nosso Time" />
        </div>
        <div class="team-lists">
          <ItemTeam
            :img="Avatar1"
            name="Jeremias Alves"
            ocupation="Proprietário / CEO"
            info="I am an ambitious workaholic, but apart from that, pretty simple person."
          />
          <ItemTeam
            :img="Avatar2"
            name="David Smith"
            ocupation="Organizador"
            info="I am an ambitious workaholic, but apart from that, pretty simple person."
          />
          <ItemTeam
            :img="Avatar3"
            name="John Wilson"
            ocupation="Colaborador"
            info="I am an ambitious workaholic, but apart from that, pretty simple person."
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import avatar1 from "../../assets/avatar-1.jpg";
import avatar2 from "../../assets/avatar-2.jpg";
import avatar3 from "../../assets/avatar-3.jpg";
import TitleSection from "../Global/TitleSection.vue";
import ItemTeam from "../Teams/ItemTeam.vue";

export default {
  name: "Team",
  data() {
      return {
          Avatar1: avatar1,
          Avatar2: avatar2,
          Avatar3: avatar3,
      }
  },
  components: {
    TitleSection,
    ItemTeam
  }
};
</script>

<style lang="scss" scoped>
.team {
  width: 100%;
  background: var(--dark);
  padding: 100px 0px;
}
.title-section {
  text-align: center;
}
.team-lists {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}
</style>