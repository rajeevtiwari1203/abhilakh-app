import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm;
  @ViewChild('name') name: ElementRef;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
    let phoneNumberRegex = "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"; 
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, this.noWhiteSpaceValidator]],
      contact: ['', [Validators.required, Validators.pattern(emailRegex), this.noWhiteSpaceValidator]],
      email: ['', [Validators.required, Validators.pattern(phoneNumberRegex), this.noWhiteSpaceValidator]],
      message: ['', [this.noWhiteSpaceValidator]],
    })
  }
  ngAfterViewInit() {
    setTimeout(()=> {
      this.name.nativeElement.focus();
    }, 1000);
  }
  private noWhiteSpaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}
