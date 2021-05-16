<template>
  <div>
    <div class="container" style="min-height: 100vh">
      <div class="row">
        <h3 class="my-4">Pokemon</h3>
      </div>
      <div class="row mb-4">
        <div v-for="pokemon in pokemons.results" :key="pokemon.name" class="col-md-4 col-sm-6">
          <app-pokemon-card :pokemon="pokemon"></app-pokemon-card>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row my-4 pb-4">
        <div class="col text-center">
          <button @click="previous($event)" :disabled="!pokemons.previous" class="btn btn-dark">
            <i class="fa fa-arrow-left me-2"></i>Previous
          </button>
          <input
            type="number"
            step="1"
            min="1"
            max="38"
            v-model="page"
            @keydown="keydownInputPgae($event)"
            id="input_page"
            class="ms-2 form-control d-inline-block"
            style="width: 70px"
          />
          <button class="me-2 btn btn-dark" @click="goToPage(page)">Go</button>
          <button @click="next($event)" :disabled="!pokemons.next" class="btn btn-dark">
            Next
            <i class="fa fa-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonCard from "../components/PokemonCard";
import axios from "axios";

export default {
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      pokemons: [],
      page: 1
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=30")
        .then(response => {
          this.pokemons = response.data;
        })
        .catch(error => {});
    },
    previous() {
      axios
        .get(this.pokemons.previous)
        .then(response => {
          this.pokemons = response.data;
          this.page--;
        })
        .catch(error => {});
    },
    goToPage(value) {
      axios
        .get(
          "https://pokeapi.co/api/v2/pokemon?limit=30&offset=" +
            (value - 1) * 30
        )
        .then(response => {
          this.pokemons = response.data;
        })
        .catch(error => {});
    },
    next() {
      axios
        .get(this.pokemons.next)
        .then(response => {
          this.pokemons = response.data;
          this.page++;
        })
        .catch(error => {});
    },
    keydownInputPgae($event) {
      if ($event.keyCode == 13) {
        this.goToPage(this.page);
      }
    }
  },
  components: {
    appPokemonCard: PokemonCard
  }
};
</script>

<style>

</style>
