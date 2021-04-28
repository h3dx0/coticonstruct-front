<template>
  <div class="mt-5">
    <b-card header="Nueva cotizacion UH02" header-tag="header" title="Paso4">
      <b-card-body>
        <b-form>
          <div class="row">
            <div class="col-sm-3">
              <label for="color" class="mr-2">Materiales:</label>
              <b-form-select
                v-model="extraOptionSelected"
                :options="extraOptions"
                @change="onAddExtraOption()"
              ></b-form-select>
            </div>
            <div class="col-sm-3">
              <table class="table table-striped">
                <thead>
                  <th>Material</th>
                  <th>Cantidad</th>
                  <th>Acción</th>
                </thead>
                <tbody>
                  <tr
                    v-for="(addedExtraOption, index) in addedExtraOptions"
                    :key="addedExtraOption.value"
                  >
                    <td>{{ addedExtraOption.text }}</td>
                    <td>
                      <b-form-input
                        v-model="addedExtraOption.qty"
                      ></b-form-input>
                    </td>
                    <td>
                      <b-button
                        variant="outline-danger"
                        @click="onDeleteOption(index)"
                        >Borrar</b-button
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
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
      extraCostText: "",
      extraOptionSelected: null,
      extraOptions: [
        //GET FROM ENDPOINT
        { value: 1, text: "Andamios" },
        { value: 2, text: "Pijas" },
        { value: 3, text: "Taquetes" },
      ],
      addedExtraOptions: [],
    };
  },
  computed: {},
  methods: {
    onAddExtraOption() {
      const option = this.extraOptions.find(
        (item) => item.value === this.extraOptionSelected
      );
      console.log("OptionAdded", option);
      option.qty = 0;
      this.addedExtraOptions.push(option);
    },
    onDeleteOption(index) {
      this.addedExtraOptions.splice(index, 1);
    },
    onSave(goTo) {
      if (goTo == "back") {
        this.$router.push("step3");
      } else {
        this.$router.push("resume");
      }
    },
  },
};
</script>

<style>
</style>