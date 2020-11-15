

import React from 'react';
import { Container } from './style';

import Header from '../../components/header';
import Aside  from '../../components/aside';


const Video:React.FC = () => {
    return(
        <Container>
            <Header></Header>
            <body>
                <Aside></Aside>
                <main>
                    <p className="titulo-page">Video</p>
                    <p className="descricao">Titulo do video</p>

                    <iframe title="video" src="https://www.youtube.com/embed/XGSy3_Czz8k?playlist=XGSy3_Czz8k&loop=1"></iframe>
                      
                </main>
            </body>
        </Container>
    )
}

export default Video;