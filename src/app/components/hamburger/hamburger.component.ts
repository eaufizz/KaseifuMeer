import { Component } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrl: './hamburger.component.scss',
  standalone: false,
})
export class HamburgerComponent {
  isOpened: boolean = false;

  onClickHamburger(): void {
    this.isOpened = !this.isOpened
  }
  onClickAddHW(): void {
    // this.isOpened = 
  }
}
