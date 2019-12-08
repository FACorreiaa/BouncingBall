/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Ball.ts":
/*!********************************!*\
  !*** ./src/components/Ball.ts ***!
  \********************************/
/*! exports provided: Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ball\", function() { return Ball; });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ \"./src/utils/constants.ts\");\n\n/**\n *\n * Properties of the Ball object\n * @param x - random starting x\n * @param y - random starting y\n * @param a - accelaration\n * @param t - time\n * @param px - formula of x position over time\n * @param py - formula of y position over time\n * @param dx - formula of speed x over time\n * @param dy - formula of speed y over time\n * @param size - random circle size\n * @param color - random circle color\n * @param speed - ball speed\n */\nclass Ball {\n    constructor(x = 0, y = 0, dx = 0, dy = 0, px = 0, py = 0, size = 0, color = '', speed = 0) {\n        this.x = x;\n        this.y = y;\n        this.dx = dx;\n        this.dy = dy;\n        this.px = px;\n        this.py = py;\n        this.size = size;\n        this.color = color;\n        this.speed = speed;\n        this.x = this.startingX();\n        this.y = this.startingY();\n        this.dx = this.directionX();\n        this.dy = this.directionY();\n        this.px = this.positionX();\n        this.py = this.positionY();\n        this.speed = this.getSpeed(Ball.t);\n        this.size = this.ballSize();\n        this.color = this.ballColor();\n    }\n    startingX() {\n        return (Math.floor(Math.random() * Ball.randomMaxNumber) + Ball.randomMinNumber);\n    }\n    startingY() {\n        return (Math.floor(Math.random() * Ball.randomMaxNumber) + Ball.randomMinNumber);\n    }\n    /**\n     *\n     * @param t\n     * @returns speed between 75 and t\n     */\n    getSpeed(t) {\n        return Math.floor(Math.random() * 76 + 25) / Ball.t;\n    }\n    directionX() {\n        return Math.floor(Math.random() * 2) == 0\n            ? this.getStartingX() * _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"minusOne\"]\n            : this.getStartingX();\n    }\n    directionY() {\n        return Math.floor(Math.random() * 2) == 0\n            ? -this.getStartingY() * _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"minusOne\"]\n            : this.getStartingY();\n    }\n    ballSize() {\n        return Math.random() * (101 - 50) + 50;\n    }\n    ballColor() {\n        return ('#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6));\n    }\n    positionX() {\n        return this.x + this.dx * Ball.t;\n    }\n    positionY() {\n        return this.y + this.dy + Ball.t - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"dotFive\"] * Ball.acel * Ball.t * 2;\n    }\n    getStartingX() {\n        return _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"two\"];\n    }\n    getStartingY() {\n        return _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"two\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"minusOne\"] * Ball.t;\n    }\n}\nBall.acel = 2; //aceleration\nBall.t = 120; //time\nBall.randomMaxNumber = 1500;\nBall.randomMinNumber = 1;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CYWxsLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmFsbC50cz9jMzM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1pbnVzT25lLCB0d28sIGRvdEZpdmUgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuLyoqXG4gKlxuICogUHJvcGVydGllcyBvZiB0aGUgQmFsbCBvYmplY3RcbiAqIEBwYXJhbSB4IC0gcmFuZG9tIHN0YXJ0aW5nIHhcbiAqIEBwYXJhbSB5IC0gcmFuZG9tIHN0YXJ0aW5nIHlcbiAqIEBwYXJhbSBhIC0gYWNjZWxhcmF0aW9uXG4gKiBAcGFyYW0gdCAtIHRpbWVcbiAqIEBwYXJhbSBweCAtIGZvcm11bGEgb2YgeCBwb3NpdGlvbiBvdmVyIHRpbWVcbiAqIEBwYXJhbSBweSAtIGZvcm11bGEgb2YgeSBwb3NpdGlvbiBvdmVyIHRpbWVcbiAqIEBwYXJhbSBkeCAtIGZvcm11bGEgb2Ygc3BlZWQgeCBvdmVyIHRpbWVcbiAqIEBwYXJhbSBkeSAtIGZvcm11bGEgb2Ygc3BlZWQgeSBvdmVyIHRpbWVcbiAqIEBwYXJhbSBzaXplIC0gcmFuZG9tIGNpcmNsZSBzaXplXG4gKiBAcGFyYW0gY29sb3IgLSByYW5kb20gY2lyY2xlIGNvbG9yXG4gKiBAcGFyYW0gc3BlZWQgLSBiYWxsIHNwZWVkXG4gKi9cbmV4cG9ydCBjbGFzcyBCYWxsIHtcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDAsIGR4ID0gMCwgZHkgPSAwLCBweCA9IDAsIHB5ID0gMCwgc2l6ZSA9IDAsIGNvbG9yID0gJycsIHNwZWVkID0gMCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmR4ID0gZHg7XG4gICAgICAgIHRoaXMuZHkgPSBkeTtcbiAgICAgICAgdGhpcy5weCA9IHB4O1xuICAgICAgICB0aGlzLnB5ID0gcHk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgICB0aGlzLnggPSB0aGlzLnN0YXJ0aW5nWCgpO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnN0YXJ0aW5nWSgpO1xuICAgICAgICB0aGlzLmR4ID0gdGhpcy5kaXJlY3Rpb25YKCk7XG4gICAgICAgIHRoaXMuZHkgPSB0aGlzLmRpcmVjdGlvblkoKTtcbiAgICAgICAgdGhpcy5weCA9IHRoaXMucG9zaXRpb25YKCk7XG4gICAgICAgIHRoaXMucHkgPSB0aGlzLnBvc2l0aW9uWSgpO1xuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5nZXRTcGVlZChCYWxsLnQpO1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmJhbGxTaXplKCk7XG4gICAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmJhbGxDb2xvcigpO1xuICAgIH1cbiAgICBzdGFydGluZ1goKSB7XG4gICAgICAgIHJldHVybiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQmFsbC5yYW5kb21NYXhOdW1iZXIpICsgQmFsbC5yYW5kb21NaW5OdW1iZXIpO1xuICAgIH1cbiAgICBzdGFydGluZ1koKSB7XG4gICAgICAgIHJldHVybiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQmFsbC5yYW5kb21NYXhOdW1iZXIpICsgQmFsbC5yYW5kb21NaW5OdW1iZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0XG4gICAgICogQHJldHVybnMgc3BlZWQgYmV0d2VlbiA3NSBhbmQgdFxuICAgICAqL1xuICAgIGdldFNwZWVkKHQpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDc2ICsgMjUpIC8gQmFsbC50O1xuICAgIH1cbiAgICBkaXJlY3Rpb25YKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT0gMFxuICAgICAgICAgICAgPyB0aGlzLmdldFN0YXJ0aW5nWCgpICogbWludXNPbmVcbiAgICAgICAgICAgIDogdGhpcy5nZXRTdGFydGluZ1goKTtcbiAgICB9XG4gICAgZGlyZWN0aW9uWSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09IDBcbiAgICAgICAgICAgID8gLXRoaXMuZ2V0U3RhcnRpbmdZKCkgKiBtaW51c09uZVxuICAgICAgICAgICAgOiB0aGlzLmdldFN0YXJ0aW5nWSgpO1xuICAgIH1cbiAgICBiYWxsU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAoMTAxIC0gNTApICsgNTA7XG4gICAgfVxuICAgIGJhbGxDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuICgnIycgKyAoMHgxMDAwMDAwICsgTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmKS50b1N0cmluZygxNikuc3Vic3RyKDEsIDYpKTtcbiAgICB9XG4gICAgcG9zaXRpb25YKCkge1xuICAgICAgICByZXR1cm4gdGhpcy54ICsgdGhpcy5keCAqIEJhbGwudDtcbiAgICB9XG4gICAgcG9zaXRpb25ZKCkge1xuICAgICAgICByZXR1cm4gdGhpcy55ICsgdGhpcy5keSArIEJhbGwudCAtIGRvdEZpdmUgKiBCYWxsLmFjZWwgKiBCYWxsLnQgKiAyO1xuICAgIH1cbiAgICBnZXRTdGFydGluZ1goKSB7XG4gICAgICAgIHJldHVybiB0d287XG4gICAgfVxuICAgIGdldFN0YXJ0aW5nWSgpIHtcbiAgICAgICAgcmV0dXJuIHR3byAqIG1pbnVzT25lICogQmFsbC50O1xuICAgIH1cbn1cbkJhbGwuYWNlbCA9IDI7IC8vYWNlbGVyYXRpb25cbkJhbGwudCA9IDEyMDsgLy90aW1lXG5CYWxsLnJhbmRvbU1heE51bWJlciA9IDE1MDA7XG5CYWxsLnJhbmRvbU1pbk51bWJlciA9IDE7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Ball.ts\n");

/***/ }),

