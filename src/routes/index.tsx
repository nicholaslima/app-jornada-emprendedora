

import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Signin from '../pages/Signin';
import BemVindo from '../pages/bemVindo';

const Routes:React.FC = () => {
    return(
        <Switch>
            <Route path='/' exact component={ Signin }/>
            <Route path='/bemvindo'  component={ BemVindo }/>
        </Switch>  
    )
}

export default Routes;

