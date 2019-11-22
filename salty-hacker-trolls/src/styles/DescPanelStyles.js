import styled from "styled-components";
import { device } from "./MediaQueries" 

export const Panel = styled.section`
    width: 50%;
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    background: #ec6533;

    @media ${device.tablet} {
        width: 80%;
    }
`;

export const PanelBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: whitesmoke;
`;

export const DescTitle = styled.h4`
    font-size: 1.2rem;
    padding: 0px;
    padding-top: 5px;
    margin: 0px;
    font-family: 'Roboto', sans-serif;
    color: #ec6533;
    letter-spacing: 1px;
`;

export const PanelButton = styled.button`
    display: flex;
    flex-direction: row;
    width: 50%;
    background: whitesmoke;
    border: none;
`;

export const ButtonImage = styled.img`
    width: 25px;
    height: 25px;
    background: whitesmoke;
    margin-top: 14px;
    margin-left: 3px;

    &:hover {
        transform: scale(1.15);
      }
`;

export const PanelText = styled.p`
    font-size: 1.2rem;
    padding: 1%;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    text-align: justify;
    line-height: 1.5;
    color: black;
    max-width: 100%;
    word-wrap: break-word;
`;
