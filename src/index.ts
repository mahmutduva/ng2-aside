import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';

import { AsideComponent } from './aside.component';
import { AsideDirective} from './aside.directive';

export {
    AsideComponent,
    AsideDirective
}

@NgModule({
    imports: [ CommonModule ],
    declarations: [AsideComponent, AsideDirective],
    exports:  [AsideComponent, AsideDirective],
    entryComponents: [AsideComponent]
})
export class Ng2AsideModule {}