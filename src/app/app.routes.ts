import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { DataTableComponent } from './data-table/data-table.component';
import { AddComponent } from './add/add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path : 'home', title:'Home', component:DataTableComponent},
    {path : 'home', children:[
        {path : 'add',title:'Home | Add', component : AddComponent}
    ]},
    {path : 'about-us',title:'About us', component: AboutUsComponent},
    {path : 'contact', title:'Contact', component:ContactComponent},
    {path : '',title:'Home', redirectTo:'/home', pathMatch:'full'},
    {path : '**', title:'404:Page Error', component:PageNotFoundComponent}
];

@NgModule({
    imports:[]
})

export class AppRoutingModule{

}