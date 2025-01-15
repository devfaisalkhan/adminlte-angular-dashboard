import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-main-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-sidebar.component.html',
  styleUrl: './main-sidebar.component.scss'
})
export class MainSidebarComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    setTimeout(() => {
      $('[data-widget="treeview"]').Treeview('init');
    }, 0);
  }
}
