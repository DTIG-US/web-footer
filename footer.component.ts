import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as siteData from '../../data.json';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  footerData: any = (siteData as any).default;
}
