

import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Signin from '../pages/Signin';
import BemVindo from '../pages/bemVindo';
import Conhecimentos from '../pages/bemVindo/inserirConhecimento';
import Interesses from '../pages/interesses';
import Pronto from '../pages/pronto';
import Dashboard from '../pages/Dashboard';
import Mentorias from '../pages/mentorias';
import Trilhas from '../pages/trilhas';


const Routes:React.FC = () => {
    return(
        <Switch>
            <Route path='/' exact component={ Signin }/>
            <Route path='/bemvindo'  component={ BemVindo }/>
            <Route path='/seus_conhecimentos'  component={ Conhecimentos }/>
            <Route path='/interesses'  component={ Interesses }/>
            <Route path='/pronto'  component={ Pronto }/>
            <Route path='/dashboard'  component={ Dashboard }/>
            <Route path='/mentorias'  component={ Mentorias }/>
            <Route path='/minhas-trilhas'  component={ Trilhas }/>
        </Switch>  
    )
}

export default Routes;

