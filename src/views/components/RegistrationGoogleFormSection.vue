<template>
  <div>
    <div class="tim-typo"><h5>Швидка реєстрація:</h5></div>
    <div class="tim-typo">
      <ul type="square">
        <li>
          <a v-bind:href="currentUrl" v-on:click="onButtonClick(url)"
            >Отримати деталі платежу і оплати зараз чи пізніше</a
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
    url: String,
    currentUrl: String
  },
  methods: {
    onButtonClick: function(url) {
      window.open(`${url}`, "newwindow", "width=600,height=500");
      return false;
    }
  }
};
</script>
