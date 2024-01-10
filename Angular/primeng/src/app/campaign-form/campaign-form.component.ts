import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss']
})
export class CampaignFormComponent {
form!: FormGroup;
selectedFile: File | null = null;
  selectedFileUrl: string | ArrayBuffer | null | undefined;


  constructor (private fb:FormBuilder){
    this.initial()
  }

  sidebarVisible:boolean=true;
  startdate: Date | undefined;
  enddate: Date | undefined;

initial(){
  this.form=this.fb.group({
    CampaignName:['',[Validators.required]],
    CampaignOwner:['',[Validators.required]],
    startDate:[null,[ Validators.required]],
    endDate:[null,[ Validators.required]],
    uploadFile:['',[ Validators.required]],
    videoUrl:['',[ Validators.required]],
    triggerLink:['',[ Validators.required]],

  })
}

onCancelClick()
{
  this.sidebarVisible=false;
}
onSubmitClick()
{
  return this.form.markAllAsTouched()
}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.selectedFile = file;
   console.log('alt')
    // Preview the selected image
    const reader = new FileReader();
    reader.onload = (e) => {
      this.selectedFileUrl = e.target?.result;
      // console.log('this.selectedFileUrl', this.selectedFileUrl)
    };
    reader.readAsDataURL(file);
  }


get formControls()
{
  return this.form.controls;
}
}
