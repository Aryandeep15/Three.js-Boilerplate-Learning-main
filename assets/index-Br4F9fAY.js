var Sl=Object.defineProperty;var nl=(dg,Yg,AC)=>Yg in dg?Sl(dg,Yg,{enumerable:!0,configurable:!0,writable:!0,value:AC}):dg[Yg]=AC;var tA=(dg,Yg,AC)=>(nl(dg,typeof Yg!="symbol"?Yg+"":Yg,AC),AC);(async()=>{(function(){const Q=document.createElement("link").relList;if(Q&&Q.supports&&Q.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))I(g);new MutationObserver(g=>{for(const C of g)if(C.type==="childList")for(const B of C.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&I(B)}).observe(document,{childList:!0,subtree:!0});function A(g){const C={};return g.integrity&&(C.integrity=g.integrity),g.referrerPolicy&&(C.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?C.credentials="include":g.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function I(g){if(g.ep)return;g.ep=!0;const C=A(g);fetch(g.href,C)}})();const dg="163",Yg=0,AC=1,Gs=2,po=1,ls=2,Lg=3,Hg=0,$I=1,tg=2,IC=0,bC=1,ME=2,qo=3,Yo=4,ks=5,cC=100,ys=101,Ms=102,Us=103,Ks=104,Ns=200,Js=201,Fs=202,Rs=203,UE=204,KE=205,ps=206,qs=207,ds=208,Ys=209,Ls=210,Hs=211,us=212,ms=213,fs=214,Ts=0,xs=1,bs=2,cQ=3,Os=4,_s=5,vs=6,Zs=7,NE=0,Ws=1,Ps=2,gC=0,js=1,Vs=2,Xs=3,zs=4,$s=5,AD=6,ID=7,Lo="attached",gD="detached",Ho=300,OC=301,_C=302,GQ=303,JE=304,lQ=306,GC=1e3,Gg=1001,kQ=1002,HI=1003,uo=1004,RB=1005,qI=1006,yQ=1007,lg=1008,kg=1009,CD=1010,BD=1011,mo=1012,fo=1013,vC=1014,Ag=1015,CC=1016,To=1017,xo=1018,pB=1020,QD=35902,ED=1021,iD=1022,ag=1023,oD=1024,eD=1025,ZC=1026,qB=1027,bo=1028,Oo=1029,tD=1030,_o=1031,vo=1033,FE=33776,RE=33777,pE=33778,qE=33779,Zo=35840,Wo=35841,Po=35842,jo=35843,Vo=36196,Xo=37492,zo=37496,$o=37808,Ae=37809,Ie=37810,ge=37811,Ce=37812,Be=37813,Qe=37814,Ee=37815,ie=37816,oe=37817,ee=37818,te=37819,ae=37820,se=37821,dE=36492,De=36494,he=36495,aD=36283,re=36284,Se=36285,ne=36286,sD=2200,DD=2201,hD=2202,dB=2300,WC=2301,YE=2302,PC=2400,jC=2401,MQ=2402,LE=2500,we=2501,rD=0,ce=1,HE=2,SD=3200,nD=3201,uE=0,wD=1,BC="",uI="srgb",MI="srgb-linear",mE="display-p3",UQ="display-p3-linear",KQ="linear",tI="srgb",NQ="rec709",JQ="p3",VC=7680,Ge=519,cD=512,GD=513,lD=514,le=515,kD=516,yD=517,MD=518,UD=519,fE=35044,ke="300 es",ug=2e3,FQ=2001;class lC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const g=this._listeners[A];if(g!==void 0){const C=g.indexOf(I);C!==-1&&g.splice(C,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const I=this._listeners[A.type];if(I!==void 0){A.target=this;const g=I.slice(0);for(let C=0,B=g.length;C<B;C++)g[C].call(this,A);A.target=null}}}const xI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ye=1234567;const YB=Math.PI/180,XC=180/Math.PI;function sg(){const Q=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(xI[Q&255]+xI[Q>>8&255]+xI[Q>>16&255]+xI[Q>>24&255]+"-"+xI[A&255]+xI[A>>8&255]+"-"+xI[A>>16&15|64]+xI[A>>24&255]+"-"+xI[I&63|128]+xI[I>>8&255]+"-"+xI[I>>16&255]+xI[I>>24&255]+xI[g&255]+xI[g>>8&255]+xI[g>>16&255]+xI[g>>24&255]).toLowerCase()}function mI(Q,A,I){return Math.max(A,Math.min(I,Q))}function TE(Q,A){return(Q%A+A)%A}function KD(Q,A,I,g,C){return g+(Q-A)*(C-g)/(I-A)}function ND(Q,A,I){return Q!==A?(I-Q)/(A-Q):0}function LB(Q,A,I){return(1-I)*Q+I*A}function JD(Q,A,I,g){return LB(Q,A,1-Math.exp(-I*g))}function FD(Q,A=1){return A-Math.abs(TE(Q,A*2)-A)}function RD(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*(3-2*Q))}function pD(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*Q*(Q*(Q*6-15)+10))}function qD(Q,A){return Q+Math.floor(Math.random()*(A-Q+1))}function dD(Q,A){return Q+Math.random()*(A-Q)}function YD(Q){return Q*(.5-Math.random())}function LD(Q){Q!==void 0&&(ye=Q);let A=ye+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function HD(Q){return Q*YB}function uD(Q){return Q*XC}function mD(Q){return(Q&Q-1)===0&&Q!==0}function fD(Q){return Math.pow(2,Math.ceil(Math.log(Q)/Math.LN2))}function TD(Q){return Math.pow(2,Math.floor(Math.log(Q)/Math.LN2))}function xD(Q,A,I,g,C){const B=Math.cos,E=Math.sin,i=B(I/2),o=E(I/2),e=B((A+g)/2),t=E((A+g)/2),a=B((A-g)/2),s=E((A-g)/2),D=B((g-A)/2),n=E((g-A)/2);switch(C){case"XYX":Q.set(i*t,o*a,o*s,i*e);break;case"YZY":Q.set(o*s,i*t,o*a,i*e);break;case"ZXZ":Q.set(o*a,o*s,i*t,i*e);break;case"XZX":Q.set(i*t,o*n,o*D,i*e);break;case"YXY":Q.set(o*D,i*t,o*n,i*e);break;case"ZYZ":Q.set(o*n,o*D,i*t,i*e);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function Dg(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint32Array:return Q/4294967295;case Uint16Array:return Q/65535;case Uint8Array:return Q/255;case Int32Array:return Math.max(Q/2147483647,-1);case Int16Array:return Math.max(Q/32767,-1);case Int8Array:return Math.max(Q/127,-1);default:throw new Error("Invalid component type.")}}function II(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint32Array:return Math.round(Q*4294967295);case Uint16Array:return Math.round(Q*65535);case Uint8Array:return Math.round(Q*255);case Int32Array:return Math.round(Q*2147483647);case Int16Array:return Math.round(Q*32767);case Int8Array:return Math.round(Q*127);default:throw new Error("Invalid component type.")}}const bD={DEG2RAD:YB,RAD2DEG:XC,generateUUID:sg,clamp:mI,euclideanModulo:TE,mapLinear:KD,inverseLerp:ND,lerp:LB,damp:JD,pingpong:FD,smoothstep:RD,smootherstep:pD,randInt:qD,randFloat:dD,randFloatSpread:YD,seededRandom:LD,degToRad:HD,radToDeg:uD,isPowerOfTwo:mD,ceilPowerOfTwo:fD,floorPowerOfTwo:TD,setQuaternionFromProperEuler:xD,normalize:II,denormalize:Dg};class KA{constructor(A=0,I=0){KA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(mI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),B=this.x-A.x,E=this.y-A.y;return this.x=B*g-E*C+A.x,this.y=B*C+E*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class YA{constructor(A,I,g,C,B,E,i,o,e){YA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,C,B,E,i,o,e)}set(A,I,g,C,B,E,i,o,e){const t=this.elements;return t[0]=A,t[1]=C,t[2]=i,t[3]=I,t[4]=B,t[5]=o,t[6]=g,t[7]=E,t[8]=e,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,E=g[0],i=g[3],o=g[6],e=g[1],t=g[4],a=g[7],s=g[2],D=g[5],n=g[8],w=C[0],S=C[3],h=C[6],k=C[1],c=C[4],U=C[7],d=C[2],J=C[5],K=C[8];return B[0]=E*w+i*k+o*d,B[3]=E*S+i*c+o*J,B[6]=E*h+i*U+o*K,B[1]=e*w+t*k+a*d,B[4]=e*S+t*c+a*J,B[7]=e*h+t*U+a*K,B[2]=s*w+D*k+n*d,B[5]=s*S+D*c+n*J,B[8]=s*h+D*U+n*K,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8];return I*E*t-I*i*e-g*B*t+g*i*o+C*B*e-C*E*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=t*E-i*e,s=i*o-t*B,D=e*B-E*o,n=I*a+g*s+C*D;if(n===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/n;return A[0]=a*w,A[1]=(C*e-t*g)*w,A[2]=(i*g-C*E)*w,A[3]=s*w,A[4]=(t*I-C*o)*w,A[5]=(C*B-i*I)*w,A[6]=D*w,A[7]=(g*o-e*I)*w,A[8]=(E*I-g*B)*w,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,B,E,i){const o=Math.cos(B),e=Math.sin(B);return this.set(g*o,g*e,-g*(o*E+e*i)+E+A,-C*e,C*o,-C*(-e*E+o*i)+i+I,0,0,1),this}scale(A,I){return this.premultiply(xE.makeScale(A,I)),this}rotate(A){return this.premultiply(xE.makeRotation(-A)),this}translate(A,I){return this.premultiply(xE.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const xE=new YA;function Me(Q){for(let A=Q.length-1;A>=0;--A)if(Q[A]>=65535)return!0;return!1}function HB(Q){return document.createElementNS("http://www.w3.org/1999/xhtml",Q)}function OD(){const Q=HB("canvas");return Q.style.display="block",Q}const Ue={};function Ke(Q){Q in Ue||(Ue[Q]=!0,console.warn(Q))}const Ne=new YA().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Je=new YA().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),RQ={[MI]:{transfer:KQ,primaries:NQ,toReference:Q=>Q,fromReference:Q=>Q},[uI]:{transfer:tI,primaries:NQ,toReference:Q=>Q.convertSRGBToLinear(),fromReference:Q=>Q.convertLinearToSRGB()},[UQ]:{transfer:KQ,primaries:JQ,toReference:Q=>Q.applyMatrix3(Je),fromReference:Q=>Q.applyMatrix3(Ne)},[mE]:{transfer:tI,primaries:JQ,toReference:Q=>Q.convertSRGBToLinear().applyMatrix3(Je),fromReference:Q=>Q.applyMatrix3(Ne).convertLinearToSRGB()}},_D=new Set([MI,UQ]),XA={enabled:!0,_workingColorSpace:MI,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(Q){if(!_D.has(Q))throw new Error(`Unsupported working color space, "${Q}".`);this._workingColorSpace=Q},convert:function(Q,A,I){if(this.enabled===!1||A===I||!A||!I)return Q;const g=RQ[A].toReference,C=RQ[I].fromReference;return C(g(Q))},fromWorkingColorSpace:function(Q,A){return this.convert(Q,this._workingColorSpace,A)},toWorkingColorSpace:function(Q,A){return this.convert(Q,A,this._workingColorSpace)},getPrimaries:function(Q){return RQ[Q].primaries},getTransfer:function(Q){return Q===BC?KQ:RQ[Q].transfer}};function zC(Q){return Q<.04045?Q*.0773993808:Math.pow(Q*.9478672986+.0521327014,2.4)}function bE(Q){return Q<.0031308?Q*12.92:1.055*Math.pow(Q,.41666)-.055}let $C;class vD{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{$C===void 0&&($C=HB("canvas")),$C.width=A.width,$C.height=A.height;const g=$C.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=$C}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=HB("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),B=C.data;for(let E=0;E<B.length;E++)B[E]=zC(B[E]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(zC(I[g]/255)*255):I[g]=zC(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let ZD=0;class Fe{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZD++}),this.uuid=sg(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let B;if(Array.isArray(C)){B=[];for(let E=0,i=C.length;E<i;E++)C[E].isDataTexture?B.push(OE(C[E].image)):B.push(OE(C[E]))}else B=OE(C);g.url=B}return I||(A.images[this.uuid]=g),g}}function OE(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap?vD.getDataURL(Q):Q.data?{data:Array.from(Q.data),width:Q.width,height:Q.height,type:Q.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WD=0;class UI extends lC{constructor(A=UI.DEFAULT_IMAGE,I=UI.DEFAULT_MAPPING,g=Gg,C=Gg,B=qI,E=lg,i=ag,o=kg,e=UI.DEFAULT_ANISOTROPY,t=BC){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WD++}),this.uuid=sg(),this.name="",this.source=new Fe(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=B,this.minFilter=E,this.anisotropy=e,this.format=i,this.internalFormat=null,this.type=o,this.offset=new KA(0,0),this.repeat=new KA(1,1),this.center=new KA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new YA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=t,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==Ho)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case GC:A.x=A.x-Math.floor(A.x);break;case Gg:A.x=A.x<0?0:1;break;case kQ:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case GC:A.y=A.y-Math.floor(A.y);break;case Gg:A.y=A.y<0?0:1;break;case kQ:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(A){A===!0&&this.pmremVersion++}}UI.DEFAULT_IMAGE=null,UI.DEFAULT_MAPPING=Ho,UI.DEFAULT_ANISOTROPY=1;class CI{constructor(A=0,I=0,g=0,C=1){CI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=this.w,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*C+E[12]*B,this.y=E[1]*I+E[5]*g+E[9]*C+E[13]*B,this.z=E[2]*I+E[6]*g+E[10]*C+E[14]*B,this.w=E[3]*I+E[7]*g+E[11]*C+E[15]*B,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,B;const E=A.elements,i=E[0],o=E[4],e=E[8],t=E[1],a=E[5],s=E[9],D=E[2],n=E[6],w=E[10];if(Math.abs(o-t)<.01&&Math.abs(e-D)<.01&&Math.abs(s-n)<.01){if(Math.abs(o+t)<.1&&Math.abs(e+D)<.1&&Math.abs(s+n)<.1&&Math.abs(i+a+w-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const h=(i+1)/2,k=(a+1)/2,c=(w+1)/2,U=(o+t)/4,d=(e+D)/4,J=(s+n)/4;return h>k&&h>c?h<.01?(g=0,C=.707106781,B=.707106781):(g=Math.sqrt(h),C=U/g,B=d/g):k>c?k<.01?(g=.707106781,C=0,B=.707106781):(C=Math.sqrt(k),g=U/C,B=J/C):c<.01?(g=.707106781,C=.707106781,B=0):(B=Math.sqrt(c),g=d/B,C=J/B),this.set(g,C,B,I),this}let S=Math.sqrt((n-s)*(n-s)+(e-D)*(e-D)+(t-o)*(t-o));return Math.abs(S)<.001&&(S=1),this.x=(n-s)/S,this.y=(e-D)/S,this.z=(t-o)/S,this.w=Math.acos((i+a+w-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PD extends lC{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new CI(0,0,A,I),this.scissorTest=!1,this.viewport=new CI(0,0,A,I);const C={width:A,height:I,depth:1};g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qI,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},g);const B=new UI(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace);B.flipY=!1,B.generateMipmaps=g.generateMipmaps,B.internalFormat=g.internalFormat,this.textures=[];const E=g.count;for(let i=0;i<E;i++)this.textures[i]=B.clone(),this.textures[i].isRenderTargetTexture=!0;this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}get texture(){return this.textures[0]}set texture(A){this.textures[0]=A}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let C=0,B=this.textures.length;C<B;C++)this.textures[C].image.width=A,this.textures[C].image.height=I,this.textures[C].image.depth=g;this.dispose()}this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.textures.length=0;for(let g=0,C=A.textures.length;g<C;g++)this.textures[g]=A.textures[g].clone(),this.textures[g].isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new Fe(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kC extends PD{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class Re extends UI{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=HI,this.minFilter=HI,this.wrapR=Gg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jD extends UI{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=HI,this.minFilter=HI,this.wrapR=Gg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dI{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,B,E,i){let o=g[C+0],e=g[C+1],t=g[C+2],a=g[C+3];const s=B[E+0],D=B[E+1],n=B[E+2],w=B[E+3];if(i===0){A[I+0]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a;return}if(i===1){A[I+0]=s,A[I+1]=D,A[I+2]=n,A[I+3]=w;return}if(a!==w||o!==s||e!==D||t!==n){let S=1-i;const h=o*s+e*D+t*n+a*w,k=h>=0?1:-1,c=1-h*h;if(c>Number.EPSILON){const d=Math.sqrt(c),J=Math.atan2(d,h*k);S=Math.sin(S*J)/d,i=Math.sin(i*J)/d}const U=i*k;if(o=o*S+s*U,e=e*S+D*U,t=t*S+n*U,a=a*S+w*U,S===1-i){const d=1/Math.sqrt(o*o+e*e+t*t+a*a);o*=d,e*=d,t*=d,a*=d}}A[I]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,B,E){const i=g[C],o=g[C+1],e=g[C+2],t=g[C+3],a=B[E],s=B[E+1],D=B[E+2],n=B[E+3];return A[I]=i*n+t*a+o*D-e*s,A[I+1]=o*n+t*s+e*a-i*D,A[I+2]=e*n+t*D+i*s-o*a,A[I+3]=t*n-i*a-o*s-e*D,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,C=A._y,B=A._z,E=A._order,i=Math.cos,o=Math.sin,e=i(g/2),t=i(C/2),a=i(B/2),s=o(g/2),D=o(C/2),n=o(B/2);switch(E){case"XYZ":this._x=s*t*a+e*D*n,this._y=e*D*a-s*t*n,this._z=e*t*n+s*D*a,this._w=e*t*a-s*D*n;break;case"YXZ":this._x=s*t*a+e*D*n,this._y=e*D*a-s*t*n,this._z=e*t*n-s*D*a,this._w=e*t*a+s*D*n;break;case"ZXY":this._x=s*t*a-e*D*n,this._y=e*D*a+s*t*n,this._z=e*t*n+s*D*a,this._w=e*t*a-s*D*n;break;case"ZYX":this._x=s*t*a-e*D*n,this._y=e*D*a+s*t*n,this._z=e*t*n-s*D*a,this._w=e*t*a+s*D*n;break;case"YZX":this._x=s*t*a+e*D*n,this._y=e*D*a+s*t*n,this._z=e*t*n-s*D*a,this._w=e*t*a-s*D*n;break;case"XZY":this._x=s*t*a-e*D*n,this._y=e*D*a-s*t*n,this._z=e*t*n+s*D*a,this._w=e*t*a+s*D*n;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],B=I[8],E=I[1],i=I[5],o=I[9],e=I[2],t=I[6],a=I[10],s=g+i+a;if(s>0){const D=.5/Math.sqrt(s+1);this._w=.25/D,this._x=(t-o)*D,this._y=(B-e)*D,this._z=(E-C)*D}else if(g>i&&g>a){const D=2*Math.sqrt(1+g-i-a);this._w=(t-o)/D,this._x=.25*D,this._y=(C+E)/D,this._z=(B+e)/D}else if(i>a){const D=2*Math.sqrt(1+i-g-a);this._w=(B-e)/D,this._x=(C+E)/D,this._y=.25*D,this._z=(o+t)/D}else{const D=2*Math.sqrt(1+a-g-i);this._w=(E-C)/D,this._x=(B+e)/D,this._y=(o+t)/D,this._z=.25*D}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(mI(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,B=A._z,E=A._w,i=I._x,o=I._y,e=I._z,t=I._w;return this._x=g*t+E*i+C*e-B*o,this._y=C*t+E*o+B*i-g*e,this._z=B*t+E*e+g*o-C*i,this._w=E*t-g*i-C*o-B*e,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,B=this._z,E=this._w;let i=E*A._w+g*A._x+C*A._y+B*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=g,this._y=C,this._z=B,this;const o=1-i*i;if(o<=Number.EPSILON){const D=1-I;return this._w=D*E+I*this._w,this._x=D*g+I*this._x,this._y=D*C+I*this._y,this._z=D*B+I*this._z,this.normalize(),this}const e=Math.sqrt(o),t=Math.atan2(e,i),a=Math.sin((1-I)*t)/e,s=Math.sin(I*t)/e;return this._w=E*a+this._w*s,this._x=g*a+this._x*s,this._y=C*a+this._y*s,this._z=B*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=2*Math.PI*Math.random(),I=2*Math.PI*Math.random(),g=Math.random(),C=Math.sqrt(1-g),B=Math.sqrt(g);return this.set(C*Math.sin(A),C*Math.cos(A),B*Math.sin(I),B*Math.cos(I))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(A=0,I=0,g=0){q.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(pe.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(pe.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6]*C,this.y=B[1]*I+B[4]*g+B[7]*C,this.z=B[2]*I+B[5]*g+B[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=A.elements,E=1/(B[3]*I+B[7]*g+B[11]*C+B[15]);return this.x=(B[0]*I+B[4]*g+B[8]*C+B[12])*E,this.y=(B[1]*I+B[5]*g+B[9]*C+B[13])*E,this.z=(B[2]*I+B[6]*g+B[10]*C+B[14])*E,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,B=A.x,E=A.y,i=A.z,o=A.w,e=2*(E*C-i*g),t=2*(i*I-B*C),a=2*(B*g-E*I);return this.x=I+o*e+E*a-i*t,this.y=g+o*t+i*e-B*a,this.z=C+o*a+B*t-E*e,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[4]*g+B[8]*C,this.y=B[1]*I+B[5]*g+B[9]*C,this.z=B[2]*I+B[6]*g+B[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,B=A.z,E=I.x,i=I.y,o=I.z;return this.x=C*o-B*i,this.y=B*E-g*o,this.z=g*i-C*E,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return _E.copy(this).projectOnVector(A),this.sub(_E)}reflect(A){return this.sub(_E.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(mI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=Math.random()*Math.PI*2,I=Math.random()*2-1,g=Math.sqrt(1-I*I);return this.x=g*Math.cos(A),this.y=I,this.z=g*Math.sin(A),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _E=new q,pe=new dI;class mg{constructor(A=new q(1/0,1/0,1/0),I=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(hg.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(hg.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=hg.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const B=g.getAttribute("position");if(I===!0&&B!==void 0&&A.isInstancedMesh!==!0)for(let E=0,i=B.count;E<i;E++)A.isMesh===!0?A.getVertexPosition(E,hg):hg.fromBufferAttribute(B,E),hg.applyMatrix4(A.matrixWorld),this.expandByPoint(hg);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),pQ.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),pQ.copy(g.boundingBox)),pQ.applyMatrix4(A.matrixWorld),this.union(pQ)}const C=A.children;for(let B=0,E=C.length;B<E;B++)this.expandByObject(C[B],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,hg),hg.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(uB),qQ.subVectors(this.max,uB),AB.subVectors(A.a,uB),IB.subVectors(A.b,uB),gB.subVectors(A.c,uB),QC.subVectors(IB,AB),EC.subVectors(gB,IB),yC.subVectors(AB,gB);let I=[0,-QC.z,QC.y,0,-EC.z,EC.y,0,-yC.z,yC.y,QC.z,0,-QC.x,EC.z,0,-EC.x,yC.z,0,-yC.x,-QC.y,QC.x,0,-EC.y,EC.x,0,-yC.y,yC.x,0];return!vE(I,AB,IB,gB,qQ)||(I=[1,0,0,0,1,0,0,0,1],!vE(I,AB,IB,gB,qQ))?!1:(dQ.crossVectors(QC,EC),I=[dQ.x,dQ.y,dQ.z],vE(I,AB,IB,gB,qQ))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,hg).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(hg).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(fg[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),fg[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),fg[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),fg[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),fg[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),fg[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),fg[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),fg[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(fg),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const fg=[new q,new q,new q,new q,new q,new q,new q,new q],hg=new q,pQ=new mg,AB=new q,IB=new q,gB=new q,QC=new q,EC=new q,yC=new q,uB=new q,qQ=new q,dQ=new q,MC=new q;function vE(Q,A,I,g,C){for(let B=0,E=Q.length-3;B<=E;B+=3){MC.fromArray(Q,B);const i=C.x*Math.abs(MC.x)+C.y*Math.abs(MC.y)+C.z*Math.abs(MC.z),o=A.dot(MC),e=I.dot(MC),t=g.dot(MC);if(Math.max(-Math.max(o,e,t),Math.min(o,e,t))>i)return!1}return!0}const VD=new mg,mB=new q,ZE=new q;class yg{constructor(A=new q,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):VD.setFromPoints(A).getCenter(g);let C=0;for(let B=0,E=A.length;B<E;B++)C=Math.max(C,g.distanceToSquared(A[B]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;mB.subVectors(A,this.center);const I=mB.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(mB,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(ZE.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(mB.copy(A.center).add(ZE)),this.expandByPoint(mB.copy(A.center).sub(ZE))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tg=new q,WE=new q,YQ=new q,iC=new q,PE=new q,LQ=new q,jE=new q;class HQ{constructor(A=new q,I=new q(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,Tg)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=Tg.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(Tg.copy(this.origin).addScaledVector(this.direction,I),Tg.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){WE.copy(A).add(I).multiplyScalar(.5),YQ.copy(I).sub(A).normalize(),iC.copy(this.origin).sub(WE);const B=A.distanceTo(I)*.5,E=-this.direction.dot(YQ),i=iC.dot(this.direction),o=-iC.dot(YQ),e=iC.lengthSq(),t=Math.abs(1-E*E);let a,s,D,n;if(t>0)if(a=E*o-i,s=E*i-o,n=B*t,a>=0)if(s>=-n)if(s<=n){const w=1/t;a*=w,s*=w,D=a*(a+E*s+2*i)+s*(E*a+s+2*o)+e}else s=B,a=Math.max(0,-(E*s+i)),D=-a*a+s*(s+2*o)+e;else s=-B,a=Math.max(0,-(E*s+i)),D=-a*a+s*(s+2*o)+e;else s<=-n?(a=Math.max(0,-(-E*B+i)),s=a>0?-B:Math.min(Math.max(-B,-o),B),D=-a*a+s*(s+2*o)+e):s<=n?(a=0,s=Math.min(Math.max(-B,-o),B),D=s*(s+2*o)+e):(a=Math.max(0,-(E*B+i)),s=a>0?B:Math.min(Math.max(-B,-o),B),D=-a*a+s*(s+2*o)+e);else s=E>0?-B:B,a=Math.max(0,-(E*s+i)),D=-a*a+s*(s+2*o)+e;return g&&g.copy(this.origin).addScaledVector(this.direction,a),C&&C.copy(WE).addScaledVector(YQ,s),D}intersectSphere(A,I){Tg.subVectors(A.center,this.origin);const g=Tg.dot(this.direction),C=Tg.dot(Tg)-g*g,B=A.radius*A.radius;if(C>B)return null;const E=Math.sqrt(B-C),i=g-E,o=g+E;return o<0?null:i<0?this.at(o,I):this.at(i,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,B,E,i,o;const e=1/this.direction.x,t=1/this.direction.y,a=1/this.direction.z,s=this.origin;return e>=0?(g=(A.min.x-s.x)*e,C=(A.max.x-s.x)*e):(g=(A.max.x-s.x)*e,C=(A.min.x-s.x)*e),t>=0?(B=(A.min.y-s.y)*t,E=(A.max.y-s.y)*t):(B=(A.max.y-s.y)*t,E=(A.min.y-s.y)*t),g>E||B>C||((B>g||isNaN(g))&&(g=B),(E<C||isNaN(C))&&(C=E),a>=0?(i=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(i=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||i>C)||((i>g||g!==g)&&(g=i),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,Tg)!==null}intersectTriangle(A,I,g,C,B){PE.subVectors(I,A),LQ.subVectors(g,A),jE.crossVectors(PE,LQ);let E=this.direction.dot(jE),i;if(E>0){if(C)return null;i=1}else if(E<0)i=-1,E=-E;else return null;iC.subVectors(this.origin,A);const o=i*this.direction.dot(LQ.crossVectors(iC,LQ));if(o<0)return null;const e=i*this.direction.dot(PE.cross(iC));if(e<0||o+e>E)return null;const t=-i*iC.dot(jE);return t<0?null:this.at(t/E,B)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dA{constructor(A,I,g,C,B,E,i,o,e,t,a,s,D,n,w,S){dA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,C,B,E,i,o,e,t,a,s,D,n,w,S)}set(A,I,g,C,B,E,i,o,e,t,a,s,D,n,w,S){const h=this.elements;return h[0]=A,h[4]=I,h[8]=g,h[12]=C,h[1]=B,h[5]=E,h[9]=i,h[13]=o,h[2]=e,h[6]=t,h[10]=a,h[14]=s,h[3]=D,h[7]=n,h[11]=w,h[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dA().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/CB.setFromMatrixColumn(A,0).length(),B=1/CB.setFromMatrixColumn(A,1).length(),E=1/CB.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*B,I[5]=g[5]*B,I[6]=g[6]*B,I[7]=0,I[8]=g[8]*E,I[9]=g[9]*E,I[10]=g[10]*E,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,B=A.z,E=Math.cos(g),i=Math.sin(g),o=Math.cos(C),e=Math.sin(C),t=Math.cos(B),a=Math.sin(B);if(A.order==="XYZ"){const s=E*t,D=E*a,n=i*t,w=i*a;I[0]=o*t,I[4]=-o*a,I[8]=e,I[1]=D+n*e,I[5]=s-w*e,I[9]=-i*o,I[2]=w-s*e,I[6]=n+D*e,I[10]=E*o}else if(A.order==="YXZ"){const s=o*t,D=o*a,n=e*t,w=e*a;I[0]=s+w*i,I[4]=n*i-D,I[8]=E*e,I[1]=E*a,I[5]=E*t,I[9]=-i,I[2]=D*i-n,I[6]=w+s*i,I[10]=E*o}else if(A.order==="ZXY"){const s=o*t,D=o*a,n=e*t,w=e*a;I[0]=s-w*i,I[4]=-E*a,I[8]=n+D*i,I[1]=D+n*i,I[5]=E*t,I[9]=w-s*i,I[2]=-E*e,I[6]=i,I[10]=E*o}else if(A.order==="ZYX"){const s=E*t,D=E*a,n=i*t,w=i*a;I[0]=o*t,I[4]=n*e-D,I[8]=s*e+w,I[1]=o*a,I[5]=w*e+s,I[9]=D*e-n,I[2]=-e,I[6]=i*o,I[10]=E*o}else if(A.order==="YZX"){const s=E*o,D=E*e,n=i*o,w=i*e;I[0]=o*t,I[4]=w-s*a,I[8]=n*a+D,I[1]=a,I[5]=E*t,I[9]=-i*t,I[2]=-e*t,I[6]=D*a+n,I[10]=s-w*a}else if(A.order==="XZY"){const s=E*o,D=E*e,n=i*o,w=i*e;I[0]=o*t,I[4]=-a,I[8]=e*t,I[1]=s*a+w,I[5]=E*t,I[9]=D*a-n,I[2]=n*a-D,I[6]=i*t,I[10]=w*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(XD,A,zD)}lookAt(A,I,g){const C=this.elements;return Ig.subVectors(A,I),Ig.lengthSq()===0&&(Ig.z=1),Ig.normalize(),oC.crossVectors(g,Ig),oC.lengthSq()===0&&(Math.abs(g.z)===1?Ig.x+=1e-4:Ig.z+=1e-4,Ig.normalize(),oC.crossVectors(g,Ig)),oC.normalize(),uQ.crossVectors(Ig,oC),C[0]=oC.x,C[4]=uQ.x,C[8]=Ig.x,C[1]=oC.y,C[5]=uQ.y,C[9]=Ig.y,C[2]=oC.z,C[6]=uQ.z,C[10]=Ig.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,E=g[0],i=g[4],o=g[8],e=g[12],t=g[1],a=g[5],s=g[9],D=g[13],n=g[2],w=g[6],S=g[10],h=g[14],k=g[3],c=g[7],U=g[11],d=g[15],J=C[0],K=C[4],H=C[8],y=C[12],G=C[1],m=C[5],x=C[9],p=C[13],v=C[2],W=C[6],j=C[10],gA=C[14],Z=C[3],z=C[7],BA=C[11],FA=C[15];return B[0]=E*J+i*G+o*v+e*Z,B[4]=E*K+i*m+o*W+e*z,B[8]=E*H+i*x+o*j+e*BA,B[12]=E*y+i*p+o*gA+e*FA,B[1]=t*J+a*G+s*v+D*Z,B[5]=t*K+a*m+s*W+D*z,B[9]=t*H+a*x+s*j+D*BA,B[13]=t*y+a*p+s*gA+D*FA,B[2]=n*J+w*G+S*v+h*Z,B[6]=n*K+w*m+S*W+h*z,B[10]=n*H+w*x+S*j+h*BA,B[14]=n*y+w*p+S*gA+h*FA,B[3]=k*J+c*G+U*v+d*Z,B[7]=k*K+c*m+U*W+d*z,B[11]=k*H+c*x+U*j+d*BA,B[15]=k*y+c*p+U*gA+d*FA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],B=A[12],E=A[1],i=A[5],o=A[9],e=A[13],t=A[2],a=A[6],s=A[10],D=A[14],n=A[3],w=A[7],S=A[11],h=A[15];return n*(+B*o*a-C*e*a-B*i*s+g*e*s+C*i*D-g*o*D)+w*(+I*o*D-I*e*s+B*E*s-C*E*D+C*e*t-B*o*t)+S*(+I*e*a-I*i*D-B*E*a+g*E*D+B*i*t-g*e*t)+h*(-C*i*t-I*o*a+I*i*s+C*E*a-g*E*s+g*o*t)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=A[9],s=A[10],D=A[11],n=A[12],w=A[13],S=A[14],h=A[15],k=a*S*e-w*s*e+w*o*D-i*S*D-a*o*h+i*s*h,c=n*s*e-t*S*e-n*o*D+E*S*D+t*o*h-E*s*h,U=t*w*e-n*a*e+n*i*D-E*w*D-t*i*h+E*a*h,d=n*a*o-t*w*o-n*i*s+E*w*s+t*i*S-E*a*S,J=I*k+g*c+C*U+B*d;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/J;return A[0]=k*K,A[1]=(w*s*B-a*S*B-w*C*D+g*S*D+a*C*h-g*s*h)*K,A[2]=(i*S*B-w*o*B+w*C*e-g*S*e-i*C*h+g*o*h)*K,A[3]=(a*o*B-i*s*B-a*C*e+g*s*e+i*C*D-g*o*D)*K,A[4]=c*K,A[5]=(t*S*B-n*s*B+n*C*D-I*S*D-t*C*h+I*s*h)*K,A[6]=(n*o*B-E*S*B-n*C*e+I*S*e+E*C*h-I*o*h)*K,A[7]=(E*s*B-t*o*B+t*C*e-I*s*e-E*C*D+I*o*D)*K,A[8]=U*K,A[9]=(n*a*B-t*w*B-n*g*D+I*w*D+t*g*h-I*a*h)*K,A[10]=(E*w*B-n*i*B+n*g*e-I*w*e-E*g*h+I*i*h)*K,A[11]=(t*i*B-E*a*B-t*g*e+I*a*e+E*g*D-I*i*D)*K,A[12]=d*K,A[13]=(t*w*C-n*a*C+n*g*s-I*w*s-t*g*S+I*a*S)*K,A[14]=(n*i*C-E*w*C-n*g*o+I*w*o+E*g*S-I*i*S)*K,A[15]=(E*a*C-t*i*C+t*g*o-I*a*o-E*g*s+I*i*s)*K,this}scale(A){const I=this.elements,g=A.x,C=A.y,B=A.z;return I[0]*=g,I[4]*=C,I[8]*=B,I[1]*=g,I[5]*=C,I[9]*=B,I[2]*=g,I[6]*=C,I[10]*=B,I[3]*=g,I[7]*=C,I[11]*=B,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),B=1-g,E=A.x,i=A.y,o=A.z,e=B*E,t=B*i;return this.set(e*E+g,e*i-C*o,e*o+C*i,0,e*i+C*o,t*i+g,t*o-C*E,0,e*o-C*i,t*o+C*E,B*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,B,E){return this.set(1,g,B,0,A,1,E,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,B=I._x,E=I._y,i=I._z,o=I._w,e=B+B,t=E+E,a=i+i,s=B*e,D=B*t,n=B*a,w=E*t,S=E*a,h=i*a,k=o*e,c=o*t,U=o*a,d=g.x,J=g.y,K=g.z;return C[0]=(1-(w+h))*d,C[1]=(D+U)*d,C[2]=(n-c)*d,C[3]=0,C[4]=(D-U)*J,C[5]=(1-(s+h))*J,C[6]=(S+k)*J,C[7]=0,C[8]=(n+c)*K,C[9]=(S-k)*K,C[10]=(1-(s+w))*K,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let B=CB.set(C[0],C[1],C[2]).length();const E=CB.set(C[4],C[5],C[6]).length(),i=CB.set(C[8],C[9],C[10]).length();this.determinant()<0&&(B=-B),A.x=C[12],A.y=C[13],A.z=C[14],rg.copy(this);const o=1/B,e=1/E,t=1/i;return rg.elements[0]*=o,rg.elements[1]*=o,rg.elements[2]*=o,rg.elements[4]*=e,rg.elements[5]*=e,rg.elements[6]*=e,rg.elements[8]*=t,rg.elements[9]*=t,rg.elements[10]*=t,I.setFromRotationMatrix(rg),g.x=B,g.y=E,g.z=i,this}makePerspective(A,I,g,C,B,E,i=ug){const o=this.elements,e=2*B/(I-A),t=2*B/(g-C),a=(I+A)/(I-A),s=(g+C)/(g-C);let D,n;if(i===ug)D=-(E+B)/(E-B),n=-2*E*B/(E-B);else if(i===FQ)D=-E/(E-B),n=-E*B/(E-B);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return o[0]=e,o[4]=0,o[8]=a,o[12]=0,o[1]=0,o[5]=t,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=D,o[14]=n,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,C,B,E,i=ug){const o=this.elements,e=1/(I-A),t=1/(g-C),a=1/(E-B),s=(I+A)*e,D=(g+C)*t;let n,w;if(i===ug)n=(E+B)*a,w=-2*a;else if(i===FQ)n=B*a,w=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return o[0]=2*e,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*t,o[9]=0,o[13]=-D,o[2]=0,o[6]=0,o[10]=w,o[14]=-n,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const CB=new q,rg=new dA,XD=new q(0,0,0),zD=new q(1,1,1),oC=new q,uQ=new q,Ig=new q,qe=new dA,de=new dI;class WI{constructor(A=0,I=0,g=0,C=WI.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,B=C[0],E=C[4],i=C[8],o=C[1],e=C[5],t=C[9],a=C[2],s=C[6],D=C[10];switch(I){case"XYZ":this._y=Math.asin(mI(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-t,D),this._z=Math.atan2(-E,B)):(this._x=Math.atan2(s,e),this._z=0);break;case"YXZ":this._x=Math.asin(-mI(t,-1,1)),Math.abs(t)<.9999999?(this._y=Math.atan2(i,D),this._z=Math.atan2(o,e)):(this._y=Math.atan2(-a,B),this._z=0);break;case"ZXY":this._x=Math.asin(mI(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,D),this._z=Math.atan2(-E,e)):(this._y=0,this._z=Math.atan2(o,B));break;case"ZYX":this._y=Math.asin(-mI(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,D),this._z=Math.atan2(o,B)):(this._x=0,this._z=Math.atan2(-E,e));break;case"YZX":this._z=Math.asin(mI(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-t,e),this._y=Math.atan2(-a,B)):(this._x=0,this._y=Math.atan2(i,D));break;case"XZY":this._z=Math.asin(-mI(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(s,e),this._y=Math.atan2(i,B)):(this._x=Math.atan2(-t,D),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return qe.makeRotationFromQuaternion(A),this.setFromRotationMatrix(qe,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return de.setFromEuler(this),this.setFromQuaternion(de,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}WI.DEFAULT_ORDER="XYZ";class Ye{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let $D=0;const Le=new q,BB=new dI,xg=new dA,mQ=new q,fB=new q,Ah=new q,Ih=new dI,He=new q(1,0,0),ue=new q(0,1,0),me=new q(0,0,1),fe={type:"added"},gh={type:"removed"},QB={type:"childadded",child:null},VE={type:"childremoved",child:null};class BI extends lC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$D++}),this.uuid=sg(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=BI.DEFAULT_UP.clone();const A=new q,I=new WI,g=new dI,C=new q(1,1,1);function B(){g.setFromEuler(I,!1)}function E(){I.setFromQuaternion(g,void 0,!1)}I._onChange(B),g._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new dA},normalMatrix:{value:new YA}}),this.matrix=new dA,this.matrixWorld=new dA,this.matrixAutoUpdate=BI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=BI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ye,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return BB.setFromAxisAngle(A,I),this.quaternion.multiply(BB),this}rotateOnWorldAxis(A,I){return BB.setFromAxisAngle(A,I),this.quaternion.premultiply(BB),this}rotateX(A){return this.rotateOnAxis(He,A)}rotateY(A){return this.rotateOnAxis(ue,A)}rotateZ(A){return this.rotateOnAxis(me,A)}translateOnAxis(A,I){return Le.copy(A).applyQuaternion(this.quaternion),this.position.add(Le.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(He,A)}translateY(A){return this.translateOnAxis(ue,A)}translateZ(A){return this.translateOnAxis(me,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(xg.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?mQ.copy(A):mQ.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),fB.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xg.lookAt(fB,mQ,this.up):xg.lookAt(mQ,fB,this.up),this.quaternion.setFromRotationMatrix(xg),C&&(xg.extractRotation(C.matrixWorld),BB.setFromRotationMatrix(xg),this.quaternion.premultiply(BB.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.removeFromParent(),A.parent=this,this.children.push(A),A.dispatchEvent(fe),QB.child=A,this.dispatchEvent(QB),QB.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(gh),VE.child=A,this.dispatchEvent(VE),VE.child=null),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),xg.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),xg.multiply(A.parent.matrixWorld)),A.applyMatrix4(xg),A.removeFromParent(),A.parent=this,this.children.push(A),A.updateWorldMatrix(!1,!0),A.dispatchEvent(fe),QB.child=A,this.dispatchEvent(QB),QB.child=null,this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const B=this.children[g].getObjectByProperty(A,I);if(B!==void 0)return B}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const C=this.children;for(let B=0,E=C.length;B<E;B++)C[B].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fB,A,Ah),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fB,Ih,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const B=I[g];(B.matrixWorldAutoUpdate===!0||A===!0)&&B.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let B=0,E=C.length;B<E;B++){const i=C[B];i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(C.type="BatchedMesh",C.perObjectFrustumCulled=this.perObjectFrustumCulled,C.sortObjects=this.sortObjects,C.drawRanges=this._drawRanges,C.reservedRanges=this._reservedRanges,C.visibility=this._visibility,C.active=this._active,C.bounds=this._bounds.map(i=>({boxInitialized:i.boxInitialized,boxMin:i.box.min.toArray(),boxMax:i.box.max.toArray(),sphereInitialized:i.sphereInitialized,sphereRadius:i.sphere.radius,sphereCenter:i.sphere.center.toArray()})),C.maxGeometryCount=this._maxGeometryCount,C.maxVertexCount=this._maxVertexCount,C.maxIndexCount=this._maxIndexCount,C.geometryInitialized=this._geometryInitialized,C.geometryCount=this._geometryCount,C.matricesTexture=this._matricesTexture.toJSON(A),this.boundingSphere!==null&&(C.boundingSphere={center:C.boundingSphere.center.toArray(),radius:C.boundingSphere.radius}),this.boundingBox!==null&&(C.boundingBox={min:C.boundingBox.min.toArray(),max:C.boundingBox.max.toArray()}));function B(i,o){return i[o.uuid]===void 0&&(i[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=B(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const o=i.shapes;if(Array.isArray(o))for(let e=0,t=o.length;e<t;e++){const a=o[e];B(A.shapes,a)}else B(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(B(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let o=0,e=this.material.length;o<e;o++)i.push(B(A.materials,this.material[o]));C.material=i}else C.material=B(A.materials,this.material);if(this.children.length>0){C.children=[];for(let i=0;i<this.children.length;i++)C.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let i=0;i<this.animations.length;i++){const o=this.animations[i];C.animations.push(B(A.animations,o))}}if(I){const i=E(A.geometries),o=E(A.materials),e=E(A.textures),t=E(A.images),a=E(A.shapes),s=E(A.skeletons),D=E(A.animations),n=E(A.nodes);i.length>0&&(g.geometries=i),o.length>0&&(g.materials=o),e.length>0&&(g.textures=e),t.length>0&&(g.images=t),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),D.length>0&&(g.animations=D),n.length>0&&(g.nodes=n)}return g.object=C,g;function E(i){const o=[];for(const e in i){const t=i[e];delete t.metadata,o.push(t)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}BI.DEFAULT_UP=new q(0,1,0),BI.DEFAULT_MATRIX_AUTO_UPDATE=!0,BI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sg=new q,bg=new q,XE=new q,Og=new q,EB=new q,iB=new q,Te=new q,zE=new q,$E=new q,Ai=new q;class Mg{constructor(A=new q,I=new q,g=new q){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),Sg.subVectors(A,I),C.cross(Sg);const B=C.lengthSq();return B>0?C.multiplyScalar(1/Math.sqrt(B)):C.set(0,0,0)}static getBarycoord(A,I,g,C,B){Sg.subVectors(C,I),bg.subVectors(g,I),XE.subVectors(A,I);const E=Sg.dot(Sg),i=Sg.dot(bg),o=Sg.dot(XE),e=bg.dot(bg),t=bg.dot(XE),a=E*e-i*i;if(a===0)return B.set(0,0,0),null;const s=1/a,D=(e*o-i*t)*s,n=(E*t-i*o)*s;return B.set(1-D-n,n,D)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,Og)===null?!1:Og.x>=0&&Og.y>=0&&Og.x+Og.y<=1}static getInterpolation(A,I,g,C,B,E,i,o){return this.getBarycoord(A,I,g,C,Og)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(B,Og.x),o.addScaledVector(E,Og.y),o.addScaledVector(i,Og.z),o)}static isFrontFacing(A,I,g,C){return Sg.subVectors(g,I),bg.subVectors(A,I),Sg.cross(bg).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Sg.subVectors(this.c,this.b),bg.subVectors(this.a,this.b),Sg.cross(bg).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return Mg.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return Mg.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,C,B){return Mg.getInterpolation(A,this.a,this.b,this.c,I,g,C,B)}containsPoint(A){return Mg.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return Mg.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,B=this.c;let E,i;EB.subVectors(C,g),iB.subVectors(B,g),zE.subVectors(A,g);const o=EB.dot(zE),e=iB.dot(zE);if(o<=0&&e<=0)return I.copy(g);$E.subVectors(A,C);const t=EB.dot($E),a=iB.dot($E);if(t>=0&&a<=t)return I.copy(C);const s=o*a-t*e;if(s<=0&&o>=0&&t<=0)return E=o/(o-t),I.copy(g).addScaledVector(EB,E);Ai.subVectors(A,B);const D=EB.dot(Ai),n=iB.dot(Ai);if(n>=0&&D<=n)return I.copy(B);const w=D*e-o*n;if(w<=0&&e>=0&&n<=0)return i=e/(e-n),I.copy(g).addScaledVector(iB,i);const S=t*n-D*a;if(S<=0&&a-t>=0&&D-n>=0)return Te.subVectors(B,C),i=(a-t)/(a-t+(D-n)),I.copy(C).addScaledVector(Te,i);const h=1/(S+w+s);return E=w*h,i=s*h,I.copy(g).addScaledVector(EB,E).addScaledVector(iB,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const xe={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},eC={h:0,s:0,l:0},fQ={h:0,s:0,l:0};function Ii(Q,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?Q+(A-Q)*6*I:I<1/2?A:I<2/3?Q+(A-Q)*6*(2/3-I):Q}class kA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const C=A;C&&C.isColor?this.copy(C):typeof C=="number"?this.setHex(C):typeof C=="string"&&this.setStyle(C)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=uI){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,XA.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=XA.workingColorSpace){return this.r=A,this.g=I,this.b=g,XA.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=XA.workingColorSpace){if(A=TE(A,1),I=mI(I,0,1),g=mI(g,0,1),I===0)this.r=this.g=this.b=g;else{const B=g<=.5?g*(1+I):g+I-g*I,E=2*g-B;this.r=Ii(E,B,A+1/3),this.g=Ii(E,B,A),this.b=Ii(E,B,A-1/3)}return XA.toWorkingColorSpace(this,C),this}setStyle(A,I=uI){function g(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let B;const E=C[1],i=C[2];switch(E){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(B[4]),this.setRGB(Math.min(255,parseInt(B[1],10))/255,Math.min(255,parseInt(B[2],10))/255,Math.min(255,parseInt(B[3],10))/255,I);if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(B[4]),this.setRGB(Math.min(100,parseInt(B[1],10))/100,Math.min(100,parseInt(B[2],10))/100,Math.min(100,parseInt(B[3],10))/100,I);break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(B[4]),this.setHSL(parseFloat(B[1])/360,parseFloat(B[2])/100,parseFloat(B[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=C[1],E=B.length;if(E===3)return this.setRGB(parseInt(B.charAt(0),16)/15,parseInt(B.charAt(1),16)/15,parseInt(B.charAt(2),16)/15,I);if(E===6)return this.setHex(parseInt(B,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=uI){const g=xe[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=zC(A.r),this.g=zC(A.g),this.b=zC(A.b),this}copyLinearToSRGB(A){return this.r=bE(A.r),this.g=bE(A.g),this.b=bE(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=uI){return XA.fromWorkingColorSpace(bI.copy(this),A),Math.round(mI(bI.r*255,0,255))*65536+Math.round(mI(bI.g*255,0,255))*256+Math.round(mI(bI.b*255,0,255))}getHexString(A=uI){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=XA.workingColorSpace){XA.fromWorkingColorSpace(bI.copy(this),I);const g=bI.r,C=bI.g,B=bI.b,E=Math.max(g,C,B),i=Math.min(g,C,B);let o,e;const t=(i+E)/2;if(i===E)o=0,e=0;else{const a=E-i;switch(e=t<=.5?a/(E+i):a/(2-E-i),E){case g:o=(C-B)/a+(C<B?6:0);break;case C:o=(B-g)/a+2;break;case B:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=e,A.l=t,A}getRGB(A,I=XA.workingColorSpace){return XA.fromWorkingColorSpace(bI.copy(this),I),A.r=bI.r,A.g=bI.g,A.b=bI.b,A}getStyle(A=uI){XA.fromWorkingColorSpace(bI.copy(this),A);const I=bI.r,g=bI.g,C=bI.b;return A!==uI?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(eC),this.setHSL(eC.h+A,eC.s+I,eC.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(eC),A.getHSL(fQ);const g=LB(eC.h,fQ.h,I),C=LB(eC.s,fQ.s,I),B=LB(eC.l,fQ.l,I);return this.setHSL(g,C,B),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,B=A.elements;return this.r=B[0]*I+B[3]*g+B[6]*C,this.g=B[1]*I+B[4]*g+B[7]*C,this.b=B[2]*I+B[5]*g+B[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bI=new kA;kA.NAMES=xe;let Ch=0;class ng extends lC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=sg(),this.name="",this.type="Material",this.blending=bC,this.side=Hg,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=UE,this.blendDst=KE,this.blendEquation=cC,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kA(0,0,0),this.blendAlpha=0,this.depthFunc=cQ,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ge,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=VC,this.stencilZFail=VC,this.stencilZPass=VC,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapRotation!==void 0&&(g.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==bC&&(g.blending=this.blending),this.side!==Hg&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==UE&&(g.blendSrc=this.blendSrc),this.blendDst!==KE&&(g.blendDst=this.blendDst),this.blendEquation!==cC&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==cQ&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ge&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==VC&&(g.stencilFail=this.stencilFail),this.stencilZFail!==VC&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==VC&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(B){const E=[];for(const i in B){const o=B[i];delete o.metadata,E.push(o)}return E}if(I){const B=C(A.textures),E=C(A.images);B.length>0&&(g.textures=B),E.length>0&&(g.images=E)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let B=0;B!==C;++B)g[B]=I[B].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class tC extends ng{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new WI,this.combine=NE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const _g=Bh();function Bh(){const Q=new ArrayBuffer(4),A=new Float32Array(Q),I=new Uint32Array(Q),g=new Uint32Array(512),C=new Uint32Array(512);for(let o=0;o<256;++o){const e=o-127;e<-27?(g[o]=0,g[o|256]=32768,C[o]=24,C[o|256]=24):e<-14?(g[o]=1024>>-e-14,g[o|256]=1024>>-e-14|32768,C[o]=-e-1,C[o|256]=-e-1):e<=15?(g[o]=e+15<<10,g[o|256]=e+15<<10|32768,C[o]=13,C[o|256]=13):e<128?(g[o]=31744,g[o|256]=64512,C[o]=24,C[o|256]=24):(g[o]=31744,g[o|256]=64512,C[o]=13,C[o|256]=13)}const B=new Uint32Array(2048),E=new Uint32Array(64),i=new Uint32Array(64);for(let o=1;o<1024;++o){let e=o<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,B[o]=e|t}for(let o=1024;o<2048;++o)B[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)E[o]=o<<23;E[31]=1199570944,E[32]=2147483648;for(let o=33;o<63;++o)E[o]=2147483648+(o-32<<23);E[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(i[o]=1024);return{floatView:A,uint32View:I,baseTable:g,shiftTable:C,mantissaTable:B,exponentTable:E,offsetTable:i}}function Qh(Q){Math.abs(Q)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),Q=mI(Q,-65504,65504),_g.floatView[0]=Q;const A=_g.uint32View[0],I=A>>23&511;return _g.baseTable[I]+((A&8388607)>>_g.shiftTable[I])}function Eh(Q){const A=Q>>10;return _g.uint32View[0]=_g.mantissaTable[_g.offsetTable[A]+(Q&1023)]+_g.exponentTable[A],_g.floatView[0]}const TQ={toHalfFloat:Qh,fromHalfFloat:Eh},lI=new q,xQ=new KA;class KI{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=fE,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ag,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}get updateRange(){return Ke("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,B=this.itemSize;C<B;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)xQ.fromBufferAttribute(this,I),xQ.applyMatrix3(A),this.setXY(I,xQ.x,xQ.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)lI.fromBufferAttribute(this,I),lI.applyMatrix3(A),this.setXYZ(I,lI.x,lI.y,lI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)lI.fromBufferAttribute(this,I),lI.applyMatrix4(A),this.setXYZ(I,lI.x,lI.y,lI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)lI.fromBufferAttribute(this,I),lI.applyNormalMatrix(A),this.setXYZ(I,lI.x,lI.y,lI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)lI.fromBufferAttribute(this,I),lI.transformDirection(A),this.setXYZ(I,lI.x,lI.y,lI.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=Dg(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=II(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=Dg(I,this.array)),I}setX(A,I){return this.normalized&&(I=II(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=Dg(I,this.array)),I}setY(A,I){return this.normalized&&(I=II(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=Dg(I,this.array)),I}setZ(A,I){return this.normalized&&(I=II(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=Dg(I,this.array)),I}setW(A,I){return this.normalized&&(I=II(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=II(I,this.array),g=II(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=II(I,this.array),g=II(g,this.array),C=II(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=II(I,this.array),g=II(g,this.array),C=II(C,this.array),B=II(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=B,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==fE&&(A.usage=this.usage),A}}class be extends KI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class Oe extends KI{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class PI extends KI{constructor(A,I,g){super(new Float32Array(A),I,g)}}let ih=0;const Qg=new dA,gi=new BI,oB=new q,gg=new mg,TB=new mg,YI=new q;class jI extends lC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=sg(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Me(A)?Oe:be)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const B=new YA().getNormalMatrix(A);g.applyNormalMatrix(B),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Qg.makeRotationFromQuaternion(A),this.applyMatrix4(Qg),this}rotateX(A){return Qg.makeRotationX(A),this.applyMatrix4(Qg),this}rotateY(A){return Qg.makeRotationY(A),this.applyMatrix4(Qg),this}rotateZ(A){return Qg.makeRotationZ(A),this.applyMatrix4(Qg),this}translate(A,I,g){return Qg.makeTranslation(A,I,g),this.applyMatrix4(Qg),this}scale(A,I,g){return Qg.makeScale(A,I,g),this.applyMatrix4(Qg),this}lookAt(A){return gi.lookAt(A),gi.updateMatrix(),this.applyMatrix4(gi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oB).negate(),this.translate(oB.x,oB.y,oB.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const B=A[g];I.push(B.x,B.y,B.z||0)}return this.setAttribute("position",new PI(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mg);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const B=I[g];gg.setFromBufferAttribute(B),this.morphTargetsRelative?(YI.addVectors(this.boundingBox.min,gg.min),this.boundingBox.expandByPoint(YI),YI.addVectors(this.boundingBox.max,gg.max),this.boundingBox.expandByPoint(YI)):(this.boundingBox.expandByPoint(gg.min),this.boundingBox.expandByPoint(gg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yg);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(A){const g=this.boundingSphere.center;if(gg.setFromBufferAttribute(A),I)for(let B=0,E=I.length;B<E;B++){const i=I[B];TB.setFromBufferAttribute(i),this.morphTargetsRelative?(YI.addVectors(gg.min,TB.min),gg.expandByPoint(YI),YI.addVectors(gg.max,TB.max),gg.expandByPoint(YI)):(gg.expandByPoint(TB.min),gg.expandByPoint(TB.max))}gg.getCenter(g);let C=0;for(let B=0,E=A.count;B<E;B++)YI.fromBufferAttribute(A,B),C=Math.max(C,g.distanceToSquared(YI));if(I)for(let B=0,E=I.length;B<E;B++){const i=I[B],o=this.morphTargetsRelative;for(let e=0,t=i.count;e<t;e++)YI.fromBufferAttribute(i,e),o&&(oB.fromBufferAttribute(A,e),YI.add(oB)),C=Math.max(C,g.distanceToSquared(YI))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=I.position,C=I.normal,B=I.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new KI(new Float32Array(4*g.count),4));const E=this.getAttribute("tangent"),i=[],o=[];for(let H=0;H<g.count;H++)i[H]=new q,o[H]=new q;const e=new q,t=new q,a=new q,s=new KA,D=new KA,n=new KA,w=new q,S=new q;function h(H,y,G){e.fromBufferAttribute(g,H),t.fromBufferAttribute(g,y),a.fromBufferAttribute(g,G),s.fromBufferAttribute(B,H),D.fromBufferAttribute(B,y),n.fromBufferAttribute(B,G),t.sub(e),a.sub(e),D.sub(s),n.sub(s);const m=1/(D.x*n.y-n.x*D.y);isFinite(m)&&(w.copy(t).multiplyScalar(n.y).addScaledVector(a,-D.y).multiplyScalar(m),S.copy(a).multiplyScalar(D.x).addScaledVector(t,-n.x).multiplyScalar(m),i[H].add(w),i[y].add(w),i[G].add(w),o[H].add(S),o[y].add(S),o[G].add(S))}let k=this.groups;k.length===0&&(k=[{start:0,count:A.count}]);for(let H=0,y=k.length;H<y;++H){const G=k[H],m=G.start,x=G.count;for(let p=m,v=m+x;p<v;p+=3)h(A.getX(p+0),A.getX(p+1),A.getX(p+2))}const c=new q,U=new q,d=new q,J=new q;function K(H){d.fromBufferAttribute(C,H),J.copy(d);const y=i[H];c.copy(y),c.sub(d.multiplyScalar(d.dot(y))).normalize(),U.crossVectors(J,y);const G=U.dot(o[H])<0?-1:1;E.setXYZW(H,c.x,c.y,c.z,G)}for(let H=0,y=k.length;H<y;++H){const G=k[H],m=G.start,x=G.count;for(let p=m,v=m+x;p<v;p+=3)K(A.getX(p+0)),K(A.getX(p+1)),K(A.getX(p+2))}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new KI(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,D=g.count;s<D;s++)g.setXYZ(s,0,0,0);const C=new q,B=new q,E=new q,i=new q,o=new q,e=new q,t=new q,a=new q;if(A)for(let s=0,D=A.count;s<D;s+=3){const n=A.getX(s+0),w=A.getX(s+1),S=A.getX(s+2);C.fromBufferAttribute(I,n),B.fromBufferAttribute(I,w),E.fromBufferAttribute(I,S),t.subVectors(E,B),a.subVectors(C,B),t.cross(a),i.fromBufferAttribute(g,n),o.fromBufferAttribute(g,w),e.fromBufferAttribute(g,S),i.add(t),o.add(t),e.add(t),g.setXYZ(n,i.x,i.y,i.z),g.setXYZ(w,o.x,o.y,o.z),g.setXYZ(S,e.x,e.y,e.z)}else for(let s=0,D=I.count;s<D;s+=3)C.fromBufferAttribute(I,s+0),B.fromBufferAttribute(I,s+1),E.fromBufferAttribute(I,s+2),t.subVectors(E,B),a.subVectors(C,B),t.cross(a),g.setXYZ(s+0,t.x,t.y,t.z),g.setXYZ(s+1,t.x,t.y,t.z),g.setXYZ(s+2,t.x,t.y,t.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)YI.fromBufferAttribute(A,I),YI.normalize(),A.setXYZ(I,YI.x,YI.y,YI.z)}toNonIndexed(){function A(i,o){const e=i.array,t=i.itemSize,a=i.normalized,s=new e.constructor(o.length*t);let D=0,n=0;for(let w=0,S=o.length;w<S;w++){i.isInterleavedBufferAttribute?D=o[w]*i.data.stride+i.offset:D=o[w]*t;for(let h=0;h<t;h++)s[n++]=e[D++]}return new KI(s,t,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new jI,g=this.index.array,C=this.attributes;for(const i in C){const o=C[i],e=A(o,g);I.setAttribute(i,e)}const B=this.morphAttributes;for(const i in B){const o=[],e=B[i];for(let t=0,a=e.length;t<a;t++){const s=e[t],D=A(s,g);o.push(D)}I.morphAttributes[i]=o}I.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,o=E.length;i<o;i++){const e=E[i];I.addGroup(e.start,e.count,e.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const e in o)o[e]!==void 0&&(A[e]=o[e]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const e=g[o];A.data.attributes[o]=e.toJSON(A.data)}const C={};let B=!1;for(const o in this.morphAttributes){const e=this.morphAttributes[o],t=[];for(let a=0,s=e.length;a<s;a++){const D=e[a];t.push(D.toJSON(A.data))}t.length>0&&(C[o]=t,B=!0)}B&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const e in C){const t=C[e];this.setAttribute(e,t.clone(I))}const B=A.morphAttributes;for(const e in B){const t=[],a=B[e];for(let s=0,D=a.length;s<D;s++)t.push(a[s].clone(I));this.morphAttributes[e]=t}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let e=0,t=E.length;e<t;e++){const a=E[e];this.addGroup(a.start,a.count,a.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _e=new dA,UC=new HQ,bQ=new yg,ve=new q,eB=new q,tB=new q,aB=new q,Ci=new q,OQ=new q,_Q=new KA,vQ=new KA,ZQ=new KA,Ze=new q,We=new q,Pe=new q,WQ=new q,PQ=new q;class wI extends BI{constructor(A=new jI,I=new tC){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const A=this.geometry.morphAttributes,I=Object.keys(A);if(I.length>0){const g=A[I[0]];if(g!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,B=g.length;C<B;C++){const E=g[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=C}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,B=g.morphAttributes.position,E=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const i=this.morphTargetInfluences;if(B&&i){OQ.set(0,0,0);for(let o=0,e=B.length;o<e;o++){const t=i[o],a=B[o];t!==0&&(Ci.fromBufferAttribute(a,A),E?OQ.addScaledVector(Ci,t):OQ.addScaledVector(Ci.sub(I),t))}I.add(OQ)}return I}raycast(A,I){const g=this.geometry,C=this.material,B=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),bQ.copy(g.boundingSphere),bQ.applyMatrix4(B),UC.copy(A.ray).recast(A.near),!(bQ.containsPoint(UC.origin)===!1&&(UC.intersectSphere(bQ,ve)===null||UC.origin.distanceToSquared(ve)>(A.far-A.near)**2))&&(_e.copy(B).invert(),UC.copy(A.ray).applyMatrix4(_e),!(g.boundingBox!==null&&UC.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,UC)))}_computeIntersections(A,I,g){let C;const B=this.geometry,E=this.material,i=B.index,o=B.attributes.position,e=B.attributes.uv,t=B.attributes.uv1,a=B.attributes.normal,s=B.groups,D=B.drawRange;if(i!==null)if(Array.isArray(E))for(let n=0,w=s.length;n<w;n++){const S=s[n],h=E[S.materialIndex],k=Math.max(S.start,D.start),c=Math.min(i.count,Math.min(S.start+S.count,D.start+D.count));for(let U=k,d=c;U<d;U+=3){const J=i.getX(U),K=i.getX(U+1),H=i.getX(U+2);C=jQ(this,h,A,g,e,t,a,J,K,H),C&&(C.faceIndex=Math.floor(U/3),C.face.materialIndex=S.materialIndex,I.push(C))}}else{const n=Math.max(0,D.start),w=Math.min(i.count,D.start+D.count);for(let S=n,h=w;S<h;S+=3){const k=i.getX(S),c=i.getX(S+1),U=i.getX(S+2);C=jQ(this,E,A,g,e,t,a,k,c,U),C&&(C.faceIndex=Math.floor(S/3),I.push(C))}}else if(o!==void 0)if(Array.isArray(E))for(let n=0,w=s.length;n<w;n++){const S=s[n],h=E[S.materialIndex],k=Math.max(S.start,D.start),c=Math.min(o.count,Math.min(S.start+S.count,D.start+D.count));for(let U=k,d=c;U<d;U+=3){const J=U,K=U+1,H=U+2;C=jQ(this,h,A,g,e,t,a,J,K,H),C&&(C.faceIndex=Math.floor(U/3),C.face.materialIndex=S.materialIndex,I.push(C))}}else{const n=Math.max(0,D.start),w=Math.min(o.count,D.start+D.count);for(let S=n,h=w;S<h;S+=3){const k=S,c=S+1,U=S+2;C=jQ(this,E,A,g,e,t,a,k,c,U),C&&(C.faceIndex=Math.floor(S/3),I.push(C))}}}}function oh(Q,A,I,g,C,B,E,i){let o;if(A.side===$I?o=g.intersectTriangle(E,B,C,!0,i):o=g.intersectTriangle(C,B,E,A.side===Hg,i),o===null)return null;PQ.copy(i),PQ.applyMatrix4(Q.matrixWorld);const e=I.ray.origin.distanceTo(PQ);return e<I.near||e>I.far?null:{distance:e,point:PQ.clone(),object:Q}}function jQ(Q,A,I,g,C,B,E,i,o,e){Q.getVertexPosition(i,eB),Q.getVertexPosition(o,tB),Q.getVertexPosition(e,aB);const t=oh(Q,A,I,g,eB,tB,aB,WQ);if(t){C&&(_Q.fromBufferAttribute(C,i),vQ.fromBufferAttribute(C,o),ZQ.fromBufferAttribute(C,e),t.uv=Mg.getInterpolation(WQ,eB,tB,aB,_Q,vQ,ZQ,new KA)),B&&(_Q.fromBufferAttribute(B,i),vQ.fromBufferAttribute(B,o),ZQ.fromBufferAttribute(B,e),t.uv1=Mg.getInterpolation(WQ,eB,tB,aB,_Q,vQ,ZQ,new KA)),E&&(Ze.fromBufferAttribute(E,i),We.fromBufferAttribute(E,o),Pe.fromBufferAttribute(E,e),t.normal=Mg.getInterpolation(WQ,eB,tB,aB,Ze,We,Pe,new q),t.normal.dot(g.direction)>0&&t.normal.multiplyScalar(-1));const a={a:i,b:o,c:e,normal:new q,materialIndex:0};Mg.getNormal(eB,tB,aB,a.normal),t.face=a}return t}class sB extends jI{constructor(A=1,I=1,g=1,C=1,B=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:B,depthSegments:E};const i=this;C=Math.floor(C),B=Math.floor(B),E=Math.floor(E);const o=[],e=[],t=[],a=[];let s=0,D=0;n("z","y","x",-1,-1,g,I,A,E,B,0),n("z","y","x",1,-1,g,I,-A,E,B,1),n("x","z","y",1,1,A,g,I,C,E,2),n("x","z","y",1,-1,A,g,-I,C,E,3),n("x","y","z",1,-1,A,I,g,C,B,4),n("x","y","z",-1,-1,A,I,-g,C,B,5),this.setIndex(o),this.setAttribute("position",new PI(e,3)),this.setAttribute("normal",new PI(t,3)),this.setAttribute("uv",new PI(a,2));function n(w,S,h,k,c,U,d,J,K,H,y){const G=U/K,m=d/H,x=U/2,p=d/2,v=J/2,W=K+1,j=H+1;let gA=0,Z=0;const z=new q;for(let BA=0;BA<j;BA++){const FA=BA*m-p;for(let ZA=0;ZA<W;ZA++){const oI=ZA*G-x;z[w]=oI*k,z[S]=FA*c,z[h]=v,e.push(z.x,z.y,z.z),z[w]=0,z[S]=0,z[h]=J>0?1:-1,t.push(z.x,z.y,z.z),a.push(ZA/K),a.push(1-BA/H),gA+=1}}for(let BA=0;BA<H;BA++)for(let FA=0;FA<K;FA++){const ZA=s+FA+W*BA,oI=s+FA+W*(BA+1),P=s+(FA+1)+W*(BA+1),CA=s+(FA+1)+W*BA;o.push(ZA,oI,CA),o.push(oI,P,CA),Z+=6}i.addGroup(D,Z,y),D+=Z,s+=gA}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new sB(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function DB(Q){const A={};for(const I in Q){A[I]={};for(const g in Q[I]){const C=Q[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function VI(Q){const A={};for(let I=0;I<Q.length;I++){const g=DB(Q[I]);for(const C in g)A[C]=g[C]}return A}function eh(Q){const A=[];for(let I=0;I<Q.length;I++)A.push(Q[I].clone());return A}function je(Q){const A=Q.getRenderTarget();return A===null?Q.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:XA.workingColorSpace}const th={clone:DB,merge:VI};var ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vg extends ng{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ah,this.fragmentShader=sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=DB(A.uniforms),this.uniformsGroups=eh(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const B=this.uniforms[C].value;B&&B.isTexture?I.uniforms[C]={type:"t",value:B.toJSON(A).uuid}:B&&B.isColor?I.uniforms[C]={type:"c",value:B.getHex()}:B&&B.isVector2?I.uniforms[C]={type:"v2",value:B.toArray()}:B&&B.isVector3?I.uniforms[C]={type:"v3",value:B.toArray()}:B&&B.isVector4?I.uniforms[C]={type:"v4",value:B.toArray()}:B&&B.isMatrix3?I.uniforms[C]={type:"m3",value:B.toArray()}:B&&B.isMatrix4?I.uniforms[C]={type:"m4",value:B.toArray()}:I.uniforms[C]={value:B}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class Ve extends BI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dA,this.projectionMatrix=new dA,this.projectionMatrixInverse=new dA,this.coordinateSystem=ug}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const aC=new q,Xe=new KA,ze=new KA;class XI extends Ve{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=XC*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(YB*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return XC*2*Math.atan(Math.tan(YB*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){aC.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(aC.x,aC.y).multiplyScalar(-A/aC.z),aC.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(aC.x,aC.y).multiplyScalar(-A/aC.z)}getViewSize(A,I){return this.getViewBounds(A,Xe,ze),I.subVectors(ze,Xe)}setViewOffset(A,I,g,C,B,E){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(YB*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,B=-.5*C;const E=this.view;if(this.view!==null&&this.view.enabled){const o=E.fullWidth,e=E.fullHeight;B+=E.offsetX*C/o,I-=E.offsetY*g/e,C*=E.width/o,g*=E.height/e}const i=this.filmOffset;i!==0&&(B+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(B,B+C,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const hB=-90,rB=1;class Dh extends BI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const C=new XI(hB,rB,A,I);C.layers=this.layers,this.add(C);const B=new XI(hB,rB,A,I);B.layers=this.layers,this.add(B);const E=new XI(hB,rB,A,I);E.layers=this.layers,this.add(E);const i=new XI(hB,rB,A,I);i.layers=this.layers,this.add(i);const o=new XI(hB,rB,A,I);o.layers=this.layers,this.add(o);const e=new XI(hB,rB,A,I);e.layers=this.layers,this.add(e)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,C,B,E,i,o]=I;for(const e of I)this.remove(e);if(A===ug)g.up.set(0,1,0),g.lookAt(1,0,0),C.up.set(0,1,0),C.lookAt(-1,0,0),B.up.set(0,0,-1),B.lookAt(0,1,0),E.up.set(0,0,1),E.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===FQ)g.up.set(0,-1,0),g.lookAt(-1,0,0),C.up.set(0,-1,0),C.lookAt(1,0,0),B.up.set(0,0,1),B.lookAt(0,1,0),E.up.set(0,0,-1),E.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const e of I)this.add(e),e.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:C}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[B,E,i,o,e,t]=this.children,a=A.getRenderTarget(),s=A.getActiveCubeFace(),D=A.getActiveMipmapLevel(),n=A.xr.enabled;A.xr.enabled=!1;const w=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,C),A.render(I,B),A.setRenderTarget(g,1,C),A.render(I,E),A.setRenderTarget(g,2,C),A.render(I,i),A.setRenderTarget(g,3,C),A.render(I,o),A.setRenderTarget(g,4,C),A.render(I,e),g.texture.generateMipmaps=w,A.setRenderTarget(g,5,C),A.render(I,t),A.setRenderTarget(a,s,D),A.xr.enabled=n,g.texture.needsPMREMUpdate=!0}}class $e extends UI{constructor(A,I,g,C,B,E,i,o,e,t){A=A!==void 0?A:[],I=I!==void 0?I:OC,super(A,I,g,C,B,E,i,o,e,t),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class hh extends kC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];this.texture=new $e(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:qI}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},C=new sB(5,5,5),B=new vg({name:"CubemapFromEquirect",uniforms:DB(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:$I,blending:IC});B.uniforms.tEquirect.value=I;const E=new wI(C,B),i=I.minFilter;return I.minFilter===lg&&(I.minFilter=qI),new Dh(1,10,this).update(A,E),I.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,I,g,C){const B=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(I,g,C);A.setRenderTarget(B)}}const Bi=new q,rh=new q,Sh=new YA;class KC{constructor(A=new q(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=Bi.subVectors(g,I).cross(rh.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(Bi),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const B=-(A.start.dot(this.normal)+this.constant)/C;return B<0||B>1?null:I.copy(A.start).addScaledVector(g,B)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||Sh.getNormalMatrix(A),C=this.coplanarPoint(Bi).applyMatrix4(A),B=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(B),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const NC=new yg,VQ=new q;class Qi{constructor(A=new KC,I=new KC,g=new KC,C=new KC,B=new KC,E=new KC){this.planes=[A,I,g,C,B,E]}set(A,I,g,C,B,E){const i=this.planes;return i[0].copy(A),i[1].copy(I),i[2].copy(g),i[3].copy(C),i[4].copy(B),i[5].copy(E),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=ug){const g=this.planes,C=A.elements,B=C[0],E=C[1],i=C[2],o=C[3],e=C[4],t=C[5],a=C[6],s=C[7],D=C[8],n=C[9],w=C[10],S=C[11],h=C[12],k=C[13],c=C[14],U=C[15];if(g[0].setComponents(o-B,s-e,S-D,U-h).normalize(),g[1].setComponents(o+B,s+e,S+D,U+h).normalize(),g[2].setComponents(o+E,s+t,S+n,U+k).normalize(),g[3].setComponents(o-E,s-t,S-n,U-k).normalize(),g[4].setComponents(o-i,s-a,S-w,U-c).normalize(),I===ug)g[5].setComponents(o+i,s+a,S+w,U+c).normalize();else if(I===FQ)g[5].setComponents(i,a,w,c).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),NC.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),NC.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(NC)}intersectsSprite(A){return NC.center.set(0,0,0),NC.radius=.7071067811865476,NC.applyMatrix4(A.matrixWorld),this.intersectsSphere(NC)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let B=0;B<6;B++)if(I[B].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(VQ.x=C.normal.x>0?A.max.x:A.min.x,VQ.y=C.normal.y>0?A.max.y:A.min.y,VQ.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(VQ)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function At(){let Q=null,A=!1,I=null,g=null;function C(B,E){I(B,E),g=Q.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=Q.requestAnimationFrame(C),A=!0)},stop:function(){Q.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(B){I=B},setContext:function(B){Q=B}}}function nh(Q){const A=new WeakMap;function I(i,o){const e=i.array,t=i.usage,a=e.byteLength,s=Q.createBuffer();Q.bindBuffer(o,s),Q.bufferData(o,e,t),i.onUploadCallback();let D;if(e instanceof Float32Array)D=Q.FLOAT;else if(e instanceof Uint16Array)i.isFloat16BufferAttribute?D=Q.HALF_FLOAT:D=Q.UNSIGNED_SHORT;else if(e instanceof Int16Array)D=Q.SHORT;else if(e instanceof Uint32Array)D=Q.UNSIGNED_INT;else if(e instanceof Int32Array)D=Q.INT;else if(e instanceof Int8Array)D=Q.BYTE;else if(e instanceof Uint8Array)D=Q.UNSIGNED_BYTE;else if(e instanceof Uint8ClampedArray)D=Q.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+e);return{buffer:s,type:D,bytesPerElement:e.BYTES_PER_ELEMENT,version:i.version,size:a}}function g(i,o,e){const t=o.array,a=o._updateRange,s=o.updateRanges;if(Q.bindBuffer(e,i),a.count===-1&&s.length===0&&Q.bufferSubData(e,0,t),s.length!==0){for(let D=0,n=s.length;D<n;D++){const w=s[D];Q.bufferSubData(e,w.start*t.BYTES_PER_ELEMENT,t,w.start,w.count)}o.clearUpdateRanges()}a.count!==-1&&(Q.bufferSubData(e,a.offset*t.BYTES_PER_ELEMENT,t,a.offset,a.count),a.count=-1),o.onUploadCallback()}function C(i){return i.isInterleavedBufferAttribute&&(i=i.data),A.get(i)}function B(i){i.isInterleavedBufferAttribute&&(i=i.data);const o=A.get(i);o&&(Q.deleteBuffer(o.buffer),A.delete(i))}function E(i,o){if(i.isGLBufferAttribute){const t=A.get(i);(!t||t.version<i.version)&&A.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version});return}i.isInterleavedBufferAttribute&&(i=i.data);const e=A.get(i);if(e===void 0)A.set(i,I(i,o));else if(e.version<i.version){if(e.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");g(e.buffer,i,o),e.version=i.version}}return{get:C,remove:B,update:E}}class XQ extends jI{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const B=A/2,E=I/2,i=Math.floor(g),o=Math.floor(C),e=i+1,t=o+1,a=A/i,s=I/o,D=[],n=[],w=[],S=[];for(let h=0;h<t;h++){const k=h*s-E;for(let c=0;c<e;c++){const U=c*a-B;n.push(U,-k,0),w.push(0,0,1),S.push(c/i),S.push(1-h/o)}}for(let h=0;h<o;h++)for(let k=0;k<i;k++){const c=k+e*h,U=k+e*(h+1),d=k+1+e*(h+1),J=k+1+e*h;D.push(c,U,J),D.push(U,d,J)}this.setIndex(D),this.setAttribute("position",new PI(n,3)),this.setAttribute("normal",new PI(w,3)),this.setAttribute("uv",new PI(S,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new XQ(A.width,A.height,A.widthSegments,A.heightSegments)}}var wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ch=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Jh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ph=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Oh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_h=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",jh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Vh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$h=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ar=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ir=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gr=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cr=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Br=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qr=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Er=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ir=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,or=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,er=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tr=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ar=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sr=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dr=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hr=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rr=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sr=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nr=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wr=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cr=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gr=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lr=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kr=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yr=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mr=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ur=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kr=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nr=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jr=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fr=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rr=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pr=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qr=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dr=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Yr=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Lr=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hr=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ur=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mr=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fr=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tr=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xr=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,br=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Or=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_r=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vr=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zr=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wr=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pr=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jr=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vr=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xr=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zr=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$r=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,IS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,BS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ES=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,US=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,KS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,JS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_S=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,LA={alphahash_fragment:wh,alphahash_pars_fragment:ch,alphamap_fragment:Gh,alphamap_pars_fragment:lh,alphatest_fragment:kh,alphatest_pars_fragment:yh,aomap_fragment:Mh,aomap_pars_fragment:Uh,batching_pars_vertex:Kh,batching_vertex:Nh,begin_vertex:Jh,beginnormal_vertex:Fh,bsdfs:Rh,iridescence_fragment:ph,bumpmap_pars_fragment:qh,clipping_planes_fragment:dh,clipping_planes_pars_fragment:Yh,clipping_planes_pars_vertex:Lh,clipping_planes_vertex:Hh,color_fragment:uh,color_pars_fragment:mh,color_pars_vertex:fh,color_vertex:Th,common:xh,cube_uv_reflection_fragment:bh,defaultnormal_vertex:Oh,displacementmap_pars_vertex:_h,displacementmap_vertex:vh,emissivemap_fragment:Zh,emissivemap_pars_fragment:Wh,colorspace_fragment:Ph,colorspace_pars_fragment:jh,envmap_fragment:Vh,envmap_common_pars_fragment:Xh,envmap_pars_fragment:zh,envmap_pars_vertex:$h,envmap_physical_pars_fragment:ar,envmap_vertex:Ar,fog_vertex:Ir,fog_pars_vertex:gr,fog_fragment:Cr,fog_pars_fragment:Br,gradientmap_pars_fragment:Qr,lightmap_fragment:Er,lightmap_pars_fragment:ir,lights_lambert_fragment:or,lights_lambert_pars_fragment:er,lights_pars_begin:tr,lights_toon_fragment:sr,lights_toon_pars_fragment:Dr,lights_phong_fragment:hr,lights_phong_pars_fragment:rr,lights_physical_fragment:Sr,lights_physical_pars_fragment:nr,lights_fragment_begin:wr,lights_fragment_maps:cr,lights_fragment_end:Gr,logdepthbuf_fragment:lr,logdepthbuf_pars_fragment:kr,logdepthbuf_pars_vertex:yr,logdepthbuf_vertex:Mr,map_fragment:Ur,map_pars_fragment:Kr,map_particle_fragment:Nr,map_particle_pars_fragment:Jr,metalnessmap_fragment:Fr,metalnessmap_pars_fragment:Rr,morphinstance_vertex:pr,morphcolor_vertex:qr,morphnormal_vertex:dr,morphtarget_pars_vertex:Yr,morphtarget_vertex:Lr,normal_fragment_begin:Hr,normal_fragment_maps:ur,normal_pars_fragment:mr,normal_pars_vertex:fr,normal_vertex:Tr,normalmap_pars_fragment:xr,clearcoat_normal_fragment_begin:br,clearcoat_normal_fragment_maps:Or,clearcoat_pars_fragment:_r,iridescence_pars_fragment:vr,opaque_fragment:Zr,packing:Wr,premultiplied_alpha_fragment:Pr,project_vertex:jr,dithering_fragment:Vr,dithering_pars_fragment:Xr,roughnessmap_fragment:zr,roughnessmap_pars_fragment:$r,shadowmap_pars_fragment:AS,shadowmap_pars_vertex:IS,shadowmap_vertex:gS,shadowmask_pars_fragment:CS,skinbase_vertex:BS,skinning_pars_vertex:QS,skinning_vertex:ES,skinnormal_vertex:iS,specularmap_fragment:oS,specularmap_pars_fragment:eS,tonemapping_fragment:tS,tonemapping_pars_fragment:aS,transmission_fragment:sS,transmission_pars_fragment:DS,uv_pars_fragment:hS,uv_pars_vertex:rS,uv_vertex:SS,worldpos_vertex:nS,background_vert:wS,background_frag:cS,backgroundCube_vert:GS,backgroundCube_frag:lS,cube_vert:kS,cube_frag:yS,depth_vert:MS,depth_frag:US,distanceRGBA_vert:KS,distanceRGBA_frag:NS,equirect_vert:JS,equirect_frag:FS,linedashed_vert:RS,linedashed_frag:pS,meshbasic_vert:qS,meshbasic_frag:dS,meshlambert_vert:YS,meshlambert_frag:LS,meshmatcap_vert:HS,meshmatcap_frag:uS,meshnormal_vert:mS,meshnormal_frag:fS,meshphong_vert:TS,meshphong_frag:xS,meshphysical_vert:bS,meshphysical_frag:OS,meshtoon_vert:_S,meshtoon_frag:vS,points_vert:ZS,points_frag:WS,shadow_vert:PS,shadow_frag:jS,sprite_vert:VS,sprite_frag:XS},iA={common:{diffuse:{value:new kA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new YA},alphaMap:{value:null},alphaMapTransform:{value:new YA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new YA}},envmap:{envMap:{value:null},envMapRotation:{value:new YA},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new YA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new YA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new YA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new YA},normalScale:{value:new KA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new YA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new YA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new YA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new YA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new YA},alphaTest:{value:0},uvTransform:{value:new YA}},sprite:{diffuse:{value:new kA(16777215)},opacity:{value:1},center:{value:new KA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new YA},alphaMap:{value:null},alphaMapTransform:{value:new YA},alphaTest:{value:0}}},Ug={basic:{uniforms:VI([iA.common,iA.specularmap,iA.envmap,iA.aomap,iA.lightmap,iA.fog]),vertexShader:LA.meshbasic_vert,fragmentShader:LA.meshbasic_frag},lambert:{uniforms:VI([iA.common,iA.specularmap,iA.envmap,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.fog,iA.lights,{emissive:{value:new kA(0)}}]),vertexShader:LA.meshlambert_vert,fragmentShader:LA.meshlambert_frag},phong:{uniforms:VI([iA.common,iA.specularmap,iA.envmap,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.fog,iA.lights,{emissive:{value:new kA(0)},specular:{value:new kA(1118481)},shininess:{value:30}}]),vertexShader:LA.meshphong_vert,fragmentShader:LA.meshphong_frag},standard:{uniforms:VI([iA.common,iA.envmap,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.roughnessmap,iA.metalnessmap,iA.fog,iA.lights,{emissive:{value:new kA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:LA.meshphysical_vert,fragmentShader:LA.meshphysical_frag},toon:{uniforms:VI([iA.common,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.gradientmap,iA.fog,iA.lights,{emissive:{value:new kA(0)}}]),vertexShader:LA.meshtoon_vert,fragmentShader:LA.meshtoon_frag},matcap:{uniforms:VI([iA.common,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.fog,{matcap:{value:null}}]),vertexShader:LA.meshmatcap_vert,fragmentShader:LA.meshmatcap_frag},points:{uniforms:VI([iA.points,iA.fog]),vertexShader:LA.points_vert,fragmentShader:LA.points_frag},dashed:{uniforms:VI([iA.common,iA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:LA.linedashed_vert,fragmentShader:LA.linedashed_frag},depth:{uniforms:VI([iA.common,iA.displacementmap]),vertexShader:LA.depth_vert,fragmentShader:LA.depth_frag},normal:{uniforms:VI([iA.common,iA.bumpmap,iA.normalmap,iA.displacementmap,{opacity:{value:1}}]),vertexShader:LA.meshnormal_vert,fragmentShader:LA.meshnormal_frag},sprite:{uniforms:VI([iA.sprite,iA.fog]),vertexShader:LA.sprite_vert,fragmentShader:LA.sprite_frag},background:{uniforms:{uvTransform:{value:new YA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:LA.background_vert,fragmentShader:LA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new YA}},vertexShader:LA.backgroundCube_vert,fragmentShader:LA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:LA.cube_vert,fragmentShader:LA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:LA.equirect_vert,fragmentShader:LA.equirect_frag},distanceRGBA:{uniforms:VI([iA.common,iA.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:LA.distanceRGBA_vert,fragmentShader:LA.distanceRGBA_frag},shadow:{uniforms:VI([iA.lights,iA.fog,{color:{value:new kA(0)},opacity:{value:1}}]),vertexShader:LA.shadow_vert,fragmentShader:LA.shadow_frag}};Ug.physical={uniforms:VI([Ug.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new YA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new YA},clearcoatNormalScale:{value:new KA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new YA},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new YA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new YA},sheen:{value:0},sheenColor:{value:new kA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new YA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new YA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new YA},transmissionSamplerSize:{value:new KA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new YA},attenuationDistance:{value:0},attenuationColor:{value:new kA(0)},specularColor:{value:new kA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new YA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new YA},anisotropyVector:{value:new KA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new YA}}]),vertexShader:LA.meshphysical_vert,fragmentShader:LA.meshphysical_frag};const zQ={r:0,b:0,g:0},JC=new WI,zS=new dA;function $S(Q,A,I,g,C,B,E){const i=new kA(0);let o=B===!0?0:1,e,t,a=null,s=0,D=null;function n(S,h){let k=!1,c=h.isScene===!0?h.background:null;c&&c.isTexture&&(c=(h.backgroundBlurriness>0?I:A).get(c)),c===null?w(i,o):c&&c.isColor&&(w(c,1),k=!0);const U=Q.xr.getEnvironmentBlendMode();U==="additive"?g.buffers.color.setClear(0,0,0,1,E):U==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,E),(Q.autoClear||k)&&Q.clear(Q.autoClearColor,Q.autoClearDepth,Q.autoClearStencil),c&&(c.isCubeTexture||c.mapping===lQ)?(t===void 0&&(t=new wI(new sB(1,1,1),new vg({name:"BackgroundCubeMaterial",uniforms:DB(Ug.backgroundCube.uniforms),vertexShader:Ug.backgroundCube.vertexShader,fragmentShader:Ug.backgroundCube.fragmentShader,side:$I,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),t.geometry.deleteAttribute("uv"),t.onBeforeRender=function(d,J,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(t.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(t)),JC.copy(h.backgroundRotation),JC.x*=-1,JC.y*=-1,JC.z*=-1,c.isCubeTexture&&c.isRenderTargetTexture===!1&&(JC.y*=-1,JC.z*=-1),t.material.uniforms.envMap.value=c,t.material.uniforms.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1,t.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,t.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,t.material.uniforms.backgroundRotation.value.setFromMatrix4(zS.makeRotationFromEuler(JC)),t.material.toneMapped=XA.getTransfer(c.colorSpace)!==tI,(a!==c||s!==c.version||D!==Q.toneMapping)&&(t.material.needsUpdate=!0,a=c,s=c.version,D=Q.toneMapping),t.layers.enableAll(),S.unshift(t,t.geometry,t.material,0,0,null)):c&&c.isTexture&&(e===void 0&&(e=new wI(new XQ(2,2),new vg({name:"BackgroundMaterial",uniforms:DB(Ug.background.uniforms),vertexShader:Ug.background.vertexShader,fragmentShader:Ug.background.fragmentShader,side:Hg,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),Object.defineProperty(e.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(e)),e.material.uniforms.t2D.value=c,e.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,e.material.toneMapped=XA.getTransfer(c.colorSpace)!==tI,c.matrixAutoUpdate===!0&&c.updateMatrix(),e.material.uniforms.uvTransform.value.copy(c.matrix),(a!==c||s!==c.version||D!==Q.toneMapping)&&(e.material.needsUpdate=!0,a=c,s=c.version,D=Q.toneMapping),e.layers.enableAll(),S.unshift(e,e.geometry,e.material,0,0,null))}function w(S,h){S.getRGB(zQ,je(Q)),g.buffers.color.setClear(zQ.r,zQ.g,zQ.b,h,E)}return{getClearColor:function(){return i},setClearColor:function(S,h=1){i.set(S),o=h,w(i,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,w(i,o)},render:n}}function An(Q,A){const I=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),g={},C=s(null);let B=C,E=!1;function i(G,m,x,p,v){let W=!1;const j=a(p,x,m);B!==j&&(B=j,e(B.object)),W=D(G,p,x,v),W&&n(G,p,x,v),v!==null&&A.update(v,Q.ELEMENT_ARRAY_BUFFER),(W||E)&&(E=!1,U(G,m,x,p),v!==null&&Q.bindBuffer(Q.ELEMENT_ARRAY_BUFFER,A.get(v).buffer))}function o(){return Q.createVertexArray()}function e(G){return Q.bindVertexArray(G)}function t(G){return Q.deleteVertexArray(G)}function a(G,m,x){const p=x.wireframe===!0;let v=g[G.id];v===void 0&&(v={},g[G.id]=v);let W=v[m.id];W===void 0&&(W={},v[m.id]=W);let j=W[p];return j===void 0&&(j=s(o()),W[p]=j),j}function s(G){const m=[],x=[],p=[];for(let v=0;v<I;v++)m[v]=0,x[v]=0,p[v]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:m,enabledAttributes:x,attributeDivisors:p,object:G,attributes:{},index:null}}function D(G,m,x,p){const v=B.attributes,W=m.attributes;let j=0;const gA=x.getAttributes();for(const Z in gA)if(gA[Z].location>=0){const z=v[Z];let BA=W[Z];if(BA===void 0&&(Z==="instanceMatrix"&&G.instanceMatrix&&(BA=G.instanceMatrix),Z==="instanceColor"&&G.instanceColor&&(BA=G.instanceColor)),z===void 0||z.attribute!==BA||BA&&z.data!==BA.data)return!0;j++}return B.attributesNum!==j||B.index!==p}function n(G,m,x,p){const v={},W=m.attributes;let j=0;const gA=x.getAttributes();for(const Z in gA)if(gA[Z].location>=0){let z=W[Z];z===void 0&&(Z==="instanceMatrix"&&G.instanceMatrix&&(z=G.instanceMatrix),Z==="instanceColor"&&G.instanceColor&&(z=G.instanceColor));const BA={};BA.attribute=z,z&&z.data&&(BA.data=z.data),v[Z]=BA,j++}B.attributes=v,B.attributesNum=j,B.index=p}function w(){const G=B.newAttributes;for(let m=0,x=G.length;m<x;m++)G[m]=0}function S(G){h(G,0)}function h(G,m){const x=B.newAttributes,p=B.enabledAttributes,v=B.attributeDivisors;x[G]=1,p[G]===0&&(Q.enableVertexAttribArray(G),p[G]=1),v[G]!==m&&(Q.vertexAttribDivisor(G,m),v[G]=m)}function k(){const G=B.newAttributes,m=B.enabledAttributes;for(let x=0,p=m.length;x<p;x++)m[x]!==G[x]&&(Q.disableVertexAttribArray(x),m[x]=0)}function c(G,m,x,p,v,W,j){j===!0?Q.vertexAttribIPointer(G,m,x,v,W):Q.vertexAttribPointer(G,m,x,p,v,W)}function U(G,m,x,p){w();const v=p.attributes,W=x.getAttributes(),j=m.defaultAttributeValues;for(const gA in W){const Z=W[gA];if(Z.location>=0){let z=v[gA];if(z===void 0&&(gA==="instanceMatrix"&&G.instanceMatrix&&(z=G.instanceMatrix),gA==="instanceColor"&&G.instanceColor&&(z=G.instanceColor)),z!==void 0){const BA=z.normalized,FA=z.itemSize,ZA=A.get(z);if(ZA===void 0)continue;const oI=ZA.buffer,P=ZA.type,CA=ZA.bytesPerElement,sA=P===Q.INT||P===Q.UNSIGNED_INT||z.gpuType===fo;if(z.isInterleavedBufferAttribute){const eA=z.data,uA=eA.stride,xA=z.offset;if(eA.isInstancedInterleavedBuffer){for(let jA=0;jA<Z.locationSize;jA++)h(Z.location+jA,eA.meshPerAttribute);G.isInstancedMesh!==!0&&p._maxInstanceCount===void 0&&(p._maxInstanceCount=eA.meshPerAttribute*eA.count)}else for(let jA=0;jA<Z.locationSize;jA++)S(Z.location+jA);Q.bindBuffer(Q.ARRAY_BUFFER,oI);for(let jA=0;jA<Z.locationSize;jA++)c(Z.location+jA,FA/Z.locationSize,P,BA,uA*CA,(xA+FA/Z.locationSize*jA)*CA,sA)}else{if(z.isInstancedBufferAttribute){for(let eA=0;eA<Z.locationSize;eA++)h(Z.location+eA,z.meshPerAttribute);G.isInstancedMesh!==!0&&p._maxInstanceCount===void 0&&(p._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let eA=0;eA<Z.locationSize;eA++)S(Z.location+eA);Q.bindBuffer(Q.ARRAY_BUFFER,oI);for(let eA=0;eA<Z.locationSize;eA++)c(Z.location+eA,FA/Z.locationSize,P,BA,FA*CA,FA/Z.locationSize*eA*CA,sA)}}else if(j!==void 0){const BA=j[gA];if(BA!==void 0)switch(BA.length){case 2:Q.vertexAttrib2fv(Z.location,BA);break;case 3:Q.vertexAttrib3fv(Z.location,BA);break;case 4:Q.vertexAttrib4fv(Z.location,BA);break;default:Q.vertexAttrib1fv(Z.location,BA)}}}}k()}function d(){H();for(const G in g){const m=g[G];for(const x in m){const p=m[x];for(const v in p)t(p[v].object),delete p[v];delete m[x]}delete g[G]}}function J(G){if(g[G.id]===void 0)return;const m=g[G.id];for(const x in m){const p=m[x];for(const v in p)t(p[v].object),delete p[v];delete m[x]}delete g[G.id]}function K(G){for(const m in g){const x=g[m];if(x[G.id]===void 0)continue;const p=x[G.id];for(const v in p)t(p[v].object),delete p[v];delete x[G.id]}}function H(){y(),E=!0,B!==C&&(B=C,e(B.object))}function y(){C.geometry=null,C.program=null,C.wireframe=!1}return{setup:i,reset:H,resetDefaultState:y,dispose:d,releaseStatesOfGeometry:J,releaseStatesOfProgram:K,initAttributes:w,enableAttribute:S,disableUnusedAttributes:k}}function In(Q,A,I){let g;function C(o){g=o}function B(o,e){Q.drawArrays(g,o,e),I.update(e,g,1)}function E(o,e,t){t!==0&&(Q.drawArraysInstanced(g,o,e,t),I.update(e,g,t))}function i(o,e,t){if(t===0)return;const a=A.get("WEBGL_multi_draw");if(a===null)for(let s=0;s<t;s++)this.render(o[s],e[s]);else{a.multiDrawArraysWEBGL(g,o,0,e,0,t);let s=0;for(let D=0;D<t;D++)s+=e[D];I.update(s,g,1)}}this.setMode=C,this.render=B,this.renderInstances=E,this.renderMultiDraw=i}function gn(Q,A,I){let g;function C(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const c=A.get("EXT_texture_filter_anisotropic");g=Q.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function B(c){if(c==="highp"){if(Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.HIGH_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.HIGH_FLOAT).precision>0)return"highp";c="mediump"}return c==="mediump"&&Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.MEDIUM_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let E=I.precision!==void 0?I.precision:"highp";const i=B(E);i!==E&&(console.warn("THREE.WebGLRenderer:",E,"not supported, using",i,"instead."),E=i);const o=I.logarithmicDepthBuffer===!0,e=Q.getParameter(Q.MAX_TEXTURE_IMAGE_UNITS),t=Q.getParameter(Q.MAX_VERTEX_TEXTURE_IMAGE_UNITS),a=Q.getParameter(Q.MAX_TEXTURE_SIZE),s=Q.getParameter(Q.MAX_CUBE_MAP_TEXTURE_SIZE),D=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),n=Q.getParameter(Q.MAX_VERTEX_UNIFORM_VECTORS),w=Q.getParameter(Q.MAX_VARYING_VECTORS),S=Q.getParameter(Q.MAX_FRAGMENT_UNIFORM_VECTORS),h=t>0,k=Q.getParameter(Q.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:C,getMaxPrecision:B,precision:E,logarithmicDepthBuffer:o,maxTextures:e,maxVertexTextures:t,maxTextureSize:a,maxCubemapSize:s,maxAttributes:D,maxVertexUniforms:n,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:h,maxSamples:k}}function Cn(Q){const A=this;let I=null,g=0,C=!1,B=!1;const E=new KC,i=new YA,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s){const D=a.length!==0||s||g!==0||C;return C=s,g=a.length,D},this.beginShadows=function(){B=!0,t(null)},this.endShadows=function(){B=!1},this.setGlobalState=function(a,s){I=t(a,s,0)},this.setState=function(a,s,D){const n=a.clippingPlanes,w=a.clipIntersection,S=a.clipShadows,h=Q.get(a);if(!C||n===null||n.length===0||B&&!S)B?t(null):e();else{const k=B?0:g,c=k*4;let U=h.clippingState||null;o.value=U,U=t(n,s,c,D);for(let d=0;d!==c;++d)U[d]=I[d];h.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=k}};function e(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function t(a,s,D,n){const w=a!==null?a.length:0;let S=null;if(w!==0){if(S=o.value,n!==!0||S===null){const h=D+w*4,k=s.matrixWorldInverse;i.getNormalMatrix(k),(S===null||S.length<h)&&(S=new Float32Array(h));for(let c=0,U=D;c!==w;++c,U+=4)E.copy(a[c]).applyMatrix4(k,i),E.normal.toArray(S,U),S[U+3]=E.constant}o.value=S,o.needsUpdate=!0}return A.numPlanes=w,A.numIntersection=0,S}}function Bn(Q){let A=new WeakMap;function I(E,i){return i===GQ?E.mapping=OC:i===JE&&(E.mapping=_C),E}function g(E){if(E&&E.isTexture){const i=E.mapping;if(i===GQ||i===JE)if(A.has(E)){const o=A.get(E).texture;return I(o,E.mapping)}else{const o=E.image;if(o&&o.height>0){const e=new hh(o.height);return e.fromEquirectangularTexture(Q,E),A.set(E,e),E.addEventListener("dispose",C),I(e.texture,E.mapping)}else return null}}return E}function C(E){const i=E.target;i.removeEventListener("dispose",C);const o=A.get(i);o!==void 0&&(A.delete(i),o.dispose())}function B(){A=new WeakMap}return{get:g,dispose:B}}class Ei extends Ve{constructor(A=-1,I=1,g=1,C=-1,B=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=B,this.far=E,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,B,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let B=g-A,E=g+A,i=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;B+=e*this.view.offsetX,E=B+e*this.view.width,i-=t*this.view.offsetY,o=i-t*this.view.height}this.projectionMatrix.makeOrthographic(B,E,i,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const SB=4,It=[.125,.215,.35,.446,.526,.582],FC=20,ii=new Ei,gt=new kA;let oi=null,ei=0,ti=0,ai=!1;const RC=(1+Math.sqrt(5))/2,nB=1/RC,Ct=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,RC,nB),new q(0,RC,-nB),new q(nB,0,RC),new q(-nB,0,RC),new q(RC,nB,0),new q(-RC,nB,0)];class Bt{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){oi=this._renderer.getRenderTarget(),ei=this._renderer.getActiveCubeFace(),ti=this._renderer.getActiveMipmapLevel(),ai=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const B=this._allocateTargets();return B.depthBuffer=!0,this._sceneToCubeUV(A,g,C,B),I>0&&this._blur(B,0,0,I),this._applyPMREM(B),this._cleanup(B),B}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=it(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Et(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(oi,ei,ti),this._renderer.xr.enabled=ai,A.scissorTest=!1,$Q(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===OC||A.mapping===_C?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),oi=this._renderer.getRenderTarget(),ei=this._renderer.getActiveCubeFace(),ti=this._renderer.getActiveMipmapLevel(),ai=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:qI,minFilter:qI,generateMipmaps:!1,type:CC,format:ag,colorSpace:MI,depthBuffer:!1},C=Qt(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qt(A,I,g);const{_lodMax:B}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qn(B)),this._blurMaterial=En(B,A,I)}return C}_compileMaterial(A){const I=new wI(this._lodPlanes[0],A);this._renderer.compile(I,ii)}_sceneToCubeUV(A,I,g,C){const B=new XI(90,1,I,g),E=[1,-1,1,1,1,1],i=[1,1,1,-1,-1,-1],o=this._renderer,e=o.autoClear,t=o.toneMapping;o.getClearColor(gt),o.toneMapping=gC,o.autoClear=!1;const a=new tC({name:"PMREM.Background",side:$I,depthWrite:!1,depthTest:!1}),s=new wI(new sB,a);let D=!1;const n=A.background;n?n.isColor&&(a.color.copy(n),A.background=null,D=!0):(a.color.copy(gt),D=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(B.up.set(0,E[w],0),B.lookAt(i[w],0,0)):S===1?(B.up.set(0,0,E[w]),B.lookAt(0,i[w],0)):(B.up.set(0,E[w],0),B.lookAt(0,0,i[w]));const h=this._cubeSize;$Q(C,S*h,w>2?h:0,h,h),o.setRenderTarget(C),D&&o.render(s,B),o.render(A,B)}s.geometry.dispose(),s.material.dispose(),o.toneMapping=t,o.autoClear=e,A.background=n}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===OC||A.mapping===_C;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=it()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Et());const B=C?this._cubemapMaterial:this._equirectMaterial,E=new wI(this._lodPlanes[0],B),i=B.uniforms;i.envMap.value=A;const o=this._cubeSize;$Q(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(E,ii)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let C=1;C<this._lodPlanes.length;C++){const B=Math.sqrt(this._sigmas[C]*this._sigmas[C]-this._sigmas[C-1]*this._sigmas[C-1]),E=Ct[(C-1)%Ct.length];this._blur(A,C-1,C,B,E)}I.autoClear=g}_blur(A,I,g,C,B){const E=this._pingPongRenderTarget;this._halfBlur(A,E,I,g,C,"latitudinal",B),this._halfBlur(E,A,g,g,C,"longitudinal",B)}_halfBlur(A,I,g,C,B,E,i){const o=this._renderer,e=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const t=3,a=new wI(this._lodPlanes[C],e),s=e.uniforms,D=this._sizeLods[g]-1,n=isFinite(B)?Math.PI/(2*D):2*Math.PI/(2*FC-1),w=B/n,S=isFinite(B)?1+Math.floor(t*w):FC;S>FC&&console.warn(`sigmaRadians, ${B}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${FC}`);const h=[];let k=0;for(let K=0;K<FC;++K){const H=K/w,y=Math.exp(-H*H/2);h.push(y),K===0?k+=y:K<S&&(k+=2*y)}for(let K=0;K<h.length;K++)h[K]=h[K]/k;s.envMap.value=A.texture,s.samples.value=S,s.weights.value=h,s.latitudinal.value=E==="latitudinal",i&&(s.poleAxis.value=i);const{_lodMax:c}=this;s.dTheta.value=n,s.mipInt.value=c-g;const U=this._sizeLods[C],d=3*U*(C>c-SB?C-c+SB:0),J=4*(this._cubeSize-U);$Q(I,d,J,3*U,2*U),o.setRenderTarget(I),o.render(a,ii)}}function Qn(Q){const A=[],I=[],g=[];let C=Q;const B=Q-SB+1+It.length;for(let E=0;E<B;E++){const i=Math.pow(2,C);I.push(i);let o=1/i;E>Q-SB?o=It[E-Q+SB-1]:E===0&&(o=0),g.push(o);const e=1/(i-2),t=-e,a=1+e,s=[t,t,a,t,a,a,t,t,a,a,t,a],D=6,n=6,w=3,S=2,h=1,k=new Float32Array(w*n*D),c=new Float32Array(S*n*D),U=new Float32Array(h*n*D);for(let J=0;J<D;J++){const K=J%3*2/3-1,H=J>2?0:-1,y=[K,H,0,K+2/3,H,0,K+2/3,H+1,0,K,H,0,K+2/3,H+1,0,K,H+1,0];k.set(y,w*n*J),c.set(s,S*n*J);const G=[J,J,J,J,J,J];U.set(G,h*n*J)}const d=new jI;d.setAttribute("position",new KI(k,w)),d.setAttribute("uv",new KI(c,S)),d.setAttribute("faceIndex",new KI(U,h)),A.push(d),C>SB&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function Qt(Q,A,I){const g=new kC(Q,A,I);return g.texture.mapping=lQ,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function $Q(Q,A,I,g,C){Q.viewport.set(A,I,g,C),Q.scissor.set(A,I,g,C)}function En(Q,A,I){const g=new Float32Array(FC),C=new q(0,1,0);return new vg({name:"SphericalGaussianBlur",defines:{n:FC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${Q}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:si(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:IC,depthTest:!1,depthWrite:!1})}function Et(){return new vg({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:si(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:IC,depthTest:!1,depthWrite:!1})}function it(){return new vg({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:si(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:IC,depthTest:!1,depthWrite:!1})}function si(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function on(Q){let A=new WeakMap,I=null;function g(i){if(i&&i.isTexture){const o=i.mapping,e=o===GQ||o===JE,t=o===OC||o===_C;if(e||t){let a=A.get(i);const s=a!==void 0?a.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==s)return I===null&&(I=new Bt(Q)),a=e?I.fromEquirectangular(i,a):I.fromCubemap(i,a),a.texture.pmremVersion=i.pmremVersion,A.set(i,a),a.texture;if(a!==void 0)return a.texture;{const D=i.image;return e&&D&&D.height>0||t&&D&&C(D)?(I===null&&(I=new Bt(Q)),a=e?I.fromEquirectangular(i):I.fromCubemap(i),a.texture.pmremVersion=i.pmremVersion,A.set(i,a),i.addEventListener("dispose",B),a.texture):null}}}return i}function C(i){let o=0;const e=6;for(let t=0;t<e;t++)i[t]!==void 0&&o++;return o===e}function B(i){const o=i.target;o.removeEventListener("dispose",B);const e=A.get(o);e!==void 0&&(A.delete(o),e.dispose())}function E(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:E}}function en(Q){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=Q.getExtension("WEBGL_depth_texture")||Q.getExtension("MOZ_WEBGL_depth_texture")||Q.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=Q.getExtension("EXT_texture_filter_anisotropic")||Q.getExtension("MOZ_EXT_texture_filter_anisotropic")||Q.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=Q.getExtension("WEBGL_compressed_texture_s3tc")||Q.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=Q.getExtension("WEBGL_compressed_texture_pvrtc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=Q.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(){I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance"),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture"),I("WEBGL_render_shared_exponent")},get:function(g){const C=I(g);return C===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function tn(Q,A,I,g){const C={},B=new WeakMap;function E(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const n in s.attributes)A.remove(s.attributes[n]);for(const n in s.morphAttributes){const w=s.morphAttributes[n];for(let S=0,h=w.length;S<h;S++)A.remove(w[S])}s.removeEventListener("dispose",E),delete C[s.id];const D=B.get(s);D&&(A.remove(D),B.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function i(a,s){return C[s.id]===!0||(s.addEventListener("dispose",E),C[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const n in s)A.update(s[n],Q.ARRAY_BUFFER);const D=a.morphAttributes;for(const n in D){const w=D[n];for(let S=0,h=w.length;S<h;S++)A.update(w[S],Q.ARRAY_BUFFER)}}function e(a){const s=[],D=a.index,n=a.attributes.position;let w=0;if(D!==null){const k=D.array;w=D.version;for(let c=0,U=k.length;c<U;c+=3){const d=k[c+0],J=k[c+1],K=k[c+2];s.push(d,J,J,K,K,d)}}else if(n!==void 0){const k=n.array;w=n.version;for(let c=0,U=k.length/3-1;c<U;c+=3){const d=c+0,J=c+1,K=c+2;s.push(d,J,J,K,K,d)}}else return;const S=new(Me(s)?Oe:be)(s,1);S.version=w;const h=B.get(a);h&&A.remove(h),B.set(a,S)}function t(a){const s=B.get(a);if(s){const D=a.index;D!==null&&s.version<D.version&&e(a)}else e(a);return B.get(a)}return{get:i,update:o,getWireframeAttribute:t}}function an(Q,A,I){let g;function C(a){g=a}let B,E;function i(a){B=a.type,E=a.bytesPerElement}function o(a,s){Q.drawElements(g,s,B,a*E),I.update(s,g,1)}function e(a,s,D){D!==0&&(Q.drawElementsInstanced(g,s,B,a*E,D),I.update(s,g,D))}function t(a,s,D){if(D===0)return;const n=A.get("WEBGL_multi_draw");if(n===null)for(let w=0;w<D;w++)this.render(a[w]/E,s[w]);else{n.multiDrawElementsWEBGL(g,s,0,B,a,0,D);let w=0;for(let S=0;S<D;S++)w+=s[S];I.update(w,g,1)}}this.setMode=C,this.setIndex=i,this.render=o,this.renderInstances=e,this.renderMultiDraw=t}function sn(Q){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(B,E,i){switch(I.calls++,E){case Q.TRIANGLES:I.triangles+=i*(B/3);break;case Q.LINES:I.lines+=i*(B/2);break;case Q.LINE_STRIP:I.lines+=i*(B-1);break;case Q.LINE_LOOP:I.lines+=i*B;break;case Q.POINTS:I.points+=i*B;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function C(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function Dn(Q,A,I){const g=new WeakMap,C=new CI;function B(E,i,o){const e=E.morphTargetInfluences,t=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,a=t!==void 0?t.length:0;let s=g.get(i);if(s===void 0||s.count!==a){let D=function(){H.dispose(),g.delete(i),i.removeEventListener("dispose",D)};s!==void 0&&s.texture.dispose();const n=i.morphAttributes.position!==void 0,w=i.morphAttributes.normal!==void 0,S=i.morphAttributes.color!==void 0,h=i.morphAttributes.position||[],k=i.morphAttributes.normal||[],c=i.morphAttributes.color||[];let U=0;n===!0&&(U=1),w===!0&&(U=2),S===!0&&(U=3);let d=i.attributes.position.count*U,J=1;d>A.maxTextureSize&&(J=Math.ceil(d/A.maxTextureSize),d=A.maxTextureSize);const K=new Float32Array(d*J*4*a),H=new Re(K,d,J,a);H.type=Ag,H.needsUpdate=!0;const y=U*4;for(let G=0;G<a;G++){const m=h[G],x=k[G],p=c[G],v=d*J*4*G;for(let W=0;W<m.count;W++){const j=W*y;n===!0&&(C.fromBufferAttribute(m,W),K[v+j+0]=C.x,K[v+j+1]=C.y,K[v+j+2]=C.z,K[v+j+3]=0),w===!0&&(C.fromBufferAttribute(x,W),K[v+j+4]=C.x,K[v+j+5]=C.y,K[v+j+6]=C.z,K[v+j+7]=0),S===!0&&(C.fromBufferAttribute(p,W),K[v+j+8]=C.x,K[v+j+9]=C.y,K[v+j+10]=C.z,K[v+j+11]=p.itemSize===4?C.w:1)}}s={count:a,texture:H,size:new KA(d,J)},g.set(i,s),i.addEventListener("dispose",D)}if(E.isInstancedMesh===!0&&E.morphTexture!==null)o.getUniforms().setValue(Q,"morphTexture",E.morphTexture,I);else{let D=0;for(let w=0;w<e.length;w++)D+=e[w];const n=i.morphTargetsRelative?1:1-D;o.getUniforms().setValue(Q,"morphTargetBaseInfluence",n),o.getUniforms().setValue(Q,"morphTargetInfluences",e)}o.getUniforms().setValue(Q,"morphTargetsTexture",s.texture,I),o.getUniforms().setValue(Q,"morphTargetsTextureSize",s.size)}return{update:B}}function hn(Q,A,I,g){let C=new WeakMap;function B(o){const e=g.render.frame,t=o.geometry,a=A.get(o,t);if(C.get(a)!==e&&(A.update(a),C.set(a,e)),o.isInstancedMesh&&(o.hasEventListener("dispose",i)===!1&&o.addEventListener("dispose",i),C.get(o)!==e&&(I.update(o.instanceMatrix,Q.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,Q.ARRAY_BUFFER),C.set(o,e))),o.isSkinnedMesh){const s=o.skeleton;C.get(s)!==e&&(s.update(),C.set(s,e))}return a}function E(){C=new WeakMap}function i(o){const e=o.target;e.removeEventListener("dispose",i),I.remove(e.instanceMatrix),e.instanceColor!==null&&I.remove(e.instanceColor)}return{update:B,dispose:E}}class ot extends UI{constructor(A,I,g,C,B,E,i,o,e,t){if(t=t!==void 0?t:ZC,t!==ZC&&t!==qB)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&t===ZC&&(g=vC),g===void 0&&t===qB&&(g=pB),super(null,C,B,E,i,o,t,g,e),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=i!==void 0?i:HI,this.minFilter=o!==void 0?o:HI,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}const et=new UI,tt=new ot(1,1);tt.compareFunction=le;const at=new Re,st=new jD,Dt=new $e,ht=[],rt=[],St=new Float32Array(16),nt=new Float32Array(9),wt=new Float32Array(4);function wB(Q,A,I){const g=Q[0];if(g<=0||g>0)return Q;const C=A*I;let B=ht[C];if(B===void 0&&(B=new Float32Array(C),ht[C]=B),A!==0){g.toArray(B,0);for(let E=1,i=0;E!==A;++E)i+=I,Q[E].toArray(B,i)}return B}function NI(Q,A){if(Q.length!==A.length)return!1;for(let I=0,g=Q.length;I<g;I++)if(Q[I]!==A[I])return!1;return!0}function JI(Q,A){for(let I=0,g=A.length;I<g;I++)Q[I]=A[I]}function AE(Q,A){let I=rt[A];I===void 0&&(I=new Int32Array(A),rt[A]=I);for(let g=0;g!==A;++g)I[g]=Q.allocateTextureUnit();return I}function rn(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1f(this.addr,A),I[0]=A)}function Sn(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(NI(I,A))return;Q.uniform2fv(this.addr,A),JI(I,A)}}function nn(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(Q.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(NI(I,A))return;Q.uniform3fv(this.addr,A),JI(I,A)}}function wn(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(NI(I,A))return;Q.uniform4fv(this.addr,A),JI(I,A)}}function cn(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(NI(I,A))return;Q.uniformMatrix2fv(this.addr,!1,A),JI(I,A)}else{if(NI(I,g))return;wt.set(g),Q.uniformMatrix2fv(this.addr,!1,wt),JI(I,g)}}function Gn(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(NI(I,A))return;Q.uniformMatrix3fv(this.addr,!1,A),JI(I,A)}else{if(NI(I,g))return;nt.set(g),Q.uniformMatrix3fv(this.addr,!1,nt),JI(I,g)}}function ln(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(NI(I,A))return;Q.uniformMatrix4fv(this.addr,!1,A),JI(I,A)}else{if(NI(I,g))return;St.set(g),Q.uniformMatrix4fv(this.addr,!1,St),JI(I,g)}}function kn(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1i(this.addr,A),I[0]=A)}function yn(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(NI(I,A))return;Q.uniform2iv(this.addr,A),JI(I,A)}}function Mn(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(NI(I,A))return;Q.uniform3iv(this.addr,A),JI(I,A)}}function Un(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(NI(I,A))return;Q.uniform4iv(this.addr,A),JI(I,A)}}function Kn(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1ui(this.addr,A),I[0]=A)}function Nn(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(NI(I,A))return;Q.uniform2uiv(this.addr,A),JI(I,A)}}function Jn(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(NI(I,A))return;Q.uniform3uiv(this.addr,A),JI(I,A)}}function Fn(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(NI(I,A))return;Q.uniform4uiv(this.addr,A),JI(I,A)}}function Rn(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C);const B=this.type===Q.SAMPLER_2D_SHADOW?tt:et;I.setTexture2D(A||B,C)}function pn(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||st,C)}function qn(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||Dt,C)}function dn(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||at,C)}function Yn(Q){switch(Q){case 5126:return rn;case 35664:return Sn;case 35665:return nn;case 35666:return wn;case 35674:return cn;case 35675:return Gn;case 35676:return ln;case 5124:case 35670:return kn;case 35667:case 35671:return yn;case 35668:case 35672:return Mn;case 35669:case 35673:return Un;case 5125:return Kn;case 36294:return Nn;case 36295:return Jn;case 36296:return Fn;case 35678:case 36198:case 36298:case 36306:case 35682:return Rn;case 35679:case 36299:case 36307:return pn;case 35680:case 36300:case 36308:case 36293:return qn;case 36289:case 36303:case 36311:case 36292:return dn}}function Ln(Q,A){Q.uniform1fv(this.addr,A)}function Hn(Q,A){const I=wB(A,this.size,2);Q.uniform2fv(this.addr,I)}function un(Q,A){const I=wB(A,this.size,3);Q.uniform3fv(this.addr,I)}function mn(Q,A){const I=wB(A,this.size,4);Q.uniform4fv(this.addr,I)}function fn(Q,A){const I=wB(A,this.size,4);Q.uniformMatrix2fv(this.addr,!1,I)}function Tn(Q,A){const I=wB(A,this.size,9);Q.uniformMatrix3fv(this.addr,!1,I)}function xn(Q,A){const I=wB(A,this.size,16);Q.uniformMatrix4fv(this.addr,!1,I)}function bn(Q,A){Q.uniform1iv(this.addr,A)}function On(Q,A){Q.uniform2iv(this.addr,A)}function _n(Q,A){Q.uniform3iv(this.addr,A)}function vn(Q,A){Q.uniform4iv(this.addr,A)}function Zn(Q,A){Q.uniform1uiv(this.addr,A)}function Wn(Q,A){Q.uniform2uiv(this.addr,A)}function Pn(Q,A){Q.uniform3uiv(this.addr,A)}function jn(Q,A){Q.uniform4uiv(this.addr,A)}function Vn(Q,A,I){const g=this.cache,C=A.length,B=AE(I,C);NI(g,B)||(Q.uniform1iv(this.addr,B),JI(g,B));for(let E=0;E!==C;++E)I.setTexture2D(A[E]||et,B[E])}function Xn(Q,A,I){const g=this.cache,C=A.length,B=AE(I,C);NI(g,B)||(Q.uniform1iv(this.addr,B),JI(g,B));for(let E=0;E!==C;++E)I.setTexture3D(A[E]||st,B[E])}function zn(Q,A,I){const g=this.cache,C=A.length,B=AE(I,C);NI(g,B)||(Q.uniform1iv(this.addr,B),JI(g,B));for(let E=0;E!==C;++E)I.setTextureCube(A[E]||Dt,B[E])}function $n(Q,A,I){const g=this.cache,C=A.length,B=AE(I,C);NI(g,B)||(Q.uniform1iv(this.addr,B),JI(g,B));for(let E=0;E!==C;++E)I.setTexture2DArray(A[E]||at,B[E])}function Aw(Q){switch(Q){case 5126:return Ln;case 35664:return Hn;case 35665:return un;case 35666:return mn;case 35674:return fn;case 35675:return Tn;case 35676:return xn;case 5124:case 35670:return bn;case 35667:case 35671:return On;case 35668:case 35672:return _n;case 35669:case 35673:return vn;case 5125:return Zn;case 36294:return Wn;case 36295:return Pn;case 36296:return jn;case 35678:case 36198:case 36298:case 36306:case 35682:return Vn;case 35679:case 36299:case 36307:return Xn;case 35680:case 36300:case 36308:case 36293:return zn;case 36289:case 36303:case 36311:case 36292:return $n}}class Iw{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=Yn(I.type)}}class gw{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=Aw(I.type)}}class Cw{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let B=0,E=C.length;B!==E;++B){const i=C[B];i.setValue(A,I[i.id],g)}}}const Di=/(\w+)(\])?(\[|\.)?/g;function ct(Q,A){Q.seq.push(A),Q.map[A.id]=A}function Bw(Q,A,I){const g=Q.name,C=g.length;for(Di.lastIndex=0;;){const B=Di.exec(g),E=Di.lastIndex;let i=B[1];const o=B[2]==="]",e=B[3];if(o&&(i=i|0),e===void 0||e==="["&&E+2===C){ct(I,e===void 0?new Iw(i,Q,A):new gw(i,Q,A));break}else{let t=I.map[i];t===void 0&&(t=new Cw(i),ct(I,t)),I=t}}}class IE{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const B=A.getActiveUniform(I,C),E=A.getUniformLocation(I,B.name);Bw(B,E,this)}}setValue(A,I,g,C){const B=this.map[I];B!==void 0&&B.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let B=0,E=I.length;B!==E;++B){const i=I[B],o=g[i.id];o.needsUpdate!==!1&&i.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,B=A.length;C!==B;++C){const E=A[C];E.id in I&&g.push(E)}return g}}function Gt(Q,A,I){const g=Q.createShader(A);return Q.shaderSource(g,I),Q.compileShader(g),g}const Qw=37297;let Ew=0;function iw(Q,A){const I=Q.split(`
`),g=[],C=Math.max(A-6,0),B=Math.min(A+6,I.length);for(let E=C;E<B;E++){const i=E+1;g.push(`${i===A?">":" "} ${i}: ${I[E]}`)}return g.join(`
`)}function ow(Q){const A=XA.getPrimaries(XA.workingColorSpace),I=XA.getPrimaries(Q);let g;switch(A===I?g="":A===JQ&&I===NQ?g="LinearDisplayP3ToLinearSRGB":A===NQ&&I===JQ&&(g="LinearSRGBToLinearDisplayP3"),Q){case MI:case UQ:return[g,"LinearTransferOETF"];case uI:case mE:return[g,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",Q),[g,"LinearTransferOETF"]}}function lt(Q,A,I){const g=Q.getShaderParameter(A,Q.COMPILE_STATUS),C=Q.getShaderInfoLog(A).trim();if(g&&C==="")return"";const B=/ERROR: 0:(\d+)/.exec(C);if(B){const E=parseInt(B[1]);return I.toUpperCase()+`

`+C+`

`+iw(Q.getShaderSource(A),E)}else return C}function ew(Q,A){const I=ow(A);return`vec4 ${Q}( vec4 value ) { return ${I[0]}( ${I[1]}( value ) ); }`}function tw(Q,A){let I;switch(A){case js:I="Linear";break;case Vs:I="Reinhard";break;case Xs:I="OptimizedCineon";break;case zs:I="ACESFilmic";break;case AD:I="AgX";break;case ID:I="Neutral";break;case $s:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+Q+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function aw(Q){return[Q.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",Q.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xB).join(`
`)}function sw(Q){const A=[];for(const I in Q){const g=Q[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function Dw(Q,A){const I={},g=Q.getProgramParameter(A,Q.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const B=Q.getActiveAttrib(A,C),E=B.name;let i=1;B.type===Q.FLOAT_MAT2&&(i=2),B.type===Q.FLOAT_MAT3&&(i=3),B.type===Q.FLOAT_MAT4&&(i=4),I[E]={type:B.type,location:Q.getAttribLocation(A,E),locationSize:i}}return I}function xB(Q){return Q!==""}function kt(Q,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return Q.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function yt(Q,A){return Q.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function hi(Q){return Q.replace(hw,Sw)}const rw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sw(Q,A){let I=LA[A];if(I===void 0){const g=rw.get(A);if(g!==void 0)I=LA[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return hi(I)}const nw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mt(Q){return Q.replace(nw,ww)}function ww(Q,A,I,g){let C="";for(let B=parseInt(A);B<parseInt(I);B++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+B+" ]").replace(/UNROLLED_LOOP_INDEX/g,B);return C}function Ut(Q){let A=`precision ${Q.precision} float;
	precision ${Q.precision} int;
	precision ${Q.precision} sampler2D;
	precision ${Q.precision} samplerCube;
	precision ${Q.precision} sampler3D;
	precision ${Q.precision} sampler2DArray;
	precision ${Q.precision} sampler2DShadow;
	precision ${Q.precision} samplerCubeShadow;
	precision ${Q.precision} sampler2DArrayShadow;
	precision ${Q.precision} isampler2D;
	precision ${Q.precision} isampler3D;
	precision ${Q.precision} isamplerCube;
	precision ${Q.precision} isampler2DArray;
	precision ${Q.precision} usampler2D;
	precision ${Q.precision} usampler3D;
	precision ${Q.precision} usamplerCube;
	precision ${Q.precision} usampler2DArray;
	`;return Q.precision==="highp"?A+=`
#define HIGH_PRECISION`:Q.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:Q.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function cw(Q){let A="SHADOWMAP_TYPE_BASIC";return Q.shadowMapType===po?A="SHADOWMAP_TYPE_PCF":Q.shadowMapType===ls?A="SHADOWMAP_TYPE_PCF_SOFT":Q.shadowMapType===Lg&&(A="SHADOWMAP_TYPE_VSM"),A}function Gw(Q){let A="ENVMAP_TYPE_CUBE";if(Q.envMap)switch(Q.envMapMode){case OC:case _C:A="ENVMAP_TYPE_CUBE";break;case lQ:A="ENVMAP_TYPE_CUBE_UV";break}return A}function lw(Q){let A="ENVMAP_MODE_REFLECTION";if(Q.envMap)switch(Q.envMapMode){case _C:A="ENVMAP_MODE_REFRACTION";break}return A}function kw(Q){let A="ENVMAP_BLENDING_NONE";if(Q.envMap)switch(Q.combine){case NE:A="ENVMAP_BLENDING_MULTIPLY";break;case Ws:A="ENVMAP_BLENDING_MIX";break;case Ps:A="ENVMAP_BLENDING_ADD";break}return A}function yw(Q){const A=Q.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function Mw(Q,A,I,g){const C=Q.getContext(),B=I.defines;let E=I.vertexShader,i=I.fragmentShader;const o=cw(I),e=Gw(I),t=lw(I),a=kw(I),s=yw(I),D=aw(I),n=sw(B),w=C.createProgram();let S,h,k=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(S=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,n].filter(xB).join(`
`),S.length>0&&(S+=`
`),h=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,n].filter(xB).join(`
`),h.length>0&&(h+=`
`)):(S=[Ut(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,n,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.instancingMorph?"#define USE_INSTANCING_MORPH":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xB).join(`
`),h=[Ut(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,n,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.envMap?"#define "+t:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==gC?"#define TONE_MAPPING":"",I.toneMapping!==gC?LA.tonemapping_pars_fragment:"",I.toneMapping!==gC?tw("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",LA.colorspace_pars_fragment,ew("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(xB).join(`
`)),E=hi(E),E=kt(E,I),E=yt(E,I),i=hi(i),i=kt(i,I),i=yt(i,I),E=Mt(E),i=Mt(i),I.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,S=[D,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,h=["#define varying in",I.glslVersion===ke?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===ke?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const c=k+S+E,U=k+h+i,d=Gt(C,C.VERTEX_SHADER,c),J=Gt(C,C.FRAGMENT_SHADER,U);C.attachShader(w,d),C.attachShader(w,J),I.index0AttributeName!==void 0?C.bindAttribLocation(w,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(w,0,"position"),C.linkProgram(w);function K(m){if(Q.debug.checkShaderErrors){const x=C.getProgramInfoLog(w).trim(),p=C.getShaderInfoLog(d).trim(),v=C.getShaderInfoLog(J).trim();let W=!0,j=!0;if(C.getProgramParameter(w,C.LINK_STATUS)===!1)if(W=!1,typeof Q.debug.onShaderError=="function")Q.debug.onShaderError(C,w,d,J);else{const gA=lt(C,d,"vertex"),Z=lt(C,J,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(w,C.VALIDATE_STATUS)+`

Material Name: `+m.name+`
Material Type: `+m.type+`

Program Info Log: `+x+`
`+gA+`
`+Z)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(p===""||v==="")&&(j=!1);j&&(m.diagnostics={runnable:W,programLog:x,vertexShader:{log:p,prefix:S},fragmentShader:{log:v,prefix:h}})}C.deleteShader(d),C.deleteShader(J),H=new IE(C,w),y=Dw(C,w)}let H;this.getUniforms=function(){return H===void 0&&K(this),H};let y;this.getAttributes=function(){return y===void 0&&K(this),y};let G=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=C.getProgramParameter(w,Qw)),G},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(w),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=Ew++,this.cacheKey=A,this.usedTimes=1,this.program=w,this.vertexShader=d,this.fragmentShader=J,this}let Uw=0;class Kw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),B=this._getShaderStage(g),E=this._getShaderCacheForMaterial(A);return E.has(C)===!1&&(E.add(C),C.usedTimes++),E.has(B)===!1&&(E.add(B),B.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new Nw(A),I.set(A,g)),g}}class Nw{constructor(A){this.id=Uw++,this.code=A,this.usedTimes=0}}function Jw(Q,A,I,g,C,B,E){const i=new Ye,o=new Kw,e=new Set,t=[],a=C.logarithmicDepthBuffer,s=C.vertexTextures;let D=C.precision;const n={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(y){return e.add(y),y===0?"uv":`uv${y}`}function S(y,G,m,x,p){const v=x.fog,W=p.geometry,j=y.isMeshStandardMaterial?x.environment:null,gA=(y.isMeshStandardMaterial?I:A).get(y.envMap||j),Z=gA&&gA.mapping===lQ?gA.image.height:null,z=n[y.type];y.precision!==null&&(D=C.getMaxPrecision(y.precision),D!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",D,"instead."));const BA=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,FA=BA!==void 0?BA.length:0;let ZA=0;W.morphAttributes.position!==void 0&&(ZA=1),W.morphAttributes.normal!==void 0&&(ZA=2),W.morphAttributes.color!==void 0&&(ZA=3);let oI,P,CA,sA;if(z){const _I=Ug[z];oI=_I.vertexShader,P=_I.fragmentShader}else oI=y.vertexShader,P=y.fragmentShader,o.update(y),CA=o.getVertexShaderID(y),sA=o.getFragmentShaderID(y);const eA=Q.getRenderTarget(),uA=p.isInstancedMesh===!0,xA=p.isBatchedMesh===!0,jA=!!y.map,T=!!y.matcap,_A=!!gA,JA=!!y.aoMap,RI=!!y.lightMap,RA=!!y.bumpMap,EI=!!y.normalMap,N=!!y.displacementMap,l=!!y.emissiveMap,_=!!y.metalnessMap,V=!!y.roughnessMap,$=y.anisotropy>0,X=y.clearcoat>0,UA=y.iridescence>0,IA=y.sheen>0,cA=y.transmission>0,yA=$&&!!y.anisotropyMap,oA=X&&!!y.clearcoatMap,DA=X&&!!y.clearcoatNormalMap,pA=X&&!!y.clearcoatRoughnessMap,hA=UA&&!!y.iridescenceMap,rA=UA&&!!y.iridescenceThicknessMap,PA=IA&&!!y.sheenColorMap,VA=IA&&!!y.sheenRoughnessMap,gI=!!y.specularMap,AI=!!y.specularColorMap,hI=!!y.specularIntensityMap,SA=cA&&!!y.transmissionMap,F=cA&&!!y.thicknessMap,QA=!!y.gradientMap,AA=!!y.alphaMap,qA=y.alphaTest>0,lA=!!y.alphaHash,eI=!!y.extensions;let rI=gC;y.toneMapped&&(eA===null||eA.isXRRenderTarget===!0)&&(rI=Q.toneMapping);const SI={shaderID:z,shaderType:y.type,shaderName:y.name,vertexShader:oI,fragmentShader:P,defines:y.defines,customVertexShaderID:CA,customFragmentShaderID:sA,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:D,batching:xA,instancing:uA,instancingColor:uA&&p.instanceColor!==null,instancingMorph:uA&&p.morphTexture!==null,supportsVertexTextures:s,outputColorSpace:eA===null?Q.outputColorSpace:eA.isXRRenderTarget===!0?eA.texture.colorSpace:MI,alphaToCoverage:!!y.alphaToCoverage,map:jA,matcap:T,envMap:_A,envMapMode:_A&&gA.mapping,envMapCubeUVHeight:Z,aoMap:JA,lightMap:RI,bumpMap:RA,normalMap:EI,displacementMap:s&&N,emissiveMap:l,normalMapObjectSpace:EI&&y.normalMapType===wD,normalMapTangentSpace:EI&&y.normalMapType===uE,metalnessMap:_,roughnessMap:V,anisotropy:$,anisotropyMap:yA,clearcoat:X,clearcoatMap:oA,clearcoatNormalMap:DA,clearcoatRoughnessMap:pA,iridescence:UA,iridescenceMap:hA,iridescenceThicknessMap:rA,sheen:IA,sheenColorMap:PA,sheenRoughnessMap:VA,specularMap:gI,specularColorMap:AI,specularIntensityMap:hI,transmission:cA,transmissionMap:SA,thicknessMap:F,gradientMap:QA,opaque:y.transparent===!1&&y.blending===bC&&y.alphaToCoverage===!1,alphaMap:AA,alphaTest:qA,alphaHash:lA,combine:y.combine,mapUv:jA&&w(y.map.channel),aoMapUv:JA&&w(y.aoMap.channel),lightMapUv:RI&&w(y.lightMap.channel),bumpMapUv:RA&&w(y.bumpMap.channel),normalMapUv:EI&&w(y.normalMap.channel),displacementMapUv:N&&w(y.displacementMap.channel),emissiveMapUv:l&&w(y.emissiveMap.channel),metalnessMapUv:_&&w(y.metalnessMap.channel),roughnessMapUv:V&&w(y.roughnessMap.channel),anisotropyMapUv:yA&&w(y.anisotropyMap.channel),clearcoatMapUv:oA&&w(y.clearcoatMap.channel),clearcoatNormalMapUv:DA&&w(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pA&&w(y.clearcoatRoughnessMap.channel),iridescenceMapUv:hA&&w(y.iridescenceMap.channel),iridescenceThicknessMapUv:rA&&w(y.iridescenceThicknessMap.channel),sheenColorMapUv:PA&&w(y.sheenColorMap.channel),sheenRoughnessMapUv:VA&&w(y.sheenRoughnessMap.channel),specularMapUv:gI&&w(y.specularMap.channel),specularColorMapUv:AI&&w(y.specularColorMap.channel),specularIntensityMapUv:hI&&w(y.specularIntensityMap.channel),transmissionMapUv:SA&&w(y.transmissionMap.channel),thicknessMapUv:F&&w(y.thicknessMap.channel),alphaMapUv:AA&&w(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(EI||$),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:p.isPoints===!0&&!!W.attributes.uv&&(jA||AA),fog:!!v,useFog:y.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:a,skinning:p.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:FA,morphTextureStride:ZA,numDirLights:G.directional.length,numPointLights:G.point.length,numSpotLights:G.spot.length,numSpotLightMaps:G.spotLightMap.length,numRectAreaLights:G.rectArea.length,numHemiLights:G.hemi.length,numDirLightShadows:G.directionalShadowMap.length,numPointLightShadows:G.pointShadowMap.length,numSpotLightShadows:G.spotShadowMap.length,numSpotLightShadowsWithMaps:G.numSpotLightShadowsWithMaps,numLightProbes:G.numLightProbes,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:y.dithering,shadowMapEnabled:Q.shadowMap.enabled&&m.length>0,shadowMapType:Q.shadowMap.type,toneMapping:rI,useLegacyLights:Q._useLegacyLights,decodeVideoTexture:jA&&y.map.isVideoTexture===!0&&XA.getTransfer(y.map.colorSpace)===tI,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===tg,flipSided:y.side===$I,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:eI&&y.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:eI&&y.extensions.multiDraw===!0&&g.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return SI.vertexUv1s=e.has(1),SI.vertexUv2s=e.has(2),SI.vertexUv3s=e.has(3),e.clear(),SI}function h(y){const G=[];if(y.shaderID?G.push(y.shaderID):(G.push(y.customVertexShaderID),G.push(y.customFragmentShaderID)),y.defines!==void 0)for(const m in y.defines)G.push(m),G.push(y.defines[m]);return y.isRawShaderMaterial===!1&&(k(G,y),c(G,y),G.push(Q.outputColorSpace)),G.push(y.customProgramCacheKey),G.join()}function k(y,G){y.push(G.precision),y.push(G.outputColorSpace),y.push(G.envMapMode),y.push(G.envMapCubeUVHeight),y.push(G.mapUv),y.push(G.alphaMapUv),y.push(G.lightMapUv),y.push(G.aoMapUv),y.push(G.bumpMapUv),y.push(G.normalMapUv),y.push(G.displacementMapUv),y.push(G.emissiveMapUv),y.push(G.metalnessMapUv),y.push(G.roughnessMapUv),y.push(G.anisotropyMapUv),y.push(G.clearcoatMapUv),y.push(G.clearcoatNormalMapUv),y.push(G.clearcoatRoughnessMapUv),y.push(G.iridescenceMapUv),y.push(G.iridescenceThicknessMapUv),y.push(G.sheenColorMapUv),y.push(G.sheenRoughnessMapUv),y.push(G.specularMapUv),y.push(G.specularColorMapUv),y.push(G.specularIntensityMapUv),y.push(G.transmissionMapUv),y.push(G.thicknessMapUv),y.push(G.combine),y.push(G.fogExp2),y.push(G.sizeAttenuation),y.push(G.morphTargetsCount),y.push(G.morphAttributeCount),y.push(G.numDirLights),y.push(G.numPointLights),y.push(G.numSpotLights),y.push(G.numSpotLightMaps),y.push(G.numHemiLights),y.push(G.numRectAreaLights),y.push(G.numDirLightShadows),y.push(G.numPointLightShadows),y.push(G.numSpotLightShadows),y.push(G.numSpotLightShadowsWithMaps),y.push(G.numLightProbes),y.push(G.shadowMapType),y.push(G.toneMapping),y.push(G.numClippingPlanes),y.push(G.numClipIntersection),y.push(G.depthPacking)}function c(y,G){i.disableAll(),G.supportsVertexTextures&&i.enable(0),G.instancing&&i.enable(1),G.instancingColor&&i.enable(2),G.instancingMorph&&i.enable(3),G.matcap&&i.enable(4),G.envMap&&i.enable(5),G.normalMapObjectSpace&&i.enable(6),G.normalMapTangentSpace&&i.enable(7),G.clearcoat&&i.enable(8),G.iridescence&&i.enable(9),G.alphaTest&&i.enable(10),G.vertexColors&&i.enable(11),G.vertexAlphas&&i.enable(12),G.vertexUv1s&&i.enable(13),G.vertexUv2s&&i.enable(14),G.vertexUv3s&&i.enable(15),G.vertexTangents&&i.enable(16),G.anisotropy&&i.enable(17),G.alphaHash&&i.enable(18),G.batching&&i.enable(19),y.push(i.mask),i.disableAll(),G.fog&&i.enable(0),G.useFog&&i.enable(1),G.flatShading&&i.enable(2),G.logarithmicDepthBuffer&&i.enable(3),G.skinning&&i.enable(4),G.morphTargets&&i.enable(5),G.morphNormals&&i.enable(6),G.morphColors&&i.enable(7),G.premultipliedAlpha&&i.enable(8),G.shadowMapEnabled&&i.enable(9),G.useLegacyLights&&i.enable(10),G.doubleSided&&i.enable(11),G.flipSided&&i.enable(12),G.useDepthPacking&&i.enable(13),G.dithering&&i.enable(14),G.transmission&&i.enable(15),G.sheen&&i.enable(16),G.opaque&&i.enable(17),G.pointsUvs&&i.enable(18),G.decodeVideoTexture&&i.enable(19),G.alphaToCoverage&&i.enable(20),y.push(i.mask)}function U(y){const G=n[y.type];let m;if(G){const x=Ug[G];m=th.clone(x.uniforms)}else m=y.uniforms;return m}function d(y,G){let m;for(let x=0,p=t.length;x<p;x++){const v=t[x];if(v.cacheKey===G){m=v,++m.usedTimes;break}}return m===void 0&&(m=new Mw(Q,G,y,B),t.push(m)),m}function J(y){if(--y.usedTimes===0){const G=t.indexOf(y);t[G]=t[t.length-1],t.pop(),y.destroy()}}function K(y){o.remove(y)}function H(){o.dispose()}return{getParameters:S,getProgramCacheKey:h,getUniforms:U,acquireProgram:d,releaseProgram:J,releaseShaderCache:K,programs:t,dispose:H}}function Fw(){let Q=new WeakMap;function A(B){let E=Q.get(B);return E===void 0&&(E={},Q.set(B,E)),E}function I(B){Q.delete(B)}function g(B,E,i){Q.get(B)[E]=i}function C(){Q=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function Rw(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.material.id!==A.material.id?Q.material.id-A.material.id:Q.z!==A.z?Q.z-A.z:Q.id-A.id}function Kt(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.z!==A.z?A.z-Q.z:Q.id-A.id}function Nt(){const Q=[];let A=0;const I=[],g=[],C=[];function B(){A=0,I.length=0,g.length=0,C.length=0}function E(a,s,D,n,w,S){let h=Q[A];return h===void 0?(h={id:a.id,object:a,geometry:s,material:D,groupOrder:n,renderOrder:a.renderOrder,z:w,group:S},Q[A]=h):(h.id=a.id,h.object=a,h.geometry=s,h.material=D,h.groupOrder=n,h.renderOrder=a.renderOrder,h.z=w,h.group=S),A++,h}function i(a,s,D,n,w,S){const h=E(a,s,D,n,w,S);D.transmission>0?g.push(h):D.transparent===!0?C.push(h):I.push(h)}function o(a,s,D,n,w,S){const h=E(a,s,D,n,w,S);D.transmission>0?g.unshift(h):D.transparent===!0?C.unshift(h):I.unshift(h)}function e(a,s){I.length>1&&I.sort(a||Rw),g.length>1&&g.sort(s||Kt),C.length>1&&C.sort(s||Kt)}function t(){for(let a=A,s=Q.length;a<s;a++){const D=Q[a];if(D.id===null)break;D.id=null,D.object=null,D.geometry=null,D.material=null,D.group=null}}return{opaque:I,transmissive:g,transparent:C,init:B,push:i,unshift:o,finish:t,sort:e}}function pw(){let Q=new WeakMap;function A(g,C){const B=Q.get(g);let E;return B===void 0?(E=new Nt,Q.set(g,[E])):C>=B.length?(E=new Nt,B.push(E)):E=B[C],E}function I(){Q=new WeakMap}return{get:A,dispose:I}}function qw(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new q,color:new kA};break;case"SpotLight":I={position:new q,direction:new q,color:new kA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new q,color:new kA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new q,skyColor:new kA,groundColor:new kA};break;case"RectAreaLight":I={color:new kA,position:new q,halfWidth:new q,halfHeight:new q};break}return Q[A.id]=I,I}}}function dw(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new KA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new KA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new KA,shadowCameraNear:1,shadowCameraFar:1e3};break}return Q[A.id]=I,I}}}let Yw=0;function Lw(Q,A){return(A.castShadow?2:0)-(Q.castShadow?2:0)+(A.map?1:0)-(Q.map?1:0)}function Hw(Q){const A=new qw,I=dw(),g={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)g.probe.push(new q);const C=new q,B=new dA,E=new dA;function i(e,t){let a=0,s=0,D=0;for(let m=0;m<9;m++)g.probe[m].set(0,0,0);let n=0,w=0,S=0,h=0,k=0,c=0,U=0,d=0,J=0,K=0,H=0;e.sort(Lw);const y=t===!0?Math.PI:1;for(let m=0,x=e.length;m<x;m++){const p=e[m],v=p.color,W=p.intensity,j=p.distance,gA=p.shadow&&p.shadow.map?p.shadow.map.texture:null;if(p.isAmbientLight)a+=v.r*W*y,s+=v.g*W*y,D+=v.b*W*y;else if(p.isLightProbe){for(let Z=0;Z<9;Z++)g.probe[Z].addScaledVector(p.sh.coefficients[Z],W);H++}else if(p.isDirectionalLight){const Z=A.get(p);if(Z.color.copy(p.color).multiplyScalar(p.intensity*y),p.castShadow){const z=p.shadow,BA=I.get(p);BA.shadowBias=z.bias,BA.shadowNormalBias=z.normalBias,BA.shadowRadius=z.radius,BA.shadowMapSize=z.mapSize,g.directionalShadow[n]=BA,g.directionalShadowMap[n]=gA,g.directionalShadowMatrix[n]=p.shadow.matrix,c++}g.directional[n]=Z,n++}else if(p.isSpotLight){const Z=A.get(p);Z.position.setFromMatrixPosition(p.matrixWorld),Z.color.copy(v).multiplyScalar(W*y),Z.distance=j,Z.coneCos=Math.cos(p.angle),Z.penumbraCos=Math.cos(p.angle*(1-p.penumbra)),Z.decay=p.decay,g.spot[S]=Z;const z=p.shadow;if(p.map&&(g.spotLightMap[J]=p.map,J++,z.updateMatrices(p),p.castShadow&&K++),g.spotLightMatrix[S]=z.matrix,p.castShadow){const BA=I.get(p);BA.shadowBias=z.bias,BA.shadowNormalBias=z.normalBias,BA.shadowRadius=z.radius,BA.shadowMapSize=z.mapSize,g.spotShadow[S]=BA,g.spotShadowMap[S]=gA,d++}S++}else if(p.isRectAreaLight){const Z=A.get(p);Z.color.copy(v).multiplyScalar(W),Z.halfWidth.set(p.width*.5,0,0),Z.halfHeight.set(0,p.height*.5,0),g.rectArea[h]=Z,h++}else if(p.isPointLight){const Z=A.get(p);if(Z.color.copy(p.color).multiplyScalar(p.intensity*y),Z.distance=p.distance,Z.decay=p.decay,p.castShadow){const z=p.shadow,BA=I.get(p);BA.shadowBias=z.bias,BA.shadowNormalBias=z.normalBias,BA.shadowRadius=z.radius,BA.shadowMapSize=z.mapSize,BA.shadowCameraNear=z.camera.near,BA.shadowCameraFar=z.camera.far,g.pointShadow[w]=BA,g.pointShadowMap[w]=gA,g.pointShadowMatrix[w]=p.shadow.matrix,U++}g.point[w]=Z,w++}else if(p.isHemisphereLight){const Z=A.get(p);Z.skyColor.copy(p.color).multiplyScalar(W*y),Z.groundColor.copy(p.groundColor).multiplyScalar(W*y),g.hemi[k]=Z,k++}}h>0&&(Q.has("OES_texture_float_linear")===!0?(g.rectAreaLTC1=iA.LTC_FLOAT_1,g.rectAreaLTC2=iA.LTC_FLOAT_2):(g.rectAreaLTC1=iA.LTC_HALF_1,g.rectAreaLTC2=iA.LTC_HALF_2)),g.ambient[0]=a,g.ambient[1]=s,g.ambient[2]=D;const G=g.hash;(G.directionalLength!==n||G.pointLength!==w||G.spotLength!==S||G.rectAreaLength!==h||G.hemiLength!==k||G.numDirectionalShadows!==c||G.numPointShadows!==U||G.numSpotShadows!==d||G.numSpotMaps!==J||G.numLightProbes!==H)&&(g.directional.length=n,g.spot.length=S,g.rectArea.length=h,g.point.length=w,g.hemi.length=k,g.directionalShadow.length=c,g.directionalShadowMap.length=c,g.pointShadow.length=U,g.pointShadowMap.length=U,g.spotShadow.length=d,g.spotShadowMap.length=d,g.directionalShadowMatrix.length=c,g.pointShadowMatrix.length=U,g.spotLightMatrix.length=d+J-K,g.spotLightMap.length=J,g.numSpotLightShadowsWithMaps=K,g.numLightProbes=H,G.directionalLength=n,G.pointLength=w,G.spotLength=S,G.rectAreaLength=h,G.hemiLength=k,G.numDirectionalShadows=c,G.numPointShadows=U,G.numSpotShadows=d,G.numSpotMaps=J,G.numLightProbes=H,g.version=Yw++)}function o(e,t){let a=0,s=0,D=0,n=0,w=0;const S=t.matrixWorldInverse;for(let h=0,k=e.length;h<k;h++){const c=e[h];if(c.isDirectionalLight){const U=g.directional[a];U.direction.setFromMatrixPosition(c.matrixWorld),C.setFromMatrixPosition(c.target.matrixWorld),U.direction.sub(C),U.direction.transformDirection(S),a++}else if(c.isSpotLight){const U=g.spot[D];U.position.setFromMatrixPosition(c.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(c.matrixWorld),C.setFromMatrixPosition(c.target.matrixWorld),U.direction.sub(C),U.direction.transformDirection(S),D++}else if(c.isRectAreaLight){const U=g.rectArea[n];U.position.setFromMatrixPosition(c.matrixWorld),U.position.applyMatrix4(S),E.identity(),B.copy(c.matrixWorld),B.premultiply(S),E.extractRotation(B),U.halfWidth.set(c.width*.5,0,0),U.halfHeight.set(0,c.height*.5,0),U.halfWidth.applyMatrix4(E),U.halfHeight.applyMatrix4(E),n++}else if(c.isPointLight){const U=g.point[s];U.position.setFromMatrixPosition(c.matrixWorld),U.position.applyMatrix4(S),s++}else if(c.isHemisphereLight){const U=g.hemi[w];U.direction.setFromMatrixPosition(c.matrixWorld),U.direction.transformDirection(S),w++}}}return{setup:i,setupView:o,state:g}}function Jt(Q){const A=new Hw(Q),I=[],g=[];function C(){I.length=0,g.length=0}function B(e){I.push(e)}function E(e){g.push(e)}function i(e){A.setup(I,e)}function o(e){A.setupView(I,e)}return{init:C,state:{lightsArray:I,shadowsArray:g,lights:A,transmissionRenderTarget:null},setupLights:i,setupLightsView:o,pushLight:B,pushShadow:E}}function uw(Q){let A=new WeakMap;function I(C,B=0){const E=A.get(C);let i;return E===void 0?(i=new Jt(Q),A.set(C,[i])):B>=E.length?(i=new Jt(Q),E.push(i)):i=E[B],i}function g(){A=new WeakMap}return{get:I,dispose:g}}class mw extends ng{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class fw extends ng{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const Tw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bw(Q,A,I){let g=new Qi;const C=new KA,B=new KA,E=new CI,i=new mw({depthPacking:nD}),o=new fw,e={},t=I.maxTextureSize,a={[Hg]:$I,[$I]:Hg,[tg]:tg},s=new vg({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new KA},radius:{value:4}},vertexShader:Tw,fragmentShader:xw}),D=s.clone();D.defines.HORIZONTAL_PASS=1;const n=new jI;n.setAttribute("position",new KI(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new wI(n,s),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let h=this.type;this.render=function(J,K,H){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||J.length===0)return;const y=Q.getRenderTarget(),G=Q.getActiveCubeFace(),m=Q.getActiveMipmapLevel(),x=Q.state;x.setBlending(IC),x.buffers.color.setClear(1,1,1,1),x.buffers.depth.setTest(!0),x.setScissorTest(!1);const p=h!==Lg&&this.type===Lg,v=h===Lg&&this.type!==Lg;for(let W=0,j=J.length;W<j;W++){const gA=J[W],Z=gA.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",gA,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;C.copy(Z.mapSize);const z=Z.getFrameExtents();if(C.multiply(z),B.copy(Z.mapSize),(C.x>t||C.y>t)&&(C.x>t&&(B.x=Math.floor(t/z.x),C.x=B.x*z.x,Z.mapSize.x=B.x),C.y>t&&(B.y=Math.floor(t/z.y),C.y=B.y*z.y,Z.mapSize.y=B.y)),Z.map===null||p===!0||v===!0){const FA=this.type!==Lg?{minFilter:HI,magFilter:HI}:{};Z.map!==null&&Z.map.dispose(),Z.map=new kC(C.x,C.y,FA),Z.map.texture.name=gA.name+".shadowMap",Z.camera.updateProjectionMatrix()}Q.setRenderTarget(Z.map),Q.clear();const BA=Z.getViewportCount();for(let FA=0;FA<BA;FA++){const ZA=Z.getViewport(FA);E.set(B.x*ZA.x,B.y*ZA.y,B.x*ZA.z,B.y*ZA.w),x.viewport(E),Z.updateMatrices(gA,FA),g=Z.getFrustum(),U(K,H,Z.camera,gA,this.type)}Z.isPointLightShadow!==!0&&this.type===Lg&&k(Z,H),Z.needsUpdate=!1}h=this.type,S.needsUpdate=!1,Q.setRenderTarget(y,G,m)};function k(J,K){const H=A.update(w);s.defines.VSM_SAMPLES!==J.blurSamples&&(s.defines.VSM_SAMPLES=J.blurSamples,D.defines.VSM_SAMPLES=J.blurSamples,s.needsUpdate=!0,D.needsUpdate=!0),J.mapPass===null&&(J.mapPass=new kC(C.x,C.y)),s.uniforms.shadow_pass.value=J.map.texture,s.uniforms.resolution.value=J.mapSize,s.uniforms.radius.value=J.radius,Q.setRenderTarget(J.mapPass),Q.clear(),Q.renderBufferDirect(K,null,H,s,w,null),D.uniforms.shadow_pass.value=J.mapPass.texture,D.uniforms.resolution.value=J.mapSize,D.uniforms.radius.value=J.radius,Q.setRenderTarget(J.map),Q.clear(),Q.renderBufferDirect(K,null,H,D,w,null)}function c(J,K,H,y){let G=null;const m=H.isPointLight===!0?J.customDistanceMaterial:J.customDepthMaterial;if(m!==void 0)G=m;else if(G=H.isPointLight===!0?o:i,Q.localClippingEnabled&&K.clipShadows===!0&&Array.isArray(K.clippingPlanes)&&K.clippingPlanes.length!==0||K.displacementMap&&K.displacementScale!==0||K.alphaMap&&K.alphaTest>0||K.map&&K.alphaTest>0){const x=G.uuid,p=K.uuid;let v=e[x];v===void 0&&(v={},e[x]=v);let W=v[p];W===void 0&&(W=G.clone(),v[p]=W,K.addEventListener("dispose",d)),G=W}if(G.visible=K.visible,G.wireframe=K.wireframe,y===Lg?G.side=K.shadowSide!==null?K.shadowSide:K.side:G.side=K.shadowSide!==null?K.shadowSide:a[K.side],G.alphaMap=K.alphaMap,G.alphaTest=K.alphaTest,G.map=K.map,G.clipShadows=K.clipShadows,G.clippingPlanes=K.clippingPlanes,G.clipIntersection=K.clipIntersection,G.displacementMap=K.displacementMap,G.displacementScale=K.displacementScale,G.displacementBias=K.displacementBias,G.wireframeLinewidth=K.wireframeLinewidth,G.linewidth=K.linewidth,H.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const x=Q.properties.get(G);x.light=H}return G}function U(J,K,H,y,G){if(J.visible===!1)return;if(J.layers.test(K.layers)&&(J.isMesh||J.isLine||J.isPoints)&&(J.castShadow||J.receiveShadow&&G===Lg)&&(!J.frustumCulled||g.intersectsObject(J))){J.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,J.matrixWorld);const x=A.update(J),p=J.material;if(Array.isArray(p)){const v=x.groups;for(let W=0,j=v.length;W<j;W++){const gA=v[W],Z=p[gA.materialIndex];if(Z&&Z.visible){const z=c(J,Z,y,G);J.onBeforeShadow(Q,J,K,H,x,z,gA),Q.renderBufferDirect(H,null,x,z,J,gA),J.onAfterShadow(Q,J,K,H,x,z,gA)}}}else if(p.visible){const v=c(J,p,y,G);J.onBeforeShadow(Q,J,K,H,x,v,null),Q.renderBufferDirect(H,null,x,v,J,null),J.onAfterShadow(Q,J,K,H,x,v,null)}}const m=J.children;for(let x=0,p=m.length;x<p;x++)U(m[x],K,H,y,G)}function d(J){J.target.removeEventListener("dispose",d);for(const K in e){const H=e[K],y=J.target.uuid;y in H&&(H[y].dispose(),delete H[y])}}}function Ow(Q){function A(){let F=!1;const QA=new CI;let AA=null;const qA=new CI(0,0,0,0);return{setMask:function(lA){AA!==lA&&!F&&(Q.colorMask(lA,lA,lA,lA),AA=lA)},setLocked:function(lA){F=lA},setClear:function(lA,eI,rI,SI,_I){_I===!0&&(lA*=SI,eI*=SI,rI*=SI),QA.set(lA,eI,rI,SI),qA.equals(QA)===!1&&(Q.clearColor(lA,eI,rI,SI),qA.copy(QA))},reset:function(){F=!1,AA=null,qA.set(-1,0,0,0)}}}function I(){let F=!1,QA=null,AA=null,qA=null;return{setTest:function(lA){lA?sA(Q.DEPTH_TEST):eA(Q.DEPTH_TEST)},setMask:function(lA){QA!==lA&&!F&&(Q.depthMask(lA),QA=lA)},setFunc:function(lA){if(AA!==lA){switch(lA){case Ts:Q.depthFunc(Q.NEVER);break;case xs:Q.depthFunc(Q.ALWAYS);break;case bs:Q.depthFunc(Q.LESS);break;case cQ:Q.depthFunc(Q.LEQUAL);break;case Os:Q.depthFunc(Q.EQUAL);break;case _s:Q.depthFunc(Q.GEQUAL);break;case vs:Q.depthFunc(Q.GREATER);break;case Zs:Q.depthFunc(Q.NOTEQUAL);break;default:Q.depthFunc(Q.LEQUAL)}AA=lA}},setLocked:function(lA){F=lA},setClear:function(lA){qA!==lA&&(Q.clearDepth(lA),qA=lA)},reset:function(){F=!1,QA=null,AA=null,qA=null}}}function g(){let F=!1,QA=null,AA=null,qA=null,lA=null,eI=null,rI=null,SI=null,_I=null;return{setTest:function(sI){F||(sI?sA(Q.STENCIL_TEST):eA(Q.STENCIL_TEST))},setMask:function(sI){QA!==sI&&!F&&(Q.stencilMask(sI),QA=sI)},setFunc:function(sI,pg,qg){(AA!==sI||qA!==pg||lA!==qg)&&(Q.stencilFunc(sI,pg,qg),AA=sI,qA=pg,lA=qg)},setOp:function(sI,pg,qg){(eI!==sI||rI!==pg||SI!==qg)&&(Q.stencilOp(sI,pg,qg),eI=sI,rI=pg,SI=qg)},setLocked:function(sI){F=sI},setClear:function(sI){_I!==sI&&(Q.clearStencil(sI),_I=sI)},reset:function(){F=!1,QA=null,AA=null,qA=null,lA=null,eI=null,rI=null,SI=null,_I=null}}}const C=new A,B=new I,E=new g,i=new WeakMap,o=new WeakMap;let e={},t={},a=new WeakMap,s=[],D=null,n=!1,w=null,S=null,h=null,k=null,c=null,U=null,d=null,J=new kA(0,0,0),K=0,H=!1,y=null,G=null,m=null,x=null,p=null;const v=Q.getParameter(Q.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const gA=Q.getParameter(Q.VERSION);gA.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(gA)[1]),W=j>=1):gA.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(gA)[1]),W=j>=2);let Z=null,z={};const BA=Q.getParameter(Q.SCISSOR_BOX),FA=Q.getParameter(Q.VIEWPORT),ZA=new CI().fromArray(BA),oI=new CI().fromArray(FA);function P(F,QA,AA,qA){const lA=new Uint8Array(4),eI=Q.createTexture();Q.bindTexture(F,eI),Q.texParameteri(F,Q.TEXTURE_MIN_FILTER,Q.NEAREST),Q.texParameteri(F,Q.TEXTURE_MAG_FILTER,Q.NEAREST);for(let rI=0;rI<AA;rI++)F===Q.TEXTURE_3D||F===Q.TEXTURE_2D_ARRAY?Q.texImage3D(QA,0,Q.RGBA,1,1,qA,0,Q.RGBA,Q.UNSIGNED_BYTE,lA):Q.texImage2D(QA+rI,0,Q.RGBA,1,1,0,Q.RGBA,Q.UNSIGNED_BYTE,lA);return eI}const CA={};CA[Q.TEXTURE_2D]=P(Q.TEXTURE_2D,Q.TEXTURE_2D,1),CA[Q.TEXTURE_CUBE_MAP]=P(Q.TEXTURE_CUBE_MAP,Q.TEXTURE_CUBE_MAP_POSITIVE_X,6),CA[Q.TEXTURE_2D_ARRAY]=P(Q.TEXTURE_2D_ARRAY,Q.TEXTURE_2D_ARRAY,1,1),CA[Q.TEXTURE_3D]=P(Q.TEXTURE_3D,Q.TEXTURE_3D,1,1),C.setClear(0,0,0,1),B.setClear(1),E.setClear(0),sA(Q.DEPTH_TEST),B.setFunc(cQ),RA(!1),EI(AC),sA(Q.CULL_FACE),JA(IC);function sA(F){e[F]!==!0&&(Q.enable(F),e[F]=!0)}function eA(F){e[F]!==!1&&(Q.disable(F),e[F]=!1)}function uA(F,QA){return t[F]!==QA?(Q.bindFramebuffer(F,QA),t[F]=QA,F===Q.DRAW_FRAMEBUFFER&&(t[Q.FRAMEBUFFER]=QA),F===Q.FRAMEBUFFER&&(t[Q.DRAW_FRAMEBUFFER]=QA),!0):!1}function xA(F,QA){let AA=s,qA=!1;if(F){AA=a.get(QA),AA===void 0&&(AA=[],a.set(QA,AA));const lA=F.textures;if(AA.length!==lA.length||AA[0]!==Q.COLOR_ATTACHMENT0){for(let eI=0,rI=lA.length;eI<rI;eI++)AA[eI]=Q.COLOR_ATTACHMENT0+eI;AA.length=lA.length,qA=!0}}else AA[0]!==Q.BACK&&(AA[0]=Q.BACK,qA=!0);qA&&Q.drawBuffers(AA)}function jA(F){return D!==F?(Q.useProgram(F),D=F,!0):!1}const T={[cC]:Q.FUNC_ADD,[ys]:Q.FUNC_SUBTRACT,[Ms]:Q.FUNC_REVERSE_SUBTRACT};T[Us]=Q.MIN,T[Ks]=Q.MAX;const _A={[Ns]:Q.ZERO,[Js]:Q.ONE,[Fs]:Q.SRC_COLOR,[UE]:Q.SRC_ALPHA,[Ls]:Q.SRC_ALPHA_SATURATE,[ds]:Q.DST_COLOR,[ps]:Q.DST_ALPHA,[Rs]:Q.ONE_MINUS_SRC_COLOR,[KE]:Q.ONE_MINUS_SRC_ALPHA,[Ys]:Q.ONE_MINUS_DST_COLOR,[qs]:Q.ONE_MINUS_DST_ALPHA,[Hs]:Q.CONSTANT_COLOR,[us]:Q.ONE_MINUS_CONSTANT_COLOR,[ms]:Q.CONSTANT_ALPHA,[fs]:Q.ONE_MINUS_CONSTANT_ALPHA};function JA(F,QA,AA,qA,lA,eI,rI,SI,_I,sI){if(F===IC){n===!0&&(eA(Q.BLEND),n=!1);return}if(n===!1&&(sA(Q.BLEND),n=!0),F!==ks){if(F!==w||sI!==H){if((S!==cC||c!==cC)&&(Q.blendEquation(Q.FUNC_ADD),S=cC,c=cC),sI)switch(F){case bC:Q.blendFuncSeparate(Q.ONE,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA);break;case ME:Q.blendFunc(Q.ONE,Q.ONE);break;case qo:Q.blendFuncSeparate(Q.ZERO,Q.ONE_MINUS_SRC_COLOR,Q.ZERO,Q.ONE);break;case Yo:Q.blendFuncSeparate(Q.ZERO,Q.SRC_COLOR,Q.ZERO,Q.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case bC:Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA);break;case ME:Q.blendFunc(Q.SRC_ALPHA,Q.ONE);break;case qo:Q.blendFuncSeparate(Q.ZERO,Q.ONE_MINUS_SRC_COLOR,Q.ZERO,Q.ONE);break;case Yo:Q.blendFunc(Q.ZERO,Q.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}h=null,k=null,U=null,d=null,J.set(0,0,0),K=0,w=F,H=sI}return}lA=lA||QA,eI=eI||AA,rI=rI||qA,(QA!==S||lA!==c)&&(Q.blendEquationSeparate(T[QA],T[lA]),S=QA,c=lA),(AA!==h||qA!==k||eI!==U||rI!==d)&&(Q.blendFuncSeparate(_A[AA],_A[qA],_A[eI],_A[rI]),h=AA,k=qA,U=eI,d=rI),(SI.equals(J)===!1||_I!==K)&&(Q.blendColor(SI.r,SI.g,SI.b,_I),J.copy(SI),K=_I),w=F,H=!1}function RI(F,QA){F.side===tg?eA(Q.CULL_FACE):sA(Q.CULL_FACE);let AA=F.side===$I;QA&&(AA=!AA),RA(AA),F.blending===bC&&F.transparent===!1?JA(IC):JA(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),B.setFunc(F.depthFunc),B.setTest(F.depthTest),B.setMask(F.depthWrite),C.setMask(F.colorWrite);const qA=F.stencilWrite;E.setTest(qA),qA&&(E.setMask(F.stencilWriteMask),E.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),E.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),l(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?sA(Q.SAMPLE_ALPHA_TO_COVERAGE):eA(Q.SAMPLE_ALPHA_TO_COVERAGE)}function RA(F){y!==F&&(F?Q.frontFace(Q.CW):Q.frontFace(Q.CCW),y=F)}function EI(F){F!==Yg?(sA(Q.CULL_FACE),F!==G&&(F===AC?Q.cullFace(Q.BACK):F===Gs?Q.cullFace(Q.FRONT):Q.cullFace(Q.FRONT_AND_BACK))):eA(Q.CULL_FACE),G=F}function N(F){F!==m&&(W&&Q.lineWidth(F),m=F)}function l(F,QA,AA){F?(sA(Q.POLYGON_OFFSET_FILL),(x!==QA||p!==AA)&&(Q.polygonOffset(QA,AA),x=QA,p=AA)):eA(Q.POLYGON_OFFSET_FILL)}function _(F){F?sA(Q.SCISSOR_TEST):eA(Q.SCISSOR_TEST)}function V(F){F===void 0&&(F=Q.TEXTURE0+v-1),Z!==F&&(Q.activeTexture(F),Z=F)}function $(F,QA,AA){AA===void 0&&(Z===null?AA=Q.TEXTURE0+v-1:AA=Z);let qA=z[AA];qA===void 0&&(qA={type:void 0,texture:void 0},z[AA]=qA),(qA.type!==F||qA.texture!==QA)&&(Z!==AA&&(Q.activeTexture(AA),Z=AA),Q.bindTexture(F,QA||CA[F]),qA.type=F,qA.texture=QA)}function X(){const F=z[Z];F!==void 0&&F.type!==void 0&&(Q.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function UA(){try{Q.compressedTexImage2D.apply(Q,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function IA(){try{Q.compressedTexImage3D.apply(Q,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function cA(){try{Q.texSubImage2D.apply(Q,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yA(){try{Q.texSubImage3D.apply(Q,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oA(){try{Q.compressedTexSubImage2D.apply(Q,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function DA(){try{Q.compressedTexSubImage3D.apply(Q,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pA(){try{Q.texStorage2D.apply(Q,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function hA(){try{Q.texStorage3D.apply(Q,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rA(){try{Q.texImage2D.apply(Q,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function PA(){try{Q.texImage3D.apply(Q,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function VA(F){ZA.equals(F)===!1&&(Q.scissor(F.x,F.y,F.z,F.w),ZA.copy(F))}function gI(F){oI.equals(F)===!1&&(Q.viewport(F.x,F.y,F.z,F.w),oI.copy(F))}function AI(F,QA){let AA=o.get(QA);AA===void 0&&(AA=new WeakMap,o.set(QA,AA));let qA=AA.get(F);qA===void 0&&(qA=Q.getUniformBlockIndex(QA,F.name),AA.set(F,qA))}function hI(F,QA){const AA=o.get(QA).get(F);i.get(QA)!==AA&&(Q.uniformBlockBinding(QA,AA,F.__bindingPointIndex),i.set(QA,AA))}function SA(){Q.disable(Q.BLEND),Q.disable(Q.CULL_FACE),Q.disable(Q.DEPTH_TEST),Q.disable(Q.POLYGON_OFFSET_FILL),Q.disable(Q.SCISSOR_TEST),Q.disable(Q.STENCIL_TEST),Q.disable(Q.SAMPLE_ALPHA_TO_COVERAGE),Q.blendEquation(Q.FUNC_ADD),Q.blendFunc(Q.ONE,Q.ZERO),Q.blendFuncSeparate(Q.ONE,Q.ZERO,Q.ONE,Q.ZERO),Q.blendColor(0,0,0,0),Q.colorMask(!0,!0,!0,!0),Q.clearColor(0,0,0,0),Q.depthMask(!0),Q.depthFunc(Q.LESS),Q.clearDepth(1),Q.stencilMask(4294967295),Q.stencilFunc(Q.ALWAYS,0,4294967295),Q.stencilOp(Q.KEEP,Q.KEEP,Q.KEEP),Q.clearStencil(0),Q.cullFace(Q.BACK),Q.frontFace(Q.CCW),Q.polygonOffset(0,0),Q.activeTexture(Q.TEXTURE0),Q.bindFramebuffer(Q.FRAMEBUFFER,null),Q.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null),Q.bindFramebuffer(Q.READ_FRAMEBUFFER,null),Q.useProgram(null),Q.lineWidth(1),Q.scissor(0,0,Q.canvas.width,Q.canvas.height),Q.viewport(0,0,Q.canvas.width,Q.canvas.height),e={},Z=null,z={},t={},a=new WeakMap,s=[],D=null,n=!1,w=null,S=null,h=null,k=null,c=null,U=null,d=null,J=new kA(0,0,0),K=0,H=!1,y=null,G=null,m=null,x=null,p=null,ZA.set(0,0,Q.canvas.width,Q.canvas.height),oI.set(0,0,Q.canvas.width,Q.canvas.height),C.reset(),B.reset(),E.reset()}return{buffers:{color:C,depth:B,stencil:E},enable:sA,disable:eA,bindFramebuffer:uA,drawBuffers:xA,useProgram:jA,setBlending:JA,setMaterial:RI,setFlipSided:RA,setCullFace:EI,setLineWidth:N,setPolygonOffset:l,setScissorTest:_,activeTexture:V,bindTexture:$,unbindTexture:X,compressedTexImage2D:UA,compressedTexImage3D:IA,texImage2D:rA,texImage3D:PA,updateUBOMapping:AI,uniformBlockBinding:hI,texStorage2D:pA,texStorage3D:hA,texSubImage2D:cA,texSubImage3D:yA,compressedTexSubImage2D:oA,compressedTexSubImage3D:DA,scissor:VA,viewport:gI,reset:SA}}function _w(Q,A,I,g,C,B,E){const i=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),e=new KA,t=new WeakMap;let a;const s=new WeakMap;let D=!1;try{D=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function n(N,l){return D?new OffscreenCanvas(N,l):HB("canvas")}function w(N,l,_){let V=1;const $=EI(N);if(($.width>_||$.height>_)&&(V=_/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const X=Math.floor(V*$.width),UA=Math.floor(V*$.height);a===void 0&&(a=n(X,UA));const IA=l?n(X,UA):a;return IA.width=X,IA.height=UA,IA.getContext("2d").drawImage(N,0,0,X,UA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+UA+")."),IA}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),N;return N}function S(N){return N.generateMipmaps&&N.minFilter!==HI&&N.minFilter!==qI}function h(N){Q.generateMipmap(N)}function k(N,l,_,V,$=!1){if(N!==null){if(Q[N]!==void 0)return Q[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let X=l;if(l===Q.RED&&(_===Q.FLOAT&&(X=Q.R32F),_===Q.HALF_FLOAT&&(X=Q.R16F),_===Q.UNSIGNED_BYTE&&(X=Q.R8)),l===Q.RED_INTEGER&&(_===Q.UNSIGNED_BYTE&&(X=Q.R8UI),_===Q.UNSIGNED_SHORT&&(X=Q.R16UI),_===Q.UNSIGNED_INT&&(X=Q.R32UI),_===Q.BYTE&&(X=Q.R8I),_===Q.SHORT&&(X=Q.R16I),_===Q.INT&&(X=Q.R32I)),l===Q.RG&&(_===Q.FLOAT&&(X=Q.RG32F),_===Q.HALF_FLOAT&&(X=Q.RG16F),_===Q.UNSIGNED_BYTE&&(X=Q.RG8)),l===Q.RG_INTEGER&&(_===Q.UNSIGNED_BYTE&&(X=Q.RG8UI),_===Q.UNSIGNED_SHORT&&(X=Q.RG16UI),_===Q.UNSIGNED_INT&&(X=Q.RG32UI),_===Q.BYTE&&(X=Q.RG8I),_===Q.SHORT&&(X=Q.RG16I),_===Q.INT&&(X=Q.RG32I)),l===Q.RGB&&_===Q.UNSIGNED_INT_5_9_9_9_REV&&(X=Q.RGB9_E5),l===Q.RGBA){const UA=$?KQ:XA.getTransfer(V);_===Q.FLOAT&&(X=Q.RGBA32F),_===Q.HALF_FLOAT&&(X=Q.RGBA16F),_===Q.UNSIGNED_BYTE&&(X=UA===tI?Q.SRGB8_ALPHA8:Q.RGBA8),_===Q.UNSIGNED_SHORT_4_4_4_4&&(X=Q.RGBA4),_===Q.UNSIGNED_SHORT_5_5_5_1&&(X=Q.RGB5_A1)}return(X===Q.R16F||X===Q.R32F||X===Q.RG16F||X===Q.RG32F||X===Q.RGBA16F||X===Q.RGBA32F)&&A.get("EXT_color_buffer_float"),X}function c(N,l){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==HI&&N.minFilter!==qI?Math.log2(Math.max(l.width,l.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?l.mipmaps.length:1}function U(N){const l=N.target;l.removeEventListener("dispose",U),J(l),l.isVideoTexture&&t.delete(l)}function d(N){const l=N.target;l.removeEventListener("dispose",d),H(l)}function J(N){const l=g.get(N);if(l.__webglInit===void 0)return;const _=N.source,V=s.get(_);if(V){const $=V[l.__cacheKey];$.usedTimes--,$.usedTimes===0&&K(N),Object.keys(V).length===0&&s.delete(_)}g.remove(N)}function K(N){const l=g.get(N);Q.deleteTexture(l.__webglTexture);const _=N.source,V=s.get(_);delete V[l.__cacheKey],E.memory.textures--}function H(N){const l=g.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(l.__webglFramebuffer[V]))for(let $=0;$<l.__webglFramebuffer[V].length;$++)Q.deleteFramebuffer(l.__webglFramebuffer[V][$]);else Q.deleteFramebuffer(l.__webglFramebuffer[V]);l.__webglDepthbuffer&&Q.deleteRenderbuffer(l.__webglDepthbuffer[V])}else{if(Array.isArray(l.__webglFramebuffer))for(let V=0;V<l.__webglFramebuffer.length;V++)Q.deleteFramebuffer(l.__webglFramebuffer[V]);else Q.deleteFramebuffer(l.__webglFramebuffer);if(l.__webglDepthbuffer&&Q.deleteRenderbuffer(l.__webglDepthbuffer),l.__webglMultisampledFramebuffer&&Q.deleteFramebuffer(l.__webglMultisampledFramebuffer),l.__webglColorRenderbuffer)for(let V=0;V<l.__webglColorRenderbuffer.length;V++)l.__webglColorRenderbuffer[V]&&Q.deleteRenderbuffer(l.__webglColorRenderbuffer[V]);l.__webglDepthRenderbuffer&&Q.deleteRenderbuffer(l.__webglDepthRenderbuffer)}const _=N.textures;for(let V=0,$=_.length;V<$;V++){const X=g.get(_[V]);X.__webglTexture&&(Q.deleteTexture(X.__webglTexture),E.memory.textures--),g.remove(_[V])}g.remove(N)}let y=0;function G(){y=0}function m(){const N=y;return N>=C.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+C.maxTextures),y+=1,N}function x(N){const l=[];return l.push(N.wrapS),l.push(N.wrapT),l.push(N.wrapR||0),l.push(N.magFilter),l.push(N.minFilter),l.push(N.anisotropy),l.push(N.internalFormat),l.push(N.format),l.push(N.type),l.push(N.generateMipmaps),l.push(N.premultiplyAlpha),l.push(N.flipY),l.push(N.unpackAlignment),l.push(N.colorSpace),l.join()}function p(N,l){const _=g.get(N);if(N.isVideoTexture&&RI(N),N.isRenderTargetTexture===!1&&N.version>0&&_.__version!==N.version){const V=N.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ZA(_,N,l);return}}I.bindTexture(Q.TEXTURE_2D,_.__webglTexture,Q.TEXTURE0+l)}function v(N,l){const _=g.get(N);if(N.version>0&&_.__version!==N.version){ZA(_,N,l);return}I.bindTexture(Q.TEXTURE_2D_ARRAY,_.__webglTexture,Q.TEXTURE0+l)}function W(N,l){const _=g.get(N);if(N.version>0&&_.__version!==N.version){ZA(_,N,l);return}I.bindTexture(Q.TEXTURE_3D,_.__webglTexture,Q.TEXTURE0+l)}function j(N,l){const _=g.get(N);if(N.version>0&&_.__version!==N.version){oI(_,N,l);return}I.bindTexture(Q.TEXTURE_CUBE_MAP,_.__webglTexture,Q.TEXTURE0+l)}const gA={[GC]:Q.REPEAT,[Gg]:Q.CLAMP_TO_EDGE,[kQ]:Q.MIRRORED_REPEAT},Z={[HI]:Q.NEAREST,[uo]:Q.NEAREST_MIPMAP_NEAREST,[RB]:Q.NEAREST_MIPMAP_LINEAR,[qI]:Q.LINEAR,[yQ]:Q.LINEAR_MIPMAP_NEAREST,[lg]:Q.LINEAR_MIPMAP_LINEAR},z={[cD]:Q.NEVER,[UD]:Q.ALWAYS,[GD]:Q.LESS,[le]:Q.LEQUAL,[lD]:Q.EQUAL,[MD]:Q.GEQUAL,[kD]:Q.GREATER,[yD]:Q.NOTEQUAL};function BA(N,l){if(l.type===Ag&&A.has("OES_texture_float_linear")===!1&&(l.magFilter===qI||l.magFilter===yQ||l.magFilter===RB||l.magFilter===lg||l.minFilter===qI||l.minFilter===yQ||l.minFilter===RB||l.minFilter===lg)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Q.texParameteri(N,Q.TEXTURE_WRAP_S,gA[l.wrapS]),Q.texParameteri(N,Q.TEXTURE_WRAP_T,gA[l.wrapT]),(N===Q.TEXTURE_3D||N===Q.TEXTURE_2D_ARRAY)&&Q.texParameteri(N,Q.TEXTURE_WRAP_R,gA[l.wrapR]),Q.texParameteri(N,Q.TEXTURE_MAG_FILTER,Z[l.magFilter]),Q.texParameteri(N,Q.TEXTURE_MIN_FILTER,Z[l.minFilter]),l.compareFunction&&(Q.texParameteri(N,Q.TEXTURE_COMPARE_MODE,Q.COMPARE_REF_TO_TEXTURE),Q.texParameteri(N,Q.TEXTURE_COMPARE_FUNC,z[l.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){if(l.magFilter===HI||l.minFilter!==RB&&l.minFilter!==lg||l.type===Ag&&A.has("OES_texture_float_linear")===!1)return;if(l.anisotropy>1||g.get(l).__currentAnisotropy){const _=A.get("EXT_texture_filter_anisotropic");Q.texParameterf(N,_.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(l.anisotropy,C.getMaxAnisotropy())),g.get(l).__currentAnisotropy=l.anisotropy}}}function FA(N,l){let _=!1;N.__webglInit===void 0&&(N.__webglInit=!0,l.addEventListener("dispose",U));const V=l.source;let $=s.get(V);$===void 0&&($={},s.set(V,$));const X=x(l);if(X!==N.__cacheKey){$[X]===void 0&&($[X]={texture:Q.createTexture(),usedTimes:0},E.memory.textures++,_=!0),$[X].usedTimes++;const UA=$[N.__cacheKey];UA!==void 0&&($[N.__cacheKey].usedTimes--,UA.usedTimes===0&&K(l)),N.__cacheKey=X,N.__webglTexture=$[X].texture}return _}function ZA(N,l,_){let V=Q.TEXTURE_2D;(l.isDataArrayTexture||l.isCompressedArrayTexture)&&(V=Q.TEXTURE_2D_ARRAY),l.isData3DTexture&&(V=Q.TEXTURE_3D);const $=FA(N,l),X=l.source;I.bindTexture(V,N.__webglTexture,Q.TEXTURE0+_);const UA=g.get(X);if(X.version!==UA.__version||$===!0){I.activeTexture(Q.TEXTURE0+_);const IA=XA.getPrimaries(XA.workingColorSpace),cA=l.colorSpace===BC?null:XA.getPrimaries(l.colorSpace),yA=l.colorSpace===BC||IA===cA?Q.NONE:Q.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,l.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,l.unpackAlignment),Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,yA);let oA=w(l.image,!1,C.maxTextureSize);oA=RA(l,oA);const DA=B.convert(l.format,l.colorSpace),pA=B.convert(l.type);let hA=k(l.internalFormat,DA,pA,l.colorSpace,l.isVideoTexture);BA(V,l);let rA;const PA=l.mipmaps,VA=l.isVideoTexture!==!0&&hA!==Vo,gI=UA.__version===void 0||$===!0,AI=X.dataReady,hI=c(l,oA);if(l.isDepthTexture)hA=Q.DEPTH_COMPONENT16,l.type===Ag?hA=Q.DEPTH_COMPONENT32F:l.type===vC?hA=Q.DEPTH_COMPONENT24:l.type===pB&&(hA=Q.DEPTH24_STENCIL8),gI&&(VA?I.texStorage2D(Q.TEXTURE_2D,1,hA,oA.width,oA.height):I.texImage2D(Q.TEXTURE_2D,0,hA,oA.width,oA.height,0,DA,pA,null));else if(l.isDataTexture)if(PA.length>0){VA&&gI&&I.texStorage2D(Q.TEXTURE_2D,hI,hA,PA[0].width,PA[0].height);for(let SA=0,F=PA.length;SA<F;SA++)rA=PA[SA],VA?AI&&I.texSubImage2D(Q.TEXTURE_2D,SA,0,0,rA.width,rA.height,DA,pA,rA.data):I.texImage2D(Q.TEXTURE_2D,SA,hA,rA.width,rA.height,0,DA,pA,rA.data);l.generateMipmaps=!1}else VA?(gI&&I.texStorage2D(Q.TEXTURE_2D,hI,hA,oA.width,oA.height),AI&&I.texSubImage2D(Q.TEXTURE_2D,0,0,0,oA.width,oA.height,DA,pA,oA.data)):I.texImage2D(Q.TEXTURE_2D,0,hA,oA.width,oA.height,0,DA,pA,oA.data);else if(l.isCompressedTexture)if(l.isCompressedArrayTexture){VA&&gI&&I.texStorage3D(Q.TEXTURE_2D_ARRAY,hI,hA,PA[0].width,PA[0].height,oA.depth);for(let SA=0,F=PA.length;SA<F;SA++)rA=PA[SA],l.format!==ag?DA!==null?VA?AI&&I.compressedTexSubImage3D(Q.TEXTURE_2D_ARRAY,SA,0,0,0,rA.width,rA.height,oA.depth,DA,rA.data,0,0):I.compressedTexImage3D(Q.TEXTURE_2D_ARRAY,SA,hA,rA.width,rA.height,oA.depth,0,rA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):VA?AI&&I.texSubImage3D(Q.TEXTURE_2D_ARRAY,SA,0,0,0,rA.width,rA.height,oA.depth,DA,pA,rA.data):I.texImage3D(Q.TEXTURE_2D_ARRAY,SA,hA,rA.width,rA.height,oA.depth,0,DA,pA,rA.data)}else{VA&&gI&&I.texStorage2D(Q.TEXTURE_2D,hI,hA,PA[0].width,PA[0].height);for(let SA=0,F=PA.length;SA<F;SA++)rA=PA[SA],l.format!==ag?DA!==null?VA?AI&&I.compressedTexSubImage2D(Q.TEXTURE_2D,SA,0,0,rA.width,rA.height,DA,rA.data):I.compressedTexImage2D(Q.TEXTURE_2D,SA,hA,rA.width,rA.height,0,rA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):VA?AI&&I.texSubImage2D(Q.TEXTURE_2D,SA,0,0,rA.width,rA.height,DA,pA,rA.data):I.texImage2D(Q.TEXTURE_2D,SA,hA,rA.width,rA.height,0,DA,pA,rA.data)}else if(l.isDataArrayTexture)VA?(gI&&I.texStorage3D(Q.TEXTURE_2D_ARRAY,hI,hA,oA.width,oA.height,oA.depth),AI&&I.texSubImage3D(Q.TEXTURE_2D_ARRAY,0,0,0,0,oA.width,oA.height,oA.depth,DA,pA,oA.data)):I.texImage3D(Q.TEXTURE_2D_ARRAY,0,hA,oA.width,oA.height,oA.depth,0,DA,pA,oA.data);else if(l.isData3DTexture)VA?(gI&&I.texStorage3D(Q.TEXTURE_3D,hI,hA,oA.width,oA.height,oA.depth),AI&&I.texSubImage3D(Q.TEXTURE_3D,0,0,0,0,oA.width,oA.height,oA.depth,DA,pA,oA.data)):I.texImage3D(Q.TEXTURE_3D,0,hA,oA.width,oA.height,oA.depth,0,DA,pA,oA.data);else if(l.isFramebufferTexture){if(gI)if(VA)I.texStorage2D(Q.TEXTURE_2D,hI,hA,oA.width,oA.height);else{let SA=oA.width,F=oA.height;for(let QA=0;QA<hI;QA++)I.texImage2D(Q.TEXTURE_2D,QA,hA,SA,F,0,DA,pA,null),SA>>=1,F>>=1}}else if(PA.length>0){if(VA&&gI){const SA=EI(PA[0]);I.texStorage2D(Q.TEXTURE_2D,hI,hA,SA.width,SA.height)}for(let SA=0,F=PA.length;SA<F;SA++)rA=PA[SA],VA?AI&&I.texSubImage2D(Q.TEXTURE_2D,SA,0,0,DA,pA,rA):I.texImage2D(Q.TEXTURE_2D,SA,hA,DA,pA,rA);l.generateMipmaps=!1}else if(VA){if(gI){const SA=EI(oA);I.texStorage2D(Q.TEXTURE_2D,hI,hA,SA.width,SA.height)}AI&&I.texSubImage2D(Q.TEXTURE_2D,0,0,0,DA,pA,oA)}else I.texImage2D(Q.TEXTURE_2D,0,hA,DA,pA,oA);S(l)&&h(V),UA.__version=X.version,l.onUpdate&&l.onUpdate(l)}N.__version=l.version}function oI(N,l,_){if(l.image.length!==6)return;const V=FA(N,l),$=l.source;I.bindTexture(Q.TEXTURE_CUBE_MAP,N.__webglTexture,Q.TEXTURE0+_);const X=g.get($);if($.version!==X.__version||V===!0){I.activeTexture(Q.TEXTURE0+_);const UA=XA.getPrimaries(XA.workingColorSpace),IA=l.colorSpace===BC?null:XA.getPrimaries(l.colorSpace),cA=l.colorSpace===BC||UA===IA?Q.NONE:Q.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,l.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,l.unpackAlignment),Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,cA);const yA=l.isCompressedTexture||l.image[0].isCompressedTexture,oA=l.image[0]&&l.image[0].isDataTexture,DA=[];for(let F=0;F<6;F++)!yA&&!oA?DA[F]=w(l.image[F],!0,C.maxCubemapSize):DA[F]=oA?l.image[F].image:l.image[F],DA[F]=RA(l,DA[F]);const pA=DA[0],hA=B.convert(l.format,l.colorSpace),rA=B.convert(l.type),PA=k(l.internalFormat,hA,rA,l.colorSpace),VA=l.isVideoTexture!==!0,gI=X.__version===void 0||V===!0,AI=$.dataReady;let hI=c(l,pA);BA(Q.TEXTURE_CUBE_MAP,l);let SA;if(yA){VA&&gI&&I.texStorage2D(Q.TEXTURE_CUBE_MAP,hI,PA,pA.width,pA.height);for(let F=0;F<6;F++){SA=DA[F].mipmaps;for(let QA=0;QA<SA.length;QA++){const AA=SA[QA];l.format!==ag?hA!==null?VA?AI&&I.compressedTexSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+F,QA,0,0,AA.width,AA.height,hA,AA.data):I.compressedTexImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+F,QA,PA,AA.width,AA.height,0,AA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):VA?AI&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+F,QA,0,0,AA.width,AA.height,hA,rA,AA.data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+F,QA,PA,AA.width,AA.height,0,hA,rA,AA.data)}}}else{if(SA=l.mipmaps,VA&&gI){SA.length>0&&hI++;const F=EI(DA[0]);I.texStorage2D(Q.TEXTURE_CUBE_MAP,hI,PA,F.width,F.height)}for(let F=0;F<6;F++)if(oA){VA?AI&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,DA[F].width,DA[F].height,hA,rA,DA[F].data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,PA,DA[F].width,DA[F].height,0,hA,rA,DA[F].data);for(let QA=0;QA<SA.length;QA++){const AA=SA[QA].image[F].image;VA?AI&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+F,QA+1,0,0,AA.width,AA.height,hA,rA,AA.data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+F,QA+1,PA,AA.width,AA.height,0,hA,rA,AA.data)}}else{VA?AI&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,hA,rA,DA[F]):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,PA,hA,rA,DA[F]);for(let QA=0;QA<SA.length;QA++){const AA=SA[QA];VA?AI&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+F,QA+1,0,0,hA,rA,AA.image[F]):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+F,QA+1,PA,hA,rA,AA.image[F])}}}S(l)&&h(Q.TEXTURE_CUBE_MAP),X.__version=$.version,l.onUpdate&&l.onUpdate(l)}N.__version=l.version}function P(N,l,_,V,$,X){const UA=B.convert(_.format,_.colorSpace),IA=B.convert(_.type),cA=k(_.internalFormat,UA,IA,_.colorSpace);if(!g.get(l).__hasExternalTextures){const yA=Math.max(1,l.width>>X),oA=Math.max(1,l.height>>X);$===Q.TEXTURE_3D||$===Q.TEXTURE_2D_ARRAY?I.texImage3D($,X,cA,yA,oA,l.depth,0,UA,IA,null):I.texImage2D($,X,cA,yA,oA,0,UA,IA,null)}I.bindFramebuffer(Q.FRAMEBUFFER,N),JA(l)?i.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,V,$,g.get(_).__webglTexture,0,_A(l)):($===Q.TEXTURE_2D||$>=Q.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=Q.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&Q.framebufferTexture2D(Q.FRAMEBUFFER,V,$,g.get(_).__webglTexture,X),I.bindFramebuffer(Q.FRAMEBUFFER,null)}function CA(N,l,_){if(Q.bindRenderbuffer(Q.RENDERBUFFER,N),l.depthBuffer&&!l.stencilBuffer){let V=Q.DEPTH_COMPONENT24;if(_||JA(l)){const $=l.depthTexture;$&&$.isDepthTexture&&($.type===Ag?V=Q.DEPTH_COMPONENT32F:$.type===vC&&(V=Q.DEPTH_COMPONENT24));const X=_A(l);JA(l)?i.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,X,V,l.width,l.height):Q.renderbufferStorageMultisample(Q.RENDERBUFFER,X,V,l.width,l.height)}else Q.renderbufferStorage(Q.RENDERBUFFER,V,l.width,l.height);Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.RENDERBUFFER,N)}else if(l.depthBuffer&&l.stencilBuffer){const V=_A(l);_&&JA(l)===!1?Q.renderbufferStorageMultisample(Q.RENDERBUFFER,V,Q.DEPTH24_STENCIL8,l.width,l.height):JA(l)?i.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,V,Q.DEPTH24_STENCIL8,l.width,l.height):Q.renderbufferStorage(Q.RENDERBUFFER,Q.DEPTH_STENCIL,l.width,l.height),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.RENDERBUFFER,N)}else{const V=l.textures;for(let $=0;$<V.length;$++){const X=V[$],UA=B.convert(X.format,X.colorSpace),IA=B.convert(X.type),cA=k(X.internalFormat,UA,IA,X.colorSpace),yA=_A(l);_&&JA(l)===!1?Q.renderbufferStorageMultisample(Q.RENDERBUFFER,yA,cA,l.width,l.height):JA(l)?i.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,yA,cA,l.width,l.height):Q.renderbufferStorage(Q.RENDERBUFFER,cA,l.width,l.height)}}Q.bindRenderbuffer(Q.RENDERBUFFER,null)}function sA(N,l){if(l&&l.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(Q.FRAMEBUFFER,N),!(l.depthTexture&&l.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(l.depthTexture).__webglTexture||l.depthTexture.image.width!==l.width||l.depthTexture.image.height!==l.height)&&(l.depthTexture.image.width=l.width,l.depthTexture.image.height=l.height,l.depthTexture.needsUpdate=!0),p(l.depthTexture,0);const _=g.get(l.depthTexture).__webglTexture,V=_A(l);if(l.depthTexture.format===ZC)JA(l)?i.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.TEXTURE_2D,_,0,V):Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.TEXTURE_2D,_,0);else if(l.depthTexture.format===qB)JA(l)?i.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.TEXTURE_2D,_,0,V):Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.TEXTURE_2D,_,0);else throw new Error("Unknown depthTexture format")}function eA(N){const l=g.get(N),_=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!l.__autoAllocateDepthBuffer){if(_)throw new Error("target.depthTexture not supported in Cube render targets");sA(l.__webglFramebuffer,N)}else if(_){l.__webglDepthbuffer=[];for(let V=0;V<6;V++)I.bindFramebuffer(Q.FRAMEBUFFER,l.__webglFramebuffer[V]),l.__webglDepthbuffer[V]=Q.createRenderbuffer(),CA(l.__webglDepthbuffer[V],N,!1)}else I.bindFramebuffer(Q.FRAMEBUFFER,l.__webglFramebuffer),l.__webglDepthbuffer=Q.createRenderbuffer(),CA(l.__webglDepthbuffer,N,!1);I.bindFramebuffer(Q.FRAMEBUFFER,null)}function uA(N,l,_){const V=g.get(N);l!==void 0&&P(V.__webglFramebuffer,N,N.texture,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,0),_!==void 0&&eA(N)}function xA(N){const l=N.texture,_=g.get(N),V=g.get(l);N.addEventListener("dispose",d);const $=N.textures,X=N.isWebGLCubeRenderTarget===!0,UA=$.length>1;if(UA||(V.__webglTexture===void 0&&(V.__webglTexture=Q.createTexture()),V.__version=l.version,E.memory.textures++),X){_.__webglFramebuffer=[];for(let IA=0;IA<6;IA++)if(l.mipmaps&&l.mipmaps.length>0){_.__webglFramebuffer[IA]=[];for(let cA=0;cA<l.mipmaps.length;cA++)_.__webglFramebuffer[IA][cA]=Q.createFramebuffer()}else _.__webglFramebuffer[IA]=Q.createFramebuffer()}else{if(l.mipmaps&&l.mipmaps.length>0){_.__webglFramebuffer=[];for(let IA=0;IA<l.mipmaps.length;IA++)_.__webglFramebuffer[IA]=Q.createFramebuffer()}else _.__webglFramebuffer=Q.createFramebuffer();if(UA)for(let IA=0,cA=$.length;IA<cA;IA++){const yA=g.get($[IA]);yA.__webglTexture===void 0&&(yA.__webglTexture=Q.createTexture(),E.memory.textures++)}if(N.samples>0&&JA(N)===!1){_.__webglMultisampledFramebuffer=Q.createFramebuffer(),_.__webglColorRenderbuffer=[],I.bindFramebuffer(Q.FRAMEBUFFER,_.__webglMultisampledFramebuffer);for(let IA=0;IA<$.length;IA++){const cA=$[IA];_.__webglColorRenderbuffer[IA]=Q.createRenderbuffer(),Q.bindRenderbuffer(Q.RENDERBUFFER,_.__webglColorRenderbuffer[IA]);const yA=B.convert(cA.format,cA.colorSpace),oA=B.convert(cA.type),DA=k(cA.internalFormat,yA,oA,cA.colorSpace,N.isXRRenderTarget===!0),pA=_A(N);Q.renderbufferStorageMultisample(Q.RENDERBUFFER,pA,DA,N.width,N.height),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+IA,Q.RENDERBUFFER,_.__webglColorRenderbuffer[IA])}Q.bindRenderbuffer(Q.RENDERBUFFER,null),N.depthBuffer&&(_.__webglDepthRenderbuffer=Q.createRenderbuffer(),CA(_.__webglDepthRenderbuffer,N,!0)),I.bindFramebuffer(Q.FRAMEBUFFER,null)}}if(X){I.bindTexture(Q.TEXTURE_CUBE_MAP,V.__webglTexture),BA(Q.TEXTURE_CUBE_MAP,l);for(let IA=0;IA<6;IA++)if(l.mipmaps&&l.mipmaps.length>0)for(let cA=0;cA<l.mipmaps.length;cA++)P(_.__webglFramebuffer[IA][cA],N,l,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+IA,cA);else P(_.__webglFramebuffer[IA],N,l,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+IA,0);S(l)&&h(Q.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(UA){for(let IA=0,cA=$.length;IA<cA;IA++){const yA=$[IA],oA=g.get(yA);I.bindTexture(Q.TEXTURE_2D,oA.__webglTexture),BA(Q.TEXTURE_2D,yA),P(_.__webglFramebuffer,N,yA,Q.COLOR_ATTACHMENT0+IA,Q.TEXTURE_2D,0),S(yA)&&h(Q.TEXTURE_2D)}I.unbindTexture()}else{let IA=Q.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(IA=N.isWebGL3DRenderTarget?Q.TEXTURE_3D:Q.TEXTURE_2D_ARRAY),I.bindTexture(IA,V.__webglTexture),BA(IA,l),l.mipmaps&&l.mipmaps.length>0)for(let cA=0;cA<l.mipmaps.length;cA++)P(_.__webglFramebuffer[cA],N,l,Q.COLOR_ATTACHMENT0,IA,cA);else P(_.__webglFramebuffer,N,l,Q.COLOR_ATTACHMENT0,IA,0);S(l)&&h(IA),I.unbindTexture()}N.depthBuffer&&eA(N)}function jA(N){const l=N.textures;for(let _=0,V=l.length;_<V;_++){const $=l[_];if(S($)){const X=N.isWebGLCubeRenderTarget?Q.TEXTURE_CUBE_MAP:Q.TEXTURE_2D,UA=g.get($).__webglTexture;I.bindTexture(X,UA),h(X),I.unbindTexture()}}}function T(N){if(N.samples>0&&JA(N)===!1){const l=N.textures,_=N.width,V=N.height;let $=Q.COLOR_BUFFER_BIT;const X=[],UA=N.stencilBuffer?Q.DEPTH_STENCIL_ATTACHMENT:Q.DEPTH_ATTACHMENT,IA=g.get(N),cA=l.length>1;if(cA)for(let yA=0;yA<l.length;yA++)I.bindFramebuffer(Q.FRAMEBUFFER,IA.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+yA,Q.RENDERBUFFER,null),I.bindFramebuffer(Q.FRAMEBUFFER,IA.__webglFramebuffer),Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0+yA,Q.TEXTURE_2D,null,0);I.bindFramebuffer(Q.READ_FRAMEBUFFER,IA.__webglMultisampledFramebuffer),I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,IA.__webglFramebuffer);for(let yA=0;yA<l.length;yA++){X.push(Q.COLOR_ATTACHMENT0+yA),N.depthBuffer&&X.push(UA);const oA=IA.__ignoreDepthValues!==void 0?IA.__ignoreDepthValues:!1;if(oA===!1&&(N.depthBuffer&&($|=Q.DEPTH_BUFFER_BIT),N.stencilBuffer&&IA.__isTransmissionRenderTarget!==!0&&($|=Q.STENCIL_BUFFER_BIT)),cA&&Q.framebufferRenderbuffer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.RENDERBUFFER,IA.__webglColorRenderbuffer[yA]),oA===!0&&(Q.invalidateFramebuffer(Q.READ_FRAMEBUFFER,[UA]),Q.invalidateFramebuffer(Q.DRAW_FRAMEBUFFER,[UA])),cA){const DA=g.get(l[yA]).__webglTexture;Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,DA,0)}Q.blitFramebuffer(0,0,_,V,0,0,_,V,$,Q.NEAREST),o&&Q.invalidateFramebuffer(Q.READ_FRAMEBUFFER,X)}if(I.bindFramebuffer(Q.READ_FRAMEBUFFER,null),I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null),cA)for(let yA=0;yA<l.length;yA++){I.bindFramebuffer(Q.FRAMEBUFFER,IA.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+yA,Q.RENDERBUFFER,IA.__webglColorRenderbuffer[yA]);const oA=g.get(l[yA]).__webglTexture;I.bindFramebuffer(Q.FRAMEBUFFER,IA.__webglFramebuffer),Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0+yA,Q.TEXTURE_2D,oA,0)}I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,IA.__webglMultisampledFramebuffer)}}function _A(N){return Math.min(C.maxSamples,N.samples)}function JA(N){const l=g.get(N);return N.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&l.__useRenderToTexture!==!1}function RI(N){const l=E.render.frame;t.get(N)!==l&&(t.set(N,l),N.update())}function RA(N,l){const _=N.colorSpace,V=N.format,$=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||_!==MI&&_!==BC&&(XA.getTransfer(_)===tI?(V!==ag||$!==kg)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",_)),l}function EI(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(e.width=N.naturalWidth||N.width,e.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(e.width=N.displayWidth,e.height=N.displayHeight):(e.width=N.width,e.height=N.height),e}this.allocateTextureUnit=m,this.resetTextureUnits=G,this.setTexture2D=p,this.setTexture2DArray=v,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=uA,this.setupRenderTarget=xA,this.updateRenderTargetMipmap=jA,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=eA,this.setupFrameBufferTexture=P,this.useMultisampledRTT=JA}function vw(Q,A){function I(g,C=BC){let B;const E=XA.getTransfer(C);if(g===kg)return Q.UNSIGNED_BYTE;if(g===To)return Q.UNSIGNED_SHORT_4_4_4_4;if(g===xo)return Q.UNSIGNED_SHORT_5_5_5_1;if(g===QD)return Q.UNSIGNED_INT_5_9_9_9_REV;if(g===CD)return Q.BYTE;if(g===BD)return Q.SHORT;if(g===mo)return Q.UNSIGNED_SHORT;if(g===fo)return Q.INT;if(g===vC)return Q.UNSIGNED_INT;if(g===Ag)return Q.FLOAT;if(g===CC)return Q.HALF_FLOAT;if(g===ED)return Q.ALPHA;if(g===iD)return Q.RGB;if(g===ag)return Q.RGBA;if(g===oD)return Q.LUMINANCE;if(g===eD)return Q.LUMINANCE_ALPHA;if(g===ZC)return Q.DEPTH_COMPONENT;if(g===qB)return Q.DEPTH_STENCIL;if(g===bo)return Q.RED;if(g===Oo)return Q.RED_INTEGER;if(g===tD)return Q.RG;if(g===_o)return Q.RG_INTEGER;if(g===vo)return Q.RGBA_INTEGER;if(g===FE||g===RE||g===pE||g===qE)if(E===tI)if(B=A.get("WEBGL_compressed_texture_s3tc_srgb"),B!==null){if(g===FE)return B.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(g===RE)return B.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(g===pE)return B.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(g===qE)return B.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(B=A.get("WEBGL_compressed_texture_s3tc"),B!==null){if(g===FE)return B.COMPRESSED_RGB_S3TC_DXT1_EXT;if(g===RE)return B.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(g===pE)return B.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(g===qE)return B.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(g===Zo||g===Wo||g===Po||g===jo)if(B=A.get("WEBGL_compressed_texture_pvrtc"),B!==null){if(g===Zo)return B.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(g===Wo)return B.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(g===Po)return B.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(g===jo)return B.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(g===Vo)return B=A.get("WEBGL_compressed_texture_etc1"),B!==null?B.COMPRESSED_RGB_ETC1_WEBGL:null;if(g===Xo||g===zo)if(B=A.get("WEBGL_compressed_texture_etc"),B!==null){if(g===Xo)return E===tI?B.COMPRESSED_SRGB8_ETC2:B.COMPRESSED_RGB8_ETC2;if(g===zo)return E===tI?B.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:B.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(g===$o||g===Ae||g===Ie||g===ge||g===Ce||g===Be||g===Qe||g===Ee||g===ie||g===oe||g===ee||g===te||g===ae||g===se)if(B=A.get("WEBGL_compressed_texture_astc"),B!==null){if(g===$o)return E===tI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:B.COMPRESSED_RGBA_ASTC_4x4_KHR;if(g===Ae)return E===tI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:B.COMPRESSED_RGBA_ASTC_5x4_KHR;if(g===Ie)return E===tI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:B.COMPRESSED_RGBA_ASTC_5x5_KHR;if(g===ge)return E===tI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:B.COMPRESSED_RGBA_ASTC_6x5_KHR;if(g===Ce)return E===tI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:B.COMPRESSED_RGBA_ASTC_6x6_KHR;if(g===Be)return E===tI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:B.COMPRESSED_RGBA_ASTC_8x5_KHR;if(g===Qe)return E===tI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:B.COMPRESSED_RGBA_ASTC_8x6_KHR;if(g===Ee)return E===tI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:B.COMPRESSED_RGBA_ASTC_8x8_KHR;if(g===ie)return E===tI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:B.COMPRESSED_RGBA_ASTC_10x5_KHR;if(g===oe)return E===tI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:B.COMPRESSED_RGBA_ASTC_10x6_KHR;if(g===ee)return E===tI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:B.COMPRESSED_RGBA_ASTC_10x8_KHR;if(g===te)return E===tI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:B.COMPRESSED_RGBA_ASTC_10x10_KHR;if(g===ae)return E===tI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:B.COMPRESSED_RGBA_ASTC_12x10_KHR;if(g===se)return E===tI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:B.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(g===dE||g===De||g===he)if(B=A.get("EXT_texture_compression_bptc"),B!==null){if(g===dE)return E===tI?B.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:B.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(g===De)return B.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(g===he)return B.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(g===aD||g===re||g===Se||g===ne)if(B=A.get("EXT_texture_compression_rgtc"),B!==null){if(g===dE)return B.COMPRESSED_RED_RGTC1_EXT;if(g===re)return B.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(g===Se)return B.COMPRESSED_RED_GREEN_RGTC2_EXT;if(g===ne)return B.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return g===pB?Q.UNSIGNED_INT_24_8:Q[g]!==void 0?Q[g]:null}return{convert:I}}class Zw extends XI{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class Zg extends BI{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ww={type:"move"};class ri{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zg,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zg,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zg,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,B=null,E=null;const i=this._targetRay,o=this._grip,e=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(e&&A.hand){E=!0;for(const w of A.hand.values()){const S=I.getJointPose(w,g),h=this._getHandJoint(e,w);S!==null&&(h.matrix.fromArray(S.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=S.radius),h.visible=S!==null}const t=e.joints["index-finger-tip"],a=e.joints["thumb-tip"],s=t.position.distanceTo(a.position),D=.02,n=.005;e.inputState.pinching&&s>D+n?(e.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!e.inputState.pinching&&s<=D-n&&(e.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(B=I.getPose(A.gripSpace,g),B!==null&&(o.matrix.fromArray(B.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,B.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(B.linearVelocity)):o.hasLinearVelocity=!1,B.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(B.angularVelocity)):o.hasAngularVelocity=!1));i!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&B!==null&&(C=B),C!==null&&(i.matrix.fromArray(C.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,C.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(C.linearVelocity)):i.hasLinearVelocity=!1,C.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(C.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(Ww)))}return i!==null&&(i.visible=C!==null),o!==null&&(o.visible=B!==null),e!==null&&(e.visible=E!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new Zg;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}const Pw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

`);this.workerSourceURL=URL.createObjectURL(new Blob([E]))}),this.decoderPending}_getWorker(A,I){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const C=new Worker(this.workerSourceURL);C._callbacks={},C._taskCosts={},C._taskLoad=0,C.postMessage({type:"init",decoderConfig:this.decoderConfig}),C.onmessage=function(B){const E=B.data;switch(E.type){case"decode":C._callbacks[E.id].resolve(E);break;case"error":C._callbacks[E.id].reject(E);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+E.type+'"')}},this.workerPool.push(C)}else this.workerPool.sort(function(C,B){return C._taskLoad>B._taskLoad?-1:1});const g=this.workerPool[this.workerPool.length-1];return g._taskCosts[A]=I,g._taskLoad+=I,g})}_releaseTask(A,I){A._taskLoad-=A._taskCosts[I],delete A._callbacks[I],delete A._taskCosts[I]}debug(){console.log("Task load: ",this.workerPool.map(A=>A._taskLoad))}dispose(){for(let A=0;A<this.workerPool.length;++A)this.workerPool[A].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function OG(){let Q,A;onmessage=function(E){const i=E.data;switch(i.type){case"init":Q=i.decoderConfig,A=new Promise(function(t){Q.onModuleLoaded=function(a){t({draco:a})},DracoDecoderModule(Q)});break;case"decode":const o=i.buffer,e=i.taskConfig;A.then(t=>{const a=t.draco,s=new a.Decoder;try{const D=I(a,s,new Int8Array(o),e),n=D.attributes.map(w=>w.array.buffer);D.index&&n.push(D.index.array.buffer),self.postMessage({type:"decode",id:i.id,geometry:D},n)}catch(D){console.error(D),self.postMessage({type:"error",id:i.id,error:D.message})}finally{a.destroy(s)}});break}};function I(E,i,o,e){const t=e.attributeIDs,a=e.attributeTypes;let s,D;const n=i.GetEncodedGeometryType(o);if(n===E.TRIANGULAR_MESH)s=new E.Mesh,D=i.DecodeArrayToMesh(o,o.byteLength,s);else if(n===E.POINT_CLOUD)s=new E.PointCloud,D=i.DecodeArrayToPointCloud(o,o.byteLength,s);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!D.ok()||s.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+D.error_msg());const w={index:null,attributes:[]};for(const S in t){const h=self[a[S]];let k,c;if(e.useUniqueIDs)c=t[S],k=i.GetAttributeByUniqueId(s,c);else{if(c=i.GetAttributeId(s,E[t[S]]),c===-1)continue;k=i.GetAttribute(s,c)}const U=C(E,i,s,S,h,k);S==="color"&&(U.vertexColorSpace=e.vertexColorSpace),w.attributes.push(U)}return n===E.TRIANGULAR_MESH&&(w.index=g(E,i,s)),E.destroy(s),w}function g(E,i,o){const e=o.num_faces()*3,t=e*4,a=E._malloc(t);i.GetTrianglesUInt32Array(o,t,a);const s=new Uint32Array(E.HEAPF32.buffer,a,e).slice();return E._free(a),{array:s,itemSize:1}}function C(E,i,o,e,t,a){const s=a.num_components(),D=o.num_points()*s,n=D*t.BYTES_PER_ELEMENT,w=B(E,t),S=E._malloc(n);i.GetAttributeDataArrayForAllPoints(o,a,w,n,S);const h=new t(E.HEAPF32.buffer,S,D).slice();return E._free(S),{name:e,array:h,itemSize:s}}function B(E,i){switch(i){case Float32Array:return E.DT_FLOAT32;case Int8Array:return E.DT_INT8;case Int16Array:return E.DT_INT16;case Int32Array:return E.DT_INT32;case Uint8Array:return E.DT_UINT8;case Uint16Array:return E.DT_UINT16;case Uint32Array:return E.DT_UINT32}}}class _G extends Zg{constructor(){super();tA(this,"mixer");tA(this,"glTFLoader");const I=new bG;I.setDecoderPath("jsm/libs/draco/"),this.glTFLoader=new So,this.glTFLoader.setDRACOLoader(I)}async init(I){const[g,C,B,E]=await Promise.all([this.glTFLoader.loadAsync("models/eve$@walk_compressed.glb"),this.glTFLoader.loadAsync("models/eve@idle.glb"),this.glTFLoader.loadAsync("models/eve@jump.glb"),this.glTFLoader.loadAsync("models/eve@pose.glb")]);g.scene.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),this.mixer=new Oc(g.scene),I.idle=this.mixer.clipAction(C.animations[0]),I.walk=this.mixer.clipAction(Dc.subclip(g.animations[0],"walk",0,42)),I.jump=this.mixer.clipAction(B.animations[0]),I.pose=this.mixer.clipAction(E.animations[0]),I.idle.play(),this.add(g.scene)}update(I){var g;(g=this.mixer)==null||g.update(I)}}class vG{constructor(A,I){tA(this,"scene");tA(this,"wait",!1);tA(this,"animationActions",{});tA(this,"activeAction");tA(this,"speed",0);tA(this,"keyboard");tA(this,"model");this.scene=A,this.keyboard=I}async init(){this.model=new _G,await this.model.init(this.animationActions),this.activeAction=this.animationActions.idle,this.scene.add(this.model)}setAction(A){var I;this.activeAction!=A&&((I=this.activeAction)==null||I.fadeOut(.1),A.reset().fadeIn(.1).play(),this.activeAction=A)}update(A){var I,g;if(!this.wait){let C=!1;this.keyboard.keyMap.Space&&(this.setAction(this.animationActions.jump),C=!0,this.wait=!0,setTimeout(()=>this.wait=!1,1200)),!C&&(this.keyboard.keyMap.KeyW||this.keyboard.keyMap.KeyA||this.keyboard.keyMap.KeyS||this.keyboard.keyMap.KeyD)&&(this.setAction(this.animationActions.walk),C=!0),!C&&this.keyboard.keyMap.KeyQ&&(this.setAction(this.animationActions.pose),C=!0),!C&&this.setAction(this.animationActions.idle)}this.activeAction===this.animationActions.walk?(I=this.model)==null||I.update(A*2):(g=this.model)==null||g.update(A)}}class ZG{constructor(A,I,g){tA(this,"camera");tA(this,"pivot",new BI);tA(this,"yaw",new BI);tA(this,"pitch",new BI);tA(this,"onDocumentMouseMove",A=>{this.yaw.rotation.y-=A.movementX*.002;const I=this.pitch.rotation.x-A.movementY*.002;I>-1&&I<1&&(this.pitch.rotation.x=I)});tA(this,"onDocumentMouseWheel",A=>{A.preventDefault();const I=this.camera.position.z+A.deltaY*.005;I>=.5&&I<=10&&(this.camera.position.z=I)});this.camera=I,this.yaw.position.y=.75,document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===g.domElement?(g.domElement.addEventListener("mousemove",this.onDocumentMouseMove),g.domElement.addEventListener("wheel",this.onDocumentMouseWheel)):(g.domElement.removeEventListener("mousemove",this.onDocumentMouseMove),g.domElement.removeEventListener("wheel",this.onDocumentMouseWheel))}),A.add(this.pivot),this.pivot.add(this.yaw),this.yaw.add(this.pitch),this.pitch.add(I)}}class WG{constructor(A){tA(this,"keyMap",{});tA(this,"onDocumentKey",A=>{this.keyMap[A.code]=A.type==="keydown"});document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===A.domElement?(document.addEventListener("keydown",this.onDocumentKey),document.addEventListener("keyup",this.onDocumentKey)):(document.removeEventListener("keydown",this.onDocumentKey),document.removeEventListener("keyup",this.onDocumentKey))})}}class PG{constructor(A,I,g,C,B=[0,0,0],E){tA(this,"scene");tA(this,"world");tA(this,"ui");tA(this,"body");tA(this,"animationController");tA(this,"vector",new q);tA(this,"inputVelocity",new q);tA(this,"euler",new WI);tA(this,"quaternion",new dI);tA(this,"followTarget",new BI);tA(this,"grounded",!1);tA(this,"rotationMatrix",new dA);tA(this,"targetQuaternion",new dI);tA(this,"followCam");tA(this,"keyboard");tA(this,"wait",!1);tA(this,"handle",-1);this.scene=A,this.world=C,this.ui=E,this.keyboard=new WG(g),this.followCam=new ZG(this.scene,I,g),A.add(this.followTarget),this.body=C.createRigidBody(OI.dynamic().setTranslation(...B).enabledRotations(!1,!1,!1).setCanSleep(!1)),this.handle=this.body.handle;const i=iI.capsule(.5,.15).setTranslation(0,.645,0).setMass(1).setFriction(0).setActiveEvents(iQ.COLLISION_EVENTS);C.createCollider(i,this.body)}async init(){this.animationController=new vG(this.scene,this.keyboard),await this.animationController.init()}setGrounded(A){A!=this.grounded&&(this.grounded=A,A?(this.body.setLinearDamping(4),setTimeout(()=>{this.wait=!1},250)):this.body.setLinearDamping(0))}reset(){this.body.setLinvel(new q(0,0,0),!0),this.body.setTranslation(new q(0,1,0),!0),this.ui.reset()}update(A){var g,C,B,E,i,o,e,t,a,s,D,n,w;this.inputVelocity.set(0,0,0);let I=1;this.grounded&&(this.keyboard.keyMap.KeyW&&(this.inputVelocity.z=-1,I=9.5),this.keyboard.keyMap.KeyS&&(this.inputVelocity.z=1,I=9.5),this.keyboard.keyMap.KeyA&&(this.inputVelocity.x=-1,I=9.5),this.keyboard.keyMap.KeyD&&(this.inputVelocity.x=1,I=9.5),this.inputVelocity.setLength(A*I),!this.wait&&this.keyboard.keyMap.Space&&(this.wait=!0,this.inputVelocity.y=5)),this.euler.y=this.followCam.yaw.rotation.y,this.quaternion.setFromEuler(this.euler),this.inputVelocity.applyQuaternion(this.quaternion),this.body.applyImpulse(this.inputVelocity,!0),this.body.translation().y<-3&&this.reset(),this.followTarget.position.copy(this.body.translation()),this.followTarget.getWorldPosition(this.vector),this.followCam.pivot.position.lerp(this.vector,A*10),(C=(g=this.animationController)==null?void 0:g.model)==null||C.position.lerp(this.vector,A*20),this.rotationMatrix.lookAt(this.followTarget.position,(E=(B=this.animationController)==null?void 0:B.model)==null?void 0:E.position,(o=(i=this.animationController)==null?void 0:i.model)==null?void 0:o.up),this.targetQuaternion.setFromRotationMatrix(this.rotationMatrix),((t=(e=this.animationController)==null?void 0:e.model)==null?void 0:t.position.distanceTo(this.followTarget.position))>1e-4&&!((s=(a=this.animationController)==null?void 0:a.model)!=null&&s.quaternion.equals(this.targetQuaternion))&&(this.targetQuaternion.z=0,this.targetQuaternion.x=0,this.targetQuaternion.normalize(),(n=(D=this.animationController)==null?void 0:D.model)==null||n.quaternion.rotateTowards(this.targetQuaternion,A*20)),(w=this.animationController)==null||w.update(A)}}class jG extends yc{constructor(A){super(A),this.type=CC}parse(A){const I=function(h,k){switch(h){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(k||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(k||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(k||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(k||""))}},g=`
`,C=function(h,k,c){k=k||1024;let U=h.pos,d=-1,J=0,K="",H=String.fromCharCode.apply(null,new Uint16Array(h.subarray(U,U+128)));for(;0>(d=H.indexOf(g))&&J<k&&U<h.byteLength;)K+=H,J+=H.length,U+=128,H+=String.fromCharCode.apply(null,new Uint16Array(h.subarray(U,U+128)));return-1<d?(h.pos+=J+d+1,K+H.slice(0,d)):!1},B=function(h){const k=/^#\?(\S+)/,c=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,U=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,d=/^\s*FORMAT=(\S+)\s*$/,J=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,K={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let H,y;for((h.pos>=h.byteLength||!(H=C(h)))&&I(1,"no header found"),(y=H.match(k))||I(3,"bad initial token"),K.valid|=1,K.programtype=y[1],K.string+=H+`
`;H=C(h),H!==!1;){if(K.string+=H+`
`,H.charAt(0)==="#"){K.comments+=H+`
`;continue}if((y=H.match(c))&&(K.gamma=parseFloat(y[1])),(y=H.match(U))&&(K.exposure=parseFloat(y[1])),(y=H.match(d))&&(K.valid|=2,K.format=y[1]),(y=H.match(J))&&(K.valid|=4,K.height=parseInt(y[1],10),K.width=parseInt(y[2],10)),K.valid&2&&K.valid&4)break}return K.valid&2||I(3,"missing format specifier"),K.valid&4||I(3,"missing image size specifier"),K},E=function(h,k,c){const U=k;if(U<8||U>32767||h[0]!==2||h[1]!==2||h[2]&128)return new Uint8Array(h);U!==(h[2]<<8|h[3])&&I(3,"wrong scanline width");const d=new Uint8Array(4*k*c);d.length||I(4,"unable to allocate buffer space");let J=0,K=0;const H=4*U,y=new Uint8Array(4),G=new Uint8Array(H);let m=c;for(;m>0&&K<h.byteLength;){K+4>h.byteLength&&I(1),y[0]=h[K++],y[1]=h[K++],y[2]=h[K++],y[3]=h[K++],(y[0]!=2||y[1]!=2||(y[2]<<8|y[3])!=U)&&I(3,"bad rgbe scanline format");let x=0,p;for(;x<H&&K<h.byteLength;){p=h[K++];const W=p>128;if(W&&(p-=128),(p===0||x+p>H)&&I(3,"bad scanline data"),W){const j=h[K++];for(let gA=0;gA<p;gA++)G[x++]=j}else G.set(h.subarray(K,K+p),x),x+=p,K+=p}const v=U;for(let W=0;W<v;W++){let j=0;d[J]=G[W+j],j+=U,d[J+1]=G[W+j],j+=U,d[J+2]=G[W+j],j+=U,d[J+3]=G[W+j],J+=4}m--}return d},i=function(h,k,c,U){const d=h[k+3],J=Math.pow(2,d-128)/255;c[U+0]=h[k+0]*J,c[U+1]=h[k+1]*J,c[U+2]=h[k+2]*J,c[U+3]=1},o=function(h,k,c,U){const d=h[k+3],J=Math.pow(2,d-128)/255;c[U+0]=TQ.toHalfFloat(Math.min(h[k+0]*J,65504)),c[U+1]=TQ.toHalfFloat(Math.min(h[k+1]*J,65504)),c[U+2]=TQ.toHalfFloat(Math.min(h[k+2]*J,65504)),c[U+3]=TQ.toHalfFloat(1)},e=new Uint8Array(A);e.pos=0;const t=B(e),a=t.width,s=t.height,D=E(e.subarray(e.pos),a,s);let n,w,S;switch(this.type){case Ag:S=D.length/4;const h=new Float32Array(S*4);for(let c=0;c<S;c++)i(D,c*4,h,c*4);n=h,w=Ag;break;case CC:S=D.length/4;const k=new Uint16Array(S*4);for(let c=0;c<S;c++)o(D,c*4,k,c*4);n=k,w=CC;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:a,height:s,data:n,header:t.string,gamma:t.gamma,exposure:t.exposure,type:w}}setDataType(A){return this.type=A,this}load(A,I,g,C){function B(E,i){switch(E.type){case Ag:case CC:E.colorSpace=MI,E.minFilter=qI,E.magFilter=qI,E.generateMipmaps=!1,E.flipY=!0;break}I&&I(E,i)}return super.load(A,B,g,C)}}class rQ extends wI{constructor(){super(rQ.Geometry,new tC({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const A=new q,I=new q,g=new Pt(16,16),C=new Pt(16,16);let B=kg;const E=rQ.Geometry,i=new Ki({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),o=new Ki({uniforms:{map:{value:g},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),e=new wI(E,i),t=[],a=fC.Shader,s=new Ki({name:a.name,uniforms:{map:{value:null},occlusionMap:{value:C},color:{value:new kA(16777215)},scale:{value:new KA},screenPosition:{value:new q}},vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,blending:ME,transparent:!0,depthWrite:!1}),D=new wI(E,s);this.addElement=function(k){t.push(k)};const n=new KA,w=new KA,S=new _c,h=new CI;this.onBeforeRender=function(k,c,U){k.getCurrentViewport(h);const d=k.getRenderTarget(),J=d!==null?d.texture.type:kg;B!==J&&(g.dispose(),C.dispose(),g.type=C.type=J,B=J);const K=h.w/h.z,H=h.z/2,y=h.w/2;let G=16/h.w;if(n.set(G*K,G),S.min.set(h.x,h.y),S.max.set(h.x+(h.z-16),h.y+(h.w-16)),I.setFromMatrixPosition(this.matrixWorld),I.applyMatrix4(U.matrixWorldInverse),!(I.z>0)&&(A.copy(I).applyMatrix4(U.projectionMatrix),w.x=h.x+A.x*H+H-8,w.y=h.y+A.y*y+y-8,S.containsPoint(w))){k.copyFramebufferToTexture(w,g);let m=i.uniforms;m.scale.value=n,m.screenPosition.value=A,k.renderBufferDirect(U,null,E,i,e,null),k.copyFramebufferToTexture(w,C),m=o.uniforms,m.scale.value=n,m.screenPosition.value=A,k.renderBufferDirect(U,null,E,o,e,null);const x=-A.x*2,p=-A.y*2;for(let v=0,W=t.length;v<W;v++){const j=t[v],gA=s.uniforms;gA.color.value.copy(j.color),gA.map.value=j.texture,gA.screenPosition.value.x=A.x+x*j.distance,gA.screenPosition.value.y=A.y+p*j.distance,G=j.size/h.w;const Z=h.w/h.z;gA.scale.value.set(G*Z,G),s.uniformsNeedUpdate=!0,k.renderBufferDirect(U,null,E,s,D,null)}}},this.dispose=function(){i.dispose(),o.dispose(),s.dispose(),g.dispose(),C.dispose();for(let k=0,c=t.length;k<c;k++)t[k].texture.dispose()}}}class fC{constructor(A,I=1,g=0,C=new kA(16777215)){this.texture=A,this.size=I,this.distance=g,this.color=C}}fC.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`},rQ.Geometry=function(){const Q=new jI,A=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),I=new Ft(A,5);return Q.setIndex([0,1,2,0,2,3]),Q.setAttribute("position",new bB(I,3,0,!1)),Q.setAttribute("uv",new bB(I,2,3,!1)),Q}();class VG{constructor(A){tA(this,"scene");tA(this,"light");this.scene=A,this.light=new ga(16777215,Math.PI),this.light.position.set(65.7,19.2,50.2),this.light.castShadow=!0,this.scene.add(this.light);const I=new Ri,g=I.load("img/lensflare0.png"),C=I.load("img/lensflare3.png"),B=new rQ;B.addElement(new fC(g,1e3,0)),B.addElement(new fC(C,500,.2)),B.addElement(new fC(C,250,.8)),B.addElement(new fC(C,125,.6)),B.addElement(new fC(C,62.5,.4)),this.light.add(B)}async init(){await new jG().loadAsync("img/venice_sunset_1k.hdr").then(A=>{A.mapping=GQ,this.scene.environment=A,this.scene.background=A,this.scene.backgroundBlurriness=.4})}}class XG{constructor(A,I){tA(this,"mesh");tA(this,"world");tA(this,"enabled",!0);this.world=I,this.mesh=new _t(new jI,new li({color:16777215,vertexColors:!0})),this.mesh.frustumCulled=!1,A.add(this.mesh)}update(){if(this.enabled){const{vertices:A,colors:I}=this.world.debugRender();this.mesh.geometry.setAttribute("position",new KI(A,3)),this.mesh.geometry.setAttribute("color",new KI(I,4)),this.mesh.visible=!0}else this.mesh.visible=!1}}class Fg{constructor(A,I,g,C,B="div"){this.parent=A,this.object=I,this.property=g,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(C),this.$name=document.createElement("div"),this.$name.classList.add("name"),Fg.nextNameID=Fg.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Fg.nextNameID,this.$widget=document.createElement(B),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(g)}name(A){return this._name=A,this.$name.innerHTML=A,this}onChange(A){return this._onChange=A,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(A=!0){return this.disable(!A)}disable(A=!0){return A===this._disabled||(this._disabled=A,this.domElement.classList.toggle("disabled",A),this.$disable.toggleAttribute("disabled",A)),this}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(A){const I=this.parent.add(this.object,this.property,A);return I.name(this._name),this.destroy(),I}min(A){return this}max(A){return this}step(A){return this}decimals(A){return this}listen(A=!0){return this._listening=A,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const A=this.save();A!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=A}getValue(){return this.object[this.property]}setValue(A){return this.object[this.property]=A,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(A){return this.setValue(A),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class zG extends Fg{constructor(A,I,g){super(A,I,g,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function yo(Q){let A,I;return(A=Q.match(/(#|0x)?([a-f0-9]{6})/i))?I=A[2]:(A=Q.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?I=parseInt(A[1]).toString(16).padStart(2,0)+parseInt(A[2]).toString(16).padStart(2,0)+parseInt(A[3]).toString(16).padStart(2,0):(A=Q.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(I=A[1]+A[1]+A[2]+A[2]+A[3]+A[3]),!!I&&"#"+I}const $G={isPrimitive:!0,match:Q=>typeof Q=="string",fromHexString:yo,toHexString:yo},SQ={isPrimitive:!0,match:Q=>typeof Q=="number",fromHexString:Q=>parseInt(Q.substring(1),16),toHexString:Q=>"#"+Q.toString(16).padStart(6,0)},Al={isPrimitive:!1,match:Array.isArray,fromHexString(Q,A,I=1){const g=SQ.fromHexString(Q);A[0]=(g>>16&255)/255*I,A[1]=(g>>8&255)/255*I,A[2]=(255&g)/255*I},toHexString:([Q,A,I],g=1)=>SQ.toHexString(Q*(g=255/g)<<16^A*g<<8^I*g<<0)},Il={isPrimitive:!1,match:Q=>Object(Q)===Q,fromHexString(Q,A,I=1){const g=SQ.fromHexString(Q);A.r=(g>>16&255)/255*I,A.g=(g>>8&255)/255*I,A.b=(255&g)/255*I},toHexString:({r:Q,g:A,b:I},g=1)=>SQ.toHexString(Q*(g=255/g)<<16^A*g<<8^I*g<<0)},gl=[$G,SQ,Al,Il];class Cl extends Fg{constructor(A,I,g,C){var B;super(A,I,g,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(B=this.initialValue,gl.find(E=>E.match(B))),this._rgbScale=C,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const E=yo(this.$text.value);E&&this._setValueFromHexString(E)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(A){if(this._format.isPrimitive){const I=this._format.fromHexString(A);this.setValue(I)}else this._format.fromHexString(A,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(A){return this._setValueFromHexString(A),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Mo extends Fg{constructor(A,I,g){super(A,I,g,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",C=>{C.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Bl extends Fg{constructor(A,I,g,C,B,E){super(A,I,g,"number"),this._initInput(),this.min(C),this.max(B);const i=E!==void 0;this.step(i?E:this._getImplicitStep(),i),this.updateDisplay()}decimals(A){return this._decimals=A,this.updateDisplay(),this}min(A){return this._min=A,this._onUpdateMinMax(),this}max(A){return this._max=A,this._onUpdateMinMax(),this}step(A,I=!0){return this._step=A,this._stepExplicit=I,this}updateDisplay(){const A=this.getValue();if(this._hasSlider){let I=(A-this._min)/(this._max-this._min);I=Math.max(0,Math.min(I,1)),this.$fill.style.width=100*I+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?A:A.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const A=t=>{const a=parseFloat(this.$input.value);isNaN(a)||(this._snapClampSetValue(a+t),this.$input.value=this.getValue())};let I,g,C,B,E,i=!1;const o=t=>{if(i){const a=t.clientX-I,s=t.clientY-g;Math.abs(s)>5?(t.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(a)>5&&e()}if(!i){const a=t.clientY-C;E-=a*this._step*this._arrowKeyMultiplier(t),B+E>this._max?E=this._max-B:B+E<this._min&&(E=this._min-B),this._snapClampSetValue(B+E)}C=t.clientY},e=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",e)};this.$input.addEventListener("input",()=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._stepExplicit&&(t=this._snap(t)),this.setValue(this._clamp(t)))}),this.$input.addEventListener("keydown",t=>{t.code==="Enter"&&this.$input.blur(),t.code==="ArrowUp"&&(t.preventDefault(),A(this._step*this._arrowKeyMultiplier(t))),t.code==="ArrowDown"&&(t.preventDefault(),A(this._step*this._arrowKeyMultiplier(t)*-1))}),this.$input.addEventListener("wheel",t=>{this._inputFocused&&(t.preventDefault(),A(this._step*this._normalizeMouseWheel(t)))},{passive:!1}),this.$input.addEventListener("mousedown",t=>{I=t.clientX,g=C=t.clientY,i=!0,B=this.getValue(),E=0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",e)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const A=s=>{const D=this.$slider.getBoundingClientRect();let n=(w=s,S=D.left,h=D.right,k=this._min,c=this._max,(w-S)/(h-S)*(c-k)+k);var w,S,h,k,c;this._snapClampSetValue(n)},I=s=>{A(s.clientX)},g=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",g)};let C,B,E=!1;const i=s=>{s.preventDefault(),this._setDraggingStyle(!0),A(s.touches[0].clientX),E=!1},o=s=>{if(E){const D=s.touches[0].clientX-C,n=s.touches[0].clientY-B;Math.abs(D)>Math.abs(n)?i(s):(window.removeEventListener("touchmove",o),window.removeEventListener("touchend",e))}else s.preventDefault(),A(s.touches[0].clientX)},e=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",e)},t=this._callOnFinishChange.bind(this);let a;this.$slider.addEventListener("mousedown",s=>{this._setDraggingStyle(!0),A(s.clientX),window.addEventListener("mousemove",I),window.addEventListener("mouseup",g)}),this.$slider.addEventListener("touchstart",s=>{s.touches.length>1||(this._hasScrollBar?(C=s.touches[0].clientX,B=s.touches[0].clientY,E=!0):i(s),window.addEventListener("touchmove",o,{passive:!1}),window.addEventListener("touchend",e))},{passive:!1}),this.$slider.addEventListener("wheel",s=>{if(Math.abs(s.deltaX)<Math.abs(s.deltaY)&&this._hasScrollBar)return;s.preventDefault();const D=this._normalizeMouseWheel(s)*this._step;this._snapClampSetValue(this.getValue()+D),this.$input.value=this.getValue(),clearTimeout(a),a=setTimeout(t,400)},{passive:!1})}_setDraggingStyle(A,I="horizontal"){this.$slider&&this.$slider.classList.toggle("active",A),document.body.classList.toggle("lil-gui-dragging",A),document.body.classList.toggle("lil-gui-"+I,A)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(A){let{deltaX:I,deltaY:g}=A;return Math.floor(A.deltaY)!==A.deltaY&&A.wheelDelta&&(I=0,g=-A.wheelDelta/120,g*=this._stepExplicit?1:10),I+-g}_arrowKeyMultiplier(A){let I=this._stepExplicit?1:10;return A.shiftKey?I*=10:A.altKey&&(I/=10),I}_snap(A){const I=Math.round(A/this._step)*this._step;return parseFloat(I.toPrecision(15))}_clamp(A){return A<this._min&&(A=this._min),A>this._max&&(A=this._max),A}_snapClampSetValue(A){this.setValue(this._clamp(this._snap(A)))}get _hasScrollBar(){const A=this.parent.root.$children;return A.scrollHeight>A.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Ql extends Fg{constructor(A,I,g,C){super(A,I,g,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(C)?C:Object.values(C),this._names=Array.isArray(C)?C:Object.keys(C),this._names.forEach(B=>{const E=document.createElement("option");E.innerHTML=B,this.$select.appendChild(E)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const A=this.getValue(),I=this._values.indexOf(A);return this.$select.selectedIndex=I,this.$display.innerHTML=I===-1?A:this._names[I],this}}class El extends Fg{constructor(A,I,g){super(A,I,g,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",C=>{C.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let As=!1;class Uo{constructor({parent:A,autoPlace:I=A===void 0,container:g,width:C,title:B="Controls",injectStyles:E=!0,touchStyles:i=!0}={}){if(this.parent=A,this.root=A?A.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",o=>{o.code!=="Enter"&&o.code!=="Space"||(o.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(B),i&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!As&&E&&(function(o){const e=document.createElement("style");e.innerHTML=o;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),As=!0),g?g.appendChild(this.domElement):I&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),C&&this.domElement.style.setProperty("--width",C+"px"),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation())}add(A,I,g,C,B){if(Object(g)===g)return new Ql(this,A,I,g);const E=A[I];switch(typeof E){case"number":return new Bl(this,A,I,g,C,B);case"boolean":return new zG(this,A,I);case"string":return new El(this,A,I);case"function":return new Mo(this,A,I)}console.error(`gui.add failed
	property:`,I,`
	object:`,A,`
	value:`,E)}addColor(A,I,g=1){return new Cl(this,A,I,g)}addFolder(A){return new Uo({parent:this,title:A})}load(A,I=!0){return A.controllers&&this.controllers.forEach(g=>{g instanceof Mo||g._name in A.controllers&&g.load(A.controllers[g._name])}),I&&A.folders&&this.folders.forEach(g=>{g._title in A.folders&&g.load(A.folders[g._title])}),this}save(A=!0){const I={controllers:{},folders:{}};return this.controllers.forEach(g=>{if(!(g instanceof Mo)){if(g._name in I.controllers)throw new Error(`Cannot save GUI with duplicate property "${g._name}"`);I.controllers[g._name]=g.save()}}),A&&this.folders.forEach(g=>{if(g._title in I.folders)throw new Error(`Cannot save GUI with duplicate folder "${g._title}"`);I.folders[g._title]=g.save()}),I}open(A=!0){return this._closed=!A,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(A=!0){return this._closed=!A,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const I=this.$children.clientHeight;this.$children.style.height=I+"px",this.domElement.classList.add("transition");const g=B=>{B.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",g))};this.$children.addEventListener("transitionend",g);const C=A?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!A),requestAnimationFrame(()=>{this.$children.style.height=C+"px"})}),this}title(A){return this._title=A,this.$title.innerHTML=A,this}reset(A=!0){return(A?this.controllersRecursive():this.controllers).forEach(I=>I.reset()),this}onChange(A){return this._onChange=A,this}_callOnChange(A){this.parent&&this.parent._callOnChange(A),this._onChange!==void 0&&this._onChange.call(this,{object:A.object,property:A.property,value:A.getValue(),controller:A})}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(A){this.parent&&this.parent._callOnFinishChange(A),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:A.object,property:A.property,value:A.getValue(),controller:A})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(A=>A.destroy())}controllersRecursive(){let A=Array.from(this.controllers);return this.folders.forEach(I=>{A=A.concat(I.controllersRecursive())}),A}foldersRecursive(){let A=Array.from(this.folders);return this.folders.forEach(I=>{A=A.concat(I.foldersRecursive())}),A}}class il{constructor(A,I,g){tA(this,"material",new Wg);new So().load("models/start.glb",C=>{var e;const B=C.scene.getObjectByName("Cylinder");B.receiveShadow=!0,A.add(B),this.material=B.material,(e=this.material.map)==null||e.center.set(.1034,0);const E=I.createRigidBody(OI.fixed().setTranslation(...g)),i=new Float32Array(B.geometry.attributes.position.array),o=iI.convexHull(i);I.createCollider(o,E),B.position.copy(E.translation()),B.quaternion.copy(E.rotation()),setInterval(()=>{this.material.map.rotation+=Math.PI},500)})}}class Rg{constructor(A,I,g,C,B=[0,0,0]){const E=new wI(new sB(...g),new Wg);E.castShadow=!0,E.receiveShadow=!0,A.add(E);const i=I.createRigidBody(OI.fixed().setTranslation(...C).setRotation(new dI().setFromEuler(new WI(...B)))),o=iI.cuboid(g[0]/2,g[1]/2,g[2]/2);I.createCollider(o,i),E.position.copy(i.translation()),E.quaternion.copy(i.rotation())}}class ol{constructor(A,I,g){tA(this,"dynamicBody");tA(this,"material",new Wg);tA(this,"texture");tA(this,"handle",-1);this.texture=new Ri().load("img/finish.png",B=>{B.repeat.x=2,B.wrapS=GC,B.flipY=!0});const C=new wI(new vB(3.4,3.4,2,12,1,!0),new tc({transparent:!0,opacity:.75,map:this.texture,side:tg}));C.position.set(...g),C.position.y+=3,A.add(C),new So().load("models/finish.glb",B=>{const E=B.scene.getObjectByName("Cylinder");E.receiveShadow=!0,A.add(E),this.material=E.material;const i=I.createRigidBody(OI.fixed().setTranslation(...g));this.handle=i.handle;const o=new Float32Array(E.geometry.attributes.position.array),e=iI.convexHull(o);I.createCollider(e,i),E.position.copy(i.translation()),E.quaternion.copy(i.rotation()),setInterval(()=>{this.material.map.rotation+=Math.PI},500)})}update(A){this.texture.offset.x+=A/3}}class Is{constructor(A,I,g){tA(this,"group");tA(this,"body");tA(this,"handle",-1);this.group=new Zg,this.group.position.set(...g),A.add(this.group);const C=new wI(new vB(.25,.25,1.5),new Wg);C.castShadow=!0,this.group.add(C);const B=new wI(new vB(.25,.25,4),new Wg);B.rotateX(-Math.PI/2),B.castShadow=!0,this.group.add(B),this.body=I.createRigidBody(OI.kinematicPositionBased().setTranslation(...g)),this.handle=this.body.handle;const E=iI.cylinder(2,.25).setRotation(new dI().setFromEuler(new WI(-Math.PI/2,0,0)));I.createCollider(E,this.body)}update(A){this.group.rotation.y+=A,this.body.setNextKinematicRotation(this.group.quaternion)}}class lE{constructor(A,I,g,C=0){tA(this,"dynamicBodies",[]);tA(this,"handles",[-1,-1]);const B=[];for(let E=0;E<4;E++){const i=new wI(new Ui(.4),new Wg);i.position.set(g[0],g[1],E+g[2]),i.castShadow=!0,A.add(i);let o;E==0?o=Bg.Fixed:o=Bg.Dynamic;const e=I.createRigidBody(new OI(o).setTranslation(g[0],g[1],E+g[2]).setRotation(new dI().setFromEuler(new WI(0,C,0))));let t=iI.ball(.4).setMass(1);if(E>=2&&this.handles.push(e.handle),I.createCollider(t,e),E>0){let a=B[B.length-1],s=Ng.spherical(new hE(0,0,0),new hE(0,0,-1));I.createImpulseJoint(s,a,e,!0)}B.push(e),this.dynamicBodies.push([i,e])}}update(){for(let A=0,I=this.dynamicBodies.length;A<I;A++)this.dynamicBodies[A][0].position.copy(this.dynamicBodies[A][1].translation()),this.dynamicBodies[A][0].quaternion.copy(this.dynamicBodies[A][1].rotation())}}class el{constructor(A,I,g){tA(this,"scene");tA(this,"camera");tA(this,"renderer");tA(this,"ui");tA(this,"player");tA(this,"world");tA(this,"rapierDebugRenderer");tA(this,"eventQueue");tA(this,"finish");tA(this,"spinners",[]);tA(this,"pendulums",[]);this.scene=A,this.camera=I,this.renderer=g,this.ui=new vc(this.renderer)}async init(){await oG.init();const A=new q(0,-9.81,0);this.world=new DQ(A),this.eventQueue=new _a(!0),this.rapierDebugRenderer=new XG(this.scene,this.world),this.rapierDebugRenderer.enabled=!1,new Uo().add(this.rapierDebugRenderer,"enabled").name("Rapier Degug Renderer"),new il(this.scene,this.world,[0,-.5,0]),new Rg(this.scene,this.world,[1,.1,2],[0,0,6]),new Rg(this.scene,this.world,[2.5,.1,1],[3,.25,6]),new Rg(this.scene,this.world,[2,.1,1],[6,1,6]),new Rg(this.scene,this.world,[.25,.1,4.5],[6,2,2.25]),new Rg(this.scene,this.world,[4,.1,5],[6,2,-3]),this.spinners.push(new Is(this.scene,this.world,[6,2.8,-3])),new Rg(this.scene,this.world,[1,.1,2],[6.25,2.5,-7.5]),new Rg(this.scene,this.world,[4,.1,4],[2.5,3,-8]),this.spinners.push(new Is(this.scene,this.world,[2.5,3.8,-8])),new Rg(this.scene,this.world,[1,.1,2.75],[1.5,3.75,-3.25],[-Math.PI/8,0,0]),new Rg(this.scene,this.world,[6,.1,1],[-1,4.5,-1]),this.pendulums.push(new lE(this.scene,this.world,[0,8,-1])),this.pendulums.push(new lE(this.scene,this.world,[-2,8,-1])),new Rg(this.scene,this.world,[1.5,.1,8],[-5.5,4.5,4.5],[0,0,-Math.PI/8]),this.pendulums.push(new lE(this.scene,this.world,[-5,8,2.5],Math.PI/2)),this.pendulums.push(new lE(this.scene,this.world,[-5,8,5],Math.PI/2)),this.finish=new ol(this.scene,this.world,[0,4,10]),this.player=new PG(this.scene,this.camera,this.renderer,this.world,[0,.1,0],this.ui),await this.player.init();const I=new VG(this.scene);await I.init(),I.light.target=this.player.followTarget,this.ui.show()}update(A){var I,g,C,B,E;this.spinners.forEach(i=>{i.update(A)}),this.world.timestep=Math.min(A,.1),(I=this.world)==null||I.step(this.eventQueue),(g=this.eventQueue)==null||g.drainCollisionEvents((i,o,e)=>{var s,D;e&&[i,o].includes((s=this.finish)==null?void 0:s.handle)&&this.ui.showLevelCompleted();let t=!1;this.spinners.forEach(n=>{[i,o].includes(n.handle)&&(t=!0)});let a=!1;this.pendulums.forEach(n=>{n.handles.some(w=>[i,o].includes(w))&&(a=!0)}),!t&&!a&&((D=this.player)==null||D.setGrounded(e))}),(C=this.player)==null||C.update(A),(B=this.finish)==null||B.update(A),this.pendulums.forEach(i=>{i.update()}),(E=this.rapierDebugRenderer)==null||E.update()}}const gs=new gc,nQ=new XI(75,window.innerWidth/window.innerHeight,.1,1e3);nQ.position.set(0,0,2);const FB=new Ic({antialias:!0});FB.setSize(window.innerWidth,window.innerHeight),FB.shadowMap.enabled=!0,document.body.appendChild(FB.domElement),window.addEventListener("resize",()=>{nQ.aspect=window.innerWidth/window.innerHeight,nQ.updateProjectionMatrix(),FB.setSize(window.innerWidth,window.innerHeight)});const Cs=new VB;document.body.appendChild(Cs.dom);const Bs=new el(gs,nQ,FB);await Bs.init();const tl=new Rc;let Qs=0;function Es(){requestAnimationFrame(Es),Qs=tl.getDelta(),Bs.update(Qs),FB.render(gs,nQ),Cs.update()}Es()})();