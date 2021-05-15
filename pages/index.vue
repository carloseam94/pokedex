<template>
  <div>
    <h1>Pokemon</h1>
    <button @click="fetchData" class="btn btn-primary">Fetch Data</button>
    <pre>{{ pokemon }}</pre>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pokemon: {},
    };
  },
  methods: {
    fetchData() {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/ditto")
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
