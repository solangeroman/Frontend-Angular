import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { VentaComponent } from './components/venta/venta.component';
import { ImagenDronComponent } from './components/imagen-dron/imagen-dron.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { SwiperModule } from 'swiper/angular';
import { AlquilerProductoComponent } from './components/alquiler-producto/alquiler-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProductoComponent,
    AlquilerComponent,
    VentaComponent,
    ImagenDronComponent,
    CarritoComponent,
    NosotrosComponent,
    EventosComponent,
    ProfileComponent,
    AlquilerProductoComponent,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MdbModule,
    GridAllModule,
    ToolbarModule,
    CheckBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
