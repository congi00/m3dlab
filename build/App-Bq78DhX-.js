import{r as i,eu as on,eg as nn,ek as re,j as n,em as oe,eh as rn,ei as Gt,ej as X,el as me,eB as Le,es as Me,eC as an,en as Be,et as Zr,ev as sn,ey as Xr,eD as Qr,eE as ln,ew as Dt,eo as qt,ep as Yt,eq as cn,er as dn,ex as No,ez as Jr,eA as ea,l as g,jV as un,eG as A,f$ as ta,fZ as oa,f_ as na,g0 as ra,jW as fn,eH as hn,eI as pn,eJ as mn,ec as ie,eM as gn,f6 as aa,f7 as ia,jX as Ve,f5 as sa,f8 as la,f9 as ca,fc as da,fd as ua,fe as fa,ff as ha,fg as xn,fh as pa,fi as ma,fj as ga,fk as xa,jY as Zt,fl as ba,fm as $a,jZ as wa,fa as ya,fb as Ca,j_ as bn,f1 as va,f2 as ja,f3 as Sa,f4 as Ia,j$ as He,eR as Ra,eU as ka,e_ as Ta,e$ as Ea,eS as Da,eT as Aa,eV as Pa,eW as Va,fn as Na,fo as At,fp as Xt,k0 as Ma,fq as Pt,fr as Vt,fs as Oa,ft as La,fu as _a,fv as Fa,fw as za,fx as Wa,fy as Ba,fz as $n,fA as Ha,fB as wn,fC as Ua,fD as Ka,fE as Ga,k1 as qa,fF as Ya,fG as Za,fH as yn,fI as Cn,fJ as Xa,fK as Qa,fL as Ja,fM as ei,eN as ti,eP as oi,eX as ni,eY as ri,eQ as ai,eO as ii,fN as si,fO as li,fP as ci,fQ as di,fR as ui,fS as fi,fT as hi,fU as pi,fV as mi,fW as gi,k2 as xi,fX as bi,fY as $i,eZ as vn,f0 as wi,eF as yi,g1 as Ci,g2 as vi,k3 as ji,a as tt,k4 as Si,k5 as Ii,k6 as Ri,k7 as ki,k8 as Ti,a0 as Ei,a1 as Mo,bb as Di}from"./strapi-Dcmgd_zI.js";var Ai=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Oe=new WeakMap,dt=new WeakMap,ut={},Rt=0,jn=function(e){return e&&(e.host||jn(e.parentNode))},Pi=function(e,t){return t.map(function(o){if(e.contains(o))return o;var r=jn(o);return r&&e.contains(r)?r:(console.error("aria-hidden",o,"in not contained inside",e,". Doing nothing"),null)}).filter(function(o){return!!o})},Vi=function(e,t,o,r){var a=Pi(t,Array.isArray(e)?e:[e]);ut[o]||(ut[o]=new WeakMap);var s=ut[o],c=[],l=new Set,d=new Set(a),h=function(p){!p||l.has(p)||(l.add(p),h(p.parentNode))};a.forEach(h);var f=function(p){!p||d.has(p)||Array.prototype.forEach.call(p.children,function(u){if(l.has(u))f(u);else try{var m=u.getAttribute(r),x=m!==null&&m!=="false",b=(Oe.get(u)||0)+1,y=(s.get(u)||0)+1;Oe.set(u,b),s.set(u,y),c.push(u),b===1&&x&&dt.set(u,!0),y===1&&u.setAttribute(o,"true"),x||u.setAttribute(r,"true")}catch(w){console.error("aria-hidden: cannot operate on ",u,w)}})};return f(t),l.clear(),Rt++,function(){c.forEach(function(p){var u=Oe.get(p)-1,m=s.get(p)-1;Oe.set(p,u),s.set(p,m),u||(dt.has(p)||p.removeAttribute(r),dt.delete(p)),m||p.removeAttribute(o)}),Rt--,Rt||(Oe=new WeakMap,Oe=new WeakMap,dt=new WeakMap,ut={})}},Sn=function(e,t,o){o===void 0&&(o="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=Ai(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),Vi(r,a,o,"aria-hidden")):function(){return null}};function Ni(e){const t=`${e}CollectionProvider`,[o,r]=on(t),[a,s]=o(t,{collectionRef:{current:null},itemMap:new Map,listeners:new Set}),c=m=>{const{scope:x,children:b}=m,y=i.useRef(null),w=i.useRef(new Map).current,$=i.useRef(new Set).current;return n.jsx(a,{scope:x,itemMap:w,collectionRef:y,listeners:$,children:b})};c.displayName=t;const l=`${e}CollectionSlot`,d=i.forwardRef((m,x)=>{const{scope:b,children:y}=m,w=s(l,b),$=re(x,w.collectionRef);return n.jsx(Dt,{ref:$,children:y})});d.displayName=l;const h=`${e}CollectionItemSlot`,f="data-radix-collection-item",p=i.forwardRef((m,x)=>{const{scope:b,children:y,...w}=m,$=i.useRef(null),C=re(x,$),v=s(h,b);return i.useEffect(()=>{const j=Array.from(v.itemMap.values());return v.itemMap.set($,{ref:$,...w}),v.listeners.forEach(k=>k(Array.from(v.itemMap.values()),j)),()=>{const k=Array.from(v.itemMap.values());v.itemMap.delete($),v.listeners.forEach(R=>R(Array.from(v.itemMap.values()),k))}}),n.jsx(Dt,{[f]:"",ref:C,children:y})});p.displayName=h;function u(m){const x=s(`${e}CollectionConsumer`,m),b=i.useCallback(()=>{const w=x.collectionRef.current;if(!w)return[];const $=Array.from(w.querySelectorAll(`[${f}]`));return Array.from(x.itemMap.values()).sort((j,k)=>$.indexOf(j.ref.current)-$.indexOf(k.ref.current))},[x.collectionRef,x.itemMap]),y=i.useCallback(w=>(x.listeners.add(w),()=>x.listeners.delete(w)),[x.listeners]);return{getItems:b,subscribe:y}}return[{Provider:c,Slot:d,ItemSlot:p},u,r]}const kt=new Map;function Mi(e,t){const o=e+(t?Object.entries(t).sort((a,s)=>a[0]<s[0]?-1:1).join():"");if(kt.has(o))return kt.get(o);const r=new Intl.Collator(e,t);return kt.set(o,r),r}function Qt(e,t){const o=Mi(e,{usage:"search",...t});return{startsWith(r,a){return a.length===0?!0:(r=r.normalize("NFC"),a=a.normalize("NFC"),o.compare(r.slice(0,a.length),a)===0)},endsWith(r,a){return a.length===0?!0:(r=r.normalize("NFC"),a=a.normalize("NFC"),o.compare(r.slice(-a.length),a)===0)},contains(r,a){if(a.length===0)return!0;r=r.normalize("NFC"),a=a.normalize("NFC");let s=0;const c=a.length;for(;s+c<=r.length;s++){const l=r.slice(s,s+c);if(o.compare(a,l)===0)return!0}return!1}}}const Oi=e=>{const t=i.useRef();return i.useEffect(()=>{t.current=e}),t.current},Li=[" ","Enter","ArrowUp","ArrowDown"],_i=["Enter"],Fi=e=>!!(e.length===1&&e.match(/\S| /)),In="Combobox",[_e,ot]=Ni(In),[zi,je]=nn(In),Wi=({children:e})=>n.jsx(ln,{children:n.jsx(_e.Provider,{scope:void 0,children:e})}),Bi=e=>typeof e=="string"?e==="none"?{type:e,filter:void 0}:{type:e,filter:"startsWith"}:e,Hi=e=>{const{allowCustomValue:t=!1,autocomplete:o="none",children:r,open:a,defaultOpen:s,onOpenChange:c,value:l,defaultValue:d,onValueChange:h,disabled:f,required:p=!1,locale:u="en-EN",onTextValueChange:m,textValue:x,defaultTextValue:b,filterValue:y,defaultFilterValue:w,onFilterValueChange:$,isPrintableCharacter:C=Fi,visible:v=!1}=e,[j,k]=i.useState(null),[R,L]=i.useState(null),[V,O]=i.useState(null),[z,P]=i.useState(null),[D=!1,N]=Le({prop:a,defaultProp:s,onChange:c}),[B,K]=Le({prop:l,defaultProp:d,onChange:h}),[U,G]=Le({prop:x,defaultProp:t&&!b?l:b,onChange:m}),[q,ee]=Le({prop:y,defaultProp:w,onChange:$}),Y=Me(),ae=i.useCallback((ne,J)=>{const ue=J.map(M=>M.ref.current),[E,...W]=ue,[Z]=W.slice(-1),F=z??J.find(M=>M.value===B)?.ref.current;for(const M of ne){if(M===F)return;if(M?.scrollIntoView({block:"nearest"}),M===E&&R&&(R.scrollTop=0),M===Z&&R&&(R.scrollTop=R.scrollHeight),P(M),o==="both"){const H=J.find(le=>le.ref.current===M);H&&G(H.textValue)}if(M!==F)return}},[o,G,R,z,B]),_=Bi(o);return i.useEffect(()=>{o!=="both"&&P(null)},[U,o]),i.useEffect(()=>{if(V&&j)return Sn([V,j])},[V,j]),n.jsx(Wi,{children:n.jsx(zi,{allowCustomValue:t,autocomplete:_,required:p,trigger:j,onTriggerChange:k,contentId:Y,value:B,onValueChange:K,open:D,onOpenChange:N,disabled:f,locale:u,focusFirst:ae,textValue:U,onTextValueChange:G,onViewportChange:L,onContentChange:O,visuallyFocussedItem:z,filterValue:q,onFilterValueChange:ee,onVisuallyFocussedItemChange:P,isPrintableCharacter:C,visible:v,children:r})})},Rn="ComboboxTrigger",kn=i.forwardRef((e,t)=>{const{...o}=e,r=je(Rn),a=()=>{r.disabled||r.onOpenChange(!0)};return n.jsx(rn,{asChild:!0,children:n.jsx(Gt,{asChild:!0,trapped:r.open,onMountAutoFocus:s=>{s.preventDefault()},onUnmountAutoFocus:s=>{r.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),s.preventDefault()},children:n.jsx("div",{ref:t,"data-disabled":r.disabled?"":void 0,...o,onClick:X(o.onClick,s=>{if(r.disabled){s.preventDefault();return}r.trigger?.focus()}),onPointerDown:X(o.onPointerDown,s=>{if(r.disabled){s.preventDefault();return}const c=s.target;c.hasPointerCapture(s.pointerId)&&c.releasePointerCapture(s.pointerId),(c.closest("button")??c.closest("div"))===s.currentTarget&&s.button===0&&s.ctrlKey===!1&&(a(),r.trigger?.focus())})})})})});kn.displayName=Rn;const Tn="ComboboxInput",En=i.forwardRef((e,t)=>{const o=je(Tn),r=i.useRef(null),{getItems:a}=ot(void 0),{startsWith:s}=Qt(o.locale,{sensitivity:"base"}),c=o.disabled,l=re(r,t,o.onTriggerChange),d=()=>{c||o.onOpenChange(!0)},h=Oi(o.filterValue);return me(()=>{const f=setTimeout(()=>{if(o.textValue===""||o.textValue===void 0||o.filterValue===""||o.filterValue===void 0)return;const p=a().find(m=>m.type==="option"&&s(m.textValue,o.textValue)),u=as(h??"",o.filterValue);p&&!o.visuallyFocussedItem&&u===o.filterValue.length&&r.current?.setSelectionRange(o.filterValue.length,o.textValue.length)});return()=>clearTimeout(f)},[o.textValue,o.filterValue,s,o.visuallyFocussedItem,a,h]),n.jsx("input",{type:"text",role:"combobox","aria-controls":o.contentId,"aria-expanded":o.open,"aria-required":o.required,"aria-autocomplete":o.autocomplete.type,"data-state":o.open?"open":"closed","aria-disabled":c,"aria-activedescendant":o.visuallyFocussedItem?.id,disabled:c,"data-disabled":c?"":void 0,"data-placeholder":o.textValue===void 0?"":void 0,value:o.textValue??"",...e,ref:l,onKeyDown:X(e.onKeyDown,f=>{if(["ArrowUp","ArrowDown","Home","End"].includes(f.key))o.open||d(),setTimeout(()=>{let u=a().filter(m=>!m.disabled&&m.isVisible).map(m=>m.ref.current);if(["ArrowUp","End"].includes(f.key)&&(u=u.slice().reverse()),["ArrowUp","ArrowDown"].includes(f.key)){const m=o.visuallyFocussedItem??a().find(x=>x.value===o.value)?.ref.current;if(m){let x=u.indexOf(m);x===u.length-1&&(x=-1),u=u.slice(x+1)}}if(["ArrowDown"].includes(f.key)&&o.autocomplete.type==="both"&&u.length>1){const[m,...x]=u,b=a().find(y=>y.ref.current===m).textValue;o.textValue===b&&(u=x)}o.focusFirst(u,a())}),f.preventDefault();else if(["Tab"].includes(f.key)&&o.open)f.preventDefault();else if(["Escape"].includes(f.key))o.open?o.onOpenChange(!1):(o.onValueChange(void 0),o.onTextValueChange("")),f.preventDefault();else if(_i.includes(f.key)){if(o.visuallyFocussedItem){const p=a().find(u=>u.ref.current===o.visuallyFocussedItem);p&&(o.onValueChange(p.value),o.onTextValueChange(p.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(p.textValue),p.ref.current?.click())}else{const p=a().find(u=>u.type==="option"&&!u.disabled&&u.textValue===o.textValue);p&&(o.onValueChange(p.value),o.onTextValueChange(p.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(p.textValue),p.ref.current?.click())}o.onOpenChange(!1),f.preventDefault()}else o.onVisuallyFocussedItemChange(null)}),onChange:X(e.onChange,f=>{o.onTextValueChange(f.currentTarget.value),o.autocomplete.type==="both"&&o.onFilterValueChange(f.currentTarget.value)}),onKeyUp:X(e.onKeyUp,f=>{if(!o.open&&(o.isPrintableCharacter(f.key)||["Backspace"].includes(f.key))&&d(),setTimeout(()=>{if(o.autocomplete.type==="both"&&o.isPrintableCharacter(f.key)&&o.filterValue!==void 0){const p=o.filterValue,u=a().find(m=>s(m.textValue,p));u&&o.onTextValueChange(u.textValue)}}),o.autocomplete.type==="none"&&o.isPrintableCharacter(f.key)){const p=o.textValue??"",u=a().find(m=>s(m.textValue,p));u&&(o.onVisuallyFocussedItemChange(u.ref.current),u.ref.current?.scrollIntoView())}}),onBlur:X(e.onBlur,()=>{if(o.open)return;o.onVisuallyFocussedItemChange(null);const[f]=a().filter(u=>u.textValue===o.textValue&&u.type==="option");if(f){o.onValueChange(f.value),o.autocomplete.type==="both"&&o.onFilterValueChange(f.textValue);return}if(o.allowCustomValue){o.onValueChange(o.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(o.textValue);return}const[p]=a().filter(u=>u.value===o.value&&u.type==="option");p&&o.textValue!==""?(o.onTextValueChange(p.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(p.textValue)):(o.onValueChange(void 0),o.onTextValueChange(""))})})});En.displayName="ComboboxTextInput";const Dn=i.forwardRef((e,t)=>{const{children:o,...r}=e,a=je(Tn),s=a.disabled,c=()=>{s||(a.onOpenChange(!0),a.trigger?.focus())};return n.jsx(oe.button,{"aria-hidden":!0,type:"button","aria-disabled":s,"aria-controls":a.contentId,"aria-expanded":a.open,disabled:s,"data-disabled":s?"":void 0,...r,tabIndex:-1,ref:t,onClick:X(r.onClick,()=>{a.trigger?.focus()}),onPointerDown:X(r.onPointerDown,l=>{l.button===0&&l.ctrlKey===!1&&(c(),l.preventDefault())}),onKeyDown:X(r.onKeyDown,l=>{Li.includes(l.key)&&(c(),l.preventDefault())}),children:o||"▼"})});Dn.displayName="ComboboxIcon";const Ui="ComboboxPortal",An=e=>n.jsx(an,{asChild:!0,...e});An.displayName=Ui;const Jt="ComboboxContent",Pn=i.forwardRef((e,t)=>{const o=je(Jt),{getItems:r}=ot(void 0),[a,s]=i.useState();if(me(()=>{s(new DocumentFragment)},[]),me(()=>{o.open&&o.autocomplete.type==="none"&&setTimeout(()=>{r().find(l=>l.value===o.value)?.ref.current?.scrollIntoView({block:"nearest"})})},[r,o.autocomplete,o.value,o.open]),!o.open){const c=a;return c?Be.createPortal(n.jsx(_e.Slot,{scope:void 0,children:n.jsx("div",{children:e.children})}),c):null}return n.jsx(Vn,{...e,ref:t})});Pn.displayName=Jt;const Ki=10,Vn=i.forwardRef((e,t)=>{const{onEscapeKeyDown:o,onPointerDownOutside:r,...a}=e,s=je(Jt),c=re(t,d=>s.onContentChange(d)),{onOpenChange:l}=s;return qt(),i.useEffect(()=>{const d=()=>{l(!1)};return window.addEventListener("blur",d),window.addEventListener("resize",d),()=>{window.removeEventListener("blur",d),window.removeEventListener("resize",d)}},[l]),n.jsx(Yt,{allowPinchZoom:!0,children:n.jsx(cn,{asChild:!0,onEscapeKeyDown:o,onPointerDownOutside:r,onFocusOutside:d=>{d.preventDefault()},onDismiss:()=>{s.onOpenChange(!1),s.trigger?.focus({preventScroll:!0})},children:n.jsx(Nn,{role:"listbox",id:s.contentId,"data-state":s.open?"open":"closed",onContextMenu:d=>d.preventDefault(),...a,ref:c,style:{display:"flex",flexDirection:"column",outline:"none",...a.style}})})})});Vn.displayName="ComboboxContentImpl";const Nn=i.forwardRef((e,t)=>{const{align:o="start",collisionPadding:r=Ki,...a}=e;return n.jsx(dn,{...a,ref:t,align:o,collisionPadding:r,style:{boxSizing:"border-box",...a.style,"--radix-combobox-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-combobox-content-available-width":"var(--radix-popper-available-width)","--radix-combobox-content-available-height":"var(--radix-popper-available-height)","--radix-combobox-trigger-width":"var(--radix-popper-anchor-width)","--radix-combobox-trigger-height":"var(--radix-popper-anchor-height)"}})});Nn.displayName="ComboboxPopperPosition";const Mn="ComboboxViewport",On=i.forwardRef((e,t)=>{const o=je(Mn),r=re(t,o.onViewportChange);return n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"}}),n.jsx(_e.Slot,{scope:void 0,children:n.jsx(oe.div,{"data-radix-combobox-viewport":"",role:"presentation",...e,ref:r,style:{position:"relative",flex:1,overflow:"auto",...e.style}})})]})});On.displayName=Mn;const mt="ComboboxItem",[Oo,eo]=nn(mt),to=i.forwardRef((e,t)=>{const{value:o,disabled:r=!1,textValue:a,...s}=e,[c,l]=i.useState();me(()=>{l(new DocumentFragment)},[]);const{onTextValueChange:d,textValue:h,...f}=je(mt),p=Me(),[u,m]=i.useState(a??""),x=f.value===o,{startsWith:b,contains:y}=Qt(f.locale,{sensitivity:"base"}),w=i.useCallback($=>{m(C=>C||($?.textContent??"").trim())},[]);return i.useEffect(()=>{x&&h===void 0&&u!==""&&d(u)},[u,x,h,d]),f.autocomplete.type==="both"&&u&&f.filterValue&&!b(u,f.filterValue)||f.autocomplete.type==="list"&&f.autocomplete.filter==="startsWith"&&u&&h&&!b(u,h)||f.autocomplete.type==="list"&&f.autocomplete.filter==="contains"&&u&&h&&!y(u,h)?c?Be.createPortal(n.jsx(Oo,{textId:p,onTextValueChange:w,isSelected:x,textValue:u,children:n.jsx(_e.ItemSlot,{scope:void 0,value:o,textValue:u,disabled:r,type:"option",isVisible:!1,children:n.jsx(Nt,{ref:t,value:o,disabled:r,...s})})}),c):null:n.jsx(Oo,{textId:p,onTextValueChange:w,isSelected:x,textValue:u,children:n.jsx(_e.ItemSlot,{scope:void 0,value:o,textValue:u,disabled:r,type:"option",isVisible:!0,children:n.jsx(Nt,{ref:t,value:o,disabled:r,...s})})})});to.displayName=mt;const Ln="ComboboxItemImpl",Nt=i.forwardRef((e,t)=>{const{value:o,disabled:r=!1,...a}=e,s=i.useRef(null),c=re(t,s),{getItems:l}=ot(void 0),{onTextValueChange:d,visuallyFocussedItem:h,...f}=je(mt),{isSelected:p,textValue:u,textId:m}=eo(Ln),x=()=>{r||(f.onValueChange(o),d(u),f.onOpenChange(!1),f.autocomplete.type==="both"&&f.onFilterValueChange(u),f.trigger?.focus({preventScroll:!0}))},b=i.useMemo(()=>h===l().find(w=>w.ref.current===s.current)?.ref.current,[l,h]),y=Me();return n.jsx(oe.div,{role:"option","aria-labelledby":m,"data-highlighted":b?"":void 0,"aria-selected":p&&b,"data-state":p?"checked":"unchecked","aria-disabled":r||void 0,"data-disabled":r?"":void 0,tabIndex:r?void 0:-1,...a,id:y,ref:c,onPointerUp:X(a.onPointerUp,x)})});Nt.displayName=Ln;const _n="ComboboxItemText",Fn=i.forwardRef((e,t)=>{const{className:o,style:r,...a}=e,s=eo(_n),c=re(t,s.onTextValueChange);return n.jsx(oe.span,{id:s.textId,...a,ref:c})});Fn.displayName=_n;const zn="ComboboxItemIndicator",Wn=i.forwardRef((e,t)=>{const{isSelected:o}=eo(zn);return o?n.jsx(oe.span,{"aria-hidden":!0,...e,ref:t}):null});Wn.displayName=zn;const oo="ComboboxNoValueFound",Bn=i.forwardRef((e,t)=>{const{textValue:o="",filterValue:r="",visible:a=!1,locale:s,autocomplete:c}=je(oo),[l,d]=i.useState([]),{subscribe:h}=ot(void 0),{startsWith:f,contains:p}=Qt(s,{sensitivity:"base"});return i.useEffect(()=>{const u=h(m=>{if(a){const x=m.filter(b=>b.type!=="create");d(x)}else d(m)});return()=>{u()}},[a,h]),c.type==="none"&&l.length>0||c.type==="list"&&c.filter==="startsWith"&&l.some(u=>f(u.textValue,o))||c.type==="both"&&l.some(u=>f(u.textValue,r))||c.type==="list"&&c.filter==="contains"&&l.some(u=>p(u.textValue,o))?null:n.jsx(oe.div,{...e,ref:t})});Bn.displayName=oo;const Hn=i.forwardRef((e,t)=>{const{disabled:o=!1,...r}=e,a=je(oo),{textValue:s,visuallyFocussedItem:c}=a,{getItems:l,subscribe:d}=ot(void 0),h=i.useRef(null),[f,p]=i.useState(!1),u=re(t,h),m=i.useMemo(()=>c===l().find(y=>y.ref.current===h.current)?.ref.current,[l,c]),x=Me(),b=()=>{!o&&s&&(a.onValueChange(s),a.onTextValueChange(s),a.onOpenChange(!1),a.autocomplete.type==="both"&&a.onFilterValueChange(s),a.trigger?.focus({preventScroll:!0}))};return me(()=>{const y=d(w=>{p(!w.some($=>$.textValue===s&&$.type!=="create"))});return l().length===0&&p(!0),()=>{y()}},[s,d,l]),(!s||!f)&&!a.visible?null:n.jsx(_e.ItemSlot,{scope:void 0,value:s??"",textValue:s??"",disabled:o,isVisible:!0,type:"create",children:n.jsx(oe.div,{role:"option",tabIndex:o?void 0:-1,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,"data-highlighted":m?"":void 0,...r,id:x,ref:u,onPointerUp:X(r.onPointerUp,b)})})});Hn.displayName="ComboboxCreateItem";const Gi=Hi,qi=kn,Yi=En,Zi=Dn,Xi=An,Qi=Pn,Ji=On,es=to,ts=Fn,os=Wn,ns=Bn,rs=Hn;function as(e,t){const o=Math.min(e.length,t.length);for(let r=0;r<o;r++)if(e[r]!==t[r])return r;return o}const $e=Object.freeze(Object.defineProperty({__proto__:null,ComboboxItem:to,Content:Qi,CreateItem:rs,Icon:Zi,Item:es,ItemIndicator:os,ItemText:ts,NoValueFound:ns,Portal:Xi,Root:Gi,TextInput:Yi,Trigger:qi,Viewport:Ji},Symbol.toStringTag,{value:"Module"}));function no(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...o)=>t.current?.(...o),[])}const is=[" ","Enter","ArrowUp","ArrowDown"],ss=[" ","Enter"],nt="Select",[gt,rt,ls]=Zr(nt),[Ue,cs]=on(nt,[ls,sn]),xt=sn(),[ds,ke]=Ue(nt),[us,fs]=Ue(nt),ro=e=>{const{__scopeSelect:t,children:o,open:r,defaultOpen:a,onOpenChange:s,value:c,defaultValue:l,onValueChange:d,dir:h,disabled:f,required:p,multi:u=!1}=e,m=xt(t),[x,b]=i.useState(null),[y,w]=i.useState(null),[$,C]=i.useState(!1),v=Qr(h),[j=!1,k]=Le({prop:r,defaultProp:a,onChange:s}),[R,L]=Le({prop:c,defaultProp:l,onChange(P){d&&(Array.isArray(P),d(P))}}),V=i.useRef(null),[O,z]=i.useState(new Set);return n.jsx(ln,{...m,children:n.jsx(ds,{required:p,scope:t,trigger:x,onTriggerChange:b,valueNode:y,onValueNodeChange:w,valueNodeHasChildren:$,onValueNodeHasChildrenChange:C,contentId:Me(),value:R,onValueChange:L,open:j,onOpenChange:k,dir:v,triggerPointerDownPosRef:V,disabled:f,multi:u,children:n.jsx(gt.Provider,{scope:t,children:n.jsx(us,{scope:e.__scopeSelect,onNativeOptionAdd:i.useCallback(P=>{z(D=>new Set(D).add(P))},[]),onNativeOptionRemove:i.useCallback(P=>{z(D=>{const N=new Set(D);return N.delete(P),N})},[]),children:o})})})})};ro.displayName=nt;const Un="SelectTrigger",ao=i.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,a=xt(o),s=ke(Un,o),c=s.disabled,l=re(t,s.onTriggerChange),d=rt(o),[h,f,p]=er(m=>{const x=d().filter(w=>!w.disabled),b=x.find(w=>w.value===s.value),y=tr(x,m,b);if(y!==void 0&&!Array.isArray(y.value)){const w=s.multi?[y.value]:y.value;s.onValueChange(w)}}),u=()=>{c||(s.onOpenChange(!0),p())};return n.jsx(rn,{asChild:!0,...a,children:n.jsx(oe.div,{role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed","data-disabled":c?"":void 0,"data-placeholder":s.value===void 0?"":void 0,tabIndex:c?void 0:0,...r,ref:l,onClick:X(r.onClick,m=>{m.currentTarget.focus()}),onPointerDown:X(r.onPointerDown,m=>{const x=m.target;x.hasPointerCapture(m.pointerId)&&x.releasePointerCapture(m.pointerId),(x.closest("button")??x.closest("div"))===m.currentTarget&&m.button===0&&m.ctrlKey===!1&&(u(),s.triggerPointerDownPosRef.current={x:Math.round(m.pageX),y:Math.round(m.pageY)},m.preventDefault())}),onKeyDown:X(r.onKeyDown,m=>{const x=h.current!=="",b=m.ctrlKey||m.altKey||m.metaKey,y=m.target;(y.closest("button")??y.closest("div"))===m.currentTarget&&(!b&&m.key.length===1&&f(m.key),!(x&&m.key===" ")&&is.includes(m.key)&&(u(),m.preventDefault()))})})})});ao.displayName=Un;const Kn="SelectValue",io=i.forwardRef((e,t)=>{const{__scopeSelect:o,children:r,placeholder:a,...s}=e,c=ke(Kn,o),{onValueNodeHasChildrenChange:l}=c,d=r!==void 0,h=re(t,c.onValueNodeChange),[f,p]=i.useState([]),u=rt(o);me(()=>{l(d)},[l,d]),i.useLayoutEffect(()=>{if(Array.isArray(c.value)&&f.length!==c.value.length){const x=setTimeout(()=>{const b=u().filter(y=>Array.isArray(y.value)?!1:c.value?.includes(y.value));p(b)});return()=>{clearTimeout(x)}}},[c.value,u,f]);let m;if((c.value===void 0||c.value.length===0)&&a!==void 0)m=n.jsx("span",{children:a});else if(typeof r=="function")if(Array.isArray(c.value)){const x=c.value.map(b=>{const y=f.find(w=>w.value===b);return y?r({value:b,textValue:y?.textValue}):null});m=x.every(b=>b===null)?a:x}else m=r(c.value);else m=r;return n.jsx(oe.span,{...s,ref:h,children:m||null})});io.displayName=Kn;const hs="SelectIcon",so=i.forwardRef((e,t)=>{const{__scopeSelect:o,children:r,...a}=e;return n.jsx(oe.span,{"aria-hidden":!0,...a,ref:t,children:r||"▼"})});so.displayName=hs;const ps="SelectPortal",lo=e=>n.jsx(an,{asChild:!0,...e});lo.displayName=ps;const Ne="SelectContent",co=i.forwardRef((e,t)=>{const o=ke(Ne,e.__scopeSelect),[r,a]=i.useState();if(me(()=>{a(new DocumentFragment)},[]),!o.open){const s=r;return s?Be.createPortal(n.jsx(Gn,{scope:e.__scopeSelect,children:n.jsx(gt.Slot,{scope:e.__scopeSelect,children:n.jsx("div",{children:e.children})})}),s):null}return n.jsx(qn,{...e,ref:t})});co.displayName=Ne;const Ie=10,[Gn,Ee]=Ue(Ne),ms="SelectContentImpl",qn=i.forwardRef((e,t)=>{const{__scopeSelect:o,position:r="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:s,onPointerDownOutside:c,side:l,sideOffset:d,align:h,alignOffset:f,arrowPadding:p,collisionBoundary:u,collisionPadding:m,sticky:x,hideWhenDetached:b,avoidCollisions:y,...w}=e,$=ke(Ne,o),[C,v]=i.useState(null),[j,k]=i.useState(null),R=re(t,E=>v(E)),[L,V]=i.useState(null),[O,z]=i.useState(null),P=rt(o),[D,N]=i.useState(!1),B=i.useRef(!1);i.useEffect(()=>{if(C)return Sn(C)},[C]),qt();const K=i.useCallback(E=>{const[W,...Z]=P().map(H=>H.ref.current),[F]=Z.slice(-1),M=document.activeElement;for(const H of E)if(H===M||(H?.scrollIntoView({block:"nearest"}),H===W&&j&&(j.scrollTop=0),H===F&&j&&(j.scrollTop=j.scrollHeight),H?.focus(),document.activeElement!==M))return},[P,j]),U=i.useCallback(()=>K([L,C]),[K,L,C]);i.useEffect(()=>{D&&U()},[D,U]);const{onOpenChange:G,triggerPointerDownPosRef:q}=$;i.useEffect(()=>{if(C){let E={x:0,y:0};const W=F=>{E={x:Math.abs(Math.round(F.pageX)-(q.current?.x??0)),y:Math.abs(Math.round(F.pageY)-(q.current?.y??0))}},Z=F=>{E.x<=10&&E.y<=10?F.preventDefault():C.contains(F.target)||G(!1),document.removeEventListener("pointermove",W),q.current=null};return q.current!==null&&(document.addEventListener("pointermove",W),document.addEventListener("pointerup",Z,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",W),document.removeEventListener("pointerup",Z,{capture:!0})}}},[C,G,q]),i.useEffect(()=>{const E=()=>G(!1);return window.addEventListener("blur",E),window.addEventListener("resize",E),()=>{window.removeEventListener("blur",E),window.removeEventListener("resize",E)}},[G]);const[ee,Y]=er(E=>{const W=P().filter(M=>!M.disabled),Z=W.find(M=>M.ref.current===document.activeElement),F=tr(W,E,Z);F&&setTimeout(()=>F.ref.current.focus())}),ae=i.useCallback((E,W,Z)=>{const F=!B.current&&!Z;($.value!==void 0&&$.value===W||F)&&(V(E),F&&(B.current=!0))},[$.value]),_=i.useCallback(()=>C?.focus(),[C]),ne=i.useCallback((E,W,Z)=>{const F=!B.current&&!Z;($.value!==void 0&&(Array.isArray(W)?W.every(H=>$.value?.includes(H)):$.value===W)||F)&&z(E)},[$.value]),J=r==="popper"?Mt:Yn,ue=J===Mt?{side:l,sideOffset:d,align:h,alignOffset:f,arrowPadding:p,collisionBoundary:u,collisionPadding:m,sticky:x,hideWhenDetached:b,avoidCollisions:y}:{};return n.jsx(Gn,{scope:o,content:C,viewport:j,onViewportChange:k,itemRefCallback:ae,selectedItem:L,onItemLeave:_,itemTextRefCallback:ne,focusSelectedItem:U,selectedItemText:O,position:r,isPositioned:D,searchRef:ee,children:n.jsx(Yt,{as:Dt,allowPinchZoom:!0,children:n.jsx(Gt,{asChild:!0,trapped:$.open,onMountAutoFocus:E=>{E.preventDefault()},onUnmountAutoFocus:X(a,E=>{$.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),E.preventDefault()}),children:n.jsx(cn,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:E=>E.preventDefault(),onDismiss:()=>$.onOpenChange(!1),children:n.jsx(J,{role:"listbox",id:$.contentId,"data-state":$.open?"open":"closed","aria-multiselectable":$.multi?"true":void 0,dir:$.dir,onContextMenu:E=>E.preventDefault(),...w,...ue,onPlaced:()=>N(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...w.style},onKeyDown:X(w.onKeyDown,E=>{const W=E.ctrlKey||E.altKey||E.metaKey;if(E.key==="Tab"&&E.preventDefault(),!W&&E.key.length===1&&Y(E.key),["ArrowUp","ArrowDown","Home","End"].includes(E.key)){let F=P().filter(M=>!M.disabled).map(M=>M.ref.current);if(["ArrowUp","End"].includes(E.key)&&(F=F.slice().reverse()),["ArrowUp","ArrowDown"].includes(E.key)){const M=E.target,H=F.indexOf(M);F=F.slice(H+1)}setTimeout(()=>K(F)),E.preventDefault()}})})})})})})});qn.displayName=ms;const gs="SelectItemAlignedPosition",Yn=i.forwardRef((e,t)=>{const{__scopeSelect:o,onPlaced:r,...a}=e,s=ke(Ne,o),c=Ee(Ne,o),[l,d]=i.useState(null),[h,f]=i.useState(null),p=re(t,R=>f(R)),u=rt(o),m=i.useRef(!1),x=i.useRef(!0),{viewport:b,selectedItem:y,selectedItemText:w,focusSelectedItem:$}=c,C=i.useCallback(()=>{if(s.trigger&&s.valueNode&&l&&h&&b&&y&&w){const R=s.trigger.getBoundingClientRect(),L=h.getBoundingClientRect(),V=s.valueNode.getBoundingClientRect(),O=w.getBoundingClientRect();if(s.dir!=="rtl"){const M=O.left-L.left,H=V.left-M,le=R.left-H,ce=R.width+le,Q=Math.max(ce,L.width),Ce=window.innerWidth-Ie,Se=No(H,[Ie,Ce-Q]);l.style.minWidth=`${ce}px`,l.style.left=`${Se}px`}else{const M=L.right-O.right,H=window.innerWidth-V.right-M,le=window.innerWidth-R.right-H,ce=R.width+le,Q=Math.max(ce,L.width),Ce=window.innerWidth-Ie,Se=No(H,[Ie,Ce-Q]);l.style.minWidth=`${ce}px`,l.style.right=`${Se}px`}const z=u(),P=window.innerHeight-Ie*2,D=b.scrollHeight,N=window.getComputedStyle(h),B=parseInt(N.borderTopWidth,10),K=parseInt(N.paddingTop,10),U=parseInt(N.borderBottomWidth,10),G=parseInt(N.paddingBottom,10),q=B+K+D+G+U,ee=Math.min(y.offsetHeight*5,q),Y=window.getComputedStyle(b),ae=parseInt(Y.paddingTop,10),_=parseInt(Y.paddingBottom,10),ne=R.top+R.height/2-Ie,J=P-ne,ue=y.offsetHeight/2,E=y.offsetTop+ue,W=B+K+E,Z=q-W;if(W<=ne){const M=y===z[z.length-1].ref.current;l.style.bottom="0px";const H=h.clientHeight-b.offsetTop-b.offsetHeight,le=Math.max(J,ue+(M?_:0)+H+U),ce=W+le;l.style.height=`${ce}px`}else{const M=y===z[0].ref.current;l.style.top="0px";const le=Math.max(ne,B+b.offsetTop+(M?ae:0)+ue)+Z;l.style.height=`${le}px`,b.scrollTop=W-ne+b.offsetTop}l.style.margin=`${Ie}px 0`,l.style.minHeight=`${ee}px`,l.style.maxHeight=`${P}px`,r?.(),requestAnimationFrame(()=>m.current=!0)}},[u,s.trigger,s.valueNode,l,h,b,y,w,s.dir,r]);me(()=>C(),[C]);const[v,j]=i.useState();me(()=>{h&&j(window.getComputedStyle(h).zIndex)},[h]);const k=i.useCallback(R=>{R&&x.current===!0&&(C(),$?.(),x.current=!1)},[C,$]);return n.jsx(bs,{scope:o,contentWrapper:l,shouldExpandOnScrollRef:m,onScrollButtonChange:k,children:n.jsx("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:v},children:n.jsx(oe.div,{...a,ref:p,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}})})})});Yn.displayName=gs;const xs="SelectPopperPosition",Mt=i.forwardRef((e,t)=>{const{__scopeSelect:o,align:r="start",collisionPadding:a=Ie,...s}=e,c=xt(o);return n.jsx(dn,{...c,...s,ref:t,align:r,collisionPadding:a,style:{boxSizing:"border-box",...s.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Mt.displayName=xs;const[bs,uo]=Ue(Ne,{}),Ot="SelectViewport",fo=i.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,a=Ee(Ot,o),s=uo(Ot,o),c=re(t,a.onViewportChange),l=i.useRef(0);return n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),n.jsx(gt.Slot,{scope:o,children:n.jsx(oe.div,{"data-radix-select-viewport":"",role:"presentation",...r,ref:c,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:X(r.onScroll,d=>{const h=d.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:p}=s;if(p?.current&&f){const u=Math.abs(l.current-h.scrollTop);if(u>0){const m=window.innerHeight-Ie*2,x=parseFloat(f.style.minHeight),b=parseFloat(f.style.height),y=Math.max(x,b);if(y<m){const w=y+u,$=Math.min(m,w),C=w-$;f.style.height=`${$}px`,f.style.bottom==="0px"&&(h.scrollTop=C>0?C:0,f.style.justifyContent="flex-end")}}}l.current=h.scrollTop})})})]})});fo.displayName=Ot;const Zn="SelectGroup",[$s,ws]=Ue(Zn),ho=i.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,a=Me();return n.jsx($s,{scope:o,id:a,children:n.jsx(oe.div,{role:"group","aria-labelledby":a,...r,ref:t})})});ho.displayName=Zn;const Xn="SelectLabel",po=i.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,a=ws(Xn,o);return n.jsx(oe.div,{id:a.id,...r,ref:t})});po.displayName=Xn;const ht="SelectItem",[ys,Qn]=Ue(ht),mo=i.forwardRef((e,t)=>{const{__scopeSelect:o,value:r,disabled:a=!1,textValue:s,...c}=e,l=ke(ht,o),d=Ee(ht,o),h=typeof r=="string"?Array.isArray(l.value)?l.value.includes(r):l.value===r:r.every($=>l.value?.includes($)),f=Array.isArray(l.value)&&Array.isArray(r)&&r.some($=>l.value?.includes($)),[p,u]=i.useState(s??""),[m,x]=i.useState(!1),b=re(t,$=>d.itemRefCallback?.($,r,a)),y=Me(),w=()=>{if(!a){let $=l.multi&&typeof r=="string"?[r]:r;f&&!h?l.onValueChange($):Array.isArray(l.value)&&($=or(r,l.value)),l.onValueChange($),l.multi||l.onOpenChange(!1)}};if(!l.multi&&Array.isArray(r))throw new Error("You can only pass an array of values in multi selects");return n.jsx(ys,{scope:o,value:r,disabled:a,textId:y,isSelected:h,isIntermediate:f,onItemTextChange:i.useCallback($=>{u(C=>C||($?.textContent??"").trim())},[]),children:n.jsx(gt.ItemSlot,{scope:o,value:r,disabled:a,textValue:p,children:n.jsx(oe.div,{role:"option","aria-labelledby":y,"data-highlighted":m?"":void 0,"aria-selected":l.multi?void 0:h&&m,"aria-checked":l.multi?h:void 0,"data-state":h?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1,...c,ref:b,onFocus:X(c.onFocus,()=>x(!0)),onBlur:X(c.onBlur,()=>x(!1)),onPointerUp:X(c.onPointerUp,w),onPointerMove:X(c.onPointerMove,$=>{a?d.onItemLeave?.():$.currentTarget.focus({preventScroll:!0})}),onPointerLeave:X(c.onPointerLeave,$=>{$.currentTarget===document.activeElement&&d.onItemLeave?.()}),onKeyDown:X(c.onKeyDown,$=>{d.searchRef?.current!==""&&$.key===" "||(ss.includes($.key)&&w(),$.key===" "&&$.preventDefault())})})})})});mo.displayName=ht;const Xe="SelectItemText",go=i.forwardRef((e,t)=>{const{__scopeSelect:o,className:r,style:a,...s}=e,c=ke(Xe,o),l=Ee(Xe,o),d=Qn(Xe,o),h=fs(Xe,o),[f,p]=i.useState(null),u=re(t,w=>p(w),d.onItemTextChange,w=>l.itemTextRefCallback?.(w,d.value,d.disabled)),m=f?.textContent,x=i.useMemo(()=>n.jsx("option",{value:d.value,disabled:d.disabled,children:m},Array.isArray(d.value)?d.value.join(";"):d.value),[d.disabled,d.value,m]),{onNativeOptionAdd:b,onNativeOptionRemove:y}=h;return me(()=>(b(x),()=>y(x)),[b,y,x]),n.jsxs(n.Fragment,{children:[n.jsx(oe.span,{id:d.textId,...s,ref:u}),d.isSelected&&c.valueNode&&!c.valueNodeHasChildren?Be.createPortal(s.children,c.valueNode):null]})});go.displayName=Xe;const Jn="SelectItemIndicator",xo=i.forwardRef((e,t)=>{const{__scopeSelect:o,children:r,...a}=e,s=Qn(Jn,o);return typeof r=="function"?n.jsx(oe.span,{"aria-hidden":!0,...a,ref:t,children:r({isSelected:s.isSelected,isIntermediate:s.isIntermediate})}):s.isSelected?n.jsx(oe.span,{"aria-hidden":!0,...a,ref:t,children:r}):null});xo.displayName=Jn;const Lt="SelectScrollUpButton",bo=i.forwardRef((e,t)=>{const o=Ee(Lt,e.__scopeSelect),r=uo(Lt,e.__scopeSelect),[a,s]=i.useState(!1),c=re(t,r.onScrollButtonChange);return me(()=>{if(o.viewport&&o.isPositioned){const l=o.viewport,d=()=>{const h=l.scrollTop>0;s(h)};return d(),l.addEventListener("scroll",d),()=>l.removeEventListener("scroll",d)}},[o.viewport,o.isPositioned]),a?n.jsx(wo,{...e,ref:c,onAutoScroll:()=>{const{viewport:l,selectedItem:d}=o;l&&d&&(l.scrollTop-=d.offsetHeight)}}):null});bo.displayName=Lt;const _t="SelectScrollDownButton",$o=i.forwardRef((e,t)=>{const o=Ee(_t,e.__scopeSelect),r=uo(_t,e.__scopeSelect),[a,s]=i.useState(!1),c=re(t,r.onScrollButtonChange);return me(()=>{if(o.viewport&&o.isPositioned){const l=o.viewport,d=()=>{const h=l.scrollHeight-l.clientHeight,f=Math.ceil(l.scrollTop)<h;s(f)};return d(),l.addEventListener("scroll",d),()=>l.removeEventListener("scroll",d)}},[o.viewport,o.isPositioned]),a?n.jsx(wo,{...e,ref:c,onAutoScroll:()=>{const{viewport:l,selectedItem:d}=o;l&&d&&(l.scrollTop+=d.offsetHeight)}}):null});$o.displayName=_t;const wo=i.forwardRef((e,t)=>{const{__scopeSelect:o,onAutoScroll:r,...a}=e,s=Ee("SelectScrollButton",o),c=i.useRef(null),l=rt(o),d=i.useCallback(()=>{c.current!==null&&(window.clearInterval(c.current),c.current=null)},[]);return i.useEffect(()=>()=>d(),[d]),me(()=>{l().find(f=>f.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[l]),n.jsx(oe.div,{"aria-hidden":!0,...a,ref:t,style:{flexShrink:0,...a.style},onPointerMove:X(a.onPointerMove,()=>{s.onItemLeave?.(),c.current===null&&(c.current=window.setInterval(r,50))}),onPointerLeave:X(a.onPointerLeave,()=>{d()})})});wo.displayName="SelectScrollButtonImpl";const Cs="SelectSeparator",yo=i.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e;return n.jsx(oe.div,{"aria-hidden":!0,...r,ref:t})});yo.displayName=Cs;const Ft="SelectArrow",Co=i.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,a=xt(o),s=ke(Ft,o),c=Ee(Ft,o);return s.open&&c.position==="popper"?n.jsx(Xr,{...a,...r,ref:t}):null});Co.displayName=Ft;const vs="BubbleSelect",js=i.forwardRef((e,t)=>{const{value:o,...r}=e,a=i.useRef(null),s=re(t,a),c=Jr(o),l=ke(vs,void 0);i.useEffect(()=>{const h=a.current,f=window.HTMLSelectElement.prototype,u=Object.getOwnPropertyDescriptor(f,"value").set;if(c!==o&&u){const m=new Event("change",{bubbles:!0});u.call(h,o),h.dispatchEvent(m)}},[c,o]);let d=o;return l.multi&&!Array.isArray(o)&&(d=[]),n.jsx(ea,{asChild:!0,children:n.jsx("select",{...r,multiple:l.multi?!0:void 0,ref:s,defaultValue:d})})});js.displayName="BubbleSelect";function er(e){const t=no(e),o=i.useRef(""),r=i.useRef(0),a=i.useCallback(c=>{const l=o.current+c;t(l),function d(h){o.current=h,window.clearTimeout(r.current),h!==""&&(r.current=window.setTimeout(()=>d(""),1e3))}(l)},[t]),s=i.useCallback(()=>{o.current="",window.clearTimeout(r.current)},[]);return i.useEffect(()=>()=>window.clearTimeout(r.current),[]),[o,a,s]}function tr(e,t,o){const a=t.length>1&&Array.from(t).every(h=>h===t[0])?t[0]:t,s=o?e.indexOf(o):-1;let c=Ss(e,Math.max(s,0));a.length===1&&(c=c.filter(h=>h!==o));const d=c.find(h=>h.textValue.toLowerCase().startsWith(a.toLowerCase()));return d!==o?d:void 0}function Ss(e,t){return e.map((o,r)=>e[(t+r)%e.length])}const or=(e,t=[])=>{if(Array.isArray(e))return e.reduce((r,a)=>or(a,r),t);const o=t.indexOf(e);return o===-1?[...t,e]:[...t.slice(0,o),...t.slice(o+1)]},Is=ro,Rs=ao,ks=io,Ts=so,Es=lo,Ds=co,As=fo,Ps=ho,Vs=po,Ns=mo,Ms=go,Os=xo,Ls=bo,_s=$o,Fs=yo,zs=Co,we=Object.freeze(Object.defineProperty({__proto__:null,Arrow:zs,Content:Ds,Group:Ps,Icon:Ts,Item:Ns,ItemIndicator:Os,ItemText:Ms,Label:Vs,Portal:Es,Root:Is,ScrollDownButton:_s,ScrollUpButton:Ls,Select:ro,SelectArrow:Co,SelectContent:co,SelectGroup:ho,SelectIcon:so,SelectItem:mo,SelectItemIndicator:xo,SelectItemText:go,SelectLabel:po,SelectPortal:lo,SelectScrollDownButton:$o,SelectScrollUpButton:bo,SelectSeparator:yo,SelectTrigger:ao,SelectValue:io,SelectViewport:fo,Separator:Fs,Trigger:Rs,Value:ks,Viewport:As,createSelectScope:cs},Symbol.toStringTag,{value:"Module"}));function Pe(e,t,{checkForDefaultPrevented:o=!0}={}){return function(a){if(e?.(a),o===!1||!a.defaultPrevented)return t?.(a)}}const at=(e,t)=>{const o=i.createContext(t),r=s=>{const{children:c,...l}=s,d=i.useMemo(()=>l,Object.values(l));return n.jsx(o.Provider,{value:d,children:c})};function a(s){const c=i.useContext(o);if(c)return c;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return r.displayName=`${e}Provider`,[r,a]};function Ws(e,t){return typeof e=="string"?!1:t in e}function ft(e,t,o){return e&&t&&Ws(e,t)?e[t]:o}const Lo={padding:["padding-block-start","padding-inline-end","padding-block-end","padding-inline-start"],paddingTop:"padding-block-start",paddingRight:"padding-inline-end",paddingBottom:"padding-block-end",paddingLeft:"padding-inline-start",margin:["margin-block-start","margin-inline-end","margin-block-end","margin-inline-start"],marginLeft:"margin-inline-start",marginRight:"margin-inline-end",marginTop:"margin-block-start",marginBottom:"margin-block-end",borderRadius:"border-radius",borderStyle:"border-style",borderWidth:"border-width",borderColor:"border-color",fontSize:"font-size",fontWeight:"font-weight",lineHeight:"line-height",zIndex:"z-index",boxShadow:"box-shadow",pointerEvents:"pointer-events",textAlign:"text-align",textTransform:"text-transform",textDecoration:"text-decoration",flexGrow:"flex-grow",flexShrink:"flex-shrink",flexBasis:"flex-basis",minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height",flexDirection:"flex-direction",flexWrap:"flex-wrap",justifyContent:"justify-content",alignItems:"align-items"},Bs=e=>{const[t,o,r,a]=e,s=o??t;return[t,s,r??t,a??s]};function Hs(e,t){switch(e){case"gap":case"padding":case"margin":case"paddingTop":case"paddingLeft":case"paddingRight":case"paddingBottom":case"marginTop":case"marginLeft":case"marginRight":case"marginBottom":case"left":case"right":case"top":case"bottom":case"width":case"maxWidth":case"minWidth":case"height":case"maxHeight":case"minHeight":case"borderRadius":case"borderWidth":return t.spaces;case"color":case"background":case"borderColor":return t.colors;case"fontSize":return t.fontSizes;case"fontWeight":return t.fontWeights;case"lineHeight":return t.lineHeights;case"zIndex":return t.zIndices;case"boxShadow":return t.shadows;default:return null}}const bt=(e,t)=>{const o=Object.entries(e).reduce((r,a)=>{const[s,c]=a,l=Hs(s,t),d=Object.prototype.hasOwnProperty.call(Lo,s)?Lo[s]:s;return d&&(c||c===0)&&(typeof c=="object"&&!Array.isArray(c)?Object.entries(c).forEach(([h,f])=>{r[h]={...r[h],..._o(d,f,l)}}):r.initial={...r.initial,..._o(d,c,l)}),r},{initial:{},small:{},medium:{},large:{}});return Object.entries(o).reduce((r,[a,s])=>{if(s&&Object.keys(s).length>0){const c=Object.entries(s).reduce((l,[d,h])=>(l.push(`${d}: ${h};`),l),[]).join(`
`);a==="initial"?r.push(c):r.push(`${t.breakpoints[a]}{ ${c} }`)}return r},[]).join(`
`)},_o=(e,t,o)=>{if(Array.isArray(e)&&Array.isArray(t)){const r=Bs(t);return e.reduce((a,s,c)=>(a[s]=ft(o,r[c],r[c]),a),{})}else return Array.isArray(e)&&!Array.isArray(t)?e.reduce((r,a)=>(r[a]=ft(o,t,t),r),{}):!Array.isArray(e)&&!Array.isArray(t)?{[e]:ft(o,t,t)}:(console.warn("You've passed an array of values to a property that does not support it. Please check the property and value you're passing."),{})},de=i.forwardRef,I=de((e,t)=>{const{background:o,basis:r,borderColor:a,color:s,flex:c,fontSize:l,grow:d,hasRadius:h,padding:f,paddingBottom:p,paddingLeft:u,paddingRight:m,paddingTop:x,margin:b,marginLeft:y,marginBottom:w,marginRight:$,marginTop:C,shadow:v,shrink:j,lineHeight:k,fontWeight:R,width:L,minWidth:V,maxWidth:O,height:z,minHeight:P,maxHeight:D,top:N,left:B,bottom:K,right:U,borderRadius:G,borderStyle:q,borderWidth:ee,tag:Y,pointerEvents:ae,display:_,position:ne,zIndex:J,overflow:ue,cursor:E,transition:W,transform:Z,animation:F,textAlign:M,textTransform:H,...le}=e,ce=Y||"div",Q={$background:o,$basis:r,$borderColor:a,$color:s,$flex:c,$fontSize:l,$grow:d,$hasRadius:h,$padding:f,$paddingBottom:p,$paddingLeft:u,$paddingRight:m,$paddingTop:x,$margin:b,$marginLeft:y,$marginBottom:w,$marginRight:$,$marginTop:C,$shadow:v,$shrink:j,$lineHeight:k,$fontWeight:R,$width:L,$minWidth:V,$maxWidth:O,$height:z,$minHeight:P,$maxHeight:D,$top:N,$left:B,$bottom:K,$right:U,$borderRadius:G,$borderStyle:q,$borderWidth:ee,$pointerEvents:ae,$display:_,$position:ne,$zIndex:J,$overflow:ue,$cursor:E,$transition:W,$transform:Z,$animation:F,$textAlign:M,$textTransform:H};return n.jsx(Us,{as:ce,ref:t,...Q,...le})}),Us=g.div`
  ${({theme:e,...t})=>bt({padding:t.$padding,paddingTop:t.$paddingTop,paddingBottom:t.$paddingBottom,paddingLeft:t.$paddingLeft,paddingRight:t.$paddingRight,margin:t.$margin,marginTop:t.$marginTop,marginBottom:t.$marginBottom,marginLeft:t.$marginLeft,marginRight:t.$marginRight,top:t.$top,left:t.$left,bottom:t.$bottom,right:t.$right,width:t.$width,minWidth:t.$minWidth,maxWidth:t.$maxWidth,height:t.$height,minHeight:t.$minHeight,maxHeight:t.$maxHeight,color:t.$color,background:t.$background,fontSize:t.$fontSize,fontWeight:t.$fontWeight,lineHeight:t.$lineHeight,borderRadius:t.$hasRadius?e.borderRadius:t.$borderRadius,borderStyle:t.$borderColor&&!t.$borderStyle?"solid":t.$borderStyle,borderWidth:t.$borderColor&&!t.$borderWidth?"1px":t.$borderWidth,borderColor:t.$borderColor,zIndex:t.$zIndex,boxShadow:t.$shadow,display:t.$display,pointerEvents:t.$pointerEvents,cursor:t.$cursor,textAlign:t.$textAlign,textTransform:t.$textTransform,transition:t.$transition,transform:t.$transform,animation:t.$animation,position:t.$position,overflow:t.$overflow,flex:t.$flex,flexShrink:t.$shrink,flexGrow:t.$grow,flexBasis:t.$basis},e)};
`,S=de((e,t)=>{const{className:o,alignItems:r,direction:a,inline:s,gap:c,justifyContent:l,wrap:d,...h}=e,f={$alignItems:r,$direction:a,$gap:c,$justifyContent:l,$wrap:d,$inline:s};return n.jsx(Ks,{className:o,ref:t,...f,...h})}),Ks=g(I)`
  ${({theme:e,$display:t="flex",$alignItems:o="center",$direction:r="row",...a})=>bt({gap:a.$gap,alignItems:o,justifyContent:a.$justifyContent,flexWrap:a.$wrap,flexDirection:r,display:a.$inline?"inline-flex":t},e)};
`,Gs="alpha",qs="beta",Ys="delta",Zs="epsilon",Fo="omega",Xs="pi",Qs="sigma",nr=A`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Js=({$variant:e=Fo,theme:t})=>{switch(e){case Gs:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[5]};
        line-height: ${t.lineHeights[2]};
      `;case qs:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[4]};
        line-height: ${t.lineHeights[1]};
      `;case Ys:return`
        font-weight: ${t.fontWeights.semiBold};
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[2]};
      `;case Zs:return`
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[6]};
      `;case Fo:return`
        font-size: ${t.fontSizes[2]};
        line-height: ${t.lineHeights[4]};
      `;case Xs:return`
        font-size: ${t.fontSizes[1]};
        line-height: ${t.lineHeights[3]};
      `;case Qs:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[0]};
        line-height: ${t.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${t.fontSizes[2]};
      `}},T=de((e,t)=>{const{ellipsis:o,textColor:r="currentcolor",textDecoration:a,textTransform:s,variant:c,lineHeight:l,fontWeight:d,fontSize:h,...f}=e,p={$ellipsis:o,$textColor:r,$textDecoration:a,$textTransform:s,$variant:c,$lineHeight:l,$fontWeight:d,$fontSize:h};return n.jsx(el,{ref:t,tag:"span",...p,...f})}),el=g(I)`
  ${Js}
  ${({$ellipsis:e})=>e?nr:""}

  ${({theme:e,...t})=>bt({color:t.$textColor,textDecoration:t.$textDecoration,textTransform:t.$textTransform,lineHeight:t.$lineHeight,fontWeight:t.$fontWeight,fontSize:t.$fontSize},e)}
`,[tl,vo]=at("Accordion");i.forwardRef(({children:e,size:t="S",...o},r)=>n.jsx(ol,{ref:r,$size:t,collapsible:!0,...o,type:"single",children:n.jsx(tl,{size:t,children:e})}));const ol=g(aa)`
  background-color: ${e=>e.theme.colors.neutral0};

  ${e=>e.$size==="S"?A`
        border-radius: ${t=>t.theme.borderRadius};
        border: solid 1px ${t=>t.theme.colors.neutral200};
      `:A``}
`;i.forwardRef((e,t)=>{const{size:o}=vo("Item");return n.jsx(nl,{$size:o,"data-size":o,ref:t,...e})});const nl=g(ia)`
  overflow: hidden;
  margin: 1px 0;

  &:first-child {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    margin-top: 0;
  }

  &:last-child {
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    margin-bottom: 0;
  }

  &[data-size='S'] {
    & + & {
      border-top: solid 1px ${e=>e.theme.colors.neutral200};
    }
  }

  &[data-state='open'] {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  &:not([data-disabled]):hover {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  /* This applies our desired focus effect correctly. */
  &:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.easeOutQuad};
  }
`;i.forwardRef(({caretPosition:e="left",description:t,icon:o,iconProps:r,children:a,...s},c)=>{const{size:l}=vo("Trigger");return n.jsxs(ar,{$caretPosition:e,$size:l,ref:c,...s,children:[e==="left"?n.jsx(pt,{$size:l,children:n.jsx(Ve,{width:l==="S"?"1.2rem":"1.6rem",height:l==="S"?"1.2rem":"1.6rem"})}):null,n.jsxs(S,{tag:"span",gap:2,overflow:"hidden",children:[o&&l==="S"?n.jsx(rr,{children:n.jsx(o,{...r})}):null,n.jsxs(S,{alignItems:"flex-start",direction:"column",tag:"span",ref:c,overflow:"hidden",children:[n.jsx(T,{fontWeight:l==="S"?"bold":void 0,ellipsis:!0,variant:l==="M"?"delta":void 0,textAlign:"left",width:"100%",children:a}),t&&l==="M"?n.jsx(T,{textAlign:"left",children:t}):null]})]}),e==="right"?n.jsx(pt,{$size:l,children:n.jsx(Ve,{width:l==="S"?"1.2rem":"1.6rem",height:l==="S"?"1.2rem":"1.6rem"})}):null]})});const rr=g(I)`
  color: ${e=>e.theme.colors.neutral500};
  display: flex;

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`,pt=g(S).attrs(e=>({...e,tag:"span"}))`
  background-color: ${e=>e.theme.colors.neutral200};
  width: ${e=>e.$size==="S"?"2.4rem":"3.2rem"};
  height: ${e=>e.$size==="S"?"2.4rem":"3.2rem"};
  flex: ${e=>e.$size==="S"?"0 0 2.4rem":"0 0 3.2rem"};
  border-radius: 50%;
  justify-content: center;

  @media (prefers-reduced-motion: no-preference) {
    transition:
      transform ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.authenticMotion},
      ${e=>e.theme.transitions.backgroundColor};
  }
`,ar=g(sa)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$caretPosition==="left"?"flex-start":"space-between"};
  width: 100%;
  gap: ${e=>e.theme.spaces[4]};
  padding-inline: ${e=>e.$size==="S"?e.theme.spaces[4]:e.theme.spaces[6]};
  padding-block: ${e=>e.$size==="S"?e.theme.spaces[3]:e.theme.spaces[6]};
  cursor: pointer;
  color: ${e=>e.theme.colors.neutral800};
  overflow: hidden;

  &[data-disabled] {
    cursor: default;
    color: ${e=>e.theme.colors.neutral600};
  }

  &[data-state='open'] > ${pt} {
    transform: rotate(180deg);
  }

  /* we remove the default focus because the entire item should have the focus style and the default would be hidden. */
  &:focus-visible {
    outline: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`;i.forwardRef((e,t)=>{const{size:o}=vo("Trigger");return n.jsx(ir,{$size:o,...e,ref:t})});const ir=g(S).attrs(e=>({...e,tag:"span"}))`
  padding-inline: ${e=>e.$size==="S"?e.theme.spaces[2]:e.theme.spaces[6]};
  padding-block: ${e=>e.$size==="S"?e.theme.spaces[2]:e.theme.spaces[6]};

  // Remove default IconButton styles so there are no backgrounds or borders.
  & > button {
    border: none;
    background: none;
    color: ${e=>e.theme.colors.neutral600};

    @media (prefers-reduced-motion: no-preference) {
      transition: ${e=>e.theme.transitions.color};
    }
  }
`;i.forwardRef(({variant:e="primary",...t},o)=>n.jsx(rl,{$variant:e,ref:o,...t}));const rl=g(la)`
  display: flex;
  align-items: center;
  background-color: ${e=>e.$variant==="primary"?e.theme.colors.neutral0:e.theme.colors.neutral100};

  &[data-disabled] {
    background-color: ${e=>e.theme.colors.neutral150};
  }

  &:not([data-disabled]) {
    &:hover,
    &[data-state='open'] {
      background-color: ${e=>e.theme.colors.primary100};

      & > ${ar} {
        color: ${e=>e.theme.colors.primary600};

        & ${rr} {
          color: ${e=>e.theme.colors.primary600};
        }

        & ${pt} {
          background-color: ${e=>e.theme.colors.primary200};
        }
      }

      & > ${ir} > button {
        color: ${e=>e.theme.colors.primary600};
      }
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`;i.forwardRef((e,t)=>n.jsx(sl,{ref:t,...e}));const al=ie`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`,il=ie`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`,sl=g(ca)`
  overflow: hidden;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${al} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }

    &[data-state='closed'] {
      animation: ${il} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }
  }
`,$t=A`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;

    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${e=>e.theme.colors.primary600};
    }
  }
`,Ke=({tag:e,...t})=>{const o=e||"span";return n.jsx(ll,{...t,as:o})},ll=g.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,Je=({children:e,label:t})=>{const o=i.Children.only(e);return n.jsxs(n.Fragment,{children:[i.cloneElement(o,{"aria-hidden":"true",focusable:"false"}),n.jsx(Ke,{children:t})]})};Je.displayName="AccessibleIcon";const zt=({theme:e,$variant:t})=>t==="danger"?e.colors.danger700:t==="success"?e.colors.success700:t==="warning"?e.colors.warning700:e.colors.primary700;g(I)`
  ${$t};
`;g(S)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${zt};
    }
  }
