import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private userService:UsersService) {
    this._login();
  }

  ngOnInit(): void {
  }

  login(form): void {

    console.log('🚀 ~ file: login.component.ts ~ line 21 ~ LoginComponent ~ login ~ form', form);
  }

  private _login(): void {
    this.loginForm = this.fb.group(
      {
        adminName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        password: ['', [Validators.required]],
        rememberMe: ['']
      }
    );
  }

  get nameError(): string {
    const name = this.loginForm.get('adminName');
    return name.hasError('required')
      ? 'هــذا الحقل مطـلـوب'
      : name.hasError('pattern')
        ? 'الاســم لابــد أن يكــون حـروف فقــط'
        : 'بلــلغ القســم المختــص';
  }


  get passError(): string {
    const pass = this.loginForm.get('password');
    return pass.hasError('required')
      ? 'أدخــل كلمــة المرور'
      : (pass.value !== 2222002)
        ? 'كلمــة المرور خطــأ'
        : 'بلــلغ القســم المختــص';
  }

}
