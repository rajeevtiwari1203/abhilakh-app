import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';


const coreRoutes: Routes = [
	{
		path: '',
		component: CoreComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'home'
			},
			{
				path: 'home',
				loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
			},
			{
				path: 'about',
				loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
			},
			{
				path: 'contact',
				loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule)
			},
			{
				path: 'gallary',
				loadChildren: () => import('../gallary/gallary.module').then(m => m.GallaryModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(coreRoutes)],
	exports: [RouterModule]
})
export class CoreRoutingModule { }
