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

            .textos{
                width: 412px;

                .titulo{
                    font-family: Quicksand;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 42px;
                    line-height: 52px;
                    letter-spacing: 0.21875px;
                    margin-bottom: 16px;

                    /* Dark Blue */
                    color: #172144;
                }

                .descricao{
                    font-family: Quicksand;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 20px;
                    letter-spacing: 0.21875px;

                    /* Dark Blue */
                    color: #172144;
                }
            }
        }

        main{
            width: 45%;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            .lista{
                display: grid;
                grid-gap: 5px;
                grid-template-columns: auto auto auto;
                .item{
                    background: rgba(73, 40, 205, 0.04);
                    border: 1px solid #4928CD;
                    box-sizing: border-box;
                    border-radius: 12px;
                    padding: 11px;
                    width: 118px;
                    font-family: Quicksand;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 15px;
                    line-height: 19px;
                    text-align: center;
                    letter-spacing: 0.21875px;

                    /* Purple */
                    color: #4928CD;
                }
            }
        
        }
    }
`;


export const Footer = styled.div`

    display: flex;
    align-items: center;
    flex-direction: row;
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