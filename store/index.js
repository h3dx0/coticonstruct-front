export const state = () => ({
    totalPrice: 0,
    installAreaDimmensions: 0,
    materialsCost: []
})
export const mutations = {
    setMaterialCost(state, payload) {
        state.materialsCost = payload
    },
    setInstallAreaDimmensions(state, value) {
        state.installAreaDimmensions = value;
    }
}

export const actions = {
    save({ commit }, payload) {
        commit('setInstallAreaDimmensions', payload.installAreaDimmensions)
    },
    loadMaterialCost() {
        //endpoint to get materials
        return [
            { id: 1, cost: 0.5, name: "Material1" },
            { id: 2, cost: 0.8, name: "Material2" }]
    },

    //login() { },
    //logout() { }
}