(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,s=r(a("PJYZ")),n=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,b=m&&window.IntersectionObserver,S=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:s}),l.default.createElement("source",{media:i,srcSet:a,sizes:s}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function z(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?z(e,!0):"")+z(e)})).join("")+"<img "+l+n+o+a+r+t+s+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,s=l.default.createElement(R,(0,d.default)({src:t},i));return a.length>1?l.default.createElement("picture",null,r(a),s):s},R=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:r,src:i},g,{onLoad:n,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var A=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||m&&(h||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,S=e.Tag,v=e.itemProp,z=e.loading,L=e.draggable,A=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:A?1:0,transition:V?"opacity "+b+"ms":"none"},o),N="boolean"==typeof m?"lightgray":m,q={transitionDelay:b+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},V&&q,{},o,{},f),W={title:t,alt:this.state.isVisible?"":a,style:T,className:g,itemProp:v};if(p){var x=p,P=x[0];return l.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(S,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),N&&l.default.createElement(S,{title:t,style:(0,d.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&q)}),P.base64&&l.default.createElement(O,{src:P.base64,spreadProps:W,imageVariants:x,generateSources:E}),P.tracedSVG&&l.default.createElement(O,{src:P.tracedSVG,spreadProps:W,imageVariants:x,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,y(x),l.default.createElement(R,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:z,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:a,title:t,loading:z},P,{imageVariants:x}))}}))}if(h){var B=h,J=B[0],M=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:J.width,height:J.height},s);return"inherit"===s.display&&delete M.display,l.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(J.srcSet)},N&&l.default.createElement(S,{title:t,style:(0,d.default)({backgroundColor:N,width:J.width,opacity:this.state.imgLoaded?0:1,height:J.height},V&&q)}),J.base64&&l.default.createElement(O,{src:J.base64,spreadProps:W,imageVariants:B,generateSources:E}),J.tracedSVG&&l.default.createElement(O,{src:J.tracedSVG,spreadProps:W,imageVariants:B,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,y(B),l.default.createElement(R,{alt:a,title:t,width:J.width,height:J.height,sizes:J.sizes,src:J.src,crossOrigin:this.props.crossOrigin,srcSet:J.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:z,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:a,title:t,loading:z},J,{imageVariants:B}))}}))}return null},t}(l.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});A.propTypes={resolutions:V,sizes:C,fixed:c.default.oneOfType([V,c.default.arrayOf(V)]),fluid:c.default.oneOfType([C,c.default.arrayOf(C)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=A;t.default=N},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),s=a("vhPU"),n=/"/g,o=function(e,t,a,r){var i=String(s(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(n,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),s=a("Wbzz"),n=a("Bl7J"),o=(a("ezAz"),a("9eSz"),a("vrFN"));t.default=function(){return i.a.createElement(n.a,null,i.a.createElement(o.a,{title:"Home"}),i.a.createElement("h1",null,"Kelsie Dyell"),i.a.createElement("p",null,"Welcome to Kelsie's resume"),i.a.createElement("p",null,"Brewing awesome things"),i.a.createElement(s.Link,{to:"/page-2/"},"Go to page 2"))}},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/19787/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59d48/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/eea35/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/78d2a/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/a54c6/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-34d5f668d55c341a2ac1.js.map