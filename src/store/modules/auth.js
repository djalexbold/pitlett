import http from "../../utils/http";
import {LOCAL_STORAGE_TOKEN_KEY, VuexError} from "@/models/models";
//import {getImgUrl} from "@/utils/utils";

export default {
	namespaced: true,
	actions: {
        login({commit}, formData) {
            return new Promise((resolve, reject) => {
				http.post('/login/', formData)
					.then(res => {
						const {user, token} = res.data;
						//user.avatar = user.avatar ? getImgUrl(user.avatar) : user.avatar;
						localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
						commit('setUserInfo', token);
						commit('setUser', user);
						resolve(res.data)
					})
					.catch(e => {
						const error = new VuexError(e);

						if(e.response?.status === 404)
							error.text = 'Неверный логин или пароль';

						reject(error)
					})
            })
        },
        logout({commit}) {
            return new Promise((resolve, reject) => {
				http.post('/logout/')
					.catch(e => {
						reject(new VuexError(e))
					})
					.finally(() => {
						commit('removeUserInfo');
						localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
						resolve()
					})
            })
        },
		// eslint-disable-next-line no-empty-pattern
        changePassword({}, data) {
            return new Promise((resolve, reject) => {
				http.post('/user/password/', data)
					.then(() => {
						resolve()
					})
					.catch(e => {
						reject(new VuexError(e, 'При изменении пароля произошла ошибка'))
					})
            })
        },
		setReturnPath({commit}, path) {
			commit('setReturnPath', path)
		},
		unsetReturnPath({commit}) {
			commit('unsetReturnPath')
		},
		getNotifications({commit}){
			return new Promise((resolve, reject) => {
				http.get('/notifications/')
					.then(res => {
						const notifications = res.data
						commit('setNotifications', notifications)
					})
					.catch(e => {
						reject(new VuexError(e))
					})
					.finally(() => {
						resolve()
					})
			})
		}
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
		setNotifications(state, notifications) {
			notifications.count = notifications.invoices?.length + notifications.payments?.length
			state.notifications = notifications;
		},
        setUserInfo(state, token) {
            const { id, presentation, role } = JSON.parse(atob(token.split('.')[1]));
            state.user_id = Number(id);
            state.user_name = presentation;
            state.user_role = Number(role);
        },
        removeUserInfo(state) {
            state.user_id = null;
            state.user_role = null;
            state.user_name = null;
			state.user = {};
			state.notifications = {}
        },
		setReturnPath(state, path) {
			state.returnPath = path
		},
		unsetReturnPath(state) {
			state.returnPath = null
		}
    },
    state: {
        user_id: null,
        user_role: null,
        user_name: null,
		user: {},
		returnPath: null,
		notifications: {}
    },
    getters: {
        userId: state => state.user_id ?? parseInt(getStoredValue('id')),
        userRole: state => state.user_role ?? (getStoredValue('role') || 0),
        userName: state => state.user_name ?? getStoredValue('presentation'),
        user: state => state.user,
		returnPath: state => state.returnPath,
		notifications: state => state.notifications
    }
}


const getStoredValue = name => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
    if(token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload[name]
    }
    return null;
};
