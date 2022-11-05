import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModulesModule } from '../modules/modules.module';
import { DateTimePipe } from '../global/pipes/date-time.pipe';

const pages = [
  LoginComponent,
  HomeComponent,
  DateTimePipe
]


@NgModule({
  declarations: pages,
  exports: pages,
  imports: [
    CommonModule,
    ModulesModule,
  ]
})
export class PagesModule { }
