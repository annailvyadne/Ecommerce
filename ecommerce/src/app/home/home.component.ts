import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles: [
    `@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css');`,
  ],
})
export class HomeComponent {
  testimonials = [
    {
      name: 'Anna Romero',
      subtitle: 'Recommended on PrintParadise',
      message:
        'I’ve been using the website and it’s so good, it achieves my expectations and it performs outstanding. It will be useful for business owners like me who had business that grew 2x in just less than 4 months because of the digi-prints. I recommend this site so much!',
      date: 'August 30, 2024',
      rating: 5,
      imageUrl: 'assets/images/customer-1.jpg',
    },
    {
      name: 'Juan Dela Cruz',
      subtitle: 'Customer on PrintParadise',
      message:
        'The print quality and turnaround time were excellent. Highly recommend their services for anyone looking to make a good impression with custom prints. I THINK I JUST FOUND A ONE OF THE OUTSTANDING WEBSITE OUT THERE! The website is so unique and open for everyone.',
      date: 'September 5, 2024',
      rating: 5,
      imageUrl: 'assets/images/customer-2.jpg',
    },
    {
      name: 'Sarah Lopez',
      subtitle: 'Happy Client',
      message:
        'Great experience with this company. Their customer service is unmatched and they really go the extra mile to meet your needs. I hope for more sprouts to this business! The products were actually for general customers and it is helpful for us resellers of gitial products too.',
      date: 'September 10, 2024',
      rating: 5,
      imageUrl: 'assets/images/customer-3.jpg',
    },
  ];

  activeIndex = 0;

  prevTestimonial() {
    this.activeIndex =
      this.activeIndex === 0 ? this.testimonials.length - 1 : this.activeIndex - 1;
  }

  nextTestimonial() {
    this.activeIndex =
      this.activeIndex === this.testimonials.length - 1 ? 0 : this.activeIndex + 1;
  }
}
