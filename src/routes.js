import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './App';
import Wheelies from './components/Wheelies/Wheelies';
import About from './components/About/About';


export default (
    <Switch>
        <Route component={Home} exact path='/'/>
        <Route component={Wheelies} exact path='/wheelies'/>
        <Route component={About} path='/about' />
    </Switch>
)
