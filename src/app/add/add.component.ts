import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataTableComponent,Supplier } from '../data-table/data-table.component';
import { FormControl, FormsModule } from '@angular/forms';
import { ApiService } from '../Shared/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [DataTableComponent, FormsModule, RouterLink],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{

  newSupplier : Supplier = {
    name: '',
    address: '',
    phone: '',
    mail: ''
  };

  constructor() {
    
  }

  ngOnInit(): void {
  }


  submitForm(){
    console.log(this.newSupplier);
    // this.api.postStudent(this.newSupplier)
    // .subscribe({
    //   complete: () => console.log("Student added successfully"),
    //   error:(e) => console.log("Something went wrong")
    // })
  }

  resetForm(){

  }
}
