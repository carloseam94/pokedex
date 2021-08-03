<template>
  <div>
    <div class="container" style="min-height: 100vh">
      <div class="row">
        <h3 class="my-4">Pokemon</h3>
      </div>
      <div class="row mb-4">
        <div
          v-for="pokemon in pokemons.results"
          :key="pokemon.name"
          class="col-md-4 col-sm-6"
        >
          <app-pokemon-card :pokemon="pokemon"></app-pokemon-card>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row my-4 pb-4">
        <div class="col text-center">
          <a
            :href="previousPage"
            @click="previous($event)"
            :disabled="!pokemons.previous"
            class="btn btn-dark btn-page"
          >
            <i class="fa fa-arrow-left me-2"></i>Prev
          </a>
          <input
            type="number"
            step="1"
            min="1"
            max="38"
            v-model="page"
            @keydown="keydownInputPgae($event)"
            id="input_page"
            class="ms-2 form-control d-inline-block btn-page"
            style="width: 70px"
          />
          <a :href="page" class="me-2 btn btn-dark btn-page" @click="goToPage(page)"
            >Go</a
          >
          <a
            :href="nextPage"
            @click="next($event)"
            :disabled="!pokemons.next"
            class="btn btn-dark btn-page"
          >
            Next
            <i class="fa fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonCard from "../../components/PokemonCard.vue";
import axios from "axios";

export default {
  mounted() {
    // this.fetchData();
    this.page = this.$route.params.page;
    let page = parseInt(this.page)
    this.nextPage = (page < 38) ? page + 1 : 38;
    this.previousPage = (page > 1) ? page - 1 : 1;
    this.goToPage(this.page);
  },
  data() {
    return {
      pokemons: [],
      page: 1,
      nextPage: 2,
      previousPage: 1

    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=30")
        .then((response) => {
          this.pokemons = response.data;
        })
        .catch((error) => {});
    },
    previous() {
      axios
        .get(this.pokemons.previous)
        .then((response) => {
          this.pokemons = response.data;
          this.page--;
        })
        .catch((error) => {});
    },
    goToPage(value) {
      this.page = value;
      axios
        .get(
          "https://pokeapi.co/api/v2/pokemon?limit=30&offset=" +
            (value - 1) * 30
        )
        .then((response) => {
          this.pokemons = response.data;
        })
        .catch((error) => {});
    },
    next() {
      axios
        .get(this.pokemons.next)
        .then((response) => {
          this.pokemons = response.data;
          this.page++;
        })
        .catch((error) => {});
    },
    keydownInputPgae($event) {
      if ($event.keyCode == 13) {
        this.$router.replace({params: {page: this.page}});
        this.goToPage(this.page);
      }
    },
  },
  components: {
    appPokemonCard: PokemonCard,
  },
};
</script>

<style lang="scss" scoped>
.btn-page:focus {
  outline: none !important;
  box-shadow: none !important;
}

.btn-page {
  outline: none !important;
  box-shadow: none !important;
}
</style>