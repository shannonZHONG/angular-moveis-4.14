import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrl: './movie-filter.component.css'
})
export class MovieFilterComponent implements OnInit {

constructor(private formBuilder:FormBuilder){}
form:FormGroup;

genres=[{id:1,name:"Drama"},  {id:2,name:"Action"}];

movies =[
  {title:"Spider-Man",poster:"https://th.bing.com/th/id/OIP.GL8ZDMW6N8O-WkjZV1nHvAHaK-?w=202&h=300&c=7&r=0&o=5&dpr=1.3&pid=1.7  "},
  {title:"Leap Year",poster:"https://www.bing.com/th/id/OIP.JxIWyxWAawbIsRyshEPHpQDqEs?w=134&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7 "}
]

originalMovies = this.movies;
ngOnInit(): void {
  this.form = this.formBuilder.group({
    title:'',
    genreId:0,
    upcomingRelease:false,
    inTheaters:false
  });

  this.form.valueChanges
      .subscribe(values => {
        this.movies = this.originalMovies;
        this.filterMovies(values);
      });

}

filterMovies(values: any){
  if (values.title){
    this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
  }
}
clearForm(){
 this.form.reset();
}

}
