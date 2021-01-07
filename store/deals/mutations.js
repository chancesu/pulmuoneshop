export default {
    UPDATE_MAIN_GALLERYS(state, items){
        state.mainGallery = items;
        console.log('UPDATE_MAIN_GALLERYS',items);
    },
    UPDATE_DEAL_ITEMS(state, items) {
        state.dealItems = items || []
    },
    UPDATE_PAGINATION(state, { page, pageSize, total }) {
        const _page = page || 1
        const _pageSize = pageSize || 10
        const _total = total || 0
        state.pagination = { ...state.pagination, page: _page, pageSize: _pageSize, total: _total }
    },
    UPDATE_BEST_ITEMS(state, items) {
        state.bestItems = items || []
    },
    UPDATE_BEST_PAGINATION(state, { page, pageSize, total }) {
        const _page = page || 1
        const _pageSize = pageSize || 10
        const _total = total || 0
        state.bestPagination = { ...state.bestPagination, page: _page, pageSize: _pageSize, total: _total }
    },
    UPDATE_CONTENT_ITEMS(state,items){
        state.halfBanner = items[0];
        state.newItems = items.slice(1,4);
        state.proposalItems = items.slice(5,7);
        state.deliveryItems = items.slice(9,12);
        state.eventItems = items.slice(13,19);
        state.brandItems = items.slice(19,27);
    },
    UPDATE_NEW_ITEMS(state,items){
        state.newItemsList = items;
    }
};