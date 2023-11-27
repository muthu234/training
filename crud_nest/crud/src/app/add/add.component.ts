import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CalendarIcon } from 'primeng/icons/calendar';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent  implements OnInit {
  formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            date: new FormControl<Date | null>(null)
        });
    } 
  autoResize: boolean = true;
  startDate!: string;
  endDate!: string;
  userForm!:FormGroup; //step 3


  constructor(private fb:FormBuilder,private cm:CalendarModule,private serve:ServiceService){}  //step 4
initializeForm()
  {
    this.userForm=this.fb.group({
      title :[null,[Validators.required]],
      startdate:[null,[Validators.required,Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
      enddate:[null,[Validators.required,Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
      description:[null,[Validators.required]]
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
      }
    // let obj:any={};
    // obj['title']=this.form['title'].value;
    // obj['startDate']=this.startDate;
    // obj['EndDate']=this.EndDate;
    // obj['Description']=this.form['Description'].value;
    this.serve.createcourse(this.userForm.value).subscribe((data:any)=>
    {
      console.log(data);
      
    })



    console.log(this.userForm.value);

    // location.reload();
    // history.go();
  }


}
