import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFolderDialogComponent } from '../add-folder-dialog/add-folder-dialog.component';

export interface Section {
  name: string;
  updated: Date;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  tops: Section[] = [
    {
      name: 'Home',
      updated: new Date('1/1/16'),
      icon: 'home'
    },
    {
      name: 'For You',
      updated: new Date('1/17/16'),
      icon: 'auto_awesome'
    },
  ];
  mids: Section[] = [
    {
      name: 'My Spreadsheet',
      updated: new Date('2/20/16'),
      icon: 'folder'
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
      icon: 'folder'
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
      icon: 'folder'
    },
  ];
  bots: Section[] = [
    {
      name: 'Upgrade Now',
      updated: new Date('1/1/16'),
      icon: 'upgrade'
    },
    {
      name: 'Settings',
      updated: new Date('1/17/16'),
      icon: 'settings'
    },
  ];

  openDialog() {
    this.dialog.open(AddFolderDialogComponent, {
      width: '640px',
      height: '650px',
      panelClass: 'bg-color' // Add your custom panel class

    });
  }

}
