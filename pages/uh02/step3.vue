<template>
  <div class="mt-5">
    <b-card header="Nueva cotizacion UH02" header-tag="header" title="Paso3">
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
        </b-form>
      </b-card-body>
      <b-button href="#" variant="outline-danger">Cancelar</b-button>
      <b-button href="/uh02/step4" variant="primary">Siguiente</b-button>
    </b-card>
  </div>
</template>

<script>
export default { colorSelected: null };
</script>

<style>
</style>