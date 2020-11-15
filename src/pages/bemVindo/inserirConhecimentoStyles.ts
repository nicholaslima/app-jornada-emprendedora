

import styled from 'styled-components';

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


`;


export const Titulo = styled.h1`

    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    width: 421px;
    font-size: 42px;
    line-height: 52px;
    letter-spacing: 0.21875px;

    /* Dark Blue */
    color: #172144;
`;

export const Lista = styled.div`

    .item-select{
        width: 322px;
    }

    .subtitulo-select{
            font-family: Quicksand;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;
            color: #172144;
            margin-bottom: 5px;
            margin-top: 32px;
        }
    select{
        font-family: Quicksand;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        width: 100%;

        /* identical to box height */
        letter-spacing: 0.21875px;

        /* Text/placeholder */
        color: #B0BEC5;
        background-color: white;
        border-width: 0px 0px 1px 0px;
        border-bottom-color: #000000;
        padding: 6px;

        &&::after{
            color: #4928CD;
            border: 0px solid white;
        }
    }
`;
