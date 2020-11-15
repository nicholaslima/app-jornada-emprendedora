

import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Signin from '../pages/Signin';
import BemVindo from '../pages/bemVindo';
import Conhecimentos from '../pages/bemVindo/inserirConhecimento';
import Interesses from '../pages/interesses';

const Routes:React.FC = () => {
    return(
        <Switch>
            <Route path='/' exact component={ Signin }/>
            <Route path='/bemvindo'  component={ BemVindo }/>
            <Route path='/seus_conhecimentos'  component={ Conhecimentos }/>
            <Route path='/interesses'  component={ Interesses }/>
        </Switch>  
    )
}

export default Routes;

