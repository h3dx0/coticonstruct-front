<template>
  <div class="mt-5">
    <b-card header="Nueva cotizacion UH02" header-tag="header" title="Paso2">
      <b-card-body>
        <b-form>
          <div class="row">
            <div class="col-sm-3">
              <label for="color" class="mr-2">Clip Bastidor:</label>
              <b-form-select
                v-model="clipSelected"
                :options="clips"
              ></b-form-select>
            </div>
            <div class="col-sm-6">
              <label for="color" class="mr-2">Piezas/m2:</label>
              <b-form-input v-model="piecesByMeter"></b-form-input>
            </div>
            <div class="col-sm-3">
              <label for="color" class="mr-2">TC-2:</label>
              <b-form-input v-model="tc2"></b-form-input>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <label for="mg3" class="">MG-3:</label>
              <b-form-input v-model="mg"></b-form-input>
            </div>
            <div class="col-sm-6">
              <label for="pijasCabezas" class="mr-2"
                >PIJAS CS CABEZA DE COLOR:</label
              >
              <b-form-input v-model="pijasCabezas"></b-form-input>
            </div>
            <div class="col-sm-3">
              <label for="mg3" class="mr-2">PZAS TAPAS DECK:</label>
              <b-form-input v-model="tapasDeck"></b-form-input>
            </div>
          </div>
          <hr />
        </b-form>
      </b-card-body>
      <b-button href="#" variant="outline-danger">Cancelar</b-button>
      <b-button @click="onSave('back')" variant="outline-primary"
        >Atrás</b-button
      >
      <b-button @click="onSave('next')" variant="primary">Siguiente</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      installAreaDimmensions: 0,
      clipSelected: null,
      pm2: 21,
      pijasColorSelected: null,
      piecesByMeter: 21,
      clips: [
        { value: null, text: "--Seleccione--" },
        { value: 1, text: "Madera" },
        { value: 2, text: "Metal" },
      ],
      mg: 0,
      pijasCabezas: 0,
      tapasDeck: 0,
    };
  },
  mounted() {
    this.installAreaDimmensions = this.$store.state.uh02.installAreaDimmensions;
  },
  computed: {
    tc2() {
      return this.installAreaDimmensions * this.piecesByMeter;
    },
  },
  methods: {
    onSave(goTo) {
      if (goTo == "back") {
        this.$router.push("step1");
      } else {
        this.$router.push("step3");
      }
    },
  },
};
</script>

<style>
</style>