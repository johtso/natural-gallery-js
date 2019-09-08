!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("PhotoSwipe"),require("PhotoSwipeUI_Default")):"function"==typeof define&&define.amd?define("NaturalGallery",["PhotoSwipe","PhotoSwipeUI_Default"],e):"object"==typeof exports?exports.NaturalGallery=e(require("PhotoSwipe"),require("PhotoSwipeUI_Default")):t.NaturalGallery=e(t.PhotoSwipe,t.PhotoSwipeUI_Default)}(window,function(t,e){return function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=4)}([function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.addRows=function(e){this.completeLastRow(),t.prototype.addRows.call(this,e)},e.prototype.endResize=function(){t.prototype.endResize.call(this),this.completeLastRow(),this.flushBufferedItems()},e.prototype.completeLastRow=function(){var t=this;if(this.visibleCollection.length){var e=this.visibleCollection[this.visibleCollection.length-1].row,i=this.visibleCollection.filter(function(t){return t.row===e}).length,o=this.collection.slice(this.visibleCollection.length-i);this.organizeItems(o,o[0].row,o[0].row),o.slice(i).filter(function(t){return t.row<=o[0].row}).forEach(function(e){return t.addItemToDOM(e)})}},e}(i(1).AbstractRowGallery);e.AbstractResponsiveRowGallery=s},function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onScroll=function(){this.addRows(1)},e.prototype.onPageAdd=function(){this.addRows(this.getRowsPerPage())},e.prototype.addRows=function(t){var e=this,i=this.visibleCollection.length,o=this.visibleCollection.length?this.visibleCollection[i-1].row+1:0,n=o+t-1,s=this.collection.slice(i);this.organizeItems(s,o,n),s.filter(function(t){return t.row<=n}).forEach(function(t){return e.addItemToDOM(t)}),this.flushBufferedItems(),this.updateNextButtonVisibility()},e.prototype.endResize=function(){t.prototype.endResize.call(this),this.visibleCollection.length&&this.organizeItems(this.visibleCollection)},e}(i(2).AbstractGallery);e.AbstractRowGallery=s},function(t,e,i){"use strict";var o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var n=o(i(7)),s=o(i(8)),r=i(9),l=o(i(10)),c=i(3),a=function(){function t(t,e,i,o){void 0===o&&(o=null),this.elementRef=t,this.userOptions=e,this.photoswipeElementRef=i,this.scrollElementRef=o,this.defaultOptions={gap:3,rowsPerPage:0,showLabels:"hover",lightbox:!1,minRowsAtStart:2,selectable:!1,activable:!1,infiniteScrollOffset:0,photoSwipeOptions:null,cover:!0},this.photoswipeDefaultOptions={bgOpacity:.85,showHideOpacity:!1},this.old_scroll_top=0,this._collection=[],this._visibleCollection=[],this.photoswipeCollection=[],this.scrollBufferedItems=[],this.requiredItems=0,this.init()}return t.prototype.init=function(){var t=this;this.elementRef.classList.add("natural-gallery-js"),this.flushBufferedItems=l.debounce(function(){t.scrollBufferedItems.forEach(function(e){e.loadImage(),t.dispatchEvent("item-displayed",e.model)}),t.scrollBufferedItems=[],t.requiredItems&&(t.dispatchEvent("pagination",{offset:t.collection.length,limit:t.requiredItems}),t.requiredItems=0)},500,{leading:!1,trailing:!0}),this.defaultsOptions(),this.options.lightbox&&!this.photoswipeElementRef&&console.error("Lightbox option is set to true, but no PhotoSwipe reference is given"),this.render(),this.requestItems(),this.options.rowsPerPage||this.bindScroll(null!==this.scrollElementRef?this.scrollElementRef:document)},t.prototype.defaultsOptions=function(){for(var t in this.options=this.userOptions||{},this.defaultOptions)void 0===this.options[t]&&(this.options[t]=this.defaultOptions[t])},t.prototype.requestItems=function(){var t=this.getEstimatedItemsPerRow()*(this.getRowsPerPage()+1);this.dispatchEvent("pagination",{offset:this.collection.length,limit:t})},t.prototype.getRowsPerPage=function(){if(this.options.rowsPerPage>0)return this.options.rowsPerPage;var t=this.getEstimatedRowsPerPage();return t<this.options.minRowsAtStart?this.options.minRowsAtStart:t},t.prototype.addItemToDOM=function(t,e){var i=this;void 0===e&&(e=this.bodyElementRef),this.visibleCollection.push(t),e.appendChild(t.init()),this.scrollBufferedItems.push(t),this.requiredItems++,this.dispatchEvent("item-added-to-dom",t.model),t.element.addEventListener("select",function(){i.dispatchEvent("select",i.visibleCollection.filter(function(t){return t.selected}).map(function(t){return t.model}))}),t.element.addEventListener("activate",function(t){i.dispatchEvent("activate",{model:t.detail.item.model,clickEvent:t.detail.clickEvent})}),t.element.addEventListener("zoom",function(t){i.openPhotoSwipe(t.detail)})},t.prototype.render=function(){var t=this;this.nextButton=document.createElement("div"),this.nextButton.classList.add("natural-gallery-next"),this.nextButton.appendChild(c.Utility.getIcon("natural-gallery-icon-next")),this.nextButton.style.display="none",this.nextButton.addEventListener("click",function(e){e.preventDefault(),t.onPageAdd()}),this.bodyElementRef=document.createElement("div"),this.bodyElementRef.classList.add("natural-gallery-body"),this.extendToFreeViewport();var e=document.createElement("iframe");this.elementRef.appendChild(e);var i=l.debounce(function(){return t.startResize()},500,{leading:!0,trailing:!1}),o=l.debounce(function(){return t.endResize()},500,{leading:!1,trailing:!0});e.contentWindow.addEventListener("resize",function(){o(),i()}),this.elementRef.appendChild(this.bodyElementRef),this.elementRef.appendChild(this.nextButton)},t.prototype.updateNextButtonVisibility=function(){this.visibleCollection.length===this.collection.length?this.nextButton.style.display="none":this.nextButton.style.display="block"},t.prototype.addItems=function(t){var e=this;if(t.constructor===Array&&t.length){var i=this.collection.length===this.visibleCollection.length;t.forEach(function(t){var i=new r.Item(e.getItemOptions(),t);e._collection.push(i),e.photoswipeCollection.push(e.getPhotoswipeItem(i))}),i&&this.onPageAdd()}},t.prototype.getItemOptions=function(){return{lightbox:this.options.lightbox,selectable:this.options.selectable,activable:this.options.activable,gap:this.options.gap,showLabels:this.options.showLabels,cover:this.options.cover}},t.prototype.extendToFreeViewport=function(){if(this.options.rowsPerPage)return this.options.rowsPerPage;this.elementRef.style.minHeight=this.getGalleryVisibleHeight()+10+"px"},t.prototype.getGalleryVisibleHeight=function(){return document.documentElement.clientHeight-this.elementRef.offsetTop},t.prototype.startResize=function(){this.bodyElementRef.classList.add("resizing")},t.prototype.endResize=function(){this.bodyElementRef.classList.remove("resizing")},t.prototype.bindScroll=function(t){var e=this,i=t,o=null;o=t instanceof Document?t.documentElement:t;var n=l.debounce(function(){return e.elementRef.classList.add("scrolling")},300,{leading:!0,trailing:!1}),s=l.debounce(function(){return e.elementRef.classList.remove("scrolling")},300,{leading:!1,trailing:!0});i.addEventListener("scroll",function(){n(),s();var t=e.elementRef.offsetTop+e.elementRef.offsetHeight+e.options.infiniteScrollOffset,i=o.scrollTop-(o.clientTop||0),r=o.clientHeight,l=i-e.old_scroll_top;e.old_scroll_top=i,l>0&&i+r>=t&&e.onScroll()})},t.prototype.openPhotoSwipe=function(t){var e=this;if(!this.options.lightbox||this.photoswipeElementRef){var i={index:this.collection.findIndex(function(e){return e===t}),loop:!1};i=Object.assign({},this.photoswipeDefaultOptions,this.options.photoSwipeOptions,i);var o=new n(this.photoswipeElementRef,s,this.photoswipeCollection,i);o.init(),o.listen("beforeChange",function(t){1===t&&o.getCurrentIndex()===e.visibleCollection.length&&e.onPageAdd()}),this.dispatchEvent("zoom",{item:t.model,photoswipe:o})}else console.error("Lightbox option is set to true, but no PhotoSwipe reference is given")},t.prototype.getPhotoswipeItem=function(t){return{src:t.model.enlargedSrc,w:t.model.enlargedWidth,h:t.model.enlargedHeight,title:t.title}},t.prototype.dispatchEvent=function(t,e){var i=new CustomEvent(t,{detail:e});this.elementRef.dispatchEvent(i)},t.prototype.selectVisibleItems=function(){return this.visibleCollection.forEach(function(t){return t.select()}),this.selectedItems},t.prototype.unselectAllItems=function(){this.visibleCollection.forEach(function(t){return t.unselect()})},t.prototype.addEventListener=function(t,e){this.elementRef.addEventListener(t,e),"pagination"===t&&this.requestItems()},t.prototype.empty=function(){this.bodyElementRef.innerHTML="",this._visibleCollection=[],this.photoswipeCollection=[],this._collection=[]},t.prototype.clear=function(){this.empty(),this.requestItems()},t.prototype.setItems=function(t){this.empty(),this.addItems(t)},Object.defineProperty(t.prototype,"collection",{get:function(){return this._collection},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visibleCollection",{get:function(){return this._visibleCollection},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectedItems",{get:function(){return this.visibleCollection.filter(function(t){return t.selected}).map(function(t){return t.model})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return Math.floor(this.bodyElementRef.getBoundingClientRect().width)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"collectionLength",{get:function(){return this.collection.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visibleCollectionLength",{get:function(){return this.visibleCollection.length},enumerable:!0,configurable:!0}),t}();e.AbstractGallery=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.getIcon=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","svg");return e.setAttribute("viewBox","0 0 100 100"),e.innerHTML='<use xlink:href="#'+t+'"></use>',e}}(e.Utility||(e.Utility={}))},function(t,e,i){"use strict";function o(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}Object.defineProperty(e,"__esModule",{value:!0}),i(5),o(i(6)),o(i(11)),o(i(13)),o(i(14))},function(t,e,i){},function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.defaultOptions={rowHeight:400,gap:3,rowsPerPage:0,showLabels:"hover",lightbox:!1,minRowsAtStart:2,selectable:!1,activable:!1,infiniteScrollOffset:0,photoSwipeOptions:null,cover:!0},e}return n(e,t),e.prototype.getEstimatedItemsPerRow=function(){return Math.ceil((this.width+this.options.gap)/(this.options.rowHeight+this.options.gap))},e.prototype.getEstimatedRowsPerPage=function(){return Math.ceil(this.getGalleryVisibleHeight()/(this.options.rowHeight+this.options.gap))+1},e.prototype.organizeItems=function(t,e,i,o){void 0===e&&(e=0),void 0===i&&(i=null),void 0===o&&(o=null),o||(o=e||0);for(var n=1;n<=t.length;n++){var s=t.slice(0,n);if(this.getRowWidth(this.options.rowHeight,this.options.gap,s)>=this.width){this.computeSizes(s,this.width,this.options.gap,o);var r=o+1;(null===i||r<=i)&&this.organizeItems(t.slice(n),e,i,r);break}if(n===t.length){this.computeSizes(s,null,this.options.gap,o,this.options.rowHeight);break}}},e.prototype.computeSizes=function(t,e,i,o,n){void 0===n&&(n=null);for(var s=e?this.getRowHeight(e,i,t):n,r=this.getRowWidth(s,i,t),l=e?this.apportionExcess(t,e,r):0,c=0,a=0;a<t.length;a++){var h=t[a],u=this.getImageRatio(h)*s-l;c+=u-Math.floor(u),u=Math.floor(u),(c>=1||a===t.length-1&&1===Math.round(c))&&(u++,c--),h.width=u,h.height=Math.floor(s),h.row=o,h.last=a===t.length-1,h.style()}},e.prototype.getRowWidth=function(t,e,i){return e*(i.length-1)+this.getRatios(i)*t},e.prototype.getRowHeight=function(t,e,i){return t/this.getRatios(i)+e*(i.length-1)},e.prototype.getRatios=function(t){for(var e=0,i=0;i<t.length;i++)e+=this.getImageRatio(t[i]);return e},e.prototype.getImageRatio=function(t){return Number(t.enlargedWidth)/Number(t.enlargedHeight)},e.prototype.apportionExcess=function(t,e,i){return(i-e)/t.length},e}(i(0).AbstractResponsiveRowGallery);e.Natural=s},function(e,i){e.exports=t},function(t,i){t.exports=e},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(3),n=function(){function t(t,e){this.options=t,this.model=e,this._selected=!1,this.title=this.getTitleDetails(e.title)}return t.prototype.getTitleDetails=function(t){return t.replace(/<(?!\s*br\s*\/?)[^>]+>/gi,"")},t.prototype.init=function(){var t=this,e=null;this.title&&["always","hover"].indexOf(this.options.showLabels)>-1&&(e=!0);var i=document.createElement("div"),n=document.createElement("div"),s=this.getLinkElement(),r=null,l=null;if(this.options.lightbox&&e&&s?((e=s).classList.add("button"),r=n,l=s):this.options.lightbox&&e&&!s?(e=document.createElement("div"),this.options.activable?(l=e,e.classList.add("button"),r=n):r=i):this.options.lightbox&&!e?r=i:!this.options.lightbox&&e&&s?(n=this.getLinkElement(),(e=s).classList.add("button"),l=i):this.options.lightbox||!e||s?this.options.lightbox||e||!s||(n=s,l=s):(e=document.createElement("div"),this.options.activable&&(l=i,e.classList.add("button"))),r&&(r.classList.add("zoomable"),r.addEventListener("click",function(){var e=new CustomEvent("zoom",{detail:t});t._element.dispatchEvent(e)})),l&&(l.classList.add("activable"),l.addEventListener("click",function(e){var i=new CustomEvent("activate",{detail:{item:t,clickEvent:e}});t._element.dispatchEvent(i)})),this.options.cover&&n.classList.add("cover"),n.classList.add("image"),i.classList.add("figure"),i.appendChild(n),this.model.color&&(i.style.backgroundColor=this.model.color+"11"),this._element=i,this._image=n,e&&(e.innerHTML=this.title,e.classList.add("title"),"hover"===this.options.showLabels&&e.classList.add("hover"),i.appendChild(e)),this.options.selectable){this._selectBtn=document.createElement("div");var c=o.Utility.getIcon("natural-gallery-icon-select");this._selectBtn.appendChild(c),this._selectBtn.classList.add("selectBtn"),this._selectBtn.addEventListener("click",function(e){e.stopPropagation(),t.toggleSelect();var i=new CustomEvent("select",{detail:t});t._element.dispatchEvent(i)}),this._element.appendChild(this._selectBtn)}return this.style(),i},t.prototype.style=function(){this._element&&(this._element.style.width=String(this.width+"px"),this._element.style.height=String(this.height+"px"),this._element.style.marginBottom=String(this.options.gap+"px"),this.last?this._element.style.marginRight="0":this._element.style.marginRight=String(this.options.gap+"px"))},t.prototype.loadImage=function(){var t=this,e=document.createElement("img");e.setAttribute("src",this.model.thumbnailSrc),this._image.style.backgroundImage="url("+this.model.thumbnailSrc+")",e.addEventListener("load",function(){t._element.classList.add("loaded")}),e.addEventListener("error",function(){t._element.classList.add("errored")})},t.prototype.toggleSelect=function(){this._selected?this.unselect():this.select()},t.prototype.select=function(){this._selected=!0,this._element.classList.add("selected")},t.prototype.unselect=function(){this._selected=!1,this._element.classList.remove("selected")},t.prototype.getLinkElement=function(){if(this.model.link){var t=document.createElement("a");return t.setAttribute("href",this.model.link),t.classList.add("link"),this.model.linkTarget&&t.setAttribute("target",this.model.linkTarget),t}return null},t.prototype.remove=function(){this._element.parentNode&&this._element.parentNode.removeChild(this._element)},Object.defineProperty(t.prototype,"last",{get:function(){return this._last},set:function(t){this._last=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"row",{get:function(){return this._row},set:function(t){this._row=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"enlargedWidth",{get:function(){return this.model.enlargedWidth},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"enlargedHeight",{get:function(){return this.model.enlargedHeight},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selected",{get:function(){return this._selected},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"element",{get:function(){return this._element},enumerable:!0,configurable:!0}),t}();e.Item=n},function(t,e,i){"use strict";function o(t){const e=typeof t;return null!=t&&("object"==e||"function"==e)}function n(t,e,i){let n,s,r,l,c,a,h=0,u=!1,p=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function f(e){const i=n,o=s;return n=s=void 0,h=e,l=t.apply(o,i)}function g(t,e){return setTimeout(t,e)}function m(t){const i=t-a;return void 0===a||i>=e||i<0||p&&t-h>=r}function y(){const t=Date.now();if(m(t))return v(t);c=g(y,function(t){const i=t-h,o=e-(t-a);return p?Math.min(o,r-i):o}(t))}function v(t){return c=void 0,d&&n?f(t):(n=s=void 0,l)}function b(...t){const i=Date.now(),o=m(i);if(n=t,s=this,a=i,o){if(void 0===c)return function(t){return h=t,c=g(y,e),u?f(t):l}(a);if(p)return c=g(y,e),f(a)}return void 0===c&&(c=g(y,e)),l}return e=+e||0,o(i)&&(u=!!i.leading,r=(p="maxWait"in i)?Math.max(+i.maxWait||0,e):r,d="trailing"in i?!!i.trailing:d),b.cancel=function(){void 0!==c&&clearTimeout(c),h=0,n=a=s=c=void 0},b.flush=function(){return void 0===c?l:v(Date.now())},b.pending=function(){return void 0!==c},b}i.r(e),i.d(e,"isObject",function(){return o}),i.d(e,"debounce",function(){return n})},function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var s=i(2),r=i(12),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.defaultOptions={columnWidth:300,gap:3,rowsPerPage:0,showLabels:"hover",lightbox:!1,minRowsAtStart:2,selectable:!1,activable:!1,infiniteScrollOffset:0,photoSwipeOptions:null,cover:!0},e}return n(e,t),e.prototype.init=function(){t.prototype.init.call(this),this.addColumns()},e.prototype.onScroll=function(){this.addUntilFill()},e.prototype.onPageAdd=function(){var t=this.addUntilFill(),e=this.getEstimatedItemsPerRow(),i=this.getEstimatedRowsPerPage()*e-t;i>0&&this.addItemsToDom(i)},e.prototype.getEstimatedItemsPerRow=function(){return Math.ceil((this.width-this.options.gap)/(this.options.columnWidth+this.options.gap))},e.prototype.getEstimatedRowsPerPage=function(){var t=this.getColumnWidth()/1.75;return Math.ceil(this.getGalleryVisibleHeight()/t)},e.prototype.addUntilFill=function(){var t=this.elementRef.clientHeight,e=0;do{e++,this.addItemsToDom(1)}while(this.elementRef.clientHeight===t&&this.visibleCollection.length<this.collection.length);var i=this.getEstimatedRowsPerPage();return this.addItemsToDom(i),e+i},e.prototype.addItemsToDom=function(t){var e=this.visibleCollection.length,i=this.visibleCollection.length?e:0,o=i+t-1;this.organizeItems(this.collection.slice(e),i,o);for(var n=e;n<this.collection.length;n++){var s=this.collection[n];if(!(n<=o))break;this.addItemToDOM(s)}this.flushBufferedItems(),this.updateNextButtonVisibility()},e.prototype.addItemToDOM=function(e,i){void 0===i&&(i=null);var o=this.getShortestColumn();o.addItem(e),t.prototype.addItemToDOM.call(this,e,o.elementRef)},e.prototype.endResize=function(){t.prototype.endResize.call(this),this.visibleCollection.length&&(this.visibleCollection.length=0,this.addColumns(),this.addUntilFill())},e.prototype.addColumns=function(){this.bodyElementRef.innerHTML="",this.columns=[];for(var t=this.getColumnWidth(),e=0;e<this.getEstimatedItemsPerRow();e++){var i=new r.Column({width:t,gap:this.options.gap});this.columns.push(i),this.bodyElementRef.appendChild(i.init())}},e.prototype.organizeItems=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=null);var o=this.getEstimatedItemsPerRow(),n=this.getColumnWidth(),s=i?o*(i-e+1):t.length;s=s>t.length?t.length:s;for(var r=0;r<s;r++){var l=t[r];l.last=!0,l.width=Math.floor(n),l.height=l.width*l.model.enlargedHeight/l.model.enlargedWidth,l.style()}},e.prototype.getColumnWidth=function(){var t=this.getEstimatedItemsPerRow();return Math.floor((this.width-(t-1)*this.options.gap)/t)},e.prototype.getShortestColumn=function(){return this.columns.reduce(function(t,e){return t?e.height<t.height?e:t:e})},e.prototype.empty=function(){t.prototype.empty.call(this),this.addColumns()},e}(s.AbstractGallery);e.Masonry=l},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t){this.options=t,this.collection=[]}return t.prototype.init=function(){return this._elementRef=document.createElement("div"),this._elementRef.classList.add("column"),this._elementRef.style.marginRight=this.options.gap+"px",this._elementRef.style.width=this.options.width+"px",this._elementRef},t.prototype.addItem=function(t){this.collection.push(t)},Object.defineProperty(t.prototype,"height",{get:function(){return this._elementRef.offsetHeight},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"length",{get:function(){return this.collection.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"elementRef",{get:function(){return this._elementRef},enumerable:!0,configurable:!0}),t}();e.Column=o},function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.defaultOptions={rowHeight:400,gap:3,rowsPerPage:0,showLabels:"hover",lightbox:!1,minRowsAtStart:2,selectable:!1,activable:!1,infiniteScrollOffset:0,photoSwipeOptions:null,cover:!0},e}return n(e,t),e.prototype.getEstimatedItemsPerRow=function(){return Math.ceil((this.width+this.options.gap)/(this.options.rowHeight+this.options.gap))},e.prototype.organizeItems=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=null);var o=this.getEstimatedItemsPerRow(),n=this.getItemSideSize(),s=this.width-o*n-(o-1)*this.options.gap,r=i?o*(i-e+1):t.length;r=r>t.length?t.length:r;for(var l=0;l<r;l++){var c=t[l];c.last=l%o==o-1,c.row=Math.floor(l/o)+e,c.width=Math.floor(n),c.height=Math.floor(n),c.last&&(c.width=Math.floor(n+s)),c.style()}},e.prototype.getItemSideSize=function(){var t=this.getEstimatedItemsPerRow();return(this.width-(t-1)*this.options.gap)/t},e.prototype.getEstimatedRowsPerPage=function(){return Math.ceil(this.getGalleryVisibleHeight()/this.getItemSideSize())},e}(i(0).AbstractResponsiveRowGallery);e.ResponsiveSquare=s},function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.defaultOptions={itemsPerRow:4,gap:3,rowsPerPage:0,showLabels:"hover",lightbox:!1,minRowsAtStart:2,selectable:!1,activable:!1,infiniteScrollOffset:0,photoSwipeOptions:null,cover:!0},e}return n(e,t),e.prototype.getEstimatedItemsPerRow=function(){return this.options.itemsPerRow},e.prototype.organizeItems=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=null);var o=this.getItemSideSize(),n=i?this.options.itemsPerRow*(i-e+1):t.length;n=n>t.length?t.length:n;for(var s=0;s<n;s++){var r=t[s];r.width=Math.floor(o),r.height=Math.floor(o),r.last=s%this.options.itemsPerRow==this.options.itemsPerRow-1,r.row=Math.floor(s/this.options.itemsPerRow)+e,r.style()}},e.prototype.getEstimatedRowsPerPage=function(){return Math.ceil(this.getGalleryVisibleHeight()/this.getItemSideSize())},e.prototype.getItemSideSize=function(){var t=this.getEstimatedItemsPerRow();return(this.width-(t-1)*this.options.gap)/t},e}(i(1).AbstractRowGallery);e.Square=s}])});
//# sourceMappingURL=natural-gallery.js.map