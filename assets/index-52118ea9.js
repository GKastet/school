import{u as s,j as e,G as x,r as l,a as P}from"./index-121a1d37.js";import{P as a,T as R,a as B}from"./index-376dea2b.js";import{B as S}from"./BtnUp-7c09943e.js";import{B as L}from"./BtnBack-e192f0ac.js";const z=s.li`
  border-radius: 20px;
  /* box-shadow: none; */
  transition: all 1000 ms linear;  
  &:hover {
    box-shadow: 0px 0px 12px 9px rgba(196, 33, 196, 0.82);
  }
`,q=s.div`
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
`;const p="/school/assets/50WebP-4b63c187.webp",h="/school/assets/64WebP-5977da9e.webp",m=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms linear;
  &:hover {
    transform: scale(1.07);
  }
`,g=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;  
`,b=({data:t,isOpen:i=!1,onOpenModal:o})=>{const{id:n,imgAlt:r}=t;switch(n){case"1":return e.jsx(e.Fragment,{children:i?e.jsx(g,{src:`${p}`,alt:r,type:"image/webp",loading:"lazy",onClick:()=>{o({id:n})}}):e.jsx(m,{src:`${p}`,alt:r,type:"image/webp",loading:"lazy",onClick:()=>{o({id:n})}})});case"2":return e.jsx(e.Fragment,{children:i?e.jsx(g,{src:`${h}`,alt:r,type:"image/webp",loading:"lazy",onClick:()=>{o({id:n})}}):e.jsx(m,{src:`${h}`,alt:r,type:"image/webp",loading:"lazy",onClick:()=>{o({id:n})}})});case"3":return e.jsx(e.Fragment,{children:i?e.jsx(g,{src:`${p}`,alt:r,type:"image/webp",loading:"lazy",onClick:()=>{o({id:n})}}):e.jsx(m,{src:`${p}`,alt:r,type:"image/webp",loading:"lazy",onClick:()=>{o({id:n})}})});case"4":return e.jsx(e.Fragment,{children:i?e.jsx(g,{src:`${h}`,alt:r,type:"image/webp",loading:"lazy",onClick:()=>{o({id:n})}}):e.jsx(m,{src:`${h}`,alt:r,type:"image/webp",loading:"lazy",onClick:()=>{o({id:n})}})});default:return"LOGO not found"}};b.propTypes={data:a.shape({id:a.string.isRequired,imgAlt:a.string}).isRequired,isOpen:a.bool,onOpenModal:a.func};const f=({data:t,onOpenModal:i})=>e.jsx(z,{children:e.jsx(q,{children:e.jsx(b,{data:t,onOpenModal:i})})});f.propTypes={data:a.shape({imgSrc:a.string.isRequired,imgAlt:a.string.isRequired}).isRequired,onOpenModal:a.func.isRequired};const T=s.div`
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
`;function G(t){return x({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(t)}const E=s.button`
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
`,F=s(G)`
  fill: var(--violet);
  width: 20px;
  height: 20px;
  @media (min-width: 744px) {
    width: 24px;
    height: 24px;
  }
`,w=({onCloseModal:t})=>{const i=()=>{document.body.classList.remove("no-scroll"),t()};return e.jsx(e.Fragment,{children:e.jsx(E,{type:"button",onClick:i,children:e.jsx(F,{})})})};w.propTypes={onCloseModal:a.func.isRequired};function N(t){return x({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}}]})(t)}function W(t){return x({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"}},{tag:"path",attr:{fillRule:"evenodd",d:"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"}}]})(t)}const $=s.button`
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
`,D=s(N)`
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
`,j=({imageId:t,setImageId:i})=>{const o=()=>{if(t===1){alert("It is first image");return}i(t-1)};return e.jsx(e.Fragment,{children:e.jsx($,{type:"button",onClick:o,children:e.jsx(D,{})})})};j.propTypes={imageId:a.number.isRequired,setImageId:a.func.isRequired};const A=s.button`
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
`,M=s(W)`
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
`,v=({imageId:t,setImageId:i})=>{const o=()=>{if(t===4){alert("You achieved the last image");return}i(t+1)};return e.jsx(e.Fragment,{children:e.jsx(A,{type:"button",onClick:o,children:e.jsx(M,{})})})};v.propTypes={imageId:a.number.isRequired,setImageId:a.func.isRequired};const y=({onCloseModal:t,modal:i})=>{const{isOpen:o,modalData:n}=i,[r,c]=l.useState(Number(n.id));l.useEffect(()=>{if(!o||window.innerWidth<744)return;document.body.classList.add("no-scroll");const d=I=>{I.code==="Escape"&&(document.body.classList.remove("no-scroll"),t())};return window.addEventListener("keydown",d),()=>{window.removeEventListener("keydown",d)}},[o,t]);const k=d=>{d.target===d.currentTarget&&(document.body.classList.remove("no-scroll"),t())},C={id:r.toString()};return e.jsx(T,{onClick:k,children:e.jsxs("div",{style:{position:"relative"},children:[e.jsx(b,{data:C,isOpen:i.isOpen}),e.jsx(w,{onCloseModal:t}),e.jsx(j,{imageId:r,setImageId:c}),e.jsx(v,{imageId:r,setImageId:c})]})})};y.propTypes={onCloseModal:a.func.isRequired,modal:a.object.isRequired};const u=[{id:"1",imgSrc:"/school/src/images/50WebP.webp",imgAlt:"Project foto",projectName:"Project name"},{id:"2",imgSrc:"/school/src/images/64WebP.webp",imgAlt:"Project foto",projectName:"Project name"},{id:"3",imgSrc:"/school/src/images/50WebP.webp",imgAlt:"Project foto",projectName:"Project name"},{id:"4",imgSrc:"/school/src/images/64WebP.webp",imgAlt:"Project foto",projectName:"Project name"}],O=()=>{const[t,i]=l.useState({isOpen:!1,modalData:null}),o=r=>{i({isOpen:!0,modalData:r})},n=()=>i({isOpen:!1,modalData:null});return e.jsxs(e.Fragment,{children:[e.jsx(R,{children:"Galéria"}),e.jsx("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px",paddingBottom:"20px"},children:u==null?void 0:u.map(r=>e.jsx(f,{data:r,onOpenModal:o},r.id))}),t.isOpen&&e.jsx(y,{onCloseModal:n,modal:t})]})},Y=()=>{var r;const t=P(),i=l.useRef((r=t.state)==null?void 0:r.from),[o,n]=l.useState(!1);return l.useEffect(()=>{const c=()=>{window.scrollY>100?n(!0):n(!1)};return window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}},[]),e.jsxs(B,{children:[e.jsx(L,{location:i}),e.jsx(O,{}),o&&e.jsx(S,{})]})},Q=Y;export{Q as default};
