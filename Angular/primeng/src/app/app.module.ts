import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TooltipModule } from 'primeng/tooltip';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RadioButtonModule,
    FormsModule,
    TooltipModule,
    OverlayPanelModule,
    ButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
