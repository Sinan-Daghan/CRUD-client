import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
    <app-login *ngIf="!tableEnabled" (loginClicked)="enableTable()"></app-login>
    <app-table *ngIf="tableEnabled"></app-table>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'client-app';
  tableEnabled = false;

  enableTable() {
    this.tableEnabled = true;
  }
}
