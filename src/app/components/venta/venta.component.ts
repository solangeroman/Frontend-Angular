import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VentaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
