import{aI as j,j as e,aJ as i,aK as w,aL as r,aM as $,b as C,a as R,aN as T,aO as F,l,aP as L,aQ as M,aR as v,aS as W,aT as S,aU as D,aV as I,aW as A,aX as m,aG as K}from"./strapi-e5zNjTAM.js";import{W as u}from"./WidgetHelpers-Cv9JA8oH.js";import{g as N,a as G}from"./users-DLc-PG84.js";const E=l(r)`
  font-size: 2.4rem;
`,J=()=>{const t=j("User",s=>s.user),a=N(t),c=G(t);return e.jsxs(i,{direction:"column",gap:3,height:"100%",justifyContent:"center",children:[e.jsx(w.Item,{delayMs:0,fallback:c}),a&&e.jsx(E,{fontWeight:"bold",textTransform:"none",textAlign:"center",children:a}),t?.email&&e.jsx(r,{variant:"omega",textColor:"neutral600",children:t?.email}),t?.roles?.length&&e.jsx(i,{marginTop:2,gap:1,wrap:"wrap",children:t?.roles?.map(s=>e.jsx($,{children:s.name},s.id))})]})},z=l(m)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  border-radius: ${({theme:t})=>t.borderRadius};
  overflow: hidden;
`,B=l(m)`
  border-bottom: 1px solid ${({theme:t})=>t.colors.neutral200};
  border-right: 1px solid ${({theme:t})=>t.colors.neutral200};
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  &:nth-child(2n) {
    border-right: none;
  }
  &:nth-last-child(-n + 2) {
    border-bottom: none;
  }
`,O=({locale:t,number:a})=>new Intl.NumberFormat(t,{notation:"compact",maximumFractionDigits:1}).format(a),P=l(K)`
  text-decoration: none;
  padding: ${({theme:t})=>t.spaces[3]};
`,V=()=>{const{trackUsage:t}=C(),{formatMessage:a,locale:c}=R(),{data:s,isLoading:p}=T(),{data:d,isLoading:b}=F();if(b||p)return e.jsx(u.Loading,{});if(!d||!s)return e.jsx(u.Error,{});const f={entries:{label:{id:"widget.key-statistics.list.entries",defaultMessage:"Entries"},icon:{component:e.jsx(A,{}),background:"primary100",color:"primary600"},link:"/content-manager"},assets:{label:{id:"widget.key-statistics.list.assets",defaultMessage:"Assets"},icon:{component:e.jsx(I,{}),background:"warning100",color:"warning600"},link:"/plugins/upload"},contentTypes:{label:{id:"widget.key-statistics.list.contentTypes",defaultMessage:"Content-Types"},icon:{component:e.jsx(D,{}),background:"secondary100",color:"secondary600"},link:"/plugins/content-type-builder"},components:{label:{id:"widget.key-statistics.list.components",defaultMessage:"Components"},icon:{component:e.jsx(S,{}),background:"alternative100",color:"alternative600"},link:"/plugins/content-type-builder"},locales:{label:{id:"widget.key-statistics.list.locales",defaultMessage:"Locales"},icon:{component:e.jsx(W,{}),background:"success100",color:"success600"},link:"/settings/internationalization"},admins:{label:{id:"widget.key-statistics.list.admins",defaultMessage:"Admins"},icon:{component:e.jsx(v,{}),background:"danger100",color:"danger600"},link:"/settings/users?pageSize=10&page=1&sort=firstname"},webhooks:{label:{id:"widget.key-statistics.list.webhooks",defaultMessage:"Webhooks"},icon:{component:e.jsx(M,{}),background:"alternative100",color:"alternative600"},link:"/settings/webhooks"},apiTokens:{label:{id:"widget.key-statistics.list.apiTokens",defaultMessage:"API Tokens"},icon:{component:e.jsx(L,{}),background:"neutral100",color:"neutral600"},link:"/settings/api-tokens?sort=name:ASC"}},{draft:x,published:k,modified:h}=s??{draft:0,published:0,modified:0},y=x+k+h;return e.jsx(z,{children:Object.entries(f).map(([n,o])=>{const g=d?.[n];return g!==null&&e.jsx(B,{as:P,to:o.link,"data-testid":`stat-${n}`,onClick:()=>t("didOpenKeyStatisticsWidgetLink",{itemKey:n}),children:e.jsxs(i,{alignItems:"center",gap:2,children:[e.jsx(i,{padding:2,borderRadius:1,background:o.icon.background,color:o.icon.color,children:o.icon.component}),e.jsxs(i,{direction:"column",alignItems:"flex-start",children:[e.jsx(r,{variant:"pi",fontWeight:"bold",textColor:"neutral500",children:a(o.label)}),e.jsx(r,{variant:"omega",fontWeight:"bold",textColor:"neutral800",children:O({locale:c,number:n==="entries"?y:g})})]})]})},`key-statistics-${n}`)})})};export{V as KeyStatisticsWidget,J as ProfileWidget};
