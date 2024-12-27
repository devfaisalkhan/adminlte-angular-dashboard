import { Component, OnInit } from '@angular/core';
import { ComponentsWithoutFormsModule } from '../../../components/components-without-forms.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content-wrapper',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './content-wrapper.component.html',
  styleUrl: './content-wrapper.component.scss'
})
export class ContentWrapperComponent {
  constructor() {}
}
