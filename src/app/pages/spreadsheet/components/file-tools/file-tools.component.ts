import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cell } from 'src/app/models/cell.model';
import { SheetState } from 'src/app/states/sheet.state';

@Component({
  selector: 'app-file-tools',
  templateUrl: './file-tools.component.html',
  styleUrls: ['./file-tools.component.scss']
})
export class FileToolsComponent implements OnInit {
  @Input('currentCell') currentCell: Cell = <Cell>{};
  constructor(private store: Store<{ sheet: SheetState }>) { }

  ngOnInit(): void {
  }

}
