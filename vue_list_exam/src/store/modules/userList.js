import { getUserList } from "@/api/api";

const state = {
    page:-1,
    perPage: 0,
    totalPage:0,
    totalCount: -1,
    isFirstPage: true,
    isEmptyList: true,
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
    fetchCurrentPage(state, curPage) {
        state.page = curPage;
        console.log("store curPage : ", curPage);
    },
    fetchTotalCount(state, totalCount) {
        state.totalCount = totalCount;
    },
    fetchTotalPage(state, totalPage) {
        state.totalPage = totalPage;
    },
    fetchPerPage(state, perPage) {
        console.log("store perpage : ", perPage);
        state.perPage = perPage;
    },
    fetchIsFirstPage(state) {
        state.isFirstPage = false;
    },
    emptyList(state) {
        state.isEmptyList = true;
    },
    nonEmptyList(state) {
        state.isEmptyList = false;
    },
    fetchKeyword(state, keyword) {
        state.keyword = keyword;
    }
};

const actions = {
    async getUserList({ commit }) {

        if(state.page < state.totalPage) {
            const response = await getUserList(state.keyword, state.perPage, state.page+1);
            console.log("store api : ", response.data)
            if(response.data.total_count === 0) {
                commit('fetchListCount',response.data.total_count);
                commit('emptyList');
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