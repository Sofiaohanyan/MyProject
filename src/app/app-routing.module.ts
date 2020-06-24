import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { OwerviewComponent } from './components/owerview/owerview.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { FormPageComponent } from './components/form-page/form-page.component';



const routes: Routes = [
  {path: '', component: CreatePageComponent},
  {path: 'overview', component: OwerviewComponent},
  {path: 'details', component:UsersPageComponent},
  {path: 'form', component:FormPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
