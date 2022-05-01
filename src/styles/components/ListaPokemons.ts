import styled from "styled-components"
export const TitleCard = styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;
    background: ${props => props.theme.colors.card_title_bg};
    border-radius: 4px;
    text-transform: capitalize;
    color: ${props => props.theme.colors.text};

`;

export const PaperContainer = styled.div`
    background: ${props => props.theme.colors.secondary};
    height:100%;
    border-radius: 5px;
    box-shadow: 0 0 3px black;
    :hover{
        background-color: #16D6FB;
        box-shadow: 0 0 10px black;
        cursor: pointer;
    }
`;

