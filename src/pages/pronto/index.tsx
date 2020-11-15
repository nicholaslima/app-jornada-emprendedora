


import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft,FiArrowRight} from 'react-icons/fi';
import { Container,Footer } from './style';
import Logo from '../../assets/logo-default.png';
import Check from '../../assets/fund-check.png';
import Hand from '../../assets/hand.png';

const Interesses: React.FC = () => {
    return(
        <Container>

            <body>
                <aside>
                    <img src={ Logo } alt="logotipo do site"/>
                    <img src={ Check } alt="imagem principal"/>
                </aside>

                <main>

                    <div className="textos">
                        <div className="titulo"><img src={ Hand } alt="icone mão"/> Tudo pronto!</div>
                        <div className="descricao">Chegou a hora de começarmos nossa jornada e trilharmos o seu sucesso como empreendedor.
                        </div>
                    </div>

                    <Footer>
                        <Link className="voltar" to="/seus_conhecimentos">
                            <FiArrowLeft color="#697B8C" style={{ marginRight: '7px'}}></FiArrowLeft>
                            voltar
                        </Link>

                        <Link className="proximo" to="/dashboard">
                            Vamos começar  
                            <FiArrowRight color="#4928CD" style={{ marginLeft: '7px'}}></FiArrowRight>
                        </Link>
                    </Footer>
                </main>
            </body>
        </Container>
    )
}

export default Interesses;