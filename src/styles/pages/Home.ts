import styled from "styled-components"
export const Container = styled.div`
    width:100vw;
    height:100vh;
    overflow-x: hidden;
    display: flex;
    align-items:center;
    flex-direction: column;

    h1{
        font-size:54px;
        color: ${props => props.theme.colors.primary};
        margin-top:40px;
    }
`;

export const NavMenu = styled.div`
    width:100vw;
    display: flex;
    flex-direction: column;
`;
