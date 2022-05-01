import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font: 400 16px Roboto, sans-serif;
    }

    ::-webkit-scrollbar{
        width:10px;
        background:#919191;
    }

    ::-webkit-scrollbar-thumb{
        background: #EE6B2F;
        border-radius:30px;
    }
`;
