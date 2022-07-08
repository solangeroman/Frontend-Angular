import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  public data: any[];
  public toolbar: string[];
  public selectOptions: Object;
  public editSettings: Object;

  constructor() { }

  ngOnInit(): void {
    this.toolbar = ['Search'];
    this.selectOptions = { persistSelection: true };
    this.editSettings = { allowDeleting: true };
    this.data = [{ 'order': 14578, 'date': '2021/05/14', 'type': 'Compra', 'address': 'C/ Toledo 125, Madrid', 'price': 850 },
    { 'order': 46879, 'date': '2021/05/14', 'type': 'Curso', 'address': 'No aplicable', 'price': 350 },
    { 'order': 21364, 'date': '2021/05/12', 'type': 'Alquiler', 'address': 'No aplicable', 'price': 150 },
    { 'order': 45642, 'date': '2021/05/04', 'type': 'Compra', 'address': 'C/ Toledo 125, Madrid', 'price': 600 },
    { 'order': 45675, 'date': '2021/04/28', 'type': 'Curso', 'address': 'No aplicable', 'price': 50 },
    { 'order': 45675, 'date': '2021/04/20', 'type': 'Compra', 'address': 'C/ Toledo 125, Madrid', 'price': 850 },
    { 'order': 54526, 'date': '2021/04/15', 'type': 'Evento', 'address': 'No aplicable', 'price': 0 },
    { 'order': 52514, 'date': '2021/04/03', 'type': 'Alquiler', 'address': 'No aplicable', 'price': 50 },
    { 'order': 46231, 'date': '2021/03/26', 'type': 'Compra', 'address': 'C/ Toledo 125, Madrid', 'price': 80 },
    { 'order': 13246, 'date': '2021/03/06', 'type': 'Curso', 'address': 'No aplicable', 'price': 870 },
    { 'order': 16455, 'date': '2021/02/28', 'type': 'Alquiler', 'address': 'No aplicable', 'price': 20 },
    { 'order': 98746, 'date': '2021/02/06', 'type': 'Alquiler', 'address': 'No aplicable', 'price': 213 },
    { 'order': 47985, 'date': '2021/01/30', 'type': 'Evento', 'address': 'No aplicable', 'price': 0 },
    { 'order': 46598, 'date': '2020/12/14', 'type': 'Alquiler', 'address': 'No aplicable', 'price': 850 },
    { 'order': 79845, 'date': '2020/05/14', 'type': 'Evento', 'address': 'No aplicable', 'price': 0 },]

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });

    this._successPass.subscribe(messagePass => this.successMessagePass = messagePass);
    this._successPass.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlertPass) {
        this.selfClosingAlertPass.close();
      }
    });

  }

  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;
  @ViewChild('selfClosingAlertPass', {static: false}) selfClosingAlertPass: NgbAlert;

  staticAlertClosed = false;
  successMessage = '';

  staticAlertClosedPass = false;
  successMessagePass = '';

  private _success = new Subject<string>();
  private _successPass = new Subject<string>();

  public changeSuccessMessage() { 
    this._success.next(`${new Date()} - Message successfully changed.`); 
  }

  public changeSuccessMessagePass() { 
    this._successPass.next(`${new Date()} - Message successfully changed.`); 
  }

}
