


import React from 'react';
import { Container } from './style';
import { Link } from 'react-router-dom';
import { GrSystem } from 'react-icons/gr';

import Trilhas from '../../assets/trilhas.png';
import Config from '../../assets/config.png';
import Hanking from '../../assets/ranking.png';
import Users from '../../assets/users.png';


const Dashboard:React.FC = () => {
    return(
        <Container>
            <aside>
                <nav>
                    <div>
                    <div className="item"> 
                        <GrSystem color="#172144" size="20"></GrSystem>
                        <Link to="/dashboard">Visão Geral</Link>
                    </div>
                    <div className="item"> 
                        <img src={ Users } alt=""/>
                        <Link to="/mentorias">Mentorias</Link>
                    </div>
                    <div className="item">
                        <img src={ Trilhas } alt=""/>
                        <Link to="/minhas-trilhas">Minhas Trilhas</Link>
                    </div>
                    <div className="item">
                        <img src={ Hanking } alt=""/>
                        <Link to="/ranking">Ranking</Link>
                    </div>
                    <div className="item">
                        <img src={ Config } alt=""/>
                        <Link to="/conta">Configurações</Link>
                    </div>
                    </div>
                </nav>
            </aside>
        </Container>
    )
}

export default Dashboard;