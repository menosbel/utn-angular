import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbar = "navbar";
  navbarItems = [
    {
    name: 'Inicio',
    class: 'navbar-item',
    link: '/',
    },
    {
    name: 'Registro',
    class: 'navbar-item',
    link: '/registro',
    },
    {
    name: 'Login',
    class: 'navbar-item',
    link: '/login',
    }
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
