import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`;

export const Container = styled.div`
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    max-width: 300px;
    width: 95%;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    .cpf_cnpj_input {
        width: 100%;
        height: 2rem;
        margin-top: 1rem;
        border: none;
        outline: 1px solid #CCC;
        border-radius: .2rem;
        text-indent: .5rem;
    }
`;

export const RadioArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    
    input {
        margin-right: .2rem;
    }
`