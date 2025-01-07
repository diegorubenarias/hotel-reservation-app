import { Component } from '@angular/core';
import { CategoryModel } from '../../models/category.model';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [TableModule],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss'
})
export class CategoriesListComponent {
  types: CategoryModel[] = [];

}
