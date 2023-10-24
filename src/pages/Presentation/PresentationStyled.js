import styled from "styled-components";

export const VideoWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const VideoThumb = styled.div`
/* outline: 1px solid red; */
width: 375px;
border-radius: 20px;
border: 2px solid var(--backgroundColor-header-footer);
overflow: hidden;

@media (min-width: 744px){
    width: 480px;    
}
`