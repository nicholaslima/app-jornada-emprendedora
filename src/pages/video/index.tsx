

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

                    <iframe title="video" src=""></iframe>
                      
                </main>
            </body>
        </Container>
    )
}

export default Video;