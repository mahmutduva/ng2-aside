import {
    Component,
    ViewEncapsulation
} from '@angular/core';


@Component({
    selector: 'aside-menu',
    template: `<ng-content></ng-content>`,
    styles: [`
                    .ng2-aside-menu{
                        background-color: #28374f;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        z-index: 0;
                        overflow: hidden;
                        min-height: 100%;
                        max-height: 100%;
                        width: 275px;
                        display: block;
                    }
                    
                    .ng2-aside-open{
                        display: block;
                    }

                    .ng2-aside-animate{
                        -webkit-transition: -webkit-transform 400ms ease;
                        transition: transform 400ms ease;
                    }

                    .ng2-aside-back-drop{
                        position: fixed;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        z-index: 99;
                        background: #000000;
                        opacity: 0;
                        -webkit-transition: opacity .15s linear;
                        -o-transition: opacity .15s linear;
                        transition: opacity .15s linear;
                    }
                    
                    .ng2-aside-back-drop.in{
                        opacity: .1;
                    }`],
    encapsulation: ViewEncapsulation.None

})

export class AsideMenuComponent {

}



