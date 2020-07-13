import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Grid from './grid.component'
import IconButton from './icon-button.component'
import { changeName, changeDescription, search, add } from '../store/action/category-action'

class categoryForm extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.search()
    }

    render() {

        const { add, id, name, description } = this.props

        return (
            <div role='form' className='category-form'>
                <Grid cols='12'>
                    <label>Nome</label>
                    <input id='name' className='form-control'
                        placeholder='nome' onChange={ this.props.changeName }
                        value={ this.props.name }></input>
                    <div style={{ fontSize: 12, color: 'red' }}>
                        { this.props.nameError }         
                    </div>
                </Grid>
    
                <Grid cols='12'>
                    <label>Descrição</label>
                    <input id='description' className='form-control'
                        placeholder='descrição' onChange={ this.props.changeDescription } 
                        value={ this.props.description }></input>
    
                    <div style={{ fontSize: 12, color: 'red' }}>
                        { this.props.descriptionError }
                    </div>
                </Grid>
    
                <Grid cols='12 9 10'>
                    <IconButton style='primary' icon='plus' onClick={() => add({id, name, description})} />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    id: state.category.id,
    name: state.category.name,
    description: state.category.description,
    nameError: state.category.nameError,
    descriptionError: state.category.descriptionError
})

const mapDispatchToProps = dispatch => bindActionCreators({ changeName, changeDescription, search, add }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(categoryForm)