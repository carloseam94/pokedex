<template>
  <footer class="bg-dark text-center text-white mt-4">
    <div
      class="text-center p-3 text-white"
      style="background-color: rgba(0, 0, 0, 0.2)"
    >
      <a
        href="https://github.com/carloseam94/pokedex"
        rel="noreferrer noopener nofollow"
        target="_blank"
        ><i class="fab fa-github"></i
      ></a>

      <h6 class="my-4">
        Made with
        <span class="text-danger mx-1">
          <i class="fa fa-heart"></i>
        </span>
        by
        <a
          class="link-light"
          style="text-decoration: underline"
          rel="noreferrer noopener nofollow"
          href="https://twitter.com/ViviPlasenciaC?s=09"
          title="Vivian Twitter Profile"
          target="_blank"
          >Vivian</a
        >
        and
        <a
          class="link-light"
          style="text-decoration: underline"
          rel="noreferrer noopener nofollow"
          href="https://github.com/carloseam94"
          title="Carlos Github Profile"
          target="_blank"
          >Carlos</a
        >
      </h6>
    </div>
    <div></div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.fa-github {
  font-size: 1.5em;
  color: white;
}

.fa-github:hover {
  color: rgba($color: #fff, $alpha: 0.7);
}
</style>