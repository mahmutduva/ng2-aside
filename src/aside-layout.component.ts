import { Component, 
         ContentChildren, 
         ViewEncapsulation, 
         AfterContentInit, 
         QueryList, 
         ElementRef } from '@angular/core';

import {AsideMenuComponent} from './aside-menu.component';



@Component({
    selector     : 'aside-layout',
    template     : `<div class="aside-backdrop" (click)="_closeModalAside()"></div>
                    <ng-content select="aside-menu"></ng-content>
                    <div class="aside-content">
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
                        -webkit-transition: -webkit-transform 400ms ease;
                        transition: transform 400ms ease;
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
    encapsulation: ViewEncapsulation.None,                
 })

export class AsideLayoutComponent implements AfterContentInit {

    private _asideContent: any;

    @ContentChildren(AsideMenuComponent) _asideMenus: QueryList<AsideMenuComponent>;

    constructor(private _elementRef: ElementRef) {
    }

    ngAfterContentInit() {
        this._asideContent = this._elementRef.nativeElement.querySelector('.aside-content');
        this._asideMenus.forEach((aside: AsideMenuComponent) => {
            this._watchAsideToggle(aside);
        });
    }

    private _watchAsideToggle(aside){
       if (!aside) { return; }
       aside.onOpen.subscribe(()  => this._setLayoutClass(aside, true));
       aside.onClose.subscribe(() => this._setLayoutClass(aside, false));

    }

    private _setLayoutClass(aside: AsideMenuComponent, open: boolean): void {
        if(open && aside.sideMode == 'push'){
          if(aside.side == 'left'){
             this._asideContent.style.transform = 'translate3d(' + aside.width + ', 0, 0)';
          }
          else if(aside.side == 'right'){
             this._asideContent.style.transform = 'translate3d('+ '-' + aside.width +', 0, 0)';
          }
        }
        else{
          this._asideContent.style.transform = 'translate3d(0, 0, 0)';
        }
    }


}



