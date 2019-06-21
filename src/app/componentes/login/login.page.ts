import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {




  constructor(private auhtService: AuthService, public router: Router) { }

  email: string;
  password: string;
  passwordType: string = 'password';
  passwordShown: boolean = false;

  ngOnInit() {
  }

  logear() {

    this.auhtService.login(this.email, this.password).then(res => {
      this.router.navigate(['/datos']);
      this.email = "";
      this.password = "";

    }).catch(err => {
      alert("Los datos introducidos fueron incorrectos");
      this.email = "";
      this.password = "";
    })
  }

  
  public verPassword() {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
    } else {
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }
 


}
