<template>
  <div>
    <h1>{{ pokemon.name }}</h1>
    {{ pokemon }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pokemon: []
    };
  },
  created() {
      this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/bulbasaur")
        .then(response => {
          this.pokemon = response.data;
        })
        .catch(error => {});
    }
  }
};
</script>

<style>
</style>
