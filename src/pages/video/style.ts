

import styled from 'styled-components';


export const Container = styled.div`

    body{
        display: flex;
        flex-direction: row;
    }


    main{ 
        padding: 30px;
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        border-radius: 30px 0px 0px 0px;
        width: 85%;

        .titulo-page{

            width: 148px;
            height: 40px;
            font-family: Quicksand;
            font-style: normal;
            font-weight: normal;
            font-size: 32px;
            line-height: 40px;

            /* identical to box height */
            letter-spacing: 0.21875px;

            /* Purple */
            color: #4928CD;
        }
        .descricao{
            font-family: Quicksand;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0.21875px;
            color: #172144;
            margin-top: 8px;
        }
        iframe{
            width: 100%;
            height: 650px;
            margin-top: 50px;
        }
    }
`;