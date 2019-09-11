import { Component, OnInit, ViewChild } from '@angular/core';
import { PeriodicElement } from '../../DataModel/data-model';
import { MatTableDataSource } from '@angular/material';
import { DisplayDataService } from '../display-data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import jsonlist from '../../../assets/jsonwithobjarray.json';
import colorslist from '../../../assets/colors.json';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) matsort: MatSort;
  ELEMENT_DATA: any[] = [];
  JsonData: any[] = [];
  datasource: any;
  displayedColumns  = ['position', 'name', 'weight', 'symbol', 'action'];
  obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
  constructor(private ds: DisplayDataService) {    
    console.log(jsonlist); 
    console.log(colorslist.colors);
    for(var i in colorslist.colors){
      console.log(colorslist.colors[i]);
    }
  }
  
  ngOnInit() {   
     this.ds.getJsonData().subscribe(
      (data: any) => {        
        this.JsonData = data;
        this.datasource =  new MatTableDataSource(this.JsonData);
        this.datasource.paginator = this.paginator;
        this.datasource.sort = this.matsort;
      }
    );    
  }

}
