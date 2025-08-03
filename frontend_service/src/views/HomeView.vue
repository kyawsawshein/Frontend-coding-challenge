<template>
  <div>
    <SearchBar @search="handleSearch" />

    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-2">Loading Pokémon...</p>
    </div>

    <div v-else-if="error" class="alert alert-danger">
      {{ error }}
    </div>

    <PokemonGrid
      v-else
      :pokemons="filteredPokemons"
      :isFavorite="isFavorite"
      @toggle-favorite="toggleFavorite"
    />
  </div>
</template>

<script type="module" src="/src/pages/home.js"></script>
