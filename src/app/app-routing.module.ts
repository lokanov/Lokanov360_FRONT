import { UpdateVideoComponent } from './dashbord/update-video/update-video.component';
import { DashbordLokanovComponent } from './dashbord/dashbord-lokanov/dashbord-lokanov.component';
import { RegisterComponent } from './auth/register/register.component';
import { UpdateVisitComponent } from './dashbord/update-visit/update-visit.component';
import { ListVisitComponent } from './dashbord/list-visit/list-visit.component';
import { AddVisitComponent } from './dashbord/add-visit/add-visit.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVideoComponent } from './dashbord/list-video/list-video.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashbord' , component:DashbordComponent},
  //{ path: 'dashbord-home' , component:Da},
  { path: 'dashbord-lokanov', component:DashbordLokanovComponent},
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'add-visit', component:AddVisitComponent},
  { path: 'list-visit', component:ListVisitComponent},
  { path : 'list-video', component:ListVideoComponent},
  { path: 'update', component:UpdateVisitComponent},
  { path: 'updateVideo', component:UpdateVideoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
