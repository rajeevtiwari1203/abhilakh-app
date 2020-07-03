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
export class AboutComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data);
  }
}
