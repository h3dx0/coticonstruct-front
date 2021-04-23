<template>
  <div class="mt-5">
    <b-card header="Nueva cotizacion UH02" header-tag="header" title="Paso2">
      <b-card-body>
        <b-form>
          <div class="row">
            <div class="col-sm-4">
              <label for="color" class="mr-2">Clip Bastidor:</label>
              <b-form-select
                v-model="clipSelected"
                :options="clips"
              ></b-form-select>
            </div>
            <div class="col-sm-4">
              <label for="color" class="mr-2">TC-2:</label>
              <b-form-input disabled v-model="tc2"></b-form-input>
            </div>
          </div>
          <hr />
        </b-form>
      </b-card-body>
      <b-button href="#" variant="outline-danger">Cancelar</b-button>
      <b-button href="/uh02/paso3" variant="primary">Siguiente</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      installAreaDimmensions: 100,
      clipSelected: null,
      clips: [
        { value: null, text: "--Seleccione--" },
        { value: 1, text: "Madera" },
        { value: 2, text: "Metal" },
      ],
    };
  },
  computed: {
    tc2() {
      return this.installAreaDimmensions * 21;
    },
  },
};
</script>

<style>
</style>