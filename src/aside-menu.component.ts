import {
    Component,
    ViewEncapsulation,
    AfterContentInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'aside-menu',
    template: `<ng-content></ng-content>`,
    host : {
        '[style.width]' : 'width',
        '[style.left]' : '_asideLeftPosition',
        '[style.right]' : '_asideRightPosition',
        '[style.transform]' : '_asideOpened',
        '[class.aside-menu]' : '_asideMenu',
        '[class.aside-menu-animate]' : '_asideMenu',
        '[class.aside-closed]' : '_asideClosed',
        '[class.aside-push]' : '_asideModePush',
        '[class.aside-over]' : '_asideModeOver',
        '[class.aside-left]' : '_asideLeft',
        '[class.aside-right]' : '_asideRight'
    },
    styles: [`.aside-menu{
                        background-color: #28374f;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        z-index: 0;
                        overflow: hidden;
                        min-height: 100%;
                        max-height: 100%;
                        display: block;
                       }

                      .aside-left{
                        left: 0;
                      }
                      .aside-right{
                        right: 0;
                      }
                      .aside-menu-animate{
                        -webkit-transition: -webkit-transform 400ms ease;
                        transition: transform 400ms ease;
                      }
                    
                    .aside-over{
                        z-index : 99;
                    }`],
    encapsulation: ViewEncapsulation.None

})

export class AsideMenuComponent implements AfterContentInit {


      @Input() side: 'left' | 'right' = 'left';

      @Input() sideMode: 'over' | 'push' = 'over';

      @Input() isBackdrop: boolean = false;

      @Input() width:string  =  '240px'

      isOpened : boolean = false;



      @Output('open') onOpen = new EventEmitter<void>();
      
      @Output('close') onClose = new EventEmitter<void>();


      open(): Promise<void> {
          return this.toggle(true);
      }

      close(): Promise<void>{
          return this.toggle(false);
      }

      toggle(isOpen:boolean = !this.isOpened): Promise<void>{
          if(isOpen === this.isOpened){
            return Promise.resolve(null);
          }
          this.isOpened = isOpen;
      }

      constructor(private sanitizer: DomSanitizer) {}


      get _asideMenu (){
          return 'aside-menu';
      }

      get _isAsideClosed() {
          return !this.isOpened;
      }

      get _isAsideOpened() {
          return this.isOpened;
      }



      get _asideLeft() {
           return this.side == 'left';
      }

      get _asideRight() {
           return this.side == 'right';
      }

      get _asideModeOver() {
            return this.sideMode == 'over';
      }

      get _asideModePush() {
            return this.sideMode == 'push';
      }

      get _asideLeftPosition(){
          if(this.sideMode == 'over' && this.side == 'left'){
              return '-' + this.width
          }
      }

      get _asideRightPosition(){
          if(this.sideMode == 'over' && this.side == 'right'){
              return '-' + this.width
          }
      }

      get _asideOpened() {
          if(this.isOpened){
              if(this.sideMode == 'over' && this.side == 'left'){
                  return this.sanitizer.bypassSecurityTrustStyle('translate3d( 100%, 0, 0)');
              }
              else if(this.sideMode == 'over' && this.side == 'right'){
                  return this.sanitizer.bypassSecurityTrustStyle('translate3d('+ '-' + this.width +', 0, 0)');
              }
          }

      }
    
}



