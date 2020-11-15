import React from 'react';
import { Container } from './style';

import { FiSearch,FiChevronDown  } from 'react-icons/fi';
import { BsFillStarFill,BsCalendar } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

import Header from '../../components/header';
import Aside  from '../../components/aside';
import Diamante from '../../assets/diamante.png';
import Mentoria from '../../assets/mentoria.png';

const Dashboard:React.FC = () => {
    return(
        <Container>
            <Header></Header>
            <body>
                <Aside></Aside>
                <main>
                    <p className="titulo-page">Trilhas</p>
                    <p className="descricao">trilhas de estudos que irão te ajudar na sua jornada</p>

                    <div className="pesquisa">
                        <FiSearch color="#B0BEC5" size="20"></FiSearch>
                        <input type="text" placeholder="Pesquise pelo mentor ou área"/>
                    </div>

                    <div className="lista">

                        <div className="item">
                            <div className="foto"></div>

                            <div className="descricao">
                                <p className="titulo-trilha">
                                    Empreendendo de A à Z
                                </p>

                                <p className="descricao-trilha">Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Interagi no mé, cursus quis, vehicula ac nisi.on tellus tristique interdum.</p>
                            </div>

                            <div className="detalhes">
                                <p className="titulo-detalhe descricao-trilha">
                                    Sobre a trilha
                                </p>

                                <div className="preco-trilha descricao-trilha">
                                    grátis
                                </div>

                                <div className="tempo descricao-trilha">
                                    20 horas de conteúdo
                                </div>
 
                                <div className="estrelas descricao-trilha">
                                    5.0
                                    <AiFillStar size="18" color="#FFB800"></AiFillStar>
                                </div>

                            </div>

                            <div className="acessorios">

                                <div className="pontuacao">
                                    <img src={ Diamante } alt="diamante icone"/>
                                    2500 Diamantes de Recompensa
                                </div>

                                <div className="topicos">
                                    <p className="titulo-topico">Tópicos dessa Trilha</p>

                                    <div className="lista-topicos">
                                        <div className="topico-item">Marketing</div>
                                        <div className="topico-item">Liderança</div>
                                        <div className="topico-item">Economia & Finanças</div>
                                    </div>
                                </div>
                            </div>
                            .
                        </div>
                    </div>
                    
                    <p className="buscar">
                        ver mais trilhas 
                        <FiChevronDown size="20" color="#172144"></FiChevronDown>
                    </p>

                </main>
            </body>
        </Container>
    )
}

export default Dashboard;