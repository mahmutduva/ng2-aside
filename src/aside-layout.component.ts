import {
    Component,
    ViewEncapsulation,
    AfterContentInit
} from '@angular/core';


@Component({
    selector     : 'aside-layout',
    template     : `<div class="aside-backdrop" (click)="_closeModalAside()"
                            [class.in]="showBackdrop()"></div>
                    <ng-content select="aside-menu"></ng-content>
                    <div class="aside-content" [ngStyle]="getStyles()">
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
                      .aside-backdrop{
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
                      .aside-backdrop.in{
                          opacity : .1;
                      }
                    }`],
    encapsulation: ViewEncapsulation.None
})

export class AsideLayoutComponent implements AfterContentInit{


    private getStyles():Object {
        return {
            transform: `translate3d(0px, 0px, 0px)`
        };
    }


    private showBackdrop():boolean{
       return isAsideOpen;
    }


   

}



