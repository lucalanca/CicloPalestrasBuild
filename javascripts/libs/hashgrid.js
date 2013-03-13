/**
 * hashgrid (jQuery version, adapters are on the way)
 * http://github.com/dotjay/hashgrid
 * Version 8, 06 Oct 2012
 * Written by Jon Gibbins
 *
 * Contibutors:
 * James Aitken, http://loonypandora.co.uk/
 * Tom Arnold, http://www.tomarnold.de/
 * Sean Coates, http://seancoates.com/
 * Phil Dokas, http://jetless.org/
 * Andrew Jaswa, http://andrewjaswa.com/
 * Callum Macrae, http://lynx.io/
 */
/**
 * @license Copyright 2011 Analog Coop Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Usage
 *
 * // The basic #grid setup looks like this
 * var grid = new hashgrid();
 *
 * // But there are a whole bunch of additional options you can set
 * var grid = new hashgrid({
 *     id: 'mygrid',            // set a custom id for the grid container
 *     modifierKey: 'alt',      // optional 'ctrl', 'alt' or 'shift'
 *     showGridKey: 's',        // key to show the grid
 *     holdGridKey: 'enter',    // key to hold the grid in place
 *     foregroundKey: 'f',      // key to toggle foreground/background
 *     jumpGridsKey: 'd',       // key to cycle through the grid classes
 *     numberOfGrids: 2,        // number of grid classes used
 *     classPrefix: 'myclass',  // prefix for the grid classes
 *     cookiePrefix: 'mygrid'   // prefix for the cookie name
 * });
 */
/**
 * Make sure we have the library
 * TODO: Use an adapter
 */
typeof jQuery=="undefined"&&alert("Hashgrid: jQuery not loaded. Make sure it's linked to your pages.");var hashgrid=function(e){function x(e){if(t.modifierKey==null)return!0;var n=!0;switch(t.modifierKey){case"ctrl":n=e.ctrlKey?e.ctrlKey:!1;break;case"alt":n=e.altKey?e.altKey:!1;break;case"shift":n=e.shiftKey?e.shiftKey:!1}return n}function T(e){var t=!1,n=e.keyCode?e.keyCode:e.which;return n==13?t="enter":t=String.fromCharCode(n).toLowerCase(),t}function N(){A(t.cookiePrefix+t.id,(E?"1":"0")+"-"+v+"-"+r,1)}function C(){l.show(),d.css({width:l.width()}),d.children(".vert").each(function(){var e=$(this);e.css("display","inline-block"),e.offset().top>e.parent().offset().top&&e.hide()})}function k(e){var i,s,o=e.target.tagName.toLowerCase();if(o=="input"||o=="textarea"||o=="select")return!0;s=x(e);if(!s)return!0;i=T(e);if(!i)return!0;if(n[i])return!0;n[i]=!0;switch(i){case t.showGridKey:p?E&&(l.hide(),p=!1,E=!1,N()):(C(),p=!0);break;case t.holdGridKey:p&&!E&&(E=!0,N());break;case t.foregroundKey:p&&(l.css("z-index")==g?(l.css("z-index",m),v="B"):(l.css("z-index",g),v="F"),N());break;case t.jumpGridsKey:p&&t.numberOfGrids>1&&(l.removeClass(t.classPrefix+r),r++,r>t.numberOfGrids&&(r=1),l.addClass(t.classPrefix+r),C(),/webkit/.test(navigator.userAgent.toLowerCase())&&_(),N())}return!0}function L(e){var r,i=x(e);return i?(r=T(e),n[r]=!1,r&&r==t.showGridKey&&!E&&(l.hide(),p=!1),!0):!0}function A(e,t,n){var r,i="";n&&(r=new Date,r.setTime(r.getTime()+n*24*60*60*1e3),i="; expires="+r.toGMTString()),document.cookie=e+"="+t+i+"; path=/"}function O(e){var t,n=document.cookie.split(";"),r=0,i=n.length,s=e+"=";for(;r<i;r++){t=n[r];while(t.charAt(0)==" ")t=t.substring(1,t.length);if(t.indexOf(s)==0)return t.substring(s.length,t.length)}return null}function M(e){A(e,"",-1)}function _(){var e=document.styleSheets[0];try{e.addRule(".xxxxxx","position: relative"),e.removeRule(e.rules.length-1)}catch(t){}}var t={id:"grid",modifierKey:null,showGridKey:"g",holdGridKey:"h",foregroundKey:"f",jumpGridsKey:"j",numberOfGrids:1,classPrefix:"grid-",cookiePrefix:"hashgrid"},n,r=1,i,s,o,u,a,f,l,c,h,p=!1,d,v="B",m=-1,g=9999,y,b,w,E=!1,S;if(typeof e=="object")for(b in e)t[b]=e[b];else typeof e=="string"&&(t.id=e);$("#"+t.id).length>0&&$("#"+t.id).remove(),h=$("<div></div>"),h.attr("id",t.id).css({display:"none",pointerEvents:"none"}),$("body").prepend(h),l=$("#"+t.id),l.css("z-index")=="auto"&&l.css("z-index",m),y=parseFloat($(document).height()),l.height(y),l.append('<div id="'+t.id+'-horiz" class="horiz first-line">'),S=l.css("top"),l.css({top:"-999px",display:"block"}),u=$("#"+t.id+"-horiz"),a=u.outerHeight(),l.css({display:"none",top:S});if(a<=0)return!1;f=Math.floor(y/a),i="";for(o=f-1;o>=1;o--)i+='<div class="horiz"></div>';l.append(i),l.append($('<div class="vert-container"></div>')),d=l.children(".vert-container"),s=l.width(),d.css({width:s,position:"absolute",top:0}),d.append('<div class="vert first-line">&nbsp;</div>'),i="";for(o=0;o<30;o++)i+='<div class="vert">&nbsp;</div>';return d.append(i),d.children().height(y).css({display:"inline-block"}),c=O(t.cookiePrefix+t.id),typeof c=="string"?(w=c.split("-"),w[2]=Number(w[2]),typeof w[2]=="number"&&!isNaN(w[2])&&(r=w[2].toFixed(0),l.addClass(t.classPrefix+r)),w[1]=="F"&&(v="F",l.css("z-index",g)),w[0]=="1"&&(p=!0,E=!0,C())):l.addClass(t.classPrefix+r),$(document).bind("keydown",k),$(document).bind("keyup",L),n={},{}};$(document).ready(function(){var e=new hashgrid({numberOfGrids:2})});