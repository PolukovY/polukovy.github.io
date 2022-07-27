<template>
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
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    img: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    }
  },
  computed: {}
};
</script>
