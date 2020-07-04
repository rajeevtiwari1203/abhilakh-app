import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ContactResolverService } from './contact-resolver.service';
import { ContactService } from './contact.service';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    resolve: {data: ContactResolverService}
  }
];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    [RouterModule.forChild(routes)],
  ],
  providers: [ContactService, ContactResolverService]
})
export class ContactModule { }
