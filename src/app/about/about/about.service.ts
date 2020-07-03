import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AboutService {
    constructor(private httpClient: HttpClient) { }

    getAboutNgoData() {
        return this.httpClient.get('/api/about');
    }   
}