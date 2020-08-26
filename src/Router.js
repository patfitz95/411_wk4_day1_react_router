import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
// Write component imports here //
const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route exact path="/car/:id" component={Car} />
        </Switch>
    )
}

export default Router


// Start Router function here //
