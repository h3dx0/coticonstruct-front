<template>
  <div class="mt-5">
    <b-card header="Nueva cotizacion UH02" header-tag="header" title="Paso3">
      <b-card-body>
        <b-form>
          <div class="row">
            <div class="col-sm-4">
              <label for="color" class="mr-2">Bastidores:</label>
              <b-form-select
                v-model="bastidorSelected"
                :options="bastidores"
                @change="onChange()"
              ></b-form-select>
            </div>
            <div class="col-sm-4" v-show="showCalculation">
              <label for="color" class="mr-2">Metros Lineales:</label>
              <b-form-input v-model="linealMeters"></b-form-input>
            </div>

            <div class="col-sm-4" v-show="showCalculation">
              <label for="color" class="mr-2">Total:</label>
              <b-form-input disabled v-model="totalMeters"></b-form-input>
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
      bastidorSelected: null,
      linealMeters: 4,
      showCalculation: false,
      bastidores: [
        { value: null, text: "--Seleccione--" },
        { value: 1, text: "Madera", square: 4 },
        { value: 2, text: "Metal", square: 3 },
      ],
    };
  },
  computed: {
    totalMeters() {
      return this.linealMeters * this.$store.state.uh02.installAreaDimmensions;
    },
  },
  methods: {
    onChange() {
      this.showCalculation = true;
      const bastidor = this.bastidores.find(
        (item) => item.value === this.bastidorSelected
      );
      console.log(bastidor);
      this.linealMeters = bastidor.square;
    },
    onSave(goTo) {
      if (goTo == "back") {
        this.$router.push("step2");
      } else {
        this.$router.push("step4");
      }
    },
  },
};
</script>

<style>
</style>