import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';

import { AsideLayoutComponent } from './aside-layout.component';
import { AsideMenuComponent} from './aside-menu.component';


@NgModule({
    imports: [ CommonModule ],
    declarations: [AsideLayoutComponent, AsideMenuComponent],
    exports:  [AsideLayoutComponent, AsideMenuComponent],
})
export class AsideModule {}