import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen = false;
  @Output() newToggleEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  openToggle() {
    if(this.isOpen) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }
    // console.log('clickToggle');
    this.newToggleEvent.emit(this.isOpen);
  }

}
