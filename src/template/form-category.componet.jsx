import React from 'react'
import Grid from './grid.component'
import IconButton from './icon-button.component'

export default props => (
    <div role='form' className='category-form'>
        <Grid cols='12'>
            <label>Nome</label>
            <input id='name' className='form-control'
                placeholder='nome' onChange={ props.handleChangeName }
                value={ props.name }></input>
            <div style={{ fontSize: 12, color: 'red' }}>
                { props.nameError }
            </div>
        </Grid>

        <Grid cols='12'>
            <label>Descrição</label>
            <input id='description' className='form-control'
                placeholder='descrição' onChange={ props.handleChangeDescription } 
                value={ props.description }></input>

            <div style={{ fontSize: 12, color: 'red' }}>
                { props.descriptionError }
            </div>
        </Grid>

        <Grid cols='12 9 10'>
            <IconButton style='primary' icon='plus' onClick={props.handleAdd} />
        </Grid>
    </div>
)