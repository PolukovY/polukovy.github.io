<template>
  <div>
    <div class="tim-typo"><h5>Швидка оплата:</h5></div>
    <div class="tim-typo">
      <ul type="square">
        <li>
          <a v-bind:href="currentUrl" v-on:click="onButtonClick(courseId)"
            >Отримати деталі платежу і оплати</a
          >
        </li>
        <li>
          Отримуєте доступ до тренінгу.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    courseId: String,
    currentUrl: String
  },
  methods: {
    onButtonClick: function(id) {
      window.open(
        `https://pay-techworld-with-yevgen.herokuapp.com/checkout/${id}`,
        "newwindow",
        "width=600,height=500"
      );
      return false;
    }
  }
};
</script>
