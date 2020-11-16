import React from 'react';
import { Container } from './style';
import { Link } from 'react-router-dom';
import { FiSearch,FiChevronDown  } from 'react-icons/fi';

import { AiFillStar } from 'react-icons/ai';

import Header from '../../components/header';
import Aside  from '../../components/aside';
import Diamante from '../../assets/diamante.png';

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
                                <Link className="titulo-trilha" to="/trilha">
                                    Empreendendo de A à Z
                                </Link>

                                <p className="descricao-trilha">Desenvolva conhecimentos sobre inovação, empreendedorismo e como estruturar um plano de negócios.</p>
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
                        </div>


                        <div className="item">
                            <div className="foto"></div>

                            <div className="descricao">
                                <Link className="titulo-trilha" to="/trilha">
                                    Ferramentas e recursos
                                </Link>

                                <p className="descricao-trilha">Aprenda as melhores ferramentas para inovar e empreender. Faça um planejamento para o seu negócio ou projeto usando o Plano de Negócios</p>
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
                            
                            
                        </div>

                        <p className="buscar">
                            ver mais trilhas 
                            <FiChevronDown size="20" color="#172144"></FiChevronDown>
                        </p>

                    </div>
                    
                    
                </main>
            </body>
        </Container>
    )
}

export default Dashboard;