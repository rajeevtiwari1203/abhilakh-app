import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class ContactService {
    constructor(private httpClient: HttpClient) { }

    getContactData() {
        return this.httpClient.get('/api/contact');
    }
}