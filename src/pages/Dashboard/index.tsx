

import React from 'react';
import { Container } from './style';
import { Link } from 'react-router-dom';

import Header from '../../components/header';
import Aside  from '../../components/aside';
import Estudo from '../../assets/estudo.png';
import Mentoria from '../../assets/mentoria.png';

const Dashboard:React.FC = () => {
    return(
        <Container>
            <Header></Header>
            <body>
                <Aside></Aside>
                <main>
                    <p className="nome-usuario">Olá, Guilherme!</p>
                    <p className="descricao">Preparado para continuar trilhando?</p>

                    <div>

                        <div className="card">
                            <img src={ Estudo } alt=""/>
                            <div className="titulo">Comece uma nova trilha</div>
                            <p className="descricao">Inicie a trilha do empreendedorismo e dê o primeiro passo para tirar a sua ideia do papel</p>
                            
                            <button>Conheça as trilhas de conteúdo</button>
                 
                        </div>

                        <div className="card">
                            <img src={ Mentoria } alt=""/>
                            <div className="titulo">Converse com um mentor</div>
                            <p className="descricao">Converse com nossos mentores e aprimore suas ideias para desenvolver o seu negócio.</p>
                            <Link to="/mentorias">
                                <button>Conheça nossos mentores</button>
                            </Link>
                        </div>

                    </div>
                </main>
            </body>
        </Container>
    )
}

export default Dashboard;