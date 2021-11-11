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
    { link: 'about', label: 'anms.card.promoIndividual', image:'assets/menu/promos_para_mi.png'},
    { link: 'about', label: 'anms.card.promoCompartir', image:'assets/menu/promo_para_compartir.png'},
    { link: 'about', label: 'anms.card.cafeteriaClasicos', image:'assets/menu/cafetería_nuestros_clásicos.png'},
    { link: 'about', label: 'anms.card.cafeteriaEspeciales', image:'assets/menu/cafeteria_nuestros_espeaciales.png'},
    { link: 'about', label: 'anms.card.jugos', image:'assets/menu/jugos_licuados.png'},
    { link: 'about', label: 'anms.card.batidos', image:'assets/menu/batidos_malteadas.png'},
    { link: 'about', label: 'anms.card.te', image:'assets/menu/te.png'},
    { link: 'about', label: 'anms.card.coldCoffee', image:'assets/menu/cold_coffee.png'},
    { link: 'about', label: 'anms.card.limonadas', image:'assets/menu/limonadas.png'},
    { link: 'about', label: 'anms.card.tortasPorcion', image:'assets/menu/tortas_por_porción.png'},
    { link: 'about', label: 'anms.card.tortasIndividuales', image:'assets/menu/tortas_individuales.png'},
    { link: 'about', label: 'anms.card.tentaciones', image:'assets/menu/mas_tentaciones.png'},
    { link: 'about', label: 'anms.card.panaderia', image:'assets/menu/medialunas_tortitas.png'},
    { link: 'about', label: 'anms.card.tostadas', image:'assets/menu/tostadas_tostados.png'},
    { link: 'about', label: 'anms.card.brunch', image:'assets/menu/brunch.png'},
    { link: 'about', label: 'anms.card.hotcakes', image:'assets/menu/hotcakes_pancakes.png'},
    { link: 'about', label: 'anms.card.yogourt', image:'assets/menu/yogourt.png'},
    { link: 'about', label: 'anms.card.frutas', image:'assets/menu/bowl_frutas.png'},
    { link: 'about', label: 'anms.card.huevos', image:'assets/menu/huevos_revueltos.png'},
    { link: 'about', label: 'anms.card.gaseosas', image:'assets/menu/gaseosas_cervezas.png'},
    { link: 'about', label: 'anms.card.freeTacc', image:'assets/menu/sin_tacc.png'},
    { link: 'about', label: 'anms.card.coffeeShop', image:'assets/menu/cofee_shop.png'}
  ];

  constructor() {}

  ngOnInit() {}
}
