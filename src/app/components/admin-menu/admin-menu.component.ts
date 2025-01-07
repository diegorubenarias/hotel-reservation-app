import { Component, inject, OnInit } from '@angular/core';
import { Menu } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { Avatar } from 'primeng/avatar';
import { AvatarGroup } from 'primeng/avatargroup';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  standalone: true,
  imports: [Menu, BadgeModule, OverlayBadgeModule, Avatar, AvatarGroup],
  templateUrl: './admin-menu.component.html',
  styleUrl: './admin-menu.component.scss'
})
export class AdminMenuComponent implements OnInit{

  router = inject(Router);

  items: MenuItem[] | undefined ;
  ngOnInit() {
    this.items = [
        {
            separator: true
        },
        {
            label: 'Inicio',
            items: [
                {
                    label: 'Tablero',
                    icon: 'pi pi-home',
                    command: () => {
                      this.router.navigate(['/admin-dashboard/home']);
                    }
                }
            ]
        },
        {
            label: 'Configuracion',
            items: [
                  {
                    label: 'Tipo de Inmueble',
                    icon: 'pi pi-cog',
                    command: () => {
                      this.router.navigate(['/admin-dashboard/realStateType']);
                    }
                },
                {
                    label: 'Tipos de habitacion',
                    icon: 'pi pi-cog',
                    command: () => {
                      this.router.navigate(['/admin-dashboard/categories']);
                    }
                },
                {
                  label: 'Habitacion',
                  icon: 'pi pi-cog',
                  command: () => {
                    this.router.navigate(['/admin-dashboard/roomTypes']);
                  }
                },
                {
                  label: 'Inmueble',
                  icon: 'pi pi-cog',
                  command: () => {
                    // Add your router redirection logic here
                  }
                },
                {
                    label: 'Cerrar Sesion',
                    icon: 'pi pi-sign-out',
                    shortcut: '⌘+Q'
                }
            ]
        },
        {
            separator: true
        }
    ];
}

  

}
