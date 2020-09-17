import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   myForm: FormGroup
   password: any
   out: any
   constructor(private fb: FormBuilder) { }
   ngOnInit() { 
     this.myForm = this.fb.group({
       password: new FormControl()
     })
   }
   encode() { 
      this.password = this.myForm.get('password').value;
      this.out = escape(this.password)
   }
}
