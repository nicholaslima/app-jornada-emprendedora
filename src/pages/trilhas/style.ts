



import styled from 'styled-components';
import Trilha from '../../assets/trilha-1.png';

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

            .item{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding-bottom: 30px;
                margin-top: 20px;
                border-bottom: 1px solid  #B0BEC5;

                .foto{
                    width: 161px;
                    height: 145px;
                    border-radius: 19px;
                    background-image: url( ${ Trilha } );
                    background-repeat: no-repeat;
                    background-size: contain;
                    margin-right: 18px;
                    
                }

                .descricao{
                    width: 364px;

                    .titulo-trilha{
                        font-family: Quicksand;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 32px;
                        line-height: 40px;

                        /* identical to box height */
                        letter-spacing: 0.21875px;

                        /* Dark Blue */
                        color: #172144;
                    }

                    .descricao-trilha{
                        margin-top: 8px;
                        font-family: Quicksand;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 23px;
                        letter-spacing: 0.21875px;

                        /* Dark Blue */
                        color: #172144;
                    }
                }

                .detalhes{
                    
                    margin-left: 13px;
                    .titulo-detalhe{
                        font-family: Quicksand;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 17px;

                        /* identical to box height */
                        letter-spacing: 0.21875px;

                        /* Dark Blue */
                        color: #172144;
                    }
                    .preco-trilha{
                        font-family: Quicksand;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 23px;
                        margin-top: 4px;
                        /* identical to box height */
                        letter-spacing: 0.21875px;

                        /* Dark Blue */
                        color: #172144;
                    }

                    .tempo{
                        font-family: Quicksand;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 23px;
                        margin-top: 4px;
                        /* identical to box height */
                        letter-spacing: 0.21875px;

                        /* Dark Blue */
                        color: #172144;
                    }

                    .estrelas{
                        display: flex;
                        flex-direction: row;
                        margin-top: 4px;
                        align-items: center;
                    }
                }

                .acessorios{
                   
             

                    .pontuacao{
                        font-family: Quicksand;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 23px;

                        /* identical to box height */
                        letter-spacing: 0.21875px;

                        /* Dark Aqua */
                        color: #28AFCD;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        margin-bottom: 29px;
                        img{
                            margin-right: 7px;
                        }
                    }

                    .topicos{
                        

                        .lista-topicos{
                            display: grid;
                            grid-column-gap: 5px;
                            grid-template-columns: auto auto;
                            margin-top: 13px;
                           
                        }   
                    }
                }


            }

        

    

        .topico-item{
            font-family: Quicksand;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 17px;
            text-align: center;
            letter-spacing: 0.21875px;
            padding: 6px;

            /* Dark Blue */
            color: #172144;

            background: rgba(73, 40, 205, 0.04);


            border: 1px solid #172144;
            box-sizing: border-box;
            border-radius: 8px;
        }

        .buscar{
            font-family: Quicksand;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;

            /* identical to box height */
            letter-spacing: 0.21875px;
            text-decoration-line: underline;
            margin-top: 18px;
            text-align: center;
            cursor: pointer;

            /* Dark Blue */
            color: #172144;
        }
    }
`;