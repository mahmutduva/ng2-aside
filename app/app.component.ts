import {Component} from '@angular/core';


@Component({
    selector: 'my-app',
    template: `

                
                <aside-layout>
                    <aside-menu #left1 side="left" width="240px" is-backdrop="true" side-mode="over">
                        <ul>
                            <li>Homepage</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </aside-menu>
                    <aside-menu #right1 side="right" width="320px" is-backdrop="true" side-mode="push">
                        <ul>
                            <li>Homepage</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </aside-menu>
                    <div class="aside-content">
                        <div class="wrapper">
                            <h1>Title</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat ligula magna, sit amet fringilla tellus tempus ac. Aliquam a velit non nisl semper laoreet vitae nec neque. Suspendisse potenti. Phasellus ut lacus eget sem consequat dictum et ac urna. Donec consectetur massa id augue interdum semper. Fusce ac justo neque. Nunc nec nulla velit. Fusce et neque mattis, mattis neque eu, vestibulum dui.</p>

                            <p>Proin pellentesque risus id ligula rhoncus, in convallis turpis auctor. Praesent laoreet mi augue, id ornare ante cursus sed. Nulla suscipit ligula eget tempus viverra. Praesent vitae convallis erat. Sed eu arcu tortor. Pellentesque cursus quam metus, vitae rhoncus turpis placerat sit amet. Nullam eu lacinia metus. In semper lectus id turpis lobortis elementum. Aenean consectetur magna vel hendrerit condimentum. Aenean porta ut eros vel laoreet.</p>
                            <p>Pellentesque imperdiet pharetra consequat. Donec et neque at turpis tincidunt mattis. Sed posuere, quam vel scelerisque porta, lorem dui molestie libero, ac pretium turpis massa non ligula. Curabitur elit magna, semper vel luctus id, ullamcorper et ex. Vivamus gravida blandit nisl in mollis. Duis tempor a lacus elementum consequat. Donec sagittis libero ac dapibus luctus. Pellentesque ut varius lacus. Phasellus tristique dapibus risus quis facilisis. Sed at dapibus turpis. Duis hendrerit augue eget velit ultrices commodo. Integer ut felis vel nunc vulputate lacinia. Cras felis lorem, eleifend sit amet purus ut, feugiat luctus nibh. Proin ullamcorper auctor congue. Vivamus finibus nisl sit amet ligula sagittis efficitur.</p>
                            <button type="button" (click)="left1.open()">sToggle Left Aside</button>
                            <button type="button" (click)="right1.open()">Open Right Aside</button>
                        </div>
                    </div>
                </aside-layout>
                `,
})

export class AppComponent {


}