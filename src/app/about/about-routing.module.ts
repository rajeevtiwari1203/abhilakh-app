import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutResolverService } from './about-resolver.service';


const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: AboutComponent,
    resolve: {data: AboutResolverService}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