`;g(I)`
  & a > span {
    color: ${zt};
  }

  svg path {
    fill: ${zt};
  }
`;function ve({prop:e,defaultProp:t,onChange:o=()=>{}}){const[r,a]=sr({defaultProp:t,onChange:o}),s=e!==void 0,c=s?e:r,l=vn(o),d=i.useCallback(h=>{if(s){const p=typeof h=="function"?h(e):h;p!==e&&l(p)}else a(h)},[s,e,a,l]);return[c,d]}function sr({defaultProp:e,onChange:t}){const o=i.useState(e),[r]=o,a=i.useRef(r),s=vn(t);return i.useEffect(()=>{a.current!==r&&(s(r),a.current=r)},[r,a,s]),o}const zo={easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},Wo={120:"120ms"};`${Wo[120]}${zo.easeOutQuad}`,`${Wo[120]}${zo.easeOutQuad}`;const te={overlayFadeIn:ie`
    from {
      opacity: 0;
    }
    to {
      opacity: 0.2;
    }
  `,modalPopIn:ie`
    from {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  `,modalPopOut:ie`
    from {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    to {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
  `,popIn:ie`
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  `,popOut:ie`
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.8);
      opacity: 0;
    }
  `,slideDownIn:ie`
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideDownOut:ie`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  `,slideUpIn:ie`
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideUpOut:ie`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(10px);
    }
  `,fadeIn:ie`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,fadeOut:ie`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `},et=32,Bo=2;i.forwardRef(({onLoadingStatusChange:e,delayMs:t=600,src:o,alt:r,fallback:a,preview:s=!1,...c},l)=>{const[d,h]=ve({onChange:e}),[f,p]=i.useState(!1),u=s&&d==="loaded",m=x=>{u&&p(x)};return n.jsxs(hn,{onOpenChange:m,children:[n.jsx(pn,{asChild:!0,children:n.jsxs(Wt,{ref:l,...c,children:[u?n.jsx(cl,{width:"100%",height:"100%",position:"absolute",background:"neutral0",zIndex:"overlay",style:{opacity:f?.4:0}}):null,n.jsx(dl,{src:o,alt:r,onLoadingStatusChange:h}),n.jsx(da,{delayMs:t,children:n.jsx(T,{fontWeight:"bold",textTransform:"uppercase",children:a})})]})}),u?n.jsx(mn,{children:n.jsx(ul,{side:"top",sideOffset:4,children:n.jsx(fl,{src:o,alt:r})})}):null]})});const lr=A`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  overflow: hidden;
  border-radius: 50%;
`,cr=A`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`,Wt=g(ua)`
  position: relative;
  z-index: 0;
  ${lr}
  width: ${et/10}rem;
  height: ${et/10}rem;
  /* TODO: we should get the user email & hash it to turn it into a hex-value so different emails can consistently get a different background */
  background-color: ${e=>e.theme.colors.primary600};
  color: ${e=>e.theme.colors.neutral0};
`,cl=g(I)`
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,dl=g(fa)`
  ${cr}
