import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  vm$;
  constructor(private homeService: HomeService) { }
  ngOnInit(): void {
    this.vm$ = this.homeService.getHomeData();
  }
}
