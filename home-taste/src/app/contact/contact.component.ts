import { Component, OnInit } from '@angular/core';
import { Feedback, contactType } from '../shared/feedback';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { flyInOut } from '../animations/app.animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]' : 'true',
    'style': 'display:block;'
  },
  animations: [
    flyInOut()
  ]
})
export class ContactComponent implements OnInit {
   feedbackForm: FormGroup;
   feedback: Feedback;
   ContactType = contactType;
   formErrors = {
     'firstname': '',
     'lastname': '',
     'telnum': '',
     'email': '',
   };

   errorMessages = {
     'firstname': {
       'required': 'First name is required',
       'minlength': 'First name must be atleast 2 characters long',
       'maxlength': 'First name can not be more than 25 characters long'
     },
     'lastname': {
      'required': 'First name is required',
      'minlength': 'First name must be atleast 2 characters long',
      'maxlength': 'First name can not be more than 25 characters long'
    },
    'telnum': {
      'required': 'Tel. number is required',
      'pattern': 'Tel. number must contain numbers only',
      
    },
    'email': {
      'required': 'Email is required',
      'email': 'Email not in valid format'
    }
   };

  constructor(private fb:FormBuilder) {
        this.createForm();
   }

  ngOnInit() {
  }


  createForm(): void {
    this.feedbackForm =  this.fb.group({
      firstname: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(2)]],
      telnum: [0, [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

      this.onValueChanged();
  }


  onValueChanged(data?: any) {
    if(!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for(const field in this.formErrors) {
      this.formErrors[field]='';
      const control = form.get(field);
      if(control && control.dirty && !control.valid) {
        const messages = this.errorMessages[field];
        for(const key in control.errors){
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }



  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname:'',
      lastname: '',
      telnum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }
}
