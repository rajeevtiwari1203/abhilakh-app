import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GallaryComponent } from './gallary.component';
import { GallaryService } from './gallary.service';
import { GallaryResolverService } from './gallary-resolver.service';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: GallaryComponent,
    resolve: { data: GallaryResolverService }
  }
];

@NgModule({
  declarations: [GallaryComponent],
  imports: [
    CommonModule,
    SharedModule,
    [RouterModule.forChild(routes)],
  ],
  providers: [GallaryService, GallaryResolverService]
})
export class GallaryModule { }
