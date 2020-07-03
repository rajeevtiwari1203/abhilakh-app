import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AboutService } from './about/about.service';

@Injectable()
export class AboutResolverService implements Resolve<any> {
    constructor(private service: AboutService) { }
    resolve(): Observable<any> {
        return this.service.getAboutNgoData();
    }
}