import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BackgroundService } from 'src/app/shared/Services/background.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private backgroundService: BackgroundService) {
    this.backgroundService = backgroundService;
  }
  title!: string;
  titles: string[] = ['Front-end Developer.', 'Fullstack Developer.', 'Back-end Developer.'];

  @ViewChild('weatherly', { static: true }) weatherly!: ElementRef;
  observer!: IntersectionObserver;
  @ViewChild('contactMe', { static: true }) contactMe!: ElementRef;
  observer1!: IntersectionObserver;
  @ViewChild('claytonBooking', { static: true }) claytonBooking!: ElementRef;
  observer2!: IntersectionObserver;



  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.65 // set the threshold to 10%
    };

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log("Weatherly");
            this.backgroundService.setBgColor("orange");
          } else {
            this.backgroundService.setBgColor("");
          }
        });
      },
      options
    );

    this.observer.observe(this.weatherly.nativeElement);

    this.observer1 = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log("Contact Me");
            this.backgroundService.setBgColor("purple");
          } else {
            this.backgroundService.setBgColor("");
          }
        });
      },
      options
    );

    this.observer1.observe(this.contactMe.nativeElement);
    this.observer2 = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log("Clayton");
            this.backgroundService.setBgColor("black");
          } else {
            this.backgroundService.setBgColor("");
          }
        });
      },
      options
    );

    this.observer2.observe(this.claytonBooking.nativeElement);
  }


  ngOnInit() {
    this.updateTitle();
  }

  updateTitle() {
    let index = 0;
    setInterval(() => {
      this.title = this.titles[index];
      index = (index + 1) % this.titles.length;
    }, 3000); // Change title every 5 seconds
  }
}
