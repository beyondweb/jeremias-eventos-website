<template>
  <section class="services">
    <div class="container">
      <div class="content">
        <div class="title-content">
          <TitleSection text="Serviços" />
        </div>
        <div class="services-lists">
          <ItemService
            :img="Icon1"
            title="Casamento"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a dolores."
          />
          <ItemService
            :img="Icon2"
            title="Aniversário"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a dolores."
          />
          <ItemService
            :img="Icon3"
            title="Formatura"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a dolores."
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import icon1 from "../../assets/icon-1.svg";
import icon2 from "../../assets/icon-2.svg";
import icon3 from "../../assets/icon-3.svg";
import TitleSection from "../Global/TitleSection";
import ItemService from "../Services/ItemService.vue";

export default {
  name: "Service",
  data() {
    return {
      Icon1: icon1,
      Icon2: icon2,
      Icon3: icon3
    };
  },
  components: {
    TitleSection,
    ItemService
  }
};
</script>

<style lang="scss" scoped>
.services {
  width: 100%;
  padding: 100px 0;
  background: var(--dark);
}
.title-content {
  text-align: center;
}
.services-lists {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 16px;
}
</style>