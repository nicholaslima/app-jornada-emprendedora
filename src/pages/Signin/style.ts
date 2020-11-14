import styled from 'styled-components';


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    
    aside{
       width: 40%;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       padding: 50px;

       h5{
            font-family: Roboto;
            font-weight: 300;
            font-size: 20px;
            color: #444D51;
            margin-bottom: 33px;
            margin-top: 83px;
       }

       .social{
           display: flex;
           flex-direction: row;
           margin-bottom: 30px;
       }

       form{
           margin-top: 30px;
           display: flex;
           flex-direction: column;
           align-items: center;
       }

       #novaSenha{
            margin-top: 23px;
            margin-bottom: 40px;
            text-align: center;
       }

       #register{
            margin-top: 53px;
            margin-bottom: 50px;
       }
    }

    main{ 
        width: 60%;
        background: linear-gradient(180deg, #13FFE3 -22.52%, rgba(73, 40, 205, 0.51) 100%);
        mix-blend-mode: multiply;
    }



    .titulo-chamada{

        width: 349px;
        height: 320px;

        font-family: Quicksand;
        font-size: 44px;
        line-height: 70px;
        margin-top: 270px;
        margin-left: 50px;
        display: flex;
        align-items: flex-end;
        letter-spacing: 0.21875px;

        color: #FFFFFF;
    }

    .link{
        font-family: Quicksand;
        font-size: 15px;
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
        font-size: 18px;
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
        font-size: 14px;
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
        font-size: 14px;
        line-height: 16px;
        padding: 9px;

        /* Text / White */
        color: #FFFFFF;
    }

`;