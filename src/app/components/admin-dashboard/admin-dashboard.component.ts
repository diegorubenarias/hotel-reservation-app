import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { AdminMenuComponent } from '../admin-menu/admin-menu.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [TableModule, AdminHeaderComponent, AdminMenuComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

}