`,ul=g(gn)`
  ${lr}
  width: ${et*Bo/10}rem;
  height: ${et*Bo/10}rem;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${te.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,fl=g.img`
  ${cr}
`;i.forwardRef((e,t)=>n.jsx(hl,{...e,ref:t,tag:"div"}));const hl=g(S)`
  & > ${Wt} + ${Wt} {
    margin-left: -${et/10/2}rem;
  }
`,dr=({active:e=!1,size:t="M",textColor:o="neutral600",backgroundColor:r="neutral150",children:a,minWidth:s=5,...c})=>{const l=t==="S"?1:2;return n.jsx(pl,{inline:!0,alignItems:"center",justifyContent:"center",minWidth:s,paddingLeft:l,paddingRight:l,background:e?"primary200":r,$size:t,...c,children:n.jsx(T,{variant:"sigma",textColor:e?"primary600":o,lineHeight:"1rem",children:a})})},pl=g(S)`
  border-radius: ${({theme:e,$size:t})=>t==="S"?"2px":e.borderRadius};
  ${({$size:e,theme:t})=>e==="S"?A`
        padding-block: 0.3rem;
        padding-inline ${t.spaces[1]}
      `:A`
      padding-block: 0.7rem;
      padding-inline ${t.spaces[2]}
    `};
`,Ge=de(({href:e,disabled:t=!1,isExternal:o=!1,...r},a)=>n.jsx(ml,{tag:"a",ref:a,target:o?"_blank":void 0,rel:o?"noreferrer noopener":void 0,href:e,tabIndex:t?-1:void 0,"aria-disabled":t,pointerEvents:t?"none":void 0,cursor:t?void 0:"pointer",...r})),ml=g(I)`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`,ur=()=>n.jsx(I,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:n.jsx(T,{variant:"pi",textColor:"neutral500",children:"/"})});ur.displayName="Divider";const gl=g(S)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  & > *:first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,xl=i.forwardRef(({label:e,children:t,...o},r)=>{const a=i.Children.toArray(t);return n.jsx(I,{"aria-label":e,tag:"nav",...o,ref:r,children:n.jsx(gl,{tag:"ol",children:i.Children.map(a,(s,c)=>{const l=a.length>1&&c+1<a.length;return n.jsxs(S,{inline:!0,tag:"li",children:[s,l&&n.jsx(ur,{})]})})})})});xl.displayName="Breadcrumbs";const bl=i.forwardRef(({children:e,isCurrent:t=!1,...o},r)=>n.jsx(I,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,ref:r,children:n.jsx(T,{variant:"pi",textColor:"neutral800",fontWeight:t?"bold":"regular","aria-current":t,...o,children:e})}));bl.displayName="Crumb";const $l=g(Ge)`
  border-radius: ${({theme:e})=>e.borderRadius};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: ${({theme:e})=>e.fontSizes[1]};
  line-height: ${({theme:e})=>e.lineHeights[4]};
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  text-decoration: none;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
    color: ${({theme:e})=>e.colors.neutral700};
  }
`,wl=i.forwardRef(({children:e,...t},o)=>n.jsx($l,{ref:o,...t,children:e}));wl.displayName="CrumbLink";const Fe=e=>e.replaceAll(":","");function yl(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function fr(...e){return t=>e.forEach(o=>yl(o,t))}function he(...e){return i.useCallback(fr(...e),e)}const Cl=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),ze=Cl()?i.useEffect:i.useLayoutEffect,vl=wi.useId||(()=>{});let jl=0;const ye=e=>{const[t,o]=i.useState(vl());return ze(()=>{e||o(r=>r??String(jl++))},[e]),e?.toString()??(t||"")},it=(e,t,{selectorToWatch:o,skipWhen:r=!1})=>{const a=no(t);i.useEffect(()=>{if(r||!e.current)return;const s={root:e.current,rootMargin:"0px"},c=h=>{h.forEach(f=>{f.isIntersecting&&e.current&&e.current.scrollHeight>e.current.clientHeight&&a(f)})},l=new IntersectionObserver(c,s),d=e.current.querySelector(o);return d&&l.observe(d),()=>{l.disconnect()}},[r,a,o,e])},jo="success-light",So="danger-light",wt="default",st="tertiary",lt="secondary",hr="danger",pr="success",yt="ghost",Io=[jo,So],Sl=[wt,st,lt,hr,pr,yt,...Io],Il=["XS","S","M","L"],be=e=>e===jo||e===So?`${e.substring(0,e.lastIndexOf("-"))}`:e===st?"neutral":e===wt||e===lt||Sl.every(t=>t!==e)?"primary":`${e}`,mr=({theme:e})=>A`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    color: ${e.colors.neutral600};
    cursor: default;
  `,gr=({theme:e,$variant:t})=>[...Io,lt].includes(t)?A`
      background-color: ${e.colors.neutral0};
    `:t===st?A`
      background-color: ${e.colors.neutral100};
    `:t===yt?A`
      background-color: ${e.colors.neutral100};
    `:t===wt?A`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:A`
    border: 1px solid ${e.colors[`${be(t)}500`]};
    background: ${e.colors[`${be(t)}500`]};
  `,xr=({theme:e,$variant:t})=>[...Io,lt].includes(t)?A`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${be(t)}600`]};
      color: ${e.colors[`${be(t)}600`]};
    `:t===st||t===yt?A`
      background-color: ${e.colors.neutral150};
    `:A`
    border: 1px solid ${e.colors[`${be(t)}600`]};
    background: ${e.colors[`${be(t)}600`]};
  `,br=({theme:e,$variant:t})=>{switch(t){case So:case jo:case lt:return A`
        border: 1px solid ${e.colors[`${be(t)}200`]};
        background: ${e.colors[`${be(t)}100`]};
        color: ${e.colors[`${be(t)}700`]};
      `;case st:return A`
        border: 1px solid ${e.colors.neutral200};
        background: ${e.colors.neutral0};
        color: ${e.colors.neutral800};
      `;case yt:return A`
        border: 1px solid transparent;
        background: transparent;
        color: ${e.colors.neutral800};

        svg {
          fill: ${e.colors.neutral500};
        }
      `;case pr:case hr:return A`
        border: 1px solid ${e.colors[`${be(t)}600`]};
        background: ${e.colors[`${be(t)}600`]};
        color: ${e.colors.neutral0};
      `;default:return A`
        border: 1px solid ${e.colors.buttonPrimary600};
        background: ${e.colors.buttonPrimary600};
        color: ${e.colors.buttonNeutral0};
      `}},Bt=de(({variant:e=wt,startIcon:t,endIcon:o,disabled:r=!1,children:a,onClick:s,size:c=Il[1],loading:l=!1,fullWidth:d=!1,...h},f)=>{const p=r||l,u=m=>{!p&&s&&s(m)};return n.jsxs(Tl,{ref:f,"aria-disabled":p,disabled:p,$size:c,$variant:e,tag:"button",onClick:u,hasRadius:!0,gap:2,inline:!0,alignItems:"center",justifyContent:"center",width:d?"100%":void 0,paddingLeft:4,paddingRight:4,cursor:"pointer",...h,children:[(t||l)&&n.jsx(S,{tag:"span","aria-hidden":!0,children:l?n.jsx(kl,{}):t}),n.jsx(T,{variant:c==="S"?"pi":void 0,fontWeight:"bold",children:a}),o&&n.jsx(S,{tag:"span","aria-hidden":!0,children:o})]})}),Rl=ie`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,kl=g(fn)`
  animation: ${Rl} 2s infinite linear;
  will-change: transform;
