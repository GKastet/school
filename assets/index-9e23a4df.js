import{u as s,j as e,G as m,r as d,a as R}from"./index-c9735e5f.js";import{P as r,T as S,a as C}from"./index-9c5f253b.js";import{a as u,B as q}from"./BtnUp-f283c684.js";import{B as M}from"./BtnBack-784cffe1.js";const P=s.li`
  border-radius: 20px;  
  cursor: zoom-in;
  transition: all 1000 ms linear;
  &:hover {
    box-shadow: 0px 0px 12px 9px rgba(3, 152, 149, 0.8);
  }
`,z=s.div`
  outline: 1px solid var(--backgroundColor-header-footer);
  border-radius: 20px;
  width: 300px;
  height: 180px;
  overflow: hidden;
`,E=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`,g=({index:t,data:n,onOpenModal:i})=>{const{imgSrc:a,imgAlt:l}=n;return e.jsx(P,{children:e.jsx(z,{onClick:()=>{i({idx:t})},children:e.jsx(E,{src:a,alt:l,type:"image/webp",loading:"lazy"})})})};g.propTypes={index:r.number,data:r.shape({imgSrc:r.string.isRequired,imgAlt:r.string.isRequired}).isRequired,onOpenModal:r.func.isRequired};const T=s.div`
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
    max-width: calc(100vw - 100px);
    max-height: calc(100vh - 50px);
    overflow: hidden;
    border-radius: 20px;
  }
`,G=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function O(t){return m({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(t)}const D=s.button`
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
`,N=s(O)`
  fill: var(--violet);
  width: 20px;
  height: 20px;
  @media (min-width: 744px) {
    width: 24px;
    height: 24px;
  }
`,f=({onCloseModal:t})=>{const n=()=>{document.body.classList.remove("no-scroll"),t()};return e.jsx(e.Fragment,{children:e.jsx(D,{type:"button",onClick:n,children:e.jsx(N,{})})})};f.propTypes={onCloseModal:r.func.isRequired};function A(t){return m({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}}]})(t)}function F(t){return m({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"}},{tag:"path",attr:{fillRule:"evenodd",d:"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"}}]})(t)}const U=s.button`
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
`,W=s(A)`
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
`,b=({imageIdx:t,setImageIdx:n})=>{const i=()=>{n(t-1)};return e.jsx(e.Fragment,{children:e.jsx(U,{type:"button",onClick:i,children:e.jsx(W,{})})})};b.propTypes={imageIdx:r.number.isRequired,setImageIdx:r.func.isRequired};const Y=s.button`
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
`,H=s(F)`
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
`,v=({imageIdx:t,setImageIdx:n})=>{const i=()=>{n(t+1)};return e.jsx(e.Fragment,{children:e.jsx(Y,{type:"button",onClick:i,children:e.jsx(H,{})})})};v.propTypes={imageIdx:r.number.isRequired,setImageIdx:r.func.isRequired};const w=({onCloseModal:t,modal:n,imgListLength:i})=>{const{isOpen:a,modalData:l}=n,[o,p]=d.useState(l.idx),[c,x]=d.useState(u[o]),{imgSrc:y,imgAlt:j}=c;d.useEffect(()=>{o>=0&&o<u.length&&x(u[o])},[o]);const I=o===0,B=i===o+1;d.useEffect(()=>{if(!a||window.innerWidth<744)return;document.body.classList.add("no-scroll");const h=L=>{L.code==="Escape"&&(document.body.classList.remove("no-scroll"),t())};return window.addEventListener("keydown",h),()=>{window.removeEventListener("keydown",h)}},[a,t]);const k=h=>{h.target===h.currentTarget&&(document.body.classList.remove("no-scroll"),t())};return e.jsx(T,{onClick:k,children:e.jsxs("div",{style:{position:"relative"},children:[e.jsx(G,{src:y,alt:j,type:"image/webp"}),e.jsx(f,{onCloseModal:t}),!I&&e.jsx(b,{imageIdx:o,setImageIdx:p}),!B&&e.jsx(v,{imageIdx:o,setImageIdx:p})]})})};w.propTypes={onCloseModal:r.func.isRequired,modal:r.object.isRequired,imgListLength:r.number};const K=()=>{var o,p;const[t,n]=d.useState({isOpen:!1,modalData:null}),i=(o=u)==null?void 0:o.length,a=c=>{n({isOpen:!0,modalData:c})},l=()=>n({isOpen:!1,modalData:null});return e.jsxs(e.Fragment,{children:[e.jsx(S,{children:"Galéria"}),e.jsx("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px",paddingBottom:"20px"},children:(p=u)==null?void 0:p.map((c,x)=>e.jsx(g,{data:c,index:x,onOpenModal:a},c.id))}),t.isOpen&&e.jsx(w,{onCloseModal:l,modal:t,imgListLength:i})]})},$=()=>{var l;const t=R(),n=d.useRef((l=t.state)==null?void 0:l.from),[i,a]=d.useState(!1);return d.useEffect(()=>{const o=()=>{window.scrollY>100?a(!0):a(!1)};return window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}},[]),e.jsxs(C,{children:[e.jsx(M,{location:n}),e.jsx(K,{}),i&&e.jsx(q,{})]})},Z=$;export{Z as default};
