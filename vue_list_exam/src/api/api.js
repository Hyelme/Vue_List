import { setInterceptors } from "./config/axios"

const instance = setInterceptors();
const header = {
    accept: "application/vnd.github.v3+json",
    Authorization: "token " + process.env.VUE_APP_GITHUB_AUTH_TOKEN,
};

function getUserList(keyword) {
    return instance.get(`/search/users`, { 
                            headers: header, 
                            params: {
                                q: keyword,
                                per_page: 100,
                                page: 1
                            }
                        });
}

export {
    getUserList
}