import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../navbar/navbar";
import { Header } from "../header/header";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Navbar, Header],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
