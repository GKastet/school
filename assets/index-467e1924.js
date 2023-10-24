import{h as d,u as a,L as g,j as e,r as c}from"./index-0b69af99.js";import{P as s,T as x,a as j}from"./index-8bb77c9a.js";import{F as h,a as f,b as y,c as b,B as P}from"./BtnUp-62ce9a55.js";const l=d`
  0% {
    opacity: 0;
  }
  /* 50% {
    opacity: 0.3;
  } */
  100% {
    opacity: 1;
  }
`,w=a.li`
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
`,v=a.div`
position: relative;
transition: transform var(--animation-time) var(--animation-cubic), opacity var(--animation-time) var(--animation-cubic);
  &:hover .card-overlay {
    transform: translateY(0);
    opacity: 0.8;
    /* pointer-events: none; */
  }
  `,_=a.div`
  outline: 1px solid var(--backgroundColor-header-footer);
  border-radius: 20px;
  min-width: 300px;
  height: 200px;
  overflow: hidden;
  @media (min-width: 1280px) {
    min-width: 500px;
    height: 260px;
  }
`,z=a.div`
  width: 100%;
  /* z-index: 3; */
`,q=a.p`
  display: block;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.12em;
  font-style: italic;
  color: var(--text-color);
  
  /* Задаем начальную прозрачность нулевой */
  opacity: 0;
  animation: ${l} 0.3s ease-in-out 2s forwards;
  @media (min-width: 744px) {
    font-size: 20px;
  }

  /* Применяем анимацию для плавного появления текста */
  //transition: opacity 2s ease-in-out;

  /* После задержки в 2 секунды, устанавливаем прозрачность в 1 */
  //animation: ${l} 1s ease-in-out 2s;

  /* @keyframes fadeIn {
    to {
      opacity: 1;
    }
  } */
`,k=a(g)`
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
  transition: transform var(--animation-time) var(--animation-cubic), opacity var(--animation-time) var(--animation-cubic);
  opacity: 0;
  font-size: 16px;
  font-weight: 700;
  @media (min-width: 744px) {
    font-size: 20px;
  }
  
`,I="/school/assets/5_EiTech_title_horiz_WebP-98b27108.webp",F="/school/assets/6_BoffinIIGames_title_horiz_WebP-0559eb76.webp",N="/school/assets/7_BoffinIIGames_title_horiz_WebP-0f2e072e.webp",A="/school/assets/8_BoffinI500_title_horiz_WebP-8e69515a.webp",D="/school/assets/9_BoffinIIMotion_title_horiz_WebP-38ae12b5.webp",L="/school/assets/10_BoffinIIMyHome_title_horiz_WebP-9e403160.webp",B="/school/assets/11_ProBot_title_horiz_WebP-c09c09b7.webp",$="/school/assets/12_DobotMagician_title_horiz_WebP-d2c4471f.webp",V="/school/assets/13_MechanikaAutomobilu_title_horiz_WebP-5e8347b9.webp",W="/school/assets/14_FicherTechnik_title_horiz_WebP-4f5499fc.webp",T="/school/assets/seva-750a1f57.jpg",p=({data:i})=>{const{id:r,imgAlt:t}=i;switch(r){case"1":return e.jsx("img",{src:`${b}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"2":return e.jsx("img",{src:`${y}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"3":return e.jsx("img",{src:`${f}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"4":return e.jsx("img",{src:`${h}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"5":return e.jsx("img",{src:`${I}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"6":return e.jsx("img",{src:`${F}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"7":return e.jsx("img",{src:`${N}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"8":return e.jsx("img",{src:`${A}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"9":return e.jsx("img",{src:`${D}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"10":return e.jsx("img",{src:`${L}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"11":return e.jsx("img",{src:`${B}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"12":return e.jsx("img",{src:`${$}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"13":return e.jsx("img",{src:`${V}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"14":return e.jsx("img",{src:`${W}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"15":return e.jsx("img",{src:`${T}`,alt:t,style:o,type:"image/webp",loading:"lazy"});default:return"LOGO not found"}},o={width:"100%",height:"100%",objectFit:"cover"};p.propTypes={data:s.shape({id:s.string.isRequired,imgAlt:s.string.isRequired}).isRequired};const m=({project:i})=>{const{projectName:r,projectDescription:t}=i,u=t.replace(/\n/g,"<br>");return e.jsx(e.Fragment,{children:e.jsxs(w,{children:[e.jsxs(v,{children:[e.jsx(_,{children:e.jsx(p,{data:i})}),e.jsx(k,{className:"card-overlay",to:"/gallery",children:"Navštíviť galériu"})]}),e.jsxs(z,{children:[e.jsx("h3",{style:{fontSize:"28px",textAlign:"center",color:"white"},children:r}),e.jsx(q,{dangerouslySetInnerHTML:{__html:u}})]})]})})};m.propTypes={project:s.shape({projectName:s.string.isRequired,projectDescription:s.string.isRequired}).isRequired};const n=[{idx:"1",id:"1",imgAlt:"Project main foto",projectName:"Merkur",projectDescription:"Zo začiatku bolo náročné pochopiť celý proces. Bolo tam veľa častí a rôznych spôsobov ich použitia. Postupom času však proces chápete čoraz viac a rýchlejšie zostavujete štruktúru."},{idx:"2",id:"2",imgAlt:"Project main foto",projectName:"Solar Hydraulic",projectDescription:""},{idx:"3",id:"3",imgAlt:"Project main foto",projectName:"Fuel cell car",projectDescription:`Vodíkové auto:
- Zložitosť 6/10
-Funkčnost 9/10
Celkové hodnotenie 7,5/10
Poznámky k autu
Povedal by som že rýchlosť bola podpriemerná.
Z vizuálneho hladiska nebolo moc pekné`},{idx:"4",id:"4",imgAlt:"Project main foto",projectName:"Mars runner",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{idx:"5",id:"5",imgAlt:"Project main foto",projectName:"Eitech",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{idx:"6",id:"6",imgAlt:"Project main foto",projectName:"Boffin II games",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{idx:"7",id:"7",imgAlt:"Project main foto",projectName:"Boffin II green energy",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{idx:"8",id:"8",imgAlt:"Project main foto",projectName:"Boffin I 500",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{idx:"9",id:"9",imgAlt:"Project main foto",projectName:"Boffin II motion",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{idx:"10",id:"10",imgAlt:"Project main foto",projectName:"Boffin II my home",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{idx:"11",id:"11",imgAlt:"Project main foto",projectName:"Pro Bot",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{idx:"12",id:"12",imgAlt:"Project main foto",projectName:"Dobot magician",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{idx:"13",id:"13",imgAlt:"Project main foto",projectName:"Mechanika automobilu",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{idx:"14",id:"14",imgAlt:"Project main foto",projectName:"Fischer technik",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{idx:"15",id:"15",imgAlt:"Project main foto",projectName:"Seva",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."}],S=()=>e.jsxs("div",{children:[e.jsx(x,{children:"Naše Projekty"}),e.jsx("ul",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:n==null?void 0:n.map(i=>e.jsx(m,{project:i},i==null?void 0:i.id))})]}),M=()=>{const[i,r]=c.useState(!1);return c.useEffect(()=>{const t=()=>{window.scrollY>100?r(!0):r(!1)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[]),e.jsxs(j,{children:[e.jsx(S,{}),i&&e.jsx(P,{})]})},H=M;export{H as default};
