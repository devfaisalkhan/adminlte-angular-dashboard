import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IRole } from './role.model';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from '../../universal/app-constant';

@Injectable({
  providedIn: 'root',
})
export class RolesService {

  constructor(
    private http: HttpClient
  ) {

  }
  private rolesSubject = new BehaviorSubject<IRole[]>([
    { id: 1, name: 'Admin', description: 'Full access' , permissions: []},
    { id: 2, name: 'Editor', description: 'Can edit content', permissions: [] },
  ]);

  getRoles() {
    return this.http.get<any>(`${AppConstant.BASE_API_URL}/role/getAllRoles`);
  }

  getRoleById(id: string) {
    return this.http.get<any>(`${AppConstant.BASE_API_URL}/role/${id}`, );
  }

  addRole(role: IRole) {
    return this.http.post<any>(`${AppConstant.BASE_API_URL}/role/create`, role);
  }

  updateRole(updatedRole: IRole) {
    return this.http.post<any>(`${AppConstant.BASE_API_URL}/role/update`, updatedRole);
  }

  deleteRole(id: number) {
    const roles = this.rolesSubject.value.filter((role) => role.id !== id);
    this.rolesSubject.next(roles);
  }
}
