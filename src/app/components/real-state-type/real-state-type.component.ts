import { Component } from '@angular/core';
import { RealStateModel } from '../../models/real-state.model';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-real-state-type',
  standalone: true,
  imports: [TableModule],
  templateUrl: './real-state-type.component.html',
  styleUrl: './real-state-type.component.scss'
})
export class RealStateTypeComponent {
  types: RealStateModel[] = [];

}
