import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidelbarComponent } from './sidelbar/sidelbar.component';
import { TodocardComponent } from './todocard/todocard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidelbarComponent,
    TodocardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
