import axios from 'axios'
export default {
    async fetchDeals({ commit, state }, { page, pageSize}) {
        try {
            const deals = await axios.get('/config/dealList.json')
            const offset = (state.pagination.page - 1) * state.pagination.pageSize
            commit('UPDATE_PAGINATION', { page, pageSize, total: deals.data.dealGoodsList.length })
            commit('UPDATE_DEAL_ITEMS', deals.data.dealGoodsList.slice(offset, offset + state.pagination.pageSize))
        } catch (error) {
            console.error('fetchDeals store', error)
        }
    },
    async fetchBest({ commit, state }, { page, pageSize}) {
        try {
            const deals = await axios.get('/config/bestList.json')
            const offset = (state.pagination.page - 1) * state.pagination.pageSize
            commit('UPDATE_BEST_PAGINATION', { page, pageSize, total: deals.data.categoryBestResult.bestGoodsList.length })
            commit('UPDATE_BEST_ITEMS', deals.data.categoryBestResult.bestGoodsList.slice(offset, offset + state.pagination.pageSize))
        } catch (error) {
            console.error('fetchBest store', error)
        }
    },
    async fetchContent({ commit }) {
        try {
            const deals = await axios.get('/config/contentData.json')
            commit('UPDATE_CONTENT_ITEMS', deals.data.dispPlanList.dispPlanMap)
        } catch (error) {
            console.error('fetchContent store', error)
        }
    },
};
