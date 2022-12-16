var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function i(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function f(){return h(" ")}function m(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let b;function $(t){b=t}function v(t){(function(){if(!b)throw new Error("Function called outside component initialization");return b})().$$.on_mount.push(t)}const _=[],y=[],w=[],x=[],M=Promise.resolve();let D=!1;function S(t){w.push(t)}const Y=new Set;let T=0;function k(){const t=b;do{for(;T<_.length;){const t=_[T];T++,$(t),O(t.$$)}for($(null),_.length=0,T=0;y.length;)y.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];Y.has(e)||(Y.add(e),e())}w.length=0}while(_.length);for(;x.length;)x.pop()();D=!1,Y.clear(),$(t)}function O(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const E=new Set;function L(t,e){-1===t.$$.dirty[0]&&(_.push(t),D||(D=!0,M.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(s,a,i,c,u,d,h,f=[-1]){const m=b;$(s);const g=s.$$={fragment:null,ctx:[],props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(m?m.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:a.target||m.$$.root};h&&h(g.root);let p=!1;if(g.ctx=i?i(s,a.props||{},((t,e,...n)=>{const r=n.length?n[0]:e;return g.ctx&&u(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),p&&L(s,t)),e})):[],g.update(),p=!0,r(g.before_update),g.fragment=!!c&&c(g.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);g.fragment&&g.fragment.l(t),t.forEach(l)}else g.fragment&&g.fragment.c();a.intro&&((v=s.$$.fragment)&&v.i&&(E.delete(v),v.i(_))),function(t,n,s,a){const{fragment:i,after_update:c}=t.$$;i&&i.m(n,s),a||S((()=>{const n=t.$$.on_mount.map(e).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...n):r(n),t.$$.on_mount=[]})),c.forEach(S)}(s,a.target,a.anchor,a.customElement),k()}var v,_;$(m)}class A{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const t=r.indexOf(n);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var H,N,j=(H=function(t,e){t.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",o="second",s="minute",a="hour",i="day",c="week",l="month",u="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},b=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={s:b,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),o=n%60;return(e<=0?"+":"-")+b(r,2,"0")+":"+b(o,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),o=e.clone().add(r,l),s=n-o<0,a=e.clone().add(r+(s?-1:1),l);return+(-(r+(n-o)/(s?o-a:a-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:d,w:c,d:i,D:h,h:a,m:s,s:o,ms:r,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",_={};_[v]=p;var y=function(t){return t instanceof D},w=function t(e,n,r){var o;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();_[s]&&(o=s),n&&(_[s]=n,o=s);var a=e.split("-");if(!o&&a.length>1)return t(a[0])}else{var i=e.name;_[i]=e,o=i}return!r&&o&&(v=o),o||!r&&v},x=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},M=$;M.l=w,M.i=y,M.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function p(t){this.$L=w(t.locale,null,!0),this.parse(t)}var b=p.prototype;return b.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var o=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},b.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},b.$utils=function(){return M},b.isValid=function(){return!(this.$d.toString()===f)},b.isSame=function(t,e){var n=x(t);return this.startOf(e)<=n&&n<=this.endOf(e)},b.isAfter=function(t,e){return x(t)<this.startOf(e)},b.isBefore=function(t,e){return this.endOf(e)<x(t)},b.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(t,e){var n=this,r=!!M.u(e)||e,u=M.p(t),f=function(t,e){var o=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?o:o.endOf(i)},m=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,p=this.$M,b=this.$D,$="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case l:return r?f(1,p):f(0,p+1);case c:var v=this.$locale().weekStart||0,_=(g<v?g+7:g)-v;return f(r?b-_:b+(6-_),p);case i:case h:return m($+"Hours",0);case a:return m($+"Minutes",1);case s:return m($+"Seconds",2);case o:return m($+"Milliseconds",3);default:return this.clone()}},b.endOf=function(t){return this.startOf(t,!1)},b.$set=function(t,e){var n,c=M.p(t),u="set"+(this.$u?"UTC":""),f=(n={},n[i]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[s]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[c],m=c===i?this.$D+(e-this.$W):e;if(c===l||c===d){var g=this.clone().set(h,1);g.$d[f](m),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},b.set=function(t,e){return this.clone().$set(t,e)},b.get=function(t){return this[M.p(t)]()},b.add=function(r,u){var h,f=this;r=Number(r);var m=M.p(u),g=function(t){var e=x(f);return M.w(e.date(e.date()+Math.round(t*r)),f)};if(m===l)return this.set(l,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===i)return g(1);if(m===c)return g(7);var p=(h={},h[s]=e,h[a]=n,h[o]=t,h)[m]||1,b=this.$d.getTime()+r*p;return M.w(b,this)},b.subtract=function(t,e){return this.add(-1*t,e)},b.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",o=M.z(this),s=this.$H,a=this.$m,i=this.$M,c=n.weekdays,l=n.months,u=function(t,n,o,s){return t&&(t[n]||t(e,r))||o[n].slice(0,s)},d=function(t){return M.s(s%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:i+1,MM:M.s(i+1,2,"0"),MMM:u(n.monthsShort,i,l,3),MMMM:u(l,i),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,c,2),ddd:u(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:M.s(s,2,"0"),h:d(1),hh:d(2),a:h(s,a,!0),A:h(s,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:o};return r.replace(g,(function(t,e){return e||m[t]||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(r,h,f){var m,g=M.p(h),p=x(r),b=(p.utcOffset()-this.utcOffset())*e,$=this-p,v=M.m(this,p);return v=(m={},m[d]=v/12,m[l]=v,m[u]=v/3,m[c]=($-b)/6048e5,m[i]=($-b)/864e5,m[a]=$/n,m[s]=$/e,m[o]=$/t,m)[g]||$,f?v:M.a(v)},b.daysInMonth=function(){return this.endOf(l).$D},b.$locale=function(){return _[this.$L]},b.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},b.clone=function(){return M.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},p}(),S=D.prototype;return x.prototype=S,[["$ms",r],["$s",o],["$m",s],["$H",a],["$W",i],["$M",l],["$y",d],["$D",h]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),x.extend=function(t,e){return t.$i||(t(e,D,x),t.$i=!0),x},x.locale=w,x.isDayjs=y,x.unix=function(t){return x(1e3*t)},x.en=_[v],x.Ls=_,x.p={},x}()},H(N={exports:{}},N.exports),N.exports);const W=[];function P(e,n=t){let r;const o=new Set;function a(t){if(s(e,t)&&(e=t,r)){const t=!W.length;for(const t of o)t[1](),W.push(t,e);if(t){for(let t=0;t<W.length;t+=2)W[t][0](W[t+1]);W.length=0}}}return{set:a,update:function(t){a(t(e))},subscribe:function(s,i=t){const c=[s,i];return o.add(c),1===o.size&&(r=n(a)||t),s(e),()=>{o.delete(c),0===o.size&&(r(),r=null)}}}}const U=P([]),z=function(e,n,s){const i=!Array.isArray(e),c=i?[e]:e,l=n.length<2;return u=e=>{let s=!1;const u=[];let d=0,h=t;const f=()=>{if(d)return;h();const r=n(i?u[0]:u,e);l?e(r):h=o(r)?r:t},m=c.map(((t,e)=>a(t,(t=>{u[e]=t,d&=~(1<<e),s&&f()}),(()=>{d|=1<<e}))));return s=!0,f(),function(){r(m),h()}},{subscribe:P(s,u).subscribe};var u}(U,(t=>t||[]));function F(t,e,n){const r=t.slice();return r[1]=e[n],r[3]=n,r}function I(t,e,n){const r=t.slice();return r[4]=e[n],r[6]=n,r}function J(t,e,n){const r=t.slice();return r[4]=e[n],r[6]=n,r}function Z(t,e,n){const r=t.slice();return r[4]=e[n],r}function q(t){let e,n,r,o,s,a,u,m,b,$,v,_,y,w,x,M,D,S=t[4].maintenance_flat_no+"",Y=t[4].name+"",T=1==t[4].maintenance_status?"Paid":"Unpaid",k=(1==t[4].maintenance_status?t[4].maintenance_amount:"")+"",O=(1==t[4].maintenance_status?j(t[4].maintenance_date).format("DD/MM/YYYY"):"")+"";return{c(){e=d("tr"),n=d("th"),r=h(S),o=f(),s=d("td"),a=h(Y),u=f(),m=d("td"),b=d("button"),$=h(T),_=f(),y=d("td"),w=h(k),x=f(),M=d("td"),D=h(O),g(n,"scope","row"),g(b,"class",v="btn btn-sm "+(1==t[4].maintenance_status?"bg-success":"bg-danger")+" text-white m-0")},m(t,l){c(t,e,l),i(e,n),i(n,r),i(e,o),i(e,s),i(s,a),i(e,u),i(e,m),i(m,b),i(b,$),i(e,_),i(e,y),i(y,w),i(e,x),i(e,M),i(M,D)},p(t,e){1&e&&S!==(S=t[4].maintenance_flat_no+"")&&p(r,S),1&e&&Y!==(Y=t[4].name+"")&&p(a,Y),1&e&&T!==(T=1==t[4].maintenance_status?"Paid":"Unpaid")&&p($,T),1&e&&v!==(v="btn btn-sm "+(1==t[4].maintenance_status?"bg-success":"bg-danger")+" text-white m-0")&&g(b,"class",v),1&e&&k!==(k=(1==t[4].maintenance_status?t[4].maintenance_amount:"")+"")&&p(w,k),1&e&&O!==(O=(1==t[4].maintenance_status?j(t[4].maintenance_date).format("DD/MM/YYYY"):"")+"")&&p(D,O)},d(t){t&&l(e)}}}function V(t){let e,n,r,o,s,a,u,m,b,$,v,_,y=t[6]+1+"",w=t[4].earning_title+"",x=t[4].earning_amount+"",M=j(t[4].earning_date).format("DD/MM/YYYY")+"";return{c(){e=d("tr"),n=d("th"),r=h(y),o=f(),s=d("td"),a=h(w),u=f(),m=d("td"),b=h(x),$=f(),v=d("td"),_=h(M),g(n,"scope","row")},m(t,l){c(t,e,l),i(e,n),i(n,r),i(e,o),i(e,s),i(s,a),i(e,u),i(e,m),i(m,b),i(e,$),i(e,v),i(v,_)},p(t,e){1&e&&w!==(w=t[4].earning_title+"")&&p(a,w),1&e&&x!==(x=t[4].earning_amount+"")&&p(b,x),1&e&&M!==(M=j(t[4].earning_date).format("DD/MM/YYYY")+"")&&p(_,M)},d(t){t&&l(e)}}}function B(t){let e,n,r,o,s,a,u,m,b,$,v,_,y=t[6]+1+"",w=t[4].expense_title+"",x=t[4].expense_amount+"",M=j(t[4].expense_date).format("DD/MM/YYYY")+"";return{c(){e=d("tr"),n=d("th"),r=h(y),o=f(),s=d("td"),a=h(w),u=f(),m=d("td"),b=h(x),$=f(),v=d("td"),_=h(M),g(n,"scope","row")},m(t,l){c(t,e,l),i(e,n),i(n,r),i(e,o),i(e,s),i(s,a),i(e,u),i(e,m),i(m,b),i(e,$),i(e,v),i(v,_)},p(t,e){1&e&&w!==(w=t[4].expense_title+"")&&p(a,w),1&e&&x!==(x=t[4].expense_amount+"")&&p(b,x),1&e&&M!==(M=j(t[4].expense_date).format("DD/MM/YYYY")+"")&&p(_,M)},d(t){t&&l(e)}}}function Q(t){let e,n,o,s,a,b,$,v,_,y,w,x,M,D,S,Y,T,k,O,E,L,C,A,H,N,j,W,P,U,z,F,Q,R,K,X,tt,et,nt,rt,ot,st,at,it,ct,lt,ut,dt,ht,ft,mt,gt,pt,bt,$t,vt,_t,yt,wt,xt,Mt,Dt,St,Yt,Tt,kt,Ot,Et,Lt,Ct,At,Ht,Nt,jt,Wt,Pt,Ut,zt,Ft,It,Jt,Zt,qt,Vt,Bt,Qt,Rt,Gt,Kt,Xt,te,ee,ne,re,oe,se,ae,ie,ce,le,ue,de,he,fe,me,ge,pe,be,$e,ve,_e=t[1].month_name+"",ye=t[1].month_name+"",we=t[1].savings.maintenance_total+"",xe=t[1].month_name+"",Me=t[1].savings.earnings_total+"",De=t[1].month_name+"",Se=t[1].savings.expenses_total+"",Ye=t[1].month_name+"",Te=t[1].savings.maintenance_total+"",ke=t[1].savings.previous_month_total+"",Oe=t[1].savings.earnings_total+"",Ee=t[1].savings.expenses_total+"",Le=t[1].savings.total+"",Ce=t[1].maintenance,Ae=[];for(let e=0;e<Ce.length;e+=1)Ae[e]=q(Z(t,Ce,e));let He=t[1].earnings,Ne=[];for(let e=0;e<He.length;e+=1)Ne[e]=V(J(t,He,e));let je=t[1].expenses,We=[];for(let e=0;e<je.length;e+=1)We[e]=B(I(t,je,e));return{c(){e=d("div"),n=d("h2"),o=d("button"),s=h(_e),a=f(),b=d("div"),$=d("div"),v=d("button"),_=h("Download Payment"),w=f(),x=d("button"),M=h("Download Other"),S=f(),Y=d("div"),T=d("div"),k=h("Payment Details "),O=h(ye),E=f(),L=d("div"),C=d("table"),A=d("thead"),A.innerHTML='<tr><th scope="col" class="notranslate">Flat No.</th> \n                               <th scope="col">Name</th> \n                               <th scope="col">Payment</th> \n                               <th scope="col">Amount</th> \n                               <th scope="col">Date</th></tr>',H=f(),N=d("tbody");for(let t=0;t<Ae.length;t+=1)Ae[t].c();j=f(),W=d("tr"),P=d("th"),P.textContent="Total",U=f(),z=d("td"),F=h(we),R=f(),K=d("div"),X=d("div"),tt=h("Extra Earnings - "),et=h(xe),nt=f(),rt=d("div"),ot=d("table"),st=d("thead"),st.innerHTML='<tr><th scope="col">Sno.</th> \n                               <th scope="col">Title</th> \n                               <th scope="col">Amount</th> \n                               <th scope="col">Date</th></tr>',at=f(),it=d("tbody");for(let t=0;t<Ne.length;t+=1)Ne[t].c();ct=f(),lt=d("tr"),ut=d("th"),ut.textContent="Total",dt=f(),ht=d("td"),ft=h(Me),mt=f(),gt=d("div"),pt=h("Expenses - "),bt=h(De),$t=f(),vt=d("div"),_t=d("table"),yt=d("thead"),yt.innerHTML='<tr><th scope="col">Sno.</th> \n                               <th scope="col">Title</th> \n                               <th scope="col">Amount</th> \n                               <th scope="col">Date</th></tr>',wt=f(),xt=d("tbody");for(let t=0;t<We.length;t+=1)We[t].c();Mt=f(),Dt=d("tr"),St=d("th"),St.textContent="Total",Yt=f(),Tt=d("td"),kt=h(Se),Ot=f(),Et=d("div"),Lt=h("Savings - "),Ct=h(Ye),At=f(),Ht=d("div"),Nt=d("table"),jt=d("thead"),jt.innerHTML='<tr><th scope="col">Category</th> \n                               <th scope="col">Amount</th></tr>',Wt=f(),Pt=d("tbody"),Ut=d("tr"),zt=d("th"),zt.textContent="   Maintenance",Ft=f(),It=d("td"),Jt=h(Te),Zt=f(),qt=d("tr"),Vt=d("th"),Vt.textContent="+ Prev. Savings",Bt=f(),Qt=d("td"),Rt=h(ke),Gt=f(),Kt=d("tr"),Xt=d("th"),Xt.textContent="+ Extra Earnings",te=f(),ee=d("td"),ne=h(Oe),re=f(),oe=d("tr"),se=d("th"),se.textContent="-  Expenses",ae=f(),ie=d("td"),ce=h(Ee),le=f(),ue=d("tr"),de=d("th"),de.textContent="Total",he=f(),fe=d("td"),me=h(Le),ge=f(),pe=d("tr"),pe.innerHTML='<td colspan="2" class="fw-semibold"></td>',g(o,"class","accordion-button collapsed fw-semibold rounded-4 mb-0"),g(o,"type","button"),g(o,"data-bs-toggle","collapse"),g(o,"data-bs-target","#collapse"+t[3]),g(o,"aria-expanded","true"),g(o,"aria-controls","collapse"+t[3]),g(n,"class","accordion-header border border-info my-2 rounded-4"),g(n,"id","heading"+t[3]),g(v,"class","btn btn-sm bg-success text-white mb-3 print"),g(v,"target_div",y=t[1].key),g(x,"class","btn btn-sm bg-success text-white mb-3 print"),g(x,"target_div",D=t[1].key+"other"),g(T,"class","fs-6 fw-semibold mb-3"),g(P,"scope","row"),g(z,"colspan","4"),g(z,"class","fw-semibold"),g(C,"class","table table-hover table-bordered border-secondary border-opacity-25"),g(L,"class","table-responsive mb-3"),g(Y,"id",Q=t[1].key),g(X,"class","fs-6 fw-semibold mb-3"),g(ut,"scope","row"),g(ht,"colspan","3"),g(ht,"class","fw-semibold"),g(ot,"class","table table-hover table-bordered border-secondary border-opacity-25"),g(rt,"class","table-responsive mb-3"),g(gt,"class","fs-6 fw-semibold mb-3"),g(St,"scope","row"),g(Tt,"colspan","3"),g(Tt,"class","fw-semibold"),g(_t,"class","table table-hover table-bordered border-secondary border-opacity-25"),g(vt,"class","table-responsive mb-3"),g(Et,"class","fs-6 fw-semibold mb-3"),g(zt,"scope","row"),g(Vt,"scope","row"),g(Xt,"scope","row"),g(se,"scope","row"),g(de,"scope","row"),g(fe,"class","fw-semibold"),g(Nt,"class","table table-hover table-bordered border-secondary border-opacity-25"),g(Ht,"class","table-responsive mb-3"),g(K,"id",be=t[1].key+"other"),g($,"class","accordion-body px-0 mx-0"),g(b,"id","collapse"+t[3]),g(b,"class","accordion-collapse collapse"),g(b,"aria-labelledby","heading"+t[3]),g(b,"data-bs-parent","#accordionExample"),g(e,"class","accordion-item border-0")},m(t,r){c(t,e,r),i(e,n),i(n,o),i(o,s),i(e,a),i(e,b),i(b,$),i($,v),i(v,_),i($,w),i($,x),i(x,M),i($,S),i($,Y),i(Y,T),i(T,k),i(T,O),i(Y,E),i(Y,L),i(L,C),i(C,A),i(C,H),i(C,N);for(let t=0;t<Ae.length;t+=1)Ae[t].m(N,null);i(N,j),i(N,W),i(W,P),i(W,U),i(W,z),i(z,F),i($,R),i($,K),i(K,X),i(X,tt),i(X,et),i(K,nt),i(K,rt),i(rt,ot),i(ot,st),i(ot,at),i(ot,it);for(let t=0;t<Ne.length;t+=1)Ne[t].m(it,null);i(it,ct),i(it,lt),i(lt,ut),i(lt,dt),i(lt,ht),i(ht,ft),i(K,mt),i(K,gt),i(gt,pt),i(gt,bt),i(K,$t),i(K,vt),i(vt,_t),i(_t,yt),i(_t,wt),i(_t,xt);for(let t=0;t<We.length;t+=1)We[t].m(xt,null);i(xt,Mt),i(xt,Dt),i(Dt,St),i(Dt,Yt),i(Dt,Tt),i(Tt,kt),i(K,Ot),i(K,Et),i(Et,Lt),i(Et,Ct),i(K,At),i(K,Ht),i(Ht,Nt),i(Nt,jt),i(Nt,Wt),i(Nt,Pt),i(Pt,Ut),i(Ut,zt),i(Ut,Ft),i(Ut,It),i(It,Jt),i(Pt,Zt),i(Pt,qt),i(qt,Vt),i(qt,Bt),i(qt,Qt),i(Qt,Rt),i(Pt,Gt),i(Pt,Kt),i(Kt,Xt),i(Kt,te),i(Kt,ee),i(ee,ne),i(Pt,re),i(Pt,oe),i(oe,se),i(oe,ae),i(oe,ie),i(ie,ce),i(Pt,le),i(Pt,ue),i(ue,de),i(ue,he),i(ue,fe),i(fe,me),i(Pt,ge),i(Pt,pe),$e||(ve=[m(v,"click",G),m(x,"click",G)],$e=!0)},p(t,e){if(1&e&&_e!==(_e=t[1].month_name+"")&&p(s,_e),1&e&&y!==(y=t[1].key)&&g(v,"target_div",y),1&e&&D!==(D=t[1].key+"other")&&g(x,"target_div",D),1&e&&ye!==(ye=t[1].month_name+"")&&p(O,ye),1&e){let n;for(Ce=t[1].maintenance,n=0;n<Ce.length;n+=1){const r=Z(t,Ce,n);Ae[n]?Ae[n].p(r,e):(Ae[n]=q(r),Ae[n].c(),Ae[n].m(N,j))}for(;n<Ae.length;n+=1)Ae[n].d(1);Ae.length=Ce.length}if(1&e&&we!==(we=t[1].savings.maintenance_total+"")&&p(F,we),1&e&&Q!==(Q=t[1].key)&&g(Y,"id",Q),1&e&&xe!==(xe=t[1].month_name+"")&&p(et,xe),1&e){let n;for(He=t[1].earnings,n=0;n<He.length;n+=1){const r=J(t,He,n);Ne[n]?Ne[n].p(r,e):(Ne[n]=V(r),Ne[n].c(),Ne[n].m(it,ct))}for(;n<Ne.length;n+=1)Ne[n].d(1);Ne.length=He.length}if(1&e&&Me!==(Me=t[1].savings.earnings_total+"")&&p(ft,Me),1&e&&De!==(De=t[1].month_name+"")&&p(bt,De),1&e){let n;for(je=t[1].expenses,n=0;n<je.length;n+=1){const r=I(t,je,n);We[n]?We[n].p(r,e):(We[n]=B(r),We[n].c(),We[n].m(xt,Mt))}for(;n<We.length;n+=1)We[n].d(1);We.length=je.length}1&e&&Se!==(Se=t[1].savings.expenses_total+"")&&p(kt,Se),1&e&&Ye!==(Ye=t[1].month_name+"")&&p(Ct,Ye),1&e&&Te!==(Te=t[1].savings.maintenance_total+"")&&p(Jt,Te),1&e&&ke!==(ke=t[1].savings.previous_month_total+"")&&p(Rt,ke),1&e&&Oe!==(Oe=t[1].savings.earnings_total+"")&&p(ne,Oe),1&e&&Ee!==(Ee=t[1].savings.expenses_total+"")&&p(ce,Ee),1&e&&Le!==(Le=t[1].savings.total+"")&&p(me,Le),1&e&&be!==(be=t[1].key+"other")&&g(K,"id",be)},d(t){t&&l(e),u(Ae,t),u(Ne,t),u(We,t),$e=!1,r(ve)}}}function R(e){let n,r,o,s,a,h,m,p=e[0],b=[];for(let t=0;t<p.length;t+=1)b[t]=Q(F(e,p,t));return{c(){n=d("main"),r=d("div"),r.innerHTML='<div class="text-end mt-2"><div id="google_translate_element"></div></div> \n        <div class="mb-3 text-center mt-2"><div class="fs-6 fw-semibold notranslate">नोंद  - भरलेला मेन्टेनन्स  हा मागील महिन्यासाठी गृहीत धरला जातो .</div></div>',o=f(),s=d("div"),a=d("div");for(let t=0;t<b.length;t+=1)b[t].c();h=f(),m=d("hr"),g(r,"class","container"),g(m,"class","text-white m-5"),g(a,"class","accordion accordion-flush"),g(a,"id","accordionExample"),g(s,"class","container mt-4 px-2")},m(t,e){c(t,n,e),i(n,r),i(n,o),i(n,s),i(s,a);for(let t=0;t<b.length;t+=1)b[t].m(a,null);i(a,h),i(a,m)},p(t,[e]){if(1&e){let n;for(p=t[0],n=0;n<p.length;n+=1){const r=F(t,p,n);b[n]?b[n].p(r,e):(b[n]=Q(r),b[n].c(),b[n].m(a,h))}for(;n<b.length;n+=1)b[n].d(1);b.length=p.length}},i:t,o:t,d(t){t&&l(n),u(b,t)}}}function G(t){var e=t.currentTarget.getAttribute("target_div");html2canvas(document.querySelector(`#${e}`),{scale:3}).then((t=>{var n=document.createElement("a");n.href=t.toDataURL("image/jpeg",1),n.download=`${e}.jpeg`,n.click()}))}function K(t,e,n){let r;var o,s;return o=z,s=t=>n(0,r=t),t.$$.on_destroy.push(a(o,s)),v((async()=>{fetch("https://sea-turtle-app-c25ch.ondigitalocean.app/").then((t=>t.json())).then((t=>{U.set(t),new google.translate.TranslateElement({pageLanguage:"",includedLanguages:"en,mr,hi,kn"},"google_translate_element")})).catch((t=>(console.log("error"),[])))})),[r]}return new class extends A{constructor(t){super(),C(this,t,K,R,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
