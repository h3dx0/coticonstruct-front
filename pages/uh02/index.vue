<template>
  <div class="mt-5">
    <b-card header="Nueva cotizacion UH02" header-tag="header" title="Paso1">
      <b-card-body>
        <b-form>
          <div class="row">
            <div class="col-sm-4">
              <label for="color" class="mr-2">Color:</label>
              <b-form-select
                v-model="colorSelected"
                :options="colors"
              ></b-form-select>
            </div>
            <div class="col-sm-4">
              <label for="color" class="mr-2">M2 de area de instación:</label>
              <b-form-input v-model="installAreaDimmensions"></b-form-input>
            </div>

            <div class="col-sm-4">
              <label for="color" class="mr-2">M2 con desperdicio:</label>
              <b-form-input
                disabled
                v-model="installAreaDimmensionsExtra"
              ></b-form-input>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-12">
              <h4>M2 Deck</h4>
            </div>
            <div class="col-sm-4">
              <label for="color" class="mr-2">Cerrar a piezas:</label>
              <b-form-input disabled v-model="endPieces"></b-form-input>
            </div>
            <div class="col-sm-4">
              <label for="color" class="mr-2">TOTAL PIEZAS:</label>
              <b-form-input disabled v-model="totalEndPieces"></b-form-input>
            </div>

            <div class="col-sm-4">
              <label for="color" class="mr-2">COMPROBACIÓN M2:</label>
              <b-form-input disabled v-model="comprobationArea"></b-form-input>
            </div>
          </div>
        </b-form>
      </b-card-body>
      <b-button href="#" variant="outline-danger">Cancelar</b-button>
      <b-button href="/uh02/paso2" variant="primary">Siguiente</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorSelected: null,
      colors: ["blanco", "rojo"],
      installAreaDimmensions: 0,
    };
  },
  computed: {
    installAreaDimmensionsExtra() {
      return this.installAreaDimmensions * 1.1;
    },
    endPieces() {
      return this.installAreaDimmensionsExtra / 0.33672;
    },
    totalEndPieces() {
      return Math.ceil(this.endPieces);
    },
    comprobationArea() {
      return Math.ceil(this.totalEndPieces * 0.33672);
    },
  },
};
</script>

<style></style>
