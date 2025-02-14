import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() headers: string[] = [];
  @Input() items: any[] = [];

  objectKeys = Object.keys;

  trackBy(index: number, item: any): any {
    return item.id;
  }
}

