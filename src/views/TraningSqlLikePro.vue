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
                <b> 🇺🇦 SQL для аналізу даних</b> – це курс хто хоче знати більше
                про:<br />
                <ul type="square">
                  <li>SQL optimization</li>
                  <li>Windows functions</li>
                  <li>Інщі пукти ще в процесі</li>
                </ul>
                В кожному прикладі буде як теорія так і практика.<br />
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
