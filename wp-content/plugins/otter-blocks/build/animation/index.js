!function(){var e={184:function(e,t){var l;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var n=typeof l;if("string"===n||"number"===n)e.push(l);else if(Array.isArray(l)){if(l.length){var r=a.apply(null,l);r&&e.push(r)}}else if("object"===n)if(l.toString===Object.prototype.toString)for(var i in l)o.call(l,i)&&l[i]&&e.push(i);else e.push(l.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()},722:function(e,t,l){"use strict";e.exports=l.p+"images/count-animation.1151d25d.png"},65:function(e,t,l){"use strict";e.exports=l.p+"images/typing-animation.d84cccd1.png"}},t={};function l(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,l),n.exports}l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e}(),function(){"use strict";var e=window.wp.element,t=window.wp.i18n,o=window.wp.blocks,a=window.wp.components,n=window.wp.compose,r=window.wp.blockEditor,i=window.wp.hooks,c=window.wp.data,s=window.wp.richText;const u=[{label:(0,t.__)("None","otter-blocks"),value:"none"},{label:(0,t.__)("Back In Down","otter-blocks"),value:"backInDown"},{label:(0,t.__)("Back In Left","otter-blocks"),value:"backInLeft"},{label:(0,t.__)("Back In Right","otter-blocks"),value:"backInRight"},{label:(0,t.__)("Back In Up","otter-blocks"),value:"backInUp"},{label:(0,t.__)("Back Out Down","otter-blocks"),value:"backOutDown"},{label:(0,t.__)("Back Out Left","otter-blocks"),value:"backOutLeft"},{label:(0,t.__)("Back Out Right","otter-blocks"),value:"backOutRight"},{label:(0,t.__)("Back Out Up","otter-blocks"),value:"backOutUp"},{label:(0,t.__)("Bounce","otter-blocks"),value:"bounce"},{label:(0,t.__)("Bounce In","otter-blocks"),value:"bounceIn"},{label:(0,t.__)("Bounce In Down","otter-blocks"),value:"bounceInDown"},{label:(0,t.__)("Bounce In Left","otter-blocks"),value:"bounceInLeft"},{label:(0,t.__)("Bounce In Right","otter-blocks"),value:"bounceInRight"},{label:(0,t.__)("Bounce In Up","otter-blocks"),value:"bounceInUp"},{label:(0,t.__)("Bounce Out","otter-blocks"),value:"bounceOut"},{label:(0,t.__)("Bounce Out Down","otter-blocks"),value:"bounceOutDown"},{label:(0,t.__)("Bounce Out Left","otter-blocks"),value:"bounceOutLeft"},{label:(0,t.__)("Bounce Out Right","otter-blocks"),value:"bounceOutRight"},{label:(0,t.__)("Bounce Out Up","otter-blocks"),value:"bounceOutUp"},{label:(0,t.__)("Fade In","otter-blocks"),value:"fadeIn"},{label:(0,t.__)("Fade In Down","otter-blocks"),value:"fadeInDown"},{label:(0,t.__)("Fade In Down Big","otter-blocks"),value:"fadeInDownBig"},{label:(0,t.__)("Fade In Left","otter-blocks"),value:"fadeInLeft"},{label:(0,t.__)("Fade In Left Big","otter-blocks"),value:"fadeInLeftBig"},{label:(0,t.__)("Fade In Right","otter-blocks"),value:"fadeInRight"},{label:(0,t.__)("Fade In Right Big","otter-blocks"),value:"fadeInRightBig"},{label:(0,t.__)("Fade In Up","otter-blocks"),value:"fadeInUp"},{label:(0,t.__)("Fade In Top Left","otter-blocks"),value:"fadeInTopLeft"},{label:(0,t.__)("Fade In Top Right","otter-blocks"),value:"fadeInTopRight"},{label:(0,t.__)("Fade In Bottom Left","otter-blocks"),value:"fadeInBottomLeft"},{label:(0,t.__)("Fade In Bottom Right","otter-blocks"),value:"fadeInBottomRight"},{label:(0,t.__)("Fade Out","otter-blocks"),value:"fadeOut"},{label:(0,t.__)("Fade Out Down","otter-blocks"),value:"fadeOutDown"},{label:(0,t.__)("Fade Out Down Big","otter-blocks"),value:"fadeOutDownBig"},{label:(0,t.__)("Fade Out Left","otter-blocks"),value:"fadeOutLeft"},{label:(0,t.__)("Fade Out Left Big","otter-blocks"),value:"fadeOutLeftBig"},{label:(0,t.__)("Fade Out Right","otter-blocks"),value:"fadeOutRight"},{label:(0,t.__)("Fade Out Right Big","otter-blocks"),value:"fadeOutRightBig"},{label:(0,t.__)("Fade Out Up","otter-blocks"),value:"fadeOutUp"},{label:(0,t.__)("Fade Out Up Big","otter-blocks"),value:"fadeOutUpBig"},{label:(0,t.__)("Fade Out Top Left","otter-blocks"),value:"fadeOutTopLeft"},{label:(0,t.__)("Fade Out Top Right","otter-blocks"),value:"fadeOutTopRight"},{label:(0,t.__)("Fade Out Bottom Right","otter-blocks"),value:"fadeOutBottomRight"},{label:(0,t.__)("Fade Out Bottom Left","otter-blocks"),value:"fadeOutBottomLeft"},{label:(0,t.__)("Flip","otter-blocks"),value:"flip"},{label:(0,t.__)("Flip In X","otter-blocks"),value:"flipInX"},{label:(0,t.__)("Flip In Y","otter-blocks"),value:"flipInY"},{label:(0,t.__)("Flip Out X","otter-blocks"),value:"flipOutX"},{label:(0,t.__)("Flip Out Y","otter-blocks"),value:"flipOutY"},{label:(0,t.__)("Rotate In","otter-blocks"),value:"rotateIn"},{label:(0,t.__)("Rotate In Down Left","otter-blocks"),value:"rotateInDownLeft"},{label:(0,t.__)("Rotate In Down Right","otter-blocks"),value:"rotateInDownRight"},{label:(0,t.__)("Rotate In Up Left","otter-blocks"),value:"rotateInUpLeft"},{label:(0,t.__)("Rotate In Up Right","otter-blocks"),value:"rotateInUpRight"},{label:(0,t.__)("Rotate Out","otter-blocks"),value:"rotateOut"},{label:(0,t.__)("Rotate Out Down Left","otter-blocks"),value:"rotateOutDownLeft"},{label:(0,t.__)("Rotate Out Down Right","otter-blocks"),value:"rotateOutDownRight"},{label:(0,t.__)("Rotate Out Up Left","otter-blocks"),value:"rotateOutUpLeft"},{label:(0,t.__)("Rotate Out Up Right","otter-blocks"),value:"rotateOutUpRight"},{label:(0,t.__)("Slide In Down","otter-blocks"),value:"slideInDown"},{label:(0,t.__)("Slide In Left","otter-blocks"),value:"slideInLeft"},{label:(0,t.__)("Slide In Right","otter-blocks"),value:"slideInRight"},{label:(0,t.__)("Slide In Up","otter-blocks"),value:"slideInUp"},{label:(0,t.__)("Slide Out Down","otter-blocks"),value:"slideOutDown"},{label:(0,t.__)("Slide Out Left","otter-blocks"),value:"slideOutLeft"},{label:(0,t.__)("Slide Out Right","otter-blocks"),value:"slideOutRight"},{label:(0,t.__)("Slide Out Up","otter-blocks"),value:"slideOutUp"},{label:(0,t.__)("Zoom In","otter-blocks"),value:"zoomIn"},{label:(0,t.__)("Zoom In Down","otter-blocks"),value:"zoomInDown"},{label:(0,t.__)("Zoom In Left","otter-blocks"),value:"zoomInLeft"},{label:(0,t.__)("Zoom In Right","otter-blocks"),value:"zoomInRight"},{label:(0,t.__)("Zoom In Up","otter-blocks"),value:"zoomInUp"},{label:(0,t.__)("Zoom Out","otter-blocks"),value:"zoomOut"},{label:(0,t.__)("Zoom Out Down","otter-blocks"),value:"zoomOutDown"},{label:(0,t.__)("Zoom Out Left","otter-blocks"),value:"zoomOutLeft"},{label:(0,t.__)("Zoom Out Right","otter-blocks"),value:"zoomOutRight"},{label:(0,t.__)("Zoom Out Up","otter-blocks"),value:"zoomOutUp"},{label:(0,t.__)("Roll In","otter-blocks"),value:"rollIn"},{label:(0,t.__)("Roll Out","otter-blocks"),value:"rollOut"},{label:(0,t.__)("Light Speed In Right","otter-blocks"),value:"lightSpeedInRight"},{label:(0,t.__)("Light Speed In Left","otter-blocks"),value:"lightSpeedInLeft"},{label:(0,t.__)("Light Speed Out Right","otter-blocks"),value:"lightSpeedOutRight"},{label:(0,t.__)("Light Speed Out Left","otter-blocks"),value:"lightSpeedOutLeft"},{label:(0,t.__)("Flash","otter-blocks"),value:"flash"},{label:(0,t.__)("Pulse","otter-blocks"),value:"pulse"},{label:(0,t.__)("Rubber Band","otter-blocks"),value:"rubberBand"},{label:(0,t.__)("Shake X","otter-blocks"),value:"shakeX"},{label:(0,t.__)("Shake Y","otter-blocks"),value:"shakeY"},{label:(0,t.__)("Head Shake","otter-blocks"),value:"headShake"},{label:(0,t.__)("Swing","otter-blocks"),value:"swing"},{label:(0,t.__)("TaDa","otter-blocks"),value:"tada"},{label:(0,t.__)("Wobble","otter-blocks"),value:"wobble"},{label:(0,t.__)("Jello","otter-blocks"),value:"jello"},{label:(0,t.__)("Heart Beat","otter-blocks"),value:"heartBeat"},{label:(0,t.__)("Hinge","otter-blocks"),value:"hinge"},{label:(0,t.__)("Jack In The Box","otter-blocks"),value:"jackInTheBox"}],b=[{label:(0,t.__)("Backing","otter-blocks"),value:"backInDown"},{label:(0,t.__)("Bouncing","otter-blocks"),value:"bounce"},{label:(0,t.__)("Fading","otter-blocks"),value:"fadeIn"},{label:(0,t.__)("Flipping","otter-blocks"),value:"flip"},{label:(0,t.__)("Rotating","otter-blocks"),value:"rotateIn"},{label:(0,t.__)("Sliding","otter-blocks"),value:"slideInDown"},{label:(0,t.__)("Zooming","otter-blocks"),value:"zoomIn"},{label:(0,t.__)("Rolling","otter-blocks"),value:"rollIn"},{label:(0,t.__)("Light Speed","otter-blocks"),value:"lightSpeedInRight"},{label:(0,t.__)("Other","otter-blocks"),value:"flash"}],m=["backOutDown","backOutLeft","backOutRight","backOutUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","fadeOutTopLeft","fadeOutTopRight","fadeOutBottomRight","fadeOutBottomLeft","flipOutX","flipOutY","lightSpeedOutRight","lightSpeedOutLeft","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","slideOutDown","slideOutLeft","slideOutRight","slideOutUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","rollOut"],d=[{label:(0,t.__)("None","otter-blocks"),value:"none"},{label:(0,t.__)("100 Milliseconds","otter-blocks"),value:"delay-100ms"},{label:(0,t.__)("200 Milliseconds","otter-blocks"),value:"delay-200ms"},{label:(0,t.__)("500 Milliseconds","otter-blocks"),value:"delay-500ms"},{label:(0,t.__)("One Second","otter-blocks"),value:"delay-1s"},{label:(0,t.__)("Two Second","otter-blocks"),value:"delay-2s"},{label:(0,t.__)("Three Second","otter-blocks"),value:"delay-3s"},{label:(0,t.__)("Four Second","otter-blocks"),value:"delay-4s"},{label:(0,t.__)("Five Second","otter-blocks"),value:"delay-5s"}],p=[{label:(0,t.__)("Default","otter-blocks"),value:"none"},{label:(0,t.__)("Slow","otter-blocks"),value:"slow"},{label:(0,t.__)("Slower","otter-blocks"),value:"slower"},{label:(0,t.__)("Fast","otter-blocks"),value:"fast"},{label:(0,t.__)("Faster","otter-blocks"),value:"faster"}];var v=function l(o){let{animationsList:r,updateAnimation:i,currentAnimationLabel:c,setCurrentAnimationLabel:s}=o;const u=(0,n.useInstanceId)(l),[_,m]=(0,e.useState)(""),[d,p]=(0,e.useState)(!1),v=`inspector-o-animations-control-${u}`;return(0,e.createElement)(a.BaseControl,{label:(0,t.__)("Animation","otter-blocks"),id:v},(0,e.createElement)(a.Dropdown,{contentClassName:"o-animations-control__popover",position:"bottom center",renderToggle:t=>{let{isOpen:l,onToggle:o}=t;return(0,e.createElement)(a.Button,{className:"o-animations-control__button",id:v,onClick:o,"aria-expanded":l},c)},renderContent:l=>{let{onToggle:o}=l;return(0,e.createElement)(a.MenuGroup,{label:(0,t.__)("Animations","otter-blocks")},(0,e.createElement)(a.TextControl,{placeholder:(0,t.__)("Search","otter-blocks"),value:_,onChange:e=>{m(e),p(!1)}}),(0,e.createElement)("div",{className:"components-popover__items"},r.map((t=>(0,e.createElement)(e.Fragment,null,""===_&&b.map((l=>l.value===t.value?(0,e.createElement)("div",{className:"o-animations-control__category"},l.label):"")),((t,l)=>{let o=!0;return _&&_.toLowerCase().split(" ").forEach((e=>{t.label.toLowerCase().includes(e)||(o=!1)})),o&&!d&&p(!0),o&&(0,e.createElement)(a.MenuItem,{className:c===t.label?"is-selected":"",onClick:()=>{s(t.label),i(t.value),l()}},t.label)})(t,o)))),!d&&(0,e.createElement)("div",null,(0,t.__)("Nothing found. Try searching for something else!","otter-blocks"))))}}))},k=l(184),g=l.n(k),f=function(t){let{icon:l,size:o=24,...a}=t;return(0,e.cloneElement)(l,{width:o,height:o,...a})},h=window.wp.primitives,O=(0,e.createElement)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(h.Path,{d:"M5.5 12h1.75l-2.5 3-2.5-3H4a8 8 0 113.134 6.35l.907-1.194A6.5 6.5 0 105.5 12zm9.53 1.97l-2.28-2.28V8.5a.75.75 0 00-1.5 0V12a.747.747 0 00.218.529l1.282-.84-1.28.842 2.5 2.5a.75.75 0 101.06-1.061z"})),w=(0,e.createElement)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(h.Path,{d:"M14.5 13.8c-1.1 0-2.1.7-2.4 1.8H4V17h8.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20v-1.5h-3.1c-.3-1-1.3-1.7-2.4-1.7zM11.9 7c-.3-1-1.3-1.8-2.4-1.8S7.4 6 7.1 7H4v1.5h3.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20V7h-8.1z"}));const I=l=>{let{label:o,attributes:r,setAttributes:i,resetValues:c,onClick:s,children:u}=l;(0,e.useEffect)((()=>{for(const e in c){if(c[e]!==r[e])return m(!0);m(!1)}}),[r]);const b=(0,n.useInstanceId)(I),[_,m]=(0,e.useState)(!1),d=`inspector-control-panel-control-${b}`;return(0,e.createElement)("div",{className:"o-control-panel-control"},(0,e.createElement)("div",{className:"components-base-control__field"},(0,e.createElement)("div",{className:"components-base-control__title"},(0,e.createElement)("label",{className:"components-base-control__label",htmlFor:d},o),(0,e.createElement)("div",{className:"floating-controls"},(0,e.createElement)(a.Dropdown,{position:"top left",headerTitle:o,expandOnMobile:!0,renderToggle:l=>{let{isOpen:n,onToggle:r}=l;return(0,e.createElement)(e.Fragment,null,_&&(0,e.createElement)(a.Button,{icon:(0,e.createElement)(f,{icon:O}),label:(0,t.__)("Reset to default","otter-blocks"),showTooltip:!0,isTertiary:!0,onClick:()=>i({...c})}),(0,e.createElement)(a.Button,{id:d,icon:w,label:o,showTooltip:!0,onClick:()=>{r(),s&&s()},"aria-expanded":n,className:g()({"is-active":_})}))},renderContent:()=>(0,e.createElement)("div",{className:"otter-popover-settings"},u)})))))};var L=I,R=l(722),E=l(65);const B="count",S="typing",y="default";var F=function(l){let{clientId:n,attributes:r,setAttributes:i}=l;(0,e.useEffect)((()=>{let e;if(r.className){e=r.className,e=e.split(" ");let t=Array.from(u).find((t=>e.find((e=>e===t.value))));const l=Array.from(d).find((t=>e.find((e=>e===t.value)))),o=Array.from(p).find((t=>e.find((e=>e===t.value)))),a=Array.from(d).find((t=>e.find((e=>e===`o-count-${t.value}`)))),n=Array.from(p).find((t=>e.find((e=>e===`o-count-${t.value}`)))),i=Array.from(d).find((t=>e.find((e=>e===`o-typing-${t.value}`)))),c=Array.from(p).find((t=>e.find((e=>e===`o-typing-${t.value}`))));f(t?t.value:"none"),O(l?l.value:"none"),I(o?o.value:"none"),D(t?t.label:"none"),C(a?a.value:"none"),A(n?n.value:"none"),x(i?i.value:"none"),$(c?c.value:"none")}}),[]);const{hasCountFormat:b,hasTypingFormat:k}=(0,c.useSelect)((e=>{const{getBlock:t}=e("core/block-editor"),l=(0,o.serialize)(t(n)),a=(0,s.create)({html:l});let r=!1,i=!1;return a.formats&&(r=a.formats.some((e=>!0===e.some((e=>"themeisle-blocks/count-animation"===e.type)))),i=a.formats.some((e=>!0===e.some((e=>"themeisle-blocks/typing-animation"===e.type))))),{hasCountFormat:r,hasTypingFormat:i}}),[]),[g,f]=(0,e.useState)("none"),[h,O]=(0,e.useState)("none"),[w,I]=(0,e.useState)("none"),[F,D]=(0,e.useState)((0,t.__)("None","otter-blocks")),[T,C]=(0,e.useState)("none"),[U,A]=(0,e.useState)("none"),[N,x]=(0,e.useState)("none"),[z,$]=(0,e.useState)("none"),j=(e,t,l,o)=>{let a;switch(e){case B:a="o-count-";break;case S:a="o-typing-";break;case y:a=""}const n=a+t,c="none"!==l?a+l:"";let s;r.className?(s=r.className,s=s.split(" "),s.find((e=>e===n))?s=s.join(" ").replace(n,c):(s.push(c),s=s.join(" ").trim())):s=c,s=s.replace(/\s+/g," "),""===s&&(s=void 0),i({className:s}),null==o||o()};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(L,{label:(0,t.__)("Loading Animations","otter-blocks")},(0,e.createElement)("div",{className:"o-animations-control"},(0,e.createElement)(v,{animationsList:u,updateAnimation:e=>{let t,l="none"!==e?e:"";if(r.className){t=r.className,t=t.split(" ");const e=t.find((e=>e===g));t.find((e=>"animated"===e))||t.push("animated"),e?t=t.join(" ").replace(g,l):(t.push(l),t=t.join(" "))}else t=`animated ${l}`;"none"===e&&(t=t.replace("animated","").replace(h,"").replace(w,""),O("none"),I("none")),t=t.replace(/\s+/g," ").trim(),""===t&&(t=void 0),f(e),i({className:t});let o=document.querySelector(`#block-${n} .animated`)||document.querySelector(`#block-${n}.animated`);o&&m.forEach((e=>{o.className.includes(e)&&o.addEventListener("animationend",(()=>{o.classList.remove(e),o.addEventListener("animationstart",(()=>{o.classList.remove(e)}))}))}))},currentAnimationLabel:F,setCurrentAnimationLabel:D}),"none"!==g&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.SelectControl,{label:(0,t.__)("Delay","otter-blocks"),value:h||"none",options:d,onChange:e=>j(y,h,e,(()=>O(e)))}),(0,e.createElement)(a.SelectControl,{label:(0,t.__)("Speed","otter-blocks"),value:w||"none",options:p,onChange:e=>j(y,w,e,(()=>I(e)))})))),(0,e.createElement)(L,{label:(0,t.__)("Count Animations","otter-blocks")},b?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.SelectControl,{label:(0,t.__)("Delay","otter-blocks"),value:T||"none",options:d,onChange:e=>j(B,T,e,(()=>C(e)))}),(0,e.createElement)(a.SelectControl,{label:(0,t.__)("Speed","otter-blocks"),value:U||"none",options:p,onChange:e=>j(B,U,e,(()=>$(e)))})):(0,e.createElement)(e.Fragment,null,(0,e.createElement)("img",{src:E,alt:_("Using Count Animation in the Block Editor","otter-blocks"),className:"otter-animations-count-image"}),(0,e.createElement)("p",null,(0,t.__)("You can add counting animation from the format toolbar of this block. Once you have added them, you will see customization settings here.","otter-blocks")),(0,e.createElement)("p",null,(0,t.__)("Note: This feature is not available in all the blocks.","otter-blocks")))),(0,e.createElement)(L,{label:(0,t.__)("Typing Animations","otter-blocks")},k?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.SelectControl,{label:(0,t.__)("Delay","otter-blocks"),value:N||"none",options:d,onChange:e=>j(S,N,e,(()=>x(e)))}),(0,e.createElement)(a.SelectControl,{label:(0,t.__)("Speed","otter-blocks"),value:z||"none",options:p,onChange:e=>j(S,z,e,(()=>$(e)))})):(0,e.createElement)(e.Fragment,null,(0,e.createElement)("img",{src:R,alt:_("Using Typing Animation in the Block Editor","otter-blocks"),className:"otter-animations-count-image"}),(0,e.createElement)("p",null,(0,t.__)("You can add typing animation from the format toolbar of this block. Once you have added them, you will see customization settings here.","otter-blocks")),(0,e.createElement)("p",null,(0,t.__)("Note: This feature is not available in all the blocks.","otter-blocks")))))},D=(0,e.createElement)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(h.Path,{d:"M4 20h8v-1.5H4V20zM18.9 3.5c-.6-.6-1.5-.6-2.1 0l-7.2 7.2c-.4-.1-.7 0-1.1.1-.5.2-1.5.7-1.9 2.2-.4 1.7-.8 2.2-1.1 2.7-.1.1-.2.3-.3.4l-.6 1.1H6c2 0 3.4-.4 4.7-1.4.8-.6 1.2-1.4 1.3-2.3 0-.3 0-.5-.1-.7L19 5.7c.5-.6.5-1.6-.1-2.2zM9.7 14.7c-.7.5-1.5.8-2.4 1 .2-.5.5-1.2.8-2.3.2-.6.4-1 .8-1.1.5-.1 1 .1 1.3.3.2.2.3.5.2.8 0 .3-.1.9-.7 1.3z"}));const T="themeisle-blocks/count-animation";(0,s.registerFormatType)(T,{title:(0,t.__)("Count Animation","otter-blocks"),tagName:"o-anim-count",className:null,edit:l=>{let{isActive:o,value:a,onChange:n}=l;const i=/^\$?[\d,]+(\.\d*)?$/;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(r.RichTextToolbarButton,{icon:D,title:(0,t.__)("Count Animation","otter-blocks"),isDisabled:!o&&null===i.exec(a.text.substring(a.start,a.end)),onClick:()=>{(o||!o&&null!==i.exec(a.text.substring(a.start,a.end)))&&n((0,s.toggleFormat)(a,{type:T}))},isActive:o}))}});const C="themeisle-blocks/typing-animation";(0,s.registerFormatType)(C,{title:(0,t.__)("Typing Animation","otter-blocks"),tagName:"o-anim-typing",className:null,edit:l=>{let{isActive:o,value:a,onChange:n}=l;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(r.RichTextToolbarButton,{icon:D,title:(0,t.__)("Typing Animation","otter-blocks"),onClick:()=>{n((0,s.toggleFormat)(a,{type:C}))},isActive:o}))}});const U=(0,n.createHigherOrderComponent)((l=>n=>(0,o.hasBlockSupport)(n.name,"customClassName",!0)&&n.isSelected?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l,n),(0,e.createElement)(r.InspectorControls,null,(0,e.createElement)(a.PanelBody,{title:(0,t.__)("Animations","otter-blocks"),initialOpen:!1},(0,e.createElement)(F,{clientId:n.clientId,setAttributes:n.setAttributes,attributes:n.attributes})))):(0,e.createElement)(l,n)),"withInspectorControl");(0,i.addFilter)("editor.BlockEdit","themeisle-custom-css/with-inspector-controls",U)}()}();