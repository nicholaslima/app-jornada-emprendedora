import React from 'react';


import { FiArrowRight,FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

import { Container } from './style';
import { Footer,Lista,Titulo } from './inserirConhecimentoStyles';

const inserirConhecimentos:React.FC = () => {
    return(
        <Container>
            <body>
                <aside>
                    <img src={ Logo } alt="logotipo do site"/>
                    <Titulo>Nos conte um pouco sobre o quanto você conhece.</Titulo>
                </aside>
                <main>
                    <Lista>
                        <div className="item-select">
                            <p className="subtitulo-select">marketing</p>
                            <select name="marketing" id="">
                                <option value="">selecione uma opção</option>
                                <option value="">nenhum</option>
                                <option value="">iniciante</option>
                                <option value="">intermediario</option>
                                <option value="">avançado</option>
                            </select>
                        </div>

                        <div className="">
                            <p className="subtitulo-select">Finanças e economia</p>
                            <select name="marketing" id="">
                                <option value="">selecione uma opção</option>
                                <option value="">nenhum</option>
                                <option value="">iniciante</option>
                                <option value="">intermediario</option>
                                <option value="">avançado</option>
                            </select>
                        </div>


                        <div className="">
                            <p className="subtitulo-select">Legislação</p>
                            <select name="marketing" id="">
                                <option value="">selecione uma opção</option>
                                <option value="">nenhum</option>
                                <option value="">iniciante</option>
                                <option value="">intermediario</option>
                                <option value="">avançado</option>
                            </select>
                        </div>

                        <div className="">
                            <p className="subtitulo-select">liderança</p>
                            <select name="marketing" id="">
                                <option value="">selecione uma opção</option>
                                <option value="">nenhum</option>
                                <option value="">iniciante</option>
                                <option value="">intermediario</option>
                                <option value="">avançado</option>
                            </select>
                        </div>

                        <div className="">
                            <p className="subtitulo-select">vendas</p>
                            <select name="marketing" id="">
                                <option value="">selecione uma opção</option>
                                <option value="">nenhum</option>
                                <option value="">iniciante</option>
                                <option value="">intermediário</option>
                                <option value="">avançado</option>
                            </select>
                        </div>

                    </Lista>
                    <Footer>
                    
                        <Link className="voltar" to="/bemvindo">
                            <FiArrowLeft color="#697B8C"></FiArrowLeft>
                            voltar
                        </Link>

                        <div className="items-pages">
                            <div className="items"></div>
                            <div className="items"></div>
                        </div>

                        <Link className="proximo"to="/">
                            Próximo  
                            <FiArrowRight color="#4928CD"></FiArrowRight>
                        </Link>
                    </Footer>
                </main>
            </body>

        </Container>
    )
}


export default inserirConhecimentos;