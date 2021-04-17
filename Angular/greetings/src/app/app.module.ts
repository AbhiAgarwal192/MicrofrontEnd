import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents:[HelloWorldComponent],
  bootstrap: []
})
export class AppModule { 
  constructor(private injector: Injector){
  }

  ngDoBootstrap() {
    const myCustomElement = createCustomElement(HelloWorldComponent, { injector: this.injector });
    customElements.define('app-hello-world', myCustomElement);
  }
}
