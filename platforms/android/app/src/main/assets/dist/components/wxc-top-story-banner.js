/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(10)
	var __weex_style__ = __webpack_require__(11)
	var __weex_script__ = __webpack_require__(12)
	
	__weex_define__('@weex-component/b32e72d7ce300489aa3a884f0598fce6', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/b32e72d7ce300489aa3a884f0598fce6',undefined,undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "slider",
	      "classList": [
	        "slider"
	      ],
	      "append": "tree",
	      "attr": {
	        "interval": "2000",
	        "autoPlay": "true"
	      },
	      "children": [
	        {
	          "type": "div",
	          "repeat": {
	            "expression": function () {return this.stories},
	            "value": "story"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "image"
	              ],
	              "attr": {
	                "src": function () {return this.story.image},
	                "resize": "cover"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text"
	              ],
	              "attr": {
	                "value": function () {return this.story.title}
	              }
	            }
	          ]
	        },
	        {
	          "type": "indicator",
	          "classList": [
	            "indicator"
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "slider": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "width": 750,
	    "height": 400
	  },
	  "indicator": {
	    "position": "absolute",
	    "width": 750,
	    "height": 30,
	    "bottom": 0,
	    "left": 1,
	    "itemColor": "#ffffff",
	    "itemSelectedColor": "#a5a5a5"
	  },
	  "image": {
	    "width": 750,
	    "height": 400
	  },
	  "text": {
	    "position": "absolute",
	    "width": 600,
	    "top": 300,
	    "left": 20,
	    "fontSize": 30,
	    "color": "#ffffff"
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";
	
	module.exports = {
	
	    computed: {
	        stories: {
	            get: function get() {
	                if (!this.item) {
	                    return [];
	                }
	                return this.item;
	            }
	        }
	    },
	    data: function () {return {
	        item: [{
	            "image": "http:\/\/pic4.zhimg.com\/053078356044ae121ee133edeae751a7.jpg",
	            "type": 0,
	            "id": 9073905,
	            "ga_prefix": "121717",
	            "title": "知乎好问题 · 哪些电影拥有最美丽的风景？"
	        }, {
	            "image": "http:\/\/pic3.zhimg.com\/4ede28618c583990f72c02f84bb8173a.jpg",
	            "type": 0,
	            "id": 9064596,
	            "ga_prefix": "121718",
	            "title": "什么技术可以体验交换身体的感觉？"
	        }, {
	            "image": "http:\/\/pic2.zhimg.com\/0189a453c2f19c8351b8c99810ba5ddd.jpg",
	            "type": 0,
	            "id": 9058548,
	            "ga_prefix": "121714",
	            "title": "职场新人，别忙着规划人生，先来认识你自己"
	        }, {
	            "image": "http:\/\/pic1.zhimg.com\/db5e3bd9e41a198199ec8669e7ff3598.jpg",
	            "type": 0,
	            "id": 9061099,
	            "ga_prefix": "121707",
	            "title": "口臭是会呼吸的痛，除了不出气还有别的办法吗？"
	        }, {
	            "image": "http:\/\/pic4.zhimg.com\/7dec966aa0be9aee830f2b6dd6de5b1b.jpg",
	            "type": 0,
	            "id": 9072337,
	            "ga_prefix": "121707",
	            "title": "读读日报 24 小时热门 TOP 5 · 「饭替」和「挨耳光替」"
	        }]
	    }},
	    methods: {}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjY5NzhhM2UyNjFlZGZlMDVjOTY/ZjlmYSoqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3d4Yy10b3Atc3RvcnktYmFubmVyLndlPzJhYjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd3hjLXRvcC1zdG9yeS1iYW5uZXIud2U/MDZiYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93eGMtdG9wLXN0b3J5LWJhbm5lci53ZT9hOTY4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3d4Yy10b3Atc3RvcnktYmFubmVyLndlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOztBQUVELDJGOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDLG9CQUFvQjtBQUMzRDtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyx3QkFBd0I7QUFDNUQ7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7QUNtQkE7Ozs7aUNBS0E7aUNBQ0E7NEJBQ0E7QUFDQTs2QkFDQTtBQUdBO0FBUkE7QUFEQTs7O3NCQVlBO3FCQUNBO21CQUNBOzBCQUNBO3NCQUNBO0FBTEE7c0JBT0E7cUJBQ0E7bUJBQ0E7MEJBQ0E7c0JBQ0E7QUFMQTtzQkFPQTtxQkFDQTttQkFDQTswQkFDQTtzQkFDQTtBQUxBO3NCQU9BO3FCQUNBO21CQUNBOzBCQUNBO3NCQUNBO0FBTEE7c0JBT0E7cUJBQ0E7bUJBQ0E7MEJBQ0E7c0JBR0E7QUFQQTtBQXpCQTtjQWlDQTtBQTVDQSIsImZpbGUiOiJjb21wb25lbnRzL3d4Yy10b3Atc3RvcnktYmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjY5NzhhM2UyNjFlZGZlMDVjOTYiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy10b3Atc3RvcnktYmFubmVyLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy10b3Atc3RvcnktYmFubmVyLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPS9Vc2Vycy9qaWFuZ2Rpa2FpL0RvY3VtZW50cy9TdHVkeVNvbWV0aW5nL3dlZXgvY29kZS9hd2Vzb21lLW5ld3Mvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz0vVXNlcnMvamlhbmdkaWthaS9Eb2N1bWVudHMvU3R1ZHlTb21ldGluZy93ZWV4L2NvZGUvYXdlc29tZS1uZXdzL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT0vVXNlcnMvamlhbmdkaWthaS9Eb2N1bWVudHMvU3R1ZHlTb21ldGluZy93ZWV4L2NvZGUvYXdlc29tZS1uZXdzL25vZGVfbW9kdWxlcy9iYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz0vVXNlcnMvamlhbmdkaWthaS9Eb2N1bWVudHMvU3R1ZHlTb21ldGluZy93ZWV4L2NvZGUvYXdlc29tZS1uZXdzL25vZGVfbW9kdWxlcy9iYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtdG9wLXN0b3J5LWJhbm5lci53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC9iMzJlNzJkN2NlMzAwNDg5YWEzYTg4NGYwNTk4ZmNlNicsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5fX3dlZXhfYm9vdHN0cmFwX18oJ0B3ZWV4LWNvbXBvbmVudC9iMzJlNzJkN2NlMzAwNDg5YWEzYTg4NGYwNTk4ZmNlNicsdW5kZWZpbmVkLHVuZGVmaW5lZClcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3d4Yy10b3Atc3RvcnktYmFubmVyLndlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJzbGlkZXJcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJzbGlkZXJcIlxuICAgICAgXSxcbiAgICAgIFwiYXBwZW5kXCI6IFwidHJlZVwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJpbnRlcnZhbFwiOiBcIjIwMDBcIixcbiAgICAgICAgXCJhdXRvUGxheVwiOiBcInRydWVcIlxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICAgICAgXCJleHByZXNzaW9uXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zdG9yaWVzfSxcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJzdG9yeVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaW1hZ2VcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zdG9yeS5pbWFnZX0sXG4gICAgICAgICAgICAgICAgXCJyZXNpemVcIjogXCJjb3ZlclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidGV4dFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc3RvcnkudGl0bGV9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbmRpY2F0b3JcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImluZGljYXRvclwiXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvY29tcG9uZW50cy93eGMtdG9wLXN0b3J5LWJhbm5lci53ZVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJzbGlkZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IDc1MCxcbiAgICBcImhlaWdodFwiOiA0MDBcbiAgfSxcbiAgXCJpbmRpY2F0b3JcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwid2lkdGhcIjogNzUwLFxuICAgIFwiaGVpZ2h0XCI6IDMwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDEsXG4gICAgXCJpdGVtQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJpdGVtU2VsZWN0ZWRDb2xvclwiOiBcIiNhNWE1YTVcIlxuICB9LFxuICBcImltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IDc1MCxcbiAgICBcImhlaWdodFwiOiA0MDBcbiAgfSxcbiAgXCJ0ZXh0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcIndpZHRoXCI6IDYwMCxcbiAgICBcInRvcFwiOiAzMDAsXG4gICAgXCJsZWZ0XCI6IDIwLFxuICAgIFwiZm9udFNpemVcIjogMzAsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvY29tcG9uZW50cy93eGMtdG9wLXN0b3J5LWJhbm5lci53ZVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHNsaWRlciBjbGFzcz1cInNsaWRlclwiIGFwcGVuZD1cInRyZWVcIiBpbnRlcnZhbD1cIjIwMDBcIiBhdXRvLXBsYXk9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8ZGl2IHJlcGVhdD1cInt7c3RvcnkgaW4gc3Rvcmllc319XCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwiaW1hZ2VcIiBzcmM9XCJ7e3N0b3J5LmltYWdlfX1cIiByZXNpemU9XCJjb3ZlclwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ0ZXh0XCI+e3tzdG9yeS50aXRsZX19PC90ZXh0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5kaWNhdG9yIGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9pbmRpY2F0b3I+XG4gICAgICAgIDwvc2xpZGVyPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAgIC5zbGlkZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDc1MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIH1cblxuICAgIC5pbmRpY2F0b3Ige1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiA3NTBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgbGVmdDogMXB4O1xuICAgICAgICBpdGVtQ29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGl0ZW1TZWxlY3RlZENvbG9yOiAjYTVhNWE1O1xuICAgIH1cblxuICAgIC5pbWFnZSB7XG4gICAgICAgIHdpZHRoOiA3NTBweDtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICB0b3A6IDMwMHB4O1xuICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmXG4gICAgfVxuXG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBzdG9yaWVzOiB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGl0ZW06IFt7XG4gICAgICAgICAgICAgICAgXCJpbWFnZVwiOiBcImh0dHA6XFwvXFwvcGljNC56aGltZy5jb21cXC8wNTMwNzgzNTYwNDRhZTEyMWVlMTMzZWRlYWU3NTFhNy5qcGdcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogMCxcbiAgICAgICAgICAgICAgICBcImlkXCI6IDkwNzM5MDUsXG4gICAgICAgICAgICAgICAgXCJnYV9wcmVmaXhcIjogXCIxMjE3MTdcIixcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwi55+l5LmO5aW96Zeu6aKYIMK3IOWTquS6m+eUteW9seaLpeacieacgOe+juS4veeahOmjjuaZr++8n1wiXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJpbWFnZVwiOiBcImh0dHA6XFwvXFwvcGljMy56aGltZy5jb21cXC80ZWRlMjg2MThjNTgzOTkwZjcyYzAyZjg0YmI4MTczYS5qcGdcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogMCxcbiAgICAgICAgICAgICAgICBcImlkXCI6IDkwNjQ1OTYsXG4gICAgICAgICAgICAgICAgXCJnYV9wcmVmaXhcIjogXCIxMjE3MThcIixcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwi5LuA5LmI5oqA5pyv5Y+v5Lul5L2T6aqM5Lqk5o2i6Lqr5L2T55qE5oSf6KeJ77yfXCJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImltYWdlXCI6IFwiaHR0cDpcXC9cXC9waWMyLnpoaW1nLmNvbVxcLzAxODlhNDUzYzJmMTljODM1MWI4Yzk5ODEwYmE1ZGRkLmpwZ1wiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiAwLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogOTA1ODU0OCxcbiAgICAgICAgICAgICAgICBcImdhX3ByZWZpeFwiOiBcIjEyMTcxNFwiLFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCLogYzlnLrmlrDkurrvvIzliKvlv5nnnYDop4TliJLkurrnlJ/vvIzlhYjmnaXorqTor4bkvaDoh6rlt7FcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJodHRwOlxcL1xcL3BpYzEuemhpbWcuY29tXFwvZGI1ZTNiZDllNDFhMTk4MTk5ZWM4NjY5ZTdmZjM1OTguanBnXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJpZFwiOiA5MDYxMDk5LFxuICAgICAgICAgICAgICAgIFwiZ2FfcHJlZml4XCI6IFwiMTIxNzA3XCIsXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIuWPo+iHreaYr+S8muWRvOWQuOeahOeXm++8jOmZpOS6huS4jeWHuuawlOi/mOacieWIq+eahOWKnuazleWQl++8n1wiXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJpbWFnZVwiOiBcImh0dHA6XFwvXFwvcGljNC56aGltZy5jb21cXC83ZGVjOTY2YWEwYmU5YWVlODMwZjJiNmRkNmRlNWIxYi5qcGdcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogMCxcbiAgICAgICAgICAgICAgICBcImlkXCI6IDkwNzIzMzcsXG4gICAgICAgICAgICAgICAgXCJnYV9wcmVmaXhcIjogXCIxMjE3MDdcIixcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwi6K+76K+75pel5oqlIDI0IOWwj+aXtueDremXqCBUT1AgNSDCtyDjgIzppa3mm7/jgI3lkozjgIzmjKjogLPlhYnmm7/jgI1cIlxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge31cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3d4Yy10b3Atc3RvcnktYmFubmVyLndlP2ZjYzJkNGRhIl0sInNvdXJjZVJvb3QiOiIifQ==