`,Tl=g(S)`
  height: ${({theme:e,$size:t})=>e.sizes.button[t]};
  text-decoration: none;
  ${br}

  &:hover {
    ${gr}
  }

  &:active {
    ${xr}
  }

  &[aria-disabled='true'] {
    ${mr}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`,Ro=i.forwardRef(({children:e,description:t,label:o,defaultOpen:r,open:a,onOpenChange:s,delayDuration:c=500,disableHoverableContent:l,...d},h)=>!o&&!t?e:n.jsxs(hn,{defaultOpen:r,open:a,onOpenChange:s,delayDuration:c,disableHoverableContent:l,children:[n.jsx(pn,{asChild:!0,children:e}),n.jsx(mn,{children:n.jsx(El,{ref:h,sideOffset:8,...d,children:n.jsx(T,{variant:"pi",fontWeight:"bold",children:o||t})})})]})),El=g(gn)`
  background-color: ${e=>e.theme.colors.neutral900};
  color: ${e=>e.theme.colors.neutral0};
  padding-inline: ${e=>e.theme.spaces[2]};
  padding-block: ${e=>e.theme.spaces[2]};
  border-radius: ${e=>e.theme.borderRadius};
  z-index: ${e=>e.theme.zIndices.tooltip};
  will-change: opacity;
  transform-origin: var(--radix-tooltip-content-transform-origin);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${te.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Te=de(({label:e,background:t,children:o,disabled:r=!1,onClick:a,size:s="S",variant:c="tertiary",withTooltip:l=!0,...d},h)=>{const f=u=>{!r&&a&&a(u)},p=n.jsx(Qe,{"aria-disabled":r,background:r?"neutral150":t,tag:"button",display:"inline-flex",justifyContent:"center",hasRadius:!0,cursor:"pointer",...d,ref:h,$size:s,onClick:f,$variant:c,children:n.jsx(Je,{label:e,children:o})});return l?n.jsx(Ro,{label:e,children:p}):p}),Qe=g(S)`
  text-decoration: none;

  ${e=>{switch(e.$size){case"XS":return A`
          padding-block: 0.2rem;
          padding-inline: 0.2rem;
        `;case"S":return A`
          padding-block: 0.7rem;
          padding-inline: 0.7rem;
        `;case"M":return A`
          padding-block: 0.9rem;
          padding-inline: 0.9rem;
        `;case"L":return A`
          padding-block: 1.1rem;
          padding-inline: 1.1rem;
        `}}}
  ${br}
  ${e=>e.$variant==="tertiary"?A`
          color: ${e.theme.colors.neutral500};
        `:""}

  &:hover {
    ${gr}
    ${e=>e.$variant==="tertiary"?A`
            color: ${e.theme.colors.neutral600};
          `:""}
  }

  &:active {
    ${xr}
  }

  &[aria-disabled='true'] {
    ${mr}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`;g(S)`
  & ${Qe}:first-child {
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & ${Qe}:last-child {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${Qe} {
    border-radius: 0;

    & + ${Qe} {
      border-left: none;
    }
  }
`;const Ht=de(({children:e,href:t,disabled:o=!1,startIcon:r,endIcon:a,isExternal:s=!1,...c},l)=>n.jsxs(Dl,{ref:l,href:t,disabled:o,isExternal:s,...c,children:[r,n.jsx(T,{textColor:o?"neutral600":"primary600",children:e}),a,t&&!a&&s&&n.jsx(un,{})]})),Dl=g(Ge)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:e})=>e.spaces[2]};
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg {
    font-size: 1rem;

    path {
      fill: ${({disabled:e,theme:t})=>e?t.colors.neutral600:t.colors.primary600};
    }
  }

  &:hover {
    & > span {
      color: ${({theme:e})=>e.colors.primary500};
    }

    svg path {
      fill: ${({theme:e})=>e.colors.primary500};
    }
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${$t};
`,Al=e=>{switch(e){case"danger":return"danger100";default:return"primary100"}},Pl=$a,Vl=i.forwardRef(({label:e,endIcon:t=n.jsx(Ve,{width:"1.2rem",height:"1.2rem","aria-hidden":!0}),tag:o=Bt,icon:r,...a},s)=>{const c={...a,ref:s,type:"button"};return n.jsx(ha,{asChild:!0,disabled:c.disabled,children:o===Te?n.jsx(Te,{label:e,variant:"tertiary",...c,children:r}):n.jsx(Bt,{endIcon:t,variant:"ghost",...c})})}),Nl=i.forwardRef(({children:e,intersectionId:t,onCloseAutoFocus:o,popoverPlacement:r="bottom-start",...a},s)=>{const[c,l]=r.split("-");return n.jsx(xn,{children:n.jsx(Ml,{align:l,side:c,loop:!0,onCloseAutoFocus:o,asChild:!0,children:n.jsxs($r,{ref:s,direction:"column",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,marginTop:1,marginBottom:1,alignItems:"flex-start",position:"relative",overflow:"auto",...a,children:[e,n.jsx(I,{id:t,width:"100%",height:"1px"})]})})})}),$r=g(S)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  z-index: ${e=>e.theme.zIndices.popover};

  &::-webkit-scrollbar {
    display: none;
  }
`,Ml=g(pa)`
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${te.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${te.slideDownIn};
      }
    }
  }
`,wr=({theme:e,$variant:t})=>A`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }

  &[data-highlighted] {
    background-color: ${e.colors[Al(t)]};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,Ol=g(S)`
  ${({theme:e,$variant:t})=>wr({theme:e,$variant:t})}
`;g(Ht)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:t})=>ft(e.colors,t,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  /* TODO: do we need this? */
  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${({theme:e,$variant:t})=>wr({theme:e,$variant:t})}
`;const Ll=g(I)`
  /* Negative horizontal margin to compensate Menu.Content's padding */
  margin: ${({theme:e})=>e.spaces[1]} -${({theme:e})=>e.spaces[1]};
  width: calc(100% + ${({theme:e})=>e.spaces[2]});
  /* Hide separator if there's nothing above in the menu */
  &:first-child {
    display: none;
  }
`;i.forwardRef((e,t)=>n.jsx(ma,{...e,asChild:!0,children:n.jsx(Ll,{height:"1px",shrink:0,background:"neutral150",ref:t})}));i.forwardRef((e,t)=>n.jsx(ga,{asChild:!0,children:n.jsx(_l,{ref:t,variant:"sigma",textColor:"neutral600",...e})}));const _l=g(T)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`;i.forwardRef(({disabled:e=!1,...t},o)=>n.jsx(xa,{asChild:!0,disabled:e,children:n.jsxs(Fl,{ref:o,color:"neutral800",tag:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...t,children:[n.jsx(T,{children:t.children}),n.jsx(Zt,{fill:"neutral500",height:"1.2rem",width:"1.2rem"})]})}));const Fl=g(Ol)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`;i.forwardRef((e,t)=>n.jsx(xn,{children:n.jsx(ba,{sideOffset:8,asChild:!0,children:n.jsx($r,{ref:t,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})}));const zl=Pl,Wl=Vl,Bl=Nl,Hl=i.forwardRef(({children:e,onOpen:t,onClose:o,popoverPlacement:r,onReachEnd:a,...s},c)=>{const l=i.useRef(null),d=he(c,l),h=i.useRef(null),[f,p]=i.useState(!1),u=y=>{a&&a(y)},m=y=>{y&&typeof t=="function"?t():!y&&typeof o=="function"&&o(),p(y)},x=ye(),b=`intersection-${Fe(x)}`;return it(h,u,{selectorToWatch:`#${b}`,skipWhen:!f}),n.jsxs(zl,{onOpenChange:m,children:[n.jsx(Wl,{ref:d,...s,children:s.label}),n.jsx(Bl,{ref:h,intersectionId:b,popoverPlacement:r,children:e})]})}),Ul=g(Hl)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  height: unset;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
  }
`,Kl=i.forwardRef(({children:e,...t},o)=>n.jsx(Ul,{ref:o,endIcon:null,size:"S",...t,children:e}));Kl.displayName="CrumbSimpleMenu";const yr=i.createContext({id:""}),Gl=()=>i.useContext(yr);i.forwardRef(({id:e,...t},o)=>{const r=ye(e),a=i.useMemo(()=>({id:r}),[r]);return n.jsx(yr.Provider,{value:a,children:n.jsx(I,{ref:o,id:e,tabIndex:0,hasRadius:!0,background:"neutral0",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",shadow:"tableShadow",tag:"article","aria-labelledby":`${r}-title`,...t})})});const ql=i.forwardRef(({position:e,...t},o)=>n.jsx(Yl,{ref:o,$position:e,...t,direction:"row",gap:2})),Yl=g(S)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({$position:e,theme:t})=>{if(e==="end")return t.spaces[3]}};
  left: ${({$position:e,theme:t})=>{if(e==="start")return t.spaces[3]}};
`;g.img`
  // inline flows is based on typography and displays an extra white space below the image
  // switch to block is required in order to make the img stick the bottom of the container
  // addition infos: https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;g.div`
  display: flex;
  justify-content: center;
  height: ${({$size:e})=>e==="S"?"8.8rem":"16.4rem"};
  width: 100%;
  background: repeating-conic-gradient(${({theme:e})=>e.colors.neutral100} 0% 25%, transparent 0% 50%) 50% / 20px
    20px;
  border-top-left-radius: ${({theme:e})=>e.borderRadius};
  border-top-right-radius: ${({theme:e})=>e.borderRadius};
`;g.div`
  margin-left: auto;
  flex-shrink: 0;
`;g(dr)`
  margin-left: ${({theme:e})=>e.spaces[1]};
`;const Zl=({fill:e,...t})=>{const{colors:o}=yi();return n.jsx(I,{tag:"svg",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:e?o[e]:void 0,...t,children:n.jsx("path",{d:"M29.0613 10.0613L13.0613 26.0613C12.9219 26.2011 12.7563 26.3121 12.574 26.3878C12.3917 26.4635 12.1962 26.5024 11.9988 26.5024C11.8013 26.5024 11.6059 26.4635 11.4235 26.3878C11.2412 26.3121 11.0756 26.2011 10.9363 26.0613L3.93626 19.0613C3.79673 18.9217 3.68605 18.7561 3.61053 18.5738C3.53502 18.3915 3.49615 18.1961 3.49615 17.9988C3.49615 17.8014 3.53502 17.606 3.61053 17.4237C3.68605 17.2414 3.79673 17.0758 3.93626 16.9363C4.07579 16.7967 4.24143 16.686 4.42374 16.6105C4.60604 16.535 4.80143 16.4962 4.99876 16.4962C5.19608 16.4962 5.39147 16.535 5.57378 16.6105C5.75608 16.686 5.92173 16.7967 6.06126 16.9363L12 22.875L26.9388 7.93876C27.2205 7.65697 27.6027 7.49866 28.0013 7.49866C28.3998 7.49866 28.782 7.65697 29.0638 7.93876C29.3455 8.22055 29.5039 8.60274 29.5039 9.00126C29.5039 9.39977 29.3455 9.78197 29.0638 10.0638L29.0613 10.0613Z"})})},Ho=i.forwardRef(({defaultChecked:e,checked:t,onCheckedChange:o,...r},a)=>{const s=i.useRef(null),[c,l]=ve({defaultProp:e,prop:t,onChange:o}),d=he(s,a);return n.jsx(Xl,{ref:d,checked:c,onCheckedChange:l,...r,children:n.jsxs(Ql,{forceMount:!0,children:[c===!0?n.jsx(Zl,{width:"1.6rem",fill:"neutral0"}):null,c==="indeterminate"?n.jsx(wa,{fill:"neutral0"}):null]})})}),Xl=g(ya)`
  background: ${e=>e.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  border-radius: ${e=>e.theme.borderRadius};
  border: 1px solid ${e=>e.theme.colors.neutral300};
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // this ensures the checkbox is always a square even in flex-containers.
  flex: 0 0 2rem;

  &[data-state='checked']:not([data-disabled]),
  &[data-state='indeterminate']:not([data-disabled]) {
    border: 1px solid ${e=>e.theme.colors.primary600};
    background-color: ${e=>e.theme.colors.primary600};
  }

  &[data-disabled] {
    background-color: ${e=>e.theme.colors.neutral200};
  }

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: -1;
    min-width: 44px;
    min-height: 44px;
  }
`,Ql=g(Ca)`
  display: inline-flex;
  pointer-events: auto !important;
  width: 100%;
  height: 100%;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,ko=i.forwardRef(({children:e,...t},o)=>{const r=ye(t.id);return e?n.jsxs(S,{gap:2,children:[n.jsx(Ho,{id:r,...t}),n.jsx(T,{tag:"label",textColor:"neutral800",htmlFor:r,children:e})]}):n.jsx(Ho,{ref:o,...t})});i.forwardRef((e,t)=>{const{id:o}=Gl();return n.jsx(ql,{position:"start",children:n.jsx(ko,{"aria-labelledby":`${o}-title`,...e,ref:t})})});g(I)`
  word-break: break-all;
`;g(S)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`;const se={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",END:"End",HOME:"Home",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown"},Jl=g(I)`
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`,ec=g(S)`
  grid-area: slides;
`,Uo=g(I)`
  grid-area: ${({$area:e})=>e};

  &:focus svg path,
  &:hover svg path {
    fill: ${({theme:e})=>e.colors.neutral900};
  }
`,tc=i.forwardRef(({actions:e,children:t,label:o,nextLabel:r,onNext:a,onPrevious:s,previousLabel:c,secondaryLabel:l,selectedSlide:d,...h},f)=>{const p=i.useRef(null),u=i.useRef(null),m=i.Children.map(t,(b,y)=>i.cloneElement(b,{selected:y===d})),x=b=>{switch(b.key){case se.RIGHT:{b.preventDefault(),u?.current&&u.current.focus(),a&&a();break}case se.LEFT:{b.preventDefault(),p?.current&&p.current.focus(),s&&s();break}}};return n.jsx(I,{ref:f,...h,onKeyDown:x,children:n.jsxs(I,{padding:2,borderColor:"neutral200",hasRadius:!0,background:"neutral100",children:[n.jsxs(Jl,{tag:"section","aria-roledescription":"carousel","aria-label":o,display:"grid",position:"relative",children:[m&&m.length>1&&n.jsxs(n.Fragment,{children:[n.jsx(Uo,{tag:"button",onClick:s,$area:"startAction",ref:p,type:"button",children:n.jsx(Je,{label:c,children:n.jsx(bn,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})}),n.jsx(Uo,{tag:"button",onClick:a,$area:"endAction",ref:u,type:"button",children:n.jsx(Je,{label:r,children:n.jsx(Zt,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})})]}),n.jsx(ec,{"aria-live":"polite",paddingLeft:2,paddingRight:2,width:"100%",overflow:"hidden",children:m}),e]}),l&&n.jsx(I,{paddingTop:2,paddingLeft:4,paddingRight:4,children:n.jsx(Ro,{label:l,children:n.jsx(S,{justifyContent:"center",children:n.jsx(T,{variant:"pi",textColor:"neutral600",ellipsis:!0,children:l})})})})]})})}),De=(e="&")=>({theme:t,$hasError:o=!1})=>A`
    outline: none;
    box-shadow: none;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${o?t.colors.danger600:t.colors.primary600};
      box-shadow: ${o?t.colors.danger600:t.colors.primary600} 0px 0px 0px 2px;
    }
  `,[oc,ge]=at("Field",{}),We=i.forwardRef(({children:e,name:t,error:o=!1,hint:r,id:a,required:s=!1,...c},l)=>{const d=ye(a),[h,f]=i.useState();return n.jsx(oc,{name:t,id:d,error:o,hint:r,required:s,labelNode:h,setLabelNode:f,children:n.jsx(S,{direction:"column",alignItems:"stretch",gap:1,ref:l,...c,children:e})})}),Cr=i.forwardRef(({children:e,action:t,...o},r)=>{const{id:a,required:s,setLabelNode:c}=ge("Label"),l=he(r,c);return e?n.jsxs(nc,{ref:l,variant:"pi",textColor:"neutral800",fontWeight:"bold",...o,id:`${a}-label`,htmlFor:a,tag:"label",ellipsis:!0,children:[e,s&&n.jsx(T,{"aria-hidden":!0,lineHeight:"1em",textColor:"danger600",children:"*"}),t&&n.jsx(rc,{marginLeft:1,children:t})]}):null}),nc=g(T)`
  display: flex;
`,rc=g(S)`
  line-height: 0;
  color: ${({theme:e})=>e.colors.neutral500};
`,To=i.forwardRef(({endAction:e,startAction:t,disabled:o=!1,onChange:r,hasError:a,required:s,className:c,size:l="M",...d},h)=>{const{id:f,error:p,hint:u,name:m,required:x}=ge("Input");let b;p?b=`${f}-error`:u&&(b=`${f}-hint`);const y=!!p,w=i.useRef(null),$=i.useRef(null),C=he($,h),v=j=>{!o&&r&&r(j)};return i.useLayoutEffect(()=>{if(w.current&&$.current){const j=w.current.offsetWidth,k=$.current;if(k){const R=j+8+16;k.style.paddingRight=`${R}px`}}},[e]),n.jsxs(sc,{gap:2,justifyContent:"space-between",$hasError:y||a,$disabled:o,$size:l,$hasLeftAction:!!t,$hasRightAction:!!e,className:c,children:[t,n.jsx(ac,{id:f,name:m,ref:C,$size:l,"aria-describedby":b,"aria-invalid":y||a,"aria-disabled":o,disabled:o,"data-disabled":o?"":void 0,onChange:v,"aria-required":x||s,$hasLeftAction:!!t,$hasRightAction:!!e,...d}),e&&n.jsx(ic,{ref:w,children:e})]})}),ac=g.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  font-size: ${e=>e.theme.fontSizes[2]};
  line-height: 2.2rem;
  display: block;
  width: 100%;
  background: inherit;

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }

  ${e=>{switch(e.$size){case"S":return A`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[1]};
        `;default:return A`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[2]};
        `}}}
`,ic=g(S)`
  position: absolute;
  right: ${({theme:e})=>e.spaces[4]};
  top: 50%;
  transform: translateY(-50%);
`,sc=g(S)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  padding-inline-start: ${({$hasLeftAction:e,theme:t})=>e?t.spaces[4]:0};
  position: relative;

  ${De()}
  ${({theme:e,$disabled:t})=>t?A`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0};
`,lc=()=>{const{id:e,hint:t,error:o}=ge("Hint");return!t||o?null:n.jsx(T,{variant:"pi",tag:"p",id:`${e}-hint`,textColor:"neutral600",children:t})},cc=()=>{const{id:e,error:t}=ge("Error");return!t||typeof t!="string"?null:n.jsx(T,{variant:"pi",tag:"p",id:`${e}-error`,textColor:"danger600","data-strapi-field-error":!0,children:t})};i.forwardRef(({label:e,children:t,...o},r)=>n.jsx(dc,{justifyContent:"unset",background:"transparent",borderStyle:"none",...o,type:"button",tag:"button",ref:r,children:n.jsx(Je,{label:e,children:t})}));const dc=g(S)`
  font-size: 1.6rem;
  padding: 0;
`;i.forwardRef(({actions:e,children:t,error:o,hint:r,label:a,labelAction:s,nextLabel:c,onNext:l,onPrevious:d,previousLabel:h,required:f,secondaryLabel:p,selectedSlide:u,id:m,...x},b)=>{const y=ye(m);return n.jsx(We,{hint:r,error:o,id:y,required:f,children:n.jsxs(S,{direction:"column",alignItems:"stretch",gap:1,children:[a&&n.jsx(Cr,{action:s,children:a}),n.jsx(tc,{ref:b,actions:e,label:a,nextLabel:c,onNext:l,onPrevious:d,previousLabel:h,secondaryLabel:p,selectedSlide:u,id:y,...x,children:t}),n.jsx(lc,{}),n.jsx(cc,{})]})})});g(I)`
  ${nr}
`;g(S)`
  display: ${({$selected:e})=>e?"flex":"none"};
`;const Ct=i.forwardRef(({children:e,viewportRef:t,...o},r)=>n.jsxs(uc,{ref:r,...o,children:[n.jsx(fc,{ref:t,children:e}),n.jsx(Ko,{orientation:"vertical",children:n.jsx(Go,{})}),n.jsx(Ko,{orientation:"horizontal",children:n.jsx(Go,{})})]})),uc=g(va)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`,fc=g(ja)`
  min-width: 100%;
`,Ko=g(Sa)`
  display: flex;
  /* ensures no selection */
  user-select: none;
  /* disable browser handling of all panning and zooming gestures on touch devices */
  touch-action: none;

  &[data-orientation='vertical'] {
    width: 0.4rem;
    margin: 0.4rem;
  }

  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: 0.4rem;
    margin: 0.4rem;
  }
