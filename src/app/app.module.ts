import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
