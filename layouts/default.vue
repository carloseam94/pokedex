<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
$light-mode: #fff;
$dark-mode: #163c5b;
$sepia-mode: #f1e7d0;

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Poppins", sans-serif;
}

.dark-mode body {
  background-color: $dark-mode;
  color: #ebf4f1;
}

.sepia-mode body {
  background-color: $sepia-mode;
  color: #433422;
}

img {
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}

*:focus {
  outline: none !important;
}

::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-track {
  border-radius: 3px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgb(102, 102, 99);
  border: 2px solid #f5f5f5;
}

</style>
