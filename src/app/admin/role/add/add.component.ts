import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ComponentsWithFormsModule } from '../../../components/components-with-forms.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolesService } from '../roles.service';
import { ActivatedRoute } from '@angular/router';

declare var $:any;  
@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ComponentsWithFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent implements AfterViewInit, OnInit {
  isEdit = false;
  formGroup: FormGroup;
  roleId: string = '';
  permissions = ['Create', 'Read', 'Update', 'Delete'];
  constructor(
    private fb: FormBuilder,
    private roleSvc: RolesService,
    private route: ActivatedRoute,

  ) {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
      permissions: ['', [Validators.required]]  
    });

  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.roleId = <string>params.get('id');
      this.isEdit = !!this.roleId; // If ID exists, it's edit mode
      
      if (this.roleId) {
        this.roleSvc.getRoleById(this.roleId).subscribe((role) => {
          this.formGroup.patchValue(role);
          const select2Element = $('.select2');
          select2Element.val(role.permissions).trigger('change');
        });
      }
    });
  }

  ngAfterViewInit(): void {
    //select2 natively doesnt support reactive forms
    $('.select2').select2().on('change', (e: any) => {
      const selectedPermissions = $(e.target).val();
      this.formGroup.get('permissions')?.setValue(selectedPermissions);
    });
    
  }

  saveRole(data: any) {
    if(this.isEdit) {
      data.id = this.roleId;
      this.roleSvc.updateRole(data).subscribe(() => {
        this.formGroup.reset();
      });
      return;
    } else {
      this.roleSvc.addRole(data).subscribe(() => {
        console.log('Role added successfully');
        this.formGroup.reset();

      });
    }
  
  }
}
