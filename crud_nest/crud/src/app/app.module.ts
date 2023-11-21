import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudFrondendComponent } from './crud-frondend/crud-frondend.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { CalendarModule } from 'primeng/calendar';
import { CalendarIcon } from 'primeng/icons/calendar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ServiceService } from './service.service';
import {HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    CrudFrondendComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,CalendarModule,
    CalendarIcon ,
    BrowserAnimationsModule,
    InputTextareaModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
