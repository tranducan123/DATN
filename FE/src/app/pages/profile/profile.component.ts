import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Department, User, UserRole } from 'src/app/core/model/db.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { DepartmentService } from 'src/app/core/services/department.service';
import { RoleService } from 'src/app/core/services/role.service';
import { UserService } from 'src/app/core/services/user.service';
import { UserRoleService } from 'src/app/core/services/userrole.service';
import { UserLogged } from 'src/app/core/utils/userLogged';
interface Status {
  value: number;
  viewValue: string;
}
interface Gender {
  value: boolean;
  viewValue: string;
}
@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
   public idUser: any;
   showChangePassword: boolean = false;
   passwords = {
    // oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
  
   public userStatus : boolean;
   public genderValue: boolean;
 
   stt: Gender[] = [
     { value: false, viewValue: 'Ngưng hoạt động' },
     { value: true, viewValue: 'Hoạt động' },
   ];
   gender: Gender[] = [
     { value: true, viewValue: 'Nam' },
     { value: false, viewValue: 'Nữ' },
   ];
   public userDetail = new User();
   public listDepart: Status[] = [];
   public listRole: Status[] = [];
   public departValue: number;
   public roleDetail : UserRole = new UserRole();
   public roleValue: number;
   public roleId : number;
   public userLogged = new UserLogged();
   constructor(
     private service: UserService,
     private serviceDepart: DepartmentService,
     private serviceRole: RoleService,
     private serviceUserRole : UserRoleService,
     private route: ActivatedRoute,
     private toastService : ToastrService,
     private router : Router,
     private customService  : AuthenticationService
   ) {
     this.idUser = this.userLogged.getCurrentUser().userId;
     this.serviceDepart.getAllDepartment().subscribe((data) => {
       this.listDepart = data.value.map((dept: Department) => ({
         value: dept.DepartmentId,
         viewValue: dept.DepartmentName,
       }));
     });
     this.serviceRole.getAllRole().subscribe((data) => {
       this.listRole = data.value.map((role: any) => ({
         value: role.RoleId,
         viewValue: role.RoleName,
       }));
     });
   }
   ngOnInit(): void {
     this.onGetData();
   }
   onGetData() {
     if (this.idUser) {
       this.service.getUserById(this.idUser).subscribe((data) => {
         this.userDetail = data.value[0];
         this.departValue = this.userDetail.DepartmentId;
         this.genderValue = this.userDetail.Gender;
         this.userStatus = this.userDetail.Status;
         this.roleValue = this.userDetail.UserRoles[0].RoleId;
       });
     }
   }
   onInputChangeRole(value:any){
     this.roleDetail.RoleId = value;
   }
   onInputChange(value: any, eventValue: any) {
     let valueReal = '';
     if (value == 'Status'|| value == 'Gender'|| value == 'DepartmentId') {
       valueReal = eventValue;
     } else {
       valueReal = eventValue.target.value;
     }
     const data = { ...this.userDetail, [value]: valueReal };
     this.userDetail = data;
   }
   onSubmit(){
     if(!this.idUser){
       this.userDetail.CreatedAt = new Date();
        this.service.CreateUser(this.userDetail).subscribe((data) => {
         let formData = {
           UserId: data.UserId,
           RoleId: this.roleDetail.RoleId
         }
         this.serviceUserRole.CreateUserRole(formData).subscribe((dataRole) => {
           this.toastService.success("Thêm mới thành công","Thành công");
           this.router.navigate(['/manager-users/user-detail'+ data.UserId]);
         })
        },(err) => {
         this.toastService.error("Tài khoản hoặc email đã tồn tại!","Thất bại");
        }
       )
     }
     if(this.idUser){
       this.service.UpdateUser(this.userDetail,this.idUser).subscribe((data) => {
         this.serviceUserRole.getAllUserRole().subscribe((dataRole) => {
           const x = dataRole.value.filter((role: any) => role.UserId == this.idUser);
           if(x.length > 0){
             let formData = {
               UserId: this.idUser,
               RoleId: this.roleDetail.RoleId
             }
             this.serviceUserRole.UpdateUserRole(formData,x[0].Id).subscribe((dataRole) => {
               this.toastService.success("Cập nhật thông tin người dùng","Thành công");
            
             })
           }
           else{
             let formData = {
               UserId: this.idUser,
               RoleId: this.roleDetail.RoleId
             }
             this.serviceUserRole.CreateUserRole(formData).subscribe((dataRole) => {
               this.toastService.success("Cập nhật thông tin người dùng","Thành công");
           
             })
           }
         })
       },(err) => {
         this.toastService.error("Tài khoản hoặc email đã tồn tại!","Thất bại");
        })
     }
   }
   onChangePassword(){
    if (this.passwords.newPassword !== this.passwords.confirmPassword) {
      alert('Mật khẩu mới và mật khẩu xác nhận không trùng khớp.');
      return;
    }
  
    if (this.passwords.newPassword === this.passwords.confirmPassword) {
      console.log(this.passwords);
    let formData = {
    UserId : this.idUser,
    Password : this.passwords.newPassword,
    }
    this.customService.ChangePassword(formData).subscribe((data) => {
      
    })
    } else {
      alert('Vui lòng điền đầy đủ thông tin mật khẩu.');
    }
   
   }
 }
 
