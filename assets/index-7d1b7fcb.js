import{u as c,j as e,G as h,r as d,a as C}from"./index-195d136e.js";import{P as n,T as z,a as B}from"./index-f850fc47.js";import{F as N,a as I,b as L,c as R,d as A,e as $,f as S,B as T}from"./BtnUp-8eb3241e.js";import{B as W}from"./BtnBack-a18bee30.js";const q=c.li`
  border-radius: 20px;
  /* box-shadow: none; */
  cursor: zoom-in;
  transition: all 1000 ms linear;  
  &:hover {
    box-shadow: 0px 0px 12px 9px rgba(3, 152, 149, 0.8);
  }
`,G=c.div`
  outline: 1px solid var(--backgroundColor-header-footer);
  border-radius: 20px;
  width: 300px;
  height: 180px;
  overflow: hidden;
  /* @media (min-width:1280px){
    min-width: 500px;
    height: 260px;
} */
`;c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;const l=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &.normal {
    transition: transform 500ms linear;
    &:hover {
      transform: scale(1.08);
    }
  }
`;c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;const E="/school/assets/2-21_WebP-0a64f0d8.webp",_="/school/assets/2-22_WebP-197cd5c9.webp",D="/school/assets/3-31_WebP-5368b703.webp",U="/school/assets/3-32_WebP-f41e2756.webp",Y="/school/assets/4-41_WebP-4b63c187.webp",H="/school/assets/5-51_WebP-0b9f5563.webp",K="/school/assets/5-52_WebP-8b6d1254.webp",J="/school/assets/10-101_WebP-9e403160.webp",Q="/school/assets/14-141_WebP-4f5499fc.webp",p=({index:r,data:s,isOpen:o=!1,onOpenModal:a})=>{const{imgAlt:i}=s,t=r.toString();switch(t){case"1":return e.jsx(e.Fragment,{children:e.jsx(l,{src:`${S}`,alt:i,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{a({idx:t})}})});case"2":return e.jsx(e.Fragment,{children:e.jsx(l,{src:`${$}`,alt:i,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{a({idx:t})}})});case"3":return e.jsx(e.Fragment,{children:e.jsx(l,{src:`${E}`,alt:i,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{a({idx:t})}})});case"4":return e.jsx(e.Fragment,{children:e.jsx(l,{src:`${_}`,alt:i,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{a({idx:t})}})});case"5":return e.jsx(e.Fragment,{children:e.jsx(l,{src:`${A}`,alt:i,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{a({idx:t})}})});case"6":return e.jsx(e.Fragment,{children:e.jsx(l,{src:`${D}`,alt:i,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{a({idx:t})}})});case"7":return e.jsx(e.Fragment,{children:e.jsx(l,{src:`${U}`,alt:i,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{a({idx:t})}})});case"8":return e.jsx(e.Fragment,{children:e.jsx(l,{src:`${R}`,alt:i,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{a({idx:t})}})});case"9":return e.jsx(e.Fragment,{children:e.jsx(l,{src:`${Y}`,alt:i,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{a({idx:t})}})});case"10":return e.jsx(e.Fragment,{children:e.jsx(l,{src:`${L}`,alt:i,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{a({idx:t})}})});case"11":return e.jsx(e.Fragment,{children:e.jsx(l,{src:`${H}`,alt:i,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{a({idx:t})}})});case"12":return e.jsx(e.Fragment,{children:e.jsx(l,{src:`${K}`,alt:i,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{a({idx:t})}})});case"21":return e.jsx(e.Fragment,{children:e.jsx(l,{src:`${I}`,alt:i,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{a({idx:t})}})});case"22":return e.jsx(e.Fragment,{children:e.jsx(l,{src:`${J}`,alt:i,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{a({idx:t})}})});case"28":return e.jsx(e.Fragment,{children:e.jsx(l,{src:`${N}`,alt:i,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{a({idx:t})}})});case"29":return e.jsx(e.Fragment,{children:e.jsx(l,{src:`${Q}`,alt:i,type:"image/webp",loading:"lazy",className:o?"":"normal",onClick:()=>{a({idx:t})}})});default:return"LOGO not found"}};p.propTypes={index:n.number,data:n.shape({imgAlt:n.string}),isOpen:n.bool,onOpenModal:n.func};const u=({index:r,data:s,onOpenModal:o})=>e.jsx(q,{children:e.jsx(G,{children:e.jsx(p,{data:s,index:r+1,onOpenModal:o})})});u.propTypes={index:n.number,data:n.shape({imgAlt:n.string.isRequired}).isRequired,onOpenModal:n.func.isRequired};const V=c.div`
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
`;function X(r){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(r)}const Z=c.button`
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
`,M=c(X)`
  fill: var(--violet);
  width: 20px;
  height: 20px;
  @media (min-width: 744px) {
    width: 24px;
    height: 24px;
  }
