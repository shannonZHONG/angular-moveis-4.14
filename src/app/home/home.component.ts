import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit(): void {
    this.moviesInTheaters = [{
  
     title:"Spider-Man",
     releaseDate:new Date(),
     price:10.99,
     poster:"https://th.bing.com/th/id/OIP.GL8ZDMW6N8O-WkjZV1nHvAHaK-?w=202&h=300&c=7&r=0&o=5&dpr=1.3&pid=1.7 "
   },
   {
 
     title:"Leap Year",
     releaseDate:new Date("2010-8-6"),
     price:9.99,
     poster:"https://www.bing.com/th/id/OIP.JxIWyxWAawbIsRyshEPHpQDqEs?w=134&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7 "
    
 
   }
 
 
 ]
 
   this.moviesFutureReleases=[];
 
   }
  
   moviesInTheaters;
   moviesFutureReleases;
}
