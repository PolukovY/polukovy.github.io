<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">1. Для початківців</h4>
              <p slot="description" class="description">
                SQL для аналізу даних – це курс для початківців, який навчить
                вас усього, що вам потрібно знати, щоб почати використовувати
                SQL для запиту даних. Я збираюся викладати це так, як навчився,
                працюючи у великих технологічних компаніях. Я буду
                використовувати інструменти, дуже схожі на ті, які ви будете
                використовувати в таких компаніях, як EPAM, Ciklum і інші.
              </p>
              <md-button slot="footer" class="md-simple md-success md-lg">
                Детальніше
              </md-button>
            </login-card>

            <login-card header-color="green">
              <h4 slot="title" class="card-title">2. Для початківців</h4>
              <p slot="description" class="description">
                SQL для аналізу даних – це курс для початківців, який навчить
                вас усього, що вам потрібно знати, щоб почати використовувати
                SQL для запиту даних. Я збираюся викладати це так, як навчився,
                працюючи у великих технологічних компаніях. Я буду
                використовувати інструменти, дуже схожі на ті, які ви будете
                використовувати в таких компаніях, як EPAM, Ciklum і інші.
              </p>
              <md-button slot="footer" class="md-simple md-success md-lg">
                Детальніше
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      firstname: null,
      email: null,
      password: null
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="css"></style>
