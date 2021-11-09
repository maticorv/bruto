import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

@Component({
  selector: 'anms-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  releaseButler = 'assets/release-butler.png';
  navigation = [
    { link: 'about', label: 'anms.card.promoIndividual' },
    { link: 'about', label: 'anms.card.promoCompartir' },
    { link: 'about', label: 'anms.card.cafeteriaClasicos' },
    { link: 'about', label: 'anms.card.cafeteriaEspeciales' },
    { link: 'about', label: 'anms.card.jugos' },
    { link: 'about', label: 'anms.card.batidos' },
    { link: 'about', label: 'anms.card.te' },
    { link: 'about', label: 'anms.card.coldCoffee' },
    { link: 'about', label: 'anms.card.limonadas' },
    { link: 'about', label: 'anms.card.tortasPorcion' },
    { link: 'about', label: 'anms.card.tortasIndividuales' },
    { link: 'about', label: 'anms.card.tentaciones' },
    { link: 'about', label: 'anms.card.panaderia' },
    { link: 'about', label: 'anms.card.tostadas' },
    { link: 'about', label: 'anms.card.brunch' },
    { link: 'about', label: 'anms.card.hotcakes' },
    { link: 'about', label: 'anms.card.yogourt' },
    { link: 'about', label: 'anms.card.frutas' },
    { link: 'about', label: 'anms.card.huevos' },
    { link: 'about', label: 'anms.card.gaseosas' },
    { link: 'about', label: 'anms.card.freeTacc' },
    { link: 'about', label: 'anms.card.coffeeShop' }
  ];

  constructor() {}

  ngOnInit() {}
}
