import { Component } from '@angular/core';
import { ContentWrapperComponent } from '../components/content-wrapper/content-wrapper.component';
import { MainFooterComponent } from '../components/main-footer/main-footer.component';
import { MainNavbarComponent } from '../components/main-navbar/main-navbar.component';
import { MainSidebarComponent } from '../components/main-sidebar/main-sidebar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, ContentWrapperComponent, MainSidebarComponent, MainNavbarComponent, MainFooterComponent, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(
  ) {
    
  }
 
}
