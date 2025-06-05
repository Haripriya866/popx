import styled from "styled-components";

export const CreateAccountContainer=styled.div`
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
export const CreateAccountHeading=styled.h1`
    font-family:"Roboto";
    font-size:24px;
    color:black;
    font-weight:bold;
    width:50%;
    line-height:36px;

    @media screen and (min-width: 768px) {
        font-size: 30px;        
    }
`
export const CreateAccountLabel=styled.label`
    font-family:"Roboto";
    font-size:14px;
    color:#ab70e6;
    font-weight:400;
    margin-top: 12px;
`

export const CreateAccountInput=styled.input`
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
`
export const AgencyHeading=styled.h1`
    font-family:"Roboto";
    font-size:18px;
    color:#4b5563;
    font-weight:500;
    margin-top: 16px;
`
export const RadioWrapperContainer=styled.div`
    display:flex;
    gap: 24px;
    flex-wrap: wrap;
    align-items:center;
    margin-bottom:6px;
`
export const RadioInputContainer=styled.div`
    display:flex;
    align-items: center;
`
export const AgencyInput=styled.input`
    width:20px;
    height:20px;
    background-color:transparent;
`
export const AgencyLabel=styled.label`
    font-family:"Roboto";
    font-size:18px;
    color:#4b5563;
    font-weight:500;
    margin-left:10px;
`
export const CreateAccountButtonContainer=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:flex-end;
    margin-top:180px;
    @media screen and (min-width:768px){
        margin-top:260px;
    }
`
export const CreateAccountButton=styled.button`
    width: 100%;
    height:46px;
    padding: 0.5rem 1rem;
    font-weight: bold;
    border-radius: 0.375rem;
    margin-bottom: 0.75rem;
    cursor: pointer;
    background-color:#6B21A8;
    color: white;
    border: none;
    box-sizing: border-box;  
`