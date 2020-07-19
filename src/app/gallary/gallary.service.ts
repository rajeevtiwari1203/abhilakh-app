import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class GallaryService {
    constructor(private httpClient: HttpClient) { }

    getGallaryData() {
        return of([
            {
                header: 'ABHILASHA FOUNDATION RECEIVED CERTIFICATE OF APPRECIATION FROM MR. GOPAL SHETTY, MEMBER OF PARLIAMENT, (NORTH MUMBAI) FOR STANDING ON THE FRONT LINES OF THE FIGHT AGAINST COVID 19 PANDEMIC ON JUNE 17TH, 2020',
                images: ['https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg']
            },
            {
                header: 'DISTRIBUTED RATION BENEFITING 75 DAILY WAGER, MIGRANT WORKERS, POOR, NEEDY, PHYSICALLY CHALLENGED PEOPLE AND CHILDREN AT NEPTUNE MAGNET MALL, BHANDUP SLUM DURING COVID-19 LOCKDOWN RELIEF ON JUNE 2ND, 2020.',
                images: ['https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg', 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg']
            }
        ]);
        //return this.httpClient.get('/api/gallary');
    }
}