import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, AfterContentChecked, HostListener, Renderer2 } from '@angular/core';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BackgroundService } from 'src/app/shared/Services/background.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, AfterContentChecked {

  constructor(private backgroundService: BackgroundService, private elementRef: ElementRef, private renderer: Renderer2) {
    this.backgroundService = backgroundService;
  }
  title!: string;
  titles: string[] = [];

  @ViewChild('weatherly', { static: true }) weatherly!: ElementRef;
  observer!: IntersectionObserver;
  @ViewChild('contactMe', { static: true }) contactMe!: ElementRef;
  observer1!: IntersectionObserver;
  @ViewChild('claytonBooking', { static: true }) claytonBooking!: ElementRef;
  observer2!: IntersectionObserver;
  @ViewChild('titlesScroll', { static: true }) titlesScroll!: ElementRef;
  observer3!: IntersectionObserver;



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
    this.titles = ['Front-end Developer.', 'Fullstack Developer.', 'Back-end Developer.'];
    this.updateTitle();
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: this.claytonBooking.nativeElement,
          immediateRender: false,
          start: '60% center',
          end: '170% center',
          scrub: true,
        }
      }
    );
    let tl2 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: this.claytonBooking.nativeElement,
          start: '80% center',
          end: '190% center',
          scrub: true,
        }
      }
    );
    let tl3 = gsap.timeline({});
    let tl4 = gsap.timeline({});


    tl2.to('.title1', {
      xPercent: 50
    });
    tl3.to('.title', {
      xPercent: -30,
      yoyo: true,
      duration: 10,
      repeat: -1,
      immediateRender: false
    })
    tl4.to('.title1', {
      xPercent: 30,
      yoyo: true,
      duration: 10,
      repeat: -1,
      immediateRender: false
    })
    tl.to('.title', {
      xPercent: -50,
    });

    ScrollTrigger.addEventListener("scrollStart",
      () => {
        console.log("Killed")
        tl3.pause();
        tl4.pause();
      }
    );
    ScrollTrigger.addEventListener("scrollEnd",
      () => {
        console.log("Revived")
        tl3.resume();
        tl4.resume();
      }
    );
  }

  updateTitle() {
    let index = 0;
    setInterval(() => {
      this.title = this.titles[index];
      index = (index + 1) % this.titles.length;
    }, 3000); // Change title every 5 seconds
  }

  ngAfterContentChecked(): void {

  }
}
