import React from 'react'

import IconButton from '../template/icon-button.component'

export default props => {

    const rows = () => {
        const products = props.productsAll || []
        return products.map(p => (
            <tr key={ p._id }>
                <td>{ p.name }</td>
                <td>{ p.category }</td>
                <td>{ p.status }</td>
                <td>
                    <IconButton style='info' icon='pencil' onClick={ () => props.handleEdit(p) } />
                    <IconButton style='danger' icon='trash-o' onClick={ () => props.handleDelete(p) } />
                </td>
            </tr>
        ))
    }

    return (
        <table className='table table-bordered grid-table'>
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Status</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                { rows() }
            </tbody>
        </table>
    )
}