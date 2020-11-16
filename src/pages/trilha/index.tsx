

import React from 'react';
import { Container } from './style';

import { FiExternalLink  } from 'react-icons/fi';
import { AiTwotoneStar } from 'react-icons/ai';
import { AiFillPlayCircle } from 'react-icons/ai';

import Header from '../../components/header';
import Aside  from '../../components/aside';
import { Link } from 'react-router-dom';

const Trilha:React.FC = () => {
    return(
        <Container>
            <Header></Header>
            <body>
                <Aside></Aside>
                <main>
                    <div className="item-curso">
                            <div className="foto"></div>

                            <div className="descricao">
                                <p className="titulo-trilha">
                                    Empreendendo de A à Z
                                </p>

                                <p className="descricao-trilha">Desenvolva conhecimentos sobre inovação, empreendedorismo e como estruturar um plano de negócios.</p>
                                <div className="detalhes">
                                    <div className="preco">Trilha Gratuita</div>
                                    <div className="reconpensas">2500 Diamantes de Recompensa</div>
                                    <div className="tempo">20 horas de conteúdo</div>
                                    <div className="estrelas">
                                        4
                                        <AiTwotoneStar color="#FFB800" size="20"></AiTwotoneStar>
                                        <AiTwotoneStar color="#FFB800" size="20"></AiTwotoneStar>
                                        <AiTwotoneStar color="#FFB800" size="20"></AiTwotoneStar>
                                        <AiTwotoneStar color="#FFB800" size="20"></AiTwotoneStar>
                                    </div>
                                </div>
                            </div>

                            <div className="topicos">
                                    <p className="titulo-topico">Tópicos dessa Trilha</p>

                                    <div className="lista-topicos">
                                        <div className="topico-item">Marketing</div>
                                        <div className="topico-item">Liderança</div>
                                        <div className="topico-item">Economia & Finanças</div>
                                    </div>

                                    <button>
                                        <FiExternalLink color="#172144" size="20" style={{ marginRight: '5px'}}></FiExternalLink>
                                        Me inscrever na Trilha
                                    </button>
                            </div>
                    </div>

                    <div className="trilha-curso">
                        <div className="Titulo-conteudo">Conteúdos da Trilha</div>

                        <div className="lista-checkpoints">
                            <div className="checkpoint">

                                <div className="checkpoint-Titulo">
                                    Você também pode | Checkpoint 1
                                </div>

                                <div className="lista-aulas">
                                    <Link to="/video" className="item-aula">
                                        <AiFillPlayCircle color="#28AFCD" size="20"></AiFillPlayCircle>
                                        <div className="detalhes-aula">
                                            <div className="titulo-aula">Ideação do Projeto</div>
                                            <div className="tempo-aula">12:17</div>
                                        </div>
                                    </Link>

                                    <Link to="/video" className="item-aula">
                                        <AiFillPlayCircle color="#28AFCD" size="20"></AiFillPlayCircle>
                                        <div className="detalhes-aula">
                                            <div className="titulo-aula">Planejamento e Pesquisa</div>
                                            <div className="tempo-aula">18:17</div>
                                        </div>
                                    </Link>

                                    <Link to="/video" className="item-aula">
                                        <AiFillPlayCircle color="#28AFCD" size="20"></AiFillPlayCircle>
                                        <div className="detalhes-aula">
                                            <div className="titulo-aula">Montando um MVP</div>
                                            <div className="tempo-aula">25:19</div>
                                        </div>
                                    </Link>
                                    
                                </div>


                                 <div className="checkpoint">

                                <div className="checkpoint-Titulo">
                                    Aprimorando o seu conhecimento | Checkpoint 2
                                </div>

                                <div className="lista-aulas">
                                    <div className="item-aula">
                                        <AiFillPlayCircle color="#28AFCD" size="20"></AiFillPlayCircle>
                                        <div className="detalhes-aula">
                                            <div className="titulo-aula">Validando uma ideia </div>
                                            <div className="tempo-aula">28:17</div>
                                        </div>
                                    </div>

                                    <div className="item-aula">
                                        <AiFillPlayCircle color="#28AFCD" size="20"></AiFillPlayCircle>
                                        <div className="detalhes-aula">
                                            <div className="titulo-aula">Como iniciar o desenvolvimento</div>
                                            <div className="tempo-aula">18:57</div>
                                        </div>
                                    </div>

                                    <div className="item-aula">
                                        <AiFillPlayCircle color="#28AFCD" size="20"></AiFillPlayCircle>
                                        <div className="detalhes-aula">
                                            <div className="titulo-aula">Desenvolvendo a sua ideia</div>
                                            <div className="tempo-aula">17:10</div>
                                        </div>
                                    </div>
                                    
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

export default Trilha;