import { Injectable } from '@angular/core';
import { User } from '../model/user.models';
import { UserCLient } from '../model/userClient.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _userLogin:String="";
  _userClientLogin:String="";
  userclient:UserCLient[]=[];
  constructor() { }
  login(user:User){
    return new Promise((resolve, reject)=>{
      try {
        if (user.username == "admin" && user.password=="123") {
          localStorage.setItem('userLogin',JSON.stringify(user))
          resolve(user)
        }
        else{
          reject();
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  loginClient(userclient:UserCLient){
    return new Promise((resolve, reject)=>{
      try {
        let existUser = this.userclient.findIndex(item=>item.email == userclient.email && item.password == userclient.password)

        if (existUser != -1) {
          localStorage.setItem('loginClient',JSON.stringify(userclient.email))
          resolve(userclient)
        }
        else{
          reject();
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  checkLogin(){
    let strUser = localStorage.getItem('userLogin');
    if (strUser && strUser.length>0) {
      this._userLogin=JSON.parse(strUser);
      return true
    }
    else{
      return false;
    }
  }

  checkLoginClient(){
    let strUserClient = localStorage.getItem('loginClient');
    if (strUserClient && strUserClient.length>0) {
      this._userClientLogin=JSON.parse(strUserClient);
      return true
    }
    else{
      return false;
    }
  }
  register(user:any){
    let newUsser = new UserCLient()
    newUsser.email = user.email;
    newUsser.password = user.password;
    newUsser.fullname = user.fullname;
    this.userclient.push(newUsser)
    alert("Thành công")
  }

}
