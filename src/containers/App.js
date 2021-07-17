import React from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Header from './Header';
import ProductDetail from './ProductDetails';
import ProductList from './ProductList';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={ProductList} />
                    <Route path="/product/:productId" exact component={ProductDetail} />
                    <Route>404 Not Found!</Route>
                </Switch>
            </Router>
            
        </div>
    )
}

export default App;