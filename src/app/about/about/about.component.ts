import { Component, OnInit, OnDestroy } from '@angular/core';
import { AboutService } from './about.service';
import { ActivatedRoute } from '@angular/router';
import { pipe, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  data:any = {};
  constructor(private activatedRoute: ActivatedRoute) {
    this.data = this.activatedRoute.snapshot.data.data;
  }
}
