(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r,i=n(a("PJYZ")),s=n(a("VbXa")),l=n(a("8OQS")),o=n(a("pVnL")),d=n(a("q1tI")),c=n(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},n&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),d.default.createElement("source",{media:r,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function v(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:n})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:n})}))}function z(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?z(e,!0):"")+z(e)})).join("")+"<img "+d+s+l+a+n+t+i+r+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,n=e.generateSources,r=e.spreadProps,i=d.default.createElement(O,(0,o.default)({src:t},r));return a.length>1?d.default.createElement("picture",null,n(a),i):i},O=d.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:n,src:r},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,z=e.loading,L=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,A=(0,o.default)({opacity:k?1:0,transition:R?"opacity "+b+"ms":"none"},l),V="boolean"==typeof h?"lightgray":h,N={transitionDelay:b+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&N,{},l,{},f),x={title:t,alt:this.state.isVisible?"":a,style:T,className:g,itemProp:S};if(p){var W=p,q=W[0];return d.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),V&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&N)}),q.base64&&d.default.createElement(I,{src:q.base64,spreadProps:x,imageVariants:W,generateSources:w}),q.tracedSVG&&d.default.createElement(I,{src:q.tracedSVG,spreadProps:x,imageVariants:W,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,E(W),d.default.createElement(O,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:z,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:z},q,{imageVariants:W}))}}))}if(m){var J=m,P=J[0],M=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},i);return"inherit"===i.display&&delete M.display,d.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},V&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:V,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},R&&N)}),P.base64&&d.default.createElement(I,{src:P.base64,spreadProps:x,imageVariants:J,generateSources:w}),P.tracedSVG&&d.default.createElement(I,{src:P.tracedSVG,spreadProps:x,imageVariants:J,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,E(J),d.default.createElement(O,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:z,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:z},P,{imageVariants:J}))}}))}return null},t}(d.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),A=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});k.propTypes={resolutions:R,sizes:A,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([A,c.default.arrayOf(A)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var V=k;t.default=V},OGtf:function(e,t,a){var n=a("XKFU"),r=a("eeVq"),i=a("vhPU"),s=/"/g,l=function(e,t,a,n){var r=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(s,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=(a("Wbzz"),a("Bl7J")),s=(a("ezAz"),a("9eSz"),a("vrFN")),l=a("kmJX"),o=a.n(l);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"Home"}),r.a.createElement("section",null,r.a.createElement("h2",null,"Professional Stuff"),r.a.createElement("img",{class:"profile-img",src:o.a,alt:"Classic Kelse"}),r.a.createElement("h3",null,"Summary"),r.a.createElement("p",null,"Energetic, creative, self-motivated individual with a passion for winemaking.  Outgoing, team player with excellent interpersonal skills allowing for successful interactions with customers in varying situations.  Interacts easily with people of diverse backgrounds, cultures, and professions.  Possesses effective speaking and listening skills as well as outstanding verbal and written communication skills.  Works well with others and is able to complete tasks with little or no supervision."),r.a.createElement("h2",null,"Experience"),r.a.createElement("p",null,"Ladies Learning Code"),r.a.createElement("p",null,"July 2014 - February 2016"),r.a.createElement("p",null,"Created and managed all curriculum and instructor training for 20+ Canadian chapters. Responsible for all tech related duties."),r.a.createElement("p",null,"Key contributions:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Created 9 new workshops focusing on HTML, CSS, JavaScript, jQuery, Wordpress and Responsive Web Design."),r.a.createElement("li",null,"Created all Hackapalooza content (2 day conference style event), consisting of 2-4 hour workshop sessions focused on front-end coding languages and web development related topics."),r.a.createElement("li",null,"Lead instructor and created curriculum for the Digital Skills part-time program."),r.a.createElement("li",null,"Provided training for all instructors, in all Canadian chapters, focusing on creating an inclusive and engaging learning environment."),r.a.createElement("li",null,"Maintained the ladieslearningcode.com website."),r.a.createElement("li",null,"Created interactive slide deck template for consistent national workshop branding."),r.a.createElement("li",null,"Volunteer lead instructor from 2011-2014 for Toronto workshops and several chapter launches.")),r.a.createElement("h3",null,"Lead Front-End Developer"),r.a.createElement("p",null,"Field ID"),r.a.createElement("p",null,"March 2013 - February 2014"),r.a.createElement("p",null,"Lead the front-end development for in-house safety inspection software."),r.a.createElement("p",null,"Key contributions:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Responsible for setting code standards for the front-end development."),r.a.createElement("li",null,"Created a fully customized front-end framework, including UI/UX."),r.a.createElement("li",null,"Standardized the site architecture and design. The framework contains reusable components and extensible classes for customization and flexibility.")),r.a.createElement("p",null,"See my complete work history on ",r.a.createElement("a",{href:"https://www.linkedin.com/in/christinatruong/",target:"_blank"},"LinkedIn"),".")),r.a.createElement("section",null,r.a.createElement("h2",null,"Education"),r.a.createElement("h3",null,"Seneca College - Toronto, ON"),r.a.createElement("p",null,"Webmaster Content Site Design Certificate, 2006"),r.a.createElement("p",null,"14 week full-time program."),r.a.createElement("h3",null,"York University - Toronto, ON"),r.a.createElement("p",null,"Bachelor of Arts, 2001-2005"),r.a.createElement("p",null,"Double Major in Communications & Psychology."),r.a.createElement("h3",null,"San Jose State University - San Jose, CA"),r.a.createElement("p",null,"General Studies, 2000"),r.a.createElement("p",null,"First year general studies.")))}},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/19787/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59d48/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/eea35/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/78d2a/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/a54c6/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},kmJX:function(e,t,a){e.exports=a.p+"static/kelsie-64d9cef0e50d3c41e520fa31b465b489.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-6b2398913dd4deab5471.js.map