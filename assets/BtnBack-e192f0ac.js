import{G as t,u as o,L as i,j as r}from"./index-121a1d37.js";import{P as a}from"./index-376dea2b.js";function n(e){return t({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.164 19.547c-1.641-2.5-3.669-3.285-6.164-3.484v1.437c0 .534-.208 1.036-.586 1.414-.756.756-2.077.751-2.823.005l-6.293-6.207c-.191-.189-.298-.444-.298-.713s.107-.524.298-.712l6.288-6.203c.754-.755 2.073-.756 2.829.001.377.378.585.88.585 1.414v1.704c4.619.933 8 4.997 8 9.796v1c0 .442-.29.832-.714.958-.095.027-.19.042-.286.042-.331 0-.646-.165-.836-.452zm-7.141-5.536c2.207.056 4.638.394 6.758 2.121-.768-3.216-3.477-5.702-6.893-6.08-.504-.056-.888-.052-.888-.052v-3.497l-5.576 5.496 5.576 5.5v-3.499l1.023.011z"}}]})(e)}const l=o(i)`
width: 140px;
height: 60px;
padding: 5px;
display: flex;
gap: 10px;
align-items: center;
justify-content: center;
border-radius: 20px;
background-color: rgba(255, 255, 227, 0.5);
color: var(--backgroundColor-header-footer);
fill: var(--backgroundColor-header-footer);
transition: fill 300ms linear, color 300ms linear, background-color 300ms linear;
&:hover{
    background-color: var(--backgroundColor-header-footer);
    color: var(--hover);
    fill: var(--hover);
}
`,c=o.div`
width: 24px;
height: 24px;
`,s=o(n)`
width: 100%;
height: 100%;
/* fill: var(--backgroundColor-header-footer); */
/* transition: fill 300ms linear; */
&:hover{
    /* fill: var(--hover); */
}
/* stroke: blue;
color: blue; */
`,d=o.p`
display: block;
/* color: var(--backgroundColor-header-footer); */
font-size: 16px;
/* transition: color 300ms linear; */
/* &:hover{
    color: var(--hover);
} */
@media (min-width: 744px){
    font-size: 18px;
}
`,h=({location:e})=>r.jsx(r.Fragment,{children:r.jsxs(l,{to:e.current??"/",children:[r.jsx(c,{children:r.jsx(s,{})}),r.jsx(d,{children:"Späť"})]})});h.propTypes={location:a.object.isRequired};export{h as B};
