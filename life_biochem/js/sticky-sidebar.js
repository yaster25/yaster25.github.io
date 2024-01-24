/**
* Copyright Marc J. Schmidt. See the LICENSE file at the top-level
* directory of this distribution and at
* https://github.com/marcj/css-element-queries/blob/master/LICENSE.
*/
;
(function (root, factory) {
   if (typeof define === "function" && define.amd) {
       define(factory);
   } else if (typeof exports === "object") {
       module.exports = factory();
   } else {
       root.ResizeSensor = factory();
   }
}(typeof window !== 'undefined' ? window : this, function () {

   // Make sure it does not throw in a SSR (Server Side Rendering) situation
   if (typeof window === "undefined") {
       return null;
   }
   // Only used for the dirty checking, so the event callback count is limited to max 1 call per fps per sensor.
   // In combination with the event based resize sensor this saves cpu time, because the sensor is too fast and
   // would generate too many unnecessary events.
   var requestAnimationFrame = window.requestAnimationFrame ||
       window.mozRequestAnimationFrame ||
       window.webkitRequestAnimationFrame ||
       function (fn) {
           return window.setTimeout(fn, 20);
       };

   /**
    * Iterate over each of the provided element(s).
    *
    * @param {HTMLElement|HTMLElement[]} elements
    * @param {Function}                  callback
    */
   function forEachElement(elements, callback){
       var elementsType = Object.prototype.toString.call(elements);
       var isCollectionTyped = ('[object Array]' === elementsType
           || ('[object NodeList]' === elementsType)
           || ('[object HTMLCollection]' === elementsType)
           || ('[object Object]' === elementsType)
           || ('undefined' !== typeof jQuery && elements instanceof jQuery) //jquery
           || ('undefined' !== typeof Elements && elements instanceof Elements) //mootools
       );
       var i = 0, j = elements.length;
       if (isCollectionTyped) {
           for (; i < j; i++) {
               callback(elements[i]);
           }
       } else {
           callback(elements);
       }
   }

   /**
    * Class for dimension change detection.
    *
    * @param {Element|Element[]|Elements|jQuery} element
    * @param {Function} callback
    *
    * @constructor
    */
   var ResizeSensor = function(element, callback) {
       /**
        *
        * @constructor
        */
       function EventQueue() {
           var q = [];
           this.add = function(ev) {
               q.push(ev);
           };

           var i, j;
           this.call = function() {
               for (i = 0, j = q.length; i < j; i++) {
                   q[i].call();
               }
           };

           this.remove = function(ev) {
               var newQueue = [];
               for(i = 0, j = q.length; i < j; i++) {
                   if(q[i] !== ev) newQueue.push(q[i]);
               }
               q = newQueue;
           }

           this.length = function() {
               return q.length;
           }
       }

       /**
        *
        * @param {HTMLElement} element
        * @param {Function}    resized
        */
       function attachResizeEvent(element, resized) {
           if (!element) return;
           if (element.resizedAttached) {
               element.resizedAttached.add(resized);
               return;
           }

           element.resizedAttached = new EventQueue();
           element.resizedAttached.add(resized);

           element.resizeSensor = document.createElement('div');
           element.resizeSensor.className = 'resize-sensor';
           var style = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
           var styleChild = 'position: absolute; left: 0; top: 0; transition: 0s;';

           element.resizeSensor.style.cssText = style;
           element.resizeSensor.innerHTML =
               '<div class="resize-sensor-expand" style="' + style + '">' +
                   '<div style="' + styleChild + '"></div>' +
               '</div>' +
               '<div class="resize-sensor-shrink" style="' + style + '">' +
                   '<div style="' + styleChild + ' width: 200%; height: 200%"></div>' +
               '</div>';
           element.appendChild(element.resizeSensor);

           if (element.resizeSensor.offsetParent !== element) {
               element.style.position = 'relative';
           }

           var expand = element.resizeSensor.childNodes[0];
           var expandChild = expand.childNodes[0];
           var shrink = element.resizeSensor.childNodes[1];
           var dirty, rafId, newWidth, newHeight;
           var lastWidth = element.offsetWidth;
           var lastHeight = element.offsetHeight;

           var reset = function() {
               expandChild.style.width = '100000px';
               expandChild.style.height = '100000px';

               expand.scrollLeft = 100000;
               expand.scrollTop = 100000;

               shrink.scrollLeft = 100000;
               shrink.scrollTop = 100000;
           };

           reset();

           var onResized = function() {
               rafId = 0;

               if (!dirty) return;

               lastWidth = newWidth;
               lastHeight = newHeight;

               if (element.resizedAttached) {
                   element.resizedAttached.call();
               }
           };

           var onScroll = function() {
               newWidth = element.offsetWidth;
               newHeight = element.offsetHeight;
               dirty = newWidth != lastWidth || newHeight != lastHeight;

               if (dirty && !rafId) {
                   rafId = requestAnimationFrame(onResized);
               }

               reset();
           };

           var addEvent = function(el, name, cb) {
               if (el.attachEvent) {
                   el.attachEvent('on' + name, cb);
               } else {
                   el.addEventListener(name, cb);
               }
           };

           addEvent(expand, 'scroll', onScroll);
           addEvent(shrink, 'scroll', onScroll);
       }

       forEachElement(element, function(elem){
           attachResizeEvent(elem, callback);
       });

       this.detach = function(ev) {
           ResizeSensor.detach(element, ev);
       };
   };

   ResizeSensor.detach = function(element, ev) {
       forEachElement(element, function(elem){
           if (!elem) return
           if(elem.resizedAttached && typeof ev == "function"){
               elem.resizedAttached.remove(ev);
               if(elem.resizedAttached.length()) return;
           }
           if (elem.resizeSensor) {
               if (elem.contains(elem.resizeSensor)) {
                   elem.removeChild(elem.resizeSensor);
               }
               delete elem.resizeSensor;
               delete elem.resizedAttached;
           }
       });
   };

   return ResizeSensor;

}));

