import { Component } from '@angular/core';
import { BackgroundService } from '../shared/Services/background.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent {
  bgColorValue: string | undefined;

  constructor(private backgroundService: BackgroundService) { }

  bgColor$ = this.backgroundService.getBgColorByValue().subscribe(value => this.bgColorValue = value);
  ngOnInit() {
  }

}
