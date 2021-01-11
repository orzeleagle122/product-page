import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer=styled.div`
    background-color: #101522;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterSubscription=styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;

`;

export const FooterSubHeading=styled.p`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucina Grande', 'Lucida Sans', Arial, sans-serif;
    margin-bottom: 24px;
    font-size: 24px;

`;

export const FooterSubText=styled.p`
    margin-bottom: 24px;
    font-size:20px;
`;

export const Form=styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px){
        flex-direction: column;
        width: 80%;
    }
`;

export const FormInput=styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline:none;
    border:none;
    font-size:16px;
    border:1px solid #fff;

    &::placeholder{
        color:#242424;
    }

    @media screen and (max-width: 820px){
        margin: 0 0 16px 0;
        width: 100%;
    }
`;

export const FooterLinksContainer=styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;

    }

`;

export const FooterLinksWrapper=styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinksItems=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    margin: 16px;
    box-sizing: border-box;
    width: 160px;
    color: #fff;

    @media screen and (max-width:420px){
        margin:0;
        padding:10px;
        width: 100%;
    }
`;

export const FooterLinkTitle=styled.h2`
    margin-bottom: 16px;
`;

export const FooterLink=styled(Link)`
    color:#fff;
    text-decoration: none;
    margin-bottom:0.5rem;

    &:hover{
        color:#0467fb;
        transition: 0.2s ease-out;
        
    }
`;