import { setInterceptors } from './config/interceptors'
const instance = setInterceptors()

function getUserList(keyword) {
    return instance.get(`/users/${keyword}`);
}

export {
    getUserList
}