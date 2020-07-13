import axios from 'axios'

const URL = 'http://localhost:3002/api/v1/categories'

const fieldErrors = {}

export const changeName = event => ({
    type: 'NAME_CHANGED',
    payload: event.target.value
})

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const response = axios.get(`${URL}?sort=-createdAt`)

    return {
        type: 'CATEGORY_SEARCHED',
        payload: response
    }
}

export const add = request => {
    if (validate(request)) {
        return dispatch => {
            const { name, description } = request
            if (request.id) {
                axios.put(`${URL}/${request.id}`, { name, description })
                .then(_ => dispatch({ type: 'CATEGORY_ADDED' }))
                .then(_ => dispatch(search()))
            } else {
                axios.post(URL, { name, description })
                .then(_ => dispatch({ type: 'CATEGORY_ADDED' }))
                .then(_ => dispatch(search()))
            }       
        }
    }

    return [ handleErrors(request) ]
}

export const edit = request => {
    return { type: 'CATEGORY_EDITED', payload: request }
}

export const deleteById = id => {
    return dispatch => {
        axios.delete(`${URL}/${id}`)
        .then(_ => dispatch({ type: 'CATEGORY_DELETED' }))
        .then(_ => dispatch(search()))
    }
}

const handleErrors = (request) => ({
    type: 'CATEGORY_FIELD_ERRORS',
    payload: { 
        nameError: !request.name ? 'Nome não pode ser vazio' : '',
        descriptionError: !request.description ? 'Descrição não pode ser vazio' : ''
    }
})

function validate(request) {
    let isValid = true

    if (!request.name || !request.description) {
        isValid = false
    }

    return isValid;
}