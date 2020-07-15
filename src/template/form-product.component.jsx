import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from '../template/grid.component'
import IconButton from '../template/icon-button.component'
import { changeName, changeCategoryName, changeStatusName } from '../store/actions/product-action'

import '../../public/style.css'

class productForm extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const optionsCategories = () => {
            const categories = this.props.categoriesAll || []
    
            return categories.map(c => (
                <option key={ c._id } value={ c.name }>{ c.name }</option>
            ))
        }
    
        const optionsStutus = () => {
            const stutus = this.props.statusAll || []
    
            return stutus.map(s => (
                <option key={ s.value } value={ s.value }>{ s.label }</option>
            ))        
        }

        const { changeName, changeCategoryName, changeStatusName } = this.props
    
        return (

            <div role='form' className='category-form'>
                <Grid cols='12'>
                    <label>Nome</label>
                    <input id='name' className='form-control' value={ this.props.name } 
                        onChange={ this.props.changeName } />
                    <div style={{ color: 'red' }}>
                        { this.props.nameError }
                    </div>
                </Grid>
    
                <Grid cols='12'>
                    <label>Categorias</label>
                    <select className="custom-select" value={ this.props.category } 
                        onChange={ this.props.changeCategoryName } required>
                        <option value="">Selecione uma categoria</option>
                        { optionsCategories() }
                    </select>
                    <div style={{ color: 'red' }}>
                        { this.props.categoryError }
                    </div>
                </Grid>
    
                <Grid cols='12'>
                    <label>Status</label>
                    <select className="custom-select" value={ this.props.status } 
                        onChange={ this.props.changeStatusName } required>
                        <option value="">Selecione um status</option>
                        { optionsStutus() }
                    </select>
                    <div style={{ color: 'red' }}>
                        { this.props.statusError }
                    </div>
                </Grid>
    
                <Grid cols='12'>
                    <IconButton style='primary' icon='plus' onClick={ this.props.handleAdd } />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    name: state.product.name,
    category: state.product.category,
    status: state.product.status
})

const mapDispatchToProps = dispatch => bindActionCreators({ changeName, changeCategoryName, changeStatusName }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(productForm)