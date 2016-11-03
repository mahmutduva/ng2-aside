import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';

import { AsideComponent } from './aside.component';

export {
    AsideComponent,
};

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [AsideComponent],
    exports:  [AsideComponent],
    entryComponents: [AsideComponent],
    providers: [ Aside ]
})
export class Ng2AsideModule {}