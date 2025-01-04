import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Supplier } from '../data-table/data-table.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postStudent(data:Supplier){
    return this.http.post<Supplier>("http://localhost:3000/posts",data)
    .pipe(map((res:Supplier) =>{
      return res;
    }))
  }

  getStudent(){
    return this.http.get<Supplier>("http://localhost:3000/posts")
    .pipe(map((res:Supplier) => {
      return res;
    }))
  }

  updateStudent(data:Supplier,id:number){
    return this.http.put<Supplier>("http://localhost:3000/posts/"+id,data)
    .pipe(map((res:Supplier) => {
      return res;
    }))
  }

  deleteStudent(id:number){
    return this.http.delete<Supplier>("http://localhost:3000/posts/"+id)
    .pipe(map((res:Supplier) => {
      return res;
    }))
  }
}
