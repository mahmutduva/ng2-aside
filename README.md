#ng2-aside
Imagine an aside menu that pushes your page or comes over it and so on.

### NPM

```
$ npm install ng2-aside

```

## Simple Example

```TypeScript
// main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AsideModule}     from 'ng2-aside';
import { AppComponent }   from './app.component';


@NgModule({
    imports: [BrowserModule, AsideModule],
    declarations: [AppComponent],
    bootstrap: [ AppComponent ],
    providers: []
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
```

```TypeScript
// app.component.ts
import {Component} from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
})

export class AppComponent {


}

```


```Html
<aside-layout>
                    <aside-menu #left1 side="left" width="240px" isBackdrop="true" sideMode="over">
                        <ul>
                            <li>Homepage</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </aside-menu>
                    <aside-menu #left2 side="left" width="240px" isBackdrop="true" sideMode="push">
                        <ul>
                            <li>Homepage</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </aside-menu>
                    <aside-menu #right1 side="right" width="320px" isBackdrop="true" sideMode="over">
                        <ul>
                            <li>Homepage</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </aside-menu>
                    <aside-menu #right2 side="right" width="320px" isBackdrop="true" sideMode="push">
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
                            <div style="margin:auto; display:table">
                                <button type="button" (click)="left1.toggle()">Toggle Left Over Aside</button>
                                <button type="button" (click)="right1.toggle()">Toggle Right Over Aside</button>
                            </div>
                            <div style="margin:auto; display:table">
                                <button type="button" (click)="left2.toggle()">Toggle Left Push Aside</button>
                                <button type="button" (click)="right2.toggle()">Toggle Right Push Aside</button>
                            </div>
                        </div>
                    </div>
                </aside-layout>
```


### Configuration

| Parameter        | Default                        |         |
| :-------------   |:-------------------------------| :-----  |
| side             | left                           |         |
| width            | 240px                          |         |
| isBackdrop       | false                          |         |
| sideMode         | over                           |         |



## License

Licensed under the MIT license