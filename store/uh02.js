export const state = () => ({
    totalPrice: 0,
    installAreaDimmensions: 0,
    materialsCost: [],
    colors: []
})
export const mutations = {
    setMaterialCost(state, payload) {
        state.materialsCost = payload
    },
    setInstallAreaDimmensions(state, value) {
        state.installAreaDimmensions = value;
    },
    setColors(state, payload) {
        state.colors = payload
    }
}

export const actions = {
    save({ commit }, payload) {
        commit('setInstallAreaDimmensions', payload.installAreaDimmensions)
    },
    async loadColors() {
        const colors = await this.$axios.$get('http://icanhazip.com')
        console.log("Get Colors", colors)
        commit('setColors', colors)
    },
    loadMaterialCost() {
        //endpoint to get materials
        return [
            { id: 1, cost: 0.5, name: "Material1" },
            { id: 2, cost: 0.8, name: "Material2" }]
    },
}