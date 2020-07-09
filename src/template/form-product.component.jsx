import React from 'react'
import Grid from '../template/grid.component'
import IconButton from '../template/icon-button.component'

import '../../public/style.css'

export default props => {

    const optionsCategories = () => {
        const categories = props.categoriesAll || []

        return categories.map(c => (
            <option key={ c._id } value={ c.name }>{ c.name }</option>
        ))
    }

    const optionsStutus = () => {
        const stutus = props.statusAll || []

        return stutus.map(s => (
            <option key={ s.value } value={ s.value }>{ s.label }</option>
        ))        
    }

    return (
        <div role='form' className='category-form'>
            <Grid cols='12'>
                <label>Nome</label>
                <input id='name' className='form-control' value={ props.name } 
                 onChange={ props.handleChangeName } />
                <div style={{ color: 'red' }}>
                    { props.nameError }
                </div>
            </Grid>

            <Grid cols='12'>
                <label>Categorias</label>
                <select className="custom-select" value={ props.category } 
                    onChange={ props.handleChangeCategory } required>
                    <option value="">Selecione uma categoria</option>
                    { optionsCategories() }
                </select>
                <div style={{ color: 'red' }}>
                    { props.categoryError }
                </div>
            </Grid>

            <Grid cols='12'>
                <label>Status</label>
                <select className="custom-select" value={ props.status } 
                    onChange={ props.handleChangeStatus } required>
                    <option value="">Selecione um status</option>
                    { optionsStutus() }
                </select>
                <div style={{ color: 'red' }}>
                    { props.statusError }
                </div>
            </Grid>

            <Grid cols='12'>
                <IconButton style='primary' icon='plus' onClick={ props.handleAdd } />
            </Grid>
        </div>
    )
}