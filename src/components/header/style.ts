

import styled from 'styled-components';


export const Container = styled.div`


    header{
        height: 125px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        .pesquisa{
            background-color: #FFFFFF;
            border-radius: 10px;
            padding: 15px;
            width: 636px;
            display: flex;
            flex-direction: row;
            align-items: center;
            input{ 
                width: 100%;
                border-width: 0px;

                font-family: Quicksand;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 20px;

                /* identical to box height */
                letter-spacing: 0.21875px;

                /* Text/placeholder */
                color: #B0BEC5;
            }
        }

        .foto{
            border: 0px solid white;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            background-color: white;
        }

        .titulo{
            font-family: Quicksand;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;

            /* identical to box height */
            letter-spacing: 0.21875px;

            /* Dark Blue */
            color: #172144;
        }

        .pontuacao{
            font-family: Quicksand;
            font-style: normal;
            font-weight: bold;
            font-size: 25px;
            line-height: 31px;
            letter-spacing: 0.21875px;

            /* Dark Aqua */
            color: #28AFCD;
        }

        .ranking{
            font-family: Quicksand;
            font-style: normal;
            font-weight: bold;
            font-size: 25px;
            line-height: 31px;
            letter-spacing: 0.21875px;

            /* Dark Yellow */
            color: #FFBD13;
        }
    }
`;