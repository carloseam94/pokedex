<template>
  <div class="card mb-4" style="border-radius: 0.75rem">
    <a :href="'/pokemon/' + pokemon.name">
        <img id="pokemon-img" class="card-img-top" :src="pokemonData.sprites.other['official-artwork'].front_default" :alt="'sprite_' + pokemon.name" />
        <span id="img-preloader" class="img-preloader"></span>
      </a>
    <div class="card-body">
      <a :href="'/pokemon/' + pokemon.name">
      <h4 class="card-title text-capitalize d-inline-block">{{ pokemon.name}}</h4>
      </a>
      <div>
        <span>
          <img
            :src="'images/types/' + pokemonData.types[0].type.name + '.png'"
            width="32"
            alt="type 1"
            class="rounded-circle"
          />
          <h5 class="d-inline-block text-capitalize">
            {{ pokemonData.types[0].type.name }}
          </h5>
        </span>
        <span v-if="pokemonData.types.length > 1" class="ms-2">
          <img
            :src="'images/types/' + pokemonData.types[1].type.name + '.png'"
            width="32"
            alt="type 2"
            class="rounded-circle"
          />
          <h5 class="d-inline-block text-capitalize">
            {{ pokemonData.types[1].type.name }}
          </h5>
        </span>
        <span style="float: right;" class="pt-1">
          <h5 class="d-inline-block"># {{ pokemonData.id }}</h5>
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
          { type: { name: "", url: "" } },
          { type: { name: "", url: "" } },
        ],
      },
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    document.getElementById("pokemon-img").onload = function() {
      document.getElementById("img-preloader").style.display = "none";
      document.getElementById("pokemon-img").style.display = "unset";
    };
  },
  methods: {
    fetchData() {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + this.pokemon.name)
        .then((response) => {
          this.pokemonData = response.data;
        })
        .catch((error) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
$dark-mode: #163c5b;
$sepia-mode: #f1e7d0;

// .card-img-top {
//   min-height: 294px;
// }

.card:hover {
  transition: all 0.2s ease-in-out;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  transform: translateY(-5px) !important;
}

a {
  text-decoration: none;
}

a h4 {
  color: #212529;
  transition: all 0.2s ease-in-out;
}

a h4:hover {
    color: rgba(33, 37, 41, .7);
}

.dark-mode .card {
  background-color: $dark-mode;
  color: #ebf4f1;
  border-color: #888d8c;
}

.dark-mode .card:hover {
  box-shadow: 0 0.5rem 1rem rgba(223, 213, 213, 0.15) !important;
}

.dark-mode a h4 {
  color: #ebf4f1;
}

.sepia-mode a h4 {
  color: #433422;
}

.dark-mode a h4:hover {
    color: rgba(235, 244, 241, .7);
}

.sepia-mode a h4:hover {
  color: rgba(67, 52, 34,.7);
}

.sepia-mode .card {
  background-color: $sepia-mode;
  color: #433422;
}



// .img-preloader {
//   border: 5px solid transparent;
//   border-radius: 50%;
//   border-top: 5px solid #4e80e5;
//   width: 30px;
//   height: 30px;
//   animation: spin 1s linear infinite;
//   border-right: 5px solid #4e80e5;
//   border-bottom: 5px solid #4e80e5;

//   z-index: 1000;
// }

// @keyframes spin {
//   100% {
//     transform: rotate(360deg);
//   }
// }
</style>