import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutWithSidebarComponent } from './layout-with-sidebar/layout-with-sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    LayoutWithSidebarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [LayoutWithSidebarComponent]
})
export class LayoutModule { }