`,Go=g(Ia)`
  position: relative;
  flex: 1;
  background-color: ${e=>e.theme.colors.neutral150};
  border-radius: 0.4rem;

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`,hc="data:image/svg+xml,%3csvg%20width='63'%20height='63'%20viewBox='0%200%2063%2063'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M42.5563%2011.9816C39.484%2010.3071%2035.8575%209.29097%2032.3354%209.13521C28.6443%208.92888%2024.8295%209.72318%2021.3336%2011.4129C20.9123%2011.5901%2020.5376%2011.8101%2020.1722%2012.0249L20.0108%2012.1179C19.8774%2012.1951%2019.7441%2012.2724%2019.608%2012.3536C19.3253%2012.5146%2019.0492%2012.6744%2018.7544%2012.8792C18.5463%2013.0329%2018.3395%2013.1759%2018.1301%2013.323C17.5658%2013.7208%2016.9868%2014.1317%2016.4983%2014.5979C14.8476%2015.9524%2013.5571%2017.6075%2012.6071%2018.9214C10.4365%2022.1566%209.08622%2025.9567%208.80702%2029.6143L8.7764%2030.1588C8.73328%2030.9196%208.68476%2031.7057%208.75353%2032.4555C8.76648%2032.6084%208.7661%2032.7638%208.77506%2032.914C8.78895%2033.229%208.80152%2033.5373%208.846%2033.8672L9.07396%2035.4221C9.09756%2035.5764%209.1198%2035.7413%209.1633%2035.9263L9.65919%2037.9272L10.138%2039.2823C10.2729%2039.6673%2010.4158%2040.0751%2010.6%2040.43C12.0292%2043.637%2014.1425%2046.4578%2016.7063%2048.585C19.0508%2050.5296%2021.824%2052.0023%2024.7491%2052.8452L26.2371%2053.2376C26.3781%2053.2693%2026.4926%2053.2889%2026.6031%2053.3058L26.7775%2053.3311C27.0052%2053.3636%2027.2195%2053.3986%2027.4445%2053.435C27.8598%2053.5076%2028.2672%2053.5748%2028.7079%2053.6183L30.5641%2053.7229C30.9516%2053.7249%2031.3352%2053.7068%2031.7081%2053.6874C31.9039%2053.681%2032.0984%2053.6681%2032.3288%2053.662C34.5253%2053.4772%2036.5106%2053.0634%2038.0516%2052.4652C38.1769%2052.4171%2038.3008%2052.3796%2038.4234%2052.3355C38.6727%2052.2499%2038.9259%2052.167%2039.1432%2052.0599L40.8591%2051.2626L42.5702%2050.266C42.9009%2050.0682%2043.0205%2049.6414%2042.8282%2049.2984C42.632%2048.9526%2042.2034%2048.8308%2041.8634%2049.0166L40.1792%2049.9218L38.4995%2050.6224C38.3169%2050.6953%2038.121%2050.7534%2037.9224%2050.8155C37.7838%2050.8489%2037.6518%2050.8983%2037.5012%2050.9408C36.0711%2051.435%2034.2445%2051.7425%2032.244%2051.8346C32.0442%2051.8383%2031.8471%2051.8379%2031.654%2051.8403C31.3051%2051.8414%2030.9602%2051.8451%2030.6392%2051.8305L28.9177%2051.6725C28.5476%2051.619%2028.1695%2051.5427%2027.7848%2051.4678C27.5639%2051.4167%2027.3376%2051.3737%2027.1299%2051.3374L26.9529%2051.2987C26.8704%2051.2834%2026.7772%2051.2667%2026.7333%2051.2543L25.3466%2050.8322C22.7651%2049.9789%2020.33%2048.5729%2018.2942%2046.7557C16.1056%2044.7951%2014.3339%2042.2335%2013.1742%2039.3582C12.0276%2036.6013%2011.5988%2033.2792%2011.9716%2030.0076C12.3145%2027.0213%2013.3948%2024.1635%2015.1858%2021.5083C15.3034%2021.3339%2015.421%2021.1596%2015.5212%2021.0196C16.4309%2019.8688%2017.5408%2018.5589%2018.9483%2017.496C19.3367%2017.1525%2019.7862%2016.856%2020.2611%2016.5478C20.4878%2016.4009%2020.7079%2016.2553%2020.8907%2016.1306C21.0974%2016.0048%2021.3188%2015.8831%2021.5348%2015.7694C21.6761%2015.6975%2021.8162%2015.619%2021.9388%2015.5576L22.1002%2015.4646C22.4002%2015.3037%2022.6749%2015.1546%2022.9908%2015.039L24.1186%2014.5715C24.3399%2014.4844%2024.5718%2014.4159%2024.7997%2014.3447C24.953%2014.2982%2025.0982%2014.2635%2025.2635%2014.2078C25.786%2014.0182%2026.3283%2013.9112%2026.9105%2013.7965C27.117%2013.7571%2027.3302%2013.7163%2027.5608%2013.6585C27.7553%2013.611%2027.9737%2013.5969%2028.2082%2013.5762C28.364%2013.5603%2028.5172%2013.5483%2028.6318%2013.5333C28.7876%2013.5173%2028.9342%2013.5066%2029.0927%2013.4867C29.3285%2013.4555%2029.5456%2013.4347%2029.7494%2013.4337C30.0237%2013.44%2030.2994%2013.4357%2030.5777%2013.4274C31.0811%2013.421%2031.5579%2013.4197%2032.0318%2013.4914C34.9664%2013.7352%2037.7144%2014.6085%2040.2052%2016.0868C42.3489%2017.3655%2044.2716%2019.1525%2045.7607%2021.264C47.0255%2023.0628%2047.9756%2025.0528%2048.4928%2027.0393C48.572%2027.3176%2048.6299%2027.5931%2048.6839%2027.8659C48.7154%2028.0428%2048.7563%2028.2145%2048.7892%2028.3636C48.8037%2028.4541%2048.8208%2028.5406%2048.8445%2028.6258C48.8749%2028.7443%2048.8986%2028.864%2048.9116%2028.9651L48.9793%2029.6047C48.9922%2029.7748%2049.0132%2029.9331%2049.0301%2030.0887C49.0668%2030.3268%2049.0889%2030.5608%2049.0964%2030.7561L49.1083%2031.9001C49.1312%2032.3307%2049.089%2032.7116%2049.0522%2033.0673C49.0384%2033.2598%2049.0126%2033.4443%2049.0123%2033.5824C48.9961%2033.6926%2048.9918%2033.7935%2048.9836%2033.8917C48.9753%2034.0072%2048.9724%2034.1148%2048.9414%2034.2554L48.5449%2036.3059C48.3134%2037.8623%2049.3793%2039.3365%2050.9488%2039.5822C52.0417%2039.7601%2053.1536%2039.2819%2053.7711%2038.3664C54.0063%2038.0176%2054.1604%2037.6257%2054.2227%2037.2064L54.5217%2035.2574C54.5514%2035.0756%2054.572%2034.83%2054.5846%2034.5791L54.6028%2034.2338C54.6098%2034.0598%2054.6223%2033.8779%2054.6347%2033.6788C54.6734%2033.1052%2054.7163%2032.4479%2054.6619%2031.8058L54.5867%2030.4289C54.5622%2030.0952%2054.5097%2029.76%2054.4559%2029.4181C54.431%2029.2572%2054.4048%2029.0896%2054.3826%2028.9074L54.2687%2028.104C54.2332%2027.9244%2054.1804%2027.7273%2054.1329%2027.5396L54.0643%2027.2454C54.0195%2027.071%2053.9773%2026.8927%2053.9338%2026.7076C53.8455%2026.3309%2053.7479%2025.9422%2053.613%2025.5571C52.84%2023.0292%2051.5383%2020.5194%2049.8338%2018.2799C47.8544%2015.682%2045.3333%2013.5087%2042.5563%2011.9816Z'%20fill='%234945FF'/%3e%3c/svg%3e",pc=i.forwardRef(({children:e,small:t=!1,...o},r)=>n.jsxs("div",{role:"alert","aria-live":"assertive",ref:r,...o,children:[n.jsx(Ke,{children:e}),n.jsx(gc,{src:hc,"aria-hidden":!0,$small:t})]})),mc=ie`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,gc=g.img`
  animation: ${mc} 1s infinite linear;
  will-change: transform;
  ${({$small:e,theme:t})=>e&&`width: ${t.spaces[6]}; height: ${t.spaces[6]};`}
`,xc=i.forwardRef(({allowCustomValue:e,autocomplete:t,children:o,className:r,clearLabel:a="Clear",creatable:s=!1,creatableDisabled:c=!1,creatableStartIcon:l,createMessage:d=_=>`Create "${_}"`,defaultFilterValue:h,defaultTextValue:f,defaultOpen:p=!1,open:u,onOpenChange:m,disabled:x=!1,hasError:b,id:y,filterValue:w,hasMoreItems:$=!1,isPrintableCharacter:C,loading:v=!1,loadingMessage:j="Loading content...",name:k,noOptionsMessage:R=()=>"No results found",onChange:L,onClear:V,onCreateOption:O,onFilterValueChange:z,onInputChange:P,onTextValueChange:D,onLoadMore:N,placeholder:B="Select or enter a value",required:K=!1,size:U="M",startIcon:G,textValue:q,value:ee,...Y},ae)=>{const[_,ne]=ve({prop:u,defaultProp:p,onChange:m}),[J,ue]=ve({prop:q,defaultProp:e&&!f?ee:f,onChange:D}),[E,W]=ve({prop:w,defaultProp:h,onChange:z}),Z=i.useRef(null),F=i.useRef(null),M=he(F,ae),H=i.useRef(null),le=pe=>{V&&!x&&(ue(""),W(""),V(pe),F.current.focus())},ce=pe=>{ne(pe)},Q=pe=>{ue(pe)},Ce=pe=>{W(pe)},Se=pe=>{P&&P(pe)},Hr=pe=>{L&&L(pe)},Ur=pe=>{N&&$&&!v&&N(pe)},Po=()=>{O&&J&&s!=="visible"?O(J):O&&s==="visible"&&(O(),ne(!1))},Kr=ye(),Vo=`intersection-${Fe(Kr)}`;it(Z,Ur,{selectorToWatch:`#${Vo}`,skipWhen:!_});const{error:jt,...ct}=ge("Combobox"),Gr=!!jt||b,St=ct.id??y,qr=ct.name??k,Yr=ct.required||K;let It;return jt?It=`${St}-error`:ct.hint&&(It=`${St}-hint`),n.jsxs($e.Root,{autocomplete:t||(s===!0?"list":"both"),onOpenChange:ce,open:_,onTextValueChange:Q,textValue:J,allowCustomValue:!!s||e,disabled:x,required:Yr,value:ee,onValueChange:Hr,filterValue:E,onFilterValueChange:Ce,isPrintableCharacter:C,visible:s==="visible",children:[n.jsxs(bc,{$hasError:Gr,$size:U,className:r,children:[n.jsxs(S,{flex:"1",tag:"span",gap:3,children:[G?n.jsx(S,{flex:"0 0 1.6rem",tag:"span","aria-hidden":!0,children:G}):null,n.jsx($c,{placeholder:B,id:St,"aria-invalid":!!jt,onChange:Se,ref:M,name:qr,"aria-describedby":It,...Y})]}),n.jsxs(S,{tag:"span",gap:3,children:[J&&V?n.jsx(Te,{size:"XS",variant:"ghost",onClick:le,"aria-disabled":x,"aria-label":a,label:a,ref:H,children:n.jsx(He,{})}):null,n.jsx(wc,{children:n.jsx(Ve,{fill:"neutral500"})})]})]}),n.jsx($e.Portal,{children:n.jsx(yc,{sideOffset:4,children:n.jsxs($e.Viewport,{ref:Z,children:[n.jsxs(vc,{children:[o,s!==!0&&!v?n.jsx($e.NoValueFound,{asChild:!0,children:n.jsx(Ut,{$hasHover:!1,children:n.jsx(T,{children:R(J??"")})})}):null,v?n.jsx(S,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:n.jsx(pc,{small:!0,children:j})}):null,n.jsx(I,{id:Vo,width:"100%",height:"1px"})]}),s?n.jsx(Cc,{onPointerUp:Po,onClick:Po,disabled:c,asChild:!0,children:n.jsx(Ut,{children:n.jsxs(S,{gap:2,children:[l&&n.jsx(I,{tag:"span","aria-hidden":!0,display:"inline-flex",children:l}),n.jsx(T,{children:d(J??"")})]})})}):null]})})})]})}),bc=g($e.Trigger)`
  position: relative;
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spaces[4]};

  ${e=>{switch(e.$size){case"S":return A`
          padding-inline-start: ${({theme:t})=>t.spaces[4]};
          padding-inline-end: ${({theme:t})=>t.spaces[3]};
          padding-block: ${({theme:t})=>t.spaces[1]};
        `;default:return A`
          padding-inline-start: ${({theme:t})=>t.spaces[4]};
          padding-inline-end: ${({theme:t})=>t.spaces[3]};
          padding-block: ${({theme:t})=>t.spaces[2]};
        `}}}

  &[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:t})=>De()({theme:e,$hasError:t})};
`,$c=g($e.TextInput)`
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${({theme:e})=>e.colors.neutral800};
  padding: 0;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,wc=g($e.Icon)`
  border: none;
  background: transparent;
  padding: 0;
  color: ${({theme:e})=>e.colors.neutral600};
  display: flex;

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,yc=g($e.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:e})=>e.zIndices.popover};

  &:focus-visible {
    outline: ${({theme:e})=>`2px solid ${e.colors.primary600}`};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${te.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${te.slideDownIn};
      }
    }
  }
`,Cc=g($e.CreateItem)`
  && {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background: ${({theme:e})=>e.colors.neutral0};
    cursor: pointer;
    padding: ${({theme:e})=>e.spaces[1]};
    position: sticky;
    bottom: 0;
    left: 0;
  }
  &&:hover,
  &&[data-highlighted] {
    background: ${({theme:e})=>e.colors.neutral0};
  }
  &&[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    cursor: not-allowed;
  }
  &&[data-disabled] svg {
    fill: ${({theme:e})=>e.colors.neutral300};
  }
  && > div {
    padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  }
  && > div:hover,
  &&[data-highlighted] > div {
    background-color: ${({theme:e})=>e.colors.primary100};
    border-radius: ${({theme:e})=>e.borderRadius};
  }
  &&[data-disabled] > div {
    background-color: inherit;
  }
`,vc=g(Ct)`
  padding: ${({theme:e})=>e.spaces[1]};
`,jc=i.forwardRef(({children:e,value:t,disabled:o,textValue:r,...a},s)=>n.jsx($e.ComboboxItem,{asChild:!0,value:t,disabled:o,textValue:r,children:n.jsx(Ut,{ref:s,...a,children:n.jsx($e.ItemText,{asChild:!0,children:n.jsx(T,{children:e})})})})),Ut=g.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  user-select: none;

  &[data-state='checked'] {
    background-color: ${({theme:e})=>e.colors.primary100};
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:e,$hasHover:t=!0})=>t?e.colors.primary100:e.colors.neutral0};
  }

  &[data-highlighted] {
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }
`,vr=(e,t)=>`${e}${Math.floor(t*255).toString(16).padStart(2,"0")}`;i.forwardRef((e,t)=>n.jsx(Ra,{...e,asChild:!0,ref:t}));i.forwardRef((e,t)=>n.jsx(ka,{children:n.jsx(Sc,{children:n.jsx(Ic,{ref:t,...e})})}));const Sc=g(Ta)`
  background: ${e=>vr(e.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${te.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Ic=g(Ea)`
  max-width: 42rem;
  height: min-content;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.neutral0};
  box-shadow: ${e=>e.theme.shadows.popupShadow};
  z-index: ${e=>e.theme.zIndices.modal};

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${e=>e.theme.motion.timings[200]};
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};
      animation-name: ${te.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${te.modalPopOut};
    }
  }
`;i.forwardRef(({children:e,...t},o)=>n.jsx(Da,{asChild:!0,children:n.jsx(Rc,{tag:"h2",variant:"beta",ref:o,padding:6,fontWeight:"bold",...t,children:e})}));const Rc=g(T)`
  display: flex;
  justify-content: center;
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`;i.forwardRef(({children:e,icon:t,...o},r)=>n.jsx(S,{ref:r,gap:2,direction:"column",paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6,...o,children:typeof e=="string"?n.jsxs(n.Fragment,{children:[t?i.cloneElement(t,{width:24,height:24}):null,n.jsx(kc,{children:e})]}):e}));const kc=i.forwardRef((e,t)=>n.jsx(Aa,{asChild:!0,children:n.jsx(T,{ref:t,variant:"omega",...e,tag:"p"})}));i.forwardRef((e,t)=>n.jsx(Tc,{ref:t,gap:2,padding:4,justifyContent:"space-between",...e,tag:"footer"}));const Tc=g(S)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`;i.forwardRef((e,t)=>n.jsx(Pa,{...e,asChild:!0,ref:t}));i.forwardRef((e,t)=>n.jsx(Va,{...e,asChild:!0,ref:t}));function Re(e,t){const o=i.useRef(null);return t&&o.current&&Ec(t,o.current)&&(t=o.current),o.current=t??null,i.useMemo(()=>new Ci(e,t),[e,t])}function Ec(e,t){if(e===t)return!0;const o=Object.keys(e),r=Object.keys(t);if(o.length!==r.length)return!1;for(const a of o)if(t[a]!==e[a])return!1;return!0}Na`
${A`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html {
    /* Sets 1rem === 10px */
    font-size: 62.5%;
  }

  body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    color: ${({theme:e})=>e.colors.neutral800};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    padding: 0;
    font: inherit;
  }

  button {
    border: unset;
    background: unset;
    padding: unset;
    margin: unset;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    font: unset;
  }

  #root {
    isolation: isolate;
  }

  ol,
  ul {
    list-style: none;
    padding: unset;
    margin: unset;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }

  *:has(> :disabled:not(button)) {
    cursor: not-allowed !important;
  }

  [aria-disabled='true']:not(button) {
    cursor: not-allowed !important;
  }

  /* Focusing the button with a mouse, touch, or stylus will show a subtle drop shadow. */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  .lock-body-scroll {
    height: 100vh;
    overflow-y: hidden;
  }
