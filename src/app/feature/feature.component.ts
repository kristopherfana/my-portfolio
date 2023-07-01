import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements AfterViewInit {
  bgColor = false; // set the initial background color
  @ViewChild(FooterComponent, { read: ElementRef }) footerRef!: ElementRef<HTMLElement>;
  observer!: IntersectionObserver;

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7 // set the threshold to 10%
    };

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.bgColor = true;
          } else {
            this.bgColor = false;
          }
        });
      },
      options
    );

    this.observer.observe(this.footerRef.nativeElement);
  }
}
