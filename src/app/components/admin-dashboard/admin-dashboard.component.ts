import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { AdminMenuComponent } from '../admin-menu/admin-menu.component';
import { Pages } from '../../utils/pages';
import { CategoriesListComponent } from '../categories-list/categories-list.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [TableModule, AdminHeaderComponent, AdminMenuComponent, CategoriesListComponent, CommonModule,
    RouterOutlet
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit {

  currentPage: string | undefined;
  categories: any[] = [];
  ngOnInit(): void {
    this.currentPage = Pages.HOME
  }


}
