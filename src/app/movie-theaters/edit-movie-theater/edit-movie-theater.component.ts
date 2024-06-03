import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersCreationDTO } from '../movie-theater.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrl: './edit-movie-theater.component.css'
})
export class EditMovieTheaterComponent  implements OnInit {
  constructor(private activatedRoute: ActivatedRoute){}

model:movieTheatersCreationDTO = {name:"testMovieTheater"}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      // alert(params['id'])
    })
  }
  saveChanges(movieTheater:movieTheatersCreationDTO){
   
  }


}
