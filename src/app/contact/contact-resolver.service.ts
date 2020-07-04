import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactService } from './contact.service';

@Injectable()
export class ContactResolverService implements Resolve<any> {
    constructor(private service: ContactService) { }
    resolve(): Observable<any> {
        return this.service.getContactData();
    }
}