import{G as u,u as a,L as w,j as e,r as c}from"./index-c369156e.js";import{P as s,I as m,a as x,T as j,b as f,B as v}from"./BtnUp-372f8754.js";function y(t){return u({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.164 19.547c-1.641-2.5-3.669-3.285-6.164-3.484v1.437c0 .534-.208 1.036-.586 1.414-.756.756-2.077.751-2.823.005l-6.293-6.207c-.191-.189-.298-.444-.298-.713s.107-.524.298-.712l6.288-6.203c.754-.755 2.073-.756 2.829.001.377.378.585.88.585 1.414v1.704c4.619.933 8 4.997 8 9.796v1c0 .442-.29.832-.714.958-.095.027-.19.042-.286.042-.331 0-.646-.165-.836-.452zm-7.141-5.536c2.207.056 4.638.394 6.758 2.121-.768-3.216-3.477-5.702-6.893-6.08-.504-.056-.888-.052-.888-.052v-3.497l-5.576 5.496 5.576 5.5v-3.499l1.023.011z"}}]})(t)}const b=a(w)`
width: 140px;
height: 60px;
padding: 5px;
display: flex;
gap: 10px;
align-items: center;
justify-content: center;
border-radius: 20px;
background-color: var(--green);
`,P=a.div`
width: 24px;
height: 24px;
`,k=a(y)`
width: 100%;
height: 100%;
fill: var(--violet);
transition: fill 300ms linear;
&:hover{
    fill: var(--hover);
}
/* stroke: blue;
color: blue; */
`,B=a.p`
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
`,S=()=>e.jsx(e.Fragment,{children:e.jsxs(b,{to:"/",children:[e.jsx(P,{children:e.jsx(k,{})}),e.jsx(B,{children:"Späť"})]})}),z=a.li`
  border-radius: 20px;
  /* box-shadow: none; */
  transition: all 1000 ms linear;  
  &:hover {
    box-shadow: 0px 0px 12px 9px rgba(196, 33, 196, 0.82);
  }
`,O=a.div`
  outline: 1px solid black;
  border-radius: 20px;
  width: 300px;
  /* height: 200px; */
  overflow: hidden;
  /* @media (min-width:1280px){
    min-width: 500px;
    height: 260px;
} */
`;a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;const p=({data:t,onOpenModal:i})=>{const{id:o,imgAlt:r}=t;switch(o){case"1":return e.jsx("img",{src:`${x}`,alt:r,style:l,type:"image/webp",loading:"lazy",onClick:()=>{i({id:o})}});case"2":return e.jsx("img",{src:`${m}`,alt:r,style:l,type:"image/webp",loading:"lazy",onClick:()=>{i({id:o})}});case"3":return e.jsx("img",{src:`${x}`,alt:r,style:l,type:"image/webp",loading:"lazy"});case"4":return e.jsx("img",{src:`${m}`,alt:r,style:l,type:"image/webp",loading:"lazy"});default:return"LOGO not found"}},l={width:"100%",height:"100%",objectFit:"cover"};p.propTypes={data:s.shape({id:s.string.isRequired,imgAlt:s.string.isRequired}).isRequired,onOpenModal:s.func.isRequired};const h=({data:t,onOpenModal:i})=>e.jsx(z,{children:e.jsx(O,{children:e.jsx(p,{data:t,onOpenModal:i})})});h.propTypes={data:s.shape({imgSrc:s.string.isRequired,imgAlt:s.string.isRequired}).isRequired,onOpenModal:s.func.isRequired};const R=a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  div {
    /* max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px); */
    max-width: calc(100vw - 100px);
    max-height: calc(100vh - 50px);
  }
`,g=({onCloseModal:t,modalData:i})=>{const o=r=>{r.target===r.currentTarget&&t()};return c.useEffect(()=>{const r=n=>{n.code==="Escape"&&t()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[t]),e.jsx(R,{className:"overlay",onClick:o,children:e.jsx("div",{className:"modal",children:e.jsx(p,{data:i})})})};g.propTypes={onCloseModal:s.func.isRequired,modalData:s.object.isRequired};const d=[{id:"1",imgSrc:"/school/src/images/50WebP.webp",imgAlt:"Project foto",projectName:"Project name"},{id:"2",imgSrc:"/school/src/images/64WebP.webp",imgAlt:"Project foto",projectName:"Project name"},{id:"3",imgSrc:"/school/src/images/50WebP.webp",imgAlt:"Project foto",projectName:"Project name"},{id:"4",imgSrc:"/school/src/images/64WebP.webp",imgAlt:"Project foto",projectName:"Project name"}],T=()=>{const[t,i]=c.useState({isOpen:!1,modalData:null});console.log(t);const o=n=>{i({isOpen:!0,modalData:n})},r=()=>i({isOpen:!1,modalData:null});return e.jsxs(e.Fragment,{children:[e.jsx(j,{children:"Galéria"}),e.jsx("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px",paddingBottom:"20px"},children:d==null?void 0:d.map(n=>e.jsx(h,{data:n,onOpenModal:o},n.id))}),t.isOpen&&e.jsx(g,{onCloseModal:r,modalData:t.modalData})]})},q=()=>{const[t,i]=c.useState(!1);return c.useEffect(()=>{const o=()=>{window.scrollY>100?i(!0):i(!1)};return window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}},[]),e.jsxs(f,{children:[e.jsx(S,{}),e.jsx(T,{}),t&&e.jsx(v,{})]})},E=q;export{E as default};
