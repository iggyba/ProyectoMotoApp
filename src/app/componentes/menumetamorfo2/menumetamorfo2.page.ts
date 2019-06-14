import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menumetamorfo2',
  templateUrl: './menumetamorfo2.page.html',
  styleUrls: ['./menumetamorfo2.page.scss'],
})
export class Menumetamorfo2Page implements OnInit {

  constructor(public router : Router) { }
  tituloproyecto: string;
  descripcion: string;
  public isToggled: boolean;
  ngOnInit() {
  }

  volver(){
    this.router.navigate(['/menumetamorfo']);
  }
}
