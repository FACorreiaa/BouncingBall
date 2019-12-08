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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ball\", function() { return Ball; });\n/**\n *\n * Properties of the Ball object\n * @param x - random starting x\n * @param y - random starting y\n * @param a - accelaration\n * @param t - time\n * @param px - formula of x position over time\n * @param py - formula of y position over time\n * @param dx - formula of speed x over time\n * @param dy - formula of speed y over time\n * @param size - random circle size\n * @param color - random circle color\n * @param speed - ball speed\n */\nclass Ball {\n    constructor(x = 0, y = 0, dx = 0, dy = 0, px = 0, py = 0, size = 0, color = '', speed = 0) {\n        this.x = x;\n        this.y = y;\n        this.dx = dx;\n        this.dy = dy;\n        this.px = px;\n        this.py = py;\n        this.size = size;\n        this.color = color;\n        this.speed = speed;\n        this.x = this.startingX();\n        this.y = this.startingY();\n        this.dx = this.directionX();\n        this.dy = this.directionY();\n        this.px = this.positionX();\n        this.py = this.positionY();\n        this.speed = this.getSpeed(Ball.t);\n        this.size = this.ballSize();\n        this.color = this.ballColor();\n    }\n    startingX() {\n        return (Math.floor(Math.random() * Ball.randomMaxNumber) + Ball.randomMinNumber);\n    }\n    startingY() {\n        return (Math.floor(Math.random() * Ball.randomMaxNumber) + Ball.randomMinNumber);\n    }\n    /**\n     *\n     * @param t\n     * @returns speed between 75 and t\n     */\n    getSpeed(t) {\n        return Math.floor(Math.random() * 76 + 25) / Ball.t;\n    }\n    directionX() {\n        return Math.floor(Math.random() * 2) == 0\n            ? this.getStartingX() * -1\n            : this.getStartingX();\n    }\n    directionY() {\n        return Math.floor(Math.random() * 2) == 0\n            ? -this.getStartingY() * -1\n            : this.getStartingY();\n    }\n    ballSize() {\n        return Math.random() * (101 - 50) + 50;\n    }\n    ballColor() {\n        return ('#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6));\n    }\n    positionX() {\n        return this.x + this.dx * Ball.t;\n    }\n    positionY() {\n        return this.y + this.dy + Ball.t - 0.5 * Ball.acel * Ball.t * 2;\n    }\n    getStartingX() {\n        return 2;\n    }\n    getStartingY() {\n        return 2 * -1 * Ball.t;\n    }\n}\nBall.acel = 2; //aceleration\nBall.t = 10; //time\nBall.randomMaxNumber = 1500;\nBall.randomMinNumber = 1;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CYWxsLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmFsbC50cz9jMzM4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFByb3BlcnRpZXMgb2YgdGhlIEJhbGwgb2JqZWN0XG4gKiBAcGFyYW0geCAtIHJhbmRvbSBzdGFydGluZyB4XG4gKiBAcGFyYW0geSAtIHJhbmRvbSBzdGFydGluZyB5XG4gKiBAcGFyYW0gYSAtIGFjY2VsYXJhdGlvblxuICogQHBhcmFtIHQgLSB0aW1lXG4gKiBAcGFyYW0gcHggLSBmb3JtdWxhIG9mIHggcG9zaXRpb24gb3ZlciB0aW1lXG4gKiBAcGFyYW0gcHkgLSBmb3JtdWxhIG9mIHkgcG9zaXRpb24gb3ZlciB0aW1lXG4gKiBAcGFyYW0gZHggLSBmb3JtdWxhIG9mIHNwZWVkIHggb3ZlciB0aW1lXG4gKiBAcGFyYW0gZHkgLSBmb3JtdWxhIG9mIHNwZWVkIHkgb3ZlciB0aW1lXG4gKiBAcGFyYW0gc2l6ZSAtIHJhbmRvbSBjaXJjbGUgc2l6ZVxuICogQHBhcmFtIGNvbG9yIC0gcmFuZG9tIGNpcmNsZSBjb2xvclxuICogQHBhcmFtIHNwZWVkIC0gYmFsbCBzcGVlZFxuICovXG5leHBvcnQgY2xhc3MgQmFsbCB7XG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCBkeCA9IDAsIGR5ID0gMCwgcHggPSAwLCBweSA9IDAsIHNpemUgPSAwLCBjb2xvciA9ICcnLCBzcGVlZCA9IDApIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5keCA9IGR4O1xuICAgICAgICB0aGlzLmR5ID0gZHk7XG4gICAgICAgIHRoaXMucHggPSBweDtcbiAgICAgICAgdGhpcy5weSA9IHB5O1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5zdGFydGluZ1goKTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5zdGFydGluZ1koKTtcbiAgICAgICAgdGhpcy5keCA9IHRoaXMuZGlyZWN0aW9uWCgpO1xuICAgICAgICB0aGlzLmR5ID0gdGhpcy5kaXJlY3Rpb25ZKCk7XG4gICAgICAgIHRoaXMucHggPSB0aGlzLnBvc2l0aW9uWCgpO1xuICAgICAgICB0aGlzLnB5ID0gdGhpcy5wb3NpdGlvblkoKTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuZ2V0U3BlZWQoQmFsbC50KTtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5iYWxsU2l6ZSgpO1xuICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5iYWxsQ29sb3IoKTtcbiAgICB9XG4gICAgc3RhcnRpbmdYKCkge1xuICAgICAgICByZXR1cm4gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEJhbGwucmFuZG9tTWF4TnVtYmVyKSArIEJhbGwucmFuZG9tTWluTnVtYmVyKTtcbiAgICB9XG4gICAgc3RhcnRpbmdZKCkge1xuICAgICAgICByZXR1cm4gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEJhbGwucmFuZG9tTWF4TnVtYmVyKSArIEJhbGwucmFuZG9tTWluTnVtYmVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdFxuICAgICAqIEByZXR1cm5zIHNwZWVkIGJldHdlZW4gNzUgYW5kIHRcbiAgICAgKi9cbiAgICBnZXRTcGVlZCh0KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3NiArIDI1KSAvIEJhbGwudDtcbiAgICB9XG4gICAgZGlyZWN0aW9uWCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09IDBcbiAgICAgICAgICAgID8gdGhpcy5nZXRTdGFydGluZ1goKSAqIC0xXG4gICAgICAgICAgICA6IHRoaXMuZ2V0U3RhcnRpbmdYKCk7XG4gICAgfVxuICAgIGRpcmVjdGlvblkoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA9PSAwXG4gICAgICAgICAgICA/IC10aGlzLmdldFN0YXJ0aW5nWSgpICogLTFcbiAgICAgICAgICAgIDogdGhpcy5nZXRTdGFydGluZ1koKTtcbiAgICB9XG4gICAgYmFsbFNpemUoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKDEwMSAtIDUwKSArIDUwO1xuICAgIH1cbiAgICBiYWxsQ29sb3IoKSB7XG4gICAgICAgIHJldHVybiAoJyMnICsgKDB4MTAwMDAwMCArIE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZikudG9TdHJpbmcoMTYpLnN1YnN0cigxLCA2KSk7XG4gICAgfVxuICAgIHBvc2l0aW9uWCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCArIHRoaXMuZHggKiBCYWxsLnQ7XG4gICAgfVxuICAgIHBvc2l0aW9uWSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueSArIHRoaXMuZHkgKyBCYWxsLnQgLSAwLjUgKiBCYWxsLmFjZWwgKiBCYWxsLnQgKiAyO1xuICAgIH1cbiAgICBnZXRTdGFydGluZ1goKSB7XG4gICAgICAgIHJldHVybiAyO1xuICAgIH1cbiAgICBnZXRTdGFydGluZ1koKSB7XG4gICAgICAgIHJldHVybiAyICogLTEgKiBCYWxsLnQ7XG4gICAgfVxufVxuQmFsbC5hY2VsID0gMjsgLy9hY2VsZXJhdGlvblxuQmFsbC50ID0gMTA7IC8vdGltZVxuQmFsbC5yYW5kb21NYXhOdW1iZXIgPSAxNTAwO1xuQmFsbC5yYW5kb21NaW5OdW1iZXIgPSAxO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Ball.ts\n");

