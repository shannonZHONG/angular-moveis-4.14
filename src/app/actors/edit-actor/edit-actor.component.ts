import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreattionDTO, actorDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrl: './edit-actor.component.css'
})
export class EditActorComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute){}

  model:actorDTO ={name:"Tom Holland", dateOfBirth:new Date(),
  biography:"default value",
  picture:"https://th.bing.com/th/id/OIP.RgAVXeYE3WsnWQFzNkf2RwAAAA?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7 "}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      // alert(params['id'])
    })
  }
  saveChanges(actorCreattionDTO: actorCreattionDTO){
   console.log(actorCreattionDTO);
  }
 

  }


