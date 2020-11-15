

import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft,FiArrowRight} from 'react-icons/fi';
import { Container,Footer } from './style';
import Logo from '../../assets/logo-default.png';

const Interesses: React.FC = () => {
    return(
        <Container>

            <body>
                <aside>
                    <img src={ Logo } alt="logotipo do site"/>
                    <div className="textos">
                        <p className="titulo">O que você gostaria de aprender?</p>
                        <p className="descricao">Não se preocupe se você não escolheu um tema agora, você poderá configurar seus temas a qualquer momento.</p>
                    </div>
                </aside>

                <main>

                    <div className="lista">
                        <div className="item">Marketing</div>
                        <div className="item">Economia & Finanças</div>
                        <div className="item">Liderança</div>
                        <div className="item">Comunicação</div>
                        <div className="item">Estratégia</div>
                        <div className="item">Legislação</div>
                        <div className="item">Contabilidade</div>
                        <div className="item">Validação de Ideias</div>
                    </div>

                    <Footer>
                        <Link className="voltar" to="/seus_conhecimentos">
                            <FiArrowLeft color="#697B8C"></FiArrowLeft>
                            voltar
                        </Link>

                        <div className="items-pages">
                            <div className="items"></div>
                            <div className="items"></div>
                        </div>

                        <Link className="proximo" to="/pronto">
                            Próximo  
                            <FiArrowRight color="#4928CD"></FiArrowRight>
                        </Link>
                    </Footer>
                </main>
            </body>
        </Container>
    )
}

export default Interesses;