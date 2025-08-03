<template>
  <div v-if="loading" class="text-center my-5">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <div v-else-if="error" class="alert alert-danger">
    {{ error }}
  </div>

  <div v-else-if="pokemon" class="pokemon-details">
    <div class="row">
      <div class="col-md-6 text-center">
        <img
          :src="pokemon.image"
          :alt="pokemon.name"
          class="img-fluid pokemon-image"
        />
        <h2 class="mt-3 text-capitalize">{{ pokemon.name }}</h2>
        <div class="d-flex justify-content-center gap-2 my-2">
          <span
            v-for="type in pokemon.types"
            :key="type"
            class="badge rounded-pill text-bg-primary"
          >
            {{ type }}
          </span>
        </div>
        <button
          @click="toggleFavorite(pokemon.id)"
          class="btn btn-outline-primary mt-2"
        >
          {{
            isFavorite(pokemon.id)
              ? "Remove from Favorites"
              : "Add to Favorites"
          }}
        </button>
      </div>

      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3 class="mb-0">Details</h3>
          </div>
          <div class="card-body">
            <div class="row mb-3">
              <div class="col-6">
                <p><strong>Height:</strong> {{ pokemon.height / 10 }} m</p>
              </div>
              <div class="col-6">
                <p><strong>Weight:</strong> {{ pokemon.weight / 10 }} kg</p>
              </div>
            </div>

            <h4>Abilities</h4>
            <ul class="list-group mb-3">
              <li
                v-for="ability in pokemon.abilities"
                :key="ability"
                class="list-group-item text-capitalize"
              >
                {{ ability }}
              </li>
            </ul>

            <h4>Stats</h4>
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Stat</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="stat in pokemon.stats" :key="stat.stat.name">
                    <td class="text-capitalize">{{ stat.stat.name }}</td>
                    <td>{{ stat.base_stat }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="card mt-4">
          <div class="card-header">
            <h3 class="mb-0">Edit Pokémon</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <label for="pokemonName" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="pokemonName"
                  v-model="editablePokemon.name"
                />
              </div>
              <div class="mb-3">
                <label for="pokemonHeight" class="form-label">Height (m)</label>
                <input
                  type="number"
                  step="0.1"
                  class="form-control"
                  id="pokemonHeight"
                  v-model="editablePokemon.height"
                />
              </div>
              <div class="mb-3">
                <label for="pokemonWeight" class="form-label"
                  >Weight (kg)</label
                >
                <input
                  type="number"
                  step="0.1"
                  class="form-control"
                  id="pokemonWeight"
                  v-model="editablePokemon.weight"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <router-link to="/" class="btn btn-outline-secondary mt-4">
      Back to Pokémon List
    </router-link>
  </div>
</template>

<script type="module" src="/src/pages/pokemon.js"></script>

<style scoped>
.pokemon-image {
  max-height: 300px;
  object-fit: contain;
}

.pokemon-details {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
