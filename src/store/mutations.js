export const type = {
    SET_FULL_SCREEN: "SET_FULL_SCREEN",
    SET_PLAYING_STATUS: "SET_PLAYING_STATUS",
    SET_PLAYLIST: "SET_PLAYLIST",
    SET_CURRENT_INDEX: "SET_CURRENT_INDEX"
};


export const mutations = {
    [type.SET_FULL_SCREEN](state, flag) {
        state.fullscreen = flag;
    },
    [type.SET_PLAYING_STATUS](state, flag) {
        state.playingStatus = flag;
    },
    [type.SET_PLAYLIST](state, list){
        state.playlist = list
    },
    [type.SET_CURRENT_INDEX](state, index){
        if (index>state.playlist.length-1){
            state.currentIndex = 0;
            return
        }
        if (index<0){
            state.currentIndex = state.playlist.length-1;
            return;
        }
        state.currentIndex = index
    },
};
