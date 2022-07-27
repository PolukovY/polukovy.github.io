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
                  <h4>1. 🇺🇦 SQL starter</h4></a
                >
                <b>SQL для аналізу даних</b> – це курс для початківців, який
                навчить вас усього, що вам потрібно знати, щоб почати
                використовувати SQL для запиту даних. <br />
                Я збираюся викладати це так, як навчився, працюючи у великих
                технологічних компаніях. <br />
                <a href="#/trainings/sql-starter">👉 детальніше</a><br />
              </template>
              <template slot="tab-pane-1">
                <a href="#/trainings/sql-like-a-pro">
                  <h4>2. 🇺🇦 SQL like a pro</h4></a
                >
                <b>SQL для аналізу даних</b> – це курс хто хоче знати більше
                про:<br />
                <ul type="square">
                  <li>SQL optimization</li>
                  <li>Windows functions</li>
                </ul>
                <a href="#/trainings/sql-like-a-pro">👉 детальніше</a><br />
              </template>
              <template slot="tab-pane-2">
                <a href="#">
                  <h4>3. 🇺🇦 Працюємо з Optional API правильно</h4></a
                >
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits.<br />
                <a href="#">👉 детальніше</a><br />
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
