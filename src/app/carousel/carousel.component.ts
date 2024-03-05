import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @ViewChild('carouselInner') carouselInner: ElementRef | undefined;
  carouselItems = [
    { imageSrc: '../../assets/ressources/images/1.jpg', alt: 'Développez votre entreprise avec Google Ads', title: 'Développez votre entreprise avec Google Ads', description: 'Apprenez à utiliser Google Ads pour développer votre entreprise et atteindre de nouveaux clients.' },
    { imageSrc: '../../assets/ressources/images/2.jpg', alt: 'Devenez un expert en JavaScript', title: 'Devenez un expert en JavaScript', description: 'Maîtrisez JavaScript et devenez un développeur Web professionnel en apprenant les concepts clés de ce langage de programmation.' },
    { imageSrc: '../../assets/ressources/images/3.jpg', alt: 'Excel : Analyse de données pour les décisions d\'affaires', title: 'Excel : Analyse de données pour les décisions d\'affaires', description: 'Apprenez à utiliser Excel pour l\'analyse de données et la prise de décision d\'affaires.' }
  ];

  slideIndex = 0;
  interval: any;

  ngAfterViewInit() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  nextSlide() {
    this.slideIndex = (this.slideIndex + 1) % this.carouselItems.length;
    this.scrollToSlide();
  }

  prevSlide() {
    this.slideIndex = (this.slideIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
    this.scrollToSlide();
  }

  scrollToSlide() {
    if (this.carouselInner) {
      const carouselWidth = this.carouselInner.nativeElement.offsetWidth;
      this.carouselInner.nativeElement.style.transform = `translateX(-${carouselWidth * this.slideIndex}px)`;
    }
  }
}
