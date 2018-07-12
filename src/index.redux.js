const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'
// 新建store
export function counter(state = 0, action) {
    switch (action.type) {
        case '加机关枪':
            return state + 1;
        case '减机关枪':
            return state - 1;
        default:
            return 10
    }
}
// action creator
export function addGUN() {
    return { type: ADD_GUN }
}
export function removeGUN() {
    return { type: REMOVE_GUN }
}