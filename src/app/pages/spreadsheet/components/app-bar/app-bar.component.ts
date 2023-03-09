import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedMenuIndex = 0;
  menuItems = [
    { name: 'File', icon: 'description' },
    { name: 'Insert', icon: 'design_services' },
    { name: 'Format', icon: 'format_size' },
    { name: 'Data', icon: 'database' },
    { name: 'Sharing', icon: 'share' },
    { name: 'Setting', icon: 'settings' },
  ]

  selectMenu(index: number) {
    this.selectedMenuIndex = index;
  }

}
