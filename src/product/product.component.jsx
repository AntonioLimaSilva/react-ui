import React, { Component } from 'react'
import axios from 'axios'
import PageHeader from '../template/page-header.componet'
import Form from '../template/form-product.component'
import Table from '../template/table-product.component'

const initialState = {
    id: '',
    name: '',
    nameError: '',
    category: '',
    categoryError: '',
    status: '',
    statusError: '',
    categoriesAll: [],
    statusAll: [{ label: 'Em estoque', value: 'EM_ESTOQUE' }, { label: 'Na prateleira', value: 'NA_PRATELEIRA' }],
    productsAll: []
}

const URLCategory = 'http://localhost:3001/api/v1/categories'
const URLProduct = 'http://localhost:3001/api/v1/products'

class Product extends Component {

    constructor(props) {
        super(props)

        this.state = initialState

        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeCategory = this.handleChangeCategory.bind(this)
        this.handleChangeStatus = this.handleChangeStatus.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)

        this.handleCategories()
        this.refresh()

    }

    validate() {
        let nameError = ''
        let categoryError = ''
        let statusError = ''

        if (!this.state.name) {
            nameError = 'Nome não pode ser vazio'
        } 
        
        if (!this.state.category) {
            categoryError = 'Categoria não pode ser vazio'
        } 
        
        if (!this.state.status) {
            statusError = 'Status não pode ser vazio'
        }

        if (nameError || categoryError || statusError) {
            this.setState({ ...this.state, nameError, categoryError, statusError })

            return false;
        }

        return true;
    }

    handleCategories() {
        axios.get(URLCategory).then(response => {
            this.setState({ ...this.state, categoriesAll: response.data })
        })
    }

    handleChangeName(e) {
        this.setState({ ...this.state, name: e.target.value })
    }

    handleChangeCategory(e) {
       this.setState({ ...this.state, category: e.target.value })
    }

    handleChangeStatus(e) {
       this.setState({ ...this.state, status: e.target.value })
    }

    refresh() {
        axios.get(URLProduct).then(response => this.setState({ ...this.state, productsAll: response.data }))
    }

    handleAdd() {
        const body = { 
            name: this.state.name, 
            category: this.state.category, 
            status: this.state.status 
        }

        const isFormValid = this.validate()

        if (isFormValid) {
            if (this.state.id) {
                axios.put(`${URLProduct}/${this.state.id}`, body).then(_ => this.refresh())
            } else {
                axios.post(URLProduct, body).then(_ => this.refresh())
            }
        }
    }

    handleEdit(p) {
        this.setState({ ...this.state, id: p._id, name: p.name, category: p.category, status: p.status })
    }

    handleDelete(p) {
        axios.delete(`${URLProduct}/${p._id}`).then(_ => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader name='Produtos' small='Cadastro' />

                <Form name={ this.state.name } nameError={ this.state.nameError } handleChangeName={ this.handleChangeName } 
                    category={ this.state.category } categoryError={ this.state.categoryError } 
                    categoriesAll={ this.state.categoriesAll } handleChangeCategory={ this.handleChangeCategory } 
                    status={ this.state.status } statusError={ this.state.statusError } statusAll={ this.state.statusAll } 
                    handleChangeStatus={ this.handleChangeStatus } 
                    handleAdd={ this.handleAdd }/>

                <Table productsAll={ this.state.productsAll } 
                    handleEdit={ this.handleEdit } 
                    handleDelete={ this.handleDelete }/>
            </div>
        )
    }
}

export default Product