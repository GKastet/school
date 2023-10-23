import{u as a,j as e,G as x,r as c,L as I}from"./index-f9bd6f10.js";import{P as n,I as d,a as h,T as S,b as P,B as R}from"./BtnUp-474975dc.js";const z=a.li`
  border-radius: 20px;
  /* box-shadow: none; */
  transition: all 1000 ms linear;  
  &:hover {
    box-shadow: 0px 0px 12px 9px rgba(196, 33, 196, 0.82);
  }
`,L=a.div`
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
`;const p=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms linear;
  &:hover {
    transform: scale(1.07);
  }
`,g=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;  
`,u=({data:t,isOpen:r=!1,onOpenModal:o})=>{const{id:s,imgAlt:i}=t;switch(s){case"1":return e.jsx(e.Fragment,{children:r?e.jsx(g,{src:`${h}`,alt:i,type:"image/webp",loading:"lazy",onClick:()=>{o({id:s})}}):e.jsx(p,{src:`${h}`,alt:i,type:"image/webp",loading:"lazy",onClick:()=>{o({id:s})}})});case"2":return e.jsx(e.Fragment,{children:r?e.jsx(g,{src:`${d}`,alt:i,type:"image/webp",loading:"lazy",onClick:()=>{o({id:s})}}):e.jsx(p,{src:`${d}`,alt:i,type:"image/webp",loading:"lazy",onClick:()=>{o({id:s})}})});case"3":return e.jsx(e.Fragment,{children:r?e.jsx(g,{src:`${h}`,alt:i,type:"image/webp",loading:"lazy",onClick:()=>{o({id:s})}}):e.jsx(p,{src:`${h}`,alt:i,type:"image/webp",loading:"lazy",onClick:()=>{o({id:s})}})});case"4":return e.jsx(e.Fragment,{children:r?e.jsx(g,{src:`${d}`,alt:i,type:"image/webp",loading:"lazy",onClick:()=>{o({id:s})}}):e.jsx(p,{src:`${d}`,alt:i,type:"image/webp",loading:"lazy",onClick:()=>{o({id:s})}})});default:return"LOGO not found"}};u.propTypes={data:n.shape({id:n.string.isRequired,imgAlt:n.string}).isRequired,isOpen:n.bool,onOpenModal:n.func};const b=({data:t,onOpenModal:r})=>e.jsx(z,{children:e.jsx(L,{children:e.jsx(u,{data:t,onOpenModal:r})})});b.propTypes={data:n.shape({imgSrc:n.string.isRequired,imgAlt:n.string.isRequired}).isRequired,onOpenModal:n.func.isRequired};const T=a.div`
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
    overflow: hidden;
    border-radius: 20px;
  }
`;function q(t){return x({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(t)}const F=a.button`
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  transition: transform 300ms ease-in, background-color 300ms ease-in;
  &:hover {
    transform: rotate(180deg);
    background-color: rgba(255, 255, 255, 0.7);
  }
  @media (min-width: 744px) {
    width: 40px;
    height: 40px;
  }
`,G=a(q)`
  fill: var(--violet);
  width: 20px;
  height: 20px;
  @media (min-width: 744px) {
    width: 24px;
    height: 24px;
  }
`,v=({onCloseModal:t})=>{const r=()=>{document.body.classList.remove("no-scroll"),t()};return e.jsx(e.Fragment,{children:e.jsx(F,{type:"button",onClick:r,children:e.jsx(G,{})})})};v.propTypes={onCloseModal:n.func.isRequired};function A(t){return x({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}}]})(t)}function E(t){return x({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"}},{tag:"path",attr:{fillRule:"evenodd",d:"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"}}]})(t)}const N=a.button`
  position: absolute;
  cursor: pointer;
  width: 30px;
  height: 30px;  
  top: calc(50%);
  transform: translateY(-50%);
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  transition: background-color 300ms ease-in;
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
  @media (min-width: 744px) {
    width: 40px;
    height: 40px;
  }
`,$=a(A)`
  fill: var(--violet);
  width: 20px;
  height: 20px;
  transition: scale 300ms linear;
  &:hover {
    scale: 1.25;
  }
  @media (min-width: 744px) {
    width: 24px;
    height: 24px;
  }
`,w=({imageId:t,setImageId:r})=>{const o=()=>{if(t===1){alert("It is first image");return}r(t-1)};return e.jsx(e.Fragment,{children:e.jsx(N,{type:"button",onClick:o,children:e.jsx($,{})})})};w.propTypes={imageId:n.number.isRequired,setImageId:n.func.isRequired};const D=a.button`
  position: absolute;
  cursor: pointer;
  width: 30px;
  height: 30px;  
  top: calc(50%);
  transform: translateY(-50%);
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  transition: background-color 300ms ease-in;
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
  @media (min-width: 744px) {
    width: 40px;
    height: 40px;
  }
`,M=a(E)`
  fill: var(--violet);
  width: 20px;
  height: 20px;
  transition: scale 300ms linear;
  &:hover {
    scale: 1.25;
  }
  @media (min-width: 744px) {
    width: 24px;
    height: 24px;
  }
`,j=({imageId:t,setImageId:r})=>{const o=()=>{if(t===4){alert("You achieved the last image");return}r(t+1)};return e.jsx(e.Fragment,{children:e.jsx(D,{type:"button",onClick:o,children:e.jsx(M,{})})})};j.propTypes={imageId:n.number.isRequired,setImageId:n.func.isRequired};const y=({onCloseModal:t,modal:r})=>{const{isOpen:o,modalData:s}=r,[i,f]=c.useState(Number(s.id));c.useEffect(()=>{if(!o||window.innerWidth<744)return;document.body.classList.add("no-scroll");const l=B=>{B.code==="Escape"&&(document.body.classList.remove("no-scroll"),t())};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}},[o,t]);const k=l=>{l.target===l.currentTarget&&(document.body.classList.remove("no-scroll"),t())},C={id:i.toString()};return e.jsx(T,{onClick:k,children:e.jsxs("div",{style:{position:"relative"},children:[e.jsx(u,{data:C,isOpen:r.isOpen}),e.jsx(v,{onCloseModal:t}),e.jsx(w,{imageId:i,setImageId:f}),e.jsx(j,{imageId:i,setImageId:f})]})})};y.propTypes={onCloseModal:n.func.isRequired,modal:n.object.isRequired};const m=[{id:"1",imgSrc:"/school/src/images/50WebP.webp",imgAlt:"Project foto",projectName:"Project name"},{id:"2",imgSrc:"/school/src/images/64WebP.webp",imgAlt:"Project foto",projectName:"Project name"},{id:"3",imgSrc:"/school/src/images/50WebP.webp",imgAlt:"Project foto",projectName:"Project name"},{id:"4",imgSrc:"/school/src/images/64WebP.webp",imgAlt:"Project foto",projectName:"Project name"}],W=()=>{const[t,r]=c.useState({isOpen:!1,modalData:null}),o=i=>{r({isOpen:!0,modalData:i})},s=()=>r({isOpen:!1,modalData:null});return e.jsxs(e.Fragment,{children:[e.jsx(S,{children:"Galéria"}),e.jsx("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px",paddingBottom:"20px"},children:m==null?void 0:m.map(i=>e.jsx(b,{data:i,onOpenModal:o},i.id))}),t.isOpen&&e.jsx(y,{onCloseModal:s,modal:t})]})};function O(t){return x({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.164 19.547c-1.641-2.5-3.669-3.285-6.164-3.484v1.437c0 .534-.208 1.036-.586 1.414-.756.756-2.077.751-2.823.005l-6.293-6.207c-.191-.189-.298-.444-.298-.713s.107-.524.298-.712l6.288-6.203c.754-.755 2.073-.756 2.829.001.377.378.585.88.585 1.414v1.704c4.619.933 8 4.997 8 9.796v1c0 .442-.29.832-.714.958-.095.027-.19.042-.286.042-.331 0-.646-.165-.836-.452zm-7.141-5.536c2.207.056 4.638.394 6.758 2.121-.768-3.216-3.477-5.702-6.893-6.08-.504-.056-.888-.052-.888-.052v-3.497l-5.576 5.496 5.576 5.5v-3.499l1.023.011z"}}]})(t)}const Y=a(I)`
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
`,U=a.div`
width: 24px;
height: 24px;
`,H=a(O)`
width: 100%;
height: 100%;
/* fill: var(--backgroundColor-header-footer); */
/* transition: fill 300ms linear; */
&:hover{
    /* fill: var(--hover); */
}
/* stroke: blue;
color: blue; */
`,K=a.p`
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
`,J=()=>e.jsx(e.Fragment,{children:e.jsxs(Y,{to:"/",children:[e.jsx(U,{children:e.jsx(H,{})}),e.jsx(K,{children:"Späť"})]})}),Q=()=>{const[t,r]=c.useState(!1);return c.useEffect(()=>{const o=()=>{window.scrollY>100?r(!0):r(!1)};return window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}},[]),e.jsxs(P,{children:[e.jsx(J,{}),e.jsx(W,{}),t&&e.jsx(R,{})]})},Z=Q;export{Z as default};
