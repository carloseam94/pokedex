<template>
  <div v-if="loading" id="loader" class="center"></div>
</template>

<script>
export default {
  name: "Loading",
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style>
#loader {
  border: 5px solid transparent;
  border-radius: 50%;
  border-top: 5px solid #4e80e5;
  width: 35px;
  height: 35px;
  animation: spin 1s linear infinite;
  border-right: 5px solid #4e80e5;
  border-bottom: 5px solid #4e80e5;

  z-index: 1000;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

.center {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: fixed;
}
</style>