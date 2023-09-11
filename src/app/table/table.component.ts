import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { GetService } from '../services/get.service';
import * as _ from 'lodash';

export interface Project {
  id: number;
  reference: string;
  description: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})

export class TableComponent {

  data: any;
  editState: boolean = false;
  isRowSelected: boolean = false;
  projects: any;

  constructor(private postService: PostService,
              private getService: GetService) { }

  ngOnInit(): void {
    this.disableEdit();
    this.getService.readData().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }

  disableEdit() {
    this.editState = false;
  }
  enableEdit() {
    this.editState = true;
  }

  updateTableData(data: any) {
    this.projects = data;
  }

  selectedRowAndCopyEqual() {
    return _.isEqual(this.selectedRow, this.copySelectedRow);
  }

  rowClick(row: any) {
    if (!this.editState) return;

    this.isRowSelected = true;
    this.selectedRow = row;

    this.copySelectedRow = JSON.parse(JSON.stringify(this.selectedRow));
  }

  updateRow(): void {
    if (!this.editState || !this.isRowSelected) return;
    if (this.selectedRowAndCopyEqual()) return;

    this.postService.updateRow(this.copySelectedRow).subscribe({
      next: (data) => {
        this.updateTableData(data);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    })
  }

  createRow(): void {
    if (!this.editState || !this.isRowSelected) return;
    console.log('OK');

    if (this.selectedRowAndCopyEqual()) return;
    console.log('OK');

    this.postService.createRow(this.copySelectedRow).subscribe({
      next: (data) => {
        this.updateTableData(data);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    })
  }

  deleteRow(): void {
    if (!this.editState || !this.isRowSelected) return;
    if (!(this.selectedRowAndCopyEqual())) return;

    this.postService.deleteRow(this.copySelectedRow).subscribe({
      next: (data) => {
        this.updateTableData(data);
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }

  selectedRow: Project = { id: 0, reference: '', description: '' };
  copySelectedRow: Project = { id: 0, reference: '', description: '' };

  updateId(inputId: number) {
    this.copySelectedRow.id = inputId;
  }

  updateReference(inputReference: string) {
    this.copySelectedRow.reference = inputReference;
  }

  updateDescription(inputDescription: string) {
    this.copySelectedRow.description = inputDescription;
  }

  displayedColumns: string[] = ['id', 'reference', 'description'];
}