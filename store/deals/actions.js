import axios from 'axios'
export default {
    async fetchMainGallery({ commit }) {
        try {
            const main = await axios.get('/config/indexHome.json')
            commit('UPDATE_MAIN_GALLERYS', main.data.bannerList)
        } catch (error) {
            console.error('fetchMainGallery store', error)
        }
    },
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
            const best = await axios.get('/config/bestList.json')
            const offset = (state.pagination.page - 1) * state.pagination.pageSize
            commit('UPDATE_BEST_PAGINATION', { page, pageSize, total: best.data.categoryBestResult.bestGoodsList.length })
            commit('UPDATE_BEST_ITEMS', best.data.categoryBestResult.bestGoodsList.slice(offset, offset + state.bestPagination.pageSize))
        } catch (error) {
            console.error('fetchBest store', error)
        }
    },
    async fetchContent({ commit }) {
        try {
            const mainContent = await axios.get('/config/contentData.json')
            commit('UPDATE_CONTENT_ITEMS', mainContent.data.dispPlanList.dispPlanMap)
            commit('UPDATE_NEW_ITEMS', mainContent.data.mdTpListArray.new)
        } catch (error) {
            console.error('fetchContent store', error)
        }
    },
};
