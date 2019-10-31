import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { ConcatMapDemoComponent } from './components/concat-map-demo/concat-map-demo.component';
import { OffDemoComponent } from './components/off-demo/off-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoPipeComponent,
    ConcatMapDemoComponent,
    OffDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
