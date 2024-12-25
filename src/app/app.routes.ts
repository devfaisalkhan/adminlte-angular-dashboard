import { Routes } from '@angular/router';
import { ADMIN_ROUTES } from './admin/admin.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full'    
    },
    {
        path: '',
        children: ADMIN_ROUTES
    }
];
