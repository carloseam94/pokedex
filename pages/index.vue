<template>
  <div class="container" style="min-height: 100vh">
    <div class="row">
      <h3 class="my-4">Pokemon</h3>
    </div>
    <div class="row">
      <div v-for="pokemon in pokemons" :key="pokemon.name" class="col-md-4">
        <app-pokemon-card :pokemon="pokemon"></app-pokemon-card>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonCard from "../components/PokemonCard";
import axios from "axios";

export default {
  data() {
    return {
      pokemons: []
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
          this.pokemons = response.data.results;
        })
        .catch(error => {});
    }
  },
  components: {
    appPokemonCard: PokemonCard
  }
};
</script>

<style>
</style>
