import { Component, OnInit } from '@angular/core';
import { movieTheatersCreationDTO } from '../movie-theater.model';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrl: './create-movie-theater.component.css'
})
export class CreateMovieTheaterComponent  implements OnInit{

  ngOnInit(): void {
   
  }

  saveChanges(movieTheater: movieTheatersCreationDTO){
    console.log(movieTheater);
  }
}
