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
              :tab-name="['SQL', 'Java']"
              :tab-icon="['camera', 'palette', 'favorite', 'palette']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <a href="#/trainings/sql-starter">
                  <h4>🇺🇦 Основи реляційних баз даних. SQL</h4></a
                >
                Разом і з нуля пройдемо усі етапи проектування, адміністрування,
                резервування та масштабування БД з використанням PostgreSQL,
                MySQL.<br />
                <a href="#/trainings/sql-starter">👉 детальніше</a><br />
              </template>
              <template slot="tab-pane-2">
                <a href="#/trainings/optional-api">
                  <h4>🇺🇦 Працюємо з Optional API правильно</h4></a
                >
                Поговоримо про Optional для чого він потрібен, як він нам
                допомагає. А також розглянемо приклади як можна писати правильні
                і не правильні варіанти його використання.<br />
                <a href="#/trainings/optional-api">👉 детальніше</a><br />
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

export default {
  components: {
    Tabs,
    TrainingGoldSection,
    AvatarHeaderSection
  },
  bodyClass: "profile-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg3.jpg")
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
