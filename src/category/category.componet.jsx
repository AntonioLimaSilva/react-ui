import React from 'react'
import PageHeader from '../template/page-header.componet'
import Form from '../template/form-category.componet'
import Table from '../template/table-category.componet'

export default props => (
    <div>
        <PageHeader name='Categorias' small='Cadastro' />

        <Form />
            
        <Table/>
    </div>
)