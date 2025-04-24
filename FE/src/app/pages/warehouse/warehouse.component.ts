import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Warehouse } from 'src/app/core/model/db.model';
import { WarehouseService } from 'src/app/core/services/warehouse.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-warehouse',
  standalone: false,
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']  // Corrected to styleUrls
})
export class WarehouseComponent implements OnInit {
  public listWareHouse: Warehouse[] = [];
  readonly dialogEx = inject(MatDialog);
  displayedColumns: string[] = [
    'CreatedAt',
    'WarehouseId',
    'Status',
    'Billnumber',
    'Supplier',
    'WarehouseName',
    'CreatedBy',
    'action',
  ];

  constructor(private service: WarehouseService) {}
  dataSource = new MatTableDataSource<Warehouse>(this.listWareHouse);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void {
    this.onGetData();
  }

  onGetData(): void {
    this.service.getAllWarehouse().subscribe((data) => {
      this.listWareHouse = data.value; 
      this.dataSource = new MatTableDataSource<Warehouse>(this.listWareHouse);
      this.dataSource.paginator = this.paginator;
      console.log(this.listWareHouse);
    });
  }

  openDialogEx(): void {
    const dialogRef = this.dialogEx.open(DialogComponent, {
      height: "calc(100% - 30px)",
      width: "calc(100% - 30px)",
      maxWidth: "100%",
      maxHeight: "100%"
    });
  
    dialogRef.afterClosed().subscribe(result => {
    this.onGetData();
    });
  }
  openDialogExEdit(value: any): void {
    const dialogRef = this.dialogEx.open(DialogComponent, {
      height: "calc(100% - 30px)",
      width: "calc(100% - 30px)",
      maxWidth: "100%",
      maxHeight: "100%",
      data: {
        wareHoue : value as Warehouse
      }
    
    });
    dialogRef.afterClosed().subscribe(result => {
     this.onGetData();
    });
  }
  
  
}
