import { createGlobalStyle } from 'styled-components';


export default  createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;
        outline: 0px;
        box-sizing: border-box;
    }

    html{
        font-size:62.5%;
    }
    
    body{ 
        background-color: #F1F7FF;
    }

    border,input,button{
        font-family: Quicksand;
    }

    button{ 
        cursor: pointer;
    }

    a{ 
        text-decoration: none;
    }
`;