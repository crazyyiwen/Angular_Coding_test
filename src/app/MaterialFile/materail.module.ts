import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule, 
        MatToolbarModule, 
        MatIconModule,
        MatButtonModule,
        MatTableModule
       } 
        from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule
    ]

})

export class MaterialModule{

}