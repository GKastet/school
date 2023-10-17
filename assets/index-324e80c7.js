import{G as l,u as t,L as p,j as e,r as c}from"./index-73f0cb3e.js";import{P as s,T as d,a as m,B as x}from"./BtnUp-bdb4cbcb.js";function h(r){return l({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.164 19.547c-1.641-2.5-3.669-3.285-6.164-3.484v1.437c0 .534-.208 1.036-.586 1.414-.756.756-2.077.751-2.823.005l-6.293-6.207c-.191-.189-.298-.444-.298-.713s.107-.524.298-.712l6.288-6.203c.754-.755 2.073-.756 2.829.001.377.378.585.88.585 1.414v1.704c4.619.933 8 4.997 8 9.796v1c0 .442-.29.832-.714.958-.095.027-.19.042-.286.042-.331 0-.646-.165-.836-.452zm-7.141-5.536c2.207.056 4.638.394 6.758 2.121-.768-3.216-3.477-5.702-6.893-6.08-.504-.056-.888-.052-.888-.052v-3.497l-5.576 5.496 5.576 5.5v-3.499l1.023.011z"}}]})(r)}const g=t(p)`
width: 140px;
height: 60px;
padding: 5px;
display: flex;
gap: 10px;
align-items: center;
justify-content: center;
border-radius: 20px;
background-color: var(--green);
`,j=t.div`
width: 24px;
height: 24px;
`,u=t(h)`
width: 100%;
height: 100%;
fill: var(--violet);
transition: fill 300ms linear;
&:hover{
    fill: var(--hover);
}
/* stroke: blue;
color: blue; */
`,f=t.p`
display: block;
color: var(--p_color);
font-size: 16px;
transition: color 300ms linear;
&:hover{
    color: var(--hover);
}
@media (min-width: 744px){
    font-size: 18px;
}
`,v=()=>e.jsx(e.Fragment,{children:e.jsxs(g,{to:"/",children:[e.jsx(j,{children:e.jsx(u,{})}),e.jsx(f,{children:"Späť"})]})}),w=t.li`
  border-radius: 20px;
  /* box-shadow: none; */
  transition: all 1000 ms linear;  
  &:hover {
    box-shadow: 0px 0px 12px 9px rgba(196, 33, 196, 0.82);
  }
`,b=t.div`
  outline: 1px solid black;
  border-radius: 20px;
  width: 300px;
  /* height: 200px; */
  overflow: hidden;
  /* @media (min-width:1280px){
    min-width: 500px;
    height: 260px;
} */
`,P=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`,a=({data:r})=>{console.log(r);const{imgSrc:o,imgAlt:i}=r;return e.jsx(w,{children:e.jsx(b,{children:e.jsx(P,{src:o,alt:i})})})};a.propTypes={data:s.shape({imgSrc:s.string.isRequired,imgAlt:s.string.isRequired}).isRequired};const n=[{id:"1",imgSrc:"/school/src/images/50WebP.webp",imgAlt:"Project foto",projectName:"Project name"},{id:"2",imgSrc:"/school/src/images/64WebP.webp",imgAlt:"Project foto",projectName:"Project name"},{id:"3",imgSrc:"/school/src/images/50WebP.webp",imgAlt:"Project foto",projectName:"Project name"},{id:"4",imgSrc:"/school/src/images/64WebP.webp",imgAlt:"Project foto",projectName:"Project name"}],y=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{children:"Galéria"}),e.jsx("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px",paddingBottom:"20px"},children:n==null?void 0:n.map(r=>e.jsx(a,{data:r},r.id))})]}),B=()=>{const[r,o]=c.useState(!1);return c.useEffect(()=>{const i=()=>{window.scrollY>100?o(!0):o(!1)};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[]),e.jsxs(m,{children:[e.jsx(v,{}),e.jsx(y,{}),r&&e.jsx(x,{})]})},A=B;export{A as default};
