import React from 'react'
import IconButton from '../template/icon-button.component'

import '../../public/style.css'

export default props => {
    
    const rows = () => {
        const categories = props.categories || []

        return categories.map(c => (
            <tr key={c._id}>
                <td>{ c.name }</td>
                <td>{ c.description }</td>
                <td>
                    <IconButton style='info' icon='pencil' 
                        onClick={ () => props.handleEdit(c) } />
                    <IconButton style='danger' icon='trash-o'
                        onClick={ () => props.handleRemove(c) } />
                </td>
            </tr>
        ))
    }

    return (
        <table className='table table-bordered grid-table'>
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                { rows() }
            </tbody>
        </table>
    )
}