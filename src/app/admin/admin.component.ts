import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { NgSwitch } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  mainForm: FormGroup;
  screenName$ = new BehaviorSubject('home');
  contactForm: FormGroup;
  homeForm: FormGroup;
  gallaryForm: FormGroup;
  aboutForm: FormGroup;
  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      screen: ['home']
    });
    this.createContactForm();
    this.createHomeForm();
    this.createGallaryForm();
    this.createAboutForm();
  }

  onScreenChange($event) {
    this.screenName$.next(this.mainForm.get("screen").value);
  }

  onImagesChange(event, controlKey) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      let images = [];
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          images.push(event.target.result);
          this.homeForm.patchValue({
            [controlKey]: images
          });
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  onGallaryImagesChange(event, index) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      let images = [];
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          images.push(event.target.result);
          this.gallaryImages.controls[index].patchValue({
            'gallaryImageSources': images
          });
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  createContactForm() {
    this.contactForm = this.fb.group({
      line1: new FormControl('', [Validators.required]),
      line2: new FormControl('', [Validators.required]),
      line3: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });
  }

  createHomeForm() {
    this.homeForm = this.fb.group({
      caraouselImageSources: ['', [Validators.required]],
      mainSectionHeader: ['', [Validators.required]],
      mainSectionSubHeader: ['', [Validators.required]],
      mainSectionImageSources: ['', [Validators.required]],
      emergencySectionHeader: ['', [Validators.required]],
      emergencyImages: this.fb.array([this.createEmergencyItem()]),
      foundationDetailHeader: ['', [Validators.required]],
      foundationDetails: this.fb.array([this.createFoundationDetailLine()]),
    });
  }

  createGallaryForm() {
    this.gallaryForm = this.fb.group({
      gallaryImages: this.fb.array([this.createGallaryItem()])
    });
  }

  createEmergencyItem() {
    return this.fb.group({
      imageSource: ['', Validators.required],
      name: ['', Validators.required],
      desease: ['', Validators.required]
    });
  }

  createFoundationDetailLine() {
    return this.fb.group({
      line: ['', Validators.required]
    });
  }

  createGallaryItem() {
    return this.fb.group({
      gallaryImageSources: ['', Validators.required],
      imageHeader: ['', Validators.required]
    });
  }

  createWhoWeAreLine() {
    return this.fb.group({
      line: ['', Validators.required]
    });
  }

  createOurVisionLine() {
    return this.fb.group({
      line: ['', Validators.required]
    });
  }

  createOurMissionLine() {
    return this.fb.group({
      line: ['', Validators.required]
    });
  }

  createOurObjectiveLine() {
    return this.fb.group({
      line: ['', Validators.required]
    });
  }

  createAboutForm() {
    this.aboutForm = this.fb.group({
      mainImageSource: ['', [Validators.required]],
      founderImageSource: ['', [Validators.required]],
      founderName: ['', [Validators.required]],
      founderAbout: ['', [Validators.required]],
      whoWeAre: this.fb.array([this.createWhoWeAreLine()]),
      ourVision: this.fb.array([this.createOurVisionLine()]),
      ourMission: this.fb.array([this.createOurMissionLine()]),
      ourObjectives: this.fb.array([this.createOurObjectiveLine()]),
    });
  }

  onImageChange(event, controlKey, index) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.emergencyImages.controls[index].patchValue({
          [controlKey]: event.target.result
        });
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onAboutImageChange(event, controlKey) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.aboutForm.patchValue({
          [controlKey]: event.target.result
        });
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  addNewEmergencyItem() {
    this.emergencyImages.push(this.createEmergencyItem());
  }

  addNewFoundationDetailLine() {
    this.foundationDetails.push(this.createFoundationDetailLine());
  }

  addNewGallaryItem() {
    this.gallaryImages.push(this.createGallaryItem());
  }

  addNewWhoWeAreItem() {
    this.whoWeAre.push(this.createWhoWeAreLine());
  }
  addNewOurVisionItem() {
    this.ourVision.push(this.createOurVisionLine());
  }
  addNewOurMissionItem() {
    this.ourMission.push(this.createOurMissionLine());
  }
  addNewOurObjectivesItem() {
    this.ourObjectives.push(this.createOurObjectiveLine());
  }

  removeEmergencyCases(i: number) {
    this.emergencyImages.removeAt(i);
  }

  removeFoundationDetails(i: number) {
    this.foundationDetails.removeAt(i);
  }

  removeGallaryDetails(i: number) {
    this.gallaryImages.removeAt(i);
  }

  removeWhoWeAreLine(i: number) {
    this.whoWeAre.removeAt(i);
  }

  removeOurVisionLine(i: number) {
    this.ourVision.removeAt(i);
  }

  removeOurMissionLine(i: number) {
    this.ourMission.removeAt(i);
  }

  removeOurObjectiveLine(i: number) {
    this.ourObjectives.removeAt(i);
  }

  get emergencyImages() {
    return this.homeForm.get('emergencyImages') as FormArray;
  }

  get foundationDetails() {
    return this.homeForm.get('foundationDetails') as FormArray;
  }

  get gallaryImages() {
    return this.gallaryForm.get('gallaryImages') as FormArray;
  }

  get whoWeAre() {
    return this.aboutForm.get('whoWeAre') as FormArray;
  }

  get ourVision() {
    return this.aboutForm.get('ourVision') as FormArray;
  }

  get ourMission() {
    return this.aboutForm.get('ourMission') as FormArray;
  }

  get ourObjectives() {
    return this.aboutForm.get('ourObjectives') as FormArray;
  }

  submitForm() {
    switch (this.mainForm.get("screen").value) {
      case 'home':
        if (this.homeForm.valid) {
          let data = {
            caraouselData: this.homeForm.get('caraouselImageSources').value.map(m => {
              return {
                imgSrc: m
              }
            }),
            mainSection: {
              header: this.homeForm.get('mainSectionHeader').value,
              subHeader: this.homeForm.get('mainSectionSubHeader').value,
              images: this.homeForm.get('mainSectionImageSources').value.map(m => {
                return {
                  imgSrc: m
                }
              })
            },
            emergencyCases: {
              header: this.homeForm.get('emergencySectionHeader').value,
              images: this.emergencyImages.controls.map(m => {
                return {
                  imgSrc: m.get('imageSource').value,
                  shortDetail: {
                    name: m.get('name').value,
                    desease: m.get('desease').value
                  }
                }
              })
            },
            foundationDetail: {
              header: this.homeForm.get('foundationDetailHeader').value,
              details: this.foundationDetails.controls.map(m => m.get('line').value)
            }
          }
          console.log(data);
          this.httpClient.post('/api/home/create', data).subscribe(m=> console.log(m));
        }
        break;

      case 'gallary':
        if (this.gallaryForm.valid) {
          let data = this.gallaryImages.controls.map(m => {
            return {
              header: m.get('imageHeader').value,
              images: m.get('gallaryImageSources').value
            }
          })
          console.log(data);
          this.httpClient.post('/api/gallary/create', data).subscribe(m=> console.log(m));
        }
        break;


      case 'about':
        if (this.aboutForm.valid) {
          let data = {
            mainImage: this.aboutForm.get('mainImageSource').value,
            founderDetail: {
              imgSrc: this.aboutForm.get('founderImageSource').value,
              name: this.aboutForm.get('founderName').value,
              about: this.aboutForm.get('founderAbout').value
            },
            whoWeAre: this.whoWeAre.controls.map(m => m.get('line').value),
            ourVision: this.ourVision.controls.map(m => m.get('line').value),
            ourMission: this.ourMission.controls.map(m => m.get('line').value),
            ourObjectives: this.ourObjectives.controls.map(m => m.get('line').value)
          };
          console.log(data);
          this.httpClient.post('/api/about/create', data).subscribe(m=> console.log(m));
        }
        break;

      case 'contact':
        if (this.contactForm.valid) {
          let data = {
            address: {
              line1: this.contactForm.get('line1').value,
              line2: this.contactForm.get('line2').value,
              line3: this.contactForm.get('line3').value,
            },
            contact: {
              phone: this.contactForm.get('phone').value,
              email: this.contactForm.get('email').value
            }
          }
          console.log(data);
          this.httpClient.post('/api/contact/create', data).subscribe(m=> console.log(m));
        }
        break;

      default:
        break;
    }
  }

}
