import { Component, OnDestroy, OnInit } from '@angular/core';
import { actorCreattionDTO } from '../actors.model';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrl: './create-actor.component.css'
})
export class CreateActorComponent implements OnInit {
constructor(){}
ngOnInit(): void {
}

saveChanges(actorCreattionDTO: actorCreattionDTO){
 console.log(actorCreattionDTO);
}
}
