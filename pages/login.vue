<template>
  <div>
    <div class="row mt-5">
      <div class="col-12">
        <b-input type="text" placeholder="usuario" v-model="username"></b-input>
      </div>
      <div class="col-12">
        <b-input
          type="password"
          placeholder="usuario"
          v-model="password"
        ></b-input>
      </div>
      <b-button variant="success" @click="onLogin()">Entrar</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    async onLogin() {
      const data = {
        username: this.username,
        password: this.password,
      };
      const response = await this.$axios.$post("/api-token-auth/", data);
      console.log("Login", response);
      this.$axios.setToken(response.token, "Bearer");
    },
  },
};
</script>

<style>
</style>