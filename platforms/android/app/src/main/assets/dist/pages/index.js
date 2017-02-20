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

	var __weex_template__ = __webpack_require__(13)
	var __weex_style__ = __webpack_require__(14)
	var __weex_script__ = __webpack_require__(15)
	
	__weex_define__('@weex-component/6bf1306c2061602ec76462be4b676245', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/6bf1306c2061602ec76462be4b676245',undefined,undefined)

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
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "list",
	      "children": [
	        {
	          "type": "refresh",
	          "classList": [
	            "refresh-view"
	          ],
	          "attr": {
	            "display": function () {return this.refreshDisplay}
	          },
	          "events": {
	            "refresh": "loadFirstData"
	          },
	          "children": [
	            {
	              "type": "text",
	              "shown": function () {return (this.refreshDisplay==='hide')},
	              "attr": {
	                "value": "下拉刷新"
	              }
	            },
	            {
	              "type": "loading-indicator",
	              "classList": [
	                "indicator"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "repeat": {
	            "expression": function () {return this.storyList},
	            "value": "item"
	          },
	          "children": [
	            {
	              "type": "wxc-item-date",
	              "attr": {
	                "scope": function () {return this.item.type},
	                "item": function () {return this.item.data}
	              },
	              "shown": function () {return this.item.type==='date'}
	            },
	            {
	              "type": "wxc-top-story-banner",
	              "attr": {
	                "scope": function () {return this.item.type},
	                "item": function () {return this.item.data}
	              },
	              "shown": function () {return this.item.type==='banner'}
	            },
	            {
	              "type": "wxc-item-story",
	              "attr": {
	                "scope": function () {return this.item.type},
	                "item": function () {return this.item.data}
	              },
	              "shown": function () {return this.item.type==='story'}
	            },
	            {
	              "type": "wxc-item-loading-more",
	              "attr": {
	                "scope": function () {return this.item.type},
	                "tips": function () {return this.loadingText}
	              },
	              "shown": function () {return this.item.type==='loadMore'},
	              "events": {
	                "appear": "onLoadingMoreAppear"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {
	  "refresh-view": {
	    "width": 750,
	    "height": 120,
	    "alignItems": "center"
	  },
	  "indicator": {
	    "height": 60,
	    "width": 60,
	    "padding": 10,
	    "color": "#889967"
	  },
	  "loading-view": {
	    "width": 750,
	    "height": 100,
	    "alignItems": "center"
	  }
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	var _stringify = __webpack_require__(16);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../dist/components/wxc-top-story-banner.we\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../dist/components/wxc-item-story.we\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../dist/components/wxc-item-date.we\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../dist/components/wxc-item-loading-more.we\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var modal = __weex_require__('@weex-module/modal');
	var stream = __weex_require__('@weex-module/stream');
	var env;
	var platform;
	module.exports = {
	    data: function () {return {
	        loadingText: '正在加载中...',
	        loadMoreOffset: 2,
	        refreshDisplay: 'hide',
	        loadingDisplay: 'hide',
	        loadMoreDateOffset: 1,
	        storyList: []
	    }},
	    methods: {
	        loadFirstData: function loadFirstData() {
	            this.loadMoreDateOffset = 1;
	            this.refreshDisplay = 'show';
	            var that = this;
	            stream.fetch({
	                method: 'GET',
	                url: "http://news-at.zhihu.com/api/4/news/latest",
	                type: 'json'
	            }, function (response) {
	                if (response && response.data) {
	                    that.processServerData(response.data);
	                } else {
	                    modal.toast({
	                        message: '网络请求失败',
	                        duration: 1
	                    });
	                }
	            }, function (response) {
	                console.log("###response2 = " + (0, _stringify2.default)(response));
	            });
	        },
	        processServerData: function processServerData(latestNews) {
	            var tempStoryList = [];
	            if (latestNews && latestNews.stories && latestNews.top_stories) {
	                var storyItem = { type: '', data: {} };
	                storyItem.type = 'banner';
	                storyItem.data = latestNews.top_stories;
	                tempStoryList.push(storyItem);
	                var currentDate = this.getCurrentDate();
	                var dateItem = { type: 'date', data: { date: currentDate } };
	                tempStoryList.push(dateItem);
	                for (var i = 0; i < latestNews.stories.length; i++) {
	                    var item = { type: '', data: {} };
	                    item.type = 'story';
	                    item.data = latestNews.stories[i];
	                    tempStoryList.push(item);
	                }
	                this.storyList = tempStoryList;
	                this.refreshDisplay = 'hide';
	                this.addLoadMoreItemIfNeed();
	            }
	        },
	        addLoadMoreItemIfNeed: function addLoadMoreItemIfNeed() {
	            if (!this.storyList || this.storyList.length <= 0) {
	                return;
	            }
	            var lastItem = this.storyList[this.storyList.length - 1];
	            if (lastItem.type != 'loadMore') {
	                var loadMoreItem = {};
	                loadMoreItem.type = 'loadMore';
	                this.storyList.push(loadMoreItem);
	            }
	        },
	        onLoadingMoreAppear: function onLoadingMoreAppear(e) {
	            this.onLoadingMore();
	        },
	        onLoadingMore: function onLoadingMore() {
	            this.loadingDisplay = 'show';
	            this.loadingText = '正在加载中...';
	            var paramDate = this.getParamDate(false);
	            console.log("###paramDate = " + paramDate);
	            var that = this;
	            stream.fetch({
	                method: 'GET',
	                url: "http://news-at.zhihu.com/api/4/news/before/" + paramDate,
	                type: 'json'
	            }, function (response) {
	                console.log('### response = ' + (0, _stringify2.default)(response));
	                if (response && response.data) {
	                    that.processLoadMore(response.data);
	                    that.loadMoreDateOffset = that.loadMoreDateOffset + 1;
	                    that.loadingDisplay = 'hide';
	                } else {
	                    modal.toast({
	                        message: '网络请求失败,使用mock数据',
	                        duration: 1
	                    });
	                }
	            }, function (response) {
	                console.log("###response2 = " + (0, _stringify2.default)(response));
	            });
	        },
	        processLoadMore: function processLoadMore(beforeNews) {
	            this.removeLastItemIfNeed();
	            var tempStoryList = [];
	            tempStoryList = tempStoryList.concat(this.storyList);
	            if (beforeNews && beforeNews.stories) {
	                var currentDate = this.getParamDate(true);
	                var dateItem = { type: 'date', data: { date: currentDate } };
	                tempStoryList.push(dateItem);
	                for (var i = 0; i < beforeNews.stories.length; i++) {
	                    var item = { type: '', data: {} };
	                    item.type = 'story';
	                    item.data = beforeNews.stories[i];
	                    tempStoryList.push(item);
	                }
	                this.storyList = tempStoryList;
	            }
	            this.addLoadMoreItemIfNeed();
	        },
	        removeLastItemIfNeed: function removeLastItemIfNeed() {
	            if (!this.storyList || this.storyList.length <= 0) {
	                return;
	            }
	            var lastItem = this.storyList[this.storyList.length - 1];
	            if (lastItem.type == 'loadMore') {
	                this.storyList.pop();
	            }
	        },
	
	        getCurrentDate: function getCurrentDate() {
	            var nowDate = new Date();
	            return nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
	        },
	        getParamDate: function getParamDate(isShow) {
	            var nowDate = new Date();
	            var paramTime = nowDate.getTime() - 1000 * 60 * 60 * 24 * this.loadMoreDateOffset;
	            var paramDate = new Date(paramTime);
	            var mm = paramDate.getMonth() + 1;
	            var dd = paramDate.getDate();
	            if (isShow) {
	                return [paramDate.getFullYear(), (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('-');
	            }
	            return [paramDate.getFullYear(), (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('');
	        }
	    },
	
	    init: function init() {
	        var cfg = this.$getConfig();
	        env = cfg.env;
	        platform = env.platform.toLowerCase();
	    },
	
	    created: function created() {
	        this.loadFirstData();
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(17), __esModule: true };

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(18)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTc3NmEwMTkyNWRhYmVkZDU0ZmI/OTcxNCoqKiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgud2U/ZGVhOCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgud2U/MTY5MyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgud2U/ZjZjYSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgud2UiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7QUFFRCwyRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQztBQUNwQyxZQUFXO0FBQ1g7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0Msc0NBQXNDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF1QyxzQkFBc0I7QUFDN0Q7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0Msc0JBQXNCO0FBQzVELHNDQUFxQztBQUNyQyxnQkFBZTtBQUNmLHFDQUFvQztBQUNwQyxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsdUNBQXNDLHNCQUFzQjtBQUM1RCxzQ0FBcUM7QUFDckMsZ0JBQWU7QUFDZixxQ0FBb0M7QUFDcEMsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHVDQUFzQyxzQkFBc0I7QUFDNUQsc0NBQXFDO0FBQ3JDLGdCQUFlO0FBQ2YscUNBQW9DO0FBQ3BDLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0Msc0JBQXNCO0FBQzVELHNDQUFxQztBQUNyQyxnQkFBZTtBQUNmLHFDQUFvQyxtQ0FBbUM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7QUNpQkEscUJBQ0E7cUJBQ0E7cUJBQ0E7cUJBQ0E7cUJBQ0E7c0JBQ0E7S0FDQTtLQUNBOzs7c0JBR0E7eUJBQ0E7eUJBQ0E7eUJBQ0E7NkJBQ0E7b0JBRUE7QUFQQTs7aURBU0E7dUNBQ0E7bUNBQ0E7d0JBQ0E7O3lCQUVBO3NCQUNBO3VCQUNBO0FBSEEsb0NBSUE7Z0RBQ0E7cURBQ0E7d0JBQ0E7O2tDQUVBO21DQUVBO0FBSEE7QUFJQTtvQ0FDQTswRUFDQTtBQUNBO0FBQ0E7bUVBQ0E7aUNBQ0E7NkVBQ0E7bURBQ0E7a0NBQ0E7NkNBQ0E7b0NBQ0E7d0NBQ0E7OERBQ0E7b0NBQ0E7cUVBQ0E7a0RBQ0E7aUNBQ0E7b0RBQ0E7d0NBQ0E7QUFDQTtrQ0FDQTt1Q0FDQTtzQkFDQTtBQUNBO0FBQ0E7aUVBQ0E7Z0VBQ0E7QUFDQTtBQUNBO21FQUNBOzhDQUNBO29DQUNBO3FDQUNBO3FDQUNBO0FBQ0E7QUFDQTs4REFJQTtrQkFDQTtBQUNBO2lEQUNBO21DQUNBO2dDQUNBOytDQUNBOzZDQUNBO3dCQUNBOzt5QkFFQTtzRUFDQTt1QkFDQTtBQUhBLG9DQUlBOzBFQUNBO2dEQUNBO21EQUNBO3lFQUNBOzJDQUNBO3dCQUNBOztrQ0FFQTttQ0FFQTtBQUhBO0FBSUE7b0NBQ0E7MEVBQ0E7QUFDQTtBQUNBOytEQUNBO2tCQUNBO2lDQUNBO3VEQUNBO21EQUNBO3FEQUNBOzhEQUNBO29DQUNBO3FFQUNBO2tEQUNBO2lDQUNBO29EQUNBO3dDQUNBO0FBQ0E7a0NBQ0E7QUFDQTtrQkFDQTtBQUNBOytEQUNBO2dFQUNBO0FBQ0E7QUFDQTttRUFDQTs4Q0FDQTtnQ0FDQTtBQUNBO0FBRUE7O21EQUNBOytCQUNBOzJGQUNBO0FBQ0E7cURBQ0E7K0JBQ0E7NEVBQ0E7c0NBQ0E7NkNBQ0E7Z0NBQ0E7eUJBQ0E7bUNBQ0EscUNBQ0EsMEJBQ0EsU0FDQTtBQUNBOytCQUNBLHFDQUNBLDBCQUNBLFNBQ0E7QUFLQTtBQTFJQTs7MkJBMklBO3dCQUNBO21CQUNBO2lDQUNBO0FBRUE7O2lDQUNBO2NBQ0E7QUFDQTtBQTVKQTs7Ozs7Ozs7QUMzQ0EsbUJBQWtCLHdEOzs7Ozs7QUNBbEI7QUFDQSx3Q0FBdUMsMEJBQTBCO0FBQ2pFLHlDQUF3QztBQUN4QztBQUNBLEc7Ozs7OztBQ0pBLDhCQUE2QjtBQUM3QixzQ0FBcUMsZ0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNzc2YTAxOTI1ZGFiZWRkNTRmYiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vaW5kZXgud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vaW5kZXgud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109L1VzZXJzL2ppYW5nZGlrYWkvRG9jdW1lbnRzL1N0dWR5U29tZXRpbmcvd2VleC9jb2RlL2F3ZXNvbWUtbmV3cy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPS9Vc2Vycy9qaWFuZ2Rpa2FpL0RvY3VtZW50cy9TdHVkeVNvbWV0aW5nL3dlZXgvY29kZS9hd2Vzb21lLW5ld3Mvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPS9Vc2Vycy9qaWFuZ2Rpa2FpL0RvY3VtZW50cy9TdHVkeVNvbWV0aW5nL3dlZXgvY29kZS9hd2Vzb21lLW5ld3Mvbm9kZV9tb2R1bGVzL2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPS9Vc2Vycy9qaWFuZ2Rpa2FpL0RvY3VtZW50cy9TdHVkeVNvbWV0aW5nL3dlZXgvY29kZS9hd2Vzb21lLW5ld3Mvbm9kZV9tb2R1bGVzL2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2luZGV4LndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50LzZiZjEzMDZjMjA2MTYwMmVjNzY0NjJiZTRiNjc2MjQ1JywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cbl9fd2VleF9ib290c3RyYXBfXygnQHdlZXgtY29tcG9uZW50LzZiZjEzMDZjMjA2MTYwMmVjNzY0NjJiZTRiNjc2MjQ1Jyx1bmRlZmluZWQsdW5kZWZpbmVkKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3BhZ2VzL2luZGV4LndlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJsaXN0XCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInJlZnJlc2hcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInJlZnJlc2gtdmlld1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJkaXNwbGF5XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yZWZyZXNoRGlzcGxheX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwicmVmcmVzaFwiOiBcImxvYWRGaXJzdERhdGFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLnJlZnJlc2hEaXNwbGF5PT09J2hpZGUnKX0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuS4i+aLieWIt+aWsFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImxvYWRpbmctaW5kaWNhdG9yXCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImluZGljYXRvclwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJjZWxsXCIsXG4gICAgICAgICAgXCJhcHBlbmRcIjogXCJ0cmVlXCIsXG4gICAgICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICAgICAgXCJleHByZXNzaW9uXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zdG9yeUxpc3R9LFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInd4Yy1pdGVtLWRhdGVcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNjb3BlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtLnR5cGV9LFxuICAgICAgICAgICAgICAgIFwiaXRlbVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbS5kYXRhfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtLnR5cGU9PT0nZGF0ZSd9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ3eGMtdG9wLXN0b3J5LWJhbm5lclwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic2NvcGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0udHlwZX0sXG4gICAgICAgICAgICAgICAgXCJpdGVtXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtLmRhdGF9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0udHlwZT09PSdiYW5uZXInfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwid3hjLWl0ZW0tc3RvcnlcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNjb3BlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtLnR5cGV9LFxuICAgICAgICAgICAgICAgIFwiaXRlbVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbS5kYXRhfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtLnR5cGU9PT0nc3RvcnknfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwid3hjLWl0ZW0tbG9hZGluZy1tb3JlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzY29wZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbS50eXBlfSxcbiAgICAgICAgICAgICAgICBcInRpcHNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxvYWRpbmdUZXh0fVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtLnR5cGU9PT0nbG9hZE1vcmUnfSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiYXBwZWFyXCI6IFwib25Mb2FkaW5nTW9yZUFwcGVhclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9wYWdlcy9pbmRleC53ZVxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwicmVmcmVzaC12aWV3XCI6IHtcbiAgICBcIndpZHRoXCI6IDc1MCxcbiAgICBcImhlaWdodFwiOiAxMjAsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJpbmRpY2F0b3JcIjoge1xuICAgIFwiaGVpZ2h0XCI6IDYwLFxuICAgIFwid2lkdGhcIjogNjAsXG4gICAgXCJwYWRkaW5nXCI6IDEwLFxuICAgIFwiY29sb3JcIjogXCIjODg5OTY3XCJcbiAgfSxcbiAgXCJsb2FkaW5nLXZpZXdcIjoge1xuICAgIFwid2lkdGhcIjogNzUwLFxuICAgIFwiaGVpZ2h0XCI6IDEwMCxcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvcGFnZXMvaW5kZXgud2Vcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIjx0ZW1wbGF0ZT5cbiAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGlzdD5cbiAgICAgICAgICAgICAgICA8IS0tIOa3u+WKoOS4i+aLieWIt+aWsC0tPlxuICAgICAgICAgICAgICAgIDxyZWZyZXNoIGNsYXNzPVwicmVmcmVzaC12aWV3XCIgZGlzcGxheT1cInt7cmVmcmVzaERpc3BsYXl9fVwiIG9ucmVmcmVzaD1cImxvYWRGaXJzdERhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHQgaWY9XCJ7eyhyZWZyZXNoRGlzcGxheT09PSdoaWRlJyl9fVwiPuS4i+aLieWIt+aWsDwvdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPGxvYWRpbmctaW5kaWNhdG9yIGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9sb2FkaW5nLWluZGljYXRvcj5cbiAgICAgICAgICAgICAgICA8L3JlZnJlc2g+XG5cbiAgICAgICAgICAgICAgICA8Y2VsbCByZXBlYXQ9XCJ7e2l0ZW0gaW4gc3RvcnlMaXN0fX1cIj5cblxuICAgICAgICAgICAgICAgICAgICA8d3hjLWl0ZW0tZGF0ZSBzY29wZT1cInt7aXRlbS50eXBlfX1cIiBpZj1cInt7aXRlbS50eXBlID09PSAnZGF0ZSd9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09XCJ7e2l0ZW0uZGF0YX19XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvd3hjLWl0ZW0tZGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICA8d3hjLXRvcC1zdG9yeS1iYW5uZXIgc2NvcGU9XCJ7e2l0ZW0udHlwZX19XCIgaWY9XCJ7e2l0ZW0udHlwZSA9PT0gJ2Jhbm5lcid9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtPVwie3tpdGVtLmRhdGF9fVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3d4Yy10b3Atc3RvcnktYmFubmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDx3eGMtaXRlbS1zdG9yeSBzY29wZT1cInt7aXRlbS50eXBlfX1cIiBpZj1cInt7aXRlbS50eXBlID09PSAnc3RvcnknfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT1cInt7aXRlbS5kYXRhfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPC93eGMtaXRlbS1zdG9yeT5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIOiHquWKqOWKoOi9veabtOWkmiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHd4Yy1pdGVtLWxvYWRpbmctbW9yZSBzY29wZT1cInt7aXRlbS50eXBlfX1cIiBpZj1cInt7aXRlbS50eXBlID09PSAnbG9hZE1vcmUnfX1cIiB0aXBzPVwie3tsb2FkaW5nVGV4dH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmFwcGVhcj1cIm9uTG9hZGluZ01vcmVBcHBlYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPC93eGMtaXRlbS1sb2FkaW5nLW1vcmU+XG5cbiAgICAgICAgICAgICAgICA8L2NlbGw+XG5cbiAgICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICAgICAgcmVxdWlyZSgnLi4vZGlzdC9jb21wb25lbnRzL3d4Yy10b3Atc3RvcnktYmFubmVyLndlJyk7XG4gICAgICAgIHJlcXVpcmUoJy4uL2Rpc3QvY29tcG9uZW50cy93eGMtaXRlbS1zdG9yeS53ZScpO1xuICAgICAgICByZXF1aXJlKCcuLi9kaXN0L2NvbXBvbmVudHMvd3hjLWl0ZW0tZGF0ZS53ZScpO1xuICAgICAgICByZXF1aXJlKCcuLi9kaXN0L2NvbXBvbmVudHMvd3hjLWl0ZW0tbG9hZGluZy1tb3JlLndlJyk7XG4gICAgICAgIHZhciBtb2RhbCA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9tb2RhbCcpO1xuICAgICAgICB2YXIgc3RyZWFtID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL3N0cmVhbScpO1xuICAgICAgICB2YXIgZW52O1xuICAgICAgICB2YXIgcGxhdGZvcm07XG4gICAgbW9kdWxlLmV4cG9ydHM9e1xuICAgICBkYXRhOntcbiAgICAgICAgICAgIGxvYWRpbmdUZXh0OiAn5q2j5Zyo5Yqg6L295LitLi4uJyxcbiAgICAgICAgICAgIGxvYWRNb3JlT2Zmc2V0OiAyLFxuICAgICAgICAgICAgcmVmcmVzaERpc3BsYXk6ICdoaWRlJyxcbiAgICAgICAgICAgIGxvYWRpbmdEaXNwbGF5OiAnaGlkZScsXG4gICAgICAgICAgICBsb2FkTW9yZURhdGVPZmZzZXQ6IDEsXG4gICAgICAgICAgICBzdG9yeUxpc3Q6IFtdXG4gICAgIH0sXG4gICAgIG1ldGhvZHM6e1xuICAgICAgICAgICAgbG9hZEZpcnN0RGF0YTpmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRNb3JlRGF0ZU9mZnNldCA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoRGlzcGxheSA9ICdzaG93JztcbiAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbS5mZXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cDovL25ld3MtYXQuemhpaHUuY29tL2FwaS80L25ld3MvbGF0ZXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnanNvbidcbiAgICAgICAgICAgICAgICAgICAgfSxmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnByb2Nlc3NTZXJ2ZXJEYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbC50b2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfnvZHnu5zor7fmsYLlpLHotKUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjcmVzcG9uc2UyID0gXCIgKyBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb2Nlc3NTZXJ2ZXJEYXRhOiBmdW5jdGlvbiAobGF0ZXN0TmV3cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFN0b3J5TGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF0ZXN0TmV3cyAmJiBsYXRlc3ROZXdzLnN0b3JpZXMgJiYgbGF0ZXN0TmV3cy50b3Bfc3Rvcmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3J5SXRlbSA9IHt0eXBlOiAnJywgZGF0YToge319O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcnlJdGVtLnR5cGUgPSAnYmFubmVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3J5SXRlbS5kYXRhID0gbGF0ZXN0TmV3cy50b3Bfc3RvcmllcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBTdG9yeUxpc3QucHVzaChzdG9yeUl0ZW0pOy8vYWRkIGJhbm5lciBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudERhdGUgPSB0aGlzLmdldEN1cnJlbnREYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0ZUl0ZW0gPSB7dHlwZTogJ2RhdGUnLCBkYXRhOiB7ZGF0ZTogY3VycmVudERhdGV9fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBTdG9yeUxpc3QucHVzaChkYXRlSXRlbSk7Ly9hZGQgZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXRlc3ROZXdzLnN0b3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHt0eXBlOiAnJywgZGF0YToge319O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udHlwZSA9ICdzdG9yeSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5kYXRhID0gbGF0ZXN0TmV3cy5zdG9yaWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBTdG9yeUxpc3QucHVzaChpdGVtKTsvL2FkZCBzdG9yeSBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5TGlzdCA9IHRlbXBTdG9yeUxpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hEaXNwbGF5ID0gJ2hpZGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRMb2FkTW9yZUl0ZW1JZk5lZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRMb2FkTW9yZUl0ZW1JZk5lZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0b3J5TGlzdCB8fCB0aGlzLnN0b3J5TGlzdC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYXN0SXRlbSA9IHRoaXMuc3RvcnlMaXN0W3RoaXMuc3RvcnlMaXN0Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEl0ZW0udHlwZSAhPSAnbG9hZE1vcmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9hZE1vcmVJdGVtID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9yZUl0ZW0udHlwZSA9ICdsb2FkTW9yZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3J5TGlzdC5wdXNoKGxvYWRNb3JlSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Mb2FkaW5nTW9yZUFwcGVhcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAvL+W9kyfliqDovb3mm7TlpJonaXRlbeWHuueOsOaXtu+8jOW8gOWni+ivt+axguS4i+S4gOmhteaVsOaNrlxuICAgICAgICAgICAgICAgIC8vdmFyIGFwcGVhcklkID0gdGhpcy5yb3dzW2UudGFyZ2V0LmF0dHIuaW5kZXhdLmlkO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJyMjI2FwcGVhcklkID0gJyArIGFwcGVhcklkKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTG9hZGluZ01vcmUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkxvYWRpbmdNb3JlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdEaXNwbGF5ID0gJ3Nob3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nVGV4dCA9ICfmraPlnKjliqDovb3kuK0uLi4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtRGF0ZSA9IHRoaXMuZ2V0UGFyYW1EYXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjcGFyYW1EYXRlID0gXCIgKyBwYXJhbURhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWFtLmZldGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwOi8vbmV3cy1hdC56aGlodS5jb20vYXBpLzQvbmV3cy9iZWZvcmUvXCIgKyBwYXJhbURhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2pzb24nXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnIyMjIHJlc3BvbnNlID0gJyArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wcm9jZXNzTG9hZE1vcmUocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubG9hZE1vcmVEYXRlT2Zmc2V0ID0gdGhhdC5sb2FkTW9yZURhdGVPZmZzZXQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmxvYWRpbmdEaXNwbGF5ID0gJ2hpZGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLnRvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfnvZHnu5zor7fmsYLlpLHotKUs5L2/55SobW9ja+aVsOaNricsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjI3Jlc3BvbnNlMiA9IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvY2Vzc0xvYWRNb3JlOiBmdW5jdGlvbiAoYmVmb3JlTmV3cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTGFzdEl0ZW1JZk5lZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFN0b3J5TGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBTdG9yeUxpc3QgPSB0ZW1wU3RvcnlMaXN0LmNvbmNhdCh0aGlzLnN0b3J5TGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJlZm9yZU5ld3MgJiYgYmVmb3JlTmV3cy5zdG9yaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50RGF0ZSA9IHRoaXMuZ2V0UGFyYW1EYXRlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0ZUl0ZW0gPSB7dHlwZTogJ2RhdGUnLCBkYXRhOiB7ZGF0ZTogY3VycmVudERhdGV9fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFN0b3J5TGlzdC5wdXNoKGRhdGVJdGVtKTsvL2FkZCBkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmVmb3JlTmV3cy5zdG9yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHt0eXBlOiAnJywgZGF0YToge319O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50eXBlID0gJ3N0b3J5JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGF0YSA9IGJlZm9yZU5ld3Muc3Rvcmllc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBTdG9yeUxpc3QucHVzaChpdGVtKTsvL2FkZCBzdG9yeSBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUxpc3QgPSB0ZW1wU3RvcnlMaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZExvYWRNb3JlSXRlbUlmTmVlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZUxhc3RJdGVtSWZOZWVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0b3J5TGlzdCB8fCB0aGlzLnN0b3J5TGlzdC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYXN0SXRlbSA9IHRoaXMuc3RvcnlMaXN0W3RoaXMuc3RvcnlMaXN0Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0SXRlbS50eXBlID09ICdsb2FkTW9yZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yeUxpc3QucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0Q3VycmVudERhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vd0RhdGUuZ2V0RnVsbFllYXIoKSArICctJyArIChub3dEYXRlLmdldE1vbnRoKCkgKyAxKSArICctJyArIG5vd0RhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFBhcmFtRGF0ZTogZnVuY3Rpb24gKGlzU2hvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3dEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1UaW1lID0gbm93RGF0ZS5nZXRUaW1lKCkgLSAxMDAwICogNjAgKiA2MCAqIDI0ICogdGhpcy5sb2FkTW9yZURhdGVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtRGF0ZSA9IG5ldyBEYXRlKHBhcmFtVGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1tID0gcGFyYW1EYXRlLmdldE1vbnRoKCkgKyAxOyAvLyBnZXRNb250aCgpIGlzIHplcm8tYmFzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGQgPSBwYXJhbURhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtwYXJhbURhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtbSA+IDkgPyAnJyA6ICcwJykgKyBtbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkZCA+IDkgPyAnJyA6ICcwJykgKyBkZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJy0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtwYXJhbURhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1tID4gOSA/ICcnIDogJzAnKSArIG1tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGQgPiA5ID8gJycgOiAnMCcpICsgZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICB9LFxuXG5cblxuICAgICBpbml0OmZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBjZmc9dGhpcy4kZ2V0Q29uZmlnKCk7XG4gICAgICAgICAgZW52PWNmZy5lbnY7XG4gICAgICAgICAgcGxhdGZvcm09ZW52LnBsYXRmb3JtLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9LFxuXG4gICAgIGNyZWF0ZWQ6ZnVuY3Rpb24oKSB7XG4gICAgICAgdGhpcy5sb2FkRmlyc3REYXRhKCk7XG4gICAgIH1cbiAgICB9XG5cbjwvc2NyaXB0PlxuPHN0eWxlID5cblxuICAgLnJlZnJlc2gtdmlldyB7XG4gICAgICAgIHdpZHRoOiA3NTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuaW5kaWNhdG9yIHtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgY29sb3I6ICM4ODk5Njc7XG4gICAgfVxuXG4gICAgLmxvYWRpbmctdmlldyB7XG4gICAgICAgIHdpZHRoOiA3NTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9pbmRleC53ZT8yODA0MTBiYSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsInZhciBjb3JlICA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKVxuICAsICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7c3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeX0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCJdLCJzb3VyY2VSb290IjoiIn0=