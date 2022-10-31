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
                <h4>Готуємось до Алгоритмічних задач разом</h4>
                <p>
                  🇺🇦 Обговоримо стратегію якою потрібно дотримуватися при
                  вирішенні даних задач. <br />
                </p>
                <p><b>🇺🇦 Що саме буде в це входити:</b> <br /></p>
                <ul type="square">
                  <li>
                    Аналіз умови задачі, уточнення умови задачі
                  </li>
                  <li>
                    Буде не зайвим пройтися по тестовому прикладу і зрозуміти,
                    що ви все правильно зрозуміли.
                  </li>
                  <li>
                    Задати уточнюючі питання по задачі якщо вони є
                  </li>
                  <li>
                    І інші цікаві питання...
                  </li>
                </ul>
                <b>Про що будемо говорити:</b> <br />
                <ul type="square">
                  <li>
                    Виберемо деякі задачки, які помічені 'Easy' і спробуємо їх
                    вирішити
                  </li>
                  <li>А також, якщо вийде візьмемо ще пару з 'Medium' рівня</li>
                </ul>
                <b>По часу:</b> Десь година чи півтори <br />
                <b>Мова програмування:</b> Java <br />
                <p>🇺🇦 Ну що реєструйся буде багато корисної інформації.</p><br />
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
