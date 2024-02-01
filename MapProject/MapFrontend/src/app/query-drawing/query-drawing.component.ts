import { Component, AfterViewInit, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { QueryDrawingService } from '../services/query-drawing.service';

@Component({
  selector: 'app-query-drawing',
  templateUrl: './query-drawing.component.html',
  styleUrls: ['./query-drawing.component.css']
})
export class QueryDrawingComponent implements OnInit {
  drawings: any[] = [];
  modalRef: BsModalRef | undefined;

  columns: any[] = [
    { prop: 'name', name: 'Name' },
    { prop: 'number', name: 'Number' },
    { prop: 'coordinates', name: 'Coordinates' },
  ];

  constructor(private queryDrawingService: QueryDrawingService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.queryDrawings();
  }

  private queryDrawings(): void {
    this.queryDrawingService.queryDrawings().subscribe(
      (drawings: any) => {
        this.drawings = drawings;
      },
      (error: any) => {
        console.error('Error querying drawings:', error);
      }
    );
  }

  openModal(template: TemplateRef<any>): void {
    if (this.modalRef) {
      this.modalRef.hide();
    }

    this.modalRef = this.modalService.show(template);
  }
}