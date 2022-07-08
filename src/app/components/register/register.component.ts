import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  closeResult: string = '';
  @ViewChild('content') block: ElementRef;
  constructor(private modalService: NgbModal) {}

  miformulario = new FormGroup({
    username : new FormControl('', Validators.required),
    email : new FormControl('', Validators.email),
    password : new FormControl('', Validators.required),
    password2 : new FormControl('', Validators.required)
    
  });


  ngOnInit(): void {}

  public showPopupRegister() {
    this.modalService
      .open(this.block, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
