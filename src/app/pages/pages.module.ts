import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModulesModule } from '../modules/modules.module';

const pages = [
  LoginComponent,
  HomeComponent
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
