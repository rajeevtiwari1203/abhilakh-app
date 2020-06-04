import { Component, OnInit, Input, TemplateRef, ContentChild, HostBinding, HostListener } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { CaraouselItemTemplate } from './caraousel-item-template.directive';

@Component({
	selector: 'caraousel',
	templateUrl: './caraousel.component.html',
	styleUrls: ['./caraousel.component.scss']
})
export class CaraouselComponent implements OnInit {

	@Input() set totalSlides(value) {
		this._totalSlides.next(value);
		if (value > 0) setTimeout(() => {
			this.init();
		}, 0);
	};
	private _totalSlides = new BehaviorSubject<number>(0);
	totalSlides$ = this._totalSlides.asObservable();
	private _currentIndex = new BehaviorSubject<number>(0);
	currentIndex$ = this._currentIndex.asObservable();
	totalSlideCurrentIndexCombined$;
	private _interval;
	private _containerWidth;
	arrVar = Array;
	@ContentChild(CaraouselItemTemplate, { read: TemplateRef }) caraouselItemTemplate: TemplateRef<any>;
	constructor() {
		this._initObservables();
	}

	@HostListener("window:resize") onWindowScrollHor() {
		this._containerWidth = document.getElementById('carousel').offsetWidth;
	}

	ngOnInit(): void {
	}

	_initObservables() {
		this.totalSlideCurrentIndexCombined$ = combineLatest(this.currentIndex$, this.totalSlides$)
			.pipe(
				filter(([currentIndex, totalSlides]) => {
					return totalSlides > 0
				}),
				map(([currentIndex, totalSlides]) => {
					if (currentIndex >= totalSlides) { this._currentIndex.next(0); currentIndex = 0; }
					this.setStyles(currentIndex, totalSlides);
					return { currentIndex, totalSlides };
				}
				)
			);
	}
	setStyles(index, totalSlides) {
		let dots = document.querySelectorAll('.dots .dot');
		if (dots.length) {
			for (let i = 0; i < totalSlides; i++) {
				dots[i].classList.remove('active');
			}
			dots[index].classList.add('active');
			(<HTMLElement>document.getElementsByClassName('slides')[0]).style.transform = 'translate(' + (-(index) * this._containerWidth) + 'px)';
		}
	}
	init() {
		this._containerWidth = document.getElementById('carousel').offsetWidth;
		this.startInterval();
		setTimeout(() => {
			this.registerEvents();
		}, 0);
	}
	startInterval() {
		if (this._interval) {
			clearInterval(this._interval);
		}
		this._interval = setInterval(() => {
			this._currentIndex.next(this._currentIndex.value + 1);
		}, 2000);
	}
	registerEvents() {
		this.registerLeftRightBtnEvent();
		this.registerDotEvents();
		this.registerHoverEvents();
	}
	registerLeftRightBtnEvent() {
		document.getElementById('leftBtn').addEventListener('click', () => {
			if ((this._currentIndex.value) != 0) {
				this._currentIndex.next(this._currentIndex.value - 1);
			}
			this.startInterval();
		});
		document.getElementById('rightBtn').addEventListener('click', () => {
			this._currentIndex.next(this._currentIndex.value + 1);
			this.startInterval();
		});
	}
	registerDotEvents() {
		document.getElementById('dots').addEventListener('click', ($event: any) => {
			if ($event.target.classList.contains('dot')) {
				this._currentIndex.next(+$event.target.dataset.num);
			}
			this.startInterval();
		});
	}
	registerHoverEvents() {
		// let slidesContainer = document.querySelector('#carousel .slides');
		// slidesContainer.addEventListener('mouseenter', ($event: any) => {
		//   if ($event.target.classList.contains('slide')) {
		//     clearInterval(this._interval);
		//   }
		// });
		// slidesContainer.addEventListener('mouseleave', ($event: any) => {
		//   if ($event.target.classList.contains('slide')) {
		//     this.startInterval();
		//   }
		// });
	}
}
