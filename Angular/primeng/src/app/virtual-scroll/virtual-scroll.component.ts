import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { LazyLoadEvent } from 'primeng/api';
import { TableLazyLoadEvent } from 'primeng/table';

// interface Item {
//   label: string;
//   index: number;
// }
@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent {
  details: any;
  alldetails:any;
  virtualProducts:any[]=[];
  totalRecords:any;
  constructor(private ser: MyserviceService) {}
    // product = [
    //   { code: '001', name: 'Product A', category: 'Electronics', quantity: 10 },
    //   { code: '002', name: 'Product B', category: 'Clothing', quantity: 5 },
    //   // Add more product objects as needed
    // ];
  ngOnInit() {
    this.getall()
}
getall() {
  this.ser.getallEmployee().subscribe((data) => {
    this.details = data;
    this.alldetails=this.details.data
    this.virtualProducts=this.alldetails.data
    this.totalRecords=this.virtualProducts.length
    console.log("iiiiiiiiiiiiiiiiiiiiiiiiii",this.alldetails);
  });
}

loadCarsLazy(event: TableLazyLoadEvent) {
console.log("EVENT:",event);

  setTimeout(() => {

     const data={
      'limit': event?.rows== 0 ?3:event.rows,
      'offset': event?.first == undefined ? 0 : event.first,
     }
     console.log("datataatatat",data);
     
    const first = event?.first ?? 0;
    const rows = event?.rows ?? 3; // Adjust the default value based on your needs

    let loadedProducts = this.virtualProducts.slice(first, first + rows);

    this.virtualProducts.splice(first, rows, ...loadedProducts);

    // Assuming you have a totalRecords variable
    // event.totalRecords = this.totalRecords;
  }, 1000);
}

}





