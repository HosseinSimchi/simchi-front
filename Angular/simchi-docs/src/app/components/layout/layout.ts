import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../header/header";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Header, NavbarComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  isSidebarOpen = true;

  onSidebarToggle(isOpen: boolean) {
    this.isSidebarOpen = isOpen;
    // Optional: Save to localStorage
    localStorage.setItem('sidebarState', JSON.stringify(isOpen));
  }

  ngOnInit() {
    // Restore sidebar state if needed
    const savedState = localStorage.getItem('sidebarState');
    if (savedState) {
      this.isSidebarOpen = JSON.parse(savedState);
    }
  }
}
