


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

        .item-curso{
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
                    width: 520px;

                    .titulo-trilha{
                        font-family: Quicksand;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 32px;
                        line-height: 40px;

                        /* identical to box height */
                        letter-spacing: 0.21875px;

                        /* Dark Blue */
                        color: #4928CD;
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

                    .detalhes{
                        display: grid;
                        grid-column-gap: 5px;
                        grid-template-columns: auto auto;
                        margin-top: 16px;
                        
                        .preco{
                            font-family: Quicksand;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 16px;
                            line-height: 23px;

                            /* identical to box height */
                            letter-spacing: 0.21875px;

                            /* Dark Blue */
                            color: #172144;
                        }
                        .reconpensas{
                            font-family: Quicksand;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 16px;
                            line-height: 23px;

                            /* identical to box height */
                            letter-spacing: 0.21875px;

                            /* Dark Aqua */
                            color: #28AFCD;
                        }

                        .tempo{
                            font-family: Quicksand;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 16px;
                            line-height: 23px;

                            /* identical to box height */
                            letter-spacing: 0.21875px;

                            /* Dark Blue */
                            color: #172144;
                        }

                        .estrelas{
                            font-family: Quicksand;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 16px;
                            line-height: 23px;

                            /* identical to box height */
                            letter-spacing: 0.21875px;

                            /* Dark Blue */
                            color: #172144;
                            margin-right: 10px;
                        }
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

                .topicos{
                    .lista-topicos{
                            display: grid;
                            grid-column-gap: 5px;
                            grid-template-columns: auto auto;
                            margin-top: 13px;
                           
                        }   
                    }

                    button{
                        background: #99E7A0;
                        border-radius: 15px;
                        font-family: Quicksand;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 18px;
                        line-height: 22px;

                        /* identical to box height */
                        text-align: center;
                        letter-spacing: 0.21875px;

                        /* Dark Blue */
                        color: #172144;
                        padding: 16px;
                        margin-top: 40px;
                        border-width: 0px;
                    }
                }
            }
    .trilha-curso{
        margin-top: 40px;
        .Titulo-conteudo{
            font-family: Quicksand;
            font-style: normal;
            font-weight: normal;
            font-size: 26px;
            line-height: 32px;

            /* identical to box height */
            letter-spacing: 0.21875px;

            /* Dark Blue */
            color: #172144;
        }
        .checkpoint{
            margin-top: 40px;
            .checkpoint-Titulo{
                font-family: Quicksand;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 20px;
                margin-bottom: 6px;
                /* identical to box height */
                letter-spacing: 0.21875px;

                /* Purple */
                color: #4928CD;
            }
            .lista-aulas{
                    padding: 10px;
                    .item-aula{
                        border: 1.5px solid rgba(0, 0, 0, 0.05);
                        box-sizing: border-box;
                        border-radius: 13px;
                        padding: 13px 27px;

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        .detalhes-aula{
                            margin-left: 23px;
                        }
                    }
            }
        }
    }        
 
    .titulo-topico{
            font-family: Quicksand;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.21875px;
            color: #172144;
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

/* Dark Blue */
            border: 1px solid #172144;
            box-sizing: border-box;
            border-radius: 8px;
        }        
        .titulo-aula{
            font-family: Quicksand;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 22px;

            /* identical to box height */
            letter-spacing: 0.21875px;

            /* Dark Blue */
            color: #172144;
        }

        .tenpo-aula{
            font-family: Quicksand;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 15px;

            /* identical to box height */
            letter-spacing: 0.21875px;
            margin-top: 5px;

            /* Dark Blue */
            color: #172144;
        }
    }      
`;