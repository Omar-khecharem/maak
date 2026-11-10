(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},t=t=>String(t??``).replace(/[&<>"']/g,t=>e[t]);function n(e,t=``,n){let r=document.createElement(e);return t&&(r.className=t),n!=null&&(r.textContent=n),r}var r=e=>`
  <header class="app-header mb-6 flex w-full items-center justify-between gap-3 border-b border-[#f9d5e5] pb-4 sm:mb-7 md:mb-8">

    <!-- Logo MAAK : mobile et desktop -->
    <button
      type="button"
      data-page="home"
      class="flex min-w-0 shrink-0 items-center gap-3 text-left transition-opacity hover:opacity-80"
      aria-label="Retour à l'accueil"
    >
      <img
        src="/logo.png"
        alt="Logo MAAK"
        class="h-15 w-15 shrink-0 rounded-xl object-contain sm:h-12 sm:w-12 md:h-14 md:w-14"
      >

      <div class="flex min-w-0 flex-col">
        <span class="text-xl font-black tracking-tight text-[#be185d] sm:text-2xl">
          maak
        </span>
        <span class="hidden text-[10px] font-semibold tracking-wide text-[#9b6b82] sm:block">
          ÉCOUTE · PRÉVENTION · CONFIANCE
        </span>
      </div>
    </button>

    <!-- Profil : compact, sans cercle décoratif -->
    <div class="ml-auto flex min-w-0 shrink-0 items-center">
      <div class="flex max-w-full items-center gap-2 rounded-full border border-[#f9d5e5] bg-white p-1.5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:gap-3 sm:pr-4">

        <!-- Photo sans fond coloré ni halo -->
        <div class="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#f9d5e5] bg-white sm:h-11 sm:w-11 md:h-12 md:w-12">
          <img
            src="/photo_de_profil.jpg"
            alt="Photo de profil"
            class="block h-full w-full rounded-full object-cover"
            onerror="this.onerror=null; this.style.display='none'; this.parentElement.classList.add('profile-fallback'); this.parentElement.innerHTML='<span class=&quot;flex h-full w-full items-center justify-center text-sm font-black text-[#be185d]&quot;>M</span>';"
          >
        </div>

        <!-- Informations visibles à partir du mobile large -->
        <div class="hidden min-w-0 sm:block">
          <p class="max-w-32 truncate text-sm font-extrabold text-[#632846]">
            ${t(e?.name||`Utilisateur`)}
          </p>
          <p class="mt-0.5 text-xs text-[#9b6b82]">
            Espace personnel
          </p>
        </div>

      </div>
    </div>

  </header>
`,i=()=>`
  <footer class="mt-10 border-t border-[#f9d5e5] px-4 pt-4 pb-5 text-center">
    <p class="text-xs font-medium leading-6 text-[#9b6b82]">
      <span class="font-extrabold tracking-wide text-[#be185d]">MAAK</span>
      <span class="mx-1.5 text-[#e9a4c2]">·</span>
      Écoute, prévention et accompagnement
    </p>
    <p class="mt-1 text-[11px] text-[#b08a9c]">
      © ${new Date().getFullYear()} MAAK. Tous droits réservés.
    </p>
  </footer>
`,a=e=>`
<main class="main-area mx-auto min-h-screen w-full px-4 pt-6 sm:px-7 sm:pt-8 pb-[calc(120px+env(safe-area-inset-bottom,0px))]">
  ${r(e)}
  <div data-slot="page"></div>
  ${i()}
</main>
<div data-slot="nav"></div>
<div data-slot="chat"><div data-slot="chat-panel"></div></div>
<div data-slot="toast"></div>`,o={home:`<path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>`,game:`<rect x="2" y="7" width="20" height="12" rx="4"/><path d="M7 11v4M5 13h4"/><circle cx="16" cy="12" r="1" fill="currentColor"/><circle cx="18.5" cy="14.5" r="1" fill="currentColor"/>`,bell:`<path d="M6 8a6 6 0 0112 0c0 7 3 8 3 8H3s3-1 3-8"/><path d="M10 20a2 2 0 004 0"/>`,user:`<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>`,chat:`<path d="M21 11.5a8.5 8.5 0 01-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1121 11.5z"/>`,mic:`<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v4"/>`,stop:`<rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor"/>`,trash:`<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/>`,send:`<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>`};function s(e,{size:t=20,className:n=``}={}){return`<svg class="${n}" viewBox="0 0 24 24" width="${t}" height="${t}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${o[e]??``}</svg>`}function c(e,n){let r=e.page?`data-page="${t(e.page)}"`:`data-action="${t(e.action)}"`;return`<button type="button" class="nav-item${e.variant===`chat`?` chat-btn`:``}${n?` is-active`:``}" ${r} aria-label="${t(e.label)}"${n?` aria-current="page"`:``}>
    <span class="nav-bubble">${s(e.icon,{size:22,className:`nav-icon`})}</span>
    <span class="nav-label">${t(e.label.toUpperCase())}</span>
  </button>`}var l=({items:e,isActive:t})=>`<nav class="bottom-nav" aria-label="Navigation principale"><div class="bottom-nav-inner">${e.map(e=>c(e,t(e))).join(``)}</div></nav>`;function u(e,t=3500){let n=null;return e.className=`toast`,e.hidden=!0,e.setAttribute(`role`,`status`),e.setAttribute(`aria-live`,`polite`),{show(r){e.textContent=r,e.hidden=!1,clearTimeout(n),n=setTimeout(()=>{e.hidden=!0},t)}}}function d({root:e,store:t,services:n,pages:r,navItems:i,user:o,chat:s}){let c=new Map(r.map(e=>[e.id,e]));e.innerHTML=a(o);let d=t=>e.querySelector(`[data-slot="${t}"]`),f=u(d(`toast`)),p=()=>c.get(t.get().page),m=null,h={store:t,services:n,toast:f.show,navigate:g,refresh:_};function g(e){c.has(e)&&(t.set({page:e}),window.scrollTo({top:0,behavior:`smooth`}))}function _(){let e=d(`page`);e.innerHTML=p().render(h),m!==t.get().page&&(e.firstElementChild?.classList.add(`page-enter`),m=t.get().page)}function v(){let{page:e,chatOpen:n}=t.get();d(`nav`).innerHTML=l({items:i,isActive:t=>t.action?n:!n&&t.page===e})}e.addEventListener(`click`,e=>{let t=e.target.closest(`[data-page]`);if(t)return g(t.dataset.page);let n=e.target.closest(`[data-action]`);if(!n)return;let r=n.dataset.action;if(r===`toggle-chat`)return s.toggle();p().actions?.[r]?.(n,h)}),e.addEventListener(`change`,e=>{let t=e.target.closest(`[data-change]`);t&&p().changes?.[t.dataset.change]?.(t,h)});let y=t.get();return t.subscribe(e=>{let t=p().watch??[];(e.page!==y.page||t.some(t=>e[t]!==y[t]))&&_(),(e.page!==y.page||e.chatOpen!==y.chatOpen)&&v(),y=e}),s.initDOM({containerEl:d(`chat`),panelEl:d(`chat-panel`)}),_(),v(),{navigate:g}}function f(e={}){let t={...e},n=new Set;return{get:()=>t,set(e){let r=typeof e==`function`?e(t):e;t={...t,...r},n.forEach(e=>e(t))},subscribe(e){return n.add(e),()=>n.delete(e)}}}var p=[{id:`alerts`,label:`Alertes`,icon:`bell`,page:`alerts`},{id:`game`,label:`Jeu`,icon:`game`,page:`game`},{id:`home`,label:`Accueil`,icon:`home`,page:`home`},{id:`profile`,label:`Profil`,icon:`user`,page:`profile`},{id:`chat`,label:`Chat bot`,icon:`chat`,action:`toggle-chat`,variant:`chat`}],m={name:`Ons Rouissi`,firstName:`Ons`,initials:`OR`},h=[{id:`MK-1042`,type:`Test de démonstration`,time:`Aujourd’hui, 14:32`,status:`Simulation terminée`,location:`Position fictive — Gabès, Tunisie`,isDemo:!0},{id:`MK-1038`,type:`Test de connexion`,time:`Hier, 18:10`,status:`Test local`,location:`Aucune position partagée`,isDemo:!0}],g=[{id:1,name:`Ons Rouissi`,relation:`Sœur`,phone:`+216 20 000 101`,initials:`OR`,receivesAlerts:!0},{id:2,name:`Sana Trabelsi`,relation:`Amie de confiance`,phone:`+216 20 000 202`,initials:`ST`,receivesAlerts:!0},{id:3,name:`Nadia K.`,relation:`Personne de confiance`,phone:`+216 20 000 303`,initials:`NK`,receivesAlerts:!1}],_=[{id:1,age:`6–9 ans`,category:`Respect`,scenario:`Un camarade ne veut pas prêter son jouet. Que peux-tu faire ?`,options:[`Le lui arracher`,`Respecter son choix et demander gentiment plus tard`,`Le menacer`],correctIndex:1,explanation:`Chacun a le droit de dire non. On peut exprimer son envie calmement et respecter la réponse.`},{id:2,age:`6–9 ans`,category:`Sécurité`,scenario:`Une personne te demande de garder un secret qui te fait peur. Que fais-tu ?`,options:[`Je garde toujours le secret`,`J’en parle à un adulte de confiance`,`Je me blâme`],correctIndex:1,explanation:`Un secret qui fait peur ou met mal à l’aise peut être partagé avec un adulte de confiance.`},{id:3,age:`10–13 ans`,category:`Égalité`,scenario:`Dans un travail de groupe, quelqu’un dit que les filles ne peuvent pas diriger. Que réponds-tu ?`,options:[`Tout le monde peut diriger selon ses compétences`,`C’est vrai`,`Je laisse la personne décider pour tous`],correctIndex:0,explanation:`Les filles et les garçons ont les mêmes droits et peuvent prendre des responsabilités.`},{id:4,age:`10–13 ans`,category:`Harcèlement`,scenario:`Un groupe partage une photo humiliante d’un élève. Quelle est la meilleure réaction ?`,options:[`La partager à mon tour`,`Ne pas la diffuser et demander de l’aide à un adulte de confiance`,`Ajouter un commentaire moqueur`],correctIndex:1,explanation:`Ne pas partager le contenu, soutenir la personne concernée et demander de l’aide peut limiter le préjudice.`},{id:5,age:`10–13 ans`,category:`Limites personnelles`,scenario:`Un ami insiste pour lire tes messages privés après que tu as dit non. Que peux-tu faire ?`,options:[`Je dois lui donner mon téléphone`,`Je peux maintenir ma limite et en parler si je me sens sous pression`,`Je dois arrêter de parler à tout le monde`],correctIndex:1,explanation:`Tu as droit à ta vie privée. Si quelqu’un ne respecte pas tes limites et te met mal à l’aise, parle à une personne de confiance.`}],v=[{title:`Reconnaître les violences psychologiques`,category:`Comprendre`,description:`Humiliation, menaces, contrôle et isolement ne sont pas des preuves d’amour.`,readTime:`2 min`},{title:`Protéger sa vie privée en ligne`,category:`Sécurité numérique`,description:`Quelques gestes pour mieux protéger ses comptes et ses informations personnelles.`,readTime:`3 min`},{title:`Trouver une personne de confiance`,category:`Demander de l’aide`,description:`Choisir une personne qui écoute sans juger et préparer ce que vous souhaitez lui dire.`,readTime:`2 min`}],y={welcome:`Bonjour 🌸 Je suis là pour t’écouter. Tu peux m’écrire ou enregistrer un message vocal avec le micro.`,voiceAck:`J’ai bien reçu votre message vocal. Dans cette démo, il n’est ni envoyé ni transcrit : il reste sur votre appareil.`,errors:{unsupported:`Votre navigateur ne permet pas l’enregistrement vocal. Essayez un navigateur récent, en HTTPS.`,denied:`Accès au micro refusé. Autorisez le micro dans votre navigateur, puis réessayez.`},replies:[`Merci de me faire confiance. Je peux vous aider à découvrir des ressources de prévention.`,`Vous méritez d’être écoutée et respectée. Vous pouvez parler à une personne de confiance.`,`Votre sécurité est importante. Si vous êtes en danger immédiat, contactez les services d’urgence locaux.`,`Vous n’êtes pas obligée de tout raconter maintenant. Prenez le temps dont vous avez besoin.`,`Je suis un assistant de démonstration. Pour obtenir une aide adaptée, contactez une association spécialisée.`]};function b({prefix:e=`maak-demo-v2`,backend:t=globalThis.localStorage}={}){let n=t=>`${e}:${t}`,r=(e,t)=>{try{return e()}catch{return t}};return{get:(e,i=null)=>r(()=>{let r=t.getItem(n(e));return r==null?i:JSON.parse(r)},i),set:(e,i)=>r(()=>t.setItem(n(e),JSON.stringify(i))),remove:e=>r(()=>t.removeItem(n(e))),clearAll:()=>r(()=>Object.keys(t).filter(t=>t.startsWith(`${e}:`)).forEach(e=>t.removeItem(e)))}}function x({seed:e=[],now:t=()=>new Date,locale:n=`fr-FR`}={}){let r=[...e],i=1043;return{list:()=>[...r],create(){let e={id:`MK-${i++}`,type:`Alerte SOS simulée`,time:t().toLocaleString(n,{dateStyle:`medium`,timeStyle:`short`}),status:`Simulation terminée`,location:`Position fictive — Gabès, Tunisie`,isDemo:!0};return r=[e,...r],e},clear(){r=[]},reset(){r=[...e]}}}var S=`contacts`,C=e=>e.trim().split(/\s+/).slice(0,2).map(e=>e[0]).join(``).toUpperCase();function w({storage:e,seed:t=[],idFactory:n=Date.now}={}){let r=()=>e.get(S)??t.map(e=>({...e})),i=t=>(e.set(S,t),t);return{list:r,add({name:e,relation:t,phone:a}){let o=String(e??``).trim();if(!o)return null;let s={id:n(),name:o,relation:t?.trim()||`Personne de confiance`,phone:a?.trim()||`Numéro fictif`,initials:C(o),receivesAlerts:!1};return i([...r(),s]),s},toggleAlerts(e){return i(r().map(t=>t.id===e?{...t,receivesAlerts:!t.receivesAlerts}:t))},reset:()=>e.remove(S)}}var T=`language`;function E({storage:e,supported:t=[`fr`,`ar`]}={}){return{getLanguage:()=>e.get(T,`fr`),setLanguage(n){return t.includes(n)?(e.set(T,n),!0):!1},reset:()=>e.remove(T)}}var D=(e=`all`)=>({age:e,index:0,score:0,selected:null});function O(e){return{ages:[...new Set(e.map(e=>e.age))],list:t=>t===`all`?e:e.filter(e=>e.age===t),isCorrect:(e,t)=>t===e.correctIndex}}function k(e=globalThis){return{ask:(t,n=``)=>e.prompt(t,n),confirm:t=>e.confirm(t)}}function A({replies:e,delay:t=800,random:n=Math.random}={}){return{delay:t,reply:()=>e[Math.floor(n()*e.length)]}}function j({maxSeconds:e=120,minSeconds:t=.6,mediaDevices:n=globalThis.navigator?.mediaDevices,Recorder:r=globalThis.MediaRecorder}={}){let i=null,a=null,o=[],s=null,c=0,l=!1,u=()=>!!(n?.getUserMedia&&r),d=()=>i?.state===`recording`,f=()=>{clearInterval(s),a?.getTracks().forEach(e=>e.stop()),i=a=s=null,o=[]},p=e=>Object.assign(Error(e),{code:e});async function m({onTick:m,onEnd:g,onComplete:_}={}){if(!u())throw p(`unsupported`);if(!d()){try{a=await n.getUserMedia({audio:!0})}catch{throw p(`denied`)}l=!1,o=[],i=new r(a),i.ondataavailable=e=>{e.data.size&&o.push(e.data)},i.onstop=()=>{let e=(Date.now()-c)/1e3,n=new Blob(o,{type:i.mimeType||`audio/webm`}),r=l;f(),g?.(),!r&&n.size&&e>=t&&_?.({blob:n,duration:e})},c=Date.now(),i.start(),s=setInterval(()=>{let t=(Date.now()-c)/1e3;m?.(t),t>=e&&h()},250)}}function h(){d()&&i.stop()}function g(){l=!0,h()}return{isSupported:u,isRecording:d,start:m,stop:h,cancel:g}}function M({onClose:e}){let t=n(`div`,`chat-head`),r=n(`div`);r.append(n(`strong`,`chat-title`,`Chatbot Maak`),n(`span`,`chat-sub`,`Espace d’écoute et de prévention`));let i=n(`button`,`chat-close`,`×`);return i.type=`button`,i.setAttribute(`aria-label`,`Fermer le chatbot`),i.addEventListener(`click`,e),t.append(r,i),{element:t}}var N=e=>`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,`0`)}`;function ee(e){let t=n(`div`,`chat-msg chat-msg--${e.type}`);if(t.setAttribute(`role`,`listitem`),e.audioUrl){t.classList.add(`chat-msg--voice`);let r=n(`audio`);r.controls=!0,r.preload=`metadata`,r.src=e.audioUrl,t.append(n(`span`,`chat-voice-label`,`Message vocal · ${N(e.duration)}`),r)}else t.textContent=e.content;return t}function te({max:e=200}={}){let t=n(`div`,`chat-messages`);t.setAttribute(`role`,`list`),t.setAttribute(`aria-live`,`polite`);let r=()=>{t.scrollTop=t.scrollHeight};return{element:t,append(n){for(t.append(ee(n));t.children.length>e;)t.firstElementChild.remove();r()}}}function ne({onCancel:e}){let t=n(`div`,`chat-recbar`);t.hidden=!0;let r=n(`span`,`chat-rectime`,`0:00`),i=n(`button`,`chat-iconbtn`);return i.type=`button`,i.innerHTML=s(`trash`),i.setAttribute(`aria-label`,`Annuler l’enregistrement`),i.addEventListener(`click`,e),t.append(n(`span`,`chat-recdot`),n(`span`,`chat-recmsg`,`Enregistrement…`),r,i),{element:t,show(){r.textContent=`0:00`,t.hidden=!1},hide(){t.hidden=!0},setTime(e){r.textContent=N(e)}}}function re({onSend:e,onMicClick:t}){let r=n(`form`,`chat-form`),i=n(`input`,`chat-input`);Object.assign(i,{type:`text`,placeholder:`Écrivez votre message…`,autocomplete:`off`,maxLength:2e3}),i.setAttribute(`aria-label`,`Votre message`);let a=n(`button`,`chat-iconbtn chat-mic`);a.type=`button`,a.innerHTML=s(`mic`),a.setAttribute(`aria-label`,`Enregistrer un message vocal`),a.addEventListener(`click`,t);let o=n(`button`,`chat-send`);return o.type=`submit`,o.innerHTML=s(`send`),o.setAttribute(`aria-label`,`Envoyer`),r.append(i,a,o),r.addEventListener(`submit`,t=>{t.preventDefault();let n=i.value.trim();n&&!o.disabled&&(i.value=``,e(n))}),{element:r,focus:()=>i.focus(),setBusy(e){o.disabled=e,a.disabled=e},setRecording(e){r.classList.toggle(`is-recording`,e),a.classList.toggle(`is-live`,e),a.innerHTML=s(e?`stop`:`mic`),a.setAttribute(`aria-label`,e?`Terminer et envoyer le vocal`:`Enregistrer un message vocal`)}}}function ie({recorder:e,replyService:t,content:n,onToggle:r}){let i=!1,a=!1,o=[],s=null,c=null,l=()=>`${Date.now()}-${Math.random().toString(36).slice(2,8)}`;function u(e,t){let n={id:l(),type:e,...t};if(o.push(n),o.length>200){let e=o.shift();e.audioUrl&&URL.revokeObjectURL(e.audioUrl)}c?.list.append(n)}async function d(e){c.composer.setBusy(!0);try{u(`bot`,{content:e??await t.reply(o[o.length-1]?.content??``)})}catch(e){console.error(e),u(`bot`,{content:`Impossible de contacter le chatbot. Réessaie.`})}finally{c.composer.setBusy(!1)}}function f(e){u(`user`,{content:e}),d()}async function p(){if(e.isRecording())return e.stop();try{await e.start({onTick:e=>c.bar.setTime(e),onEnd:()=>{c.bar.hide(),c.composer.setRecording(!1)},onComplete:({blob:e,duration:t})=>{u(`user`,{content:`Message vocal`,audioUrl:URL.createObjectURL(e),duration:t}),d(n.voiceAck)}}),c.bar.show(),c.composer.setRecording(!0)}catch(e){u(`bot`,{content:n.errors[e.code]??n.errors.unsupported})}}function m(t){i!==t&&a&&(i=t,t||(e.cancel(),clearTimeout(s),s&&c.composer.setBusy(!1),s=null),c.container.hidden=!t,r?.(i),t&&requestAnimationFrame(()=>c.composer.focus()))}let h=e=>{e.key===`Escape`&&i&&m(!1)};function g({containerEl:t,panelEl:r}){a&&_(),t.className=`chat-overlay`,t.hidden=!0,r.className=`chat-panel`,r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-modal`,`true`),r.setAttribute(`aria-label`,`Chatbot Maak`);let i=M({onClose:()=>m(!1)}),s=te({max:200}),l=ne({onCancel:()=>e.cancel()}),u=re({onSend:f,onMicClick:p});r.replaceChildren(i.element,s.element,l.element,u.element),c={container:t,list:s,bar:l,composer:u},document.addEventListener(`keydown`,h),a=!0,o.length||o.push({id:`welcome`,type:`bot`,content:n.welcome}),o.forEach(e=>s.append(e))}function _(){e.cancel(),clearTimeout(s),s=null,document.removeEventListener(`keydown`,h),i=!1,a=!1,c=null}return{initDOM:g,open:()=>m(!0),close:()=>m(!1),toggle:()=>m(!i),isOpen:()=>i,cleanup:_}}function P({eyebrow:e,title:n,subtitle:r,actionHtml:i=``,titleSuffix:a=``}){return`<div class="flex flex-wrap items-end justify-between gap-3">
    <div>
      <p class="eyebrow">${t(e)}</p>
      <h1 class="page-title mt-2 text-3xl font-black sm:text-4xl">${t(n)}${a}</h1>
      ${r?`<p class="mt-2 text-[#9b6b82]">${t(r)}</p>`:``}
    </div>
    ${i}
  </div>`}var F=(e,n=`green`)=>`<span class="badge badge-${n}">${t(e)}</span>`;function I({label:e,action:n,variant:r=`primary`,className:i=``,data:a={},type:o=`button`}){let s=Object.entries(a).map(([e,n])=>` data-${e}="${t(n)}"`).join(``);return`<button type="${o}" class="btn-${r} ${i}" data-action="${t(n)}"${s}>${t(e)}</button>`}var L=(e,t=`p-5`)=>`<section class="card ${t}">${e}</section>`;function ae({eyebrow:e,title:n,linkLabel:r,linkPage:i}){return`<div class="mb-4 flex items-end justify-between gap-3">
    <div>${e?`<p class="text-sm font-bold text-[#be185d]">${t(e)}</p>`:``}<h2 class="mt-1 text-2xl font-black">${t(n)}</h2></div>
    ${r?`<button class="text-sm font-bold text-[#be185d]" data-page="${t(i)}">${t(r)}</button>`:``}
  </div>`}var oe=()=>`<button data-action="trigger-alert" class="sos-pulse mx-auto flex h-36 w-36 flex-col items-center justify-center rounded-full border-[7px] border-white text-white shadow-xl transition hover:scale-[1.03] active:scale-95 sm:h-40 sm:w-40" aria-label="Simuler une alerte SOS">
  <span class="text-3xl font-black tracking-wide">SOS</span><span class="mt-1 text-xs font-semibold">Appui de test</span>
</button>`,se=({name:e,status:n,battery:r})=>L(`
  <div class="flex items-center justify-between gap-3"><h2 class="font-extrabold">État du dispositif</h2>${F(`Simulation`,`gray`)}</div>
  <div class="mt-5 flex items-center gap-4">
    <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fce7f3] text-2xl">⌁</div>
    <div class="flex-1"><p class="font-bold">${t(e)}</p><p class="mt-1 text-sm text-[#9b6b82]">${t(n)}</p></div>
  </div>
  <div class="mt-5 rounded-xl bg-[#fff5f9] p-3 text-sm text-[#9b6b82]">Batterie : <strong class="text-[#4a1d36]">${Number(r)} % fictif</strong>
    <div class="mt-2 h-2 overflow-hidden rounded-full bg-[#f9d5e5]"><div class="h-full rounded-full bg-[#ec4899]" style="width:${Number(r)}%"></div></div>
  </div>`);function R(e,{manageable:n=!1}={}){let r=n?`${e.relation} · ${e.phone}`:e.relation,i=n?I({label:e.receivesAlerts?`Activé`:`Désactivé`,action:`toggle-contact`,variant:`soft`,className:`text-xs`,data:{id:e.id}}):F(e.receivesAlerts?`Alerte test`:`Inactif`,e.receivesAlerts?`green`:`gray`);return`<article class="flex items-center gap-3 rounded-2xl border border-[#f9d5e5] p-3">
    <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fce7f3] font-bold text-[#be185d]">${t(e.initials)}</div>
    <div class="min-w-0 flex-1"><p class="truncate font-bold">${t(e.name)}</p><p class="text-sm text-[#9b6b82]">${t(r)}</p></div>
    ${i}
  </article>`}var ce=e=>L(`
  <div class="flex items-center justify-between"><h2 class="font-extrabold">Mes contacts de confiance</h2><button class="text-sm font-bold text-[#be185d]" data-page="profile">Gérer</button></div>
  <div class="mt-4 space-y-3">${e.map(e=>R(e)).join(``)}</div>`),z=[`♡`,`⌘`,`☼`];function B(e,{variant:n=`plain`,index:r=0}={}){return L(`${n===`tile`?`<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fce7f3] text-lg text-[#be185d]">${z[r%z.length]}</div>
       <p class="mt-4 text-xs font-extrabold uppercase tracking-wider text-[#be185d]">${t(e.category)}</p>`:F(e.category)}
    <h3 class="mt-3 font-extrabold">${t(e.title)}</h3>
    <p class="mt-2 text-sm leading-6 text-[#9b6b82]">${t(e.description)}</p>
    <p class="mt-3 text-xs text-[#a67b90]">${t(e.readTime)} de lecture</p>`)}function V(e,t){t.services.alerts.create(),t.toast(`Alerte de démonstration créée — aucune notification n’a été envoyée.`),t.store.get().page===`alerts`&&t.refresh()}function le(){return`
    <section
      aria-labelledby="maak-presentation-title"
      class="relative isolate overflow-hidden rounded-[28px] border border-[#f4cfe0] bg-white shadow-[0_14px_45px_rgba(190,24,93,0.09)]"
    >
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#fce7f3] opacity-80 blur-3xl"
      ></div>

      <div class="relative p-4 sm:p-6 lg:p-7">

        <div class="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fce7f3] to-[#fbcfe8] text-2xl text-[#be185d]" aria-hidden="true">
              ♡
            </div>

            <div>
              <p class="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#be185d]">
                DÉCOUVRIR NOTRE PROJET
              </p>

              <h2
                id="maak-presentation-title"
                class="mt-1 text-xl font-black tracking-tight text-[#4a1d36] sm:text-2xl"
              >
                MAAK, bien plus qu’une application
              </h2>
            </div>
          </div>

          <span class="inline-flex items-center gap-2 rounded-full border border-[#f4d8e6] bg-[#fff5f9] px-3 py-2 text-xs font-bold text-[#9b4770]">
            <span class="h-2 w-2 rounded-full bg-[#ec4899]" aria-hidden="true"></span>
            Présentation du projet
          </span>
        </div>

        <div class="overflow-hidden rounded-[22px] bg-[#321225] shadow-[0_12px_35px_rgba(74,29,54,0.15)] ring-1 ring-[#e9b9d0]">
          <video
            id="maak-presentation-video"
            class="block aspect-video w-full object-contain"
            controls
            muted
            autoplay
            playsinline
            preload="auto"
            aria-label="Vidéo de présentation du projet MAAK"
          >
            <source src="/video_home.mp4" type="video/mp4" />
            Votre navigateur ne prend pas en charge la lecture vidéo.
          </video>
        </div>

        <div class="mt-5 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div class="min-w-0">
            <p class="text-xs font-extrabold uppercase tracking-[.16em] text-[#be185d]">
              Notre vision
            </p>

            <h3 class="mt-2 text-lg font-black leading-snug text-[#632846] sm:text-xl">
              La technologie au service de la sécurité des femmes.
            </h3>

            <p class="mt-2 max-w-2xl text-sm leading-7 text-[#9b6b82]">
              MAAK est un projet conçu pour contribuer à la prévention
              des violences faites aux femmes. L’application associe un
              parcours d’alerte SOS, des contacts de confiance, des
              ressources de sensibilisation et un concept de bracelet
              connecté pour faciliter l’accès à l’aide.
            </p>
          </div>

          <div class="grid grid-cols-3 gap-2 lg:w-[250px]">
            <div class="rounded-2xl border border-[#f7d9e7] bg-[#fff7fb] px-2 py-4 text-center">
              <div class="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#fce7f3] text-xl text-[#be185d]" aria-hidden="true">♡</div>
              <p class="mt-2 text-xs font-extrabold text-[#632846]">Prévention</p>
            </div>

            <div class="rounded-2xl border border-[#f7d9e7] bg-[#fff7fb] px-2 py-4 text-center">
              <div class="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#fce7f3] text-xl text-[#be185d]" aria-hidden="true">⌁</div>
              <p class="mt-2 text-xs font-extrabold text-[#632846]">Innovation</p>
            </div>

            <div class="rounded-2xl border border-[#f7d9e7] bg-[#fff7fb] px-2 py-4 text-center">
              <div class="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#fce7f3] text-xl text-[#be185d]" aria-hidden="true">✧</div>
              <p class="mt-2 text-xs font-extrabold text-[#632846]">Soutien</p>
            </div>
          </div>
        </div>

        <div class="mt-5 flex items-start gap-3 rounded-2xl border border-[#f4d8e6] bg-[#fff7fb] p-4">
          <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-[#be185d]" aria-hidden="true">ⓘ</span>

          <p class="text-xs leading-6 text-[#9b6b82]">
            <strong class="text-[#632846]">À propos de cette démonstration :</strong>
            certaines fonctionnalités sont simulées. Le bracelet,
            les notifications et les alertes réelles ne sont pas
            considérés comme opérationnels sans intégration effective
            et validation technique.
          </p>
        </div>
      </div>
    </section>
  `}function H(){return`
    <section aria-labelledby="maak-articles-title" class="space-y-4">
      <div class="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p class="text-xs font-extrabold uppercase tracking-[.18em] text-[#be185d]">
            COMPRENDRE ET AGIR
          </p>

          <h2 id="maak-articles-title" class="mt-1 text-xl font-black tracking-tight text-[#632846] sm:text-2xl">
            Articles à découvrir
          </h2>

          <p class="mt-1 max-w-xl text-sm leading-6 text-[#9b6b82]">
            Des repères pour mieux comprendre les violences et les relations respectueuses.
          </p>
        </div>

        <span class="rounded-full border border-pink-100 bg-white px-3 py-1.5 text-xs font-bold text-[#be185d]">
          3 articles
        </span>
      </div>

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        ${[{category:`Sensibilisation`,title:`Reconnaître les signes d’une relation saine`,description:`Comprendre les limites, le respect mutuel, le consentement et les signes d’une relation qui devient préoccupante.`,icon:`♡`,color:`from-pink-50 to-rose-100`,readTime:`5 min de lecture`},{category:`Droits et prévention`,title:`Le consentement : une notion essentielle`,description:`Pourquoi le consentement, le respect des choix et la liberté de dire non sont fondamentaux.`,icon:`✧`,color:`from-purple-50 to-pink-100`,readTime:`4 min de lecture`},{category:`Bien-être`,title:`Comment soutenir une personne victime de violences`,description:`Écouter sans juger, respecter ses décisions et l’aider à rechercher un accompagnement adapté.`,icon:`🤝`,color:`from-rose-50 to-orange-50`,readTime:`6 min de lecture`}].map(e=>`
          <article class="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#f4d8e6] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-100/70">
            <div class="bg-gradient-to-br ${e.color} p-5">
              <div class="flex items-center justify-between gap-3">
                <span class="rounded-full border border-white/80 bg-white/80 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-[#9b4770]">
                  ${e.category}
                </span>

                <span class="text-2xl text-[#be185d]" aria-hidden="true">
                  ${e.icon}
                </span>
              </div>

              <div class="mt-4 h-1 w-12 rounded-full bg-[#ec4899]"></div>
            </div>

            <div class="flex flex-1 flex-col p-5">
              <h3 class="text-base font-extrabold leading-6 text-[#632846]">
                ${e.title}
              </h3>

              <p class="mt-2 flex-1 text-sm leading-6 text-[#9b6b82]">
                ${e.description}
              </p>

              <div class="mt-5 flex items-center justify-between gap-3 border-t border-pink-50 pt-4">
                <span class="text-xs text-[#a67b90]">
                  ${e.readTime}
                </span>

                <span class="text-sm font-bold text-[#be185d]" aria-hidden="true">
                  MAAK ✧
                </span>
              </div>
            </div>
          </article>
        `).join(``)}
      </div>

      <p class="text-xs leading-5 text-[#a67b90]">
        Ces textes sont des contenus de démonstration. Ils devront
        être vérifiés et associés à des sources fiables avant publication.
      </p>
    </section>
  `}function U(){return`
    <section aria-labelledby="maak-women-title" class="space-y-4">
      <div>
        <p class="text-xs font-extrabold uppercase tracking-[.18em] text-[#be185d]">
          DES PARCOURS QUI INSPIRENT
        </p>

        <h2 id="maak-women-title" class="mt-1 text-xl font-black tracking-tight text-[#632846] sm:text-2xl">
          Des femmes qui font la différence
        </h2>

        <p class="mt-1 max-w-2xl text-sm leading-6 text-[#9b6b82]">
          Découvre des parcours de femmes engagées pour les droits,
          l’éducation, la paix et la participation des femmes dans la société.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        ${[{name:`Wided Bouchamaoui`,role:`Entrepreneuriat tunisien`,description:`Figure tunisienne du monde des affaires, elle a participé au Quartet du dialogue national tunisien, récompensé par le prix Nobel de la paix en 2015.`,initials:`WB`,color:`from-rose-100 to-pink-200`},{name:`Tawakkol Karman`,role:`Droits humains et liberté`,description:`Journaliste et militante yéménite, elle a reçu le prix Nobel de la paix en 2011 pour son engagement en faveur des droits et de la non-violence.`,initials:`TK`,color:`from-purple-100 to-pink-200`},{name:`Malala Yousafzai`,role:`Éducation des filles`,description:`Militante pakistanaise pour le droit des filles à l’éducation, elle est devenue la plus jeune lauréate du prix Nobel de la paix.`,initials:`MY`,color:`from-orange-100 to-rose-200`}].map(e=>`
          <article class="group relative overflow-hidden rounded-2xl border border-[#f4d8e6] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-100/70">
            <div aria-hidden="true" class="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#fff5f9] transition-colors group-hover:bg-pink-100/70"></div>

            <div class="relative flex items-center gap-4">
              <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${e.color} text-lg font-black text-[#632846] ring-4 ring-white shadow-sm" aria-hidden="true">
                ${e.initials}
              </div>

              <div class="min-w-0">
                <h3 class="font-extrabold leading-5 text-[#632846]">
                  ${e.name}
                </h3>

                <p class="mt-1 text-xs font-semibold leading-5 text-[#be185d]">
                  ${e.role}
                </p>
              </div>
            </div>

            <p class="relative mt-5 text-sm leading-6 text-[#9b6b82]">
              ${e.description}
            </p>

            <div class="mt-4 flex items-center gap-2 border-t border-pink-50 pt-4 text-xs font-bold text-[#be185d]">
              <span aria-hidden="true">✧</span>
              <span>Un parcours inspirant</span>
            </div>
          </article>
        `).join(``)}
      </div>

      <p class="text-xs leading-5 text-[#a67b90]">
        Les portraits sont des résumés introductifs. Des références
        vérifiées devront être ajoutées pour la version finale.
      </p>
    </section>
  `}function ue({user:e,resources:t=[]}){return{id:`home`,watch:[],render({services:n}){let r=(n.contacts.list()||[]).slice(0,2);return`
        <section class="page space-y-7">

          <!-- 1. En-tête d'accueil -->
          ${P({eyebrow:`Ton espace de confiance`,title:`Bonjour, ${e?.firstName||e?.name?.trim().split(/\s+/)[0]||`Bienvenue`}`,titleSuffix:` <span aria-hidden="true">🌸</span>`,subtitle:`Tu mérites d’être écoutée, respectée et en sécurité.`,actionHtml:F(`Mode prototype`,`amber`)})}

          <!-- 2. Présentation officielle de MAAK -->
          ${le()}

          <!-- 3. SOS et état du dispositif -->
          <div class="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">

            ${L(`
              <div class="mb-4 inline-flex items-center gap-2 rounded-full bg-[#fce7f3] px-3 py-2 text-xs font-bold text-[#be185d]">
                <span class="h-2 w-2 rounded-full bg-[#ec4899]" aria-hidden="true"></span>
                Démonstration interactive
              </div>

              ${oe()}

              <h2 class="mt-7 text-xl font-extrabold text-[#632846]">
                Besoin d’aide ?
              </h2>

              <p class="mt-2 max-w-sm text-sm leading-6 text-[#9b6b82]">
                Teste le parcours SOS sans contacter qui que ce soit.
                Aucune alerte réelle ne sera envoyée par cette démonstration.
              </p>

              ${I({label:`Tester une alerte`,action:`trigger-alert`,className:`mt-5 w-full max-w-xs`})}
            `,`flex flex-col items-center px-5 py-7 text-center sm:px-8`)}

            <div class="space-y-5">
              ${se({name:`Bracelet MAAK`,status:`Aucun appareil connecté`,battery:82})}

              ${ce(r)}
            </div>
          </div>

          <!-- 4. Ressources de sensibilisation -->
          <section aria-labelledby="maak-resources-title">
            ${ae({eyebrow:`S’informer, à son rythme`,title:`Petits repères utiles`,linkLabel:`Voir les ressources`,linkPage:`profile`})}

            ${t.length?`<div class="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    ${t.map((e,t)=>B(e,{variant:`tile`,index:t})).join(``)}
                  </div>`:`<div class="rounded-2xl border border-dashed border-pink-200 bg-white p-6 text-center">
                    <p class="text-sm leading-6 text-[#9b6b82]">
                      Les ressources de sensibilisation seront affichées ici dès qu’elles seront disponibles.
                    </p>
                  </div>`}
          </section>

          <!-- 5. Articles de sensibilisation -->
          ${H()}

          <!-- 6. Femmes inspirantes -->
          ${U()}

          <!-- 7. Rappel de sécurité -->
          <footer class="rounded-2xl border border-[#f4d8e6] bg-gradient-to-r from-[#fff5f9] to-white p-4 sm:p-5">
            <div class="flex items-start gap-3">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm" aria-hidden="true">
                ♡
              </div>

              <div>
                <h2 class="font-extrabold text-[#632846]">
                  Tu mérites le respect et la sécurité.
                </h2>

                <p class="mt-1 text-sm leading-6 text-[#9b6b82]">
                  MAAK est un prototype de sensibilisation et d’orientation.
                  En cas de danger immédiat, recherche une aide d’urgence
                  adaptée à ta situation. Les fonctionnalités simulées
                  ne remplacent pas les services d’urgence ni les
                  associations spécialisées.
                </p>
              </div>
            </div>
          </footer>

        </section>
      `},actions:{"trigger-alert":V}}}var de=`/assets/video_game-BHOf_Dgc.mp4`;function fe(){let e=null;return{id:`game`,watch:[],render(){return`
        <section
          class="page -mx-4 -mt-4 flex min-h-[calc(100dvh-64px)] flex-col overflow-hidden bg-[#fff7fb] sm:-mx-6 sm:-mt-6"
          aria-label="Présentation vidéo du concept MAAK"
        >
          <header class="flex shrink-0 items-center gap-3 border-b border-[#f4d8e6] bg-white px-4 py-3 sm:px-6">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fce7f3] text-xl text-[#be185d]">
              <span aria-hidden="true">♡</span>
            </div>

            <div class="min-w-0">
              <h1 class="truncate text-base font-black text-[#632846] sm:text-lg">
                Découvrir MAAK
              </h1>
              <p class="text-xs text-[#9b6b82]">
                Une expérience immersive
              </p>
            </div>
          </header>

          <div
            id="maak-video-container"
            class="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-[#321225]"
          >
            <video
              id="maak-game-video"
              class="absolute inset-0 h-full w-full object-contain"
              playsinline
              
              preload="auto"
              aria-label="Vidéo de présentation MAAK"
            >
              <source src="${de}" type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture vidéo.
            </video>

            <button
              id="maak-start-video"
              type="button"
              aria-label="Lire la vidéo"
              class="group absolute left-1/2 top-1/2 z-10 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-gradient-to-br from-[#ec4899] to-[#be185d] text-white shadow-[0_8px_35px_rgba(190,24,93,0.45)] transition duration-300 hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-200 active:scale-95 sm:h-[88px] sm:w-[88px]"
            >
              <svg
                class="ml-1 h-8 w-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 4.8c0-.8.9-1.3 1.6-.9l11 6.5a1.8 1.8 0 0 1 0 3.1l-11 6.5c-.7.4-1.6-.1-1.6-.9V4.8Z" />
              </svg>
            </button>

            <div
              id="maak-video-error"
              class="absolute bottom-4 left-4 right-4 z-20 hidden rounded-xl bg-black/80 px-4 py-3 text-center text-sm text-white"
              role="alert"
            >
              Impossible de lire la vidéo. Vérifie le fichier et réessaie.
            </div>
          </div>
        </section>
      `},actions:{},mount(){e&&=(e(),null);let t=document.getElementById(`maak-game-video`),n=document.getElementById(`maak-start-video`),r=document.getElementById(`maak-video-error`);if(!t||!n){console.error(`MAAK : vidéo ou bouton introuvable. Vérifie que render() est inséré dans le DOM avant mount().`);return}let i=!1,a=e=>{r&&(r.textContent=e,r.classList.remove(`hidden`))},o=()=>{r?.classList.add(`hidden`)},s=async e=>{if(e?.preventDefault(),!i){o();try{t.readyState===0&&t.load(),await t.play(),n.classList.add(`hidden`)}catch(e){console.error(`Erreur de lecture MAAK :`,e),n.classList.remove(`hidden`),t.error?a(`Le fichier vidéo ne peut pas être chargé. Vérifie son chemin et son format MP4.`):a(`La lecture a échoué. Clique à nouveau sur le bouton pour réessayer.`)}}},c=()=>{n.classList.remove(`hidden`)},l=()=>{n.classList.remove(`hidden`),a(`Impossible de charger la vidéo. Vérifie que video_game.mp4 est accessible.`),console.error(`Erreur vidéo :`,t.error)};n.addEventListener(`click`,s),t.addEventListener(`ended`,c),t.addEventListener(`error`,l),e=()=>{i=!0,n.removeEventListener(`click`,s),t.removeEventListener(`ended`,c),t.removeEventListener(`error`,l)}},unmount(){e&&=(e(),null);let t=document.getElementById(`maak-game-video`);t&&t.pause()}}}var pe=e=>`<div class="rounded-2xl border border-[#f1dfb8] bg-[#fff8e9] p-4 text-sm leading-6 text-[#88611d]">${e}</div>`,me=({title:e,text:n})=>`<div class="card px-6 py-12 text-center"><div class="text-4xl">🌸</div><h2 class="mt-3 text-lg font-extrabold">${t(e)}</h2><p class="mt-2 text-sm text-[#9b6b82]">${t(n)}</p></div>`,he=e=>L(`
  <div class="flex flex-wrap items-start justify-between gap-3">
    <div class="flex items-start gap-3">
      <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fce7f3] text-xl text-[#be185d]">↗</div>
      <div><p class="font-bold">${t(e.type)}</p><p class="mt-1 text-sm text-[#9b6b82]">${t(e.time)}</p></div>
    </div>
    ${F(e.status,`amber`)}
  </div>
  <div class="mt-4 rounded-xl bg-[#fff5f9] p-3 text-sm text-[#8c5d75]">⌖ ${t(e.location)}</div>
  <p class="mt-3 text-xs font-semibold text-[#9a6a20]">DÉMONSTRATION — aucune notification n’a été envoyée.</p>`,`p-4 sm:p-5`),W=[],ge=1,G=e=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),K=e=>{let t=Math.max(0,Math.floor(e||0)),n=Math.floor(t/60),r=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`},q=(e,t,n=`text-xl`)=>L(`
    <p class="text-sm text-[#9b6b82]">${e}</p>
    <p class="mt-2 ${n} font-black text-[#632846]">${t}</p>
  `);function J(e=1){return Array.from({length:36},(t,n)=>`
      <span
        style="height:${10+(n*17+e*13+n*e)%29}px"
        class="w-[3px] shrink-0 rounded-full bg-current ${n%3==0?`opacity-100`:`opacity-50`}">
      </span>
    `).join(``)}function Y(e){let t=G(e.name);return`
    <article class="group relative overflow-hidden rounded-[24px]
      border border-[#f4d8e6] bg-white p-5
      shadow-[0_8px_30px_rgba(157,55,105,0.06)]
      transition duration-300 hover:-translate-y-1
      hover:shadow-[0_15px_35px_rgba(157,55,105,0.13)]">

      <div class="absolute -right-10 -top-12 h-32 w-32 rounded-full
        bg-[#fff0f6] transition group-hover:scale-125"></div>

      <div class="relative flex items-start justify-between gap-3">
        <div class="flex min-w-0 items-center gap-3">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center
            rounded-2xl bg-gradient-to-br from-[#fce7f3] to-[#fbcfe8]
            text-[#be185d]">
            <svg width="23" height="23" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round" stroke-linejoin="round"
              aria-hidden="true">
              <rect x="9" y="2" width="6" height="12" rx="3"/>
              <path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8"/>
            </svg>
          </div>

          <div class="min-w-0">
            <h3 class="truncate font-bold text-[#632846]">${t}</h3>
            <p class="mt-1 text-xs text-[#a17b90]">${G(e.date)}</p>
          </div>
        </div>

        <span class="shrink-0 rounded-full bg-[#fdf2f8] px-2.5 py-1
          text-[10px] font-bold text-[#be185d]">
          AUDIO
        </span>
      </div>

      <div class="mt-5 flex items-center gap-3 rounded-2xl
        bg-[#fff7fb] px-3 py-4 text-[#db2777]">

        <button type="button"
          data-audio-play="${e.id}"
          aria-label="Écouter ${t}"
          class="flex h-10 w-10 shrink-0 items-center justify-center
            rounded-full bg-gradient-to-br from-[#ec4899] to-[#be185d]
            text-white shadow-lg shadow-pink-200 transition hover:scale-105">
          <svg width="17" height="17" viewBox="0 0 24 24"
            fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>

        <div class="min-w-0 flex-1">
          <div class="flex h-9 items-center justify-between gap-[3px]
            overflow-hidden" aria-label="Visualisation sonore">
            ${J(e.id)}
          </div>

          <div class="mt-2 flex justify-between gap-2 text-[11px]
            font-medium text-[#ad8097]">
            <span data-audio-time="${e.id}">00:00</span>
            <span>${K(e.duration)}</span>
          </div>
        </div>
      </div>

      <div class="mt-4 flex items-center justify-between gap-2">
        <span class="flex items-center gap-1.5 text-xs text-[#9b6b82]">
          <span class="h-2 w-2 rounded-full bg-[#ec4899]"></span>
          Enregistrement audio
        </span>

        <button type="button"
          data-audio-delete="${e.id}"
          class="rounded-xl px-3 py-2 text-xs font-semibold
            text-[#be185d] transition hover:bg-[#fff0f6]"
          aria-label="Supprimer ${t}">
          Supprimer
        </button>
      </div>

      <audio class="hidden"
        data-audio-source="${e.id}"
        preload="metadata"
        src="${e.url}"></audio>
    </article>
  `}function _e(){let e=(W.reduce((e,t)=>e+t.blob.size,0)/1048576).toFixed(2);return`
    <section class="space-y-5" aria-labelledby="recordings-title">

      <div class="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.2em]
            text-[#d94683]">Tes souvenirs audio</p>

          <h2 id="recordings-title" class="mt-2 text-2xl font-black
            tracking-tight text-[#632846]">
            Mes enregistrements
          </h2>

          <p class="mt-1 text-sm text-[#9b6b82]">
            Retrouve et réécoute facilement tes enregistrements.
          </p>
        </div>

        <button type="button" data-record-start
          class="inline-flex items-center gap-2 rounded-2xl
            bg-gradient-to-r from-[#d94683] to-[#ec4899]
            px-5 py-3 text-sm font-bold text-white
            shadow-lg shadow-pink-200 transition hover:-translate-y-0.5
            hover:shadow-xl active:scale-95">
          <span class="text-lg" aria-hidden="true">●</span>
          Nouvel enregistrement
        </button>
      </div>

      <div class="relative overflow-hidden rounded-[28px]
        bg-gradient-to-br from-[#831843] via-[#be185d] to-[#ec4899]
        p-6 text-white shadow-xl shadow-pink-200 sm:p-8">

        <div class="pointer-events-none absolute -right-10 -top-16
          h-52 w-52 rounded-full border-[30px] border-white/10"></div>

        <div class="pointer-events-none absolute -bottom-20 right-24
          h-40 w-40 rounded-full bg-white/5 blur-xl"></div>

        <div class="relative grid gap-6 sm:grid-cols-[1fr_auto]
          sm:items-center">
          <div>
            <span class="inline-flex items-center gap-2 rounded-full
              border border-white/20 bg-white/10 px-3 py-1.5
              text-xs font-semibold">
              <span class="h-2 w-2 rounded-full bg-pink-200"></span>
              TON ESPACE AUDIO
            </span>

            <h3 class="mt-4 max-w-sm text-2xl font-black leading-tight
              sm:text-3xl">
              Ta voix mérite d'être entendue.
            </h3>

            <p class="mt-2 max-w-md text-sm leading-6 text-white/80">
              Enregistre un moment important et retrouve-le ici,
              quand tu en as besoin.
            </p>

            <button type="button" data-record-start
              class="mt-5 rounded-xl bg-white px-5 py-3
                text-sm font-bold text-[#9d174d] shadow-lg
                transition hover:bg-pink-50">
              + Enregistrer maintenant
            </button>
          </div>

          <div class="mx-auto flex h-32 w-32 items-center justify-center
            rounded-full border border-white/25 bg-white/10 sm:mx-0">
            <div class="flex h-20 w-20 items-center justify-center
              rounded-full bg-white/15">
              <svg width="42" height="42" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="1.4"
                stroke-linecap="round" stroke-linejoin="round"
                aria-hidden="true">
                <rect x="9" y="2" width="6" height="12" rx="3"/>
                <path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div data-record-panel class="hidden rounded-[24px]
        border border-[#f4d8e6] bg-white p-5
        shadow-[0_8px_30px_rgba(157,55,105,0.07)]">

        <div class="flex items-center justify-between gap-3">
          <div>
            <h3 class="font-bold text-[#632846]">Nouvel enregistrement</h3>
            <p class="mt-1 text-xs text-[#9b6b82]">
              Autorise le microphone pour commencer.
            </p>
          </div>

          <span data-record-status
            class="rounded-full bg-gray-100 px-3 py-1
              text-xs font-semibold text-gray-600">
            Prêt
          </span>
        </div>

        <div class="my-6 flex flex-col items-center text-center">
          <div data-record-orb
            class="flex h-24 w-24 items-center justify-center
              rounded-full bg-[#fff0f6] text-[#d94683] transition">
            <svg width="36" height="36" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="1.7"
              stroke-linecap="round" stroke-linejoin="round"
              aria-hidden="true">
              <rect x="9" y="2" width="6" height="12" rx="3"/>
              <path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8"/>
            </svg>
          </div>

          <p data-record-timer
            class="mt-4 text-4xl font-black tabular-nums
              tracking-wider text-[#632846]">00:00</p>

          <p data-record-hint class="mt-2 text-sm text-[#9b6b82]">
            Appuie sur le bouton pour démarrer.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-3">
          <button type="button" data-record-toggle
            class="rounded-xl bg-gradient-to-r from-[#d94683] to-[#ec4899]
              px-5 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200">
            ● Démarrer
          </button>

          <button type="button" data-record-save disabled
            class="rounded-xl bg-gray-100 px-5 py-3 text-sm font-bold
              text-gray-400 disabled:cursor-not-allowed">
            Enregistrer
          </button>

          <button type="button" data-record-cancel
            class="rounded-xl px-4 py-3 text-sm font-semibold
              text-[#9b6b82] hover:bg-[#fff0f6]">
            Fermer
          </button>
        </div>

        <p data-record-error role="alert"
          class="mt-4 hidden rounded-xl bg-red-50 p-3 text-sm text-red-700">
        </p>
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <div class="rounded-2xl border border-[#f4d8e6] bg-white px-4 py-3">
          <p class="text-xs text-[#9b6b82]">Enregistrements sauvegardés</p>
          <p data-record-count class="mt-1 text-xl font-black text-[#632846]">
            ${W.length}
          </p>
        </div>

        <div class="rounded-2xl border border-[#f4d8e6] bg-white px-4 py-3">
          <p class="text-xs text-[#9b6b82]">Espace audio utilisé</p>
          <p data-record-size class="mt-1 text-xl font-black text-[#632846]">
            ${e} Mo
          </p>
        </div>
      </div>

      <div data-record-list class="grid gap-4 md:grid-cols-2">
        ${W.length?W.map(Y).join(``):`
            <div class="col-span-full rounded-[24px] border-2
              border-dashed border-[#f1c9dc] bg-white/70 px-5 py-10 text-center">
              <div class="mx-auto flex h-16 w-16 items-center justify-center
                rounded-3xl bg-[#fff0f6] text-3xl">♫</div>

              <h3 class="mt-4 font-bold text-[#632846]">
                Aucun enregistrement pour le moment
              </h3>

              <p class="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#9b6b82]">
                Ton espace audio est prêt. Crée ton premier enregistrement
                pour le retrouver facilement ici.
              </p>

              <button type="button" data-record-start
                class="mt-5 rounded-xl bg-[#fce7f3] px-5 py-3
                  text-sm font-bold text-[#be185d] hover:bg-[#fbcfe8]">
                Créer mon premier enregistrement
              </button>
            </div>
          `}
      </div>
    </section>
  `}function ve(){return`
    <section class="space-y-5" aria-labelledby="voice-ai-title">

      <div>
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#d94683]">
          Intelligence artificielle
        </p>
        <h2 id="voice-ai-title" class="mt-2 text-2xl font-black text-[#632846]">
          Analyse vocale par IA
        </h2>
        <p class="mt-1 text-sm leading-6 text-[#9b6b82]">
          Découvre un exemple de rapport vocal interactif.
        </p>
      </div>

      <div class="relative overflow-hidden rounded-[28px]
        border border-[#f3d4e4] bg-gradient-to-br from-white
        via-[#fff7fb] to-[#fce7f3] p-5
        shadow-[0_12px_40px_rgba(157,55,105,0.08)] sm:p-7">

        <div class="pointer-events-none absolute -right-16 -top-16
          h-56 w-56 rounded-full bg-[#fbcfe8]/40 blur-3xl"></div>

        <div class="relative grid gap-7 lg:grid-cols-[1fr_.85fr] lg:items-center">
          <div>
            <div class="flex h-14 w-14 items-center justify-center
              rounded-2xl bg-gradient-to-br from-[#ec4899] to-[#9d174d]
              text-white shadow-lg shadow-pink-200">
              <svg width="28" height="28" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="1.7"
                stroke-linecap="round" stroke-linejoin="round"
                aria-hidden="true">
                <path d="M12 3v18M8 7v10M4 10v4M16 6v12M20 9v6"/>
              </svg>
            </div>

            <h3 class="mt-5 text-xl font-black text-[#632846] sm:text-2xl">
              Mieux comprendre les caractéristiques de la voix
            </h3>

            <p class="mt-3 max-w-lg text-sm leading-6 text-[#9b6b82]">
              Sélectionne un enregistrement ou lance l'exemple fictif
              pour découvrir les résultats possibles d'une analyse audio.
            </p>

            <label for="voice-analysis-source"
              class="mb-2 mt-6 block text-sm font-bold text-[#632846]">
              Enregistrement à analyser
            </label>

            <select id="voice-analysis-source"
              class="w-full rounded-2xl border border-[#f0c9dc] bg-white
                px-4 py-3.5 text-sm text-[#632846] outline-none
                focus:border-[#d94683] focus:ring-4 focus:ring-pink-100">
              <option value="demo">Exemple de démonstration</option>
              ${W.map(e=>`
                <option value="${e.id}">
                  ${G(e.name)}
                </option>
              `).join(``)}
            </select>

            <p class="mt-2 text-xs leading-5 text-[#a17b90]">
              Les résultats affichés sont simulés, même si tu sélectionnes
              un véritable enregistrement.
            </p>

            <button type="button" data-voice-analyze
              class="mt-5 inline-flex w-full items-center justify-center gap-2
                rounded-2xl bg-gradient-to-r from-[#be185d] to-[#ec4899]
                px-5 py-3.5 text-sm font-extrabold text-white
                shadow-lg shadow-pink-200 transition hover:-translate-y-0.5
                active:scale-[.98] sm:w-auto">
              ✦ Lancer l'analyse IA
            </button>

            <p data-voice-loading role="status"
              class="mt-3 hidden text-sm font-semibold text-[#be185d]">
              <span class="mr-2 inline-block animate-pulse">●</span>
              Simulation de l'analyse en cours…
            </p>
          </div>

          <div class="rounded-[24px] border border-white bg-white/85
            p-5 shadow-[0_10px_35px_rgba(157,55,105,0.08)] sm:p-6">

            <p class="text-xs font-bold uppercase tracking-wider text-[#d94683]">
              Aperçu du rapport
            </p>
            <h3 class="mt-1 font-extrabold text-[#632846]">
              Profil vocal illustratif
            </h3>

            <div class="mt-6 flex h-20 items-center justify-center gap-1.5
              overflow-hidden rounded-2xl bg-[#fff7fb] px-3 text-[#d94683]">
              ${J(7)}
            </div>

            <div class="mt-5 grid grid-cols-2 gap-3">
              <div class="rounded-2xl bg-[#fff7fb] p-3.5">
                <p class="text-xs text-[#9b6b82]">Durée d'exemple</p>
                <p class="mt-1 text-xl font-black text-[#632846]">00:24</p>
              </div>
              <div class="rounded-2xl bg-[#fff7fb] p-3.5">
                <p class="text-xs text-[#9b6b82]">Indicateurs</p>
                <p class="mt-1 text-xl font-black text-[#632846]">04</p>
              </div>
            </div>

            <div class="mt-4 rounded-2xl border border-[#f4d8e6]
              bg-white p-3.5">
              <p class="text-sm font-bold text-[#632846]">
                Un rapport facile à comprendre
              </p>
              <p class="mt-1 text-xs leading-5 text-[#9b6b82]">
                Visualisations et indicateurs présentés dans une interface simple.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div data-voice-results class="hidden space-y-4" aria-live="polite">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p class="text-xs font-bold uppercase tracking-widest text-[#d94683]">
              Résultats simulés
            </p>
            <h3 class="mt-1 text-xl font-black text-[#632846]">
              Rapport d'analyse vocale
            </h3>
          </div>
          <span class="rounded-full bg-[#fce7f3] px-3 py-1.5
            text-xs font-bold text-[#be185d]">
            Maquette IA
          </span>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article class="rounded-[22px] border border-[#f4d8e6] bg-white p-5">
            <p class="text-sm font-semibold text-[#9b6b82]">Rythme vocal</p>
            <p class="mt-3 text-2xl font-black text-[#632846]">Modéré</p>
            <div class="mt-3 h-2 overflow-hidden rounded-full bg-[#fce7f3]">
              <div class="h-full w-[64%] rounded-full bg-gradient-to-r from-[#d94683] to-[#ec4899]"></div>
            </div>
            <p class="mt-2 text-xs text-[#9b6b82]">Exemple visuel : 64/100</p>
          </article>

          <article class="rounded-[22px] border border-[#f4d8e6] bg-white p-5">
            <p class="text-sm font-semibold text-[#9b6b82]">Pauses détectées</p>
            <p class="mt-3 text-2xl font-black text-[#632846]">3 pauses</p>
            <p class="mt-3 text-xs leading-5 text-[#9b6b82]">
              Valeur fictive pour illustrer le rapport.
            </p>
          </article>

          <article class="rounded-[22px] border border-[#f4d8e6] bg-white p-5">
            <p class="text-sm font-semibold text-[#9b6b82]">Volume sonore</p>
            <p class="mt-3 text-2xl font-black text-[#632846]">Variable</p>
            <p class="mt-3 text-xs leading-5 text-[#9b6b82]">
              Variation simulée de l'intensité audio.
            </p>
          </article>

          <article class="rounded-[22px] border border-[#f4d8e6] bg-white p-5">
            <p class="text-sm font-semibold text-[#9b6b82]">Qualité du signal</p>
            <p class="mt-3 text-2xl font-black text-[#632846]">À vérifier</p>
            <p class="mt-3 text-xs leading-5 text-[#9b6b82]">
              Une vraie mesure nécessiterait un traitement audio.
            </p>
          </article>
        </div>

        <div class="grid gap-4 lg:grid-cols-2">
          <article class="rounded-[24px] border border-[#f4d8e6] bg-white p-5 sm:p-6">
            <h4 class="font-extrabold text-[#632846]">Résumé illustratif</h4>
            <p class="mt-3 text-sm leading-7 text-[#806176]">
              Cet exemple illustre la présentation de caractéristiques
              mesurables comme le débit, les pauses et l'intensité.
              Ces données ne permettent pas, à elles seules, de conclure
              à un état émotionnel ou à une situation de danger.
            </p>
          </article>

          <article class="rounded-[24px] border border-[#f4d8e6]
            bg-gradient-to-br from-[#fff7fb] to-[#fce7f3] p-5 sm:p-6">
            <h4 class="font-extrabold text-[#632846]">Ta sécurité avant tout</h4>
            <p class="mt-3 text-sm leading-6 text-[#806176]">
              Cette démonstration ne détecte pas réellement la violence,
              le mensonge ou le danger. En cas de risque immédiat,
              contacte une personne de confiance ou les services d'urgence adaptés.
            </p>
          </article>
        </div>
      </div>

      <p class="rounded-2xl border border-[#f4d8e6] bg-white px-4 py-3
        text-xs leading-5 text-[#9b6b82]">
        <strong class="text-[#632846]">Transparence :</strong>
        aucun modèle d'IA n'analyse réellement la voix dans cette version.
        Les résultats du rapport sont fictifs.
      </p>
    </section>
  `}function ye(e){if(!e||e.dataset.initialized===`true`)return;e.dataset.initialized=`true`;let t=e.querySelector(`[data-record-panel]`),n=e.querySelector(`[data-record-list]`),r=e.querySelector(`[data-record-count]`),i=e.querySelector(`[data-record-size]`),a=e.querySelector(`[data-record-timer]`),o=e.querySelector(`[data-record-status]`),s=e.querySelector(`[data-record-hint]`),c=e.querySelector(`[data-record-error]`),l=e.querySelector(`[data-record-toggle]`),u=e.querySelector(`[data-record-save]`),d=e.querySelector(`[data-record-orb]`),f=e.querySelector(`[data-voice-analyze]`),p=e.querySelector(`[data-voice-loading]`),m=e.querySelector(`[data-voice-results]`);if(!t||!n)return;let h=null,g=null,_=[],v=0,y=0,b=null,x=null,S=!1,C=!1,w=null,T=e=>{c&&(c.textContent=e,c.classList.remove(`hidden`))},E=()=>{c&&(c.textContent=``,c.classList.add(`hidden`))},D=()=>{let e=S?y+Math.floor((Date.now()-v)/1e3):y;a&&(a.textContent=K(e))},O=()=>{g&&=(g.getTracks().forEach(e=>e.stop()),null)},k=()=>{b&&window.clearInterval(b),b=null,O(),S=!1,h=null},A=()=>{if(n&&(n.innerHTML=W.length?W.map(Y).join(``):`
          <div class="col-span-full rounded-[24px] border-2
            border-dashed border-[#f1c9dc] bg-white/70 px-5 py-10 text-center">
            <div class="mx-auto flex h-16 w-16 items-center justify-center
              rounded-3xl bg-[#fff0f6] text-3xl">♫</div>
            <h3 class="mt-4 font-bold text-[#632846]">
              Aucun enregistrement pour le moment
            </h3>
            <p class="mt-2 text-sm text-[#9b6b82]">
              Crée ton premier enregistrement audio.
            </p>
            <button type="button" data-record-start
              class="mt-5 rounded-xl bg-[#fce7f3] px-5 py-3
                text-sm font-bold text-[#be185d]">
              Créer mon premier enregistrement
            </button>
          </div>
        `),r&&(r.textContent=String(W.length)),i){let e=W.reduce((e,t)=>e+t.blob.size,0);i.textContent=`${(e/1048576).toFixed(2)} Mo`}let t=e.querySelector(`#voice-analysis-source`);if(t){let e=t.value;t.innerHTML=`
        <option value="demo">Exemple de démonstration</option>
        ${W.map(e=>`
          <option value="${e.id}">
            ${G(e.name)}
          </option>
        `).join(``)}
      `,[...t.options].some(t=>t.value===e)&&(t.value=e)}},j=()=>{k(),y=0,x=null,_=[],C=!1,a&&(a.textContent=`00:00`),o&&(o.textContent=`Prêt`),s&&(s.textContent=`Appuie sur le bouton pour démarrer.`),l&&(l.textContent=`● Démarrer`),u&&(u.disabled=!0,u.classList.add(`text-gray-400`)),d&&d.classList.remove(`animate-pulse`,`bg-pink-100`)},M=()=>{t.classList.remove(`hidden`),E(),t.scrollIntoView({behavior:`smooth`,block:`center`})},N=e=>{n.querySelectorAll(`audio`).forEach(t=>{t!==e&&(t.pause(),t.currentTime=0)}),n.querySelectorAll(`[data-audio-play]`).forEach(t=>{e?.dataset.audioSource!==t.dataset.audioPlay&&(t.innerHTML=`
          <svg width="17" height="17" viewBox="0 0 24 24"
            fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z"/>
          </svg>
        `)})};e.addEventListener(`click`,async r=>{let i=r.target instanceof Element?r.target:r.target?.parentElement;if(!i)return;if(i.closest(`[data-record-start]`)){M();return}if(i.closest(`[data-record-cancel]`)){S&&h?.state===`recording`?(C=!0,h.stop()):(j(),t.classList.add(`hidden`),E());return}let a=i.closest(`[data-audio-play]`);if(a){let e=a.dataset.audioPlay,t=n.querySelector(`[data-audio-source="${e}"]`);if(!t)return;if(t.paused){N(t);try{await t.play(),a.innerHTML=`<span class="text-lg">Ⅱ</span>`}catch{T(`Impossible de lire cet enregistrement.`)}}else t.pause(),a.innerHTML=`<span class="text-lg">▶</span>`;t.ontimeupdate=()=>{let r=n.querySelector(`[data-audio-time="${e}"]`);r&&(r.textContent=K(t.currentTime))},t.onended=()=>{a.innerHTML=`
          <svg width="17" height="17" viewBox="0 0 24 24"
            fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z"/>
          </svg>
        `};return}let c=i.closest(`[data-audio-delete]`);if(c){let e=Number(c.dataset.audioDelete),t=W.findIndex(t=>t.id===e);if(t!==-1){let r=n.querySelector(`[data-audio-source="${e}"]`);r&&(r.pause(),r.removeAttribute(`src`),r.load()),URL.revokeObjectURL(W[t].url),W.splice(t,1),A()}}else if(i.closest(`[data-record-toggle]`)){if(E(),S){y+=Math.floor((Date.now()-v)/1e3),h?.state===`recording`&&h.stop();return}if(!navigator.mediaDevices?.getUserMedia||typeof MediaRecorder>`u`){T(`Ce navigateur ne prend pas en charge l’enregistrement audio. Utilise une version récente de Chrome ou Edge sur HTTPS ou localhost.`);return}try{g=await navigator.mediaDevices.getUserMedia({audio:!0}),_=[],y=0,C=!1;let e=[`audio/webm;codecs=opus`,`audio/webm`,`audio/mp4`].find(e=>MediaRecorder.isTypeSupported(e)),n=new MediaRecorder(g,e?{mimeType:e}:void 0);h=n,n.ondataavailable=e=>{e.data.size>0&&_.push(e.data)},n.onerror=()=>{k(),T(`Une erreur est survenue pendant l’enregistrement.`)},n.onstop=()=>{let e=new Blob(_,{type:n.mimeType||`audio/webm`});O(),b&&window.clearInterval(b),b=null,S=!1,h=null,C?(j(),t.classList.add(`hidden`),E()):(x=e,D(),o&&(o.textContent=`Terminé`),s&&(s.textContent=`Ton audio est prêt à être sauvegardé.`),l&&(l.textContent=`● Recommencer`),u&&(u.disabled=!x.size,u.classList.toggle(`text-gray-400`,!x.size)),d&&d.classList.remove(`animate-pulse`,`bg-pink-100`))},n.start(),S=!0,v=Date.now(),o&&(o.textContent=`En cours`),s&&(s.textContent=`Enregistrement en cours… parle naturellement.`),l&&(l.textContent=`■ Arrêter`),d&&d.classList.add(`animate-pulse`,`bg-pink-100`),u&&(u.disabled=!0),b=window.setInterval(D,250)}catch{k(),T(`Accès au microphone refusé. Vérifie les permissions du navigateur puis réessaie.`)}}else if(i.closest(`[data-record-save]`)){if(!x?.size)return;let e=ge++,n=`Enregistrement ${W.length+1}`;W.unshift({id:e,name:n,date:new Date().toLocaleString(`fr-FR`,{day:`2-digit`,month:`long`,year:`numeric`,hour:`2-digit`,minute:`2-digit`}),duration:y,blob:x,url:URL.createObjectURL(x)}),A(),j(),t.classList.add(`hidden`)}else if(i.closest(`[data-voice-analyze]`)){if(!f||!m)return;w&&window.clearTimeout(w),m.classList.add(`hidden`),p?.classList.remove(`hidden`),f.disabled=!0,f.classList.add(`opacity-70`,`cursor-wait`),w=window.setTimeout(()=>{p?.classList.add(`hidden`),m.classList.remove(`hidden`),f.disabled=!1,f.classList.remove(`opacity-70`,`cursor-wait`);let t=e.querySelector(`#voice-analysis-source`),n=m.querySelector(`h3`);n&&(n.textContent=t?.value===`demo`?`Rapport d’analyse — exemple fictif`:`Rapport d’analyse — simulation fictive`),m.scrollIntoView({behavior:`smooth`,block:`start`}),w=null},900)}}),e.cleanupAlertsPage=()=>{w&&window.clearTimeout(w),S&&h?.state===`recording`&&h.stop(),k()}}function be(){let e=(e,t)=>(n,r)=>{e(r.services.alerts),r.refresh(),r.toast(t)};return{id:`alerts`,watch:[],render({services:e}){let t=e.alerts.list();return`
        <section class="page space-y-8" data-alerts-page>

          ${_e()}

          ${ve()}

          <section class="space-y-5" aria-labelledby="alerts-history-title">
            ${P({eyebrow:`Centre de démonstration`,title:`Historique des alertes`,subtitle:`Consulte les alertes fictives et retrouve les simulations effectuées.`,actionHtml:I({label:`＋ Simuler une alerte`,action:`new-alert`})})}

            <div class="grid gap-4 sm:grid-cols-3">
              ${q(`Alertes de démonstration`,t.length,`text-3xl`)}
              ${q(`Appareil connecté`,`Non`)}
              ${q(`Notifications envoyées`,`Aucune`)}
            </div>

            ${pe(`<strong>Important :</strong> ce prototype n’envoie aucun SMS, appel, message ni position réelle. Les localisations affichées sont fictives.`)}

            <div class="space-y-4 border-t border-[#f4d8e6] pt-7">
              <div>
                <h2 id="alerts-history-title" class="text-xl font-black text-[#632846]">
                  Historique des alertes
                </h2>
                <p class="mt-1 text-sm text-[#9b6b82]">
                  Consulte les simulations effectuées pendant les tests.
                </p>
              </div>

              ${t.length?`<div class="grid gap-4 lg:grid-cols-2">
                    ${t.map(he).join(``)}
                  </div>`:me({title:`Aucune alerte de test`,text:`Lance une simulation pour voir apparaître une entrée ici.`})}

              <div class="flex flex-wrap gap-3">
                ${I({label:`Réinitialiser l’historique`,action:`reset-alerts`,variant:`soft`})}
                ${I({label:`Vider l’historique`,action:`clear-alerts`,variant:`soft`})}
              </div>
            </div>
          </section>
        </section>
      `},mount(){ye(document.querySelector(`[data-alerts-page]`))},actions:{"new-alert":V,"reset-alerts":e(e=>e.reset(),`Historique de démonstration réinitialisé.`),"clear-alerts":e(e=>e.clear(),`Historique de démonstration vidé.`)}}}function xe(e){return`
    <div class="relative shrink-0">
      <div class="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-pink-100 to-pink-200 shadow-lg shadow-pink-200/50 ring-1 ring-pink-100">
        <img
          src="./photo_de_profil.jpg"
          alt="Photo du profil de démonstration"
          class="h-full w-full rounded-full object-cover"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <span
          class="hidden h-full w-full items-center justify-center text-2xl font-black text-[#be185d]"
          aria-hidden="true"
        >${t(String(e||`M`).trim().charAt(0).toUpperCase()||`M`)}</span>
      </div>

      <span
        class="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-xs font-black text-white"
        title="Profil de démonstration"
        aria-label="Profil de démonstration"
      >✓</span>
    </div>
  `}function Se(){return`
    <div class="relative overflow-hidden rounded-2xl border border-pink-100 bg-gradient-to-br from-[#fff5f9] to-white p-4 sm:p-5">
      <div class="flex items-start gap-3">
        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm ring-1 ring-pink-100" aria-hidden="true">
          🔒
        </div>

        <div class="min-w-0">
          <h3 class="font-extrabold text-[#632846]">
            Ta confidentialité compte
          </h3>
          <p class="mt-1 text-sm leading-6 text-[#9b6b82]">
            Cette version utilise des données de démonstration.
            Évite de saisir des informations personnelles réelles.
            Vérifie les règles de stockage de cette version avant
            d'y enregistrer des informations sensibles.
          </p>
        </div>
      </div>

      <div class="mt-4 grid gap-2 sm:grid-cols-2">
        <div class="flex items-center gap-2 rounded-xl bg-white/80 p-3 text-xs font-semibold text-[#632846] ring-1 ring-pink-100">
          <span aria-hidden="true">🛡️</span>
          <span>Prototype de sensibilisation</span>
        </div>

        <div class="flex items-center gap-2 rounded-xl bg-white/80 p-3 text-xs font-semibold text-[#632846] ring-1 ring-pink-100">
          <span aria-hidden="true">ℹ️</span>
          <span>Fonctions en mode démo</span>
        </div>
      </div>
    </div>
  `}function Ce(){return`
    <div class="rounded-2xl border border-dashed border-pink-200 bg-[#fffafd] px-5 py-8 text-center">
      <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-2xl" aria-hidden="true">
        🤝
      </div>

      <h3 class="mt-4 font-extrabold text-[#632846]">
        Ton cercle de confiance
      </h3>

      <p class="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#9b6b82]">
        Ajoute des contacts fictifs pour découvrir le fonctionnement
        de cette fonctionnalité dans la maquette.
      </p>

      <p class="mt-3 text-xs text-[#a67b90]">
        Aucun message ne sera envoyé.
      </p>
    </div>
  `}function X(){return`
    <div class="rounded-2xl border border-dashed border-pink-200 bg-white p-6 text-center">
      <p class="text-2xl" aria-hidden="true">📚</p>
      <h3 class="mt-3 font-bold text-[#632846]">
        Ressources bientôt disponibles
      </h3>
      <p class="mt-1 text-sm leading-6 text-[#9b6b82]">
        Les contenus de sensibilisation seront affichés ici
        lorsqu'ils seront disponibles.
      </p>
    </div>
  `}function Z(e,t,n){return`
    <option value="${e}" ${t===e?`selected`:``}>
      ${n}
    </option>
  `}function we({user:e,resources:n=[]}){return{id:`profile`,watch:[],render({services:r}){let i=r.preferences.getLanguage(),a=r.contacts.list()||[],o=String(e?.name||`Utilisateur MAAK`),s=t(o),c=i===`ar`?`ar`:`fr`;return`
        <section class="page space-y-7" data-profile-page>
          ${P({eyebrow:`TON ESPACE PERSONNEL`,title:`Profil et confiance`,subtitle:`Personnalise ton expérience et retrouve les paramètres essentiels de ton espace MAAK.`})}

          <!-- Profil et préférences -->
          <div class="grid items-start gap-5 lg:grid-cols-[0.95fr_1.05fr]">

            <div class="min-w-0">
              ${L(`
                <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 via-white to-[#fff0f6] p-5 sm:p-6">
                  <div class="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-pink-100/60 blur-2xl"></div>

                  <div class="relative flex items-center gap-4">
                    ${xe(o)}

                    <div class="min-w-0 flex-1">
                      <div class="mb-2 inline-flex items-center gap-1.5 rounded-full border border-pink-100 bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#be185d]">
                        <span class="h-1.5 w-1.5 rounded-full bg-pink-500"></span>
                        Espace personnel
                      </div>

                      <h2 class="break-words text-xl font-black tracking-tight text-[#632846] sm:text-2xl">
                        ${s}
                      </h2>

                      <p class="mt-1 text-sm text-[#9b6b82]">
                        Profil fictif de démonstration
                      </p>
                    </div>
                  </div>

                  <div class="relative mt-5 rounded-xl border border-white/90 bg-white/80 p-3.5">
                    <div class="flex items-start gap-3">
                      <span class="text-lg" aria-hidden="true">🌸</span>
                      <p class="text-sm leading-6 text-[#80566c]">
                        MAAK est un espace de sensibilisation,
                        d'information et d'orientation.
                        Tu peux explorer les fonctionnalités de la
                        maquette sans utiliser de données réelles.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mt-6">
                  <div class="mb-3 flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-lg" aria-hidden="true">
                      🌐
                    </div>
                    <div>
                      <h3 class="font-extrabold text-[#632846]">
                        Langue de l'interface
                      </h3>
                      <p class="mt-0.5 text-xs text-[#9b6b82]">
                        Choisis ta langue préférée.
                      </p>
                    </div>
                  </div>

                  <label for="language" class="mb-2 block text-sm font-bold text-[#632846]">
                    Langue
                  </label>

                  <select
                    id="language"
                    name="language"
                    class="field w-full rounded-xl"
                    data-change="language"
                    aria-describedby="language-help"
                  >
                    ${Z(`fr`,c,`🇫🇷 Français`)}
                    ${Z(`ar`,c,`🇹🇳 العربية (démo)`)}
                  </select>

                  <p id="language-help" class="mt-2 text-xs leading-5 text-[#9b6b82]">
                    La disponibilité de la traduction arabe dépend
                    de l'intégration linguistique de l'application.
                  </p>
                </div>

                <div class="mt-6">
                  ${Se()}
                </div>

                <div class="mt-6 border-t border-pink-100 pt-5">
                  <div class="mb-3">
                    <h3 class="font-extrabold text-[#632846]">
                      Réinitialisation
                    </h3>
                    <p class="mt-1 text-sm leading-6 text-[#9b6b82]">
                      Efface les données locales de démonstration
                      gérées par le stockage de l'application.
                    </p>
                  </div>

                  ${I({label:`Effacer les données locales`,action:`clear-local-data`,variant:`soft`,className:`w-full`})}

                  <p class="mt-2 text-xs leading-5 text-[#a67b90]">
                    Cette action peut supprimer des préférences
                    ou des données enregistrées localement.
                  </p>
                </div>
              `,`p-5 sm:p-6`)}
            </div>

            <!-- Contacts de confiance -->
            <div class="min-w-0">
              ${L(`
                <div class="flex flex-wrap items-start justify-between gap-3">
                  <div class="flex items-start gap-3">
                    <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-50 text-xl" aria-hidden="true">
                      💗
                    </div>

                    <div>
                      <h2 class="text-lg font-extrabold text-[#632846] sm:text-xl">
                        Contacts de confiance
                      </h2>
                      <p class="mt-1 text-sm text-[#9b6b82]">
                        Ton cercle de confiance
                      </p>
                    </div>
                  </div>

                  <span class="rounded-full border border-pink-100 bg-pink-50 px-3 py-1 text-xs font-bold text-[#be185d]">
                    ${a.length} contact${a.length>1?`s`:``}
                  </span>
                </div>

                <p class="mt-4 text-sm leading-6 text-[#9b6b82]">
                  Découvre comment organiser tes contacts de confiance.
                  Dans cette démo, les coordonnées saisies doivent
                  rester fictives.
                </p>

                <div class="mt-5">
                  ${a.length?`<div class="space-y-3">
                        ${a.map(e=>R(e,{manageable:!0})).join(``)}
                      </div>`:Ce()}
                </div>

                <div class="mt-5">
                  ${I({label:`＋ Ajouter un contact`,action:`add-contact`,variant:`soft`,className:`w-full`})}
                </div>

                <div class="mt-4 flex items-start gap-2 rounded-xl bg-[#fff5f9] p-3.5">
                  <span class="mt-0.5" aria-hidden="true">ℹ️</span>
                  <p class="text-xs leading-5 text-[#9b6b82]">
                    Les contacts de cette maquette sont des exemples.
                    Aucun SMS, appel ou message d'urgence n'est envoyé.
                  </p>
                </div>
              `,`p-5 sm:p-6`)}
            </div>
          </div>

          <!-- Ressources -->
          <section aria-labelledby="profile-resources-heading">
            <div class="mb-5 flex items-start gap-3">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-50 text-xl" aria-hidden="true">
                📚
              </div>

              <div>
                <h2 id="profile-resources-heading" class="text-xl font-black tracking-tight text-[#632846] sm:text-2xl">
                  Ressources de sensibilisation
                </h2>
                <p class="mt-1 text-sm leading-6 text-[#9b6b82]">
                  Des informations pour mieux comprendre les violences,
                  connaître ses droits et découvrir les ressources d'aide.
                </p>
              </div>
            </div>

            ${n.length?`<div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  ${n.map(e=>B(e)).join(``)}
                </div>`:X()}
          </section>

          <!-- Avertissement -->
          <footer class="rounded-2xl border border-pink-100 bg-gradient-to-r from-[#fff5f9] to-white p-4 sm:p-5">
            <div class="flex items-start gap-3">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm" aria-hidden="true">
                🛡️
              </div>

              <div>
                <h2 class="font-extrabold text-[#632846]">
                  Un prototype pour sensibiliser et orienter
                </h2>

                <p class="mt-1 text-sm leading-6 text-[#9b6b82]">
                  MAAK ne remplace pas les services d'urgence,
                  les professionnels de santé ou les associations
                  spécialisées. Les ressources présentées doivent être
                  vérifiées avant la publication de l'application.
                  Les fonctions de démonstration ne garantissent
                  pas la transmission d'une alerte.
                </p>
              </div>
            </div>
          </footer>
        </section>
      `},actions:{"add-contact"(e,t){let n=t.services.dialogs.ask(`Nom du contact fictif :`);if(!n?.trim())return;let r=t.services.dialogs.ask(`Lien avec cette personne (ex. amie, sœur) :`,`Personne de confiance`);if(r===null)return;let i=t.services.dialogs.ask(`Téléphone fictif (ne pas saisir de numéro réel) :`,`+216 00 000 000`);i!==null&&(t.services.contacts.add({name:n.trim(),relation:r.trim()||`Personne de confiance`,phone:i.trim()}),t.refresh(),t.toast(`Contact fictif ajouté.`))},"toggle-contact"(e,t){let n=Number(e.dataset.id);Number.isFinite(n)?(t.services.contacts.toggleAlerts(n),t.refresh(),t.toast(`Préférence du contact mise à jour.`)):t.toast(`Contact introuvable.`)},"clear-local-data"(e,t){t.services.dialogs.confirm(`Effacer les préférences et les données locales de démonstration sur ce navigateur ? Cette action peut être irréversible.`)&&(t.services.storage.clearAll(),t.refresh(),t.toast(`Données locales de démonstration effacées.`))}},changes:{language(e,t){let n=e.value;[`fr`,`ar`].includes(n)&&t.services.preferences.setLanguage(n)&&t.toast(n===`ar`?`Arabe sélectionné (démo). Certaines sections peuvent rester en français.`:`Français sélectionné.`)}}}}var Te=`https://api.cloudflare.com/client/v4/user/tokens/verify`,Ee={delay:0,async reply(e){let t=await fetch(Te,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({message:e})});if(!t.ok)throw Error(`Erreur API Cloudflare`);return(await t.json()).reply}},Q=b(),De={storage:Q,alerts:x({seed:h}),contacts:w({storage:Q,seed:g}),preferences:E({storage:Q}),quiz:O(_),dialogs:k()},$=f({page:`home`,chatOpen:!1,quiz:D()}),Oe=ie({recorder:j(),replyService:Ee,replyService:A({replies:y.replies}),content:y,onToggle:e=>$.set({chatOpen:e})});d({root:document.querySelector(`#app`),store:$,services:De,chat:Oe,user:m,navItems:p,pages:[ue({user:m,resources:v}),fe(),be(),we({user:m,resources:v})]});