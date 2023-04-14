import { defineStore } from 'pinia';

export const useCoreStore = defineStore('CoreStore', {
    state: () => {
        return {
            showMenu: false,
            showProject: false,
            darkMode: false,
        }
    },
    getters: {
        getShowMenu(state) {
            return state.showMenu;
        },
        getShowProject(state) {
            return state.showProject;
        },
        getDarkMode(state) {
            return state.darkMode;
        }
    },
});
