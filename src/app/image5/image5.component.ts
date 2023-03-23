import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-image5',
  templateUrl: './image5.component.html',
  styleUrls: ['./image5.component.css']
})
export class Image5Component {
  slides = [
    { img: 'https://firebasestorage.googleapis.com/v0/b/real-time-images-teste.appspot.com/o/img.png?alt=media&token=e55ec631-e750-49e9-841e-3a7dbb2512f9' },
    { img: 'https://firebasestorage.googleapis.com/v0/b/real-time-images-teste.appspot.com/o/img.png?alt=media&token=e55ec631-e750-49e9-841e-3a7dbb2512f9' },
    { img: 'https://firebasestorage.googleapis.com/v0/b/real-time-images-teste.appspot.com/o/img.png?alt=media&token=e55ec631-e750-49e9-841e-3a7dbb2512f9' },
    { img: 'https://firebasestorage.googleapis.com/v0/b/real-time-images-teste.appspot.com/o/img.png?alt=media&token=e55ec631-e750-49e9-841e-3a7dbb2512f9' },
    { img: 'https://firebasestorage.googleapis.com/v0/b/real-time-images-teste.appspot.com/o/img.png?alt=media&token=e55ec631-e750-49e9-841e-3a7dbb2512f9' },
  ];
  slideConfig = { slidesToShow: 3, 
    slidesToScroll: 1, 
    centerMode: true, 
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    focusOnSelect: true,
    useTransform: true,
    adaptiveHeight: true,
    acessibillity: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };
  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  constructor() {}
  ngOnInit(): void {}
}
