import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

ingredient:any
editform!:FormGroup;
form: any;
sidebarVisible: boolean = false;
constructor(private fb:FormBuilder){
  this.editform = this.fb.group({
    name : [],
    designation :[]
  });
}
Cancel()
{
  alert("exit");
}
save(){
  alert("save");
}
}
