


import React from 'react';
import { Container } from './style';
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
                        <p>Visão Geral</p>
                    </div>
                    <div className="item"> 
                        <img src={ Users } alt=""/>
                        <p>Mentorias</p>
                    </div>
                    <div className="item">
                        <img src={ Trilhas } alt=""/>
                        <p>Minhas Trilhas</p>
                    </div>
                    <div className="item">
                        <img src={ Hanking } alt=""/>
                        <p>Ranking</p>
                    </div>
                    <div className="item">
                        <img src={ Config } alt=""/>
                        <p>Configurações</p>
                    </div>
                    </div>
                </nav>
            </aside>
        </Container>
    )
}

export default Dashboard;