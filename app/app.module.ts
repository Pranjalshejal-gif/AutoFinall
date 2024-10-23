import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import{MaterialModule} from 'src/MaterialModule';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { HomeComponent } from './component/home/home.component';
import { ToolsUsedComponent } from './tools-used/tools-used.component';
import { RolesInvolvedComponent } from './roles-involved/roles-involved.component';
import { HeaderComponent } from './header/header.component';
import { TesterComponent } from './tester/tester.component';
import { BAComponent } from './ba/ba.component'
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AutocompleteComponent,
    MenubarComponent,
    HomeComponent,
    ToolsUsedComponent,
    RolesInvolvedComponent,
    HeaderComponent,
    TesterComponent,
    BAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
