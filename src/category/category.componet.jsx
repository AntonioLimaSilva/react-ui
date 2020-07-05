import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from  '../template/page-header.componet'
import Form from '../template/form.componet'
import Table from '../template/table.componet'

const url = 'http://localhost:3001/api/v1/categories'

const initialState = { 
    id: null, 
    name: '', 
    description: '', 
    categories: [],
    nameError: '',
    descriptionError: ''
}

class Category extends Component {

    constructor(props) {
        super(props)

        this.state = initialState

        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeDescription = this.handleChangeDescription.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.validate = this.validate.bind(this)

        this.refresh()
    }

    validate() {
        let nameError =  ''
        let descriptionError = ''

        if (!this.state.name) {
            nameError = 'Nome não pode ser vazio'
        }

        if (!this.state.description) {
            descriptionError = 'Descrição não pode ser vazio'
        }

        if (nameError || descriptionError) {
            this.setState({ ...this.state, nameError, descriptionError })
            return false;
        }

        return true;
    }

    handleChangeName(e) {
        this.setState({ ...this.state, name:  e.target.value })
    }

    handleChangeDescription(e) {
        this.setState({ ...this.state, description:  e.target.value })
    }

    refresh() {
        axios.get(`${url}?sort=-createdAt`).then(response => {
            this.setState({ ...this.state, name: '', description: '', categories: response.data })
        })
    }

    handleEdit(c) {
        this.setState({ ...this.state, id: c._id, name: c.name, description: c.description })
    }

    handleRemove(c) {
        axios.delete(`${url}/${c._id}`).then(_ => this.refresh())
    }

    handleAdd() {
        const isFormValid = this.validate()

        if (isFormValid) {
            const body = {
                name: this.state.name,
                description: this.state.description
            }
    
            if (this.state.id === null) {
                axios.post(url, body ).then(_ => {
                    this.refresh()
                })
            } else {
                axios.put(`${url}/${this.state.id}`, body).then(_ => {
                    this.refresh()
                })
            }
        }
    }

    render() {
        return(
            <div>
                <PageHeader name='Categorias' small='Cadastro' />

                <Form name={ this.state.name } nameError={ this.state.nameError }
                    descriptionError={ this.state.descriptionError } description={ this.state.description }
                    
                    handleChangeName={ this.handleChangeName }
                    handleChangeDescription={ this.handleChangeDescription }
                    handleAdd={ this.handleAdd } />
                    
                <Table categories={ this.state.categories }
                    handleEdit={ this.handleEdit }
                    handleRemove={ this.handleRemove } />
            </div>
        )
    }
}

export default Category