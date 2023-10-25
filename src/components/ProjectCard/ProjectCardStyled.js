import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  /* 50% {
    opacity: 0.3;
  } */
  100% {
    opacity: 1;
  }
`;

export const CardWrapper = styled.li`
  /* outline: 1px solid red; */
  /* background-color: rgba(255, 255, 255, 1); */
  /* background-color: rgba(174, 228, 255, 0.7); */
  background-color: rgba(33, 89, 198, 0.7);
  /* background-color: rgba(0, 0, 0, 0.3); */
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  /* border: 12px solid red; */
  border-top: 10px solid var(--hover);
  /* border-top: 10px solid #ffff53; */
  border-right: 12px solid var(--hover);
  /* border-right: 12px solid #ffff53; */
  /* border-bottom: 12px solid red; */

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
    /* pointer-events: none; */
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
  /* z-index: 3; */
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// export const ProjectText = styled.p`
//   display: block;
//   font-size: 16px;
//   font-weight: 700;
//   letter-spacing: 0.12em;
//   font-style: italic;
//   /* color: var(--black); */
//   color: var(--text-color);
//   @media (min-width: 744px) {
//     font-size: 20px;
//   }
//   /* opacity: 0; */
//   opacity: 0; /* Устанавливаем начальное значение нулевой прозрачности */
//   transition: opacity 2s ease-in-out; /* Анимация появления текста в течение 2 секунд */
//   animation: ${fadeIn} 1s ease-in-out 2s;
//   @keyframes fadeIn {
//     to {
//       opacity: 1; /* По завершении анимации, текст станет видимым */
//     }
//   }

// `;

export const ProjectText = styled.p`
  display: block;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.12em;
  font-style: italic;
  color: var(--text-color);

  /* Задаем начальную прозрачность нулевой */
  opacity: 0;
  animation: ${fadeIn} 0.3s linear 2s forwards;
  @media (min-width: 744px) {
    font-size: 20px;
  }

  /* Применяем анимацию для плавного появления текста */
  //transition: opacity 2s ease-in-out;

  /* После задержки в 2 секунды, устанавливаем прозрачность в 1 */
  //animation: ${fadeIn} 1s ease-in-out 2s;

  /* @keyframes fadeIn {
    to {
      opacity: 1;
    }
  } */
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
  /* padding-top: 40px; */

  /* font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em; */
  color: var(--backgroundColor-header-footer);
  background-color: var(--mainNavLogo);
  /* opacity: 0.9; */
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
