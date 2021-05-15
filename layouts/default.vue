<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand fs-3" href="/">PokedexNav</a>
        <small class="ms-2 d-inline-block text-light">( project in process )</small>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
            </li>-->
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <Nuxt />
    <footer class="bg-dark text-center text-white mt-4">
      <div class="text-center p-3 text-white" style="background-color: rgba(0, 0, 0, 0.2);">
       <h6 class="ms-4 mt-4 mb-4">
      Made with
      <span class="text-danger mx-1">
        <i class="fa fa-heart"></i>
      </span> by
      <a class="link-light" href="https://github.com/vplasencia">Vivian</a> and
      <a class="link-light" href="https://github.com/carloseam94">Carlos</a>
    </h6>
      </div>
    </footer>
  </div>
</template>

<style>
</style>
