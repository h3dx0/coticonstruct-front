<template>
  <div class="mt-5">
    <b-card header="Nueva cotizacion UH02" header-tag="header" title="Paso1">
      <b-card-body>
        <b-form>
          <div class="row">
            <div class="col-sm-2">
              <label for="color" class="mr-2">Andamios:</label>
              <b-form-input v-model="andamios"></b-form-input>
            </div>
            <div class="col-sm-2">
              <label for="color" class="mr-2">Pijas:</label>
              <b-form-input v-model="amountPijas"></b-form-input>
            </div>
            <div class="col-sm-2">
              <label for="color" class="mr-2">Taquetes:</label>
              <b-form-input v-model="amountTaquetes"></b-form-input>
            </div>
            <div class="col-sm-2">
              <label for="color" class="mr-2">Pintura y Thiner:</label>
              <b-form-input v-model="amounPinturaThiner"></b-form-input>
            </div>
            <div class="col-sm-2">
              <label for="color" class="mr-2">Gasolina:</label>
              <b-form-input v-model="gasoline"></b-form-input>
            </div>
            <div class="col-sm-2">
              <label for="color" class="mr-2">Costo Adicional:</label>
              <b-form-input v-model="extraCost"></b-form-input>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col">
              <label for="color" class="mr-2"
                >Descripción Costo Adicional:</label
              >

              <b-form-textarea v-model="extraCostText"></b-form-textarea>
            </div>
          </div>
        </b-form>
      </b-card-body>
      <b-button href="#" variant="outline-danger">Cancelar</b-button>
      <b-button href="/uh02/resume" variant="primary">Siguiente</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pijaCost: 0.75,
      taqueteCost: 0.5,
      pinturaCost: 100,
      thinerCost: 50,
      gasoline: 0,
      extraCost: 0,
      extraCostText: "",
    };
  },
  computed: {
    amountPijas() {
      //10pzas * m2instalacion * costo
      return 10 * 100 * this.pijaCost;
    },
    amountTaquetes() {
      //10pzas * m2instalacion * costo
      return 10 * 100 * this.taqueteCost;
    },

    amounPinturaThiner() {
      //costo 1l pintura +  costo 1l tiner  * m2 instal
      return (this.pinturaCost + this.thinerCost) * 100;
    },
  },
};
</script>

<style>
</style>