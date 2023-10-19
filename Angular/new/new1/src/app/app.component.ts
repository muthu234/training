import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // nam:string='murgan'
  show=true 
  setcolor='blue';
  item=['kumar','surya']
  title = 'new1';
  col='red'
  change(color:string){
    this.setcolor=color
  }
}
