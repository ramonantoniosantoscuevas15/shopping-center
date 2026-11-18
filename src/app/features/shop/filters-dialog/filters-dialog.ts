import { Component, inject } from '@angular/core';
import { Shopservice } from '../../../services/shopservice';
import {MatDivider, MatDividerModule} from '@angular/material/divider';
import {MatListModule, MatListOption, MatSelectionList} from '@angular/material/list';
import { MatAnchor } from '@angular/material/button';
@Component({
  selector: 'app-filters-dialog',
  imports: [MatDivider, MatSelectionList, MatListOption, MatAnchor],
  templateUrl: './filters-dialog.html',
  styleUrl: './filters-dialog.css',
})
export class FiltersDialog {
  protected shopServices = inject(Shopservice)
}
