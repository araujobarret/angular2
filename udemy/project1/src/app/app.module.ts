import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatabidingComponent } from './databiding/databiding.component';
import { PropertyBindingComponent } from './databiding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabidingComponent,
    PropertyBindingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
