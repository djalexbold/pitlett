import {VuexError} from "@/models/models";
import http from "../../utils/http";

export default {
	namespaced: true,
	actions: {
		showSnackbar({commit}, {text = '', color = 'red', timeout = 3000}) {
			commit('showSnackbar', {text, color, timeout})
		},
		// eslint-disable-next-line no-empty-pattern
		getFile({}, file) {
			return new Promise((resolve, reject) => {
				http.get(`/file/${file.guid}/`, {
					responseType: "blob"
				})
					.then(res => {
						resolve(res.data)
					})
					.catch(e => {
						reject(new VuexError(e, 'Произошла ошибка при загрузке файла'))
					})
			});
		},
		callDialog({commit}, {header = null, text = null, ok = null, cancel = null}) {
			//TODO: доделать глобальный диалог
			commit('setDialog', {header, text, ok, cancel})
		},
		resetDialog({commit}) {
			commit('setDialog', {header: null, text: null, ok: null, cancel: null})
		}
	},
	mutations: {
		showSnackbar(state, params) {
			state.snackbar = Object.assign(state.snackbar, {...params});
			state.snackbar.model = true;
		},
		setDialog(state, params) {
			state.dialog = {...params}
		}
	},
	state: {
		snackbar: {
			model: false,
			text: '',
			timeout: -1,
			color: ''
		},
		dialog: {
			header: null,
			text: null,
			ok: null,
			cancel: null
		}
	},
	getters: {
		snackbar: state => state.snackbar,
		dialog: state => state.dialog,
	}
}
