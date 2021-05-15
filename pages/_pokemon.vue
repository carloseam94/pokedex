<template>
  <p>{{ data }}</p>
</template>

<script>
export default {
  created() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
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
  data() {
    return {
      data: "",
    };
  },
};
</script>

<style>
</style>