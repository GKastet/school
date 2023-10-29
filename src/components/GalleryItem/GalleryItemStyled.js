import styled from "styled-components";

export const GalleryItemLi = styled.li`
  border-radius: 20px;  
  cursor: zoom-in;
  transition: all 1000 ms linear;
  &:hover {
    box-shadow: 0px 0px 12px 9px rgba(3, 152, 149, 0.8);
  }
`;

export const ImgThumb = styled.div`
  outline: 1px solid var(--backgroundColor-header-footer);
  border-radius: 20px;
  width: 300px;
  height: 180px;
  overflow: hidden;
`;

export const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
