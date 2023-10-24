import{u as l,j as e,G as h,r as d,a as F}from"./index-0b69af99.js";import{P as a,T as B,a as R}from"./index-8bb77c9a.js";import{F as I,a as L,b as z,c as N,B as S}from"./BtnUp-62ce9a55.js";import{B as q}from"./BtnBack-217b0e27.js";const A=l.li`
  border-radius: 20px;
  /* box-shadow: none; */
  cursor: zoom-in;
  transition: all 1000 ms linear;  
  &:hover {
    box-shadow: 0px 0px 12px 9px rgba(196, 33, 196, 0.82);
  }
`,T=l.div`
  outline: 1px solid var(--backgroundColor-header-footer);
  border-radius: 20px;
  width: 300px;
  height: 180px;
  overflow: hidden;
  /* @media (min-width:1280px){
    min-width: 500px;
    height: 260px;
} */
`;l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;const c=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &.normal {
    transition: transform 500ms linear;
    &:hover {
      transform: scale(1.08);
    }
  }
`;l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;const G="/school/assets/2_21_webP-0a64f0d8.webp",_="/school/assets/2_22_webP-197cd5c9.webp",$="/school/assets/3_31_WebP-5368b703.webp",E="/school/assets/3_32_WebP-f41e2756.webp",D="/school/assets/4_41_webP-4b63c187.webp",p=({data:t,isOpen:o=!1,onOpenModal:r})=>{const{idx:i,imgAlt:n}=t;switch(i){case"1":return e.jsx(e.Fragment,{children:e.jsx(c,{src:`${N}`,alt:n,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{r({idx:i})}})});case"2":return e.jsx(e.Fragment,{children:e.jsx(c,{src:`${z}`,alt:n,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{r({idx:i})}})});case"3":return e.jsx(e.Fragment,{children:e.jsx(c,{src:`${G}`,alt:n,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{r({idx:i})}})});case"4":return e.jsx(e.Fragment,{children:e.jsx(c,{src:`${_}`,alt:n,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{r({idx:i})}})});case"5":return e.jsx(e.Fragment,{children:e.jsx(c,{src:`${L}`,alt:n,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{r({idx:i})}})});case"6":return e.jsx(e.Fragment,{children:e.jsx(c,{src:`${$}`,alt:n,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{r({idx:i})}})});case"7":return e.jsx(e.Fragment,{children:e.jsx(c,{src:`${E}`,alt:n,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{r({idx:i})}})});case"8":return e.jsx(e.Fragment,{children:e.jsx(c,{src:`${I}`,alt:n,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{r({idx:i})}})});case"9":return e.jsx(e.Fragment,{children:e.jsx(c,{src:`${D}`,alt:n,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{r({idx:i})}})});default:return"LOGO not found"}};p.propTypes={data:a.shape({idx:a.string.isRequired,imgAlt:a.string}).isRequired,isOpen:a.bool,onOpenModal:a.func};const u=({data:t,onOpenModal:o})=>e.jsx(A,{children:e.jsx(T,{children:e.jsx(p,{data:t,onOpenModal:o})})});u.propTypes={data:a.shape({imgAlt:a.string.isRequired}).isRequired,onOpenModal:a.func.isRequired};const M=l.div`
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
`;function W(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(t)}const U=l.button`
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
`,Y=l(W)`
  fill: var(--violet);
  width: 20px;
  height: 20px;
  @media (min-width: 744px) {
    width: 24px;
    height: 24px;
  }
`,f=({onCloseModal:t})=>{const o=()=>{document.body.classList.remove("no-scroll"),t()};return e.jsx(e.Fragment,{children:e.jsx(U,{type:"button",onClick:o,children:e.jsx(Y,{})})})};f.propTypes={onCloseModal:a.func.isRequired};function H(t){return h({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}}]})(t)}function K(t){return h({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"}},{tag:"path",attr:{fillRule:"evenodd",d:"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"}}]})(t)}const J=l.button`
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
`,Q=l(H)`
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
`,b=({imageIdx:t,setImageIdx:o})=>{const r=()=>{o(t-1)};return e.jsx(e.Fragment,{children:e.jsx(J,{type:"button",onClick:r,children:e.jsx(Q,{})})})};b.propTypes={imageIdx:a.number.isRequired,setImageIdx:a.func.isRequired};const V=l.button`
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
`,X=l(K)`
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
`,j=({imageIdx:t,setImageIdx:o})=>{const r=()=>{o(t+1)};return e.jsx(e.Fragment,{children:e.jsx(V,{type:"button",onClick:r,children:e.jsx(X,{})})})};j.propTypes={imageIdx:a.number.isRequired,setImageIdx:a.func.isRequired};const w=({onCloseModal:t,modal:o,imgListLength:r})=>{const{isOpen:i,modalData:n}=o,[s,g]=d.useState(Number(n.idx)),v=s===1,y=r===s;d.useEffect(()=>{if(!i||window.innerWidth<744)return;document.body.classList.add("no-scroll");const m=C=>{C.code==="Escape"&&(document.body.classList.remove("no-scroll"),t())};return window.addEventListener("keydown",m),()=>{window.removeEventListener("keydown",m)}},[i,t]);const P=m=>{m.target===m.currentTarget&&(document.body.classList.remove("no-scroll"),t())},k={idx:s.toString()};return e.jsx(M,{onClick:P,children:e.jsxs("div",{style:{position:"relative"},children:[e.jsx(p,{data:k,isOpen:o.isOpen}),e.jsx(f,{onCloseModal:t}),!v&&e.jsx(b,{imageIdx:s,setImageIdx:g}),!y&&e.jsx(j,{imageIdx:s,setImageIdx:g})]})})};w.propTypes={onCloseModal:a.func.isRequired,modal:a.object.isRequired,imgListLength:a.number};const x=[{idx:"1",id:"1",imgAlt:"Project 1 foto"},{idx:"2",id:"2",imgAlt:"Project 2 foto"},{idx:"3",id:"21",imgAlt:"Project 2 foto"},{idx:"4",id:"22",imgAlt:"Project 2 foto"},{idx:"5",id:"3",imgAlt:"Project 3 foto"},{idx:"6",id:"31",imgAlt:"Project 3 foto"},{idx:"7",id:"32",imgAlt:"Project 3 foto"},{idx:"8",id:"4",imgAlt:"Project foto"},{idx:"9",id:"41",imgAlt:"Project 4 foto"}],Z=()=>{const[t,o]=d.useState({isOpen:!1,modalData:null}),r=x.length,i=s=>{console.log("onOpenModal",s),o({isOpen:!0,modalData:s})},n=()=>o({isOpen:!1,modalData:null});return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:"Galéria"}),e.jsx("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px",paddingBottom:"20px"},children:x==null?void 0:x.map(s=>e.jsx(u,{data:s,onOpenModal:i},s.id))}),t.isOpen&&e.jsx(w,{onCloseModal:n,modal:t,imgListLength:r})]})},O=()=>{var n;const t=F(),o=d.useRef((n=t.state)==null?void 0:n.from),[r,i]=d.useState(!1);return d.useEffect(()=>{const s=()=>{window.scrollY>100?i(!0):i(!1)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),e.jsxs(R,{children:[e.jsx(q,{location:o}),e.jsx(Z,{}),r&&e.jsx(S,{})]})},ie=O;export{ie as default};
