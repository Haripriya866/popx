import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
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
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 1rem;
  margin-top:0px;
  line-height: 1.25rem;
`;
export const LandingContainer=styled.div`
    width: 100%;
`
export const Button = styled.button`
  width: 100%;
  height:46px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border-radius: 0.375rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  background-color: ${(props) => (props.$primary ? '#6B21A8' : '#C4B5FD')};
  color: ${(props) => (props.$primary ? '#ffffff' : '#000000')};
  border: none;
  box-sizing: border-box;

`;
