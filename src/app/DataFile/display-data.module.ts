import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';
import {
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
   } 
    from '@angular/material';
const routes: Routes = [
    {path: '', component: DisplayDataComponent}
];

@NgModule({
    declarations: [
        DisplayDataComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule
    ],
    exports: [
        RouterModule,
    ]
})

export class DisplayDataModule{

}