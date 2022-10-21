<template>
  <div>
    <div class="tim-typo"><h5>Швидка реєстрація:</h5></div>
    <div class="tim-typo">
      <ul type="square">
        <li>
          <a v-bind:href="currentUrl" v-on:click="onButtonClick(url)"
            >Курс ще в розробці, тому реєструйся</a
          >
        </li>
        <li>
          Як курс буде закінчений ми вам повідомимо на почту.
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
