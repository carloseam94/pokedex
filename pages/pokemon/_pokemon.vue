<template>
  <div class="container my-4" style="min-height: 100vh">
    <div class="row">
      <div class="col text-center">
        <h1 class="text-capitalize">{{ pokemon.name }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <img :src="pokemon.sprites.other['official-artwork'].front_default" alt="official_artwork">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img :src="pokemon.sprites.back_default" alt="back_default">
      </div>
      <div class="col">
        <img :src="pokemon.sprites.back_female" alt="back_female">
      </div>
      <div class="col">
        <img :src="pokemon.sprites.back_shiny" alt="back_shiny">
      </div>
      <div class="col">
        <img :src="pokemon.sprites.back_shiny_female" alt="back_shiny_female">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img :src="pokemon.sprites.front_default" alt="front_default">
      </div>
      <div class="col">
        <img :src="pokemon.sprites.front_female" alt="front_female">
      </div>
      <div class="col">
        <img :src="pokemon.sprites.front_shiny" alt="front_shiny">
      </div>
      <div class="col">
        <img :src="pokemon.sprites.front_shiny_female" alt="front_shiny_female">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: "",
      pokemon: {
        sprites: { 
          front_default: "",
          front_female: "",
          front_shiny: "",
          front_shiny_female: "",
          back_default: "",
          back_female: "",
          back_shiny: "",
          back_shiny_female: "",
          other: {
            'official-artwork': {
              front_default: ""
            }
          }
        },
        name: "",
        types: [
          { type: { name: "normal", url: "" } },
          { type: { name: "normal", url: "" } }
        ]
      }
    };
  },
  created() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + this.$route.params.pokemon)
      .then(response => {
        this.pokemon = response.data;
        console.log(this.pokemon)
      })
      .catch(error => {});
  },
};
</script>

<style>
</style>