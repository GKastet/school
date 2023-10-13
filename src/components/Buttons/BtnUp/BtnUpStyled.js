import styled from 'styled-components';

export const BtnUpS = styled.button`
  outline: 1px solid var(--blue-hover);
  position: fixed;  
  right: 10px;  
  bottom: 10px;  
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 50%;
  color: var(--violet);
  background-color: rgba(255, 255, 227, 0.6);
  transition: color 250ms ease-in, background-color 250ms ease-in,
    outline 250ms ease-in;
  cursor: pointer;

  &:hover {
    color: var(--red);
    background-color: var(--green);
    outline: 1px solid var(--blue-normal);
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