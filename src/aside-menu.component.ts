import {
    Component,
    ViewEncapsulation,
    AfterContentInit
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

      @Input() pushContent: boolean;

      @Input() isBackdrop: boolean;

      @Input() width:string  =  '240px'



      @Output('open') onOpen = new EventEmitter<void>();
      
      @Output('close') onClose = new EventEmitter<void>();


      constructor(private _elementRef: ElementRef) {

      }
    
}



