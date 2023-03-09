import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShareModule } from 'src/app/share/share.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FolderTableComponent } from './components/folder-table/folder-table.component';
import { AddFolderDialogComponent } from './components/add-folder-dialog/add-folder-dialog.component';


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    SidebarComponent,
    FolderTableComponent,
    AddFolderDialogComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ShareModule
  ]
})
export class MainModule { }
