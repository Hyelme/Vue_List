import { getUserList } from "@/api/api";

const state = {
    page: 1,
    perPage: 0,
    totalPage: 0,
    totalCount: -1,
    isFirstPage: true,
    isLastPage: false,
    isEmptyList: false,
    userList: [],
    keyword: ''
};

const mutations = {
    fetchListCount(state, count) {
        state.totalCount = count;
    },
    fetchUserInfo(state, userData) {
        state.userList = userData;
    },
    fetchKeyword(state, keyword) {
        state.keyword = keyword;
    },
    fetchCurrentPage(state, curPage) {
        state.page = curPage;
    },
    fetchTotalCount(state, totalCount) {
        state.totalCount = totalCount;
    },
    fetchTotalPage(state, totalPage) {
        state.totalPage = totalPage;
    },
    fetchPerPage(state, perPage) {
        state.perPage = perPage;
    },
    fetchIsFirstPage(state) {
        state.isFirstPage = !state.isFirstPage;
    },
    fetchIsLastPage(state) {
        state.isLastPage = !state.isLastPage;
    },
    fetchPagingInit(state){
        state.isFirstPage = true;
        state.isLastPage = false;
    },
    emptyList(state) {
        state.isEmptyList = true;
    },
    nonEmptyList(state) {
        state.isEmptyList = false;
    }
};

const actions = {
    async getUserList({ commit , state }) {

        if(!state.isLastPage) {
            const response = await getUserList(state.keyword, state.perPage, state.page+1);
        
            if(response.data.total_count === 0) {
                commit('fetchListCount',response.data.total_count);
                commit('emptyList');
                commit('fetchPagingInit');
            }else {
                if(state.isFirstPage) {
                    commit('fetchTotalPage', Math.round(response.data.total_count/state.perPage));
                    commit('fetchListCount',response.data.total_count);
                    commit('fetchCurrentPage', 1);
                    commit('fetchIsFirstPage');
                }else{
                    commit('fetchCurrentPage', state.page);
                }
                commit('fetchUserInfo',response.data.items);
                commit('nonEmptyList');
            
            }
        }
    }
};

const getters = {
    fetchedIsEmptyList(state) {
        return state.isEmptyList;
    },
    fetchedTotalCount(state) {
        return state.totalCount;
    },
    fetchedUserInfo(state) {
        return state.userList;
    },
    fetchedKeyword(state) {
        return state.keyword;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}