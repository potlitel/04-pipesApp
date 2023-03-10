import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      // {
      //   label: 'File',
      //   items: [
      //     {
      //       label: 'New',
      //       icon: 'pi pi-fw pi-plus',
      //       items: [{ label: 'Project' }, { label: 'Other' }],
      //     },
      //     { label: 'Open' },
      //     { label: 'Quit' },
      //   ],
      // },
      // {
      //   label: 'Edit',
      //   icon: 'pi pi-fw pi-pencil',
      //   items: [
      //     { label: 'Delete', icon: 'pi pi-fw pi-trash' },
      //     { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
      //   ],
      // },
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes',
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
      },
    ];
  }
}
