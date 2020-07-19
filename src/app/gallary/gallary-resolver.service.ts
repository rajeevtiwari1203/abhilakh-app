import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { GallaryService } from './gallary.service';

@Injectable()
export class GallaryResolverService implements Resolve<any> {
    constructor(private service: GallaryService) { }
    resolve(): Observable<any> {
        return this.service.getGallaryData();
    }
}