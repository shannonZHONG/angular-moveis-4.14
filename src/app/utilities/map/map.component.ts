import { Component, OnInit } from '@angular/core';
import { LeafletMouseEvent, Marker, latLng, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
    
  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
        maxZoom: 18, 
      attribution: 'Angular Movies' })
    ],
    zoom: 14,
    center: latLng(18.473564631048617,  -69.93999481201173)
  };
 

  layers:Marker<any>[] =[];

  handleMapClick(event:LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({latitude, longitude});
    this.layers = [];
    this.layers.push(marker([latitude, longitude]));
   

  }

}
