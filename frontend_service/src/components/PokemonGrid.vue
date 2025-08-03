<template>
  <div class="pokemon-grid">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      <div class="col" v-for="pokemon in pokemons" :key="pokemon.id">
        <PokemonCard
          :pokemon="pokemon"
          :isFavorite="isFavorite(pokemon.id)"
          @toggle-favorite="toggleFavorite"
        />
      </div>
    </div>
  </div>
</template>


<script>
import PokemonCard from "./PokemonCard.vue";

export default {
  components: {
    PokemonCard,
  },
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
    isFavorite: {
      type: Function,
      required: true,
    },
  },
  emits: ["toggle-favorite"],
  setup(props, { emit }) {
    const toggleFavorite = (pokemonId) => {
      emit("toggle-favorite", pokemonId);
    };

    return {
      toggleFavorite,
    };
  },
};
</script>


<style scoped>
.pokemon-grid {
  margin-top: 2rem;
}
</style>
