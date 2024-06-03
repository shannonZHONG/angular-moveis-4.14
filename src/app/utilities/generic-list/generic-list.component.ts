import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrl: './generic-list.component.css'
})
export class GenericListComponent {

  @Input()
  list;
  ngOnInit():void{
    
  }

}
