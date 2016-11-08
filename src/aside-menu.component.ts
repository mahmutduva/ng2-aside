import {
    Component,
    ViewEncapsulation,
    AfterContentInit,
    Input,
    Output,
    EventEmitter,
    HostBinding
} from '@angular/core';


@Component({
    selector: 'aside-menu',
    template: `<ng-content></ng-content>`,
    host : {
        '[style.width]' : 'width'
    },
    styles: [`        .aside-menu{
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
                      .aside-animate{
                        -webkit-transition: -webkit-transform 400ms ease;
                        transition: transform 400ms ease;
                      }
                    
                    .aside-open{
                        display: block;
                    }
            `],
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

      @HostBinding('class.aside-menu') asideMenuClass = 'aside-menu';

      @HostBinding('class.aside-left') get _asideLeft() {
           return this.side == 'left';
      }

      @HostBinding('class.aside-right') get _asideRight() {
           return this.side == 'right';
      }
    
}



