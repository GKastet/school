import styled from "styled-components";

export const VideoWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const VideoThumb = styled.div`
/* outline: 1px solid red; */
/* width: 100%; */
width: 375px;
height: 67vh;
border-radius: 20px;
overflow: hidden;

@media (min-width: 744px){
    width: 440px;
    height: 79vh;
}
`