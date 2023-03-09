import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpreadsheetRoutingModule } from './spreadsheet-routing.module';
import { SpreadsheetComponent } from './spreadsheet.component';
import { SpreadsheetTableComponent } from './components/spreadsheet-table/spreadsheet-table.component';
import { FileToolsComponent } from './components/file-tools/file-tools.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [
    SpreadsheetComponent,
    SpreadsheetTableComponent,
    FileToolsComponent,
    AppBarComponent
  ],
  imports: [
    CommonModule,
    SpreadsheetRoutingModule,
    ShareModule
  ]
})
export class SpreadsheetModule { }
