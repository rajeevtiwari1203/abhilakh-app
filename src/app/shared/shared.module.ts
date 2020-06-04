import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CaraouselComponent } from './caraousel/caraousel.component';
import { CaraouselItemTemplate } from './caraousel/caraousel-item-template.directive';



@NgModule({
  declarations: [CaraouselComponent, CaraouselItemTemplate],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule,
    CaraouselComponent,
    CaraouselItemTemplate
  ]
})
export class SharedModule { }
