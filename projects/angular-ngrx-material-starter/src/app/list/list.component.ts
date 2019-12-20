import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];
const ELEMENT_DATA1: PeriodicElement[] = [
  { position: 1, name: 'Hydydfgrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helsdfsium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithsdfium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Bersdfyllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Bosdfsron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Cadfdrbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitdfsrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxdfsygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fludfsorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Nedfon', weight: 20.1797, symbol: 'Ne' }
];
@Component({
  selector: 'anms-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay: string[] = [
    'select',
    'name',
    'weight',
    'symbol',
    'position'
  ];
  // columnsToDisplay: string[] = this.displayedColumns.slice();
  data: MatTableDataSource<PeriodicElement>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  selection = new SelectionModel<PeriodicElement>(true, []);
  constructor() {
    this.data = new MatTableDataSource(ELEMENT_DATA);
  }

  ngOnInit() {
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;
  }
  addColumn() {
    this.data = new MatTableDataSource(ELEMENT_DATA1);
    this.data.sort = this.sort;
  }
  removeColumn() {
    this.data = new MatTableDataSource(ELEMENT_DATA);
    this.data.sort = this.sort;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.data.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${
      this.selection.isSelected(row) ? 'deselect' : 'select'
    } row ${row.position + 1}`;
  }
}
