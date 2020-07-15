const initialState = {
    name: '',
    category: '',
    status: ''
}

export default (state = initialState, action) => {
    console.log(state)
    switch(action.type) {
        case 'NAME_CHANGED':
            return { ...state, name: action.payload }
        case 'CATEGORY_CHANGED':
            return { ...state, category: action.payload }
        case 'STATUS_CHANGED':
            return { ...state, status: action.payload }
        default:
            return state
    }
}