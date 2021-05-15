<template>
  <div class="row switch-mode justify-content-center mx-5">
    <div class="col">
      <span
        title="Light Mode"
        @click="$colorMode.preference = 'light'"
      >
        <img src="/sun.svg" alt="sun icon" />
      </span>
    </div>
    <div class="col">
      <span
        title="Dark Mode"
        @click="$colorMode.preference = 'dark'"
      >
        <img src="/moon.svg" alt="moon icon" />
      </span>
    </div>
    <div class="col">
      <span
        title="Sepia Mode"
        @click="$colorMode.preference = 'sepia'"
      >
        <img src="/coffee.svg" alt="coffee icon" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorModePicker",
};
</script>

<style scoped>
.switch-mode {
  cursor: pointer;
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>