

import styled from 'styled-components';

export const Container = styled.div`


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
        }

        main{
            width: 45%;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            .textos{
                width: 304px;
                .titulo{
                    height: 38px;
                    font-family: Quicksand;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 30px;
                    line-height: 37px;
                    letter-spacing: 0.21875px;
                    color: #172144;
                    margin-bottom: 10px;
                }
                .descricao{
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
        
        }
    }
`;


export const Footer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
    margin-top: 80px;
    .items{
        width: 12px;
        height: 12px;
        border: 1px solid #4928CD;
        box-sizing: border-box;
        border-radius:50%;
        margin-right: 12px;
    }

    .items-pages{
        display: flex;
        flex-direction: row;
        margin-right: 70px;
        margin-left: 70px;
        
    }

    .proximo {
        font-family: Quicksand;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;

        /* identical to box height */
        text-align: right;
        letter-spacing: 0.21875px;

        /* Purple */
        color: #4928CD;

        /* Inside Auto Layout */
        margin: 6px 0px;
    }

    .voltar{
        font-family: Quicksand;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        align-items: flex-end;
        text-align: right;
        letter-spacing: 0.21875px;
        
        /* Secondary/default */
        color: #697B8C;

        margin: 6px 0px;
    }


`;