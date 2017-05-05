/**************************************************************** 
* name：运动的元素对象sportBox 
* DATA --2012-12-20-- 美工 
***************************************************************** 
*/ 
var sportBox = function() {} 
sportBox.prototype = { 
//初始化(元素id, 元素移动的方向用123456789分别表示左上、上、右上、左、中、右、左下、下、右下) 
init: function(id, direction) { 
var obj = this._getId(id), dir = direction || 9; //用1-9代表九个方向，5表示居中停止 
obj.style.position = "absolute"; 
obj.timer = null; 

this._sportDirection(obj, dir); 
var _this = this; 
obj.onmouseover = function() { clearInterval(obj.timer); }; 
obj.onmouseout = function() { _this._sportDirection(obj); }; 
}, 
_getId: function(id) {return typeof id === "string" ? document.getElementById(id) : id; }, //撞击的边界(返回新的运动方向) 
_hitBorder: function(obj, direction) { 
var d = direction || 9,b = obj,db = document.body || document.documentElement, h = 5, 
hitsite = 5; //撞击位置，9个数字分别表示9个地点，按顺序左上角、上、右上角、左、中、右、左下角、下、右下角，5居中 

if (b.offsetLeft <= 0) { 
hitsite = 4; 
(b.offsetTop <= 0) && (hitsite = 1); 
(b.offsetTop + b.offsetHeight >= db.clientHeight) && (hitsite = 7); 
} else if (b.offsetLeft > 0 && b.offsetLeft+b.offsetWidth < db.clientWidth) { 
hitsite = 2; 
(b.offsetTop + b.offsetHeight >= db.clientHeight) && (hitsite = 8) 
} else if (b.offsetLeft +b.offsetWidth >= db.clientWidth) { 
hitsite = 6; 
(b.offsetTop <= 0) && (hitsite = 3); 
(b.offsetTop + b.offsetHeight >= db.clientHeight) && (hitsite = 9); 
} 

switch(hitsite) { 
case 1: 
b.style.left = 0+'px'; 
b.style.top = 0+'px'; 
(d ==1) && (h = 9); 
(d ==2) && (h = 8); 
(d ==8) && (h = 2); 
break; 
case 2: 
b.style.top = 0+'px'; 
(d ==3) && (h = 9); 
(d ==2) && (h = 8); 
(d ==1) && (h = 7); 
break; 
case 3: 
b.style.left = db.clientWidth-b.offsetWidth+'px'; 
b.style.top = 0+'px'; 
(d ==3) && (h = 9); 
(d ==2) && (h = 8); 
(d ==8) && (h = 2); 
break; 
case 4: 
b.style.left = 0+'px'; 
(d ==7) && (h = 9); 
(d ==4) && (h = 6); 
(d ==1) && (h = 3); 
break; 
case 5:// 
h = 5; 
break; 
case 6: 
b.style.left = db.clientWidth-b.offsetWidth+'px'; 
(d ==9) && (h = 7); 
(d ==6) && (h = 4); 
(d ==3) && (h = 1); 
break; 
case 7: 
b.style.left = 0+'px'; 
b.style.top = db.clientHeight-b.offsetHeight+'px'; 
(d ==7) && (h = 9); 
(d ==2) && (h = 8); 
(d ==8) && (h = 2); 
break; 
case 8: 
b.style.top = db.clientHeight-b.offsetHeight+'px'; 
(d ==9) && (h = 3); 
(d ==7) && (h = 1); 
(d ==8) && (h = 2); 
break; 
case 9: 
b.style.left = db.clientWidth-b.offsetWidth+'px'; 
b.style.top = db.clientHeight-b.offsetHeight+'px'; 
(d ==8) && (h = 2); 
(d ==6) && (h = 4); 
(d ==9) && (h = 1); 
break; 
} 
this._sportDirection(b, h); 
}, 
//运动方向(运动方向) 
_sportDirection: function(obj, direction) { 
var db = document.body || document.documentElement, mX = 0, mY = 0, _this = this, h = direction || (Math.round(Math.random()) ? 9 : 7); 
switch(h) { 
case 1: 
mX = -5; 
mY = -5; 
break; 
case 2: 
mX = 0; 
mY = -5; 
break; 
case 3: 
mX = 5; 
mY = -5; 
break; 
case 6: 
mX = 5; 
mY = 0; 
break; 
case 9: 
mX = 5; 
mY = 5; 
break; 
case 8: 
mX = 0; 
mY = 5; 
break; 
case 7: 
mX = -5; 
mY = 5; 
break; 
case 5: 
mX = 0; 
mY = 0; 
break; 
case 4: 
mX = -5; 
mY = 0; 
break; 
default: 
//alert("你输入的方向不对，只允许1-9，5表停止"); 
} 
obj.timer = setInterval(function() { 
if (obj.offsetLeft < 0 || obj.offsetTop < 0 || obj.offsetWidth+obj.offsetLeft > db.clientWidth || obj.offsetHeight+obj.offsetTop > db.clientHeight) { 
clearInterval(obj.timer); 
_this._hitBorder(obj, h); 
} else { 
obj.style.left = obj.offsetLeft + mX +'px'; 
obj.style.top = obj.offsetTop + mY +'px'; 
} 
},80); 
} 
}