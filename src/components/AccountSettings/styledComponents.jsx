import styled from "styled-components";

export const AccountsSettingsContainer=styled.div`
    background-color:#f3f4f6;
    height:100vh;
    display:flex;
    flex-direction:column;
    width:100vw;
    
    overflow-x: hidden;    

    @media screen and (min-width: 768px) {
        max-width: 520px;       
    }
    @media screen and (min-width: 1024px) {
        max-width: 640px;       
    }
`
export const NavHeader=styled.nav`
    background-color:white;
    padding:10px;
    display:flex;
    align-items:center;
    font-family:'Roboto';
    font-size:18px;
    font-weight:500;

    @media screen and (min-width:768px){
        font-size:26px;
    }
`
export const ProfileContainer=styled.div`
    display:flex;
    flex-direction:row;
    padding-top:20px;
    padding:20px;
    margin-bottom:0px;
`
export const ProfileImageContainer=styled.div`
    background-image:url('https://randomuser.me/api/portraits/women/68.jpg');
    background-size:cover;
    display:flex;
    justify-content:flex-end;
    align-items:flex-end;
    width:100px;
    height:100px;
    border-radius:50px;
`
export const CameraContainer=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#6B21A8;
    width:20px;
    height:20px;
    border-radius:10px;
    border-width:0px;

    @media screen and (min-width:768px){
        width:28px;
        height:28px;
        border-radius:50%;
    }
`
export const TextContent=styled.div`
    display:flex;
    flex-direction:column;
    margin-left:10px;
`
export const Name=styled.h1`
    font-family:'Roboto';
    font-size:12px;
    font-weight:bold;
    color:black;
    margin-bottom:0px;

    @media screen and (min-width:768px){
        font-size:16px;
    }
`
export const Gmail=styled.h1`
    font-family:'Roboto';
    font-size:12px;
    color:black;
    font-weight:100;

    @media screen and (min-width:768px){
        font-size:16px;
    }
`
export const ProfileDescription=styled.p`
    font-family:'Roboto';
    font-size:12px;
    color:black;
    padding:20px;
    margin-top:0px;

    @media screen and (min-width:768px){
        font-size:16px;
    }
`
export const HorizontalLine=styled.hr`
    border:1px dashed #c3c7c4;
    width:100vw;
`
