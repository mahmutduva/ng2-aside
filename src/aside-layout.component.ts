import {
    Component,
    ViewEncapsulation
} from '@angular/core';


@Component({
    selector     : 'aside-layout',
    template     : `<div class="aside-backdrop" (click)="_closeModalAside()"
                            [class.aside-shown]="_isShowingBackdrop()"></div>
                    <ng-content select="aside-menu"></ng-content>
                    <div class="aside-content" [ngStyle]="_getStyles()">
                        <ng-content></ng-content>
                    </div>`,
    styles       : [`.aside-content{
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: #fff;
                        overflow: hidden;
                        -webkit-transform: none;
                        transform: none;
                        z-index: 1;
                    }`],
    encapsulation: ViewEncapsulation.None
})

export class AsideLayoutComponent {

}



