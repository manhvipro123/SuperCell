import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface Spreadsheet {
  name: string;
  created_At: number;
  updated_At: number;
  position: number;
}

const ELEMENT_DATA: Spreadsheet[] = [
  { position: 1, name: 'Untitled Spreadsheet 1', created_At: 3213213, updated_At: 3213121 },
  { position: 2, name: 'Untitled Spreadsheet 2', created_At: 3213213, updated_At: 3213121 },
  { position: 3, name: 'Untitled Spreadsheet 3', created_At: 3213213, updated_At: 3213121 },
  { position: 4, name: 'Untitled Spreadsheet 4', created_At: 3213213, updated_At: 3213121 },
  { position: 5, name: 'Untitled Spreadsheet 5', created_At: 3213213, updated_At: 3213121 },
  { position: 6, name: 'Untitled Spreadsheet 6', created_At: 3213213, updated_At: 3213121 },
];
@Component({
  selector: 'app-folder-table',
  templateUrl: './folder-table.component.html',
  styleUrls: ['./folder-table.component.scss']
})
export class FolderTableComponent implements OnInit {
  isOptional = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['name', 'updated_At', 'optional'];
  dataSource = new MatTableDataSource<Spreadsheet>(ELEMENT_DATA);
  selection = new SelectionModel<Spreadsheet>(true, []);

  // /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // toggleAllRows() {
  //   if (this.isAllSelected()) {
  //     this.selection.clear();
  //     return;
  //   }

  //   this.selection.select(...this.dataSource.data);
  // }

  /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: Spreadsheet): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  // }

  openOptional() {
    if (this.isOptional) {
      this.isOptional = false;
      console.log(this.isOptional);
    } else {
      this.isOptional = true;
      console.log(this.isOptional);

    }
  }

  openSheet(row: any) {
    this.router.navigateByUrl('spreadsheet');
  }




}
