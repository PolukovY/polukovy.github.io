<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">Yevgen Polukov</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              Завдання тренінгів — навчити вас вчитися і дізнаватися щось нове,
              чи закрити прогалини. У вас буде можливість вибрати тему яку ви
              хочете покршити, а ми зробими лекцію цікавою і не пошкодуєте.
            </p>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['Деталі тренінгу', 'Реєстрація']"
              :tab-icon="['camera', 'favorite']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <template slot="tab-pane-1">
                <a href="#"> <h4>1. SQL starter</h4></a>
                <p>
                  <b>SQL для аналізу даних</b> – це курс для початківців, який
                  навчить вас усього, що вам потрібно знати, щоб почати
                  використовувати SQL для запиту даних. <br />
                  Я збираюся викладати це так, як навчився, працюючи у великих
                  технологічних компаніях. <br />
                </p>
                <b>Розглянемо такі оператори:</b> <br />
                <ul type="square">
                  <li>Select and From</li>
                  <li>Where and Limit</li>
                  <li>And, or, not</li>
                  <li>Like</li>
                  <li>In operator</li>
                  <li>is null</li>
                  <li>Order By</li>
                  <li>Count, min, max, sum, avg</li>
                  <li>Group by</li>
                  <li>Having</li>
                  <li>Distinct</li>
                  <li>Union</li>
                  <li>Join</li>
                </ul>
                В кожному прикладі буде як теорія так і практика.<br />
              </template>
              <template slot="tab-pane-2">
                <div class="tim-typo"><h5>Поїхали:</h5></div>
                <div class="tim-typo">
                  <ul type="square">
                    <li>
                      Додай наш <a href="https://t.me/TechWorld_With_Yevgen_Bot">Телеграм</a>. Вибери курс який
                      цікавить і отримай ціну.
                    </li>
                    <li>Оплачуєте і відправляєте нам квитанцію чи фото.</li>
                    <li>Отримуєте доступ до тренінгу.</li>
                  </ul>
                </div>
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
export default {
  components: {
    Tabs
  },
  bodyClass: "profile-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg3.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
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
