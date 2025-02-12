import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddImprovementDialogComponent } from './map-container/add-improvement-dialog/add-improvement-dialog.component';
import { EditImprovementDialogComponent } from './map-container/edit-improvement-dialog/edit-improvement-dialog.component';
import { ResourcesViewComponent } from './resource/resources-view/resources-view.component';
import { TileComponent } from './map-container/tile/tile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: TileComponent,
  },
  {
    path: 'add-dialog/:id',
    component: AddImprovementDialogComponent,
  },
  {
    path: 'edit-dialog/:id',
    component: EditImprovementDialogComponent,
  },
  { path: 'resource', component: ResourcesViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
