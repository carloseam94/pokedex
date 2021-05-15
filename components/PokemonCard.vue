<template>
    <div class="card mb-4" style="border-radius: .75rem;">
      <a :href="'/pokemon/' + pokemon.name">
        <img class="card-img-top" :src="pokemonData.sprites.other['official-artwork'].front_default" :alt="'sprite_' + pokemon.name" />
      </a>
      <div class="card-body">
        <a :href="'/pokemon/' + pokemon.name">
          <h2 class="card-title text-capitalize d-inline-block">{{ pokemonData.name }}</h2>
        </a>
        <div>
          <span>
            <img
              :src="'images/types/' + pokemonData.types[0].type.name + '.png'"
              width="32"
              alt="type 1"
            />
            <h5 class="d-inline-block text-capitalize">{{ pokemonData.types[0].type.name }}</h5>
          </span>
          <span v-if="pokemonData.types.length > 1" class="ms-2">
            <img
              :src="'images/types/' + pokemonData.types[1].type.name + '.png'"
              width="32"
              alt="type 2"
            />
            <h5 class="d-inline-block text-capitalize">{{ pokemonData.types[1].type.name }}</h5>
          </span>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["pokemon"],
  data() {
    return {
      pokemonData: {
        sprites: { 
          front_default: "",
          other: {
            'official-artwork': {
              front_default: ""
            }
          }
        },
        name: this.pokemon.name,
        types: [
          { type: { name: "normal", url: "" } },
          { type: { name: "normal", url: "" } }
        ]
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + this.pokemon.name)
        .then(response => {
          this.pokemonData = response.data;
        })
        .catch(error => {});
    }
  }
};
</script>

<style>
</style>