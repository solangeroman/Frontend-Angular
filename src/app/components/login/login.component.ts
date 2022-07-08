import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  closeResult: string = '';
  @ViewChild('content') block: ElementRef;
  @ViewChild(RegisterComponent) child: RegisterComponent; //hijo referenciado

  constructor(
    // private loginService: LoginService,
    private router: Router,
    private modalService: NgbModal // private commonsService: CommonsService, // private authService: AuthService
  ) {}

  miformulario = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
    
  });

  ngOnInit(): void {}

  sendLogin() {
    this.router.navigate(['profile']);
  }
  showRegister() {
    this.child.showPopupRegister();
  }

  public showPopupLogin() {
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
