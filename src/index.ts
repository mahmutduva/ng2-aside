import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';

import { AsideMenuComponent} from './aside-menu.component';
import { AsideLayoutComponent } from './aside-layout.component';


@NgModule({
    imports: [ CommonModule ],
    declarations: [AsideMenuComponent, AsideLayoutComponent],
    exports:  [AsideMenuComponent, AsideLayoutComponent],
})
export class AsideModule {}