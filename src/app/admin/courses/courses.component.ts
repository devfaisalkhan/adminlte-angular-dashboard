import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComponentsWithFormsModule } from '../../components/components-with-forms.module';
import { HelperService } from '../../universal/helper.service';
import { AuthService } from '../../pages/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpStatus } from '../../universal/shared.model';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [ComponentsWithFormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  formGroup: FormGroup;
  isUpdate: boolean = false;
  users: any[] = [];
  constructor(
        private fb: FormBuilder,
        private helperSvc: HelperService,
            private authSvc: AuthService,
        
    
  ) {
        this.formGroup = this.fb.group({
          title: ['Maths', Validators.required],
        });
    
  }
  ngOnInit(): void {

      this._getAllUsers();

  }

  onFormSubmitted(data: any) {
  
  }


    private async _getAllUsers() {
      this.authSvc.getAllUsers().subscribe(
          (resp: any) => {
            if(resp.status == HttpStatus.OK) {
              this.users = resp.data;
               this.users.forEach(user => {
              });
              
              // this.helperSvc.presentAlert(resp.message, 'success')
            } else {
              // this.helperSvc.presentAlert(resp.message, 'info')
            }
          },
          (error: HttpErrorResponse) => {
            // this.helperSvc.dismissLoader();
            const errorMessage = error.error?.message || 'An unknown error occurred';
            // this.helperSvc.presentAlert(errorMessage , 'error')
          }
        )
    }


}
