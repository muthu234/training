import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomComponent } from './mycom/mycom.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { CrudComponent } from './crud/crud.component';
import { FormComponent } from './form/form.component';
import { NgClass } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MycomComponent,
    StudentComponent,
    CrudComponent,
    FormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, //step:6
    NgClass
   
  

  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  a:number=10;
 }