`,j=({onCloseModal:r})=>{const s=()=>{document.body.classList.remove("no-scroll"),r()};return e.jsx(e.Fragment,{children:e.jsx(Z,{type:"button",onClick:s,children:e.jsx(M,{})})})};j.propTypes={onCloseModal:n.func.isRequired};function O(r){return h({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}}]})(r)}function ee(r){return h({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"}},{tag:"path",attr:{fillRule:"evenodd",d:"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"}}]})(r)}const te=c.button`
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
`,oe=c(O)`
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
`,b=({imageIdx:r,setImageIdx:s})=>{const o=()=>{s(r-1)};return e.jsx(e.Fragment,{children:e.jsx(te,{type:"button",onClick:o,children:e.jsx(oe,{})})})};b.propTypes={imageIdx:n.number.isRequired,setImageIdx:n.func.isRequired};const re=c.button`
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
`,ae=c(ee)`
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
`,f=({imageIdx:r,setImageIdx:s})=>{const o=()=>{s(r+1)};return e.jsx(e.Fragment,{children:e.jsx(re,{type:"button",onClick:o,children:e.jsx(ae,{})})})};f.propTypes={imageIdx:n.number.isRequired,setImageIdx:n.func.isRequired};const w=({onCloseModal:r,modal:s,imgListLength:o})=>{const{isOpen:a,modalData:i}=s,[t,m]=d.useState(Number(i.idx));console.log("111",t);const y=t===1,v=o===t;d.useEffect(()=>{if(!a||window.innerWidth<744)return;document.body.classList.add("no-scroll");const x=k=>{k.code==="Escape"&&(document.body.classList.remove("no-scroll"),r())};return window.addEventListener("keydown",x),()=>{window.removeEventListener("keydown",x)}},[a,r]);const P=x=>{x.target===x.currentTarget&&(document.body.classList.remove("no-scroll"),r())},F={idx:t.toString()};return e.jsx(V,{onClick:P,children:e.jsxs("div",{style:{position:"relative"},children:[e.jsx(p,{index:t,isOpen:s.isOpen,data:F}),e.jsx(j,{onCloseModal:r}),!y&&e.jsx(b,{imageIdx:t,setImageIdx:m}),!v&&e.jsx(f,{imageIdx:t,setImageIdx:m})]})})};w.propTypes={onCloseModal:n.func.isRequired,modal:n.object.isRequired,imgListLength:n.number};const g=[{idx:"1",id:"1",imgAlt:"Project 1 foto"},{idx:"2",id:"2",imgAlt:"Project 2 foto"},{idx:"3",id:"21",imgAlt:"Project 2 foto"},{idx:"4",id:"22",imgAlt:"Project 2 foto"},{idx:"5",id:"3",imgAlt:"Project 3 foto"},{idx:"6",id:"31",imgAlt:"Project 3 foto"},{idx:"7",id:"32",imgAlt:"Project 3 foto"},{idx:"8",id:"4",imgAlt:"Project 4 foto"},{idx:"9",id:"41",imgAlt:"Project 4 foto"},{idx:"10",id:"5",imgAlt:"Project 5 foto"},{idx:"11",id:"51",imgAlt:"Project 5 foto"},{idx:"12",id:"52",imgAlt:"Project 5 foto"},{idx:"21",id:"10",imgAlt:"Project 10 foto"},{idx:"22",id:"101",imgAlt:"Project 10 foto"},{idx:"28",id:"14",imgAlt:"Project 14 foto"},{idx:"29",id:"141",imgAlt:"Project 14 foto"}],ie=()=>{const[r,s]=d.useState({isOpen:!1,modalData:null}),o=g.length,a=t=>{s({isOpen:!0,modalData:t})},i=()=>s({isOpen:!1,modalData:null});return e.jsxs(e.Fragment,{children:[e.jsx(z,{children:"Galéria"}),e.jsx("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px",paddingBottom:"20px"},children:g==null?void 0:g.map((t,m)=>e.jsx(u,{data:t,index:m,onOpenModal:a},t.id))}),r.isOpen&&e.jsx(w,{onCloseModal:i,modal:r,imgListLength:o})]})},se=()=>{var i;const r=C(),s=d.useRef((i=r.state)==null?void 0:i.from),[o,a]=d.useState(!1);return d.useEffect(()=>{const t=()=>{window.scrollY>100?a(!0):a(!1)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[]),e.jsxs(B,{children:[e.jsx(W,{location:s}),e.jsx(ie,{}),o&&e.jsx(T,{})]})},xe=se;export{xe as default};
