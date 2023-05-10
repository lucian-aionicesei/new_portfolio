import { defineStore } from 'pinia';

export const useCoreStore = defineStore('CoreStore', {
    state: () => {
        return {
            showMenu: false,
            showProject: false,
            projectTitle: '',
            themeColor: '[#202020]',
            currentProject: {},
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
        getProject(state) {
            return state.openedProject;
        },
        getDarkMode(state) {
            return state.darkMode;
        }
    },
});
