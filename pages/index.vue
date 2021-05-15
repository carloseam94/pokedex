<template>
  <div>
    <h1>Pokemons</h1>
    <a :href="pokemon.results.name">Pokemon</a>
    <!-- <button @click="fetchData" class="btn btn-primary">Fetch Data</button> -->
    <!-- <pre>{{ pokemon.results[0].name }}</pre> -->
  </div>
</template>

<script>
import axios from "axios";

export default {

  mounted() {
    this.fetchData();
  },
  data() {
    return {
      pokemon: [],
    };
  },
  methods: {
    fetchData() {
      axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
          // handle success
          console.log(response.data);
          this.pokemon = response.data;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>
