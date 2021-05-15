<template>
  <p>{{ pokemon.name }}</p>
</template>

<script>
import axios from "axios";
export default {
  created() {
    console.log("params", this.$route.params.pokemon)
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + this.$route.params.pokemon)
      .then((response) => {
        // handle success
        // console.log(response.data);
        this.pokemon = response.data;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },
  data() {
    return {
      data: "",
      pokemon: {}
    };
  },
};
</script>

<style>
</style>