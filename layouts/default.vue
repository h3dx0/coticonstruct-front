<template>
  <div>
    <b-navbar type="dark" variant="info">
      <b-navbar-nav>
        <b-nav-item href="#">Cotizador</b-nav-item>
        <b-nav-item href="#">Administrador</b-nav-item>
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Cotizar" right>
          <b-dropdown-item href="/uh02/step1">UH02</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Usuario" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
    <div class="container-fluid">
      <Nuxt />
    </div>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
