

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

  
        .pesquisa{
            display: flex;
            flex-direction: row;
            border-bottom: 1px solid #B0BEC5;
            padding-bottom: 20px;
            margin-top: 37px;
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
                margin-left: 8px;
                /* Text/placeholder */
                color: #B0BEC5;
            }
        }

        .lista{
            margin-bottom: 90px;
            margin-top: 30px;
            display: flex;
            flex-direction: column;

            .titulo-lista{
                font-family: Quicksand;
                font-style: normal;
                font-weight: normal;
                font-size: 32px;
                line-height: 40px;
                margin-bottom: 8px;
                /* identical to box height */
                letter-spacing: 0.21875px;

                /* Dark Blue */
                color: #172144;
            }

            .descricao-lista{
                font-family: Quicksand;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 20px;

                /* identical to box height */
                letter-spacing: 0.21875px;
                margin-bottom: 24px;
                /* Dark Blue */
                color: #172144;
            }

            .grid-list{
                display: grid;
                grid-column: auto auto auto;
                grid-gap: 10px;
                .card{
                    background: #A3D7FE;
                    border-radius: 16px;
                    padding: 40px;
                    .mentor-detalhes{
                        display: flex;
                        flex-direction:row;
                        justify-content: space-around;
                    }
                }
            }
        }


        .nome-mentor{
            font-family: Quicksand;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 20px;

            /* identical to box height */
            letter-spacing: 0.21875px;

            /* Dark Blue */
            color: #172144;
        }

        .descricao-mentor{
            font-family: Quicksand;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.21875px;

            /* Dark Blue */
            color: #172144;
        }
    }
`;