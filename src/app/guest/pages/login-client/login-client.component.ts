import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.models';
import { UserCLient } from 'src/app/model/userClient.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.scss']
})
export class LoginClientComponent implements OnInit {
  user:User=new User
  userClient:UserCLient=new UserCLient
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(frm:NgForm){
    if (frm.valid) {
      this.authService.loginClient(this.userClient).then((res:any)=>{
        alert("Đăng nhập thành công")
        this.router.navigate(['/client'])
      }).catch(()=>{
        alert("Đăng nhập thất bại")
      }).finally(()=>{

      })
    }
}
}
