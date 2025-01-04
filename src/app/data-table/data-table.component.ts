import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddComponent } from '../add/add.component';

export interface Supplier{
  name:string,
  address:string,
  phone:string,
  mail:string
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, RouterLink, AddComponent,RouterOutlet],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent{

  suppliers : Array<Supplier> = [];

  filteredSuppliers : Array<Supplier> = this.suppliers;
  pageSizes : Array<number> = [4,5,10,15];
  currentPage:number = 1;
  pageSize:number = 4;

  // ParentMessage : string = "Hi! Add Child";

  ngOnInit(){
    this.visibleData();
    this.totalPages();
  }

  Add(){
    alert("Add is working");
  }
  visibleData() {
    let startIndex = (this.currentPage - 1)*this.pageSize;
    let endIndex = this.pageSize*this.currentPage;
    return this.filteredSuppliers.slice(startIndex,endIndex);  
  }

  PrevClick(){
    if(this.currentPage > 1)
    {
      this.currentPage -=1;
      this.visibleData();
    }
  }

  NextClick(){
    if(this.currentPage < this.totalPages().length)
    {
      this.currentPage +=1;
      this.visibleData();
    }
  }

  totalPages(){
    return Array<number>(Math.ceil(this.filteredSuppliers.length/this.pageSize));
  }

  navigate(clickedpageNumber : number){
    console.log(clickedpageNumber);
    this.currentPage = clickedpageNumber;
    this.visibleData();
  }

  filterData(searchString : string){

    this.currentPage = 1;
    this.filteredSuppliers = this.suppliers
      .filter(object => Object.values(object)
      .some(val => val.toLowerCase().includes(searchString.toLowerCase())));

    this.visibleData();
  }

  PageSizeChange(pageSize:any){
    this.currentPage = 1;
    console.log(pageSize);
    this.pageSize = pageSize;
    this.visibleData();
  }

}

