import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-haeder',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.scss'
})
export class MainNavbarComponent {
  constructor(
    private router: Router
  ) {
    
  }

  async onLogout() {
    localStorage.clear();
    await this.router.navigate(['/login'])

  }
}
