import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './component/home/home.component';
import { ToolsUsedComponent } from './tools-used/tools-used.component';
import { RolesInvolvedComponent } from './roles-involved/roles-involved.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { TesterComponent } from './tester/tester.component';
import { BAComponent } from './ba/ba.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'autocomplete',component:AutocompleteComponent},
  {path:'input',component:InputComponent},
  {path:'',component:HomeComponent},
  {path:'Tools-used',component:ToolsUsedComponent},
  {path:'roles',component:RolesInvolvedComponent},
  {path:'menu-bar',component:MenubarComponent},
  {path:'tester',component:TesterComponent},
  {path:'BA',component:BAComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
