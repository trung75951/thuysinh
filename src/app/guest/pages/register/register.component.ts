import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup | any;
  constructor(private authServices:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.userForm = new FormGroup({
      "name": new FormControl(null, [Validators.required, Validators.minLength(4)]),
      "email": new FormControl(null,[Validators.required]),
      "password":new FormControl(null,[Validators.required]),
      "rppassword":new FormControl(null,[Validators.required])
    })
  }
  
  onSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
      this.authServices.register(this.userForm.value)
      this.router.navigate(['/auth/loginClient'])

    }else{
      alert("Vui lòng hoàn thành form")
    }

  }
}
