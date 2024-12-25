import { Component, OnInit } from '@angular/core';
import { ComponentsWithoutFormsModule } from '../../../components/components-without-forms.module';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RolesService } from '../roles.service';
import { IRole } from '../role.model';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [ComponentsWithoutFormsModule, RouterLink],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent implements OnInit {
  roles: IRole[] = [];
  constructor(
    private roleSvc: RolesService,
  ) { }

  ngOnInit(): void {
    this._getAllRoles();
  }

  private _getAllRoles() {
    this.roleSvc.getRoles().subscribe((res) => {
      console.log(res);
      
      this.roles = res.data;
      console.log(this.roles);
    });
  }

}