/***/ }),

/***/ "./src/components/Root.ts":
/*!********************************!*\
  !*** ./src/components/Root.ts ***!
  \********************************/
/*! exports provided: Root */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Root\", function() { return Root; });\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ \"./src/components/Ball.ts\");\n\nclass Root {\n    constructor(id) {\n        this.id = id;\n        this.backgroundColor = '#faf4b4';\n        this.ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"]();\n        this.canvas = document.getElementById(id);\n        this.canvas.width = window.innerWidth;\n        this.canvas.height = window.innerHeight;\n        window.addEventListener('resize', () => this.resizeCanvas(), false);\n    }\n    //2d context\n    context() {\n        return this.canvas.getContext('2d');\n    }\n    //we need to call this when creating the ball\n    //otherwise the screen width and height wont be resized to screen size\n    resizeCanvas() {\n        this.canvas.width = window.innerWidth;\n        this.canvas.height = window.innerHeight;\n    }\n    start() {\n        this.updateBall();\n        requestAnimationFrame(() => this.start());\n    }\n    //draw canvas screen\n    drawRoot() {\n        let ctx = this.context();\n        ctx.fillStyle = this.backgroundColor;\n        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n    /**\n     * @summary There are two lines of code comment\n     * Because I wasn't sure about the ball direction\n     * If you want the ball to run as it is, its correct\n     * If you want the ball in a single line\n     * Uncomment the code inside the if statement\n     */\n    updateBall() {\n        const speed = Root.speedDecrease;\n        const ball = this.ball;\n        let ctx = this.context();\n        //move ball\n        //hits the wall\n        //turns around\n        ball.px += ball.dx;\n        ball.py += ball.dy;\n        /**\n         * @formulas to hit the wall and turn around\n         */\n        if ((ball.px - ball.size < 0 && ball.dx < 0) ||\n            (ball.px + ball.size > this.canvas.width && ball.dx > 0)) {\n            ball.dx = -ball.dx + speed * ball.dx;\n            //ball.dy = -ball.dy + (speed * ball.dy); //if you want the ball to bounce in a single position\n        }\n        if ((ball.py - ball.size < 0 && ball.dy < 0) ||\n            (ball.py + ball.size > this.canvas.height && ball.dy > 0)) {\n            ball.dy = -ball.dy + speed * ball.dy;\n            //ball.dx = -ball.dx + (speed * ball.dx); //if you want the ball to bounce in a single position\n        }\n        this.drawRoot();\n        ctx.beginPath();\n        ctx.fillStyle = ball.color;\n        ctx.arc(ball.px, ball.py, ball.size, 0, 2 * Math.PI);\n        ctx.fill();\n        ctx.stroke();\n    }\n}\nRoot.speedDecrease = 0.1; //ten percent less speed\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Sb290LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUm9vdC50cz8wZDljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhbGwgfSBmcm9tICcuL0JhbGwnO1xuZXhwb3J0IGNsYXNzIFJvb3Qge1xuICAgIGNvbnN0cnVjdG9yKGlkKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZhZjRiNCc7XG4gICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKCk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB0aGlzLnJlc2l6ZUNhbnZhcygpLCBmYWxzZSk7XG4gICAgfVxuICAgIC8vMmQgY29udGV4dFxuICAgIGNvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cbiAgICAvL3dlIG5lZWQgdG8gY2FsbCB0aGlzIHdoZW4gY3JlYXRpbmcgdGhlIGJhbGxcbiAgICAvL290aGVyd2lzZSB0aGUgc2NyZWVuIHdpZHRoIGFuZCBoZWlnaHQgd29udCBiZSByZXNpemVkIHRvIHNjcmVlbiBzaXplXG4gICAgcmVzaXplQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUJhbGwoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuc3RhcnQoKSk7XG4gICAgfVxuICAgIC8vZHJhdyBjYW52YXMgc2NyZWVuXG4gICAgZHJhd1Jvb3QoKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLmNvbnRleHQoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBzdW1tYXJ5IFRoZXJlIGFyZSB0d28gbGluZXMgb2YgY29kZSBjb21tZW50XG4gICAgICogQmVjYXVzZSBJIHdhc24ndCBzdXJlIGFib3V0IHRoZSBiYWxsIGRpcmVjdGlvblxuICAgICAqIElmIHlvdSB3YW50IHRoZSBiYWxsIHRvIHJ1biBhcyBpdCBpcywgaXRzIGNvcnJlY3RcbiAgICAgKiBJZiB5b3Ugd2FudCB0aGUgYmFsbCBpbiBhIHNpbmdsZSBsaW5lXG4gICAgICogVW5jb21tZW50IHRoZSBjb2RlIGluc2lkZSB0aGUgaWYgc3RhdGVtZW50XG4gICAgICovXG4gICAgdXBkYXRlQmFsbCgpIHtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBSb290LnNwZWVkRGVjcmVhc2U7XG4gICAgICAgIGNvbnN0IGJhbGwgPSB0aGlzLmJhbGw7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLmNvbnRleHQoKTtcbiAgICAgICAgLy9tb3ZlIGJhbGxcbiAgICAgICAgLy9oaXRzIHRoZSB3YWxsXG4gICAgICAgIC8vdHVybnMgYXJvdW5kXG4gICAgICAgIGJhbGwucHggKz0gYmFsbC5keDtcbiAgICAgICAgYmFsbC5weSArPSBiYWxsLmR5O1xuICAgICAgICAvKipcbiAgICAgICAgICogQGZvcm11bGFzIHRvIGhpdCB0aGUgd2FsbCBhbmQgdHVybiBhcm91bmRcbiAgICAgICAgICovXG4gICAgICAgIGlmICgoYmFsbC5weCAtIGJhbGwuc2l6ZSA8IDAgJiYgYmFsbC5keCA8IDApIHx8XG4gICAgICAgICAgICAoYmFsbC5weCArIGJhbGwuc2l6ZSA+IHRoaXMuY2FudmFzLndpZHRoICYmIGJhbGwuZHggPiAwKSkge1xuICAgICAgICAgICAgYmFsbC5keCA9IC1iYWxsLmR4ICsgc3BlZWQgKiBiYWxsLmR4O1xuICAgICAgICAgICAgLy9iYWxsLmR5ID0gLWJhbGwuZHkgKyAoc3BlZWQgKiBiYWxsLmR5KTsgLy9pZiB5b3Ugd2FudCB0aGUgYmFsbCB0byBib3VuY2UgaW4gYSBzaW5nbGUgcG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgICBpZiAoKGJhbGwucHkgLSBiYWxsLnNpemUgPCAwICYmIGJhbGwuZHkgPCAwKSB8fFxuICAgICAgICAgICAgKGJhbGwucHkgKyBiYWxsLnNpemUgPiB0aGlzLmNhbnZhcy5oZWlnaHQgJiYgYmFsbC5keSA+IDApKSB7XG4gICAgICAgICAgICBiYWxsLmR5ID0gLWJhbGwuZHkgKyBzcGVlZCAqIGJhbGwuZHk7XG4gICAgICAgICAgICAvL2JhbGwuZHggPSAtYmFsbC5keCArIChzcGVlZCAqIGJhbGwuZHgpOyAvL2lmIHlvdSB3YW50IHRoZSBiYWxsIHRvIGJvdW5jZSBpbiBhIHNpbmdsZSBwb3NpdGlvblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhd1Jvb3QoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYmFsbC5jb2xvcjtcbiAgICAgICAgY3R4LmFyYyhiYWxsLnB4LCBiYWxsLnB5LCBiYWxsLnNpemUsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbn1cblJvb3Quc3BlZWREZWNyZWFzZSA9IDAuMTsgLy90ZW4gcGVyY2VudCBsZXNzIHNwZWVkXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Root.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Root */ \"./src/components/Root.ts\");\n\nlet root = new _components_Root__WEBPACK_IMPORTED_MODULE_0__[\"Root\"]('canvas');\nlet click = document.getElementById('bounce');\nclick.addEventListener(\"click\", () => {\n    root.start();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/NzFiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb290IH0gZnJvbSAnLi9jb21wb25lbnRzL1Jvb3QnO1xubGV0IHJvb3QgPSBuZXcgUm9vdCgnY2FudmFzJyk7XG5sZXQgY2xpY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm91bmNlJyk7XG5jbGljay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJvb3Quc3RhcnQoKTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ });