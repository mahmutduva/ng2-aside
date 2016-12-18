import { AfterContentInit, QueryList, ElementRef } from '@angular/core';
import { AsideMenuComponent } from './aside-menu.component';
export declare class AsideLayoutComponent implements AfterContentInit {
    private _elementRef;
    private _asideContent;
    _asideMenus: QueryList<AsideMenuComponent>;
    constructor(_elementRef: ElementRef);
    ngAfterContentInit(): void;
    private _watchAsideToggle(aside);
    private _setLayoutClass(aside, open);
}
