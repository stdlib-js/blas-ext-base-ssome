"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var o=v(function(A,q){
function l(e,r,i,a,s){var t,u,n;if(e<=0)return!1;if(a===0)return i[s]?r<=e:r<=0;for(u=s,t=0,n=0;n<e;n++){if(i[u]&&(t+=1,t>=r))return!0;u+=a}return!1}q.exports=l
});var m=v(function(B,c){
var j=require('@stdlib/strided-base-stride2offset/dist'),R=o();function _(e,r,i,a){var s=j(e,a);return R(e,r,i,a,s)}c.exports=_
});var y=v(function(C,x){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=m(),O=o();E(p,"ndarray",O);x.exports=p
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=y(),f,d=g(b(__dirname,"./native.js"));h(d)?f=w:f=d;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
