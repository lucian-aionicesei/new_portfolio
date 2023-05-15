import { defineStore } from 'pinia';

export const useCoreStore = defineStore('CoreStore', {
    state: () => {
        return {
            showMenu: false,
            showProject: false,
            projectIndex: undefined,
            projects: undefined,
            themeColor: '[#202020]',
            themeColors: [
                "bg-red-400",
                "bg-[#202020]",
                "bg-[#202020]",
                "bg-blue-600",
                "bg-green-500",
                "bg-[#202020]",
                "bg-[#202020]",
                "bg-red-400",
              ],
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
