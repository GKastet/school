import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { TbMail } from "react-icons/tb";

export const HeaderWrapperS = styled.header`
  /* outline: 1px solid red; */
  width: 100%;
  background-color: var(--backgroundColor-header-footer);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const NavigationWrapper = styled.div`
  /* outline: 1px solid green; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  @media (min-width: 744px) and (max-width: 1279px) {    
    max-width: 740px;
  }
  @media (min-width: 1280px){    
    max-width: 1280px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media (min-width: 744px){    
    gap: 40px;
  }
`;

export const LinkHS = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  transition: color 350ms linear;
  color: var(--mainNavLogo);

  &:hover {
    color: var(--hover);
  }
  @media (min-width: 744px){    
    font-size: 18px;   
  }
`;

export const AllIconBox = styled.ul`
  display: flex;
  gap: 20px;
`;
export const SingleIconBox = styled.li`
  width: 28px;
  height: 28px;
  @media (min-width: 744px){    
    width: 40px;
    height: 40px;    
  }
`;

export const IconLink = styled(Link)``;

const IconStyles = `
  width: 100%;
  height: 100%;
`;

export const AiOutlineInstagramS = styled(AiOutlineInstagram)`
  ${IconStyles}  
  fill: var(--mainNavLogo);  
  transition: fill 350ms linear;
  &:hover {
    fill: var(--hover);
  }
`;
export const FaTelegramPlaneS = styled(FaTelegramPlane)`
  ${IconStyles}
  fill: var(--mainNavLogo);
  transition: fill 350ms linear;
  &:hover {
    fill: var(--hover);
  }
`;
export const TbMailS = styled(TbMail)`
  ${IconStyles}
  stroke: var(--mainNavLogo);
  transition: stroke 350ms linear;
  &:hover {
    stroke: var(--hover);
  }
`;
