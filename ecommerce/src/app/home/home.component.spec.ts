import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  testimonials = [
    {
      name: 'Anna Romero',
      subtitle: 'Recommended on PrintParadise',
      rating: 4,
      date: 'August 30, 2024',
      message: `I’ve been using the website and it’s so good, it achieves my expectations...`,
      imageUrl: 'assets/images/customer-1.jpg',
    },
    {
      name: 'Carlos Mendoza',
      subtitle: 'Reviewed on TechieGuide',
      rating: 5,
      date: 'September 10, 2024',
      message: `Absolutely fantastic service! The website provided a seamless experience...`,
      imageUrl: 'assets/images/customer-2.jpg',
    },
    {
      name: 'Sophia Lavigne',
      subtitle: 'Recommended on WebBoosters',
      rating: 4,
      date: 'August 5, 2024',
      message: `Very professional and easy to work with. The website design met my expectations...`,
      imageUrl: 'assets/images/customer-3.jpg',
    },
  ];

  activeIndex = 0;

  nextTestimonial() {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
