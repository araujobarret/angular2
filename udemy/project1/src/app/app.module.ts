import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnotherComponent } from './another/another.component';
import { SiblingComponentComponent } from './sibling-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AnotherComponent,
    SiblingComponentComponent
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
