import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolderTableComponent } from './components/folder-table/folder-table.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: FolderTableComponent,
      },
    ],
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
