import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourcesViewComponent } from './resource/resources-view/resources-view.component';
import { ResourceLineComponent } from './resource/resource-line/resource-line.component';
import { TileComponent } from './map-container/tile/tile.component';
import { AddImprovementDialogComponent } from './map-container/add-improvement-dialog/add-improvement-dialog.component';
import { EditImprovementDialogComponent } from './map-container/edit-improvement-dialog/edit-improvement-dialog.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ResourcesViewComponent,
    ResourceLineComponent,
    TileComponent,
    AddImprovementDialogComponent,
    EditImprovementDialogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
