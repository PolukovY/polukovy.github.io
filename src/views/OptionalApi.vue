<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <AvatarHeaderSection />
          <TrainingGoldSection />
          <div class="profile-tabs">
            <tabs
              :tab-name="['Деталі тренінгу', 'Реєстрація']"
              :tab-icon="['camera', 'favorite']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <template slot="tab-pane-1">
                <h4>Працюємо з Optional API правильно</h4>
                <p>
                  🇺🇦 Поговоримо про Optional для чого він потрібен, як він нам
                  допомагає. А також розглянемо приклади як можна писати
                  правильні і не правильні варіанти його використання. <br />
                </p>
                <b>Про що будемо говорити:</b> <br />
                <ul type="square">
                  <li>Optional теорії і його ціль</li>
                  <li>Розглянемо на прикладах його API</li>
                  <li>Пишемо на Optional в старому стилі. Норм?</li>
                  <li>Де використати flatMap в Optional</li>
                  <li>Найкраща практика використання Optional</li>
                  <li>
                    Де використовувати не варто і краще писати в старому стилі
                  </li>
                </ul>
                Ну що реєструйся буде багато корисної інформації.<br />
              </template>
              <template slot="tab-pane-2">
                <RegistrationSection />
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
import RegistrationSection from "@/views/components/RegistrationSection";
import TrainingGoldSection from "@/views/components/TrainingGoldSection";
import AvatarHeaderSection from "@/views/components/AvatarHeaderSection";
export default {
  components: {
    Tabs,
    RegistrationSection,
    TrainingGoldSection,
    AvatarHeaderSection
  },
  bodyClass: "profile-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg3.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpeg")
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

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
