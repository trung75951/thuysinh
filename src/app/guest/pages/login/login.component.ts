import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:User=new User
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(frm:NgForm){
    if (frm.valid) {
      this.authService.login(this.user).then((res:any)=>{
        alert("Đăng nhập thành công")
        this.router.navigate(['/admin'])
      }).catch(()=>{
        alert("Đăng nhập thất bại")
      }).finally(()=>{

      })
    }
  }


}
