import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardWrapper = styled.li`
  outline: 1px solid red;  
  /* background-color: rgba(255, 255, 255, 1); */
  background-color: rgba(255, 255, 255, 0.8);
  /* background-color: rgba(0, 0, 0, 0.3); */
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  
  @media (min-width: 744px) {
    flex-wrap: nowrap;
  }
`;


export const ImgOverlay = styled.div`
position: relative;
transition: transform var(--animation-time) var(--animation-cubic), opacity var(--animation-time) var(--animation-cubic);
  &:hover .card-overlay {
    transform: translateY(0);
    opacity: 0.8;
    /* pointer-events: none; */
  }
  `

export const ImgThumb = styled.div`
  outline: 1px solid black;
  border-radius: 20px;
  min-width: 300px;
  height: 200px;
  overflow: hidden;
  @media (min-width: 1280px) {
    min-width: 500px;
    height: 260px;
  }
`;

export const TextThumb = styled.div`
  width: 100%;
  z-index: 3;
`;

export const ProjectText = styled.p`
  display: block;
  font-size: 16px;
  font-weight: 700;
  @media (min-width: 744px) {
    font-size: 20px;
  }
`;

export const CardOverlay = styled(Link)`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
  display: block;
  display: flex;
    justify-content: center;
    align-items: center;

  padding: 0 32px;
  padding-top: 40px;

  /* font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em; */
  color: var(--p_color);
  background-color: var(--backgroundColor);
  /* opacity: 0.9; */
  border-radius: 20px;
  transform: translateY(101%);
  transition: transform var(--animation-time) var(--animation-cubic), opacity var(--animation-time) var(--animation-cubic);
  opacity: 0;
  font-size: 16px;
  font-weight: 700;
  @media (min-width: 744px) {
    font-size: 20px;
  }
  
`;
