import Action from './action';

const initState = {
    showPattern: 'grid',
    detailId: ''
}

const updateGlobal = (state = initState, action: any) => {
    switch (action.type) {
        case Action.DETAIL_ID:
            return {
                ...state,
                detailId: action.value
            }
        case Action.SHOW_PATTERN:
            return {
                ...state,
                showPattern: action.value
            }
        default:
            return { ...state }
    }
}

export default updateGlobal;