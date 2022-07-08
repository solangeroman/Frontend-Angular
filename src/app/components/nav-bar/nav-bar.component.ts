import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from 'src/app/components/login/login.component';
import { CarritoComponent } from 'src/app/components/carrito/carrito.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @ViewChild(LoginComponent) child: LoginComponent;
  @ViewChild(CarritoComponent) child2: CarritoComponent;

  constructor() {}

  ngOnInit(): void {}

  showLogin() {
    this.child.showPopupLogin();
  }

  showCarrito() {
    this.child2.showPopupCarrito();
  }
}
