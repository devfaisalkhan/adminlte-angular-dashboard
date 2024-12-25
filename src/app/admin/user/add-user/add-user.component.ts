import { Component, OnInit } from '@angular/core';
import { ComponentsWithFormsModule } from '../../../components/components-with-forms.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../pages/auth/auth.service';
import { HelperService } from '../../../universal/helper.service';
import { HttpStatus } from '../../../universal/shared.model';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ComponentsWithFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent implements OnInit{
  formGroup: FormGroup;
  isUpdate: boolean = false;
  constructor(
    private fb: FormBuilder,
    private helperSvc: HelperService,
    private authSvc: AuthService,
  ) {
    this.formGroup = this.fb.group({
      email: ['dev.faisalK@gmail.com', [Validators.required, Validators.email]],
      password: ['password', Validators.required],
      name: ['password', Validators.required],
      roles: ['password', Validators.required],
    });
  }
  ngOnInit(): void {
    // if (this.) {
    //   this.isUpdate = true;
    //   this.formGroup.patchValue(this.userData);
    // }
  
  }


  onFormSubmitted(data: any) {
    this.helperSvc.presentLoader("Registering user");
    this.authSvc.register(data).subscribe(
      (resp) => {
        this.helperSvc.dismissLoader();
        if(resp.status == HttpStatus.OK) {
          this.helperSvc.presentAlert(resp.message, 'success')
        } else {
          this.helperSvc.presentAlert(resp.message, 'info')
        }
      },
      (error: HttpErrorResponse) => {
        this.helperSvc.dismissLoader();
        const errorMessage = error.error?.message || 'An unknown error occurred';
        this.helperSvc.presentAlert(errorMessage , 'error')
      }
    )
  }

  generateRandomPassword() {
    const length = Math.floor(Math.random() * (12 - 8 + 1)) + 8;  // Random length between 8 and 12
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';

    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    return password;
  }
}
