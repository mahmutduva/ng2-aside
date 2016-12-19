(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/platform-browser"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/platform-browser"], factory);
	else if(typeof exports === 'object')
		exports["ng2-aside"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/platform-browser"));
	else
		root["ng2-aside"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/platform-browser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
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

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(2);
	var aside_menu_component_1 = __webpack_require__(3);
	var aside_layout_component_1 = __webpack_require__(5);
	var AsideModule = (function () {
	    function AsideModule() {
	    }
	    AsideModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule],
	            declarations: [aside_menu_component_1.AsideMenuComponent, aside_layout_component_1.AsideLayoutComponent],
	            exports: [aside_menu_component_1.AsideMenuComponent, aside_layout_component_1.AsideLayoutComponent],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AsideModule);
	    return AsideModule;
	}());
	exports.AsideModule = AsideModule;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var platform_browser_1 = __webpack_require__(4);
	var AsideMenuComponent = (function () {
	    function AsideMenuComponent(sanitizer) {
	        this.sanitizer = sanitizer;
	        this.side = 'left';
	        this.sideMode = 'over';
	        this.isBackdrop = false;
	        this.width = '240px';
	        this.isOpened = false;
	        this.onOpen = new core_1.EventEmitter();
	        this.onClose = new core_1.EventEmitter();
	    }
	    AsideMenuComponent.prototype.open = function () {
	        return this.toggle(true);
	    };
	    AsideMenuComponent.prototype.close = function () {
	        return this.toggle(false);
	    };
	    AsideMenuComponent.prototype.toggle = function (isOpen) {
	        if (isOpen === void 0) { isOpen = !this.isOpened; }
	        if (isOpen === this.isOpened) {
	            return Promise.resolve(null);
	        }
	        this.isOpened = isOpen;
	        if (isOpen) {
	            this.onOpen.emit();
	        }
	        else {
	            this.onClose.emit();
	        }
	    };
	    Object.defineProperty(AsideMenuComponent.prototype, "_asideMenu", {
	        get: function () {
	            return 'aside-menu';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AsideMenuComponent.prototype, "_isAsideClosed", {
	        get: function () {
	            return !this.isOpened;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AsideMenuComponent.prototype, "_isAsideOpened", {
	        get: function () {
	            return this.isOpened;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AsideMenuComponent.prototype, "_asideLeft", {
	        get: function () {
	            return this.side == 'left';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AsideMenuComponent.prototype, "_asideRight", {
	        get: function () {
	            return this.side == 'right';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AsideMenuComponent.prototype, "_asideModeOver", {
	        get: function () {
	            return this.sideMode == 'over';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AsideMenuComponent.prototype, "_asideModePush", {
	        get: function () {
	            return this.sideMode == 'push';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AsideMenuComponent.prototype, "_asideLeftPosition", {
	        get: function () {
	            if (this.sideMode == 'over' && this.side == 'left') {
	                return '-' + this.width;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AsideMenuComponent.prototype, "_asideRightPosition", {
	        get: function () {
	            if (this.sideMode == 'over' && this.side == 'right') {
	                return '-' + this.width;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AsideMenuComponent.prototype, "_asideOpened", {
	        get: function () {
	            if (this.isOpened) {
	                if (this.sideMode == 'over' && this.side == 'left') {
	                    return this.sanitizer.bypassSecurityTrustStyle('translate3d( 100%, 0, 0)');
	                }
	                else if (this.sideMode == 'over' && this.side == 'right') {
	                    return this.sanitizer.bypassSecurityTrustStyle('translate3d(' + '-' + this.width + ', 0, 0)');
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], AsideMenuComponent.prototype, "side", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], AsideMenuComponent.prototype, "sideMode", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], AsideMenuComponent.prototype, "isBackdrop", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], AsideMenuComponent.prototype, "width", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], AsideMenuComponent.prototype, "onOpen", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], AsideMenuComponent.prototype, "onClose", void 0);
	    AsideMenuComponent = __decorate([
	        core_1.Component({
	            selector: 'aside-menu',
	            template: "<ng-content></ng-content>",
	            host: {
	                '[style.width]': 'width',
	                '[style.left]': '_asideLeftPosition',
	                '[style.right]': '_asideRightPosition',
	                '[style.transform]': '_asideOpened',
	                '[class.aside-menu]': '_asideMenu',
	                '[class.aside-menu-animate]': '_asideMenu',
	                '[class.aside-closed]': '_asideClosed',
	                '[class.aside-push]': '_asideModePush',
	                '[class.aside-over]': '_asideModeOver',
	                '[class.aside-left]': '_asideLeft',
	                '[class.aside-right]': '_asideRight'
	            },
	            styles: [".aside-menu{\n                        background-color: #28374f;\n                        position: absolute;\n                        top: 0;\n                        bottom: 0;\n                        z-index: 0;\n                        overflow: hidden;\n                        min-height: 100%;\n                        max-height: 100%;\n                        display: block;\n                       }\n\n                      .aside-left{\n                        left: 0;\n                      }\n                      .aside-right{\n                        right: 0;\n                      }\n                      .aside-menu-animate{\n                        -webkit-transition: -webkit-transform 400ms ease;\n                        transition: transform 400ms ease;\n                      }\n                    \n                    .aside-over{\n                        z-index : 99;\n                    }"],
	            encapsulation: core_1.ViewEncapsulation.None,
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
	    ], AsideMenuComponent);
	    return AsideMenuComponent;
	}());
	exports.AsideMenuComponent = AsideMenuComponent;


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var aside_menu_component_1 = __webpack_require__(3);
	var AsideLayoutComponent = (function () {
	    function AsideLayoutComponent(_elementRef) {
	        this._elementRef = _elementRef;
	    }
	    AsideLayoutComponent.prototype.ngAfterContentInit = function () {
	        var _this = this;
	        this._asideContent = this._elementRef.nativeElement.querySelector('.aside-content');
	        this._asideMenus.forEach(function (aside) {
	            _this._watchAsideToggle(aside);
	        });
	    };
	    AsideLayoutComponent.prototype._watchAsideToggle = function (aside) {
	        var _this = this;
	        if (!aside) {
	            return;
	        }
	        aside.onOpen.subscribe(function () { return _this._setLayoutClass(aside, true); });
	        aside.onClose.subscribe(function () { return _this._setLayoutClass(aside, false); });
	    };
	    AsideLayoutComponent.prototype._setLayoutClass = function (aside, open) {
	        if (open && aside.sideMode == 'push') {
	            if (aside.side == 'left') {
	                this._asideContent.style.transform = 'translate3d(' + aside.width + ', 0, 0)';
	            }
	            else if (aside.side == 'right') {
	                this._asideContent.style.transform = 'translate3d(' + '-' + aside.width + ', 0, 0)';
	            }
	        }
	        else {
	            this._asideContent.style.transform = 'translate3d(0, 0, 0)';
	        }
	    };
	    __decorate([
	        core_1.ContentChildren(aside_menu_component_1.AsideMenuComponent), 
	        __metadata('design:type', core_1.QueryList)
	    ], AsideLayoutComponent.prototype, "_asideMenus", void 0);
	    AsideLayoutComponent = __decorate([
	        core_1.Component({
	            selector: 'aside-layout',
	            template: "<div class=\"aside-backdrop\" (click)=\"_closeModalAside()\"></div>\n                    <ng-content select=\"aside-menu\"></ng-content>\n                    <div class=\"aside-content\">\n                        <ng-content></ng-content>\n                    </div>",
	            styles: [".aside-content{\n                        position: absolute;\n                        top: 0;\n                        right: 0;\n                        bottom: 0;\n                        left: 0;\n                        width: 100%;\n                        height: 100%;\n                        background-color: #fff;\n                        overflow: hidden;\n                        -webkit-transform: none;\n                        transform: none;\n                        z-index: 1;\n                        -webkit-transition: -webkit-transform 400ms ease;\n                        transition: transform 400ms ease;\n                      .aside-backdrop{\n                           position: fixed;\n                            top: 0;\n                            right: 0;\n                            bottom: 0;\n                            left: 0;\n                            z-index: 99;\n                            background: #000000;\n                            opacity: 0;\n                            -webkit-transition: opacity .15s linear;\n                            -o-transition: opacity .15s linear;\n                            transition: opacity .15s linear;\n                      }\n                      .aside-backdrop.in{\n                          opacity : .1;\n                      }\n                    }"],
	            encapsulation: core_1.ViewEncapsulation.None,
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], AsideLayoutComponent);
	    return AsideLayoutComponent;
	}());
	exports.AsideLayoutComponent = AsideLayoutComponent;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-aside.umd.js.map