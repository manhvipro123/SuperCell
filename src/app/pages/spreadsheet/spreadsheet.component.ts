import { Component, OnInit } from '@angular/core';
import { Cell } from 'src/app/models/cell.model';
import { FxService } from 'src/app/services/fx.service';

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.scss']
})
export class SpreadsheetComponent implements OnInit {
  currentCell: Cell = <Cell>{};

  constructor(private fxService: FxService) {
    this.fxService.interpret('=1+2');
  }

  ngOnInit(): void {
  }



}
