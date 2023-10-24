import{h as d,u as a,L as g,j as e,r as c}from"./index-cff325b5.js";import{T as h,P as j}from"./GeneralCSS-81f4a4c5.js";import{P as s,B as x}from"./BtnUp-d564c996.js";const l=d`
  0% {
    opacity: 0;
  }
  /* 50% {
    opacity: 0.3;
  } */
  100% {
    opacity: 1;
  }
`,b=a.li`
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
`,y=a.div`
position: relative;
transition: transform var(--animation-time) var(--animation-cubic), opacity var(--animation-time) var(--animation-cubic);
  &:hover .card-overlay {
    transform: translateY(0);
    opacity: 0.8;
    /* pointer-events: none; */
  }
  `,f=a.div`
  outline: 1px solid black;
  border-radius: 20px;
  min-width: 300px;
  height: 200px;
  overflow: hidden;
  @media (min-width: 1280px) {
    min-width: 500px;
    height: 260px;
  }
`,w=a.div`
  width: 100%;
  /* z-index: 3; */
`,P=a.p`
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
`,_=a(g)`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
  display: block;
  display: flex;
    justify-content: center;
    align-items: center;

  padding: 0 32px;
  padding-top: 40px;

  /* font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em; */
  color: var(--p_color);
  background-color: var(--backgroundColor);
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
  
`,v="/school/assets/1_Merkur_title_horiz_WebP-8ee04ba5.webp",z="/school/assets/2_SolarHydraulic_title_horiz_WebP-3962cc45.webp",q="/school/assets/3_FuelCellCar_title-horiz_WebP-a50c2368.webp",k="/school/assets/4_MarsRunner_title-horiz_WebP-81b3573f.webp",I="/school/assets/5_EiTech_title_horiz_WebP-98b27108.webp",F="/school/assets/6_BoffinIIGames_title_horiz_WebP-0559eb76.webp",A="/school/assets/7_BoffinIIGames_title_horiz_WebP-0f2e072e.webp",D="/school/assets/8_BoffinI500_title_horiz_WebP-8e69515a.webp",L="/school/assets/9_BoffinIIMotion_title_horiz_WebP-38ae12b5.webp",N="/school/assets/10_BoffinIIMyHome_title_horiz_WebP-9e403160.webp",B="/school/assets/11_ProBot_title_horiz_WebP-c09c09b7.webp",$="/school/assets/12_DobotMagician_title_horiz_WebP-d2c4471f.webp",W="/school/assets/13_MechanikaAutomobilu_title_horiz_WebP-5e8347b9.webp",V="/school/assets/14_FicherTechnik_title_horiz_WebP-4f5499fc.webp",T="/school/assets/seva-750a1f57.jpg",p=({data:i})=>{const{id:r,imgAlt:t}=i;switch(r){case"1":return e.jsx("img",{src:`${v}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"2":return e.jsx("img",{src:`${z}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"3":return e.jsx("img",{src:`${q}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"4":return e.jsx("img",{src:`${k}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"5":return e.jsx("img",{src:`${I}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"6":return e.jsx("img",{src:`${F}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"7":return e.jsx("img",{src:`${A}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"8":return e.jsx("img",{src:`${D}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"9":return e.jsx("img",{src:`${L}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"10":return e.jsx("img",{src:`${N}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"11":return e.jsx("img",{src:`${B}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"12":return e.jsx("img",{src:`${$}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"13":return e.jsx("img",{src:`${W}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"14":return e.jsx("img",{src:`${V}`,alt:t,style:o,type:"image/webp",loading:"lazy"});case"15":return e.jsx("img",{src:`${T}`,alt:t,style:o,type:"image/webp",loading:"lazy"});default:return"LOGO not found"}},o={width:"100%",height:"100%",objectFit:"cover"};p.propTypes={data:s.shape({id:s.string.isRequired,imgAlt:s.string.isRequired}).isRequired};const m=({project:i})=>{const{projectName:r,projectDescription:t}=i,u=t.replace(/\n/g,"<br>");return e.jsx(e.Fragment,{children:e.jsxs(b,{children:[e.jsxs(y,{children:[e.jsx(f,{children:e.jsx(p,{data:i})}),e.jsx(_,{className:"card-overlay",to:"/gallery",children:"navštíviť galériu"})]}),e.jsxs(w,{children:[e.jsx("h3",{style:{fontSize:"28px",textAlign:"center",color:"white"},children:r}),e.jsx(P,{dangerouslySetInnerHTML:{__html:u}})]})]})})};m.propTypes={project:s.shape({projectName:s.string.isRequired,projectDescription:s.string.isRequired}).isRequired};const n=[{id:"1",imgAlt:"Project main foto",projectName:"Merkur",projectDescription:"Zo začiatku bolo náročné pochopiť celý proces. Bolo tam veľa častí a rôznych spôsobov ich použitia. Postupom času však proces chápete čoraz viac a rýchlejšie zostavujete štruktúru."},{id:"2",imgAlt:"Project main foto",projectName:"Solar Hydraulic",projectDescription:""},{id:"3",imgAlt:"Project main foto",projectName:"Fuel cell car",projectDescription:`Vodíkové auto:
- Zložitosť 6/10
-Funkčnost 9/10
Celkové hodnotenie 7,5/10
Poznámky k autu
Povedal by som že rýchlosť bola podpriemerná.
Z vizuálneho hladiska nebolo moc pekné`},{id:"4",imgAlt:"Project main foto",projectName:"Mars runner",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{id:"5",imgAlt:"Project main foto",projectName:"Eitech",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{id:"6",imgAlt:"Project main foto",projectName:"Boffin II games",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{id:"7",imgAlt:"Project main foto",projectName:"Boffin II green energy",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{id:"8",imgAlt:"Project main foto",projectName:"Boffin I 500",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{id:"9",imgAlt:"Project main foto",projectName:"Boffin II motion",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{id:"10",imgAlt:"Project main foto",projectName:"Boffin II my home",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{id:"11",imgAlt:"Project main foto",projectName:"Pro Bot",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{id:"12",imgAlt:"Project main foto",projectName:"Dobot magician",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{id:"13",imgAlt:"Project main foto",projectName:"Mechanika automobilu",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{id:"14",imgAlt:"Project main foto",projectName:"Fischer technik",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."},{id:"15",imgAlt:"Project main foto",projectName:"Seva",projectDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque excepturi maiores nemo eum consequuntur sunt."}],M=()=>e.jsxs("div",{children:[e.jsx(h,{children:"Naše Projekty"}),e.jsx("ul",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:n==null?void 0:n.map(i=>e.jsx(m,{project:i},i==null?void 0:i.id))}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"1"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"2"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"3"}),e.jsx("div",{style:{outline:"1px solid green",width:"200px",height:"200px"},children:"4"})]}),S=()=>{const[i,r]=c.useState(!1);return c.useEffect(()=>{const t=()=>{window.scrollY>100?r(!0):r(!1)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[]),e.jsxs(j,{children:[e.jsx(M,{}),i&&e.jsx(x,{})]})},H=S;export{H as default};
