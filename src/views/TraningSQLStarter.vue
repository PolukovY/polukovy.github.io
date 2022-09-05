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
                <h4>Основи реляційних баз даних. SQL</h4>
                <p>
                  Разом і з нуля пройдемо усі етапи проектування,
                  адміністрування, резервування та масштабування БД з
                  використанням PostgreSQL, MySQL.
                </p>
                <b>Кому підійде цей курс?</b>
                <ul type="square">
                  <li>Студент</li>
                  <li>Адміністратор БД</li>
                  <li>Розробник</li>
                </ul>

                <b>Чого ви навчитеся?</b>

                <ul type="square">
                  <li>Введення у курс</li>
                  <li>Основи реляційних баз даних</li>
                  <li>Проектування реляційних баз даних</li>
                  <li>Логічна та фізична структура баз даних</li>
                  <li>Транзакції ACID</li>
                  <li>Основи мови запитів SQL</li>
                  <li>Оптимізація реляційних баз даних</li>
                  <li>Особливості PostgreSQL</li>
                  <li>Особливості MySQL</li>
                </ul>

                <b>Все про курс за 5 хвилин</b> <br />
                //TODO add video <br />

                <b>Як відбувається навчання?</b> <br />
                //TODO add slider <br />

                <b>Що ви отримаєте</b> <br />
                <ul type="square">
                  <li>Швидке занурення</li>
                  <li>Прикладні знання</li>
                  <li>Досвід провідних експертів</li>
                  <li>Інвестиція в кар'єру</li>
                  <li>Спілкування з одногрупниками</li>
                </ul>

                <b>FAQ</b>
                <ul type="square">
                  <li>
                    <b>Наскільки я маю доступ до матеріалів?</b> <br />
                    Доступ до всіх навчальних матеріалів залишиться у вас
                    назавжди. Ми не обмежуємо вас за часом.
                  </li>
                  <li>
                    <b>Коли проходять заняття?</b> <br />
                    Будь-яке зручне для вас! Це онлайн курс, тому можете
                    займатися хоч вночі, укутавшись в ковдру і попиваючи чай.
                  </li>
                </ul>
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
