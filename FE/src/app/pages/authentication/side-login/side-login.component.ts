import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserLogged } from 'src/app/core/utils/userLogged';
import { J } from '@angular/cdk/keycodes';
@Component({
  selector: 'app-side-login',
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {
  username: any;
  pass: any;
 public userLogged = new UserLogged();
  constructor( private router: Router,
    private service : AuthenticationService
  ) {}

 
  onChange(event: any) {
    this.username = event.target.value;
  }
  onChangePass(event: any) {
    this.pass = event.target.value;
  }

  submit() {
    let formData = {
      Username : this.username,
      Password : this.pass
    }
    this.service.Login(formData).subscribe((data)=>{
       if(data == null){
         alert("Sai tài khoản hoặc mật khẩu!");
         this.router.navigate(['/authentication/login']);
       }else{
        if(data.status == true){
          this.userLogged.setCurrentUser(data.token,data.userid,JSON.stringify(data.roles));
          this.router.navigate(['/']);
        }
        else{
          alert("Tài khoản ngưng hoạt động!");
          this.router.navigate(['/authentiation/login']);
        }
       }
      
    });
   
  }
}
