import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

const GlobalStyle=createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`;

export const Container=styled.div`
    z-index:1;
    width: 100%auto;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px){
        padding-right: 50px;
        padding-left: 50px;
    }
`;




export default GlobalStyle