import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { SharedModule } from '../shared/shared.module';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    [RouterModule.forChild(homeRoutes)],
  ],
  providers: [HomeService]
})
export class HomeModule { }
