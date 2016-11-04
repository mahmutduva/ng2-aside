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
var common_1 = require('@angular/common');
var aside_component_1 = require('./aside.component');
var Ng2AsideModule = (function () {
    function Ng2AsideModule() {
    }
    Ng2AsideModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [aside_component_1.AsideComponent],
            exports: [aside_component_1.AsideComponent],
            entryComponents: [aside_component_1.AsideComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2AsideModule);
    return Ng2AsideModule;
}());
exports.Ng2AsideModule = Ng2AsideModule;
//# sourceMappingURL=index.js.map