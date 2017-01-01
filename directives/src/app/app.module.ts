import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap'

import { AppComponent } from './app.component';
import { DirectiveNgifComponent } from './directive-ngif/directive-ngif.component';
import { DirectiveNgswitchComponent } from './directive-ngswitch/directive-ngswitch.component';
import { DirectiveNgforComponent } from './directive-ngfor/directive-ngfor.component';
import { DirectiveNgclassComponent } from './directive-ngclass/directive-ngclass.component';
import { DirectiveNgstyleComponent } from './directive-ngstyle/directive-ngstyle.component';
import { DirectiveElvisComponent } from './directive-elvis/directive-elvis.component';
import { DirectiveNgcontentComponent } from './directive-ngcontent/directive-ngcontent.component';
import { BackgroundYellowDirective } from './shared/background-yellow.directive';
import { DirectiveCustomComponent } from './directive-custom/directive-custom.component';
import { HighlightDirective } from './shared/highlight.directive';
import { HighlightFullDirective } from './shared/highlight-full.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveNgifComponent,
    DirectiveNgswitchComponent,
    DirectiveNgforComponent,
    DirectiveNgclassComponent,
    DirectiveNgstyleComponent,
    DirectiveElvisComponent,
    DirectiveNgcontentComponent,
    BackgroundYellowDirective,
    DirectiveCustomComponent,
    HighlightDirective,
    HighlightFullDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
