import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { TbMail } from "react-icons/tb";

export const FooterWrapperS = styled.footer`
  outline: 1px solid red;
  /* margin: 0 auto; */
  background-color: var(--backgroundColor-header-footer);
  width: 100%;
  /* width: 700px; */
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const AllIconBox = styled.ul`
  display: flex;
  gap: 20px;
`;
export const SingleIconBox = styled.li`
  width: 28px;
  height: 28px;
  @media (min-width: 744px) {
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

export const SpanS = styled.span`
  font-size: 12px;
  color: var(--white);
  @media (min-width: 744px) {
    font-size: 14px;
  }
`;
