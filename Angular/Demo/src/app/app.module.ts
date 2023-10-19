import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomComponent } from './mycom/mycom.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { MyserviceService } from './myservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MycomComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule //step:6
  

  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
