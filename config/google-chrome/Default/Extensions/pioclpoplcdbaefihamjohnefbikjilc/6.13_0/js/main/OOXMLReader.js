/*! Copyright 2009-2017 Evernote Corporation. All rights reserved. */

define(function(){function a(e,f){if(67324752===b(e,f,4)){for(var g=b(e,f+6,2),h=b(e,f+18,4),i=b(e,f+26,2),j=b(e,f+28,2),k="",l=f+c;l<f+c+i;l++)k+=String.fromCharCode(e[l]);if(/^word\//.test(k))return d.DOCX;if(/^ppt\//.test(k))return d.PPTX;if(/^xl\//.test(k))return d.XLSX;if(8&g){for(var l=f+c+i+j;l+3<e.length;)if(80===e[l])if(75===e[l+1])if(3===e[l+2]){if(4===e[l+3])return a(e,l);l+=4}else if(5===e[l+2]){if(6===e[l+3])return null;l+=4}else l+=4;else l+=4;else l++;return null}return a(e,f+c+i+j+h)}return null}function b(a,b,c){for(var d="0x",e=b+c-1;e>=b;e--){for(var f=a[e].toString(16);f.length<2;)f="0"+f;d+=f}return d-0}var c=30,d={DOCX:1,PPTX:2,XLSX:3};return d.getFileType=function(b){return a(b,0)},d});