`}
`;const qo="en-EN",Dc=()=>typeof navigator>"u"?qo:navigator.language?navigator.language:qo,[Lu,vt]=at("StrapiDesignSystem",{locale:Dc()}),Ac=Wa,jr=i.forwardRef(({container:e=globalThis?.document?.body,...t},o)=>e?Be.createPortal(n.jsx(I,{ref:o,...t}),e):null);jr.displayName="Portal";const Pc=i.forwardRef(({onClear:e,clearLabel:t="Clear",startIcon:o,disabled:r,hasError:a,children:s,id:c,size:l="M",withTags:d,...h},f)=>{const p=i.useRef(null),u=b=>{e&&!r&&(e(b),p.current.focus())},{labelNode:m}=ge("SelectTrigger"),x=he(p,f);return n.jsx(we.Trigger,{asChild:!0,children:n.jsxs(Vc,{"aria-disabled":r,$hasError:a,ref:x,alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden",hasRadius:!0,background:r?"neutral150":"neutral0",gap:4,cursor:"default","aria-labelledby":m?`${c}-label`:void 0,$size:l,$withTags:d,...h,children:[n.jsxs(S,{flex:"1",tag:"span",gap:3,children:[o&&n.jsx(S,{tag:"span","aria-hidden":!0,children:o}),s]}),n.jsxs(S,{tag:"span",gap:3,children:[e?n.jsx(Te,{size:"XS",variant:"ghost",onClick:u,"aria-disabled":r,"aria-label":t,label:t,children:n.jsx(He,{})}):null,n.jsx(Nc,{children:n.jsx(Ve,{})})]})]})})}),Vc=g(S)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  ${e=>{switch(e.$size){case"S":return A`
          padding-block: ${e.theme.spaces[1]};
          padding-inline-start: ${e.$withTags?e.theme.spaces[1]:e.theme.spaces[4]};
          padding-inline-end: ${e.theme.spaces[3]};
        `;default:return A`
          padding-block: ${e.$withTags?"0.3rem":e.theme.spaces[2]};
          padding-inline-start: ${e.$withTags?e.theme.spaces[1]:e.theme.spaces[4]};
          padding-inline-end: ${e.theme.spaces[3]};
        `}}}
  cursor: pointer;

  &[aria-disabled='true'] {
    color: ${e=>e.theme.colors.neutral500};
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:t})=>De()({theme:e,$hasError:t})};
`,Nc=g(we.Icon)`
  display: flex;
  & > svg {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Mc=i.forwardRef(({children:e,placeholder:t,...o},r)=>n.jsx(Oc,{ref:r,ellipsis:!0,...o,children:n.jsx(Lc,{placeholder:t,children:e})})),Oc=g(T)`
  flex: 1;
  font-size: 1.4rem;
  line-height: 2.2rem;
  min-height: 2.2rem;
`,Lc=g(we.Value)`
  display: flex;
  gap: ${({theme:e})=>e.spaces[1]};
  flex-wrap: wrap;
`,_c=i.forwardRef((e,t)=>n.jsx(Fc,{ref:t,...e,children:n.jsx(Ct,{children:e.children})})),Fc=g(we.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  min-width: var(--radix-select-trigger-width);
  max-height: 15.6rem;
  z-index: ${({theme:e})=>e.zIndices.popover};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${te.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${te.slideDownIn};
      }
    }
  }
`,zc=g(we.Viewport)`
  padding: ${({theme:e})=>e.spaces[1]};
`,Wc=i.forwardRef((e,t)=>n.jsx(Hc,{ref:t,...e})),Bc=A`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  border-radius: ${e=>e.theme.borderRadius};
  padding: ${e=>`${e.theme.spaces[2]} ${e.theme.spaces[4]}`};
  padding-left: ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  white-space: nowrap;
  user-select: none;
  color: ${({theme:e})=>e.colors.neutral800};

  &:focus-visible {
    outline: none;
    background-color: ${({theme:e})=>e.colors.primary100};
    cursor: pointer;
  }
`,Hc=g(we.Item)`
  ${Bc}

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary100};
    cursor: pointer;
  }
`,Sr=we.Root,Ir=Pc,Rr=Mc,kr=we.Portal,Tr=_c,Er=zc,Eo=Wc,Dr=we.ItemIndicator,Ar=we.ItemText,Uc=we.Group,Yo=i.forwardRef(({children:e,clearLabel:t="Clear",customizeContent:o,disabled:r,hasError:a,id:s,name:c,onChange:l,onClear:d,onCloseAutoFocus:h,onReachEnd:f,placeholder:p,required:u,size:m,startIcon:x,value:b,...y},w)=>{const[$,C]=i.useState(),[v,j]=i.useState(!1),k=Y=>{j(Y)},R=Y=>{d&&d(Y),l||C("")},L=Y=>{l?l(typeof b=="number"?Number(Y):Y):C(Y)},V=i.useRef(null),O=ye(),z=`intersection-${Fe(O)}`;it(V,Y=>{f&&f(Y)},{selectorToWatch:`#${z}`,skipWhen:!v});const{error:D,required:N,...B}=ge("SingleSelect"),K=!!D||a,U=B.id??s,G=B.name??c;let q;D?q=`${U}-error`:B.hint&&(q=`${U}-hint`);const ee=(typeof b<"u"&&b!==null?b.toString():$)??"";return n.jsxs(Sr,{onOpenChange:k,disabled:r,required:N??u,onValueChange:L,value:ee,...y,children:[n.jsx(Ir,{ref:w,id:U,name:G,startIcon:x,hasError:K,disabled:r,clearLabel:t,onClear:ee&&d?R:void 0,"aria-label":y["aria-label"],"aria-describedby":q??y["aria-describedby"],size:m,children:n.jsx(Rr,{placeholder:p,textColor:ee?"neutral800":"neutral600",children:ee&&o?o(ee):void 0})}),n.jsx(kr,{children:n.jsx(Tr,{position:"popper",sideOffset:4,onCloseAutoFocus:h,children:n.jsxs(Er,{ref:V,children:[e,n.jsx(I,{id:z,width:"100%",height:"1px"})]})})})]})}),Zo=i.forwardRef(({value:e,startIcon:t,children:o,...r},a)=>n.jsxs(Eo,{ref:a,value:e.toString(),...r,children:[t&&n.jsx(S,{tag:"span","aria-hidden":!0,children:t}),n.jsx(T,{lineHeight:"20px",width:"100%",children:n.jsx(Ar,{children:o})})]})),Kc=200,Xo=15,[Gc,qe]=at("DatePicker"),qc=i.forwardRef(({calendarLabel:e,className:t,initialDate:o,locale:r,maxDate:a,minDate:s,monthSelectLabel:c="Month",onChange:l,value:d,yearSelectLabel:h="Year",hasError:f,id:p,name:u,disabled:m=!1,required:x=!1,onClear:b,clearLabel:y="Clear",size:w="M",...$},C)=>{const v=At(),j=vt("DatePicker"),k=r??j.locale,R=Re(k,{day:"2-digit",month:"2-digit",year:"numeric"}),[L,V]=i.useState(!1),[O,z]=i.useState(null),[P,D]=i.useState(null),[N,B]=i.useState(null),[K,U]=i.useState(),[G,q]=ve({defaultProp:o?Ae(o):void 0,prop:d?Ae(d):void 0,onChange(Q){l&&l(Q?.toDate(v))}}),[ee,Y]=i.useMemo(()=>{const Q=o?Ae(o):Xt("UTC"),Ce=s?Ae(s):Q.set({day:1,month:1,year:Q.year-Kc});let Se=a?Ae(a):Q.set({day:31,month:12,year:Q.year+Xo});return Se.compare(Ce)<0&&(Se=Ce.set({day:31,month:12,year:Ce.year+Xo})),[Ce,Se]},[s,a,o]),[ae,_]=i.useState(Yc({currentValue:G,minDate:ee,maxDate:Y})),ne=ye(),J=i.useRef(null),ue=Q=>{b&&!m&&(U(""),q(void 0),b(Q),P?.focus())},E=i.useCallback(Q=>{Q&&G&&_(G),V(Q)},[G]);ze(()=>{if(d){const Q=Ae(d);U(R.format(Q.toDate(v))),_(Q)}else U("")},[d,R,v]),ze(()=>{if(o&&K===void 0){const Q=Ae(o);U(R.format(Q.toDate(v)))}},[o,K,R,v]);const{error:W,...Z}=ge("Combobox"),F=!!W||f,M=Z.id??p,H=Z.name??u,le=Z.required||x;let ce;return W?ce=`${M}-error`:Z.hint&&(ce=`${M}-hint`),n.jsxs(Gc,{calendarDate:ae,content:N,contentId:ne,disabled:m,locale:k,minDate:ee,maxDate:Y,open:L,onCalendarDateChange:_,onContentChange:B,onOpenChange:E,onTextInputChange:D,onTextValueChange:U,onTriggerChange:z,onValueChange:q,onClear:b,required:le,textInput:P,textValue:K,timeZone:v,trigger:O,value:G,children:[n.jsxs(Xc,{className:t,hasError:F,size:w,children:[n.jsx(Ma,{fill:"neutral500","aria-hidden":!0}),n.jsx(ed,{ref:C,"aria-describedby":ce,id:M,name:H,...$}),K&&b?n.jsx(Te,{size:"XS",variant:"ghost",onClick:ue,"aria-disabled":m,"aria-label":y,label:y,ref:J,children:n.jsx(He,{})}):null]}),n.jsx(jr,{children:n.jsx(rd,{label:e,children:n.jsx(cd,{monthSelectLabel:c,yearSelectLabel:h})})})]})}),Qo=e=>!!e.match(/^[^a-zA-Z]*$/),Yc=({currentValue:e,minDate:t,maxDate:o})=>{const r=Xt("UTC");return e||(Pt(t,r)===t&&Vt(o,r)===o?r:Pt(t,r)===r?t:Vt(o,r)===r?o:r)},Zc="DatePickerTrigger",Xc=i.forwardRef(({hasError:e,size:t,...o},r)=>{const a=qe(Zc),s=he(r,l=>a.onTriggerChange(l)),c=()=>{a.disabled||a.onOpenChange(!0)};return n.jsx(Gt,{asChild:!0,trapped:a.open,onMountAutoFocus:l=>{l.preventDefault()},onUnmountAutoFocus:l=>{document.getSelection()?.empty(),l.preventDefault()},children:n.jsx(Qc,{ref:s,$hasError:e,$size:t,$hasOnClear:!!a.onClear,...o,hasRadius:!0,gap:3,overflow:"hidden",background:a.disabled?"neutral150":"neutral0",onClick:Pe(o.onClick,()=>{a.textInput?.focus()}),onPointerDown:Pe(o.onPointerDown,l=>{const d=l.target;d.hasPointerCapture(l.pointerId)&&d.releasePointerCapture(l.pointerId),(d.closest("button")??d.closest("div"))===l.currentTarget&&l.button===0&&l.ctrlKey===!1&&(c(),a.textInput?.focus())})})})}),Qc=g(S)`
  min-width: ${({$hasOnClear:e})=>e?"160px":"130px"};
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  ${e=>{switch(e.$size){case"S":return A`
          padding-block: ${e.theme.spaces[1]};
          padding-inline: ${e.theme.spaces[3]};
        `;default:return A`
          padding-block: ${e.theme.spaces[2]};
          padding-inline: ${e.theme.spaces[3]};
        `}}}

  & > svg {
    flex: 1 0 auto;
  }

  &[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:t})=>De()({theme:e,$hasError:t})};
`,Jc="DatePickerTextInput",ed=i.forwardRef(({placeholder:e,...t},o)=>{const r=qe(Jc),{onTextValueChange:a,textValue:s,onTextInputChange:c,onOpenChange:l,disabled:d,locale:h}=r,f=he(o,w=>c(w)),p=()=>{d||l(!0)},u=Re(h,{year:"numeric",month:"2-digit",day:"2-digit"}),[m,x,b]=i.useMemo(()=>{const w=u.formatToParts(new Date),$=w.filter(j=>j.type==="year"||j.type==="month"||j.type==="day"),C=$.map(j=>{switch(j.type){case"day":return"DD";case"month":return"MM";case"year":return"YYYY";default:return""}}),v=w.find(j=>j.type==="literal")?.value??"";return[C,v,$]},[u]),y=m.map(w=>`\\d{${w.length}}`).join(`\\${x}`);return n.jsx(od,{role:"combobox",type:"text",inputMode:"numeric",ref:f,"aria-autocomplete":"none","aria-controls":r.contentId,"aria-disabled":r.disabled,"aria-expanded":r.open,"aria-required":r.required,"aria-haspopup":"dialog","data-state":r.open?"open":"closed",disabled:d,"data-disabled":d?"":void 0,pattern:y,placeholder:e??m.join(x),...t,value:s??"",onBlur:Pe(t.onBlur,()=>{if(!r.textValue){r.onValueChange(void 0);return}r.onTextValueChange(u.format(r.calendarDate.toDate(r.timeZone))),r.onValueChange(r.calendarDate)}),onChange:Pe(t.onChange,w=>{if(Qo(w.target.value)){const $=w.target.value.split(x),[C,v,j]=b.map((D,N)=>{const B=$[N];return{...D,value:B}}).sort((D,N)=>D.type==="year"?1:N.type==="year"?-1:D.type==="month"?1:N.type==="month"?-1:0).map(D=>D.value),k=r.calendarDate.year;let R=r.calendarDate.year;if(j){const D=j.length===1?`0${j}`:j;R=j.length<3?Number(`${k}`.slice(0,4-D.length)+D):Number(D)}j&&j.length<3&&R>r.maxDate.year&&(R-=100);const L=r.calendarDate.set({year:R}),V=L.calendar.getMonthsInYear(L),O=L.set({month:v&&Number(v)<=V?Number(v):void 0}),z=O.calendar.getDaysInMonth(O),P=O.set({day:C&&Number(C)<=z?Number(C):void 0});r.onCalendarDateChange(td(P,r.minDate,r.maxDate)),r.onTextValueChange(w.target.value)}}),onKeyDown:Pe(t.onKeyDown,w=>{if(!r.open&&(Qo(w.key)||["ArrowDown","Backspace"].includes(w.key)))p();else if(["Tab"].includes(w.key)&&r.open)w.preventDefault();else if(["Escape"].includes(w.key))r.open?r.onOpenChange(!1):(r.onValueChange(void 0),r.onTextValueChange("")),w.preventDefault();else if(r.open&&["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(w.key))switch(w.preventDefault(),w.key){case"ArrowDown":{const $=r.calendarDate.add({weeks:1});if(r.maxDate&&$.compare(r.maxDate)>0)return;r.onCalendarDateChange($);return}case"ArrowRight":{const $=r.calendarDate.add({days:1});if(r.maxDate&&$.compare(r.maxDate)>0)return;r.onCalendarDateChange($);return}case"ArrowUp":{const $=r.calendarDate.subtract({weeks:1});if(r.minDate&&$.compare(r.minDate)<0)return;r.onCalendarDateChange($);return}case"ArrowLeft":{const $=r.calendarDate.subtract({days:1});if(r.minDate&&$.compare(r.minDate)<0)return;r.onCalendarDateChange($)}}else r.open&&["Enter"].includes(w.key)&&(w.preventDefault(),a(u.format(r.calendarDate.toDate(r.timeZone))),r.onValueChange(r.calendarDate),r.onOpenChange(!1))})})});function td(e,t,o){return t&&(e=Vt(e,t)),o&&(e=Pt(e,o)),e}const od=g.input`
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${({theme:e})=>e.colors.neutral800};
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,nd="DatePickerContent",rd=i.forwardRef((e,t)=>{const[o,r]=i.useState(),a=qe(nd);if(ze(()=>{r(new DocumentFragment)},[]),!a.open){const s=o;return s?Be.createPortal(n.jsx("div",{children:e.children}),s):null}return n.jsx(id,{...e,ref:t})}),ad="DatePickerContent",id=i.forwardRef((e,t)=>{const{label:o="Choose date",...r}=e,{onOpenChange:a,...s}=qe(ad),{x:c,y:l,refs:d,strategy:h,placement:f}=Oa({strategy:"fixed",placement:"bottom-start",middleware:[La({mainAxis:4}),_a(),Fa()],elements:{reference:s.trigger},whileElementsMounted:za});i.useEffect(()=>{const u=()=>{a(!1)};return window.addEventListener("blur",u),window.addEventListener("resize",u),()=>{window.removeEventListener("blur",u),window.removeEventListener("resize",u)}},[a]);const p=he(t,u=>s.onContentChange(u),d.setFloating);return qt(),n.jsx(Yt,{allowPinchZoom:!0,children:n.jsx(Ac,{asChild:!0,onFocusOutside:u=>{u.preventDefault()},onDismiss:()=>{a(!1)},children:n.jsx(sd,{ref:p,"data-state":s.open?"open":"closed","data-side":f.includes("top")?"top":"bottom",onContextMenu:u=>u.preventDefault(),id:s.contentId,role:"dialog","aria-modal":"true","aria-label":o,style:{left:c,top:l,position:h},hasRadius:!0,background:"neutral0",padding:1,...r})})})}),sd=g(I)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices.popover};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${te.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${te.slideDownIn};
      }
    }
  }
`,ld="DatePickerCalendar",cd=i.forwardRef(({monthSelectLabel:e,yearSelectLabel:t,...o},r)=>{const{locale:a,timeZone:s,minDate:c,maxDate:l,calendarDate:d,onCalendarDateChange:h}=qe(ld),f=Ba(d),p=i.useMemo(()=>{const C=c.year,v=l.year;return[...Array(v-C+1).keys()].map(j=>(C+j).toString())},[c,l]),u=Re(a,{month:"long"}),m=i.useMemo(()=>[...Array(d.calendar.getMonthsInYear(d)).keys()].map(C=>u.format(d.set({month:C+1}).toDate(s))),[d,u,s]),x=Re(a,{weekday:"short"}),b=i.useMemo(()=>{const C=$n(Xt(s),a);return[...new Array(7).keys()].map(v=>{const k=C.add({days:v}).toDate(s);return x.format(k)})},[s,a,x]),y=C=>{if(typeof C=="number")return;const v=d.set({month:m.indexOf(C)+1});h(v)},w=C=>{if(typeof C=="number")return;const v=d.set({year:parseInt(C,10)});h(v)},$=dd(f,a);return n.jsxs(S,{ref:r,direction:"column",alignItems:"stretch",padding:4,...o,children:[n.jsxs(ud,{justifyContent:"flex-start",paddingBottom:4,paddingLeft:2,paddingRight:2,gap:2,children:[n.jsx(We,{children:n.jsx(Yo,{"aria-label":e,value:m[d.month-1],onChange:y,children:m.map(C=>n.jsx(Zo,{value:C,children:C},C))})}),n.jsx(We,{children:n.jsx(Yo,{value:d.year.toString(),"aria-label":t,onChange:w,children:p.map(C=>n.jsx(Zo,{value:C,children:C},C))})})]}),n.jsxs("table",{role:"grid",children:[n.jsx("thead",{"aria-hidden":!0,children:n.jsx("tr",{"aria-rowindex":0,children:b.map((C,v)=>n.jsx(fd,{"aria-colindex":v,children:C},C))})}),n.jsx("tbody",{children:[...new Array(6).keys()].map(C=>n.jsx("tr",{"aria-rowindex":C+2,children:$(C).map((v,j)=>v?n.jsx(md,{"aria-colindex":j+1,date:v,startDate:f,disabled:c.compare(v)>0||v.compare(l)>0},v.toString()):n.jsx(Pr,{"aria-colindex":j+1},j+1))},C))})]})]})}),dd=(e,t)=>o=>{let r=e.add({weeks:o});const a=[];r=$n(r,t);const s=Ha(r,t);for(let c=0;c<s;c++)a.push(null);for(;a.length<7;){a.push(r);const c=r.add({days:1});if(wn(r,c))break;r=c}for(;a.length<7;)a.push(null);return a},ud=g(S)`
  div[role='combobox'] {
    border: 1px solid transparent;
    background: transparent;
    font-weight: ${e=>e.theme.fontWeights.bold};

    svg {
      fill: ${({theme:e})=>e.colors.neutral500};
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};
    }
  }
`,fd=i.forwardRef(({children:e,...t},o)=>n.jsx(hd,{tag:"th",role:"gridcell",ref:o,...t,height:"2.4rem",width:"3.2rem",children:n.jsx(T,{variant:"pi",fontWeight:"bold",color:"neutral800",children:e.slice(0,2)})})),hd=g(I)`
  border-radius: ${({theme:e})=>e.borderRadius};
  text-transform: capitalize;
`,pd="DatePickerCalendarCell",md=i.forwardRef(({date:e,startDate:t,disabled:o,...r},a)=>{const{timeZone:s,locale:c,calendarDate:l,onValueChange:d,onOpenChange:h,onTextValueChange:f,onCalendarDateChange:p}=qe(pd),u=wn(l,e),m=Re(c,{weekday:"long",day:"numeric",month:"long",year:"numeric"}),x=i.useMemo(()=>m.format(e.toDate(s)),[m,e,s]),b=Re(c,{day:"numeric",calendar:e.calendar.identifier}),y=i.useMemo(()=>b.formatToParts(e.toDate(s)).find(j=>j.type==="day").value,[b,e,s]),w=Re(c,{day:"2-digit",month:"2-digit",year:"numeric"}),$=Ua(t),C=e.compare(t)<0||e.compare($)>0;let v="neutral900";return u?v="primary600":C&&(v="neutral600"),n.jsx(Pr,{tag:"td",role:"gridcell",ref:a,"aria-selected":u,...r,hasRadius:!0,"aria-label":x,tabIndex:u?0:-1,background:u?"primary100":"neutral0",cursor:"pointer",onPointerDown:Pe(r.onPointerDown,j=>{j.preventDefault(),p(e),d(e),f(w.format(e.toDate(s))),h(!1)}),"aria-disabled":o,children:n.jsx(T,{variant:"pi",textColor:v,children:y})})}),Pr=g(I)`
  text-align: center;
  padding: 0.7rem;
  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px !important;
  &[aria-disabled='true'] {
    pointer-events: none;
    opacity: 0.5;
  }

  &[aria-disabled='false'] {
    &:hover {
      background: ${({theme:e})=>e.colors.primary100};
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`,Ae=e=>{const t=e.toISOString(),o=Ka(t,"UTC");return Ga(o)},Tt=e=>!!e.match(/^[^a-zA-Z]*$/);function gd(e=""){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const xd=g(xc)`
  min-width: ${({onClear:e})=>e?"160px":"130px"};
`,bd=i.forwardRef(({step:e=15,value:t,defaultValue:o,onChange:r,...a},s)=>{const c=vt("TimePicker"),[l,d]=i.useState(""),[h,f]=ve({prop:t,defaultProp:o,onChange:r}),p=Re(c.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),u=i.useMemo(()=>{const v=p.formatToParts(new Date),{value:j}=v.find(k=>k.type==="literal");return j},[p]),m=i.useMemo(()=>{const v=60/e;return[...Array(24).keys()].flatMap(j=>[...Array(v).keys()].map(k=>p.format(new Date(0,0,0,j,k*e))))},[e,p]),x=v=>{(!v||Tt(v))&&d(v)},b=v=>{const[j,k]=v.split(u);if(!j&&!k)return;const R=Number(j??"0"),L=Number(k??"0");if(!(R>23||L>59))return p.format(new Date(0,0,0,R,L))},y=v=>{const j=b(v.target.value);j?(d(j),f(j)):d(h)},w=v=>{if(typeof v<"u"){const j=b(v);f(j)}else f(v)};i.useEffect(()=>{const v=typeof t>"u"?"":t;Tt(v)&&d(v)},[t,d]);const C=`\\d{2}${gd(u)}\\d{2}`;return n.jsx(xd,{...a,ref:s,value:h,onChange:w,isPrintableCharacter:Tt,allowCustomValue:!0,placeholder:`--${u}--`,autocomplete:"none",startIcon:n.jsx(qa,{fill:"neutral500"}),inputMode:"numeric",pattern:C,textValue:l,onTextValueChange:x,onBlur:y,children:m.map(v=>n.jsx(jc,{value:v,children:v},v))})});i.forwardRef(({clearLabel:e="clear",dateLabel:t="Choose date",timeLabel:o="Choose time",disabled:r=!1,hasError:a,onChange:s,onClear:c,required:l=!1,step:d,value:h,initialDate:f,size:p,...u},m)=>{const x=i.useRef(null),[b,y]=ve({defaultProp:f?Ye(f,!1):void 0,prop:h?Ye(h,!1):h??void 0,onChange(D){s&&s(D?.toDate(At()))}}),w=vt("DateTimePicker"),$=Re(w.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),C=b?$.format(b.toDate(At())):"",v=D=>{let N=D?Ye(D):void 0;if(!(N&&b&&N.compare(b)===0)){if(C&&N){const[B,K]=C.split(":");N=N.set({hour:parseInt(B,10),minute:parseInt(K,10)})}y(N)}},j=D=>{if(!D)return;const[N,B]=D.split(":"),K=b?b.set({hour:parseInt(N,10),minute:parseInt(B,10)}):Ye(new Date).set({hour:parseInt(N,10),minute:parseInt(B,10)});y(K)},k=D=>{y(void 0),c&&c(D)},R=()=>{const D=b?b.set({hour:0,minute:0}):Ye(new Date);y(D)},L=he(x,m),{error:V,id:O,labelNode:z}=ge("DateTimePicker"),P=!!V||a;return n.jsxs(S,{"aria-labelledby":z?`${O}-label`:void 0,role:"group",flex:"1",gap:1,wrap:"wrap",children:[n.jsx(We,{flex:"1",children:n.jsx(qc,{...u,size:p,value:b?.toDate("UTC"),onChange:v,required:l,onClear:c?k:void 0,clearLabel:`${e} date`,disabled:r,ref:L,"aria-label":t})}),n.jsx(We,{flex:"1",children:n.jsx(bd,{size:p,hasError:P,value:C,onChange:j,onClear:c&&C!==void 0&&C!=="00:00"?R:void 0,clearLabel:`${e} time`,required:l,disabled:r,step:d,"aria-label":o})})]})});const Ye=(e,t=!0)=>{const o=e.toISOString();let r=Ya(o);return t&&(r=r.set({hour:0,minute:0})),Za(r)},$d=i.forwardRef((e,t)=>n.jsx(wd,{ref:t,background:"neutral150",...e,"data-orientation":"horizontal",role:"separator",tag:"div"})),wd=g(I)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
`,yd=g(I)`
  svg {
    height: 8.8rem;
  }
`;i.forwardRef(({icon:e,content:t,action:o,hasRadius:r=!0,shadow:a="tableShadow"},s)=>n.jsxs(S,{ref:s,alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:r,shadow:a,children:[e?n.jsx(yd,{paddingBottom:6,"aria-hidden":!0,children:e}):null,n.jsx(I,{paddingBottom:4,children:n.jsx(T,{variant:"delta",tag:"p",textAlign:"center",textColor:"neutral600",children:t})}),o]}));const Vr=yn.define(),Nr=yn.define(),Cd=Cn.mark({attributes:{style:"background-color: yellow; color: black"}}),vd=Xa.define({create(){return Cn.none},update(e,t){return e=e.map(t.changes),t.effects.forEach(o=>{o.is(Vr)?e=e.update({add:o.value,sort:!0}):o.is(Nr)&&(e=e.update({filter:o.value}))}),e},provide:e=>Qa.decorations.from(e)});i.forwardRef(({hasError:e,required:t,id:o,value:r="",disabled:a=!1,onChange:s=()=>null,...c},l)=>{const d=i.useRef(),h=i.useRef(),f=i.useRef(),{error:p,...u}=ge("JsonInput"),m=!!p||e,x=u.id??o,b=u.required||t;let y;p?y=`${x}-error`:u.hint&&(y=`${x}-hint`);const w=V=>{const O=h.current?.doc;if(O){const{text:z,to:P}=O.line(V),D=P-z.trimStart().length;P>D&&f.current?.dispatch({effects:Vr.of([Cd.range(D,P)])})}},$=()=>{const V=h.current?.doc;if(V){const O=V.length||0;f.current?.dispatch({effects:Nr.of((z,P)=>P<=0||z>=O)})}},C=({state:V,view:O})=>{f.current=O,h.current=V,$();const P=vi()(O);P.length&&w(V.doc.lineAt(P[0].from).number)},v=(V,O)=>{C(O),s(V)},j=(V,O)=>{f.current=V,h.current=O,C({view:V,state:O})},{setContainer:k,view:R}=Ja({value:r,onCreateEditor:j,container:d.current,editable:!a,extensions:[ei(),vd],onChange:v,theme:"dark",basicSetup:{lineNumbers:!0,bracketMatching:!0,closeBrackets:!0,indentOnInput:!0,syntaxHighlighting:!0,highlightSelectionMatches:!0,tabSize:2}}),L=he(d,k);return i.useImperativeHandle(l,()=>({...R?.dom,focus(){R&&R.focus()},scrollIntoView(V){R&&R.dom.scrollIntoView(V)}}),[R]),n.jsx(jd,{ref:L,$disabled:a,$hasError:m,alignItems:"stretch",fontSize:2,hasRadius:!0,"aria-required":b,id:x,"aria-describedby":y,...c})});const jd=g(S)`
  line-height: ${({theme:e})=>e.lineHeights[2]};

  .cm-editor {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral800 changes between themes 
     */
    background-color: #32324d;
    width: 100%;
    outline: none;
    cursor: ${({$disabled:e})=>e?"not-allowed":"text"};
  }

  .cm-scroller {
    border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
    /* inputFocusStyle will receive hasError prop */
    ${De()}
  }

  .cm-editor,
  .cm-scroller {
    border-radius: ${({theme:e})=>e.borderRadius};
  }

  .cm-gutters,
  .cm-activeLineGutter {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral700 changes between themes 
     */
    background-color: #4a4a6a;
  }
`,Sd=de(({disabled:e,...t},o)=>n.jsx(Bt,{ref:o,tag:Ge,tabIndex:e?-1:void 0,disabled:e,...t}));g(I)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`;g(I)`
  text-decoration: none;

  &:focus {
    left: ${({theme:e})=>e.spaces[3]};
    top: ${({theme:e})=>e.spaces[3]};
  }
`;i.forwardRef((e,t)=>n.jsx(ti,{...e,asChild:!0,ref:t}));i.forwardRef((e,t)=>n.jsx(oi,{children:n.jsx(Id,{children:n.jsx(Rd,{ref:t,...e})})}));const Id=g(ni)`
  background: ${e=>vr(e.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${te.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Rd=g(ri)`
  max-width: 83rem;
  max-height: 90vh;
  height: auto;
  width: 60%;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.neutral0};
  box-shadow: ${e=>e.theme.shadows.popupShadow};
  z-index: ${e=>e.theme.zIndices.modal};

  > form {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${e=>e.theme.motion.timings[200]};
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};
      animation-name: ${te.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${te.modalPopOut};
    }
  }
`,kd=i.forwardRef((e,t)=>n.jsx(ai,{...e,asChild:!0,ref:t}));i.forwardRef(({children:e,closeLabel:t="Close modal",...o},r)=>n.jsxs(Td,{ref:r,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...o,tag:"header",children:[e,n.jsx(kd,{children:n.jsx(Te,{withTooltip:!1,label:t,children:n.jsx(He,{})})})]}));const Td=g(S)`
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`;i.forwardRef((e,t)=>n.jsx(ii,{asChild:!0,children:n.jsx(T,{tag:"h2",variant:"omega",fontWeight:"bold",ref:t,...e})}));i.forwardRef(({children:e,...t},o)=>n.jsx(Ed,{ref:o,...t,children:e}));const Ed=g(Ct)`
  padding-inline: ${e=>e.theme.spaces[7]};

  & > div {
    padding-block: ${e=>e.theme.spaces[8]};
    /* Add negative margin and padding to avoid cropping the box shadow when the inputs are focused */
    margin: 0 -2px 0 -2px;
    padding-left: 2px;
    padding-right: 2px;

    & > div {
      // the scroll area component applies a display: table to the child, which we don't want.
      display: block !important;
    }
  }
`;i.forwardRef((e,t)=>n.jsx(Dd,{ref:t,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...e,tag:"footer"}));const Dd=g(S)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`,Ad="";i.forwardRef(({startAction:e,locale:t,onValueChange:o,value:r,step:a=1,disabled:s=!1,...c},l)=>{const d=vt("NumberInput"),h=t||d.locale,f=i.useRef(new si(h,{style:"decimal"})),p=i.useRef(new li(h,{maximumFractionDigits:20})),[u,m]=Pd({prop(k){const R=String(r);return isNaN(Number(R))||R!==k&&k!==""?k:p.current.format(Number(r))},defaultProp:Ad,onChange(k){const R=f.current.parse(k??"");o(isNaN(R)?void 0:R)}}),x=k=>{m(String(k))},b=({target:{value:k}})=>{f.current.isValidPartialNumber(k)&&x(k)},w=(k=>{const R=k.toString();return R.includes(".")?R.split(".")[1].length:0})(a),$=()=>{if(!u){x(a);return}const k=f.current.parse(u),R=isNaN(k)?a:k+a,L=parseFloat(R.toFixed(w));x(p.current.format(L))},C=()=>{if(!u){x(-a);return}const k=f.current.parse(u),R=isNaN(k)?-a:k-a,L=parseFloat(R.toFixed(w));x(p.current.format(L))},v=k=>{if(!s)switch(k.key){case se.DOWN:{k.preventDefault(),C();break}case se.UP:{k.preventDefault(),$();break}}},j=()=>{if(u){const k=f.current.parse(u),R=isNaN(k)?"":p.current.format(k);x(R)}};return n.jsx(To,{ref:l,startAction:e,disabled:s,type:"text",inputMode:"decimal",onChange:b,onKeyDown:v,onBlur:j,value:u,endAction:n.jsxs(S,{direction:"column",children:[n.jsx(Jo,{disabled:s,"aria-hidden":!0,$reverse:!0,onClick:$,tabIndex:-1,type:"button","data-testid":"ArrowUp",children:n.jsx(Ve,{fill:"neutral500"})}),n.jsx(Jo,{disabled:s,"aria-hidden":!0,onClick:C,tabIndex:-1,type:"button","data-testid":"ArrowDown",children:n.jsx(Ve,{fill:"neutral500"})})]}),...c})});const Jo=g.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(${({$reverse:e})=>e?"-2px":"2px"});
  cursor: ${({disabled:e})=>e?"not-allowed":void 0};
  height: 1.1rem;

  svg {
    width: 1.2rem;
    transform: ${({$reverse:e})=>e?"rotateX(180deg)":void 0};
  }
`;function Pd({prop:e,defaultProp:t,onChange:o=()=>{}}){const[r,a]=sr({defaultProp:t,onChange:o}),s=e!==void 0,c=e instanceof Function?e(r):e,l=s?c:r,d=no(o),h=i.useCallback(f=>{if(s){const u=typeof f=="function"?f(c):f;u!==c&&(d(u),a(f))}else a(f)},[s,c,a,d]);return[l,h]}const Vd=i.createContext({activePage:1,pageCount:1}),Do=()=>i.useContext(Vd);de(({children:e,...t},o)=>{const{activePage:r}=Do(),a=r===1;return n.jsxs(Or,{ref:o,"aria-disabled":a,tabIndex:a?-1:void 0,...t,children:[n.jsx(Ke,{children:e}),n.jsx(bn,{"aria-hidden":!0})]})});de(({children:e,...t},o)=>{const{activePage:r,pageCount:a}=Do(),s=r===a;return n.jsxs(Or,{ref:o,"aria-disabled":s,tabIndex:s?-1:void 0,...t,children:[n.jsx(Ke,{children:e}),n.jsx(Zt,{"aria-hidden":!0})]})});const Mr=g(Ge)`
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({$active:e,theme:t})=>e?t.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${$t}
`,Or=g(Mr)`
  font-size: 1.1rem;

  svg path {
    fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral700};
    }
  }

  ${e=>e["aria-disabled"]?`
  pointer-events: none;
    `:void 0}
`;de(({number:e,children:t,...o},r)=>{const{activePage:a}=Do(),s=a===e;return n.jsxs(Nd,{ref:r,...o,"aria-current":s,$active:s,children:[n.jsx(Ke,{children:t}),n.jsx(T,{"aria-hidden":!0,fontWeight:s?"bold":void 0,lineHeight:"revert",variant:"pi",children:e})]})});const Nd=g(Mr)`
  color: ${({theme:e,$active:t})=>t?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,$active:t})=>t?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`;i.forwardRef((e,t)=>n.jsx(ci,{...e,asChild:!0,ref:t}));i.forwardRef((e,t)=>n.jsx(di,{children:n.jsx(Md,{sideOffset:4,side:"bottom",align:"start",...e,ref:t})}));const Md=g(ui)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices.popover};
  background-color: ${e=>e.theme.colors.neutral0};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${te.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${te.slideDownIn};
      }
    }

    &[data-state='closed'] {
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};

      &[data-side='top'] {
        animation-name: ${te.slideUpOut};
      }

      &[data-side='bottom'] {
        animation-name: ${te.slideDownOut};
      }
    }
  }
`;i.forwardRef(({children:e,intersectionId:t,onReachEnd:o,...r},a)=>{const s=i.useRef(null),c=he(s,a),l=ye();return it(s,o??(()=>{}),{selectorToWatch:`#${Fe(l)}`,skipWhen:!t||!o}),n.jsxs(Od,{ref:c,...r,children:[e,t&&o&&n.jsx(I,{id:Fe(l),width:"100%",height:"1px"})]})});const Od=g(Ct)`
  height: 20rem;
`;i.forwardRef(({size:e="M",value:t,...o},r)=>n.jsx(Ld,{ref:r,$size:e,...o,children:n.jsx(_d,{style:{transform:`translate3D(-${100-(t??0)}%, 0, 0)`}})}));const Ld=g(fi)`
  position: relative;
  overflow: hidden;
  width: ${e=>e.$size==="S"?"7.8rem":"10.2rem"};
  height: ${e=>e.$size==="S"?"0.4rem":"0.8rem"};
  background-color: ${e=>e.theme.colors.neutral600};
  border-radius: ${e=>e.theme.borderRadius};

  /* Fix overflow clipping in Safari */
  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
  transform: translateZ(0);
`,_d=g(hi)`
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: 100%;
  height: 100%;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[320]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`;i.forwardRef((e,t)=>n.jsx(Fd,{ref:t,...e}));const Fd=g(pi)`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spaces[3]};
`;i.forwardRef(({children:e,id:t,...o},r)=>{const a=ye(t);return n.jsxs(S,{gap:2,children:[n.jsx(zd,{id:a,ref:r,...o,children:n.jsx(Wd,{})}),n.jsx(T,{tag:"label",htmlFor:a,children:e})]})});const zd=g(mi)`
  background: ${e=>e.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  flex: 0 0 2rem;
  border-radius: 50%;
  border: 1px solid ${e=>e.theme.colors.neutral300};
  position: relative;
  cursor: pointer;
  z-index: 0;

  @media (prefers-reduced-motion: no-preference) {
    transition: border-color ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.easeOutQuad};
  }

  &[data-state='checked'] {
    border: 1px solid ${e=>e.theme.colors.primary600};
  }

  &[data-disabled] {
    cursor: not-allowed;
    background-color: ${e=>e.theme.colors.neutral200};
  }

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`,Wd=g(gi)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &[data-state='checked'] {
    @media (prefers-reduced-motion: no-preference) {
      animation: ${te.popIn} ${e=>e.theme.motion.timings[200]};
    }
  }

  &::after {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${e=>e.theme.colors.primary600};
  }
`,Bd=e=>{const t=e.querySelector('[tabindex="0"]');t&&t.focus()},Lr=i.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),Hd=()=>i.useContext(Lr),Ud=i.forwardRef(({colCount:e,rowCount:t,jumpStep:o=3,initialCol:r=0,initialRow:a=0,...s},c)=>{const l=i.useRef(null),d=i.useRef(!1),h=he(l,c),[f,p]=i.useState(a),[u,m]=i.useState(r),x=i.useCallback(({colIndex:w,rowIndex:$})=>{m(w),p($)},[]);i.useEffect(()=>{d.current&&Bd(l.current),d.current||(d.current=!0)},[u,f]);const b=w=>{switch(w.key){case se.RIGHT:{w.preventDefault(),m($=>$<e-1?$+1:$);break}case se.LEFT:{w.preventDefault(),m($=>$>0?$-1:$);break}case se.UP:{w.preventDefault(),p($=>$>0?$-1:$);break}case se.DOWN:{w.preventDefault(),p($=>$<t-1?$+1:$);break}case se.HOME:{w.preventDefault(),w.ctrlKey&&p(0),m(0);break}case se.END:{w.preventDefault(),w.ctrlKey&&p(t-1),m(e-1);break}case se.PAGE_DOWN:{w.preventDefault(),p($=>$+o<t?$+o:t-1);break}case se.PAGE_UP:{w.preventDefault(),p($=>$-o>0?$-o:0);break}}},y=i.useMemo(()=>({rowIndex:f,colIndex:u,setTableValues:x}),[u,f,x]);return n.jsx(Lr.Provider,{value:y,children:n.jsx("table",{role:"grid",ref:h,"aria-rowcount":t,"aria-colcount":e,onKeyDown:b,...s})})}),Ze=(e,t)=>[...e.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(a=>!a.hasAttribute("disabled")),Et=e=>e.filter(t=>t.tagName==="INPUT"?t.type!=="checkbox"&&t.type!=="radio":!1),_r=i.forwardRef(({coords:e={col:0,row:0},tag:t="td",...o},r)=>{const a=i.useRef(null),s=he(r,a),{rowIndex:c,colIndex:l,setTableValues:d}=Hd(),[h,f]=i.useState(!1),p=x=>{const b=Ze(a.current);if(b.length===0||b.length===1&&Et(b).length===0)return;if(b.length>1&&!b.find(w=>w.tagName!=="BUTTON")){x.preventDefault();const w=b.findIndex($=>$===document.activeElement);if(x.key===se.RIGHT){const $=b[w+1];$&&(x.stopPropagation(),$.focus())}else if(x.key===se.LEFT){const $=b[w-1];$&&(x.stopPropagation(),$.focus())}return}const y=x.key===se.ENTER;if(y&&!h)f(!0);else if((x.key===se.ESCAPE||y)&&h){if(y&&document.activeElement?.tagName==="A")return;f(!1),a.current.focus()}else h&&x.stopPropagation()},u=c===e.row-1&&l===e.col-1;ze(()=>{const x=Ze(a.current);x.length===0||x.length===1&&Et(x).length!==0||x.length>1&&x.find(b=>b.tagName!=="BUTTON")?(a.current.setAttribute("tabIndex",!h&&u?"0":"-1"),x.forEach((b,y)=>{b.setAttribute("tabIndex",h?"0":"-1"),h&&y===0&&b.focus()})):x.forEach(b=>{b.setAttribute("tabIndex",u?"0":"-1")})},[h,u]);const m=i.useCallback(()=>{const x=Ze(a.current);x.length>=1&&(Et(x).length!==0||!x.find(b=>b.tagName!=="BUTTON"))&&f(!0),d({rowIndex:e.row-1,colIndex:e.col-1})},[e,d]);return ze(()=>{const x=a.current;return Ze(x).forEach(y=>{y.addEventListener("focus",m)}),()=>{Ze(x).forEach(w=>{w.removeEventListener("focus",m)})}},[m]),n.jsx(I,{role:"gridcell",tag:t,ref:s,onKeyDown:p,...o})}),Kd=e=>n.jsx(_r,{...e,tag:"th"}),Gd=({children:e,...t})=>{const o=i.Children.toArray(e).map(r=>i.isValidElement(r)?i.cloneElement(r,{"aria-rowindex":1}):r);return n.jsx("thead",{...t,children:o})},qd=({children:e,...t})=>{const o=i.Children.toArray(e).map((r,a)=>i.isValidElement(r)?i.cloneElement(r,{"aria-rowindex":a+2}):r);return n.jsx("tbody",{...t,children:o})},Yd=({children:e,...t})=>{const o=i.Children.toArray(e).map((r,a)=>i.isValidElement(r)?i.cloneElement(r,{"aria-colindex":a+1,coords:{col:a+1,row:t["aria-rowindex"]}}):r);return n.jsx(I,{tag:"tr",...t,children:o})},Zd=g(He)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Fr=g(xi)`
  font-size: 1rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Xd=g.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  border: 1px solid ${({theme:e})=>e.colors.neutral150}

  &:focus-within {
    ${Fr} {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,Qd=g(To)`
  border: 1px solid ${({theme:e})=>e.colors.neutral150}
  height: 16px;
  padding: 0 0 0 8px;
  color: ${({theme:e})=>e.colors.neutral800};
  
  &:hover {
    button {
      cursor: pointer;
    }
  }

  ${De()}
`;i.forwardRef(({name:e,children:t,value:o="",onClear:r,clearLabel:a="Clear",...s},c)=>{const l=i.useRef(null),d=o.length>0,h=p=>{r(p),l.current.focus()},f=fr(c,l);return n.jsx(Xd,{children:n.jsxs(We,{name:e,children:[n.jsx(Ke,{children:n.jsx(Cr,{children:t})}),n.jsx(Qd,{size:"S",ref:f,value:o,startAction:n.jsx(Fr,{"aria-hidden":!0}),endAction:d?n.jsx(Te,{onClick:h,onMouseDown:p=>{p.preventDefault()},label:a,size:"XS",variant:"ghost",type:"button",children:n.jsx(Zd,{})}):void 0,...s})]})})});const Jd=g(I)`
  display: inline-flex;
  border: none;

  & > svg {
    height: 1.2rem;
    width: 1.2rem;
  }

  & > svg path {
    fill: ${({theme:e,...t})=>t["aria-disabled"]?e.colors.neutral600:e.colors.primary600};
  }

  &:hover {
    cursor: ${({$iconAction:e})=>e?"pointer":"initial"};
  }
`,eu=({children:e,icon:t,label:o,disabled:r=!1,onClick:a,...s})=>{const c=l=>{r||!a||a(l)};return n.jsxs(S,{inline:!0,background:r?"neutral200":"primary100",color:r?"neutral700":"primary600",paddingLeft:3,paddingRight:1,borderColor:r?"neutral300":"primary200",hasRadius:!0,height:"3.2rem",...s,children:[n.jsx(tu,{$disabled:r,variant:"pi",fontWeight:"bold",children:e}),n.jsx(Jd,{tag:"button",disabled:r,"aria-disabled":r,"aria-label":o,padding:2,onClick:c,$iconAction:!!a,children:t})]})},tu=g(T)`
  color: inherit;
  border-right: 1px solid ${({theme:e,$disabled:t})=>t?e.colors.neutral300:e.colors.primary200};
  padding-right: ${({theme:e})=>e.spaces[2]};
`;i.forwardRef(({children:e,clearLabel:t="Clear",customizeContent:o,disabled:r,hasError:a,id:s,name:c,onChange:l,onClear:d,onCloseAutoFocus:h,onReachEnd:f,placeholder:p,required:u,size:m,startIcon:x,value:b,withTags:y,...w},$)=>{const C=i.useRef(null),[v,j]=i.useState(),[k,R]=i.useState(!1),L=_=>{l?l(_):j(_)},V=_=>()=>{const ne=Array.isArray(b)?b.filter(J=>J!==_):(v??[]).filter(J=>J!==_);l?l(ne):j(ne)},O=_=>{R(_)},z=ye(),P=`intersection-${Fe(z)}`;it(C,_=>{f&&f(_)},{selectorToWatch:`#${P}`,skipWhen:!k});const N=typeof b<"u"&&b!==null?b:v,B=_=>_&&typeof _=="object"&&_.value?n.jsx(eu,{tabIndex:-1,disabled:r,icon:n.jsx(He,{width:`${14/16}rem`,height:`${14/16}rem`}),onClick:V(_.value),children:_.textValue},_.value):null,{error:K,...U}=ge("MultiSelect"),G=!!K||a,q=U.id??s,ee=U.name??c,Y=U.required??u;let ae;return K?ae=`${q}-error`:U.hint&&(ae=`${q}-hint`),n.jsxs(Sr,{onOpenChange:O,disabled:r,required:Y,onValueChange:L,value:N,...w,multi:!0,children:[n.jsx(Ir,{ref:$,id:q,name:ee,"aria-label":w["aria-label"],"aria-describedby":ae??w["aria-describedby"],startIcon:x,hasError:G,disabled:r,clearLabel:t,onClear:N?.length?d:void 0,withTags:!!(y&&(N?.length??!1)),size:m,children:n.jsx(Rr,{placeholder:p,textColor:N?.length?"neutral800":"neutral600",children:N?.length?y?B:o?o(N):void 0:void 0})}),n.jsx(kr,{children:n.jsx(Tr,{position:"popper",sideOffset:4,onCloseAutoFocus:h,children:n.jsxs(Er,{ref:C,children:[e,n.jsx(I,{id:P,width:"100%",height:"1px"})]})})})]})});const ou=i.forwardRef(({value:e,children:t,startIcon:o,...r},a)=>n.jsxs(Eo,{ref:a,value:e.toString(),...r,children:[o&&n.jsx(I,{tag:"span","aria-hidden":!0,children:o}),n.jsx(Dr,{children:({isSelected:s,isIntermediate:c})=>n.jsx(ko,{checked:c?"indeterminate":s})}),n.jsx(T,{children:n.jsx(Ar,{children:t})})]}));i.forwardRef(({children:e,label:t,startIcon:o,values:r=[],...a},s)=>n.jsxs(Uc,{ref:s,children:[n.jsxs(Eo,{value:r,...a,children:[o&&n.jsx(I,{tag:"span","aria-hidden":!0,children:o}),n.jsx(Dr,{children:({isSelected:c,isIntermediate:l})=>n.jsx(ko,{checked:l?"indeterminate":c})}),n.jsx(T,{children:t})]}),e]}));g(ou)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`;const nu="23.2rem";i.forwardRef(({...e},t)=>n.jsx(ru,{ref:t,...e,tag:"nav"}));const ru=g(I)`
  width: ${nu};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`;g($d)`
  width: 2.4rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`;de(({active:e,children:t,icon:o=null,withBullet:r=!1,isSubSectionChild:a=!1,...s},c)=>n.jsxs(au,{background:"neutral100",paddingLeft:a?9:7,paddingBottom:2,paddingTop:2,ref:c,...s,children:[n.jsxs(S,{children:[o?n.jsx(iu,{children:o}):n.jsx(Kt,{$active:e}),n.jsx(T,{paddingLeft:2,children:t})]}),r&&n.jsx(S,{paddingRight:4,children:n.jsx(Kt,{$active:!0})})]}));const Kt=g.span`
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.neutral600};
  border-radius: 50%;
`,au=g(Ge)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>A`
        background-color: ${e.colors.primary100};
        border-right: 2px solid ${e.colors.primary600};
        color: ${e.colors.primary700};
        font-weight: 500;
      `}

    ${Kt} {
      background-color: ${({theme:e})=>e.colors.primary600};
    }
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,iu=g.div`
  svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`;g.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`;g(I)`
  & > svg {
    height: 0.4rem;
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`;i.forwardRef(({visibleLabels:e,onLabel:t="On",offLabel:o="Off",onCheckedChange:r,checked:a,defaultChecked:s,disabled:c,...l},d)=>{const[h,f]=ve({prop:a,defaultProp:s}),p=u=>{f(u)};return n.jsxs(S,{gap:3,children:[n.jsx(su,{ref:d,onCheckedChange:Pe(r,p),checked:h,disabled:c,...l,children:n.jsx(lu,{})}),e?n.jsx(cu,{"aria-hidden":!0,"data-disabled":c,"data-state":h?"checked":"unchecked",children:h?t:o}):null]})});const su=g(bi)`
  width: 4rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  background-color: ${({theme:e})=>e.colors.danger500};

  &[data-state='checked'] {
    background-color: ${({theme:e})=>e.colors.success500};
  }

  &[data-disabled] {
    background-color: ${({theme:e})=>e.colors.neutral300};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`,lu=g($i)`
  display: block;
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.neutral0};
  transform: translateX(4px);

  &[data-state='checked'] {
    transform: translateX(20px);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,cu=g(T)`
  color: ${e=>e.theme.colors.danger600};

  &[data-state='checked'] {
    color: ${e=>e.theme.colors.success600};
  }

  &[data-disabled='true'] {
    color: ${({theme:e})=>e.colors.neutral500};
  }
`,[du,Ao]=at("Tabs"),uu=i.forwardRef(({disabled:e=!1,variant:t="regular",hasError:o,...r},a)=>n.jsx(du,{disabled:e,hasError:o,variant:t,children:n.jsx(fu,{ref:a,...r})})),fu=g(oa)`
  width: 100%;
  position: relative;
`,hu=i.forwardRef((e,t)=>{const{variant:o}=Ao("List");return n.jsx(pu,{ref:t,...e,$variant:o})}),pu=g(na)`
  display: flex;
  align-items: ${e=>e.$variant==="regular"?"flex-end":"unset"};
  position: relative;
  z-index: 0;
`,mu=i.forwardRef(({children:e,disabled:t,...o},r)=>{const{disabled:a,variant:s,hasError:c}=Ao("Trigger"),l=a===!0||a===o.value||t,d=c===o.value;return n.jsxs(gu,{ref:r,...o,$hasError:d,$variant:s,disabled:l,children:[n.jsx(Wr,{fontWeight:"bold",variant:s==="simple"?"sigma":void 0,children:e}),s==="simple"?n.jsx(zr,{}):null]})}),zr=g.span`
  display: block;
  width: 100%;
  background-color: currentColor;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  height: 0.2rem;
`,Wr=g(T)``,gu=g(ta)`
  position: relative;
  color: ${e=>e.$hasError?e.theme.colors.danger600:e.theme.colors.neutral600};
  cursor: pointer;
  z-index: 0;

  ${e=>e.$variant==="simple"?A`
        padding-block: ${t=>t.theme.spaces[4]};
        padding-inline: ${t=>t.theme.spaces[4]};

        & > ${Wr} {
          line-height: 1.2rem;
        }

        &[data-state='active'] {
          color: ${e.$hasError?e.theme.colors.danger600:e.theme.colors.primary700};

          & > ${zr} {
            opacity: 1;
          }
        }
      `:A`
        padding-block: ${t=>t.theme.spaces[3]};
        padding-inline: ${t=>t.theme.spaces[3]};
        flex: 1;
        background-color: ${t=>t.theme.colors.neutral100};
        border-bottom: solid 1px ${t=>t.theme.colors.neutral150};

        &:not([data-state='active']) + &:not([data-state='active']) {
          border-left: solid 1px ${t=>t.theme.colors.neutral150};
        }

        &[data-state='active'] {
          padding-block: ${t=>t.theme.spaces[4]};
          padding-inline: ${t=>t.theme.spaces[4]};
          color: ${e.$hasError?e.theme.colors.danger600:e.theme.colors.primary700};
          border-top-right-radius: ${t=>t.theme.borderRadius};
          border-top-left-radius: ${t=>t.theme.borderRadius};
          background-color: ${t=>t.theme.colors.neutral0};
          border-bottom: solid 1px ${t=>t.theme.colors.neutral0};
          box-shadow: ${e.theme.shadows.tableShadow};
          z-index: 1;
        }
      `}

  &[data-disabled] {
    cursor: not-allowed;
    color: ${e=>e.theme.colors.neutral400};
  }
`,xu=i.forwardRef((e,t)=>{const{variant:o}=Ao("Content");return n.jsx(bu,{$variant:o,ref:t,...e})}),bu=g(ra)`
  ${e=>e.$variant==="simple"?A``:A`
        position: relative;
        z-index: 1;
        background-color: ${t=>t.theme.colors.neutral0};
      `}
`,xe=Object.freeze(Object.defineProperty({__proto__:null,Content:xu,List:hu,Root:uu,Trigger:mu},Symbol.toStringTag,{value:"Module"})),$u=g(I)`
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
`,wu=g(Ud)`
  width: 100%;
  white-space: nowrap;
`,yu=g(I)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:e})=>e==="both"||e==="left"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:e})=>e==="both"||e==="right"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    right: 0;
    top: 0;
  }
`,Cu=g(I)`
  overflow-x: auto;
`;i.forwardRef(({footer:e,...t},o)=>{const r=i.useRef(null),[a,s]=i.useState(),c=l=>{const d=l.target.scrollWidth-l.target.clientWidth;if(l.target.scrollLeft===0){s("right");return}if(l.target.scrollLeft===d){s("left");return}l.target.scrollLeft>0&&s("both")};return i.useEffect(()=>{r.current.scrollWidth>r.current.clientWidth&&s("right")},[]),n.jsxs($u,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[n.jsx(yu,{$overflowing:a,position:"relative",children:n.jsx(Cu,{ref:r,onScroll:c,paddingLeft:6,paddingRight:6,children:n.jsx(wu,{ref:o,...t})})}),e]})});g(qd)`
  & tr:last-of-type {
    border-bottom: none;
  }
`;g(Gd)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`;g(Yd)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:e})=>e.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:e})=>e.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: 5.6rem;
  }
`;const Br=g(_r)`
  vertical-align: middle;
  text-align: left;
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`;i.forwardRef(({children:e,action:t,...o},r)=>n.jsx(Br,{color:"neutral600",as:Kd,ref:r,...o,children:n.jsxs(S,{children:[e,t]})}));i.forwardRef(({children:e,...t},o)=>n.jsx(Br,{color:"neutral800",ref:o,...t,children:e}));g(I)`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1rem;
    width: 1rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`;g(I)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
`;de(({children:e,startIcon:t,endIcon:o,disabled:r=!1,loading:a=!1,...s},c)=>{const l=r||a;return n.jsxs(Su,{ref:c,disabled:l,"aria-disabled":l,tag:"button",type:"button",gap:2,...s,children:[a?n.jsx(ju,{"aria-hidden":!0,children:n.jsx(fn,{})}):t,n.jsx(T,{variant:"pi",children:e}),o]})});const vu=ie`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,ju=g.span`
  display: flex;
  animation: ${vu} 2s infinite linear;
  will-change: transform;
`,Su=g(S)`
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.primary600};
  cursor: pointer;

  &[aria-disabled='true'] {
    pointer-events: none;
    color: ${e=>e.theme.colors.neutral600};
  }

  ${$t}
`,Iu=i.forwardRef((e,t)=>n.jsx(To,{ref:t,...e}));Iu.displayName="TextInput";i.forwardRef(({disabled:e,hasError:t,id:o,name:r,required:a,...s},c)=>{const{error:l,...d}=ge("Textarea"),h=!!l||t,f=d.id??o,p=d.name??r,u=d.required||a;let m;return l?m=`${f}-error`:d.hint&&(m=`${f}-hint`),n.jsx(Ru,{borderColor:h?"danger600":"neutral200",$hasError:h,hasRadius:!0,children:n.jsx(ku,{"aria-invalid":h,"aria-required":u,tag:"textarea",background:e?"neutral150":"neutral0",color:e?"neutral600":"neutral800",disabled:e,fontSize:2,hasRadius:!0,ref:c,lineHeight:4,padding:4,width:"100%",height:"100%",id:f,name:p,"aria-describedby":m,...s})})});const Ru=g(I)`
  height: 10.5rem;
  ${De()}
`,ku=g(I)`
  border: none;
  resize: none;

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    font-size: ${({theme:e})=>e.fontSizes[2]};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;i.forwardRef(({offLabel:e,onLabel:t,disabled:o,hasError:r,required:a,id:s,name:c,checked:l,onChange:d,...h},f)=>{const[p=!1,u]=ve({prop:l}),m=p!==null&&!p,{error:x,...b}=ge("Toggle"),y=!!x||r,w=b.id??s,$=b.name??c,C=b.required||a;let v;return x?v=`${w}-error`:b.hint&&(v=`${w}-hint`),n.jsxs(Tu,{position:"relative",hasRadius:!0,padding:1,background:o?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200",wrap:"wrap",cursor:o?"not-allowed":"pointer",$hasError:y,children:[n.jsx(en,{hasRadius:!0,flex:"1 1 50%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,justifyContent:"center",background:o&&m?"neutral200":m?"neutral0":"transparent",borderColor:o&&m?"neutral300":m?"neutral200":o?"neutral150":"neutral100",children:n.jsx(T,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:o?"neutral700":m?"danger700":"neutral600",children:e})}),n.jsx(en,{hasRadius:!0,flex:"1 1 50%",paddingLeft:3,paddingRight:3,justifyContent:"center",background:o&&p?"neutral200":p?"neutral0":"transparent",borderColor:o&&p?"neutral300":p?"neutral200":o?"neutral150":"neutral100",children:n.jsx(T,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:o?"neutral700":p?"primary600":"neutral600",children:t})}),n.jsx(Eu,{...h,id:w,name:$,ref:f,onChange:j=>{u(j.currentTarget.checked),d?.(j)},type:"checkbox","aria-required":C,disabled:o,"aria-disabled":o,checked:!!p,"aria-describedby":v})]})});const Tu=g(S)`
  ${De()}
`,en=g(S)`
  padding-block: 0.6rem;
`,Eu=g.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
`;de((e,t)=>{const{gap:o=0,gridCols:r=12,...a}=e;return n.jsx(Du,{ref:t,$gap:o,$gridCols:r,...a})});const Du=g(I)`
  display: grid;
  grid-template-columns: repeat(${({$gridCols:e})=>e}, 1fr);
  ${({theme:e,$gap:t})=>bt({gap:t},e)}
`;de(({col:e,s:t,xs:o,m:r,...a},s)=>n.jsx(Au,{ref:s,$col:e,$s:t,$xs:o,$m:r,...a}));const Au=g(S)`
  grid-column: span ${({$xs:e})=>e??12};
  max-width: 100%;

  ${({theme:e})=>e.breakpoints.small} {
    grid-column: span ${({$s:e,$xs:t})=>e??t??12};
  }

  ${({theme:e})=>e.breakpoints.medium} {
    grid-column: span ${({$m:e,$s:t,$xs:o})=>e??t??o??12};
  }

  ${({theme:e})=>e.breakpoints.large} {
    grid-column: span ${({$col:e,$m:t,$s:o,$xs:r})=>e??t??o??r??12};
  }
`,fe=e=>`${ji}.${e}`,tn=({command:e})=>{const{formatMessage:t}=tt(),{copy:o}=Si(),r=t({id:fe("Homepage.deploy.cli.copy"),defaultMessage:"Copy"}),a=async()=>await o(e);return n.jsx(Ro,{label:r,children:n.jsx(Te,{size:"XS",variant:"ghost",label:r,onClick:a,children:n.jsx(Ii,{})})})},Pu=()=>{const{formatMessage:e}=tt();return n.jsx(I,{minWidth:"28em",maxWidth:"28em",paddingTop:8,children:n.jsxs(xe.Root,{defaultValue:"yarn",children:[n.jsxs(xe.List,{"aria-label":e({id:fe("Homepage.deploy.cli.ariaLabel"),defaultMessage:"Package manager"}),children:[n.jsx(xe.Trigger,{value:"yarn",children:n.jsx(T,{variant:"omega",children:"Yarn"})}),n.jsx(xe.Trigger,{value:"npm",children:n.jsx(T,{variant:"omega",children:"NPM"})})]}),n.jsx(xe.Content,{value:"yarn",children:n.jsx(I,{background:"neutral100",children:n.jsx(I,{padding:4,children:n.jsxs(S,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[n.jsx(T,{tag:"code",textColor:"neutral800",children:"yarn strapi deploy"}),n.jsx(tn,{command:"yarn strapi deploy"})]})})})}),n.jsx(xe.Content,{value:"npm",children:n.jsx(I,{background:"neutral100",children:n.jsx(I,{padding:4,children:n.jsxs(S,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[n.jsx(T,{tag:"code",textColor:"neutral800",children:"npm run deploy"}),n.jsx(tn,{command:"npm run deploy"})]})})})})]})})},Vu=()=>{const{formatMessage:e}=tt(),t=e({id:fe("Homepage.deploy.documentation"),defaultMessage:"Having trouble? Check our documentation"});return n.jsxs(I,{paddingBottom:5,children:[n.jsx(S,{direction:"column",children:n.jsx(T,{variant:"delta",paddingBottom:5,paddingTop:2,children:e({id:fe("Homepage.deploy.title"),defaultMessage:"Choose your preferred deployment method"})})}),n.jsxs(xe.Root,{defaultValue:"cloud",variant:"simple",children:[n.jsx(S,{direction:"column",children:n.jsxs(xe.List,{"aria-label":e({id:fe("Homepage.deploy.ariaLabel"),defaultMessage:"Deployment options"}),children:[n.jsx(xe.Trigger,{value:"cloud",children:n.jsx(I,{minWidth:{initial:"10em",medium:"20em"},children:n.jsxs(S,{direction:"row",gap:2,justifyContent:"center",children:[n.jsx(T,{variant:"omega",children:"Cloud"}),n.jsx(dr,{active:!0,children:e({id:fe("Homepage.deploy.git.badge"),defaultMessage:"Recommended"})})]})})}),n.jsx(xe.Trigger,{value:"cli",children:n.jsx(I,{minWidth:{initial:"10em",medium:"20em"},children:n.jsx(S,{justifyContent:"center",children:n.jsx(T,{variant:"omega",children:"CLI"})})})})]})}),n.jsxs(I,{children:[n.jsx(xe.Content,{value:"cloud",children:n.jsxs(S,{direction:"column",paddingTop:6,children:[n.jsx(I,{children:n.jsx(Ge,{isExternal:!0,href:"https://cloud.strapi.io/login?utm_campaign=Strapi%20Cloud%20Plugin&utm_source=In-Product&utm_medium=CTA",children:n.jsx(Ri,{height:40,width:40,fill:"buttonPrimary600"})})}),n.jsx(I,{paddingBottom:2,paddingTop:5,children:n.jsx(T,{variant:"delta",textColor:"neutral1000",children:e({id:fe("Homepage.deploy.git.title"),defaultMessage:"Deploy to Strapi Cloud"})})}),n.jsx(T,{variant:"omega",textColor:"neutral600",children:e({id:fe("Homepage.deploy.git.subTitle"),defaultMessage:"Deploy a GitHub or GitLab project directly within Strapi Cloud"})}),n.jsx(I,{paddingTop:8,children:n.jsx(Sd,{variant:"default",endIcon:n.jsx(un,{fill:"neutral0"}),href:"https://cloud.strapi.io/login?utm_campaign=Strapi%20Cloud%20Plugin&utm_source=In-Product&utm_medium=CTA",isExternal:!0,size:"M",children:e({id:fe("Homepage.deploy.git.button"),defaultMessage:"Deploy to Strapi Cloud"})})}),n.jsx(I,{paddingTop:5,children:n.jsx(Ht,{isExternal:!0,href:"https://docs.strapi.io/cloud/getting-started/deployment",children:t})})]})}),n.jsx(xe.Content,{value:"cli",children:n.jsxs(S,{direction:"column",paddingTop:6,children:[n.jsx(ki,{height:40,width:40,fill:"buttonPrimary600"}),n.jsx(I,{paddingBottom:2,paddingTop:5,children:n.jsx(T,{variant:"delta",textColor:"neutral1000",children:e({id:fe("Homepage.deploy.cli.title"),defaultMessage:"Deploy via CLI"})})}),n.jsx(T,{variant:"omega",textColor:"neutral600",children:e({id:fe("Homepage.deploy.cli.subTitle"),defaultMessage:"Use the command line to deploy your Strapi project directly"})}),n.jsx(Pu,{}),n.jsx(I,{paddingTop:5,children:n.jsx(Ht,{isExternal:!0,href:"https://docs.strapi.io/cloud/getting-started/deployment-cli",children:t})})]})})]})]})]})},Nu=()=>{const{formatMessage:e}=tt(),t=[{id:"api",message:"10K API requests"},{id:"storage",message:"10 GB storage"},{id:"bandwidth",message:"10 GB asset bandwidth"},{id:"cdn",message:"Global CDN"},{id:"pushToDeploy",message:"Push to deploy"}];return n.jsx(I,{children:n.jsx(I,{paddingBottom:10,children:n.jsx(S,{direction:"column",children:n.jsx(S,{direction:"row",wrap:"wrap",children:t.map(({id:o,message:r})=>n.jsxs(S,{paddingRight:5,children:[n.jsx(Ti,{fill:"primary500"}),n.jsx(T,{variant:"omega",paddingLeft:1,children:e({id:fe(`Homepage.freePlan.${o}`),defaultMessage:r})})]},o))})})})})},Mu=()=>{const{formatMessage:e}=tt();return n.jsxs(I,{paddingLeft:6,paddingRight:6,paddingTop:5,paddingBottom:3,background:"neutral100",children:[n.jsxs(S,{direction:"column",gap:2,children:[n.jsx(T,{variant:"alpha",children:e({id:fe("Homepage.title"),defaultMessage:"Deploy with Strapi Cloud for Free!"})}),n.jsx(S,{direction:{initial:"row",medium:"column"},children:n.jsx(T,{variant:"epsilon",textColor:"neutral600",children:e({id:fe("Homepage.subTitle"),defaultMessage:"Start with our completely free plan - no credit card required, no time limits."})})})]}),n.jsxs(I,{padding:8,children:[n.jsx(Nu,{}),n.jsx(I,{paddingTop:8,children:n.jsx(I,{padding:6,background:"neutral0",shadow:"tableShadow",children:n.jsx(Vu,{})})})]})]})},_u=()=>n.jsx("div",{children:n.jsxs(Ei,{children:[n.jsx(Mo,{index:!0,element:n.jsx(Mu,{})}),n.jsx(Mo,{path:"*",element:n.jsx(Di.Error,{})})]})});export{_u as App};
