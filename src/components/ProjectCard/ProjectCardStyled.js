import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }  
  100% {
    opacity: 1;
  }
`;

export const CardWrapper = styled.li`
  background-color: rgba(33, 89, 198, 0.7);
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border-top: 10px solid var(--hover);
  border-right: 12px solid var(--hover);

  @media (min-width: 744px) {
    flex-wrap: nowrap;
  }
`;

export const ImgOverlay = styled.div`
  position: relative;
  transition: transform var(--animation-time) var(--animation-cubic),
    opacity var(--animation-time) var(--animation-cubic);
  &:hover .card-overlay {
    transform: translateY(0);
    opacity: 0.8;
  }
`;

export const ImgThumb = styled.div`
  outline: 1px solid var(--backgroundColor-header-footer);
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
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProjectText = styled.p`
  display: block;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.12em;
  font-style: italic;
  color: var(--text-color);
  opacity: 0;
  animation: ${fadeIn} 0.3s linear 2s forwards;
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
  color: var(--backgroundColor-header-footer);
  background-color: var(--mainNavLogo);  
  border-radius: 20px;
  transform: translateY(101%);
  transition: transform var(--animation-time) var(--animation-cubic),
    opacity var(--animation-time) var(--animation-cubic);
  opacity: 0;
  font-size: 16px;
  font-weight: 700;
  @media (min-width: 744px) {
    font-size: 20px;
  }
`;
