import{G as m,u as s,L as g,j as e,r as l}from"./index-fb55eca3.js";import{P as i,I as c,a as x,T as h,b as u,B as j}from"./BtnUp-3daba780.js";function w(t){return m({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.164 19.547c-1.641-2.5-3.669-3.285-6.164-3.484v1.437c0 .534-.208 1.036-.586 1.414-.756.756-2.077.751-2.823.005l-6.293-6.207c-.191-.189-.298-.444-.298-.713s.107-.524.298-.712l6.288-6.203c.754-.755 2.073-.756 2.829.001.377.378.585.88.585 1.414v1.704c4.619.933 8 4.997 8 9.796v1c0 .442-.29.832-.714.958-.095.027-.19.042-.286.042-.331 0-.646-.165-.836-.452zm-7.141-5.536c2.207.056 4.638.394 6.758 2.121-.768-3.216-3.477-5.702-6.893-6.08-.504-.056-.888-.052-.888-.052v-3.497l-5.576 5.496 5.576 5.5v-3.499l1.023.011z"}}]})(t)}const b=s(g)`
width: 140px;
height: 60px;
padding: 5px;
display: flex;
gap: 10px;
align-items: center;
justify-content: center;
border-radius: 20px;
background-color: var(--green);
`,f=s.div`
width: 24px;
height: 24px;
`,y=s(w)`
width: 100%;
height: 100%;
fill: var(--violet);
transition: fill 300ms linear;
&:hover{
    fill: var(--hover);
}
/* stroke: blue;
color: blue; */
`,v=s.p`
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
`,P=()=>e.jsx(e.Fragment,{children:e.jsxs(b,{to:"/",children:[e.jsx(f,{children:e.jsx(y,{})}),e.jsx(v,{children:"Späť"})]})}),B=s.li`
  border-radius: 20px;
  /* box-shadow: none; */
  transition: all 1000 ms linear;  
  &:hover {
    box-shadow: 0px 0px 12px 9px rgba(196, 33, 196, 0.82);
  }
`,S=s.div`
  outline: 1px solid black;
  border-radius: 20px;
  width: 300px;
  /* height: 200px; */
  overflow: hidden;
  /* @media (min-width:1280px){
    min-width: 500px;
    height: 260px;
} */
`;s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;const k="/school/assets/64WebP-5977da9e.webp",p=({data:t})=>{console.log(t);const{id:o,imgAlt:r}=t;switch(o){case"1":return e.jsx("img",{src:`${k}`,alt:r,style:a,type:"image/webp",loading:"lazy"});case"2":return e.jsx("img",{src:`${c}`,alt:r,style:a,type:"image/webp",loading:"lazy"});case"3":return e.jsx("img",{src:`${x}`,alt:r,style:a,type:"image/webp",loading:"lazy"});case"4":return e.jsx("img",{src:`${c}`,alt:r,style:a,type:"image/webp",loading:"lazy"});default:return"LOGO not found"}},a={width:"100%",height:"100%",objectFit:"cover"};p.propTypes={data:i.shape({id:i.string.isRequired,imgAlt:i.string.isRequired}).isRequired};const d=({data:t})=>(console.log(t),e.jsx(B,{children:e.jsx(S,{children:e.jsx(p,{data:t})})}));d.propTypes={data:i.shape({imgSrc:i.string.isRequired,imgAlt:i.string.isRequired}).isRequired};const n=[{id:"1",imgSrc:"/school/src/images/50WebP.webp",imgAlt:"Project foto",projectName:"Project name"},{id:"2",imgSrc:"/school/src/images/64WebP.webp",imgAlt:"Project foto",projectName:"Project name"},{id:"3",imgSrc:"/school/src/images/50WebP.webp",imgAlt:"Project foto",projectName:"Project name"},{id:"4",imgSrc:"/school/src/images/64WebP.webp",imgAlt:"Project foto",projectName:"Project name"}],z=()=>e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"Galéria"}),e.jsx("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px",paddingBottom:"20px"},children:n==null?void 0:n.map(t=>e.jsx(d,{data:t},t.id))}),e.jsx("img",{src:"/images/64WebP.webp"})]}),G=()=>{const[t,o]=l.useState(!1);return l.useEffect(()=>{const r=()=>{window.scrollY>100?o(!0):o(!1)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),e.jsxs(u,{children:[e.jsx(P,{}),e.jsx(z,{}),t&&e.jsx(j,{})]})},A=G;export{A as default};
