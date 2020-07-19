import { Component, OnInit } from '@angular/core';
import { GallaryService } from './gallary.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {

  vm$;
  constructor(private gallaryService: GallaryService) { }
  ngOnInit(): void {
    this.vm$ = this.gallaryService.getGallaryData().pipe(tap(m => console.log(m)));
  }

}
