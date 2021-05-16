<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand fs-3" href="/">PokedexNav</a>
        <!-- <small class="ms-2 d-inline-block text-light"
          >( project in process )</small
        > -->
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

          <div class="colorModePicker">
            <ColorModePicker />
          </div>

          <!-- <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form> -->
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 7rem;
}

.navbar-toggler {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}

.navbar-toggler:focus {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}

/* ------------------- toggler ---------- */

.navbar-toggler-icon:before,
.navbar-toggler-icon:after {
  position: absolute;
  content: "";
}

.navbar-toggler-icon,
.navbar-toggler-icon:before,
.navbar-toggler-icon:after {
  width: 25px;
  height: 2px;
  background-color: #fff;
  display: block;
}

.navbar-toggler-icon:before {
  margin-top: -8px;
}

.navbar-toggler-icon:after {
  margin-top: 8px;
}

.navbar-toggler {
  outline: none;
  border: none;
}

.navbar-toggler span {
  -webkit-transition-duration: 0s;
  transition-duration: 0s;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

.navbar-toggler span:before {
  -webkit-transition-property: margin, -webkit-transform;
  transition-property: margin, transform;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-delay: 0.2s, 0s;
  transition-delay: 0.2s, 0s;
}

.navbar-toggler span:after {
  -webkit-transition-property: margin, -webkit-transform;
  transition-property: margin, transform;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-delay: 0.2s, 0s;
  transition-delay: 0.2s, 0s;
}

.navbar-toggler[aria-expanded="true"] span {
  background-color: transparent;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
  background-image: none;
}

.navbar-toggler[aria-expanded="true"] span:before {
  margin-top: 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition-delay: 0s, 0.2s;
  transition-delay: 0s, 0.2s;
}

.navbar-toggler[aria-expanded="true"] span:after {
  margin-top: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transition-delay: 0s, 0.2s;
  transition-delay: 0s, 0.2s;
}

/* -------------- end toggler ---------------- */

</style>