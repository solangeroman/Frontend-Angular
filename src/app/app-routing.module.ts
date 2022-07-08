import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AlquilerProductoComponent } from './components/alquiler-producto/alquiler-producto.component';
import { VentaComponent } from './components/venta/venta.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'alquiler', component: AlquilerComponent, pathMatch: 'full' },
  { path: 'producto', component: ProductoComponent, pathMatch: 'full' },
  { path: 'alquiler-producto', component: AlquilerProductoComponent, pathMatch: 'full' },
  { path: 'venta', component: VentaComponent, pathMatch: 'full' },
  { path: 'nosotros', component: NosotrosComponent, pathMatch: 'full' },
  { path: 'eventos', component: EventosComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'ignore',
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
