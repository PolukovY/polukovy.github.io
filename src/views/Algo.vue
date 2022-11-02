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
                <h4>Готуємось до aлгоритмічних задач разом</h4>
                <p>
                  🇺🇦 Обговоримо стратегію якої потрібно дотримуватися при
                  вирішенні задач. <br />
                </p>
                <p><b>🇺🇦 Що саме буде в це входити:</b> <br /></p>
                <ul type="square">
                  <li>
                    Аналіз умови задачі
                  </li>
                  <li>
                    Розв'язання задачі
                  </li>
                  <li>
                    Оцінення складності реалізованого рішення
                  </li>
                  <li>
                    І інше...
                  </li>
                </ul>
                <b>Про що будемо говорити:</b> <br />
                <ul type="square">
                  <li>
                    Розбір задач рівня 'Easy' і 'Medium'
                  </li>
                </ul>
                <b>По часу:</b> 1 година <br />
                <b>Мова програмування:</b> Java <br />
                <p>🇺🇦 Ну що реєструйся, буде багато корисної інформації.</p><br />
              </template>
              <template slot="tab-pane-2">
                <RegistrationGoogleFormSectionStream
                  url="https://forms.gle/TqGAyHkU4TLjBvzA7"
                  currentUrl="/#/trainings/algo"
                />
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
import TrainingGoldSection from "@/views/components/TrainingGoldSection";
import AvatarHeaderSection from "@/views/components/AvatarHeaderSection";
import RegistrationGoogleFormSectionStream from "@/views/components/RegistrationGoogleFormSectionStream";
export default {
  components: {
    Tabs,
    TrainingGoldSection,
    AvatarHeaderSection,
    RegistrationGoogleFormSectionStream
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
