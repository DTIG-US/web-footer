import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as siteData from '../../data.json';

@Component({
  selector: 'app-footer',
  standalone: true as boolean,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerData: any = (siteData as any).default;
}

