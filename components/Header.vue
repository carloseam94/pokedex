<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand fs-3" to="/">PokedexNav</NuxtLink>
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
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <ColorModePicker />
            </li>
          </ul>

          <div class="d-flex">
            <Dropdown
              :options="search_options"
              v-on:selected="validateSelection"
              v-on:filter="getDropdownValues"
              :disabled="false"
              :maxItem="10"
              placeholder="Pokemon"
              class="mx-2"
            ></Dropdown>
            <NuxtLink :to="'/pokemon/' + pokemon_selected" class="btn-search btn btn-sm btn-outline-light fs-5 pt-0" @click="search"><i class="fa fa-search"></i></NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import axios from "axios";

export default {
  computed: {
    search_options() {
      var res = [];
      var i = 1;
      this.pokemons.forEach(p => {
        res.push({ id: i++, name: p.name });
      });
      return res;
    }
  },
  data() {
    return {
      pokemons: [],
      pokemon_selected: ''
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    document.getElementsByTagName('input').forEach(x => {
      x.setAttribute('autocomplete','off');
    })
  },
  methods: {
    fetchData() {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=1118")
        .then(response => {
          this.pokemons = response.data.results;
        })
        .catch(error => {});
    },
    validateSelection(selection) {
      this.pokemon_selected = selection.name;

    },
    getDropdownValues() {

    },
    search($event) {
      if(!this.pokemon_selected || this.pokemon_selected == '') {
        $event.preventDefault();
        return false;
      }
    }
  }
};
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

.btn-search:focus {
  outline: none !important;
  box-shadow: none !important;
}

.btn-search {
  outline: none !important;
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