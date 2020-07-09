import React from 'react'

import { Router, Route, Redirect, hashHistory } from 'react-router'

import Category from '../category/category.componet'
import About from '../abount/abount.componet'
import Product from '../product/product.component'

export default props => (
    <Router history={hashHistory} >
        <Route path='/categories' component={Category} />
        <Route path='/about' component={About} />
        <Route path='/products' component={Product} />
        <Redirect from='*' to='/categories' />
    </Router>
)