import { getUserList } from "@/api/api";

const state = {
    page:0,
    totalPage:0,
    totalCount: -1,
    isEmptyList: true,
    userList: []
};

const mutations = {
    fetchListCount(state, count) {
        state.totalCount = count;
    },
    fetchUserInfo(state, userData) {
        state.userList = userData;
    },
    emptyList(state) {
        state.isEmptyList = true;
    },
    nonEmptyList(state) {
        state.isEmptyList = false;
    }
};

const actions = {
    async getUserList({ commit }, keyword) {
        const response = await getUserList(keyword);
        console.log("store api : ", response);

        if(response.data.total_count === 0) {
            commit('fetchListCount',response.data.total_count);
            commit('emptyList');
        }else {
            commit('fetchUserInfo',response.data.items);
            commit('fetchListCount',response.data.total_count);
            commit('nonEmptyList');
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
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}