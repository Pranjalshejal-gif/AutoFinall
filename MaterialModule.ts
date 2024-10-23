import { NgModule } from "@angular/core";
import {MatInputModule} from "@angular/material/input"
import {MatAutocompleteModule} from "@angular/material/autocomplete"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatMenuModule} from "@angular/material/menu"
import {MatIconModule} from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button"
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatListModule} from "@angular/material/list"
import {MatCardModule} from "@angular/material/card"
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
// import { HomeComponent } from "./app/component/home/home.component";
// import { HeaderComponent } from "./app/header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app/app-routing.module";
// import { AppComponent } from "./app/app.component";
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
    exports:[
        MatInputModule,
        MatAutocompleteModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        // HomeComponent,
        // HeaderComponent,
        BrowserModule ,
        AppRoutingModule,
        // AppComponent
        MatTabsModule

        

        



    ]

})
export class MaterialModule{}