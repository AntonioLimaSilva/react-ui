import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import IconButton from './icon-button.component'
import { edit, deleteById } from '../store/actions/category-action'

import '../../public/style.css'

const categoriesTable = props => {
    
    const rows = () => {
        const categories = props.categories || []

        return categories.map(c => (
            <tr key={c._id}>
                <td>{ c.name }</td>
                <td>{ c.description }</td>
                <td>
                    <IconButton style='info' icon='pencil' 
                        onClick={ () => props.edit(c) } />
                    <IconButton style='danger' icon='trash-o'
                        onClick={ () => props.deleteById(c._id) } />
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

// Pegando do estado global atravez do REDUX
const mapStateToCategories = state => ({ categories: state.category.categories })

const mapDispatchToProps = dispatch => bindActionCreators({ edit, deleteById }, dispatch)

export default connect(mapStateToCategories, mapDispatchToProps)(categoriesTable)