
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Logo from '../../assets/logo-default.png';

const Signin:React.FC = () => {
    const [ email,setEmail ] = useState('');
    const [ senha,setSenha ] = useState('');

   /* const HandleSubmit = useCallback(async () => {
        api.post('/sessions',{
            email:'teste@teste.com.br',
            password:'teste123',
        }).then(response => 
            console.log(response.data)
        );

    },[]);*/

    return(
        <Container>
            <aside>
                <img src={ Logo } alt="logo"/>

                <h5>Faça Login com</h5>
                <div>
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

                    <p className="subTitulo">ou</p>

                    <div className="form">
                        <input type="text" placeholder="E-mail" value={ email } onChange={ (e) => setEmail(e.target.value)  } />
                        <input type="password" placeholder="Senha" value={ senha } onChange={ (e) => setSenha(e.target.value)  } />

                        <p className="link" id="novaSenha">Não consigo acessar minha conta</p> 

                        <Link to="/bemvindo">
                            <button className="cadastrar">Acessar agora</button>
                        </Link>
   
                    </div>
                </div>  

                <p id="register"> 
                    <p style={{ color: '#0879E1',fontSize: '14px',textAlign: 'center',fontFamily:'Quicksand'}}>novo por aqui?</p>
                    <p className="link">crie uma nova conta</p>
                </p>

                <p className="link">
                    Politica de Privacidade
                </p>
            </aside>
            <main>
                <div className="fundo">
                    
                </div>
                <p className="titulo-chamada">
                        Inicie a sua jornada para se tornar um empreendedor
                    </p>
            </main>
        </Container>
    )
}

export default Signin;