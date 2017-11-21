/*! Copyright 2009-2017 Evernote Corporation. All rights reserved. */

function TagSelector(a,b,c){"use strict";function d(){return 0===G.value.indexOf("\n")}function e(){I||(I=new MutationObserver(function(a){a.forEach(function(a){if(a.addedNodes&&a.addedNodes.length>0)for(var b=0;b<a.addedNodes.length;b++){var c=a.addedNodes[b];"FONT"===c.tagName&&c.parentNode.removeChild(c)}})}));var a={childList:!0,subtree:!0};I.observe(G,a)}function f(){I&&I.disconnect()}function g(){var a=document.activeElement===G;return G.blur(),a}function h(a,b){for(var c=0;c<b.length;c++)for(var d=new Tag(b[c].name),e=b[c].name.split(/\s+/),f=0;f<e.length;f++)if(d.paths.indexOf(e[f])<0&&d.paths.push(e[f]),a.insert(e[f],d),CommonSelector.SPECIAL_CHAR_REGEX.test(e[f])){var g=e[f].replace(CommonSelector.SPECIAL_CHAR_REGEX,"");d.paths.indexOf(g)<0&&d.paths.push(g),a.insert(g,d)}}function i(a){if(void 0!==a&&a.length>A&&(a=a.substr(0,A)),J.children.length<z&&""!==a&&!j(a)){var b=document.createElement("div");b.innerText=a;var c=document.createElement("div");c.classList.add("tTag"),c.title=a,b.classList.add("tTagText");var d=document.createElement("div");d.classList.add("tDeleteTag"),d.addEventListener("click",function(){m(this.parentNode)}),c.appendChild(b),c.appendChild(d),J.appendChild(c),J.children.length>=z&&p(B.EXCEEDED_MAX),s(),D[a]=1}}function j(a){for(var b in D)if(b.toLowerCase()===a.toLowerCase())return!0;return!1}function k(a){i(a.trim()),G.value="",w(null,"")}function l(a){var b=document.createElement("div");b.innerText=a,b.title=a,b.classList.add("tDropdownTag"),b.addEventListener("mouseover",function(){for(var a=K.querySelectorAll(".tHover"),b=0;b<a.length;b++)a[b].classList.remove("tHover");this.classList.add("tHover")}),b.addEventListener("mousedown",function(a){1===a.which&&k(this.innerText),a.preventDefault()}),CommonSelector.binaryInsert(K,function(a){return a.innerText},b),E[a]=1}function m(a){delete D[a.querySelector(".tTagText").innerText],a.parentNode.removeChild(a),J.children.length<z&&q(),s(),c()}function n(){Array.prototype.slice.call(J.querySelectorAll(".tTag")).forEach(function(a){m(a)})}function o(a){G.setAttribute("placeholder",a),H.querySelector("span").innerText=a}function p(a){G.classList.add("tDisabled"),F=!0,a===B.EXCEEDED_MAX?o(Browser.i18n.getMessage("tagNamesNotInRange")):a===B.LINKED_NOTEBOOK&&(o(Browser.i18n.getMessage("quickNote_tagsDisabled")),J.style.display="none"),G.setAttribute("readonly","true"),c()}function q(){F=!1,G.classList.remove("tDisabled"),J.style.display="",G.removeAttribute("readonly"),G.disabled=!1,o(Browser.i18n.getMessage("quickNote_addTags")),c()}function r(){var a=[];if(!F)for(var b in D)!D.hasOwnProperty(b)||G.classList.contains("tDisabled")&&G.classList.contains("tLinked")||a.push(GlobalUtils.removeControlCharacters(b));return a}function s(){for(var a=0,b=J.children.length-1;b>=0;b--)if(a||(a=J.children[b].offsetTop),J.children[b].offsetTop===a)J.children[b].classList.add("lastRow");else{if(!J.children[b].classList.contains("lastRow"))break;J.children[b].classList.remove("lastRow")}}function t(){G.focus()}function u(a,b){for(var c=a.join(" "),d=0;d<b.length;d++)if(!new RegExp("(\\s|^)"+b[d].replace(/([\\\^\$\.\|\?\*\+\(\)\[\{\]\}])/g,"\\$1"),"i").test(c))return!1;return!0}function v(){C=new Tree}function w(a,c){if(K.innerHTML="",E={},a&&""!==c.trim())for(var d=c.split(/\s+/),e=a.getMatching(d[0],75),f=0;f<e.length;f++)for(var g=0;g<e[f][1].length;g++)j(e[f][1][g].name.toLowerCase())||E[e[f][1][g].name]||!u(e[f][1][g].paths,d)||l(e[f][1][g].name);b()}function x(a){a&&(v(),n(),h(C,a),SAFARI&&(J.style.display="none",J.style.display=""))}function y(a){a&&a.forEach(function(a){k(a)})}var z=20,A=100,B={EXCEEDED_MAX:1,LINKED_NOTEBOOK:2},C=new Tree,D={},E={},F=!1;a.classList.add("tContainer");var G=document.createElement("input");G.classList.add("tInput"),G.tabIndex=3,G.setAttribute("spellcheck",!1);var H=document.createElement("div");H.classList.add("tPlaceHolder"),H.innerHTML="<span></span>",H.setAttribute("spellcheck",!1),o(Browser.i18n.getMessage("quickNote_addTags"));var I,J=document.createElement("div");J.classList.add("tExisting");var K=document.createElement("div");K.classList.add("tDropdown"),q(),G.addEventListener("input",function(){var a=G.value.split(/\s*,\s*/);if(a.length>1)for(var b=0;b<a.length;b++)k(a[b]);else w(C,G.value)}),G.addEventListener("focus",function(){H.classList.add("tPlaceHolderFocus"),EDGE&&e()}),G.addEventListener("blur",function(){H.classList.remove("tPlaceHolderFocus"),k(G.value),G.hasAttribute("readonly")&&(G.disabled=!0),EDGE&&setTimeout(f,100)}),G.addEventListener("keydown",function(a){if((EDGE||FIREFOX)&&d()&&(G.value=G.value.replace(/\n/g,"")),13===a.keyCode){var b=K.querySelector(".tHover");k(b?b.innerText:G.value)}else if(38===a.keyCode||40===a.keyCode){var b=K.querySelector(".tHover");if(b){var c=null;c=38===a.keyCode?b.previousElementSibling:b.nextElementSibling}else c=K.firstElementChild;c&&(c.classList.add("tHover"),b&&b.classList.remove("tHover"),c.scrollIntoViewIfNeeded?c.scrollIntoViewIfNeeded():c.scrollIntoView()),a.preventDefault()}}),G.addEventListener("keyup",function(a){13===a.keyCode&&G.hasAttribute("readonly")&&(G.disabled=!0)}),K.addEventListener("mousedown",function(a){a.preventDefault()}),a.appendChild(H),H.appendChild(G),a.appendChild(J),a.appendChild(J),a.appendChild(K),this.abort=g,this.addTagAndClearInput=k,this.focus=t,this.getTags=r,this.setTags=x,this.selectTags=y,this.reset=v,this.enableTagInput=q,this.disableTagInputForLinkedNb=function(){p(B.LINKED_NOTEBOOK)},this.__defineGetter__("height",function(){return K.offsetTop+K.offsetHeight}),Object.preventExtensions(this)}function Tag(a){"use strict";this.name=a,this.paths=[],Object.preventExtensions(this)}Object.preventExtensions(TagSelector),Object.preventExtensions(Tag);