import{h as j,u as i,L as g,j as o,r as a}from"./index-5744e3ed.js";import{P as r,T as f,a as h}from"./index-f78ff50c.js";import{F as u,a as x,b as P,c as b,d as v,e as y,f as k,g as S,h as w,i as F,j as A,k as N,l as _,m as D,n as $,o as z,B as I}from"./BtnUp-461707dc.js";const n=j`
  0% {
    opacity: 0;
  }
  /* 50% {
    opacity: 0.3;
  } */
  100% {
    opacity: 1;
  }
`,B=i.li`
  /* outline: 1px solid red; */
  /* background-color: rgba(255, 255, 255, 1); */
  /* background-color: rgba(174, 228, 255, 0.7); */
  background-color: rgba(33, 89, 198, 0.7);
  /* background-color: rgba(0, 0, 0, 0.3); */
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  /* border: 12px solid red; */
  border-top: 10px solid var(--hover);
  /* border-top: 10px solid #ffff53; */
  border-right: 12px solid var(--hover);
  /* border-right: 12px solid #ffff53; */
  /* border-bottom: 12px solid red; */

  @media (min-width: 744px) {
    flex-wrap: nowrap;
  }
`,W=i.div`
  position: relative;
  transition: transform var(--animation-time) var(--animation-cubic),
    opacity var(--animation-time) var(--animation-cubic);
  &:hover .card-overlay {
    transform: translateY(0);
    opacity: 0.8;
    /* pointer-events: none; */
  }
`,C=i.div`
  outline: 1px solid var(--backgroundColor-header-footer);
  border-radius: 20px;
  min-width: 300px;
  height: 200px;
  overflow: hidden;
  @media (min-width: 1280px) {
    min-width: 500px;
    height: 260px;
  }
`,E=i.div`
  width: 100%;
  /* z-index: 3; */
`,M=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,T=i.p`
  display: block;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.12em;
  font-style: italic;
  color: var(--text-color);

  /* Задаем начальную прозрачность нулевой */
  opacity: 0;
  animation: ${n} 0.3s linear 2s forwards;
  @media (min-width: 744px) {
    font-size: 20px;
  }

  /* Применяем анимацию для плавного появления текста */
  //transition: opacity 2s ease-in-out;

  /* После задержки в 2 секунды, устанавливаем прозрачность в 1 */
  //animation: ${n} 1s ease-in-out 2s;

  /* @keyframes fadeIn {
    to {
      opacity: 1;
    }
  } */
`,L=i(g)`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 32px;
  /* padding-top: 40px; */

  /* font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em; */
  color: var(--backgroundColor-header-footer);
  background-color: var(--mainNavLogo);
  /* opacity: 0.9; */
  border-radius: 20px;
  transform: translateY(101%);
  transition: transform var(--animation-time) var(--animation-cubic),
    opacity var(--animation-time) var(--animation-cubic);
  opacity: 0;
  font-size: 16px;
  font-weight: 700;
  @media (min-width: 744px) {
    font-size: 20px;
  }
`,l=({project:e})=>{const{imgSrc:t,imgAlt:c,projectName:p,projectDescription:m}=e,d=m.replace(/\n/g,"<br>");return o.jsx(o.Fragment,{children:o.jsxs(B,{children:[o.jsxs(W,{children:[o.jsx(C,{children:o.jsx(M,{src:t,alt:c,type:"image/webp",loading:"lazy"})}),o.jsx(L,{className:"card-overlay",to:"/gallery",children:"Navštíviť galériu"})]}),o.jsxs(E,{children:[o.jsx("h3",{style:{fontSize:"28px",textAlign:"center",color:"white"},children:p}),o.jsx(T,{dangerouslySetInnerHTML:{__html:d}})]})]})})};l.propTypes={project:r.shape({imgSrc:r.string.isRequired,imgAlt:r.string.isRequired,projectName:r.string.isRequired,projectDescription:r.string.isRequired}).isRequired};const Z="/school/assets/6_BoffinIIGames_title_horiz_WebP-0559eb76.webp",H="/school/assets/7_BoffinIIGames_title_horiz_WebP-0f2e072e.webp",R="/school/assets/8_BoffinI500_title_horiz_WebP-8e69515a.webp",q="/school/assets/9_BoffinIIMotion_title_horiz_WebP-38ae12b5.webp",U="/school/assets/11_ProBot_title_horiz_WebP-c09c09b7.webp",V="/school/assets/12_DobotMagician_title_horiz_WebP-d2c4471f.webp",Y="/school/assets/13_MechanikaAutomobilu_title_horiz_WebP-5e8347b9.webp",G="/school/assets/seva-750a1f57.jpg",s=[{idx:"1",id:"1",title:!0,imgSrc:`${u}`,imgAlt:"Project main foto",projectName:"Merkur",projectDescription:"Zo začiatku bolo náročné pochopiť celý proces. Bolo tam veľa častí a rôznych spôsobov ich použitia. Postupom času však proces chápete čoraz viac a rýchlejšie zostavujete štruktúru."},{idx:"2",id:"2",title:!0,imgSrc:`${x}`,imgAlt:"Project main foto",projectName:"Solar Hydraulic",projectDescription:""},{idx:"3",id:"21",title:!1,imgSrc:`${P}`,imgAlt:"Project main foto",projectName:"Solar Hydraulic",projectDescription:""},{idx:"4",id:"22",title:!1,imgSrc:`${b}`,imgAlt:"Project main foto",projectName:"Solar Hydraulic",projectDescription:""},{idx:"5",id:"3",title:!0,imgSrc:`${v}`,imgAlt:"Project main foto",projectName:"Fuel cell car",projectDescription:`Vodíkové auto:
- Zložitosť 6/10
-Funkčnost 9/10
Celkové hodnotenie 7,5/10
Poznámky k autu
Povedal by som že rýchlosť bola podpriemerná.
Z vizuálneho hladiska nebolo moc pekné`},{idx:"6",id:"31",title:!1,imgSrc:`${y}`,imgAlt:"Project main foto",projectName:"Fuel cell car",projectDescription:`Vodíkové auto:
- Zložitosť 6/10
-Funkčnost 9/10
Celkové hodnotenie 7,5/10
Poznámky k autu
Povedal by som že rýchlosť bola podpriemerná.
Z vizuálneho hladiska nebolo moc pekné`},{idx:"7",id:"32",title:!1,imgSrc:`${k}`,imgAlt:"Project main foto",projectName:"Fuel cell car",projectDescription:`Vodíkové auto:
- Zložitosť 6/10
-Funkčnost 9/10
Celkové hodnotenie 7,5/10
Poznámky k autu
Povedal by som že rýchlosť bola podpriemerná.
Z vizuálneho hladiska nebolo moc pekné`},{idx:"8",id:"4",title:!0,imgSrc:`${S}`,imgAlt:"Project main foto",projectName:"Mars runner",projectDescription:""},{idx:"9",id:"41",title:!1,imgSrc:`${w}`,imgAlt:"Project main foto",projectName:"Mars runner",projectDescription:""},{idx:"10",id:"5",title:!0,imgSrc:`${F}`,imgAlt:"Project main foto",projectName:"Eitech",projectDescription:""},{idx:"11",id:"51",title:!1,imgSrc:`${A}`,imgAlt:"Project main foto",projectName:"Eitech",projectDescription:""},{idx:"12",id:"52",title:!1,imgSrc:`${N}`,imgAlt:"Project main foto",projectName:"Eitech",projectDescription:""},{idx:"14",id:"6",title:!0,imgSrc:`${Z}`,imgAlt:"Project main foto",projectName:"Boffin II games",projectDescription:""},{idx:"17",id:"7",title:!0,imgSrc:`${H}`,imgAlt:"Project main foto",projectName:"Boffin II green energy",projectDescription:""},{idx:"20",id:"8",title:!0,imgSrc:`${R}`,imgAlt:"Project main foto",projectName:"Boffin I 500",projectDescription:""},{idx:"23",id:"9",title:!0,imgSrc:`${q}`,imgAlt:"Project main foto",projectName:"Boffin II motion",projectDescription:""},{idx:"26",id:"10",title:!0,imgSrc:`${_}`,imgAlt:"Project main foto",projectName:"Boffin II my home",projectDescription:""},{idx:"27",id:"101",title:!1,imgSrc:`${D}`,imgAlt:"Project main foto",projectName:"Boffin II my home",projectDescription:""},{idx:"29",id:"11",title:!0,imgSrc:`${U}`,imgAlt:"Project main foto",projectName:"Pro Bot",projectDescription:""},{idx:"32",id:"12",title:!0,imgSrc:`${V}`,imgAlt:"Project main foto",projectName:"Dobot magician",projectDescription:""},{idx:"35",id:"13",title:!0,imgSrc:`${Y}`,imgAlt:"Project main foto",projectName:"Mechanika automobilu",projectDescription:""},{idx:"38",id:"14",title:!0,imgSrc:`${$}`,imgAlt:"Project main foto",projectName:"Fischer technik",projectDescription:""},{idx:"39",id:"141",title:!1,imgSrc:`${z}`,imgAlt:"Project main foto",projectName:"Fischer technik",projectDescription:""},{idx:"15",id:"15",title:!0,imgSrc:`${G}`,imgAlt:"Project main foto",projectName:"Seva",projectDescription:""}],O=()=>{const e=s.filter(t=>t.title===!0);return console.log(s.length),console.log(e.length),o.jsxs("div",{children:[o.jsx(f,{children:"Naše Projekty"}),o.jsx("ul",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:e==null?void 0:e.map(t=>o.jsx(l,{project:t},t==null?void 0:t.id))})]})},J=()=>{const[e,t]=a.useState(!1);return a.useEffect(()=>{const c=()=>{window.scrollY>100?t(!0):t(!1)};return window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}},[]),o.jsxs(h,{children:[o.jsx(O,{}),e&&o.jsx(I,{})]})},oo=J;export{oo as default};
