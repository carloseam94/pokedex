<template>
  <div class="container my-4" style="min-height: 100vh">
    <div class="row">
      <div class="col">
        <button class="back-btn" @click="$router.back()">
          <h4 class="d-inline-block">
            <span class="fs-6"><i class="fa fa-arrow-left me-2"></i></span>Back
          </h4>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <h1 class="text-capitalize">{{ pokemon.name }}</h1>
        <h2># {{ pokemon.id }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <img
          :src="pokemon.sprites.other['official-artwork'].front_default"
          alt="official_artwork"
          class="w-100"
          style="max-width: 475px"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2>Sprites</h2>
      </div>
    </div>

    <div class="row">
      <div class="col text-center">
        <h5>Default</h5>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <img
          :src="pokemon.sprites.back_default"
          width="200"
          alt="back_default"
        />
      </div>
      <div class="col text-center">
        <img
          :src="pokemon.sprites.front_default"
          width="200"
          alt="front_default"
        />
      </div>
    </div>

    <div class="row">
      <div class="col text-center">
        <h5>Default Shiny</h5>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <img :src="pokemon.sprites.back_shiny" width="200" alt="back_shiny" />
      </div>
      <div class="col text-center">
        <img :src="pokemon.sprites.front_shiny" width="200" alt="front_shiny" />
      </div>
    </div>

    <div v-if="pokemon.sprites.back_female">
      <div class="row">
        <div class="col text-center">
          <h5>Female</h5>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <img
            :src="pokemon.sprites.back_female"
            width="200"
            alt="back_female"
          />
        </div>
        <div class="col text-center">
          <img
            :src="pokemon.sprites.front_female"
            width="200"
            alt="front_female"
          />
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <h5>Female Shiny</h5>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <img
            :src="pokemon.sprites.back_shiny_female"
            width="200"
            alt="back_shiny_female"
          />
        </div>
        <div class="col text-center">
          <img
            :src="pokemon.sprites.front_shiny_female"
            width="200"
            alt="front_shiny_female"
          />
        </div>
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
            "official-artwork": {
              front_default: "",
            },
          },
        },
        name: "",
        types: [
          { type: { name: "normal", url: "" } },
          { type: { name: "normal", url: "" } },
        ],
      },
    };
  },
  created() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + this.$route.params.pokemon)
      .then((response) => {
        this.pokemon = response.data;
        // console.log(this.pokemon);
      })
      .catch((error) => {});
  },
};
</script>

<style lang="scss" scoped>
.back-btn {
  border: none;
  background-color: transparent;
  color: black;
}
.back-btn:hover {
  color: rgba($color: black, $alpha: .7);
}
.dark-mode .back-btn {
  color: white;
}

.dark-mode .back-btn:hover {
  color: rgba($color: white, $alpha: .7);
}
</style>