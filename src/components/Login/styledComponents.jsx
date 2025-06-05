import styled from "styled-components";

export const LoginContainer=styled.div`
    display:flex;
    flex-direction:column;    
    padding:20px;
    background-color: #f3f4f6;

    min-height:100vh;
    width: 100vw;
    max-width: 480px; 
    margin: 0 auto;
    box-sizing: border-box;

    overflow-x: hidden;    

    @media screen and (min-width: 768px) {
        max-width: 520px;       
    }
    @media screen and (min-width: 1024px) {
        max-width: 640px;       
    } 
`
export const LoginHeading=styled.h1`
    font-family:"Roboto";
    font-size:24px;
    color:black;
    font-weight:bold;
    width:70%;
    line-height:36px;

    @media screen and (min-width:768px){
        font-size:30px;
    }
`
export const LoginDescription=styled.p`
    font-family:"Roboto";
    font-size:16px;
    color:#4b5563;
    font-weight:400;
    width:70%;
    margin-top:4px;
`
export const LoginWrapper = styled.div`
  width: 100%;
`;

export const LoginLabel=styled.label`
    font-family:"Roboto";
    font-size:14px;
    color:#ab70e6;
    font-weight:400;
    margin-top: 12px;
`
export const LoginInput=styled.input`
    font-family:"Roboto";
    font-size:14px;
    color:#4b5563;
    font-weight:400;
    width:100%;
    height:46px;
    padding:4px 12px;
    border-radius:8px;
    border-width:1px;
    margin-bottom:10px;
    outline:none;
    cursor:pointer;
    box-sizing: border-box;
    background-color:transparent;
`
export const LoginButton=styled.button`
    width: 100%;
    height:46px;
    padding: 0.5rem 1rem;
    font-weight: bold;
    border-radius: 0.375rem;
    margin-bottom: 0.75rem;
    cursor: pointer;
    outline:none;
    background-color:#c2c0c4;
    color: white;
    border: none;
    margin-top:10px;
    box-sizing: border-box;
`