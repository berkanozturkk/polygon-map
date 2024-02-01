import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { OSM, Vector as VectorSource } from 'ol/source';
import Feature from 'ol/Feature';
import Polygon from 'ol/geom/Polygon';
import { fromLonLat } from 'ol/proj';
import { Draw } from 'ol/interaction';
import { DrawingService } from '../services/drawing.service';
import VectorLayer from 'ol/layer/Vector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';



interface Coordinate {
  longitude: number;
  latitude: number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map!: Map;
  drawings: any[] = [];
  drawInteraction: any;
  drawingForm: FormGroup;
  showForm = false;
  
  constructor(
    private fb: FormBuilder,
    private drawingService: DrawingService,
    ) {
    this.drawingForm = this.fb.group({
      name: ['', Validators.required],
      number: [0, Validators.required],
      coordinates: [[]]
    });
    
  }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = new Map({
      view: new View({
        center: fromLonLat([35, 39]),
        zoom: 6
      }),
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: 'map',
    });
  }



  startDrawing(): void {
  
    this.drawInteraction = new Draw({
      source: new VectorSource(),
      type: 'Polygon',
    });
  
    this.map.addInteraction(this.drawInteraction);
  
    this.drawInteraction.on('drawend', (event: any) => {
      const coordinates = event.feature.getGeometry().getCoordinates()[0].slice(0, -1).map(
        (coord: any) => ({ latitude: coord[1], longitude: coord[0] })
      );
      this.showForm = true;
      this.drawingForm.patchValue({ coordinates });
      console.log(coordinates);
      
      
    });
    
  }
  submitForm(): void {
    if (this.drawingForm.valid) {
      const drawingData = this.drawingForm.value;
      this.drawingService.addDrawing(drawingData).subscribe(
        (response) => {
          window.alert('Drawing Added Successfully');
          this.showForm = false; 
          this.drawingForm.reset(); 
        },
        (error) => {
          console.error('Error adding drawing:', error);
        }
      );
    }
  }
  
}