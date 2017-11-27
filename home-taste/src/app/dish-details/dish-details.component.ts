import { Component, OnInit, Inject } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Location } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';
import { Dish } from '../shared/dish';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment';
import { visibility, flyInOut, expand } from '../animations/app.animations';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    visibility(),
    flyInOut(),
    expand()
  ],
})
export class DishDetailsComponent implements OnInit {
  
  item: Dish;
  itemcopy = null;
  dishIds: number[];
  prev: number;
  next: number;
  commentForm: FormGroup;
  comment: Comment;
  visibility = "shown";
  comments: Comment[] = [
  
  ];

  errMess: string;

  formErrors = {
    'author': '',
    'comment': ''
  };

  errorMessages = {
    'author': {
      'required': 'author is required',
      'minlength': 'author must be atleast 2 characters long',
      'maxlength': 'author can not be more than 25 characters long'
    },
    'comment': {
     'required': 'comment is required',
     'minlength': 'comment must be atleast 5 characters long',
     'maxlength': 'comment can not be more than 300 characters long'
   }
  }




  constructor(private dishService: DishService,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder,
              @Inject('BaseURL') private BaseURL) {
                  this.createCommentForm();
                             }

  ngOnInit() {

      this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
      this.route.params
        .switchMap((params: Params) => {this.visibility = "hidden"; return this.dishService.getDish(+params['id']); })
        .subscribe(item => {this.item = item; this.itemcopy = item; this.setPrevNext(item.id); this.visibility = "shown"},
                    errmess => this.errMess = <any>errmess);
  }


  createCommentForm(): void {
    this.commentForm =  this.fb.group({
      author: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(2)]],
      comment: ['', [Validators.required, Validators.maxLength(325), Validators.minLength(5)]],
      
     
    });

   

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

      this.onValueChanged();
  }


  onValueChanged(data?: any) {

    if(!this.commentForm) { return; }
    const form = this.commentForm;
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



  clearFormData(formData) {
    let formFields = formData.value;
    formFields.rating = 5;
    formFields.date = new Date().toISOString();
    this.itemcopy.comments.push(formFields);
    this.itemcopy.save().subscribe(item => this.item = item);
    formData.reset();
  }
  
  
  goBack() {
    this.location.back();
  }

 setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
 }

}
