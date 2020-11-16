import styled from 'styled-components';
import Bg from '../../assets/bg.png';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

    
    aside{
       width: 40%;
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       align-items: center;
       padding: 50px;

       h5{
            font-family: Roboto;
            font-weight: 300;
            font-size: 2.0rem;
            color: #444D51;
       }

       .social{
           display: flex;
           flex-direction: row;

       }

       .subTitulo{
            font-weight: bold;
            font-size: 12px;
            margin-top: 20px;
            margin-bottom: 20px;
            text-align: center;
       }

       .form{
           display: flex;
           flex-direction: column;
           align-items: center;

           input{
               border-width: 0px 0px 1px 0px;
               border-color: #000000;
               background-color:#F1F7FF;
               padding: 6px;
               width: 100%;
               margin-bottom: 16px;

               &&::placeholder{
                    font-size: 18px;
                    line-height: 22px;
                    color: #172144;
               }
           }
       }

       #novaSenha{

            margin-bottom: 40px;
            text-align: center;
       }

       #register{

       }
    }

    main{ 
        position: relative;
        width: 60%;
        background-image: url(${ Bg });
        background-repeat: no-repeat;
        background-size: cover;
       
        .fundo{
            border: 1px solid black;
            margin-top: 0px;
            width: 100%;
            height: 100vh;
            background: linear-gradient(180deg, #13FFE3 -22.52%, rgba(73, 40, 205, 0.51) 100%);
            mix-blend-mode: multiply;
            
        }
        
    }



    .titulo-chamada{
        width: 250px;
        font-family: Quicksand;
        font-size: 4.0rem;
        line-height: 60px;
        
        position: absolute;
        bottom: 0px;
        left: 70px;
        letter-spacing: 0.21875px;
        color: #FFF;
        margin-bottom: 35px;
    }

    .link{
        font-family: Quicksand;
        font-size: 1.5rem;
        line-height: 17px;
        display: flex;
        text-align: center;
        color: #0879E1;
        text-decoration-line: underline;
    }

    .cadastrar{
        width: 400px;
        height: 49px;
        left: 46px;
        top: 698px;

        /* Purple */
        background: #4928CD;
        border-radius: 12px;

        font-family: Quicksand;
        font-size: 1.8rem;
        line-height: 22px;
        border-width: 0px;

        color: #FFFFFF;
    }

    .button-Google{
        background: #FFFFFF;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
        border-radius: 51px;
        display: flex;
        flex-direction: row;
        align-items: center;

        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 16px;
        padding: 9px;
        color: rgba(0, 0, 0, 0.54);
        margin-right: 16px;
    }

    .button-facebook{
        background: #3975EA;
        display: flex;
        flex-direction: row;
        align-items: center;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
        border-radius: 20px;
        font-family: Roboto;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 16px;
        padding: 9px;

        /* Text / White */
        color: #FFFFFF;
    }

`;