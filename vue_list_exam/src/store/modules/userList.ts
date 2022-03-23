import { Module } from "vuex";
import { RootState } from "@/store/index";
import { getUserList } from "@/api/api";

interface UserList {
  page: number;
  perPage: number;
  totalPage: number;
  totalCount: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  isEmptyList: boolean;
  userList: Array<object>;
  keyword: string;
}

const module: Module<UserList, RootState> = {
  state: {
    page: 1,
    perPage: 0,
    totalPage: 0,
    totalCount: -1,
    isFirstPage: true,
    isLastPage: false,
    isEmptyList: false,
    userList: [],
    keyword: "",
  },
  mutations: {
    fetchListCount(state, count: number) {
      state.totalCount = count;
    },
    fetchUserInfo(state, userData: Array<object>) {
      state.userList = userData;
    },
    fetchKeyword(state, keyword: string) {
      state.keyword = keyword;
    },
    fetchCurrentPage(state, curPage: number) {
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
    fetchPagingInit(state) {
      state.isFirstPage = true;
      state.isLastPage = false;
    },
    emptyList(state) {
      state.isEmptyList = true;
    },
    nonEmptyList(state) {
      state.isEmptyList = false;
    },
  },
  actions: {
    async getUserList({ commit, state }) {
      if (!state.isLastPage) {
        const response = await getUserList(
          state.keyword,
          state.perPage,
          state.page + 1
        );

        if (response.data.total_count === 0) {
          commit("fetchListCount", response.data.total_count);
          commit("emptyList");
          commit("fetchPagingInit");
        } else {
          if (state.isFirstPage) {
            commit(
              "fetchTotalPage",
              Math.round(response.data.total_count / state.perPage)
            );
            commit("fetchListCount", response.data.total_count);
            commit("fetchCurrentPage", 1);
            commit("fetchIsFirstPage");
          } else {
            commit("fetchCurrentPage", state.page);
          }
          commit("fetchUserInfo", response.data.items);
          commit("nonEmptyList");
        }
      }
    },
  },
  getters: {
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
    },
  },
};

// const state = {
//     page: 1,
//     perPage: 0,
//     totalPage: 0,
//     totalCount: -1,
//     isFirstPage: true,
//     isLastPage: false,
//     isEmptyList: false,
//     userList: [],
//     keyword: ''
// };

// const mutations = {
//     fetchListCount(state, count) {
//         state.totalCount = count;
//     },
//     fetchUserInfo(state, userData) {
//         state.userList = userData;
//     },
//     fetchKeyword(state, keyword) {
//         state.keyword = keyword;
//     },
//     fetchCurrentPage(state, curPage) {
//         state.page = curPage;
//     },
//     fetchTotalCount(state, totalCount) {
//         state.totalCount = totalCount;
//     },
//     fetchTotalPage(state, totalPage) {
//         state.totalPage = totalPage;
//     },
//     fetchPerPage(state, perPage) {
//         state.perPage = perPage;
//     },
//     fetchIsFirstPage(state) {
//         state.isFirstPage = !state.isFirstPage;
//     },
//     fetchIsLastPage(state) {
//         state.isLastPage = !state.isLastPage;
//     },
//     fetchPagingInit(state){
//         state.isFirstPage = true;
//         state.isLastPage = false;
//     },
//     emptyList(state) {
//         state.isEmptyList = true;
//     },
//     nonEmptyList(state) {
//         state.isEmptyList = false;
//     }
// };

// const actions = {
//     async getUserList({ commit , state }) {

//         if(!state.isLastPage) {
//             const response = await getUserList(state.keyword, state.perPage, state.page+1);

//             if(response.data.total_count === 0) {
//                 commit('fetchListCount',response.data.total_count);
//                 commit('emptyList');
//                 commit('fetchPagingInit');
//             }else {
//                 if(state.isFirstPage) {
//                     commit('fetchTotalPage', Math.round(response.data.total_count/state.perPage));
//                     commit('fetchListCount',response.data.total_count);
//                     commit('fetchCurrentPage', 1);
//                     commit('fetchIsFirstPage');
//                 }else{
//                     commit('fetchCurrentPage', state.page);
//                 }
//                 commit('fetchUserInfo',response.data.items);
//                 commit('nonEmptyList');

//             }

//             //     console.log("store response : ", response)
//             //     //1. 검색 결과가 없을 때
//             //     if(response.data.total_count === 0) {
//             //         console.log("검색결과 없음")
//             //         commit('fetchListCount',response.data.total_count);
//             //         commit('emptyList');
//             //     }else {//2. 검색 결과가 있을 때
//             //         console.log("검색결과 있음")
//             //         //1. 첫 페이지 로딩할 경우
//             //         if(state.isFirstPage && !state.isLastPage) {
//             //             console.log("첫 페이지")
//             //             commit('fetchIsFirstPage');
//             //             commit('fetchTotalPage', Math.round(response.data.total_count/state.perPage));
//             //             commit('fetchTotalCount', response.data.total_count);
//             //             commit('fetchCurrentPage', 1);
//             //         }else {
//             //             if(!state.isFirstPage && state.isLastPage) { //2. 마지막 페이지 로딩
//             //                 console.log('마지막 페이지')
//             //                 commit('fetchIsLastPage');
//             //             }else {
//             //             }
//             //             commit('fetchCurrentPage', state.page);
//             //         }
//             //         commit('nonEmptyList');
//             //         commit('fetchUserInfo',response.data.items);
//         }
//     }
// };

// const getters = {
//     fetchedIsEmptyList(state) {
//         return state.isEmptyList;
//     },
//     fetchedTotalCount(state) {
//         return state.totalCount;
//     },
//     fetchedUserInfo(state) {
//         return state.userList;
//     },
//     fetchedKeyword(state) {
//         return state.keyword;
//     }
// };

export default module;
