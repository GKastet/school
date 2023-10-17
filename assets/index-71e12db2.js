import{G as g,u as i,L as x,j as e,r as l}from"./index-85a21934.js";import{P as s,I as c,a as p,T as h,b as u,B as j}from"./BtnUp-142cd0dc.js";function w(t){return g({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.164 19.547c-1.641-2.5-3.669-3.285-6.164-3.484v1.437c0 .534-.208 1.036-.586 1.414-.756.756-2.077.751-2.823.005l-6.293-6.207c-.191-.189-.298-.444-.298-.713s.107-.524.298-.712l6.288-6.203c.754-.755 2.073-.756 2.829.001.377.378.585.88.585 1.414v1.704c4.619.933 8 4.997 8 9.796v1c0 .442-.29.832-.714.958-.095.027-.19.042-.286.042-.331 0-.646-.165-.836-.452zm-7.141-5.536c2.207.056 4.638.394 6.758 2.121-.768-3.216-3.477-5.702-6.893-6.08-.504-.056-.888-.052-.888-.052v-3.497l-5.576 5.496 5.576 5.5v-3.499l1.023.011z"}}]})(t)}const b=i(x)`
width: 140px;
height: 60px;
padding: 5px;
display: flex;
gap: 10px;
align-items: center;
justify-content: center;
border-radius: 20px;
background-color: var(--green);
`,f=i.div`
width: 24px;
height: 24px;
`,y=i(w)`
width: 100%;
height: 100%;
fill: var(--violet);
transition: fill 300ms linear;
&:hover{
    fill: var(--hover);
}
/* stroke: blue;
color: blue; */
`,v=i.p`
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
`,P=()=>e.jsx(e.Fragment,{children:e.jsxs(b,{to:"/",children:[e.jsx(f,{children:e.jsx(y,{})}),e.jsx(v,{children:"Späť"})]})}),B=i.li`
  border-radius: 20px;
  /* box-shadow: none; */
  transition: all 1000 ms linear;  
  &:hover {
    box-shadow: 0px 0px 12px 9px rgba(196, 33, 196, 0.82);
  }
`,S=i.div`
  outline: 1px solid black;
  border-radius: 20px;
  width: 300px;
  /* height: 200px; */
  overflow: hidden;
  /* @media (min-width:1280px){
    min-width: 500px;
    height: 260px;
} */
`;i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;const d=({data:t})=>{console.log(t);const{id:o,imgAlt:r}=t;switch(o){case"1":return e.jsx("img",{src:`${p}`,alt:r,style:a,type:"image/webp",loading:"lazy"});case"2":return e.jsx("img",{src:`${c}`,alt:r,style:a,type:"image/webp",loading:"lazy"});case"3":return e.jsx("img",{src:`${p}`,alt:r,style:a,type:"image/webp",loading:"lazy"});case"4":return e.jsx("img",{src:`${c}`,alt:r,style:a,type:"image/webp",loading:"lazy"});default:return"LOGO not found"}},a={width:"100%",height:"100%",objectFit:"cover"};d.propTypes={data:s.shape({id:s.string.isRequired,imgAlt:s.string.isRequired}).isRequired};const m=({data:t})=>(console.log(t),e.jsx(B,{children:e.jsx(S,{children:e.jsx(d,{data:t})})}));m.propTypes={data:s.shape({imgSrc:s.string.isRequired,imgAlt:s.string.isRequired}).isRequired};const n=[{id:"1",imgSrc:"/school/src/images/50WebP.webp",imgAlt:"Project foto",projectName:"Project name"},{id:"2",imgSrc:"/school/src/images/64WebP.webp",imgAlt:"Project foto",projectName:"Project name"},{id:"3",imgSrc:"/school/src/images/50WebP.webp",imgAlt:"Project foto",projectName:"Project name"},{id:"4",imgSrc:"/school/src/images/64WebP.webp",imgAlt:"Project foto",projectName:"Project name"}],k=()=>e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"Galéria"}),e.jsx("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px",paddingBottom:"20px"},children:n==null?void 0:n.map(t=>e.jsx(m,{data:t},t.id))})]}),z=()=>{const[t,o]=l.useState(!1);return l.useEffect(()=>{const r=()=>{window.scrollY>100?o(!0):o(!1)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),e.jsxs(u,{children:[e.jsx(P,{}),e.jsx(k,{}),t&&e.jsx(j,{})]})},I=z;export{I as default};
