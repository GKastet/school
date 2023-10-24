import { Link } from "react-router-dom";
import styled from "styled-components";
import { TiArrowBackOutline } from "react-icons/ti";

export const BtnBoxLink = styled(Link)`
  width: 110px;
  height: 40px;
  padding: 5px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 227, 0.5);
  color: var(--backgroundColor-header-footer);
  fill: var(--backgroundColor-header-footer);
  transition: fill 300ms linear, color 300ms linear,
    background-color 300ms linear;
  &:hover {
    background-color: var(--backgroundColor-header-footer);
    color: var(--hover);
    fill: var(--hover);
  }
  @media (min-width: 744px) {
    width: 140px;
    height: 60px;
    border-radius: 20px;
  }
`;

export const IconBox = styled.div`
  width: 24px;
  height: 24px;
`;

export const TiArrowBackOutlineS = styled(TiArrowBackOutline)`
  width: 100%;
  height: 100%;  
`;
export const BackText = styled.p`
  display: block;  
  font-size: 16px;
  
  @media (min-width: 744px) {
    font-size: 18px;
  }
`;
