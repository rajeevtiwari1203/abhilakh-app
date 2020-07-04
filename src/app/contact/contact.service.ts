import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class ContactService {
    constructor(private httpClient: HttpClient) { }

    getContactData() {
        //return this.httpClient.get('/api/about');
        let result = {
            address: {
                line1: "Abhilakh Foundation",
                line2: "Laxmi Chhaya Bungalow, Plot no: 27-27, RSC 11,",
                line3: "Gorai-2, Borivali(W), Mumbai-400 091."
            },
            contact: {
                email: "a.k@gmail.com",
                phone: "+91-8342342342"
            }
        }
        return of(result);
    }
}