import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<ng2-aside side="left" width="240px" is-backdrop="true" push-content="true">
                    <div class="ng2-aside-menu">Menu</div>
                    <div class="ng2-aside-content">Content</div>
               </ng2-aside>`,
})

export class AppComponent {


    constructor() { }

    ngOnInit() {
    }

}