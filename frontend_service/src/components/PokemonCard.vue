<template>
  <div class="pokemon-card card h-100" @click="goToPokemon">
    <div class="card-body text-center position-relative">
      <button
        class="btn btn-sm position-absolute top-0 end-0 m-2"
        :class="isFavorite ? 'btn-danger' : 'btn-outline-danger'"
        @click.stop="toggleFavorite(pokemon.id)"
        aria-label="Toggle favorite"
      >
        <i class="bi" :class="isFavorite ? 'bi-heart-fill' : 'bi-heart'"></i>
      </button>

      <img
        :src="pokemon.image"
        :alt="pokemon.name"
        class="pokemon-image img-fluid"
      />
      <h3 class="card-title text-capitalize">{{ pokemon.name }}</h3>

      <div class="d-flex justify-content-center gap-2">
        <span
          v-for="type in pokemon.types"
          :key="type"
          class="badge rounded-pill"
          :class="`type-${type}`"
        >
          {{ type }}
        </span>
      </div>
    </div>
  </div>
</template>

<script type="module" src="/src/components/pokemon_card.js"></script>

<style scoped>
.pokemon-card {
  cursor: pointer;
  transition: transform 0.2s;
}

.pokemon-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.pokemon-image {
  height: 120px;
  object-fit: contain;
}

/* Type badges */
.type-normal {
  background-color: #a8a878;
}
.type-fire {
  background-color: #f08030;
}
.type-water {
  background-color: #6890f0;
}
.type-electric {
  background-color: #f8d030;
}
.type-grass {
  background-color: #78c850;
}
.type-ice {
  background-color: #98d8d8;
}
.type-fighting {
  background-color: #c03028;
}
.type-poison {
  background-color: #a040a0;
}
.type-ground {
  background-color: #e0c068;
}
.type-flying {
  background-color: #a890f0;
}
.type-psychic {
  background-color: #f85888;
}
.type-bug {
  background-color: #a8b820;
}
.type-rock {
  background-color: #b8a038;
}
.type-ghost {
  background-color: #705898;
}
.type-dragon {
  background-color: #7038f8;
}
.type-dark {
  background-color: #705848;
}
.type-steel {
  background-color: #b8b8d0;
}
.type-fairy {
  background-color: #ee99ac;
}
</style>
