
import React from 'react';
import { Container } from './style';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Signin:React.FC = () => {
    return(
        <Container>
            <aside>
                <img src="" alt="logo"/>

                <h5>Faça Login com</h5>

                <div className="social">
                    <div className="button-Google">
                        <FcGoogle style={{ marginRight: '23px' }} size="17"></FcGoogle>
                        <p>Entrar com google</p>
                    </div>

                    <div className="button-facebook">
                        <FaFacebook color="#fff" style={{ marginRight: '12px'}} size="17"></FaFacebook>
                        <p>Entrar com facebook</p>
                    </div>
                </div>

                <p>ou</p>

                <form action="">
                    <input type="text" placeholder="E-mail"/>
                    <input type="text" placeholder="Senha"/>

                    <p className="link" id="novaSenha">Não consigo acessar minha conta</p> 

                    <button className="cadastrar">Acessar agora</button>
                </form>
                  

                <p id="register"> 
                    <p style={{ color: '#0879E1',fontSize: '14px',textAlign: 'center',fontFamily:'Quicksand'}}>novo por aqui?</p>
                    <p className="link">crie uma nova conta</p>
                </p>

                <p className="link">
                    Politica de Privacidade
                </p>
            </aside>
            <main>
                <p className="titulo-chamada">
                    Inicie a sua jornada para se tornar um empreendedor
                </p>
            </main>
        </Container>
    )
}

export default Signin;