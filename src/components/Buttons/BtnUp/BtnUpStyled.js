import styled from 'styled-components';

export const BtnUpS = styled.button`
  outline: 1px solid var(--blue-hover);
  position: fixed;  
  right: 10px;  
  bottom: 16px;    
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 50%;
  color: var(--mainNavLogo);
  background-color: rgba(255, 255, 227, 0.5);
  transition: color 250ms ease-in, background-color 250ms ease-in,
    outline 250ms ease-in;
  cursor: pointer;

  &:hover {
    color: var(--hover);
    background-color: var(--backgroundColor-header-footer);
    outline: 1px solid var(--mainNavLogo);
  }

 
  @media (min-width: 500px) {
    right: 20px;
  }
  @media (min-width: 744px) {
    right: 30px;
  }
  @media (min-width: 880px){
    right: 40px;
  }
  @media (min-width: 1000px){
    right: 70px;
  }
  @media (min-width: 1280px){
    right: 40px;
  }  
`;