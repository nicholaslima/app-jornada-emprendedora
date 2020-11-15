



import styled from 'styled-components';


export const Container = styled.div`
    width: 20%;

    aside{

        nav{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 60px;
            .item{
                font-family: Quicksand;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 20px;

                /* identical to box height */
                text-align: justify;
                letter-spacing: 0.21875px;

                /* Dark Blue */
                color: #172144;
                margin-bottom: 44px;
                display: flex;
                flex-direction: row;
                align-items: center;
                p{
                    margin-left: 12px;
                }
            }
        }
    }
`;