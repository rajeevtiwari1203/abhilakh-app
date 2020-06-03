import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {
    constructor(private httpClient: HttpClient) { }
    
    getHomeData() {
        return this.httpClient.get('/api/home');
    }
}