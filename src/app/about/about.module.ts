import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { AboutResolverService } from './about-resolver.service';
import { AboutService } from './about/about.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    SharedModule,
    AboutRoutingModule
  ],
  providers: [AboutService, AboutResolverService]
})
export class AboutModule { }
