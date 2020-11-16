

import React from 'react';
import { Container } from './style';

import { FiSearch,FiChevronDown  } from 'react-icons/fi';
import { BsFillStarFill,BsCalendar } from 'react-icons/bs';
import Mentor1 from '../../assets/mentor-1.png';
import Mentor3 from '../../assets/mentor-3.png';
import Mentor6 from '../../assets/mentor-6.png';

import Header from '../../components/header';
import Aside  from '../../components/aside';

const Dashboard:React.FC = () => {
    return(
        <Container>
            <Header></Header>
            <body>
                <Aside></Aside>
                <main>
                    <p className="titulo-page">Mentorias</p>
                    <p className="descricao">Especialistas e empreendedores que irão te ajudar na sua jornada</p>

                    <div className="pesquisa">
                        <FiSearch color="#B0BEC5" size="20"></FiSearch>
                        <input type="text" placeholder="Pesquise pelo mentor ou área"/>
                    </div>

                    <div className="lista">
                        <p className="titulo-lista">Marketing</p>
                        <p className="descricao-lista">Especialistas e empreendedores que irão te ajudar na sua jornada</p>

                       <div className="grid-list">
                            <div className="card">
                                <div className="mentor-detalhes">
                                    <img src={ Mentor1 } alt="mentor foto" className="foto"/>
                                    <div className="detalhes">
                                        <div className="nome-mentor">Matheus Henrique</div>
                                        <div className="descricao-mentor">Especilista em SEM, SEO Marketing de Conteúdo Marketing Estratégico</div>
                                    </div>
                                </div>
                                <div className="btns">
                                    <div className="estrelas">
                                            <BsFillStarFill size="18" color="#FFB800"></BsFillStarFill>
                                            <p>4.4</p>   
                                    </div>
                                    <div className="agendar">
                                        <BsCalendar size="18" color="#4928CD"></BsCalendar>
                                        <p>Agendar Mentoria</p>
                                    </div>
                                </div>     
                            </div>
                            
                            <div className="card">
                                <div className="mentor-detalhes">
                                    <img src={ Mentor6 } alt="mentor foto" className="foto"/>
                                    <div className="detalhes">
                                        <div className="nome-mentor">joão carlos</div>
                                        <div className="descricao-mentor">Especilista administração de empresa e negócios</div>
                                    </div>
                                </div>
                                <div className="btns">
                                    <div className="estrelas">
                                            <BsFillStarFill size="18" color="#FFB800"></BsFillStarFill>
                                            <p>4.4</p>   
                                    </div>
                                    <div className="agendar">
                                        <BsCalendar size="18" color="#4928CD"></BsCalendar>
                                        <p>Agendar Mentoria</p>
                                    </div>
                                </div>     
                            </div>

                            <div className="card">
                                <div className="mentor-detalhes">
                                    <img src={ Mentor3 } alt="mentor foto" className="foto"/>
                                    <div className="detalhes">
                                        <div className="nome-mentor">Bruno Leonardo</div>
                                        <div className="descricao-mentor">Especilista em startups e investimentos</div>
                                    </div>
                                </div>
                                <div className="btns">
                                    <div className="estrelas">
                                            <BsFillStarFill size="18" color="#FFB800"></BsFillStarFill>
                                            <p>4.4</p>   
                                    </div>
                                    <div className="agendar">
                                        <BsCalendar size="18" color="#4928CD"></BsCalendar>
                                        <p>Agendar Mentoria</p>
                                    </div>
                                </div>     
                            </div>
                       </div>

                       <p className="buscar">
                           ver mais mentorias 
                          <FiChevronDown size="20" color="#172144"></FiChevronDown>
                       </p>

                    </div>
                </main>
            </body>
        </Container>
    )
}

export default Dashboard;