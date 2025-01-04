import { Component, OnInit } from '@angular/core';
import { Menu } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { Avatar } from 'primeng/avatar';
import { AvatarGroup } from 'primeng/avatargroup';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin-menu',
  standalone: true,
  imports: [Menu, BadgeModule, OverlayBadgeModule, Avatar, AvatarGroup],
  templateUrl: './admin-menu.component.html',
  styleUrl: './admin-menu.component.scss'
})
export class AdminMenuComponent implements OnInit{

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
                    icon: 'pi pi-home'
                }
            ]
        },
        {
            label: 'Configuracion',
            items: [
                {
                    label: 'Categorias',
                    icon: 'pi pi-cog'
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
