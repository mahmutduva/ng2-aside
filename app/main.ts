// The browser platform with a compiler
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

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);