/***/ "./src/components/Root.ts":
/*!********************************!*\
  !*** ./src/components/Root.ts ***!
  \********************************/
/*! exports provided: Root */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Root\", function() { return Root; });\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ \"./src/components/Ball.ts\");\n\nclass Root {\n    constructor(id) {\n        this.id = id;\n        this.backgroundColor = '#faf4b4';\n        this.ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"]();\n        this.canvas = document.getElementById(this.id);\n        this.canvas.width = window.innerWidth;\n        this.canvas.height = window.innerHeight;\n        window.addEventListener('resize', () => this.resizeCanvas(), false);\n    }\n    //2d context\n    context() {\n        return this.canvas.getContext('2d');\n    }\n    //we need to call this when creating the ball\n    //otherwise the screen width and height wont be resized to screen size\n    resizeCanvas() {\n        this.canvas.width = window.innerWidth;\n        this.canvas.height = window.innerHeight;\n    }\n    start() {\n        this.updateBall();\n        requestAnimationFrame(() => this.start());\n    }\n    //draw canvas screen\n    drawRoot() {\n        let ctx = this.context();\n        ctx.fillStyle = this.backgroundColor;\n        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n    /**\n     * @summary\n     * Because I wasn't sure about the ball direction\n     * Uncomment comment the code on the if for free ball direction\n     */\n    updateBall() {\n        const speed = Root.speedDecrease;\n        const ball = this.ball;\n        let ctx = this.context();\n        //move ball\n        //hits the wall\n        //turns around\n        ball.px += ball.dx;\n        ball.py += ball.dy;\n        /**\n         * @formulas to hit the wall and turn around\n         */\n        if ((ball.px - ball.size < 0 && ball.dx < 0) ||\n            (ball.px + ball.size > this.canvas.width && ball.dx > 0)) {\n            ball.dx = -ball.dx + speed * ball.dx;\n            //uncomment for linear bounce\n            //ball.dy = ball.dy + speed * ball.dy * minusOne;\n        }\n        if ((ball.py - ball.size < 0 && ball.dy < 0) ||\n            (ball.py + ball.size > this.canvas.height && ball.dy > 0)) {\n            ball.dy = -ball.dy + speed * ball.dy;\n            //uncomment for linear bounce\n            /* ball.dx = ball.dx + speed * ball.dx * minusOne; */\n        }\n        this.drawRoot();\n        ctx.beginPath();\n        ctx.fillStyle = ball.color;\n        ctx.arc(ball.px, ball.py, ball.size, 0, 2 * Math.PI);\n        ctx.fill();\n        ctx.stroke();\n    }\n}\nRoot.speedDecrease = 0.1; //ten percent less speed\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Sb290LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUm9vdC50cz8wZDljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhbGwgfSBmcm9tICcuL0JhbGwnO1xuZXhwb3J0IGNsYXNzIFJvb3Qge1xuICAgIGNvbnN0cnVjdG9yKGlkKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZhZjRiNCc7XG4gICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKCk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMucmVzaXplQ2FudmFzKCksIGZhbHNlKTtcbiAgICB9XG4gICAgLy8yZCBjb250ZXh0XG4gICAgY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuICAgIC8vd2UgbmVlZCB0byBjYWxsIHRoaXMgd2hlbiBjcmVhdGluZyB0aGUgYmFsbFxuICAgIC8vb3RoZXJ3aXNlIHRoZSBzY3JlZW4gd2lkdGggYW5kIGhlaWdodCB3b250IGJlIHJlc2l6ZWQgdG8gc2NyZWVuIHNpemVcbiAgICByZXNpemVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQmFsbCgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5zdGFydCgpKTtcbiAgICB9XG4gICAgLy9kcmF3IGNhbnZhcyBzY3JlZW5cbiAgICBkcmF3Um9vdCgpIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuY29udGV4dCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHN1bW1hcnlcbiAgICAgKiBCZWNhdXNlIEkgd2Fzbid0IHN1cmUgYWJvdXQgdGhlIGJhbGwgZGlyZWN0aW9uXG4gICAgICogVW5jb21tZW50IGNvbW1lbnQgdGhlIGNvZGUgb24gdGhlIGlmIGZvciBmcmVlIGJhbGwgZGlyZWN0aW9uXG4gICAgICovXG4gICAgdXBkYXRlQmFsbCgpIHtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBSb290LnNwZWVkRGVjcmVhc2U7XG4gICAgICAgIGNvbnN0IGJhbGwgPSB0aGlzLmJhbGw7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLmNvbnRleHQoKTtcbiAgICAgICAgLy9tb3ZlIGJhbGxcbiAgICAgICAgLy9oaXRzIHRoZSB3YWxsXG4gICAgICAgIC8vdHVybnMgYXJvdW5kXG4gICAgICAgIGJhbGwucHggKz0gYmFsbC5keDtcbiAgICAgICAgYmFsbC5weSArPSBiYWxsLmR5O1xuICAgICAgICAvKipcbiAgICAgICAgICogQGZvcm11bGFzIHRvIGhpdCB0aGUgd2FsbCBhbmQgdHVybiBhcm91bmRcbiAgICAgICAgICovXG4gICAgICAgIGlmICgoYmFsbC5weCAtIGJhbGwuc2l6ZSA8IDAgJiYgYmFsbC5keCA8IDApIHx8XG4gICAgICAgICAgICAoYmFsbC5weCArIGJhbGwuc2l6ZSA+IHRoaXMuY2FudmFzLndpZHRoICYmIGJhbGwuZHggPiAwKSkge1xuICAgICAgICAgICAgYmFsbC5keCA9IC1iYWxsLmR4ICsgc3BlZWQgKiBiYWxsLmR4O1xuICAgICAgICAgICAgLy91bmNvbW1lbnQgZm9yIGxpbmVhciBib3VuY2VcbiAgICAgICAgICAgIC8vYmFsbC5keSA9IGJhbGwuZHkgKyBzcGVlZCAqIGJhbGwuZHkgKiBtaW51c09uZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGJhbGwucHkgLSBiYWxsLnNpemUgPCAwICYmIGJhbGwuZHkgPCAwKSB8fFxuICAgICAgICAgICAgKGJhbGwucHkgKyBiYWxsLnNpemUgPiB0aGlzLmNhbnZhcy5oZWlnaHQgJiYgYmFsbC5keSA+IDApKSB7XG4gICAgICAgICAgICBiYWxsLmR5ID0gLWJhbGwuZHkgKyBzcGVlZCAqIGJhbGwuZHk7XG4gICAgICAgICAgICAvL3VuY29tbWVudCBmb3IgbGluZWFyIGJvdW5jZVxuICAgICAgICAgICAgLyogYmFsbC5keCA9IGJhbGwuZHggKyBzcGVlZCAqIGJhbGwuZHggKiBtaW51c09uZTsgKi9cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdSb290KCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJhbGwuY29sb3I7XG4gICAgICAgIGN0eC5hcmMoYmFsbC5weCwgYmFsbC5weSwgYmFsbC5zaXplLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG59XG5Sb290LnNwZWVkRGVjcmVhc2UgPSAwLjE7IC8vdGVuIHBlcmNlbnQgbGVzcyBzcGVlZFxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Root.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Root */ \"./src/components/Root.ts\");\n\nlet root = new _components_Root__WEBPACK_IMPORTED_MODULE_0__[\"Root\"]('canvas');\nlet click = document.getElementById('bounce');\nclick.addEventListener(\"click\", () => {\n    root.start();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/NzFiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb290IH0gZnJvbSAnLi9jb21wb25lbnRzL1Jvb3QnO1xubGV0IHJvb3QgPSBuZXcgUm9vdCgnY2FudmFzJyk7XG5sZXQgY2xpY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm91bmNlJyk7XG5jbGljay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJvb3Quc3RhcnQoKTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/*! exports provided: minusOne, two, dotFive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"minusOne\", function() { return minusOne; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"two\", function() { return two; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dotFive\", function() { return dotFive; });\nconst minusOne = -1;\nconst two = 2;\nconst dotFive = 0.5;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY29uc3RhbnRzLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbnN0YW50cy50cz84ZjhhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1pbnVzT25lID0gLTE7XG5jb25zdCB0d28gPSAyO1xuY29uc3QgZG90Rml2ZSA9IDAuNTtcbmV4cG9ydCB7IG1pbnVzT25lLCB0d28sIGRvdEZpdmUgfTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/constants.ts\n");

/***/ })

/******/ });