/**
 * Sticky Sidebar JavaScript Plugin.
 * @version 3.3.4
 * @author Ahmed Bouhuolia <a.bouhuolia@gmail.com>
 * @license The MIT License (MIT)
 */
const StickySidebar=(()=>{const EVENT_KEY='.stickySidebar';const VERSION='3.3.4';const DEFAULTS={topSpacing:0,bottomSpacing:0,containerSelector:!1,innerWrapperSelector:'.inner-wrapper-sticky',stickyClass:'is-affixed',resizeSensor:!0,minWidth:!1};class StickySidebar{constructor(sidebar,options={}){this.options=StickySidebar.extend(DEFAULTS,options);this.sidebar=('string'===typeof sidebar)?document.querySelector(sidebar):sidebar;if('undefined'===typeof this.sidebar)
throw new Error("There is no specific sidebar element.");this.sidebarInner=!1;this.container=this.sidebar.parentElement;this.affixedType='STATIC';this.direction='down';this.support={transform:!1,transform3d:!1};this._initialized=!1;this._reStyle=!1;this._breakpoint=!1;this.dimensions={translateY:0,maxTranslateY:0,topSpacing:0,lastTopSpacing:0,bottomSpacing:0,lastBottomSpacing:0,sidebarHeight:0,sidebarWidth:0,containerTop:0,containerHeight:0,viewportHeight:0,viewportTop:0,lastViewportTop:0,};['handleEvent'].forEach((method)=>{this[method]=this[method].bind(this)});this.initialize()}
initialize(){this._setSupportFeatures();if(this.options.innerWrapperSelector){this.sidebarInner=this.sidebar.querySelector(this.options.innerWrapperSelector);if(null===this.sidebarInner)
this.sidebarInner=!1}
if(!this.sidebarInner){let wrapper=document.createElement('div');wrapper.setAttribute('class','inner-wrapper-sticky');this.sidebar.appendChild(wrapper);while(this.sidebar.firstChild!=wrapper)
wrapper.appendChild(this.sidebar.firstChild);this.sidebarInner=this.sidebar.querySelector('.inner-wrapper-sticky')}
if(this.options.containerSelector){let containers=document.querySelectorAll(this.options.containerSelector);containers=Array.prototype.slice.call(containers);containers.forEach((container,item)=>{if(!container.contains(this.sidebar))return;this.container=container});if(!containers.length)
throw new Error("The container does not contains on the sidebar.")}
if('function'!==typeof this.options.topSpacing)
this.options.topSpacing=parseInt(this.options.topSpacing)||0;if('function'!==typeof this.options.bottomSpacing)
this.options.bottomSpacing=parseInt(this.options.bottomSpacing)||0;this._widthBreakpoint();this.calcDimensions();this.stickyPosition();this.bindEvents();this._initialized=!0}
bindEvents(){window.addEventListener('resize',this,{passive:!0,capture:!1});window.addEventListener('scroll',this,{passive:!0,capture:!1});this.sidebar.addEventListener('update'+EVENT_KEY,this);if(this.options.resizeSensor&&'undefined'!==typeof ResizeSensor){new ResizeSensor(this.sidebarInner,this.handleEvent);new ResizeSensor(this.container,this.handleEvent)}}
handleEvent(event){this.updateSticky(event)}
calcDimensions(){if(this._breakpoint)return;var dims=this.dimensions;dims.containerTop=StickySidebar.offsetRelative(this.container).top;dims.containerHeight=this.container.clientHeight;dims.containerBottom=dims.containerTop+dims.containerHeight;dims.sidebarHeight=this.sidebarInner.offsetHeight;dims.sidebarWidth=this.sidebarInner.offsetWidth;dims.viewportHeight=window.innerHeight;dims.maxTranslateY=dims.containerHeight-dims.sidebarHeight;this._calcDimensionsWithScroll()}
_calcDimensionsWithScroll(){var dims=this.dimensions;dims.sidebarLeft=StickySidebar.offsetRelative(this.sidebar).left;dims.viewportTop=document.documentElement.scrollTop||document.body.scrollTop;dims.viewportBottom=dims.viewportTop+dims.viewportHeight;dims.viewportLeft=document.documentElement.scrollLeft||document.body.scrollLeft;dims.topSpacing=this.options.topSpacing;dims.bottomSpacing=this.options.bottomSpacing;if('function'===typeof dims.topSpacing)
dims.topSpacing=parseInt(dims.topSpacing(this.sidebar))||0;if('function'===typeof dims.bottomSpacing)
dims.bottomSpacing=parseInt(dims.bottomSpacing(this.sidebar))||0;if('VIEWPORT-TOP'===this.affixedType){if(dims.topSpacing<dims.lastTopSpacing){dims.translateY+=dims.lastTopSpacing-dims.topSpacing;this._reStyle=!0}}else if('VIEWPORT-BOTTOM'===this.affixedType){if(dims.bottomSpacing<dims.lastBottomSpacing){dims.translateY+=dims.lastBottomSpacing-dims.bottomSpacing;this._reStyle=!0}}
dims.lastTopSpacing=dims.topSpacing;dims.lastBottomSpacing=dims.bottomSpacing}
isSidebarFitsViewport(){let dims=this.dimensions;let offset=this.scrollDirection==='down'?dims.lastBottomSpacing:dims.lastTopSpacing;return this.dimensions.sidebarHeight+offset<this.dimensions.viewportHeight}
observeScrollDir(){var dims=this.dimensions;if(dims.lastViewportTop===dims.viewportTop)return;var furthest='down'===this.direction?Math.min:Math.max;if(dims.viewportTop===furthest(dims.viewportTop,dims.lastViewportTop))
this.direction='down'===this.direction?'up':'down'}
getAffixType(){this._calcDimensionsWithScroll();var dims=this.dimensions;var colliderTop=dims.viewportTop+dims.topSpacing;var affixType=this.affixedType;if(colliderTop<=dims.containerTop||dims.containerHeight<=dims.sidebarHeight){dims.translateY=0;affixType='STATIC'}else{affixType=('up'===this.direction)?this._getAffixTypeScrollingUp():this._getAffixTypeScrollingDown()}
dims.translateY=Math.max(0,dims.translateY);dims.translateY=Math.min(dims.containerHeight,dims.translateY);dims.translateY=Math.round(dims.translateY);dims.lastViewportTop=dims.viewportTop;return affixType}
_getAffixTypeScrollingDown(){var dims=this.dimensions;var sidebarBottom=dims.sidebarHeight+dims.containerTop;var colliderTop=dims.viewportTop+dims.topSpacing;var colliderBottom=dims.viewportBottom-dims.bottomSpacing;var affixType=this.affixedType;if(this.isSidebarFitsViewport()){if(dims.sidebarHeight+colliderTop>=dims.containerBottom){dims.translateY=dims.containerBottom-sidebarBottom;affixType='CONTAINER-BOTTOM'}else if(colliderTop>=dims.containerTop){dims.translateY=colliderTop-dims.containerTop;affixType='VIEWPORT-TOP'}}else{if(dims.containerBottom<=colliderBottom){dims.translateY=dims.containerBottom-sidebarBottom;affixType='CONTAINER-BOTTOM'}else if(sidebarBottom+dims.translateY<=colliderBottom){dims.translateY=colliderBottom-sidebarBottom;affixType='VIEWPORT-BOTTOM'}else if(dims.containerTop+dims.translateY<=colliderTop&&(0!==dims.translateY&&dims.maxTranslateY!==dims.translateY)){affixType='VIEWPORT-UNBOTTOM'}}
return affixType}
_getAffixTypeScrollingUp(){var dims=this.dimensions;var sidebarBottom=dims.sidebarHeight+dims.containerTop;var colliderTop=dims.viewportTop+dims.topSpacing;var colliderBottom=dims.viewportBottom-dims.bottomSpacing;var affixType=this.affixedType;if(colliderTop<=dims.translateY+dims.containerTop){dims.translateY=colliderTop-dims.containerTop;affixType='VIEWPORT-TOP'}else if(dims.containerBottom<=colliderBottom){dims.translateY=dims.containerBottom-sidebarBottom;affixType='CONTAINER-BOTTOM'}else if(!this.isSidebarFitsViewport()){if(dims.containerTop<=colliderTop&&(0!==dims.translateY&&dims.maxTranslateY!==dims.translateY)){affixType='VIEWPORT-UNBOTTOM'}}
return affixType}
_getStyle(affixType){if('undefined'===typeof affixType)return;var style={inner:{},outer:{}};var dims=this.dimensions;switch(affixType){case 'VIEWPORT-TOP':style.inner={position:'fixed',top:dims.topSpacing,left:dims.sidebarLeft-dims.viewportLeft,width:dims.sidebarWidth};break;case 'VIEWPORT-BOTTOM':style.inner={position:'fixed',top:'auto',left:dims.sidebarLeft,bottom:dims.bottomSpacing,width:dims.sidebarWidth};break;case 'CONTAINER-BOTTOM':case 'VIEWPORT-UNBOTTOM':let translate=this._getTranslate(0,dims.translateY+'px');if(translate)
style.inner={transform:translate};else style.inner={position:'absolute',top:dims.translateY,width:dims.sidebarWidth};break}
switch(affixType){case 'VIEWPORT-TOP':case 'VIEWPORT-BOTTOM':case 'VIEWPORT-UNBOTTOM':case 'CONTAINER-BOTTOM':style.outer={height:dims.sidebarHeight,position:'relative'};break}
style.outer=StickySidebar.extend({height:'',position:''},style.outer);style.inner=StickySidebar.extend({position:'relative',top:'',left:'',bottom:'',width:'',transform:''},style.inner);return style}
stickyPosition(force){if(this._breakpoint)return;force=this._reStyle||force||!1;var offsetTop=this.options.topSpacing;var offsetBottom=this.options.bottomSpacing;var affixType=this.getAffixType();var style=this._getStyle(affixType);if((this.affixedType!=affixType||force)&&affixType){let affixEvent='affix.'+affixType.toLowerCase().replace('viewport-','')+EVENT_KEY;StickySidebar.eventTrigger(this.sidebar,affixEvent);if('STATIC'===affixType)
StickySidebar.removeClass(this.sidebar,this.options.stickyClass);else StickySidebar.addClass(this.sidebar,this.options.stickyClass);for(let key in style.outer){let unit=('number'===typeof style.outer[key])?'px':'';this.sidebar.style[key]=style.outer[key]+unit}
for(let key in style.inner){let unit=('number'===typeof style.inner[key])?'px':'';this.sidebarInner.style[key]=style.inner[key]+unit}
let affixedEvent='affixed.'+affixType.toLowerCase().replace('viewport-','')+EVENT_KEY;StickySidebar.eventTrigger(this.sidebar,affixedEvent)}else{if(this._initialized)this.sidebarInner.style.left=style.inner.left}
this.affixedType=affixType}
_widthBreakpoint(){if(window.innerWidth<=this.options.minWidth){this._breakpoint=!0;this.affixedType='STATIC';this.sidebar.removeAttribute('style');StickySidebar.removeClass(this.sidebar,this.options.stickyClass);this.sidebarInner.removeAttribute('style')}else{this._breakpoint=!1}}
updateSticky(event={}){if(this._running)return;this._running=!0;((eventType)=>{requestAnimationFrame(()=>{switch(eventType){case 'scroll':this._calcDimensionsWithScroll();this.observeScrollDir();this.stickyPosition();break;case 'resize':default:this._widthBreakpoint();this.calcDimensions();this.stickyPosition(!0);break}
this._running=!1})})(event.type)}
_setSupportFeatures(){var support=this.support;support.transform=StickySidebar.supportTransform();support.transform3d=StickySidebar.supportTransform(!0)}
_getTranslate(y=0,x=0,z=0){if(this.support.transform3d)return'translate3d('+y+', '+x+', '+z+')';else if(this.support.translate)return'translate('+y+', '+x+')';else return!1}
destroy(){window.removeEventListener('resize',this,{capture:!1});window.removeEventListener('scroll',this,{capture:!1});this.sidebar.classList.remove(this.options.stickyClass);this.sidebar.style.minHeight='';this.sidebar.removeEventListener('update'+EVENT_KEY,this);var styleReset={inner:{},outer:{}};styleReset.inner={position:'',top:'',left:'',bottom:'',width:'',transform:''};styleReset.outer={height:'',position:''};for(let key in styleReset.outer)
this.sidebar.style[key]=styleReset.outer[key];for(let key in styleReset.inner)
this.sidebarInner.style[key]=styleReset.inner[key];if(this.options.resizeSensor&&'undefined'!==typeof ResizeSensor){ResizeSensor.detach(this.sidebarInner,this.handleEvent);ResizeSensor.detach(this.container,this.handleEvent)}}
static supportTransform(transform3d){var result=!1,property=(transform3d)?'perspective':'transform',upper=property.charAt(0).toUpperCase()+property.slice(1),prefixes=['Webkit','Moz','O','ms'],support=document.createElement('support'),style=support.style;(property+' '+prefixes.join(upper+' ')+upper).split(' ').forEach(function(property,i){if(style[property]!==undefined){result=property;return!1}});return result}
static eventTrigger(element,eventName,data){try{var event=new CustomEvent(eventName,{detail:data})}catch(e){var event=document.createEvent('CustomEvent');event.initCustomEvent(eventName,!0,!0,data)}
element.dispatchEvent(event)}
static extend(defaults,options){var results={};for(let key in defaults){if('undefined'!==typeof options[key])results[key]=options[key];else results[key]=defaults[key]}
return results}
static offsetRelative(element){var result={left:0,top:0};do{let offsetTop=element.offsetTop;let offsetLeft=element.offsetLeft;if(!isNaN(offsetTop))
result.top+=offsetTop;if(!isNaN(offsetLeft))
result.left+=offsetLeft;element=('BODY'===element.tagName)?element.parentElement:element.offsetParent}while(element)
return result}
static addClass(element,className){if(!StickySidebar.hasClass(element,className)){if(element.classList)
element.classList.add(className);else element.className+=' '+className}}
static removeClass(element,className){if(StickySidebar.hasClass(element,className)){if(element.classList)
element.classList.remove(className);else element.className=element.className.replace(new RegExp('(^|\\b)'+className.split(' ').join('|')+'(\\b|$)','gi'),' ')}}
static hasClass(element,className){if(element.classList)
return element.classList.contains(className);else return new RegExp('(^| )'+className+'( |$)','gi').test(element.className)}
static get defaults(){return DEFAULTS}}
return StickySidebar})();window.StickySidebar=StickySidebar