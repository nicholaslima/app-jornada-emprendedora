
import React from 'react';
import { Container } from './style';
import { FiSearch } from 'react-icons/fi';

import Diamante from '../../assets/diamante.png';
import Logo from '../../assets/logo-default.png';

const Header:React.FC = () => {
    return(
        <Container>
            <header>
                <img src={ Logo } alt="logo"/>
                <div className="pesquisa">
                    <FiSearch size="20" color="#4928CD" style={{ marginRight: '10px'}}></FiSearch>
                    <input type="text" placeholder="Pesquise por um curso ou mentoria"/>
                </div>

                <div className="pontuacao">
                    <p className="titulo">seus diamantes</p>
                    <p className="pontuacao"><img src={ Diamante } alt="diamnate"/> 5000</p>
                </div>

                <div className="ranking">
                    <p className="titulo">ranking</p>
                    <p className="ranking"> 11°</p>
                </div>

                <div className="foto">

                </div>
            </header>
        </Container>
    )
}

export default Header;