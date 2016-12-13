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
var aside_menu_component_1 = require('./aside-menu.component');
var AsideLayoutComponent = (function () {
    function AsideLayoutComponent() {
    }
    AsideLayoutComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
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
    };
    AsideLayoutComponent.prototype._setLayoutClass = function (aside, bool) {
        debugger;
    };
    __decorate([
        core_1.ContentChildren(aside_menu_component_1.AsideMenuComponent), 
        __metadata('design:type', core_1.QueryList)
    ], AsideLayoutComponent.prototype, "_asideMenus", void 0);
    AsideLayoutComponent = __decorate([
        core_1.Component({
            selector: 'aside-layout',
            template: "<div class=\"aside-backdrop\" (click)=\"_closeModalAside()\"></div>\n                    <ng-content select=\"aside-menu\"></ng-content>\n                    <div class=\"aside-content\">\n                        <ng-content></ng-content>\n                    </div>",
            styles: [".aside-content{\n                        position: absolute;\n                        top: 0;\n                        right: 0;\n                        bottom: 0;\n                        left: 0;\n                        width: 100%;\n                        height: 100%;\n                        background-color: #fff;\n                        overflow: hidden;\n                        -webkit-transform: none;\n                        transform: none;\n                        z-index: 1;\n                      .aside-backdrop{\n                           position: fixed;\n                            top: 0;\n                            right: 0;\n                            bottom: 0;\n                            left: 0;\n                            z-index: 99;\n                            background: #000000;\n                            opacity: 0;\n                            -webkit-transition: opacity .15s linear;\n                            -o-transition: opacity .15s linear;\n                            transition: opacity .15s linear;\n                      }\n                      .aside-backdrop.in{\n                          opacity : .1;\n                      }\n                    }"],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [])
    ], AsideLayoutComponent);
    return AsideLayoutComponent;
}());
exports.AsideLayoutComponent = AsideLayoutComponent;
//# sourceMappingURL=aside-layout.component.js.map