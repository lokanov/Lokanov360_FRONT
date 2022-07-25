import { DashbordHomeComponent } from './dashbord/dashbord-home/dashbord-home.component';
import { TopbarComponent } from './dashbord/topbar/topbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from  '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './dashbord/statistic/statistic.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './_service/token-interceptor.service';
import { DashbordLokanovComponent } from './dashbord/dashbord-lokanov/dashbord-lokanov.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisitVideoComponent } from './home/visit-video/visit-video.component';
import { VisitVideoCardsComponent } from './home/visit-video-cards/visit-video-cards.component';
import { HeaderComponent } from './home/header/header.component';
import { AddVideoComponent } from './dashbord/add-video/add-video.component';
import { AddVisitComponent } from './dashbord/add-visit/add-visit.component';
import { ListVisitComponent } from './dashbord/list-visit/list-visit.component';
import { ListVideoComponent } from './dashbord/list-video/list-video.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ListUserComponent } from './dashbord/list-user/list-user.component';
import { AddCompanyComponent } from './dashbord/add-company/add-company.component';
import { DashbordLokanovHomeComponent } from './dashbord/dashbord-lokanov-home/dashbord-lokanov-home.component';
import { AddAppointementComponent } from './dashbord/add-appointement/add-appointement.component';
import { AuthService } from './_service/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { GrilleTarifiaireComponent } from './dashbord/grille-tarifiaire/grille-tarifiaire.component';
import { InfosAbonnementComponent } from './dashbord/infos-abonnement/infos-abonnement.component';
import { InfosAbonnementLokanovComponent } from './dashbord/infos-abonnement-lokanov/infos-abonnement-lokanov.component';
import { ListAppointementComponent } from './dashbord/list-appointement/list-appointement.component';
import { DetailsAppointementComponent } from './dashbord/details-appointement/details-appointement.component';
import { ListAppointmentComponent } from './dashbord/list-appointment/list-appointment.component';
import { NumberByCatgeoryComponent } from './home/number-by-catgeory/number-by-catgeory.component';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ContactComponent } from './home/contact/contact.component';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

import { NgxStarRatingModule } from 'ngx-star-rating';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

//import {authInterceptorProviders} from  './helpers/auth.intrerceptor'
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DashbordComponent,
    DashbordHomeComponent,
    HomeComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    TopbarComponent,
    StatisticComponent,
    DashbordLokanovComponent,
    VisitVideoComponent,
    VisitVideoCardsComponent,
    HeaderComponent,
    AddVideoComponent,
    AddVisitComponent,
    ListVisitComponent,
    ListVideoComponent,
    ListUserComponent,
    AddCompanyComponent,
    DashbordLokanovHomeComponent,
    AddAppointementComponent,
    GrilleTarifiaireComponent,
    InfosAbonnementComponent,
    InfosAbonnementLokanovComponent,
    ListAppointementComponent,
    DetailsAppointementComponent,
    ListAppointmentComponent,
    NumberByCatgeoryComponent,
    ContactComponent
  
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxStarRatingModule,
    CommonModule,
    NgbModule,
    NgbRatingModule,
    ModalModule.forRoot(),
  ],

  providers: [AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
