export const changeName = (event) => ({
    type: 'NAME_CHANGED',
    payload: event.target.value
})

export const changeCategoryName = (event) => ({
    type: 'CATEGORY_CHANGED',
    payload: event.target.value
})

export const changeStatusName = (event) => ({
    type: 'STATUS_CHANGED',
    payload: event.target.value
})