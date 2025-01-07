import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminDashboardDataComponent } from './components/admin-dashboard-data/admin-dashboard-data.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { RealStateTypeComponent } from './components/real-state-type/real-state-type.component';
import { RoomTypesComponent } from './components/room-types/room-types.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'admin-dashboard', 
        component: AdminDashboardComponent,
        children: [
            {path: 'home', component: AdminDashboardDataComponent},
            {path: 'categories', component: CategoriesListComponent},
            {path: 'realStateType', component: RealStateTypeComponent},
            {path: 'roomTypes', component: RoomTypesComponent}
        ]
    
    },
];
