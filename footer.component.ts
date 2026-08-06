import { Component } from '@angular/core';
import * as siteData from '../../data.json';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  footerData: any = (siteData as any).default;
}
