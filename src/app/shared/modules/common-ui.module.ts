import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { A11yModule } from '@angular/cdk/a11y';
//20190309추가
import { FlexLayoutModule } from '@angular/flex-layout';
import * as m from '@angular/material';

export const modules = [
    CommonModule,
      FormsModule,
      ReactiveFormsModule,

      FlexLayoutModule,

      A11yModule,
      CdkTableModule,
      CdkTreeModule,
      DragDropModule,
      ScrollingModule,

      //materials
      m.MatAutocompleteModule,
      m.MatBadgeModule,
      m.MatBottomSheetModule,
      m.MatButtonModule,
      m.MatButtonToggleModule,
      m.MatCardModule,
      m.MatCheckboxModule,
      m.MatChipsModule,
      m.MatStepperModule,
      m.MatDatepickerModule,
      m.MatDialogModule,
      m.MatDividerModule,
      m.MatExpansionModule,
      m.MatGridListModule,
      m.MatIconModule,
      m.MatInputModule,
      m.MatListModule,
      m.MatMenuModule,
      m.MatNativeDateModule,
      m.MatPaginatorModule,
      m.MatProgressBarModule,
      m.MatProgressSpinnerModule,
      m.MatRadioModule,
      m.MatRippleModule,
      m.MatSelectModule,
      m.MatSidenavModule,
      m.MatSliderModule,
      m.MatSlideToggleModule,
      m.MatSnackBarModule,
      m.MatSortModule,
      m.MatTableModule,
      m.MatTabsModule,
      m.MatToolbarModule,
      m.MatTooltipModule,
      m.MatTreeModule
]