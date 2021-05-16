<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand fs-3" href="/">PokedexNav</a>
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
              name="pokemon_search"
              :maxItem="10"
              placeholder="Pokemon"
              class="mx-2"
            ></Dropdown>
            <a :href="'/pokemon/' + pokemon_selected" class="btn btn-sm btn-outline-light" @click="search"><i class="fa fa-search" style="padding-top: 6px;"></i></a>
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
</style>