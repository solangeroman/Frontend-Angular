import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource, NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-alquiler-producto',
  templateUrl: './alquiler-producto.component.html',
  styleUrls: ['./alquiler-producto.component.scss']
})
export class AlquilerProductoComponent implements OnInit {
  constructor() {}

  miformulario = new FormGroup({
    username : new FormControl('', Validators.email),
    userdate : new FormControl('', Validators.required),
    usernumber : new FormControl('', Validators.required)
    
  });

  ngOnInit(): void {

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }


  images = ["../../../assets/images/81U7zKn3htL._AC_SL1500_.jpg", 
    "../../../assets/images/HP3C2_CUT.jpg"]

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  staticAlertClosed = false;
  successMessage = '';

  private _success = new Subject<string>();

  public changeSuccessMessage() { 
    this._success.next(`${new Date()} - Message successfully changed.`); 
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}

