const initialState = {
    id: '',
    name: '',
    nameError: '',
    description: '',
    descriptionError: '',
    categories: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'NAME_CHANGED':
            return { ...state, name: action.payload }
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'CATEGORY_SEARCHED':
            return { ...state, categories: action.payload.data }
        case 'CATEGORY_ADDED':
            return { ...state, id: '', name: '', nameError: '', description: '', descriptionError: '' }
        case 'CATEGORY_EDITED':
            return { ...state, id: action.payload._id, name: action.payload.name, description: action.payload.description }
        case 'CATEGORY_DELETED':
            return { ...state, id: '', name: '', description: '' }
        case 'CATEGORY_FIELD_ERRORS':
            return { ...state, nameError: action.payload.nameError, descriptionError: action.payload.descriptionError }
        default:
            return state
    }
}