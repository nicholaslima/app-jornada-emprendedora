


import React from 'react';

import { FiArrowRight  } from 'react-icons/fi';

import Logo from '../../assets/logo-default.png';
import Arvores from '../../assets/Group 8.png';
import Hand from '../../assets/hand.png';

import { Container } from './style';
import { Link } from 'react-router-dom';

const BemVindo:React.FC = () => {
    return(
        <Container>
            <body>
                <aside>
                    <img src={ Logo } alt="logotipo do site"/>
                    <img src={ Arvores } alt="imagem de árvores"/>
                </aside>
                <main>
                    <div>
                        <p className="titulo"><img src={ Hand } alt="icone mão"/> Bem vindo!</p>
                        <p className="texto">Estamos muito felizes que você decidiu contar com a gente nessa trilha que é empreender.</p>
                        <p className="texto">Nos próximos passos, queremos conhecer um pouco mais sobre você para entender como podemos deixa-lô ainda mais preparado na nossa jornada.</p> 
                        <Link className="proximo" to="/seus_conhecimentos">
                            <p>vamos lá</p> 
                            <FiArrowRight color="#4928CD" size="15"></FiArrowRight>   
                        </Link> 
                    </div>
                </main>
            </body>

        </Container>
    )
}

export default BemVindo;