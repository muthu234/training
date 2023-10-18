import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  setcolor='blue';//property Bindings
  
  title = 'new1';
  col='red'
  change(color:string){
    this.setcolor=color
  }
}
