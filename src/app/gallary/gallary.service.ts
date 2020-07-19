import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class GallaryService {
    constructor(private httpClient: HttpClient) { }

    getGallaryData() {
        return of([
            {
                header: '', 
                images: ['', '']
            },
            {
                header: '', 
                images: ['', '']
            }
         ]);
        //return this.httpClient.get('/api/gallary');
    }
}