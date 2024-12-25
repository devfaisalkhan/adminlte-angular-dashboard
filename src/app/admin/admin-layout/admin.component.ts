import { Component } from '@angular/core';
import { ContentWrapperComponent } from '../components/content-wrapper/content-wrapper.component';
import { MainFooterComponent } from '../components/main-footer/main-footer.component';
import { MainNavbarComponent } from '../components/main-navbar/main-navbar.component';
import { MainSidebarComponent } from '../components/main-sidebar/main-sidebar.component';
import { ControlSidebarComponent } from '../components/control-sidebar/control-sidebar.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ContentWrapperComponent, MainSidebarComponent, MainNavbarComponent, MainFooterComponent, ControlSidebarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
