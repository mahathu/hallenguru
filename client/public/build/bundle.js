var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function f(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let p;function g(t){p=t}function b(){if(!p)throw new Error("Function called outside component initialization");return p}const $=[],v=[],x=[],y=[],k=Promise.resolve();let w=!1;function _(t){x.push(t)}const E=new Set;let j=0;function D(){const t=p;do{for(;j<$.length;){const t=$[j];j++,g(t),S(t.$$)}for(g(null),$.length=0,j=0;v.length;)v.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];E.has(e)||(E.add(e),e())}x.length=0}while($.length);for(;y.length;)y.pop()();w=!1,E.clear(),g(t)}function S(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const H=new Set;let C;function L(){C={r:0,c:[],p:C}}function N(){C.r||r(C.c),C=C.p}function P(t,e){t&&t.i&&(H.delete(t),t.i(e))}function A(t,e,n,r){if(t&&t.o){if(H.has(t))return;H.add(t),C.c.push((()=>{H.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function T(t,e){const n=e.token={};function r(t,r,o,l){if(e.token!==n)return;e.resolved=l;let c=e.ctx;void 0!==o&&(c=c.slice(),c[o]=l);const s=t&&(e.current=t)(c);let a=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==r&&t&&(L(),A(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),N())})):e.block.d(1),s.c(),P(s,1),s.m(e.mount(),e.anchor),a=!0),e.block=s,e.blocks&&(e.blocks[r]=s),a&&D()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const n=b();if(t.then((t=>{g(n),r(e.then,1,e.value,t),g(null)}),(t=>{if(g(n),r(e.catch,2,e.error,t),g(null),!e.hasCatch)throw t})),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var o}function B(t){t&&t.c()}function M(t,n,l,c){const{fragment:s,on_mount:a,on_destroy:i,after_update:u}=t.$$;s&&s.m(n,l),c||_((()=>{const n=a.map(e).filter(o);i?i.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(_)}function O(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&($.push(t),w||(w=!0,k.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(e,o,l,c,s,i,u,d=[-1]){const f=p;g(e);const h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:o.target||f.$$.root};u&&u(h.root);let m=!1;if(h.ctx=l?l(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&s(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),m&&F(e,t)),n})):[],h.update(),m=!0,r(h.before_update),h.fragment=!!c&&c(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(a)}else h.fragment&&h.fragment.c();o.intro&&P(e.$$.fragment),M(e,o.target,o.anchor,o.customElement),D()}g(f)}class z{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(t){let e,n,r,o=t[0].state+"";return{c(){e=u("("),n=u(o),r=u(")")},m(t,o){s(t,e,o),s(t,n,o),s(t,r,o)},p(t,e){1&e&&o!==(o=t[0].state+"")&&m(n,o)},d(t){t&&a(e),t&&a(n),t&&a(r)}}}function Y(t){let e,n,r=I(t[0].date)+"";return{c(){e=i("span"),n=u(r),h(e,"class","font-light mr-1")},m(t,r){s(t,e,r),c(e,n)},p(t,e){1&e&&r!==(r=I(t[0].date)+"")&&m(n,r)},d(t){t&&a(e)}}}function G(e){let n,r,o,l,f,p,g,b,$,v,x,y,k,w,_,E,j,D,S=e[0].name+"",H=e[0].date!=(new Date).setHours(0,0,0,0),C=e[0].start_time+"",L=e[0].end_time+"",N="reserved"===e[0].state&&R(e),P=H&&Y(e);return{c(){n=i("div"),r=i("div"),o=i("div"),l=i("div"),f=u(S),p=d(),N&&N.c(),g=d(),b=i("div"),P&&P.c(),$=d(),v=u(C),x=u(" - "),y=u(L),k=d(),w=i("a"),_=i("button"),E=u("Book Now"),h(l,"class","font-light"),h(b,"class","text-xl tracking-tight"),h(_,"class","px-1 py-1 text-white transition-all duration-100 bg-green-600 border-2 border-green-600 shadow active:bg-green-700 active:border-green-700 hover:bg-green-500 hover:border-green-500 hover:shadow-none disabled:border-gray-200 disabled:border-2 disabled:bg-transparent disabled:shadow-none"),_.disabled=j="available"!=e[0].state,h(w,"href",D=e[0].link),h(r,"class","flex flex-row items-center justify-between"),h(n,"class","pt-3")},m(t,e){s(t,n,e),c(n,r),c(r,o),c(o,l),c(l,f),c(l,p),N&&N.m(l,null),c(o,g),c(o,b),P&&P.m(b,null),c(b,$),c(b,v),c(b,x),c(b,y),c(r,k),c(r,w),c(w,_),c(_,E)},p(t,[e]){1&e&&S!==(S=t[0].name+"")&&m(f,S),"reserved"===t[0].state?N?N.p(t,e):(N=R(t),N.c(),N.m(l,null)):N&&(N.d(1),N=null),1&e&&(H=t[0].date!=(new Date).setHours(0,0,0,0)),H?P?P.p(t,e):(P=Y(t),P.c(),P.m(b,$)):P&&(P.d(1),P=null),1&e&&C!==(C=t[0].start_time+"")&&m(v,C),1&e&&L!==(L=t[0].end_time+"")&&m(y,L),1&e&&j!==(j="available"!=t[0].state)&&(_.disabled=j),1&e&&D!==(D=t[0].link)&&h(w,"href",D)},i:t,o:t,d(t){t&&a(n),N&&N.d(),P&&P.d()}}}function I(t){let e=new Date(t);return`\n            ${String(e.getDate()).padStart(2,"0")}.${String(e.getMonth()+1).padStart(2,"0")}.${e.getFullYear()}`}function J(t,e,n){let{event:r}=e;return t.$$set=t=>{"event"in t&&n(0,r=t.event)},[r]}class K extends z{constructor(t){super(),q(this,t,J,G,l,{event:0})}}function Q(t,e,n){const r=t.slice();return r[2]=e[n],r}function U(t){let e;return{c(){e=i("p"),e.textContent="No events matching this filter."},m(t,n){s(t,e,n)},d(t){t&&a(e)}}}function V(t){let e,n;return e=new K({props:{event:t[2]}}),{c(){B(e.$$.fragment)},m(t,r){M(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.event=t[2]),e.$set(r)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function W(t){let e,n,r,o,l,f,p=t[1],g=[];for(let e=0;e<p.length;e+=1)g[e]=V(Q(t,p,e));const b=t=>A(g[t],1,1,(()=>{g[t]=null}));let $=null;return p.length||($=U()),{c(){e=i("div"),n=i("h1"),r=u(t[0]),o=d(),l=i("div");for(let t=0;t<g.length;t+=1)g[t].c();$&&$.c(),h(n,"class","text-3xl pb-1 font-serif border-b-2 border-gray-600 text-gray-600"),h(l,"class","space-y-3 divide-y divide-solid")},m(t,a){s(t,e,a),c(e,n),c(n,r),c(e,o),c(e,l);for(let t=0;t<g.length;t+=1)g[t].m(l,null);$&&$.m(l,null),f=!0},p(t,[e]){if((!f||1&e)&&m(r,t[0]),2&e){let n;for(p=t[1],n=0;n<p.length;n+=1){const r=Q(t,p,n);g[n]?(g[n].p(r,e),P(g[n],1)):(g[n]=V(r),g[n].c(),P(g[n],1),g[n].m(l,null))}for(L(),n=p.length;n<g.length;n+=1)b(n);N(),p.length?$&&($.d(1),$=null):$||($=U(),$.c(),$.m(l,null))}},i(t){if(!f){for(let t=0;t<p.length;t+=1)P(g[t]);f=!0}},o(t){g=g.filter(Boolean);for(let t=0;t<g.length;t+=1)A(g[t]);f=!1},d(t){t&&a(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(g,t),$&&$.d()}}}function X(t,e,n){let{name:r}=e,{events:o}=e;return t.$$set=t=>{"name"in t&&n(0,r=t.name),"events"in t&&n(1,o=t.events)},[r,o]}class Z extends z{constructor(t){super(),q(this,t,X,W,l,{name:0,events:1})}}function tt(e){let n,r,o=e[12].message+"";return{c(){var t,e,l,c;n=i("p"),r=u(o),t=n,e="color",null===(l="red")?t.style.removeProperty(e):t.style.setProperty(e,l,c?"important":"")},m(t,e){s(t,n,e),c(n,r)},p(t,e){4&e&&o!==(o=t[12].message+"")&&m(r,o)},i:t,o:t,d(t){t&&a(n)}}}function et(t){let e,n,r,o;return e=new Z({props:{name:"Today",events:t[11].filter(t[8])}}),r=new Z({props:{name:"Later Dates",events:t[11].filter(t[9])}}),{c(){B(e.$$.fragment),n=d(),B(r.$$.fragment)},m(t,l){M(e,t,l),s(t,n,l),M(r,t,l),o=!0},p(t,n){const o={};12&n&&(o.events=t[11].filter(t[8])),e.$set(o);const l={};12&n&&(l.events=t[11].filter(t[9])),r.$set(l)},i(t){o||(P(e.$$.fragment,t),P(r.$$.fragment,t),o=!0)},o(t){A(e.$$.fragment,t),A(r.$$.fragment,t),o=!1},d(t){O(e,t),t&&a(n),O(r,t)}}}function nt(e){let n,r,o,l,d,f=e[5].length+"";return{c(){n=i("p"),r=u("Loading: "),o=u(e[1]),l=u("/"),d=u(f)},m(t,e){s(t,n,e),c(n,r),c(n,o),c(n,l),c(n,d)},p(t,e){2&e&&m(o,t[1])},i:t,o:t,d(t){t&&a(n)}}}function rt(t){let e,n,o,l,m,p,g,b,$,v,x,y,k,w,_,E,j,D,S={ctx:t,current:null,token:null,hasCatch:!0,pending:nt,then:et,catch:tt,value:11,error:12,blocks:[,,,]};return T(_=t[2],S),{c(){e=i("div"),n=i("div"),o=i("h1"),o.innerHTML='Hallenguru <div class="ml-3 swimmer">🏊</div>',l=d(),m=i("button"),p=u("Refresh Page"),b=d(),$=i("div"),v=i("label"),x=i("input"),y=u("\n            Show reserved slots (these might become available again soon)"),k=d(),w=i("div"),S.block.c(),h(o,"class","text-4xl font-serif flex flex-row items-center justify-between"),h(m,"class","px-1"),m.disabled=g=t[1]<t[5].length,h(n,"class","py-3 px-3 flex flex-row items-center justify-between sticky top-0 bg-white/60 bg-blur"),h(x,"type","checkbox"),h(v,"class","mb-3"),h(w,"class","space-y-8"),h($,"class","mt-3 px-6"),h(e,"class","mt-2 mx-auto max-w-xl bg-white text-gray-700 shadow-md pt-2 pb-5 backdrop-blur-md")},m(r,a){s(r,e,a),c(e,n),c(n,o),c(n,l),c(n,m),c(m,p),c(e,b),c(e,$),c($,v),c(v,x),x.checked=t[0],c(v,y),c($,k),c($,w),S.block.m(w,S.anchor=null),S.mount=()=>w,S.anchor=null,E=!0,j||(D=[f(m,"click",t[4]),f(x,"change",t[7])],j=!0)},p(e,[n]){t=e,(!E||2&n&&g!==(g=t[1]<t[5].length))&&(m.disabled=g),1&n&&(x.checked=t[0]),S.ctx=t,4&n&&_!==(_=t[2])&&T(_,S)||function(t,e,n){const r=e.slice(),{resolved:o}=t;t.current===t.then&&(r[t.value]=o),t.current===t.catch&&(r[t.error]=o),t.block.p(r,n)}(S,t,n)},i(t){E||(P(S.block),E=!0)},o(t){for(let t=0;t<3;t+=1){A(S.blocks[t])}E=!1},d(t){t&&a(e),S.block.d(),S.token=null,S=null,j=!1,r(D)}}}function ot(t,e){return t.date<e.date?-1:t.date>e.date?1:t.start_time<e.start_time?-1:t.start_time>e.start_time?1:0}function lt(t,e,n){let r;async function o(){let t=[];return n(1,c=0),await Promise.all(l.map((async e=>{const r=await fetch(`./api/ticketinfo/${e}`),o=await r.json();t=[...t,...o],n(1,c++,c)}))),t.map((t=>({...t,date:new Date(t.date).setHours(0,0,0,0)}))).sort(ot)}const l=[1,2,7,9,11,15,17,18,19,21,24,26,27,28,29,30,31,34,38,42,43,45,46,47,48,49,51,52,54,60,61,62,64,68,70,71,74,76,79,81];let c=0,s=(new Date).setHours(0,0,0,0),a=!0,i=o();return t.$$.update=()=>{1&t.$$.dirty&&n(3,r=a?["available","reserved"]:["available"])},[a,c,i,r,function(){n(2,i=o())},l,s,function(){a=this.checked,n(0,a)},t=>t.date===s&&r.includes(t.state),t=>t.date>s&&r.includes(t.state)]}return new class extends z{constructor(t){super(),q(this,t,lt,rt,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
