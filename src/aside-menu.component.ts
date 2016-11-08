import {
    Component,
    ViewEncapsulation,
    AfterContentInit,
    Input,
    Output,
    EventEmitter
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

                `],
    encapsulation: ViewEncapsulation.None

})

export class AsideMenuComponent implements AfterContentInit {


      @Input() side: 'left' | 'right' = 'left';

      @Input() sideMode: 'over' | 'push' = 'over';

      @Input() isBackdrop: boolean;

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
    
}



