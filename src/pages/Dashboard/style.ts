

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

        .nome-usuario{
            font-family: Quicksand;
            font-style: normal;
            font-weight: normal;
            margin-top: 40px;
            font-size: 32px;
            line-height: 40px;

            /* identical to box height */
            letter-spacing: 0.21875px;

            /* Dark Blue */
            color: #172144;
        }
        .descricao{
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

        div{ 
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            .card{
                display: flex;
                flex-direction: column;
                padding: 100px;
                margin: 15px;
                margin-top: 40px;
                background: #F1F7FF;
                border-radius: 32px;
                width: 500px;
                .titulo{
                    font-family: Quicksand;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 48px;
                    margin-top: 50px;
                    line-height: 60px;
                    text-align: center;
                    letter-spacing: 0.21875px;

                    /* Dark Blue */
                    color: #172144;
                }

                .descricao{
                    font-family: Quicksand;
                    margin-top: 24px;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 20px;
                    text-align: center;
                    letter-spacing: 0.21875px;

                    /* Dark Blue */
                    color: #172144;
                }

                button{
                    border: 1px solid #172144;
                    box-sizing: border-box;
                    border-radius: 8px;
                    margin-top: 30px;
                    font-family: Quicksand;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 20px;
                    padding: 10px;
                    background-color: #F1F7FF;;

                    /* identical to box height */
                    letter-spacing: 0.21875px;

                    /* Dark Blue */
                    color: #172144;
                }
            }

        }
    }
`;