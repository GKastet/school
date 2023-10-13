import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { TbMail } from "react-icons/tb";

export const FooterWrapperS = styled.footer`
  outline: 1px solid red;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const LinkFS = styled(Link)`
  font-size: 18px;
  font-weight: 700;
  transition: color 350ms linear;

  &:hover {
    color: red;
  }
`;
export const AllIconBox = styled.ul`
  display: flex;
  gap: 20px;
`;
export const SingleIconBox = styled.li`
  /* width: 24px;
  height: 24px; */
  width: 40px;
  height: 40px;
`;

export const IconLink = styled(Link)``;

const IconStyles = `
  width: 100%;
  height: 100%;
`;

export const AiOutlineInstagramS = styled(AiOutlineInstagram)`
  ${IconStyles}
  fill: var(--violet);
  transition: fill 350ms linear;
  &:hover {
    fill: red;
  }
`;
export const FaTelegramPlaneS = styled(FaTelegramPlane)`
  ${IconStyles}
  fill: var(--violet);
  transition: fill 350ms linear;
  &:hover {
    fill: red;
  }
`;
export const TbMailS = styled(TbMail)`
  ${IconStyles}
  stroke: var(--violet);
  transition: stroke 350ms linear;
  &:hover {
    stroke: red;
  }
`;
