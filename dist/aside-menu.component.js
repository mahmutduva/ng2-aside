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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
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
//# sourceMappingURL=aside-menu.component.js.map