<template>
  <div class="app-container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div class="container">
        <router-link class="Navbar-brand" to="/">Pokemon Explorer</router-link>
      </div>
    </nav>

    <main clas="container">
      <router-view />
    </main>

    <footer class="bg-light text-center py-3 mt-4">
      <div class="container">
        <p class="mb-0">
          Pokemon data provided by
          <a href="https://pokeapi.co/" target="_blank">PokeAPI </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
