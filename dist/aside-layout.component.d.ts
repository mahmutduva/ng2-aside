import { AfterContentInit, QueryList } from '@angular/core';
import { AsideMenuComponent } from './aside-menu.component';
export declare class AsideLayoutComponent implements AfterContentInit {
    _asideMenus: QueryList<AsideMenuComponent>;
    ngAfterContentInit(): void;
    private _watchAsideToggle(aside);
    private _setLayoutClass(aside, bool);
}
