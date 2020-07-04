import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  data;
  contactForm: FormGroup;
  @ViewChild('name') name: ElementRef;
  @ViewChild('contact') contact: ElementRef;
  @ViewChild('email') email: ElementRef;
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) { 
    this.data = this.activatedRoute.snapshot.data.data;
  }

  ngOnInit(): void {
    let emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
    let phoneNumberRegex = "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"; 
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, this.noWhiteSpaceValidator]],
      contact: ['', [Validators.required, Validators.pattern(phoneNumberRegex), this.noWhiteSpaceValidator]],
      email: ['', [Validators.required, Validators.pattern(emailRegex), this.noWhiteSpaceValidator]],
      message: ['', [this.noWhiteSpaceValidator]],
    })
  }
  ngAfterViewInit() {
    setTimeout(()=> {
      this.name.nativeElement.focus();
    }, 1000);
  }
  submit() {
    if(this.contactForm.valid) {
      alert('Your contact details are safe with us. We will contact you soon.');
    } else {
      if(this.contactForm.controls['name'].invalid) {
        this.contactForm.controls['name'].markAsTouched();
        setTimeout(() => {
          this.name.nativeElement.focus();
        }, 0);
      } else if(this.contactForm.controls['contact'].invalid) {
        this.contactForm.controls['contact'].markAsTouched();
        setTimeout(() => {
          this.contact.nativeElement.focus();
        }, 0);
      } else {
        this.contactForm.controls['email'].markAsTouched();
        setTimeout(() => {
          this.email.nativeElement.focus();
        }, 0);
      }
    }
  }
  private noWhiteSpaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}
