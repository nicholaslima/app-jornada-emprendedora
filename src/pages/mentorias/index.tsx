

import React from 'react';
import { Container } from './style';

import { FiSearch } from 'react-icons/fi';
import { BsFillStarFill,BsCalendar } from 'react-icons/bs';

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
                                    <div className="foto"></div>
                                    <div>
                                        <div className="nome-mentor">Bruno Leonardo</div>
                                        <div className="descricao-mentor">Especilista em SEM, SEO Marketing de Conteúdo Marketing Estratégico</div>
                                    </div>
                                </div>
                                <div className="btns">
                                    <div className="estrelas">
                                            <BsFillStarFill color="#FFB800"></BsFillStarFill>
                                            <p>4.4</p>   
                                    </div>
                                    <div className="agendar">
                                        <BsCalendar color="#4928CD"></BsCalendar>
                                        <p>Agendar Mentoria</p>
                                    </div>
                                </div>     
                            </div>
                            <div className="card">
                                <div className="mentor-detalhes">
                                    <div className="foto"></div>
                                    <div>
                                        <div className="nome-mentor">Bruno Leonardo</div>
                                        <div className="descricao-mentor">Especilista em SEM, SEO Marketing de Conteúdo Marketing Estratégico</div>
                                    </div>
                                </div>
                                <div className="btns">
                                    <div className="estrelas">
                                            <BsFillStarFill color="#FFB800"></BsFillStarFill>
                                            <p>4.4</p>   
                                    </div>
                                    <div className="agendar">
                                        <BsCalendar color="#4928CD"></BsCalendar>
                                        <p>Agendar Mentoria</p>
                                    </div>
                                </div>     
                            </div>
                            <div className="card">
                                <div className="mentor-detalhes">
                                    <div className="foto"></div>
                                    <div>
                                        <div className="nome-mentor">Bruno Leonardo</div>
                                        <div className="descricao-mentor">Especilista em SEM, SEO Marketing de Conteúdo Marketing Estratégico</div>
                                    </div>
                                </div>
                                <div className="btns">
                                    <div className="estrelas">
                                            <BsFillStarFill color="#FFB800"></BsFillStarFill>
                                            <p>4.4</p>   
                                    </div>
                                    <div className="agendar">
                                        <BsCalendar color="#4928CD"></BsCalendar>
                                        <p>Agendar Mentoria</p>
                                    </div>
                                </div>     
                            </div>
                       </div>

                    </div>
                </main>
            </body>
        </Container>
    )
}

export default Dashboard;