import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {

  ngOnInit(): void {

   
   }
   // @input  making a property with @input = making a parameter
   // pass the parameter to the two components 
   @Input() 

   movies;

   remove(index:number){
    this.movies.splice(index,1);
   }
}
