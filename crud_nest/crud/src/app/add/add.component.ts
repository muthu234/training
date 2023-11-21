import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CalendarIcon } from 'primeng/icons/calendar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  autoResize: boolean = true;
  startDate: Date | undefined;
  EndDate: Date | undefined;
  userForm!:FormGroup; //step 3
  constructor(private fb:FormBuilder,private cm:CalendarModule){}  //step 4
  ngOnInit(): void {
    this.initializeForm()
  }
initializeForm()
  {
    this.userForm=this.fb.group({
      title :[null,[Validators.required]],
      startDate:[null,[Validators.required,Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
      EndDate:[null,[Validators.required,Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
    });
  }
get form()
  {
    return this.userForm.controls;
  }
  cancel()
  {
    location.reload();
    alert("Are you exit this form");
  }
  submit()
  {
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
      return;
    }
    location.reload();
    // history.go();
  }


}
