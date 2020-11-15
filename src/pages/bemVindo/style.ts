

import styled from 'styled-components';

export const Container = styled.div`

    header{ 
        height: 80px;
    }

    body{ 
        display: flex;
        flex-direction: row;
        
        width: 100%;
        height: 100vh;
        aside{
            width: 55%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            height: 660px;
        }

        main{
            width: 45%;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        
        }
    }

   

    .texto{
        width: 325px;
        font-family: Quicksand;
        font-size: 16px;
        line-height: 20px;
        color: #172144;
        margin-bottom: 15px;
    }

    .titulo{ 
            width: 259px;
            height: 38px;
            font-family: Quicksand;
            font-weight: normal;
            font-size: 30px;
            line-height: 37px;
            margin-bottom: 11px;
            height: 38px;
            color: #172144;
    }

    .proximo{
        font-family: Quicksand;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        margin-top: 26px;
        color: #4928CD;
        margin: 6px 0px;

        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 0px;
    }

    .voltar{
        font-family: Quicksand;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.21875px;
        margin-top: 26px;
        color: #697B8C;
        margin: 6px 0px;

        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        margin-left: 0px;
    }
`;