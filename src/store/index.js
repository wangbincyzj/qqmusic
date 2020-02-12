import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import {mutations} from "@/store/mutations";
import {type} from "@/store/mutations";

export default new Vuex.Store({
    state: {
        hotMvList: null,

        hotSongList: null,

        playingStatus: false,

        fullscreen: false,

        playlist: [],

        sequenceList: [],

        playMode: null,

        currentIndex: -1,

        favlist: [],
    },
    mutations: mutations,
    actions: {
        startPlayingMusic({commit},{list, index}){
            commit(type.SET_FULL_SCREEN, true);
            commit(type.SET_PLAYLIST, list);
            commit(type.SET_PLAYING_STATUS, true);
            commit(type.SET_CURRENT_INDEX, index)
        },
        initFavlist(){

        }
    },
    modules: {}
})
