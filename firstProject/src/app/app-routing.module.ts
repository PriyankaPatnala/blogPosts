import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BrowserModule } from '@angular/platform-browser';
import { BlogformComponent } from './blogform/blogform.component';
import { FormsModule} from "@angular/forms";

const routes: Routes = [
  {path:'list', component:BloglistComponent},
  {path:'create', component:BlogformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  exports: [RouterModule, BloglistComponent, BlogformComponent, FormsModule],
  declarations: [
    BloglistComponent,
    BlogformComponent
  ]
})
export class AppRoutingModule { }
