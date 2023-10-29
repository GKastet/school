import styled from "styled-components";

export const PageWrapper = styled.section`
  padding: 20px 10px 50px;
  position: relative;
  padding-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 744px) and (max-width: 1279px) {
    max-width: 740px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const TitleS = styled.h2`
  display: block;
  text-align: center;
  margin-bottom: 30px;
  font-size: 38px;
  letter-spacing: 0.1em;
  text-decoration: underline;
  color: var(--white);
  @media (min-width: 744px) {
    font-size: 44px;
  }
`;
